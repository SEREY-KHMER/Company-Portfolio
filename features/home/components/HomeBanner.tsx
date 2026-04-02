import { HERO } from "@/features/home/data/home-copy";

import { HeroDancersArt } from "./HeroDancersArt";
import { HeroKbachStrip } from "./HeroKbachStrip";

export function HomeBanner() {
  return (
    <section id="top" className="bg-white px-4 pb-8 pt-4 sm:px-6 sm:pb-10 sm:pt-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-2xl border border-neutral-200/90 bg-brand-navy shadow-sm sm:rounded-3xl">
          <div className="flex flex-col lg:min-h-[min(28rem,70vh)] lg:flex-row">
            <div className="flex min-h-0 flex-1 flex-row items-stretch">
              <HeroKbachStrip />
              <div className="flex flex-1 flex-col justify-center gap-5 px-4 py-8 sm:gap-6 sm:px-6 sm:py-10 md:px-8 lg:max-w-xl lg:py-12 lg:pl-4 lg:pr-4">
                <h1 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
                  {HERO.title}
                </h1>
                <div className="space-y-1 font-en text-base font-normal leading-relaxed text-white/95 sm:text-lg md:text-xl">
                  {HERO.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
                <div>
                  <a
                    href="#contact"
                    className="inline-flex rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:brightness-105 sm:text-base"
                  >
                    {HERO.cta}
                  </a>
                </div>
              </div>
            </div>

            <div className="relative flex flex-1 items-end justify-center px-4 pb-8 pt-2 sm:px-8 sm:pb-10 lg:items-center lg:justify-end lg:pb-10 lg:pl-2 lg:pr-8 lg:pt-10">
              <div className="relative w-full max-w-[min(100%,22rem)] sm:max-w-md lg:max-w-lg">
                <HeroDancersArt className="h-auto w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
