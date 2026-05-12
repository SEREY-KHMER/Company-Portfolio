import { PROJECT_PAGE } from "../data/project-copy";

export function ProjectBanner() {
  return (
    <section className="relative w-full overflow-hidden rounded-b-3xl bg-brand-navy">
      <img
        src="/graphic/bannerCornerTopLeft.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[-25px] top-[-25px] h-[220px] w-[240px] select-none opacity-60"
      />
      <img
        src="/graphic/angkorwar.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-4 right-0 h-[280px] w-auto select-none opacity-21"
      />

      {/* Content — centered, single line */}
      <div className="relative z-10 mx-auto flex h-[200px] max-w-7xl items-center justify-center px-4 sm:h-[230px] sm:px-6 lg:h-[260px] lg:px-8">
        <h1
          lang="km"
          className="w-full text-center text-[28px] font-bold leading-tight tracking-tight text-white sm:text-[36px] lg:text-[44px]"
        >
          {PROJECT_PAGE.bannerHeadline}
        </h1>
      </div>
    </section>
  );
}
