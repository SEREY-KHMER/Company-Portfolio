"use client"
import Image from "next/image";

import { SERVICE_CONTENT } from "@/features/service/data/service-copy";

export function ServiceContent() {
  return (
    <article lang="km" className="min-w-0 flex-1 space-y-10">
      {/* Hero image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-neutral-100">
        <Image
          src="/graphic/service-hero.jpg"
          alt="Service overview"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 60vw"
          priority
          onError={(e) => {
            // Graceful fallback if image is not yet added
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
        {/* Fallback placeholder gradient */}
        <div className="relative w-full overflow-hidden rounded-[30px]">
          <img
            src="/graphic/Group 40.svg"
            alt="Service overview"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Content sections */}
      {SERVICE_CONTENT.sections.map((section, idx) => (
        <section key={section.id} id={section.id}>
          <h2 className="mb-4 text-[26px] font-bold leading-snug text-brand-navy sm:text-[28px]">
            {section.heading}
          </h2>

          <p className="text-[17px] leading-relaxed text-stone-700 sm:text-[18px]">
            {section.body}
          </p>

          {/* Bullet points (second section only) */}
          {"bullets" in section && Array.isArray(section.bullets) && (
            <ul className="mt-4 space-y-2">
              {section.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-3 text-[17px] leading-relaxed text-stone-700"
                >
                  <span className="mt-1.5 size-2 shrink-0 rounded-full bg-brand-orange" />
                  {bullet}
                </li>
              ))}
            </ul>
          )}
            
          {/* Divider between sections (except last) */}
          {idx < SERVICE_CONTENT.sections.length - 1 && (
            <hr className="mt-8 border-neutral-200" />
          )}
        </section>
      ))}
    </article>
  );
}
