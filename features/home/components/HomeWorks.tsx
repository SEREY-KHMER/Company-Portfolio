"use client";
import { PORTFOLIO_ITEMS } from "@/features/home/data/home-copy";

const WORK_IMAGES = [
  "/graphic/work-1.jpg",
  "/graphic/work-2.jpg",
  "/graphic/work-3.jpg",
  "/graphic/work-4.jpg",
  "/graphic/work-5.jpg",
  "/graphic/work-6.jpg",
];

export function HomeWorks() {
  return (
    <section id="works" className="anchor-target bg-neutral-50 py-16 sm:py-20">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 lang="km" className="text-[36px] font-bold text-brand-orange sm:text-[40px]">
            ស្នាដៃ
          </h2>
          <p lang="km" className="mt-2 text-[17px] text-stone-600">
            ស្នាដៃ និងប្រវត្តិការងាររបស់ក្រុមការងារ សិរីខ្មែរ
          </p>
        </div>

        {/* 2×3 grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO_ITEMS.map((item, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-md"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                <img
                  src={WORK_IMAGES[i % WORK_IMAGES.length]}
                  alt={item.title}
                  className="h-full w-full object-cover transition group-hover:scale-105"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>

              {/* Body */}
              <div className="flex items-center justify-between p-4">
                <div>
                  <span lang="km" className="inline-block rounded-full bg-brand-navy/10 px-3 py-1 text-[13px] font-medium text-brand-navy">
                    {item.tag}
                  </span>
                  <h3 lang="km" className="mt-2 text-[16px] font-bold text-stone-800">
                    {item.title}
                  </h3>
                </div>

                {/* Arrow button */}
                <a
                  href="#works"
                  className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white transition hover:brightness-110"
                  aria-label="មើលបន្ថែម"
                >
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
