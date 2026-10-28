const HeroLeft = () => {
  return (
    <div className="relative z-10 w-full">
      <div className="max-w-3xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-300/[0.06] px-3.5 py-2 text-xs font-semibold tracking-wide text-emerald-200">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
          </span>
          Available for frontend roles and freelancing projects
        </div>

        <p className="section-kicker mb-5">Front-end developer · React · TypeScript</p>

        <h1 title="Developer name" className="font-display text-[clamp(3.1rem,8vw,6.7rem)] font-semibold leading-[.98] tracking-[-.075em] text-white">
          hi, I&apos;m
          <span className="mt-2 block text-gradient">Abdulsalam</span>
          <span className="mt-2 block text-slate-300">Dev Hub<span className="text-blue-400">.</span></span>
        </h1>

        <p title="developer quote" className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
          a <strong className="font-semibold text-slate-200">front-end developer</strong> who build and craft clean,
          scalable web applications using <em className="not-italic text-slate-200">popular tools.</em> My goal is
          to build web solutions that offer both exceptional performance and delightful user experience.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#project" title="developer projects" className="cta-primary">
            Explore my work <span aria-hidden="true">↗</span>
          </a>
          <a href="#contact" title="developer contact" className="cta-secondary">
            Let&apos;s work together <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-white/[0.09] pt-6 text-xs font-medium text-slate-500 sm:text-sm">
          <span className="text-slate-400">Building with</span>
          <span>React</span><span className="text-slate-700">/</span>
          <span>TypeScript</span><span className="text-slate-700">/</span>
          <span>Tailwind CSS</span>
        </div>
      </div>
    </div>
  );
};

export default HeroLeft;
