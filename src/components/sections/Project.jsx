import { Revalscroll } from "../RevalScroll";
import ProjectBox from "../../components1/ProjectBox";

export const Project = () => (
  <section id="project" aria-labelledby="projects-heading" className="section-space relative scroll-mt-24">
    <Revalscroll>
      <div className="section-wrap">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="section-kicker mb-4">Selected work</p>
            <h2 id="projects-heading" className="section-heading text-4xl font-semibold text-white sm:text-5xl">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              A closer look at the problems, solutions, tools, and thinking behind my work.
            </p>
          </div>
          <a href="https://github.com/abdulsalam-hub" target="_blank" rel="noreferrer" className="cta-secondary w-fit">
            More on GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          <ProjectBox />
        </div>
      </div>
    </Revalscroll>
  </section>
);
