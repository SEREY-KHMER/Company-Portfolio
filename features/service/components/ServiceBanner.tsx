import { SERVICE_PAGE } from "@/features/service/data/service-copy";

export function ServiceBanner() {
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

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-[200px] max-w-7xl items-center justify-center px-4 sm:px-6 sm:h-[230px] lg:h-[260px] lg:px-8">
        <h1
          lang="km"
          className="w-full text-center text-[38px] font-bold leading-tight tracking-tight text-white sm:text-[48px] lg:text-[58px]"
        >
          {SERVICE_PAGE.bannerHeadline}
        </h1>
      </div>
    </section>
  );
}
