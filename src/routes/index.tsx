import { createFileRoute } from "@tanstack/react-router";
import { useState, type CSSProperties, type PointerEvent as ReactPointerEvent } from "react";
import { HeroParticles } from "@/components/HeroParticles";
import heroPortrait from "@/assets/hero-portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Satti Baby Poojitha — HR Professional & Talent Acquisition Specialist" },
      { name: "description", content: "Portfolio of Satti Baby Poojitha — dedicated HR professional with hands-on experience in recruitment, talent acquisition, and human resource operations." },
      { property: "og:title", content: "Satti Baby Poojitha — HR Professional" },
      { property: "og:description", content: "HR professional specializing in recruitment, talent acquisition, and people operations." },
    ],
  }),
  component: Index,
});

const NAV = [
  { id: "about", label: "About" },
  { id: "expertise", label: "Expertise" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Expertise />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------- Nav ---------- */
function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/60">
      <div className="container-x flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-2">
          <span className="inline-grid place-items-center w-8 h-8 rounded-sm bg-primary text-primary-foreground font-serif text-base">P</span>
          <span className="font-serif text-lg leading-none">Satti Baby Poojitha</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-colors">
          Get in touch
        </a>
        <button onClick={() => setOpen(!open)} aria-label="Menu" className="md:hidden p-2 text-foreground">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-x py-4 flex flex-col gap-3">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-foreground py-1">
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="top" className="relative pt-28 md:pt-32 pb-20 md:pb-28 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <HeroParticles />
      <div className="relative z-10 container-x">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center text-[oklch(0.97_0.005_250)]">
          <div className="md:col-span-7">
            <p className="eyebrow text-[var(--gold)]"><span className="gold-rule"></span>HR &amp; Talent Acquisition</p>
            <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.02]">
              Connecting talent<br />
              with <em className="text-[var(--gold-soft)]">opportunity</em>.
            </h1>
            <p className="mt-6 max-w-xl text-base md:text-lg text-[oklch(0.85_0.02_250)] leading-relaxed">
              A dedicated HR professional passionate about recruitment and people operations.
              Experienced in end-to-end hiring, candidate engagement, and building
              meaningful connections between talent and organizations.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center px-6 py-3 bg-[var(--gold)] text-[oklch(0.18_0.05_260)] font-medium rounded-sm hover:bg-[var(--gold-soft)] transition-colors">
                Get in touch
              </a>
              <a href="#experience" className="inline-flex items-center px-6 py-3 border border-white/25 text-white rounded-sm hover:bg-white/10 transition-colors">
                View experience
              </a>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                ["2+", "Roles"],
                ["End-to-End", "Hiring"],
                ["HR", "Operations"],
              ].map(([n, l]) => (
                <div key={l} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-5">
                  <div className="font-serif text-2xl md:text-3xl text-white">{n}</div>
                  <div className="text-xs uppercase tracking-widest text-[oklch(0.78_0.02_250)] mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative max-w-sm mx-auto">
              <div className="absolute -inset-4 rounded-full border border-[var(--gold)]/60"></div>
              <img
                src={heroPortrait}
                alt="Satti Baby Poojitha, HR Professional"
                width={1024}
                height={1280}
                className="relative w-full h-auto aspect-square rounded-full object-cover shadow-[var(--shadow-elegant)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- About ---------- */
function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container-x">
        <div className="rounded-[28px] border border-border bg-card shadow-[var(--shadow-card)] p-8 md:p-12">
          <div className="grid md:grid-cols-12 gap-12 md:gap-20">
            <div className="md:col-span-4">
              <p className="eyebrow"><span className="gold-rule"></span>About</p>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl text-ink">A people-first professional eager to make an impact.</h2>
            </div>
            <div className="md:col-span-7 md:col-start-6 space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed">
              <p>
                Dedicated and enthusiastic HR professional with hands-on experience in recruitment
                and human resource operations. I am passionate about connecting the right talent
                with the right opportunities while ensuring a seamless and positive candidate experience.
              </p>
              <p>
                I believe that effective HR is built on strong communication, empathy, and attention
                to detail. Whether it is sourcing candidates, coordinating interviews, or supporting
                onboarding processes, I bring a proactive attitude and a genuine desire to learn and grow
                in the HR domain.
              </p>
              <div className="pt-6 border-t border-border grid grid-cols-2 gap-6">
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Currently</div>
                  <div className="mt-1 font-medium text-foreground">HR Executive<br />VISYS Cloud Technology</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Location</div>
                  <div className="mt-1 font-medium text-foreground">Amalapuram, Andhra Pradesh</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Expertise ---------- */
const EXPERTISE = [
  { t: "Recruitment & Talent Acquisition", d: "End-to-end hiring including candidate sourcing, screening, and coordination to find the best-fit talent for organizational needs." },
  { t: "Candidate Sourcing & Screening", d: "Proficient in using job portals, internal databases, and social media platforms to identify and evaluate potential candidates." },
  { t: "Interview Coordination", d: "Scheduling and coordinating interviews while maintaining clear communication with candidates and hiring managers throughout the process." },
  { t: "HR Operations Support", d: "Assisting with onboarding, documentation, employee engagement activities, and day-to-day HR administrative tasks." },
  { t: "Communication & Interpersonal Skills", d: "Strong verbal and written communication abilities that foster positive relationships with candidates, teams, and stakeholders." },
  { t: "Relationship Building", d: "Building trust and rapport with candidates and colleagues to create a collaborative and supportive work environment." },
];

function Expertise() {
  return (
    <section id="expertise" className="py-24 md:py-32 bg-secondary">
      <div className="container-x">
        <div className="rounded-[28px] border border-border bg-background shadow-[var(--shadow-card)] p-8 md:p-12">
          <div className="max-w-2xl">
            <p className="eyebrow"><span className="gold-rule"></span>Key Skills</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-ink">Core competencies that drive results.</h2>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border overflow-hidden rounded-2xl">
            {EXPERTISE.map((e, i) => (
              <article key={e.t} className="bg-background p-8 md:p-10 group hover:bg-card transition-colors">
                <div className="font-serif text-3xl text-[var(--gold)]">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="mt-4 font-serif text-2xl text-ink">{e.t}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{e.d}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Experience timeline ---------- */
const TIMELINE = [
  {
    y: "October 2025 – Present",
    r: "HR Executive",
    c: "VISYS Cloud Technology",
    d: "Managing recruitment and end-to-end hiring processes. Sourcing candidates through job portals, databases, and social media platforms. Screening and shortlisting candidates based on organizational requirements. Coordinating interviews and maintaining communication with candidates. Assisting in onboarding and employee engagement activities. Supporting HR operations and documentation processes."
  },
  {
    y: "May 2024 – June 2024",
    r: "Full Stack Developer Intern",
    c: "APSCHE",
    d: "Developed and optimized a web application using HTML, CSS, and JavaScript. Improved application performance and enhanced user experience by 30%. Collaborated with the development team for testing and implementation."
  },
];

function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container-x">
        <div className="rounded-[28px] border border-border bg-card shadow-[var(--shadow-card)] p-8 md:p-12">
          <div className="max-w-2xl">
            <p className="eyebrow"><span className="gold-rule"></span>Experience</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-ink">Growing with every opportunity.</h2>
          </div>
          <ol className="mt-16 relative max-w-4xl">
            <div className="absolute left-[7px] md:left-2 top-2 bottom-2 w-px bg-border" aria-hidden></div>
            {TIMELINE.map((t) => (
              <li key={t.y} className="relative pl-10 md:pl-16 pb-12 last:pb-0">
                <span className="absolute left-0 top-2 w-4 h-4 rounded-full bg-background border-2 border-[var(--gold)]"></span>
                <div className="text-xs uppercase tracking-widest text-[var(--gold)] font-medium">{t.y}</div>
                <h3 className="mt-2 font-serif text-2xl md:text-3xl text-ink">{t.r}</h3>
                <div className="text-sm font-medium text-foreground/80 mt-0.5">{t.c}</div>
                <p className="mt-3 text-muted-foreground leading-relaxed max-w-2xl">{t.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------- Education ---------- */
const EDUCATION = [
  { degree: "B.Tech in Electronics & Communication Engineering", school: "Bonam Venkata Chalamayya Engineering College", detail: "2021 – 2025 | CGPA: 78.8" },
  { degree: "Intermediate (Board of Intermediate Education)", school: "Board of Intermediate Education", detail: "2019 – 2021 | Marks: 646/1000" },
  { degree: "Secondary School Certificate (SSC)", school: "Secondary School Certificate", detail: "2018 – 2019 | CGPA: 9.5" },
];

function EducationCard({
  edu,
  isLeft,
}: {
  edu: (typeof EDUCATION)[number];
  isLeft: boolean;
}) {
  const [isActive, setIsActive] = useState(false);
  const [pointer, setPointer] = useState({ x: 50, y: 50 });

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    setPointer({
      x: ((event.clientX - bounds.left) / bounds.width) * 100,
      y: ((event.clientY - bounds.top) / bounds.height) * 100,
    });
  };

  const cardStyle = {
    "--mx": `${pointer.x}%`,
    "--my": `${pointer.y}%`,
  } as CSSProperties;

  return (
    <div className={`relative md:grid md:grid-cols-2 md:gap-8 ${isLeft ? "" : "md:direction-rtl"}`}>
      <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 z-10">
        <span className="w-4 h-4 rounded-full bg-background border-2 border-[var(--gold)]" />
      </div>
      <div className="md:hidden absolute left-0 top-6 z-10">
        <span className="w-4 h-4 rounded-full bg-background border-2 border-[var(--gold)]" />
      </div>

      <div className={`pl-10 md:pl-0 ${isLeft ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"}`}>
        <div
          className="group relative overflow-hidden rounded-2xl border border-white/12 bg-white/[0.04] p-6 md:p-7 shadow-[0_20px_40px_-32px_rgba(0,0,0,0.55)] transition duration-300 hover:-translate-y-1 hover:border-[color-mix(in_oklab,var(--gold)_42%,white)]"
          onPointerEnter={() => setIsActive(true)}
          onPointerLeave={() => setIsActive(false)}
          onPointerMove={handlePointerMove}
          style={cardStyle}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: "radial-gradient(circle at var(--mx) var(--my), color-mix(in oklab, var(--gold) 28%, transparent) 0%, color-mix(in oklab, var(--gold-soft) 16%, transparent) 18%, transparent 55%)",
              opacity: isActive ? 1 : 0,
            }}
          />
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-[color-mix(in_oklab,var(--gold)_28%,white)]/40 transition-colors" />
          <div className="relative border-t border-white/15 pt-6">
            <div className="font-serif text-2xl md:text-3xl text-[var(--gold-soft)]">
              {edu.detail.split("|")[1]?.trim() || edu.detail}
            </div>
            <div className="mt-3 text-lg font-medium text-white">{edu.degree}</div>
            <div className="mt-1 text-sm text-[oklch(0.85_0.02_250)]">{edu.school}</div>
            <div className="mt-1 text-sm text-[oklch(0.85_0.02_250)]">{edu.detail.split("|")[0]?.trim()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Education() {
  return (
    <section id="education" className="py-24 md:py-32 relative text-[oklch(0.97_0.005_250)]" style={{ background: "linear-gradient(180deg, oklch(0.2 0.06 262 / 0.92), oklch(0.18 0.07 262 / 0.96))" }}>
      <HeroParticles />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_60%)] pointer-events-none" aria-hidden="true" />
      <div className="container-x">
        <div className="rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_30px_70px_-40px_rgba(0,0,0,0.72)] backdrop-blur-xl p-8 md:p-12">
          <div className="max-w-2xl">
            <p className="eyebrow"><span className="gold-rule"></span>Education</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">A strong academic foundation.</h2>
            <p className="mt-5 text-[oklch(0.82_0.02_250)] leading-relaxed">
              Consistent academic excellence with a solid technical background in Electronics &amp; Communication Engineering.
            </p>
          </div>

          <div className="mt-16 relative">
            {/* Central line - desktop only */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/20 -translate-x-1/2" aria-hidden="true" />
            {/* Mobile line */}
            <div className="md:hidden absolute left-[7px] top-0 bottom-0 w-px bg-white/20" aria-hidden="true" />

            <div className="space-y-12 md:space-y-0">
              {EDUCATION.map((edu, i) => {
                const isLeft = i % 2 === 0;
                return <EducationCard key={edu.degree} edu={edu} isLeft={isLeft} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Certifications ---------- */
const CERTS = [
  { t: "Infosys Certification", d: "Python Programming" },
  { t: "AWS Certification", d: "Amazon Web Application" },
];

function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-32 bg-secondary">
      <div className="container-x">
        <div className="rounded-[28px] border border-border bg-background shadow-[var(--shadow-card)] p-8 md:p-12">
          <div className="max-w-2xl">
            <p className="eyebrow"><span className="gold-rule"></span>Certifications</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-ink">Credentials &amp; continuous learning.</h2>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 gap-6 max-w-3xl">
            {CERTS.map((c) => (
              <div key={c.t} className="bg-card p-7 rounded-2xl border border-border shadow-[var(--shadow-card)]">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-sm grid place-items-center bg-primary text-primary-foreground">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2l2.5 5 5.5.8-4 3.9.9 5.5L12 14.7 7.1 17.2l.9-5.5-4-3.9 5.5-.8L12 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-ink leading-tight">{c.t}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid sm:grid-cols-2 gap-8 max-w-3xl">
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="eyebrow"><span className="gold-rule"></span>Languages</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {["English", "Telugu"].map((lang) => (
                  <span key={lang} className="inline-flex items-center px-4 py-2 bg-background border border-border rounded-sm text-foreground font-medium">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="eyebrow"><span className="gold-rule"></span>Personal Interests</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {["Reading Books", "Listening to Music", "Cooking"].map((interest) => (
                  <span key={interest} className="inline-flex items-center px-4 py-2 bg-background border border-border rounded-sm text-foreground font-medium">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container-x">
        <div className="rounded-[28px] border border-border bg-card shadow-[var(--shadow-card)] p-8 md:p-12">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <p className="eyebrow"><span className="gold-rule"></span>Contact</p>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl text-ink">Let's connect and grow together.</h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                I am open to HR and recruitment opportunities where I can contribute, learn, and grow.
                Feel free to reach out — I would love to hear from you.
              </p>
              <div className="mt-10 space-y-4 rounded-2xl border border-border bg-background p-5">
                {[
                  ["Email", "poojithasatti5121@gmail.com"],
                  ["Phone", "+91 83329 33697"],
                  ["Location", "Amalapuram, Andhra Pradesh"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between border-b border-border pb-3 last:border-b-0 last:pb-0">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">{k}</span>
                    <span className="text-foreground font-medium text-right">{v}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-5 bg-background border border-border rounded-2xl">
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Address</div>
                <p className="text-foreground text-sm leading-relaxed">
                  D.No. 2-84, Savarrapalem,<br />
                  Amalapuram Mandal,<br />
                  Dr. B.R. Ambedkar Konaseema District,<br />
                  Andhra Pradesh, India
                </p>
              </div>
            </div>
            <form
              onSubmit={(e) => { e.preventDefault(); alert("Thank you for reaching out — I will get back to you shortly."); }}
              className="md:col-span-6 md:col-start-7 bg-background p-8 md:p-10 rounded-2xl border border-border shadow-[var(--shadow-card)] space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full name" id="name" />
                <Field label="Company" id="company" />
              </div>
              <Field label="Email address" id="email" type="email" />
              <Field label="What would you like to discuss?" id="msg" textarea />
              <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3.5 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 transition-colors">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, id, type = "text", textarea }: { label: string; id: string; type?: string; textarea?: boolean }) {
  const base = "w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition";
  return (
    <div>
      <label htmlFor={id} className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</label>
      {textarea ? (
        <textarea id={id} rows={4} className={base} />
      ) : (
        <input id={id} type={type} className={base} />
      )}
    </div>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary text-primary-foreground py-10">
      <HeroParticles />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)] pointer-events-none" aria-hidden="true" />
      <div className="relative z-10 container-x flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-serif text-lg">Satti Baby Poojitha</div>
        <div className="text-xs uppercase tracking-widest text-primary-foreground/70">
          © {new Date().getFullYear()} · HR &amp; Talent Acquisition
        </div>
      </div>
    </footer>
  );
}
