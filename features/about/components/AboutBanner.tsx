import { ABOUT_PAGE } from "../data/about-copy";

export function AboutBanner() {
  return (
    <section className="relative w-full overflow-hidden rounded-b-3xl bg-brand-navy">
      <img
        src="/graphic/bannerCornerTopLeft.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[-25px] top-[-25px] h-[220px] w-[240px] select-none opacity-60"
      />
      {/* Angkor Wat watermark — right */}
      <img
        src="/graphic/angkorwar.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-4 right-0 h-[280px] w-auto select-none opacity-21"
      />
      {/* Centered headline */}
      <div className="relative z-10 mx-auto flex h-[200px] max-w-7xl items-center justify-center px-4 sm:h-[240px] sm:px-6 lg:h-[280px] lg:px-8">
        <h1
          lang="km"
          className="text-center text-[42px] font-bold leading-tight text-white sm:text-[52px] lg:text-[62px]"
        >
          {ABOUT_PAGE.bannerHeadline}
        </h1>
      </div>
    </section>
  );
}
