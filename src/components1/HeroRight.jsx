import hero from "../assets/thundeLogo.jpeg";

const HeroRight = () => {
  return (
    <div className="relative mx-auto flex w-full max-w-[410px] items-center justify-center py-8">
      <div className="absolute inset-7 rounded-full bg-blue-500/20 blur-[70px]"></div>
      <div className="absolute inset-4 rounded-[2.5rem] border border-blue-300/10 rotate-6"></div>
      <div className="absolute inset-1 rounded-[2.5rem] border border-white/[0.06] -rotate-3"></div>

      <div className="surface-card animate-float relative w-full rounded-[2rem] p-4 sm:p-5">
        <div className="mb-4 flex items-center justify-between px-1">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80"></span>
          </div>
          <span className="font-mono text-[10px] tracking-[.18em] text-slate-500">THUNDETECH / PROFILE</span>
        </div>

        <div className="relative overflow-hidden rounded-[1.5rem] border border-blue-300/15 bg-gradient-to-br from-blue-500/20 via-slate-900 to-slate-950 p-5">
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-blue-300/10"></div>
          <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full border border-blue-300/10"></div>
          <img
            src={hero}
            alt="Thundetech author logo"
            className="relative mx-auto aspect-square w-[72%] rounded-full border border-blue-200/30 object-cover shadow-[0_0_60px_rgba(59,130,246,.2)]"
          />
          <div className="relative mt-5 text-center">
            <p className="font-display text-2xl font-semibold tracking-tight text-white">Abdulsalam Dev Hub</p>
            <p className="mt-1 text-sm text-slate-400">Front-end development & web experiences</p>
          </div>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {["React", "TypeScript", "Tailwind CSS"].map((skill) => (
              <span key={skill} className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-blue-100/80">{skill}</span>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between gap-4 px-2 py-1 text-xs text-slate-400">
          <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>Open to opportunities</span>
          <a href="#contact" className="font-semibold text-blue-300 transition hover:text-white">Connect ↗</a>
        </div>
      </div>
    </div>
  );
};

export default HeroRight;
