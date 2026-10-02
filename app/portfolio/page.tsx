import type { Metadata } from "next";
import { ProjectThumb } from "@/components/Icons";

export const metadata: Metadata = { title: "Work" };

const projects = [
  { title:"Student Portfolio Website", description:"A clean personal site with project showcase, about page, and gallery.", tags:["Next.js","Tailwind"] },
  { title:"Task Manager App", description:"Add, complete, and delete daily tasks with data saved in the browser.", tags:["React","Local Storage"] },
  { title:"Online Enrollment System", description:"Student enrollment with forms, subject selection, and record management.", tags:["PHP","MySQL"] },
  { title:"Weather Dashboard", description:"Search any city and see current conditions and a short forecast.", tags:["JavaScript","API"] },
  { title:"Inventory Tracker", description:"Track stock levels, add items, and view simple usage summaries.", tags:["Node.js","MySQL"] },
  { title:"Quiz Game", description:"A multiple-choice quiz with instant feedback and a final score.", tags:["HTML","CSS","JavaScript"] },
];

export default function PortfolioPage() {
  return <div className="page-shell">
    <header className="page-hero"><p className="eyebrow">Selected work · 2024—2026</p><h1>Projects made<br />to learn by doing.</h1><p>A collection of class projects and practice builds. Each one taught me a better way to solve a problem.</p></header>
    <section className="project-grid">
      {projects.map((project,index)=><article className="project-card" key={project.title}>
        <div className="project-visual"><ProjectThumb variant={index} className="h-full w-full" /></div>
        <div className="project-meta"><div><h2>{project.title}</h2><p>{project.description}</p><ul className="tag-list">{project.tags.map(tag=><li key={tag}>{tag}</li>)}</ul></div><span className="project-number">0{index+1}</span></div>
      </article>)}
    </section>
  </div>;
}
