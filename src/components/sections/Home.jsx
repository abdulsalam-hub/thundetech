import { Revalscroll } from "../RevalScroll";
import HeroLeft from "../../components1/HeroLeft";
import HeroRight from "../../components1/HeroRight";

export const Home = () => (
  <section id="home" title="Home/landing page" className="relative flex min-h-[calc(100svh-4.5rem)] w-full items-center py-16 sm:py-20 lg:py-24">
    <Revalscroll>
      <div className="section-wrap grid items-center gap-12 md:grid-cols-[1.08fr_.92fr] lg:gap-16">
        <HeroLeft />
        <div className="mx-auto hidden w-full max-w-[420px] md:block"><HeroRight /></div>
        <div className="grid grid-cols-3 gap-3 md:col-span-2 lg:mt-2">
          {[["01", "Thoughtful interfaces"], ["02", "Responsive by design"], ["03", "Built for real users"]].map(([number, label]) => (
            <div key={number} className="border-t border-white/10 pt-4">
              <p className="font-mono text-xs text-blue-300">{number}</p>
              <p className="mt-2 text-xs text-slate-400 sm:text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </Revalscroll>
  </section>
);