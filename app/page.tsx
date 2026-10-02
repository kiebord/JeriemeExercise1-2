import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Home" };

const stack = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "MySQL", "Git"];

export default function HomePage() {
  return (
    <>
      <section className="hero-shell page-shell">
        <div className="hero-kicker"><span className="status-dot" /> Available for student projects</div>
        <h1 className="hero-title">I build clear<br />digital <em>experiences.</em></h1>
        <div className="hero-bottom">
          <p className="hero-intro">Hi, I&apos;m <strong>Jerieme Cosgafa</strong> — a BSIT student learning to turn practical ideas into thoughtful, working websites.</p>
          <div className="hero-actions">
            <Link href="/portfolio" className="button button-dark">See my work <span>↗</span></Link>
            <Link href="/about" className="text-link">More about me <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="marquee" aria-label="Technology stack">
        <div className="stack-row">
          {stack.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className="page-shell callout">
        <p className="eyebrow">Selected work</p>
        <h2>Ideas become better<br />when you build them.</h2>
        <Link href="/portfolio" className="button button-light">Explore projects <span>↗</span></Link>
      </section>
    </>
  );
}
