import { useEffect, useRef } from "react";

const LINE_DISTANCE = 150;
const GRAB_DISTANCE = 140;
const BASE_OPACITY = 0.5;
const LINE_OPACITY = 0.35;
const COLOR = "255, 255, 255";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

export function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const container = canvas.parentElement as HTMLElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    let animationId = 0;
    let dpr = 1;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];

    const mouse = { x: null as number | null, y: null as number | null };

    function resize() {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = window.devicePixelRatio || 1;
      canvas!.width = Math.floor(width * dpr);
      canvas!.height = Math.floor(height * dpr);
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      const area = width * height;
      const count = Math.min(80, Math.max(30, Math.floor(area / 14000)));
      initParticles(count);
    }

    function initParticles(count: number) {
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        size: Math.random() * 2 + 2,
      }));
    }

    function spawnParticles(x: number, y: number, n = 4) {
      for (let i = 0; i < n; i++) {
        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 4,
          vy: (Math.random() - 0.5) * 4,
          size: Math.random() * 2 + 2,
        });
      }
    }

    function handleMouseMove(e: MouseEvent) {
      const rect = container.getBoundingClientRect();
      const newX = e.clientX - rect.left;
      const newY = e.clientY - rect.top;

      mouse.x = newX;
      mouse.y = newY;
    }

    function handleMouseLeave() {
      mouse.x = null;
      mouse.y = null;
    }

    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      if (target?.closest('a, button, input, textarea, [role="button"]')) return;

      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      spawnParticles(x, y, 4);
    }

    function update() {
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        else if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        else if (p.y > height) p.y = 0;

        p.vx *= 0.995;
        p.vy *= 0.995;

        const speed = Math.hypot(p.vx, p.vy);
        if (speed < 0.25) {
          p.vx += (Math.random() - 0.5) * 0.05;
          p.vy += (Math.random() - 0.5) * 0.05;
        } else if (speed > 2.5) {
          p.vx *= 0.96;
          p.vy *= 0.96;
        }
      }
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINE_DISTANCE) {
            const opacity = (1 - dist / LINE_DISTANCE) * LINE_OPACITY;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${COLOR}, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      if (mouse.x !== null && mouse.y !== null) {
        for (const p of particles) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy);
          if (dist < GRAB_DISTANCE) {
            const opacity = 1 - dist / GRAB_DISTANCE;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${COLOR}, ${opacity})`;
            ctx.lineWidth = 1.2;
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(p.x, p.y);
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        ctx.beginPath();
        ctx.fillStyle = `rgba(${COLOR}, ${BASE_OPACITY})`;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function loop() {
      update();
      draw();
      animationId = requestAnimationFrame(loop);
    }

    resize();
    loop();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("click", handleClick);

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0"
      aria-hidden="true"
    />
  );
}
