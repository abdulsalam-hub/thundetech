import { useState } from "react";
import { projects } from "./Data";

const ProjectBox = () => {
  const [show, setShow] = useState(null);
  return projects.map((project, id) => (
    <article key={project.title} className="surface-card group flex h-full flex-col rounded-[1.6rem] p-5 transition duration-300 hover:-translate-y-1 sm:p-6">
      <div className="mb-5 flex items-center justify-between">
        <span className="rounded-full border border-blue-300/15 bg-blue-500/[0.08] px-3 py-1 text-[10px] font-semibold uppercase tracking-[.16em] text-blue-200">Selected project</span>
        <span className="font-mono text-xs text-slate-600">0{id + 1}</span>
      </div>
      <h3 className="font-display text-xl font-semibold leading-snug text-white sm:text-2xl">{project.title}</h3>
      <div className="mt-4 flex-1 text-sm leading-6 text-slate-400">
        {show === id ? (
          <div className="space-y-3">
            <p><strong className="text-slate-200">Issue:</strong> {project.problem}.</p>
            <p><strong className="text-slate-200">Solution:</strong> {project.solution}.</p>
            <p><strong className="text-slate-200">Impact:</strong> {project.impact}.</p>
            <button onClick={() => setShow(null)} type="button" className="text-sm font-semibold text-blue-300 hover:text-white">Show less ↑</button>
          </div>
        ) : (
          <div>
            <p>{project.solution}</p>
            <button onClick={() => setShow(id)} type="button" className="mt-3 text-sm font-semibold text-blue-300 hover:text-white">Explore the details <span aria-hidden="true">→</span></button>
          </div>
        )}
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((tech) => <span key={tech} className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-xs text-slate-300">{tech.trim()}</span>)}
      </div>
      <div className="mt-6 flex flex-wrap gap-3 border-t border-white/[0.08] pt-5">
        {project.live && project.live !== "#" && <a target="_blank" rel="noreferrer" href={project.live} className="cta-primary min-h-10 px-4 py-2 text-xs">Live demo <span aria-hidden="true">↗</span></a>}
        <a target="_blank" rel="noreferrer" href={project.github} className="cta-secondary min-h-10 px-4 py-2 text-xs">Source code <span aria-hidden="true">↗</span></a>
      </div>
    </article>
  ));
};

export default ProjectBox;