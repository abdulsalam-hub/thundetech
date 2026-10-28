const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Services", "#service"],
  ["Projects", "#project"],
  ["Contact", "#contact"],
];

export const MobileMenu = ({ isMenu, setIsMenu }) => {
  if (!isMenu) return null;

  return (
    <div
      id="mobile-navigation"
      className="fixed inset-0 top-[4.5rem] z-40 flex flex-col bg-[#070a12]/[0.98] px-6 py-10 backdrop-blur-2xl md:hidden"
    >
      <p className="section-kicker mb-7">Navigate</p>
      <nav aria-label="Mobile navigation" className="flex flex-col">
        {links.map(([label, href], index) => (
          <a
            key={href}
            href={href}
            onClick={() => setIsMenu(false)}
            className="flex items-center justify-between border-b border-white/[0.08] py-5 font-display text-2xl font-semibold text-slate-200 transition hover:text-blue-300"
          >
            <span>{label}</span>
            <span className="text-base text-slate-600">0{index + 1} ↗</span>
          </a>
        ))}
      </nav>
      <div className="mt-auto rounded-2xl border border-blue-300/15 bg-blue-500/[0.08] p-5">
        <p className="mb-3 text-sm text-slate-400">Available for frontend roles and freelancing projects.</p>
        <a href="#contact" onClick={() => setIsMenu(false)} className="cta-primary w-full">
          Start a conversation <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  );
};
