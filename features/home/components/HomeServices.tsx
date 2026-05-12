"use client";

import Link from "next/link";
import { SERVICE_CARDS, SERVICES_SECTION } from "@/features/home/data/home-copy";

export function HomeServices() {
  return (
    <section id="services" className="anchor-target py-16 sm:py-20">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6">

        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 lang="km" className="text-[42px] font-bold text-brand-orange sm:text-[48px]">
            {SERVICES_SECTION.title}
          </h2>
          <p lang="km" className="mt-3 text-[17px] leading-relaxed text-stone-600">
            {SERVICES_SECTION.subtitle}
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICE_CARDS.map((card, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-3xl p-[2px]"
              style={{
                background: "linear-gradient(135deg, #7B6FD4 0%, #4A6FA5 50%, #A78BCA 100%)",
              }}
            >
              {/* Inner white card */}
              <div className="relative flex h-full flex-col overflow-hidden rounded-[22px] bg-white">

                {/* Image — no rounded bottom */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Body */}
                <div className="relative flex flex-1 flex-col p-4">

                  {/* Watermark — right of title area */}
                  <img
                  src="/graphic/banerunder.svg"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-0 left-0 h-[80px] w-[80px] rotate-170 select-none"
                  />

                  <h3
                    lang="km"
                    className="whitespace-pre-line text-[17px] font-bold leading-snug text-brand-navy"
                  >
                    {card.title}
                  </h3>
                  <p lang="km" className="mt-2 flex-1 text-[13px] leading-relaxed text-stone-500">
                    {card.description}
                  </p>

                  {/* Arrow button */}
                  <div className="mt-4 flex justify-end">
                    <Link
                      href="/service"
                      className="inline-flex size-10 items-center justify-center rounded-full bg-brand-orange text-white shadow-sm transition hover:brightness-110 active:scale-95"
                      aria-label="មើលបន្ថែម"
                    >
                      <svg
                        className="size-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
