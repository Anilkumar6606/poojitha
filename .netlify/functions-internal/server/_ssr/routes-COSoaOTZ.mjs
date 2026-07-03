import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-COSoaOTZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LINE_DISTANCE = 150;
var GRAB_DISTANCE = 140;
var BASE_OPACITY = .5;
var LINE_OPACITY = .35;
var COLOR = "255, 255, 255";
function HeroParticles() {
	const canvasRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const container = canvas.parentElement;
		const ctx = canvas.getContext("2d");
		let animationId = 0;
		let dpr = 1;
		let width = 0;
		let height = 0;
		let particles = [];
		const mouse = {
			x: null,
			y: null
		};
		function resize() {
			const rect = container.getBoundingClientRect();
			width = rect.width;
			height = rect.height;
			dpr = window.devicePixelRatio || 1;
			canvas.width = Math.floor(width * dpr);
			canvas.height = Math.floor(height * dpr);
			canvas.style.width = `${width}px`;
			canvas.style.height = `${height}px`;
			ctx.setTransform(1, 0, 0, 1, 0, 0);
			ctx.scale(dpr, dpr);
			const area = width * height;
			initParticles(Math.min(80, Math.max(30, Math.floor(area / 14e3))));
		}
		function initParticles(count) {
			particles = Array.from({ length: count }, () => ({
				x: Math.random() * width,
				y: Math.random() * height,
				vx: (Math.random() - .5) * 1.2,
				vy: (Math.random() - .5) * 1.2,
				size: Math.random() * 2 + 2
			}));
		}
		function spawnParticles(x, y, n = 4) {
			for (let i = 0; i < n; i++) particles.push({
				x,
				y,
				vx: (Math.random() - .5) * 4,
				vy: (Math.random() - .5) * 4,
				size: Math.random() * 2 + 2
			});
		}
		function handleMouseMove(e) {
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
		function handleClick(e) {
			if (e.target?.closest("a, button, input, textarea, [role=\"button\"]")) return;
			const rect = container.getBoundingClientRect();
			spawnParticles(e.clientX - rect.left, e.clientY - rect.top, 4);
		}
		function update() {
			for (const p of particles) {
				p.x += p.vx;
				p.y += p.vy;
				if (p.x < 0) p.x = width;
				else if (p.x > width) p.x = 0;
				if (p.y < 0) p.y = height;
				else if (p.y > height) p.y = 0;
				p.vx *= .995;
				p.vy *= .995;
				const speed = Math.hypot(p.vx, p.vy);
				if (speed < .25) {
					p.vx += (Math.random() - .5) * .05;
					p.vy += (Math.random() - .5) * .05;
				} else if (speed > 2.5) {
					p.vx *= .96;
					p.vy *= .96;
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
			if (mouse.x !== null && mouse.y !== null) for (const p of particles) {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref: canvasRef,
		className: "pointer-events-none absolute inset-0 z-0",
		"aria-hidden": "true"
	});
}
var hero_portrait_default = "/assets/hero-portrait-C1SitSOZ.jpg";
var NAV = [
	{
		id: "about",
		label: "About"
	},
	{
		id: "expertise",
		label: "Expertise"
	},
	{
		id: "experience",
		label: "Experience"
	},
	{
		id: "education",
		label: "Education"
	},
	{
		id: "certifications",
		label: "Certifications"
	},
	{
		id: "contact",
		label: "Contact"
	}
];
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Expertise, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Education, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Certifications, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function Nav() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/60",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x flex items-center justify-between h-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-grid place-items-center w-8 h-8 rounded-sm bg-primary text-primary-foreground font-serif text-base",
						children: "P"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-serif text-lg leading-none",
						children: "Satti Baby Poojitha"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden md:flex items-center gap-8",
					children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `#${n.id}`,
						className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
						children: n.label
					}, n.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#contact",
					className: "hidden md:inline-flex items-center px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-colors",
					children: "Get in touch"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setOpen(!open),
					"aria-label": "Menu",
					className: "md:hidden p-2 text-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						width: "20",
						height: "20",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "1.5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 6h18M3 12h18M3 18h18" })
					})
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "md:hidden border-t border-border bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-x py-4 flex flex-col gap-3",
				children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `#${n.id}`,
					onClick: () => setOpen(false),
					className: "text-sm text-muted-foreground hover:text-foreground py-1",
					children: n.label
				}, n.id))
			})
		})]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative pt-28 md:pt-32 pb-20 md:pb-28 overflow-hidden",
		style: { background: "var(--gradient-hero)" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroParticles, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative z-10 container-x",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid md:grid-cols-12 gap-10 md:gap-16 items-center text-[oklch(0.97_0.005_250)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "eyebrow text-[var(--gold)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), "HR & Talent Acquisition"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-5 font-serif text-5xl md:text-7xl leading-[1.02]",
							children: [
								"Connecting talent",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"with ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
									className: "text-[var(--gold-soft)]",
									children: "opportunity"
								}),
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xl text-base md:text-lg text-[oklch(0.85_0.02_250)] leading-relaxed",
							children: "A dedicated HR professional passionate about recruitment and people operations. Experienced in end-to-end hiring, candidate engagement, and building meaningful connections between talent and organizations."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-9 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								className: "inline-flex items-center px-6 py-3 bg-[var(--gold)] text-[oklch(0.18_0.05_260)] font-medium rounded-sm hover:bg-[var(--gold-soft)] transition-colors",
								children: "Get in touch"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#experience",
								className: "inline-flex items-center px-6 py-3 border border-white/25 text-white rounded-sm hover:bg-white/10 transition-colors",
								children: "View experience"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 grid grid-cols-3 gap-6 max-w-md",
							children: [
								["2+", "Roles"],
								["End-to-End", "Hiring"],
								["HR", "Operations"]
							].map(([n, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-serif text-2xl md:text-3xl text-white",
									children: n
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs uppercase tracking-widest text-[oklch(0.78_0.02_250)] mt-1",
									children: l
								})]
							}, l))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative max-w-sm mx-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-4 rounded-full border border-[var(--gold)]/60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: hero_portrait_default,
							alt: "Satti Baby Poojitha, HR Professional",
							width: 1024,
							height: 1280,
							className: "relative w-full h-auto aspect-square rounded-full object-cover shadow-[var(--shadow-elegant)]"
						})]
					})
				})]
			})
		})]
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-x",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-[28px] border border-border bg-card shadow-[var(--shadow-card)] p-8 md:p-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid md:grid-cols-12 gap-12 md:gap-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "eyebrow",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), "About"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-serif text-4xl md:text-5xl text-ink",
							children: "A people-first professional eager to make an impact."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-7 md:col-start-6 space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Dedicated and enthusiastic HR professional with hands-on experience in recruitment and human resource operations. I am passionate about connecting the right talent with the right opportunities while ensuring a seamless and positive candidate experience." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I believe that effective HR is built on strong communication, empathy, and attention to detail. Whether it is sourcing candidates, coordinating interviews, or supporting onboarding processes, I bring a proactive attitude and a genuine desire to learn and grow in the HR domain." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-6 border-t border-border grid grid-cols-2 gap-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs uppercase tracking-widest text-muted-foreground",
									children: "Currently"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-1 font-medium text-foreground",
									children: [
										"HR Executive",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"VISYS Cloud Technology"
									]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs uppercase tracking-widest text-muted-foreground",
									children: "Location"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 font-medium text-foreground",
									children: "Amalapuram, Andhra Pradesh"
								})] })]
							})
						]
					})]
				})
			})
		})
	});
}
var EXPERTISE = [
	{
		t: "Recruitment & Talent Acquisition",
		d: "End-to-end hiring including candidate sourcing, screening, and coordination to find the best-fit talent for organizational needs."
	},
	{
		t: "Candidate Sourcing & Screening",
		d: "Proficient in using job portals, internal databases, and social media platforms to identify and evaluate potential candidates."
	},
	{
		t: "Interview Coordination",
		d: "Scheduling and coordinating interviews while maintaining clear communication with candidates and hiring managers throughout the process."
	},
	{
		t: "HR Operations Support",
		d: "Assisting with onboarding, documentation, employee engagement activities, and day-to-day HR administrative tasks."
	},
	{
		t: "Communication & Interpersonal Skills",
		d: "Strong verbal and written communication abilities that foster positive relationships with candidates, teams, and stakeholders."
	},
	{
		t: "Relationship Building",
		d: "Building trust and rapport with candidates and colleagues to create a collaborative and supportive work environment."
	}
];
function Expertise() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "expertise",
		className: "py-24 md:py-32 bg-secondary",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-x",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[28px] border border-border bg-background shadow-[var(--shadow-card)] p-8 md:p-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "eyebrow",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), "Key Skills"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-serif text-4xl md:text-5xl text-ink",
						children: "Core competencies that drive results."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border overflow-hidden rounded-2xl",
					children: EXPERTISE.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "bg-background p-8 md:p-10 group hover:bg-card transition-colors",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-serif text-3xl text-[var(--gold)]",
								children: String(i + 1).padStart(2, "0")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-serif text-2xl text-ink",
								children: e.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-muted-foreground leading-relaxed",
								children: e.d
							})
						]
					}, e.t))
				})]
			})
		})
	});
}
var TIMELINE = [{
	y: "October 2025 – Present",
	r: "HR Executive",
	c: "VISYS Cloud Technology",
	d: "Managing recruitment and end-to-end hiring processes. Sourcing candidates through job portals, databases, and social media platforms. Screening and shortlisting candidates based on organizational requirements. Coordinating interviews and maintaining communication with candidates. Assisting in onboarding and employee engagement activities. Supporting HR operations and documentation processes."
}, {
	y: "May 2024 – June 2024",
	r: "Full Stack Developer Intern",
	c: "APSCHE",
	d: "Developed and optimized a web application using HTML, CSS, and JavaScript. Improved application performance and enhanced user experience by 30%. Collaborated with the development team for testing and implementation."
}];
function Experience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "experience",
		className: "py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-x",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[28px] border border-border bg-card shadow-[var(--shadow-card)] p-8 md:p-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "eyebrow",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), "Experience"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-serif text-4xl md:text-5xl text-ink",
						children: "Growing with every opportunity."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: "mt-16 relative max-w-4xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute left-[7px] md:left-2 top-2 bottom-2 w-px bg-border",
						"aria-hidden": true
					}), TIMELINE.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "relative pl-10 md:pl-16 pb-12 last:pb-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-0 top-2 w-4 h-4 rounded-full bg-background border-2 border-[var(--gold)]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-widest text-[var(--gold)] font-medium",
								children: t.y
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-serif text-2xl md:text-3xl text-ink",
								children: t.r
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-medium text-foreground/80 mt-0.5",
								children: t.c
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-muted-foreground leading-relaxed max-w-2xl",
								children: t.d
							})
						]
					}, t.y))]
				})]
			})
		})
	});
}
var EDUCATION = [
	{
		degree: "B.Tech in Electronics & Communication Engineering",
		school: "Bonam Venkata Chalamayya Engineering College",
		detail: "2021 – 2025 | CGPA: 78.8"
	},
	{
		degree: "Intermediate (Board of Intermediate Education)",
		school: "Board of Intermediate Education",
		detail: "2019 – 2021 | Marks: 646/1000"
	},
	{
		degree: "Secondary School Certificate (SSC)",
		school: "Secondary School Certificate",
		detail: "2018 – 2019 | CGPA: 9.5"
	}
];
function EducationCard({ edu, isLeft }) {
	const [isActive, setIsActive] = (0, import_react.useState)(false);
	const [pointer, setPointer] = (0, import_react.useState)({
		x: 50,
		y: 50
	});
	const handlePointerMove = (event) => {
		const bounds = event.currentTarget.getBoundingClientRect();
		setPointer({
			x: (event.clientX - bounds.left) / bounds.width * 100,
			y: (event.clientY - bounds.top) / bounds.height * 100
		});
	};
	const cardStyle = {
		"--mx": `${pointer.x}%`,
		"--my": `${pointer.y}%`
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `relative md:grid md:grid-cols-2 md:gap-8 ${isLeft ? "" : "md:direction-rtl"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-4 h-4 rounded-full bg-background border-2 border-[var(--gold)]" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "md:hidden absolute left-0 top-6 z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-4 h-4 rounded-full bg-background border-2 border-[var(--gold)]" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `pl-10 md:pl-0 ${isLeft ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group relative overflow-hidden rounded-2xl border border-white/12 bg-white/[0.04] p-6 md:p-7 shadow-[0_20px_40px_-32px_rgba(0,0,0,0.55)] transition duration-300 hover:-translate-y-1 hover:border-[color-mix(in_oklab,var(--gold)_42%,white)]",
					onPointerEnter: () => setIsActive(true),
					onPointerLeave: () => setIsActive(false),
					onPointerMove: handlePointerMove,
					style: cardStyle,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"aria-hidden": "true",
							className: "pointer-events-none absolute inset-0 transition-opacity duration-300 group-hover:opacity-100",
							style: {
								background: "radial-gradient(circle at var(--mx) var(--my), color-mix(in oklab, var(--gold) 28%, transparent) 0%, color-mix(in oklab, var(--gold-soft) 16%, transparent) 18%, transparent 55%)",
								opacity: isActive ? 1 : 0
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-[color-mix(in_oklab,var(--gold)_28%,white)]/40 transition-colors" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative border-t border-white/15 pt-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-serif text-2xl md:text-3xl text-[var(--gold-soft)]",
									children: edu.detail.split("|")[1]?.trim() || edu.detail
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 text-lg font-medium text-white",
									children: edu.degree
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-sm text-[oklch(0.85_0.02_250)]",
									children: edu.school
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-sm text-[oklch(0.85_0.02_250)]",
									children: edu.detail.split("|")[0]?.trim()
								})
							]
						})
					]
				})
			})
		]
	});
}
function Education() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "education",
		className: "py-24 md:py-32 relative text-[oklch(0.97_0.005_250)]",
		style: { background: "linear-gradient(180deg, oklch(0.2 0.06 262 / 0.92), oklch(0.18 0.07 262 / 0.96))" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroParticles, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_60%)] pointer-events-none",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-x",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_30px_70px_-40px_rgba(0,0,0,0.72)] backdrop-blur-xl p-8 md:p-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "eyebrow",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), "Education"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 font-serif text-4xl md:text-5xl",
								children: "A strong academic foundation."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-[oklch(0.82_0.02_250)] leading-relaxed",
								children: "Consistent academic excellence with a solid technical background in Electronics & Communication Engineering."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-16 relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/20 -translate-x-1/2",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "md:hidden absolute left-[7px] top-0 bottom-0 w-px bg-white/20",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-12 md:space-y-0",
								children: EDUCATION.map((edu, i) => {
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EducationCard, {
										edu,
										isLeft: i % 2 === 0
									}, edu.degree);
								})
							})
						]
					})]
				})
			})
		]
	});
}
var CERTS = [{
	t: "Infosys Certification",
	d: "Python Programming"
}, {
	t: "AWS Certification",
	d: "Amazon Web Application"
}];
function Certifications() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "certifications",
		className: "py-24 md:py-32 bg-secondary",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-x",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[28px] border border-border bg-background shadow-[var(--shadow-card)] p-8 md:p-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "eyebrow",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), "Certifications"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-serif text-4xl md:text-5xl text-ink",
							children: "Credentials & continuous learning."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14 grid sm:grid-cols-2 gap-6 max-w-3xl",
						children: CERTS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "bg-card p-7 rounded-2xl border border-border shadow-[var(--shadow-card)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "shrink-0 w-10 h-10 rounded-sm grid place-items-center bg-primary text-primary-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										width: "18",
										height: "18",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "1.5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2l2.5 5 5.5.8-4 3.9.9 5.5L12 14.7 7.1 17.2l.9-5.5-4-3.9 5.5-.8L12 2z" })
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-xl text-ink leading-tight",
									children: c.t
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1.5 text-sm text-muted-foreground leading-relaxed",
									children: c.d
								})] })]
							})
						}, c.t))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-16 grid sm:grid-cols-2 gap-8 max-w-3xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-card p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "eyebrow",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), "Languages"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 flex flex-wrap gap-3",
								children: ["English", "Telugu"].map((lang) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex items-center px-4 py-2 bg-background border border-border rounded-sm text-foreground font-medium",
									children: lang
								}, lang))
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-card p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "eyebrow",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), "Personal Interests"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 flex flex-wrap gap-3",
								children: [
									"Reading Books",
									"Listening to Music",
									"Cooking"
								].map((interest) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex items-center px-4 py-2 bg-background border border-border rounded-sm text-foreground font-medium",
									children: interest
								}, interest))
							})]
						})]
					})
				]
			})
		})
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-x",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-[28px] border border-border bg-card shadow-[var(--shadow-card)] p-8 md:p-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid md:grid-cols-12 gap-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "eyebrow",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }), "Contact"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 font-serif text-4xl md:text-5xl text-ink",
								children: "Let's connect and grow together."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-muted-foreground leading-relaxed",
								children: "I am open to HR and recruitment opportunities where I can contribute, learn, and grow. Feel free to reach out — I would love to hear from you."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 space-y-4 rounded-2xl border border-border bg-background p-5",
								children: [
									["Email", "poojithasatti5121@gmail.com"],
									["Phone", "+91 83329 33697"],
									["Location", "Amalapuram, Andhra Pradesh"]
								].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between border-b border-border pb-3 last:border-b-0 last:pb-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs uppercase tracking-widest text-muted-foreground",
										children: k
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-foreground font-medium text-right",
										children: v
									})]
								}, k))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 p-5 bg-background border border-border rounded-2xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs uppercase tracking-widest text-muted-foreground mb-2",
									children: "Address"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-foreground text-sm leading-relaxed",
									children: [
										"D.No. 2-84, Savarrapalem,",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Amalapuram Mandal,",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Dr. B.R. Ambedkar Konaseema District,",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Andhra Pradesh, India"
									]
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: (e) => {
							e.preventDefault();
							alert("Thank you for reaching out — I will get back to you shortly.");
						},
						className: "md:col-span-6 md:col-start-7 bg-background p-8 md:p-10 rounded-2xl border border-border shadow-[var(--shadow-card)] space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid sm:grid-cols-2 gap-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Full name",
									id: "name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Company",
									id: "company"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Email address",
								id: "email",
								type: "email"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "What would you like to discuss?",
								id: "msg",
								textarea: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "w-full inline-flex items-center justify-center px-6 py-3.5 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 transition-colors",
								children: "Send message"
							})
						]
					})]
				})
			})
		})
	});
}
function Field({ label, id, type = "text", textarea }) {
	const base = "w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		htmlFor: id,
		className: "block text-xs uppercase tracking-widest text-muted-foreground mb-2",
		children: label
	}), textarea ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		id,
		rows: 4,
		className: base
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		id,
		type,
		className: base
	})] });
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative overflow-hidden bg-primary text-primary-foreground py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroParticles, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)] pointer-events-none",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 container-x flex flex-col md:flex-row items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-serif text-lg",
					children: "Satti Baby Poojitha"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-xs uppercase tracking-widest text-primary-foreground/70",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" · HR & Talent Acquisition"
					]
				})]
			})
		]
	});
}
//#endregion
export { Index as component };
