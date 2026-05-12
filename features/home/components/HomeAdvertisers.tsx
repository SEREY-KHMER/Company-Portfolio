"use client";

import { TESTIMONIALS, ADVERTISERS_SECTION } from "@/features/home/data/home-copy";

export function HomeAdvertisers() {
  return (
    <section id="advertisers" className="anchor-target py-16 sm:py-20">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6">

        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 lang="km" className="text-[42px] font-bold text-brand-orange sm:text-[48px]">
            {ADVERTISERS_SECTION.title}
          </h2>
          <p lang="km" className="mt-3 text-[17px] leading-relaxed text-stone-600">
            {ADVERTISERS_SECTION.subtitle}
          </p>
        </div>

        {/* 4×2 grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {TESTIMONIALS.map((item, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-md"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition group-hover:scale-105"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>

              {/* Body */}
              <div className="p-3">
                <p lang="km" className="text-[15px] font-bold leading-snug text-brand-navy">
                  {item.name}
                </p>
                <p lang="km" className="mt-1 text-[13px] leading-snug text-stone-500">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
