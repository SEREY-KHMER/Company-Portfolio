import { ABOUT_SECTION } from "@/features/home/data/home-copy";

export function HomeAbout() {
  return (
    <section id="about" className="anchor-target py-16 sm:py-20">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">

          {/* Left: text */}
          <div className="flex-1">
            <h2 lang="km" className="text-[42px] font-bold text-brand-orange sm:text-[48px]">
              {ABOUT_SECTION.title}
            </h2>
            <p lang="km" className="mt-4 text-[17px] font-bold leading-relaxed text-brand-navy">
              {ABOUT_SECTION.description}
            </p>
            <div className="mt-8">
              <a
                href="#contact"
                lang="km"
                className="inline-flex items-center gap-3 rounded-full border-2 border-brand-navy px-6 py-3 text-[17px] font-semibold text-brand-navy transition hover:bg-brand-navy hover:text-white"
              >
                {ABOUT_SECTION.cta}
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: stat boxes */}
          <div className="grid w-full grid-cols-1 gap-4 lg:w-[380px] lg:shrink-0">
            {ABOUT_SECTION.stats.map((stat) => (
              <div
                key={stat.value}
                className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
              >
                {/* Watermark — top-right */}
                <img
                  src="/graphic/banerunder.svg"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute right-0 top-0 h-[80px] w-[80px] rotate-180 select-none"
                />

                {/* Watermark — bottom-left */}
                <img
                  src="/graphic/banerunder.svg"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-0 left-0 h-[80px] w-[80px] rotate-360 select-none"
                />

                {/* Content */}
                <div className="relative flex flex-col items-center justify-center px-6 py-5">
                  <span lang="km" className="text-[52px] font-bold leading-none text-brand-navy">
                    {stat.value}
                  </span>
                  <span lang="km" className="mt-1 text-center text-[16px] font-medium text-brand-navy">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
