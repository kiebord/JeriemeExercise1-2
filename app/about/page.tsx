import type { Metadata } from "next";
import { Avatar } from "@/components/Icons";

export const metadata: Metadata = { title: "About" };
const skills = ["HTML & CSS","JavaScript","React & Next.js","Tailwind CSS","MySQL","Git"];
const timeline = [
  ["2022—Now","BSIT Student","Studying Information Technology with a focus on web development and databases."],
  ["Ongoing","Class & capstone projects","Building full-stack projects with teammates, from planning to deployment."],
  ["Active","Student organization member","Helping with tech events and learning to collaborate across teams."],
  ["Self-directed","Practice projects","Building small sites and tools around real-world requirements."],
];

export default function AboutPage(){ return <div className="page-shell content-shell">
  <section className="bio-grid"><Avatar className="bio-portrait"/><div className="bio-copy"><p className="eyebrow">A little about me</p><h1>Curious by nature.<br />Practical by choice.</h1><p>I&apos;m Jerieme, a BSIT student who loves building web apps. What started as curiosity about how websites work has grown into a steady habit of making small, practical tools people can actually use.</p><p>I enjoy learning new technologies, reading documentation, and improving my code with every project. My goal is to grow into a full-stack developer who ships clear, reliable software.</p></div></section>
  <section className="info-section"><h2>Skills</h2><ul className="skill-list">{skills.map((skill,i)=><li key={skill}>{skill}<span>0{i+1}</span></li>)}</ul></section>
  <section className="info-section"><h2>Education & experience</h2><ol className="timeline-list">{timeline.map(([period,title,text])=><li key={title}><time>{period}</time><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></section>
  <section className="info-section"><h2>Connect</h2><div className="contact-list"><a href="mailto:jerieme@example.com">Email ↗</a><a href="https://github.com/">GitHub ↗</a><a href="https://linkedin.com/">LinkedIn ↗</a></div></section>
  </div> }
