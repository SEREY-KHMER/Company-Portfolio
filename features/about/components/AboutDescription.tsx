import { ABOUT_DESCRIPTION } from "../data/about-copy";

export function AboutDescription() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">

        {/* Left: text */}
        <div className="flex-1">
          <h2 lang="km" className="text-[42px] font-bold text-brand-orange sm:text-[48px]">
            {ABOUT_DESCRIPTION.title}
          </h2>
          <div className="mt-4 flex flex-col gap-3">
            {ABOUT_DESCRIPTION.paragraphs.map((para, i) => (
              <p key={i} lang="km" className="text-[17px] font-bold leading-relaxed text-brand-navy">
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Right: stat boxes */}
        <div className="grid w-full grid-cols-1 gap-4 lg:w-[380px] lg:shrink-0">
          {ABOUT_DESCRIPTION.stats.map((stat) => (
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
    </section>
  );
}
