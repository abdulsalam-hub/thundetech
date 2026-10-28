import { useEffect } from "react";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Services", "#service"],
  ["Projects", "#project"],
  ["Contact", "#contact"],
];

export const NavBar = ({ isMenu, setIsMenu }) => {
  useEffect(() => {
    document.body.style.overflow = isMenu ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [isMenu]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#070a12]/80 backdrop-blur-2xl">
      <nav aria-label="Main navigation" className="section-wrap">
        <div className="flex h-[4.5rem] items-center justify-between gap-4">
          <a href="#home" className="group inline-flex items-center gap-3" aria-label="Thundetech home">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-blue-300/20 bg-blue-500/10 font-display text-lg font-bold text-blue-200 transition group-hover:border-blue-300/50">T<span className="text-blue-400">.</span></span>
            <span className="font-display text-base font-semibold tracking-tight text-white sm:text-lg">
              Thundetech<span className="text-blue-400">_hub</span>
              <span className="mt-0.5 hidden text-[10px] font-medium tracking-[.19em] text-slate-500 sm:block">ABDULSALAM DEV HUB</span>
            </span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {links.map(([label, href]) => (
              <a key={href} href={href} className="text-sm font-medium text-slate-400 transition hover:text-white">
                {label}
              </a>
            ))}
            <a href="#contact" className="cta-primary min-h-10 px-5 py-2 text-sm">
              Let&apos;s talk <span aria-hidden="true">↗</span>
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsMenu(!isMenu)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-xl text-white transition hover:border-blue-300/40 md:hidden"
            aria-label={isMenu ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenu}
            aria-controls="mobile-navigation"
          >
            {isMenu ? "×" : "☰"}
          </button>
        </div>
      </nav>
    </header>
  );
};
