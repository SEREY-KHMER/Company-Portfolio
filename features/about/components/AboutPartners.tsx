"use client"
import { PARTNER_LOGOS } from "../data/about-copy";
import Image from "next/image";
import logoSrc from "@/app/SEREYKHMER_logo.png";

export function AboutPartners() {
  return (
    <section className="border-y border-neutral-200 bg-white py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 lg:gap-20">
          {/* Our logo first */}
          <Image
            src={logoSrc}
            alt="SEREY KHMER"
            width={140}
            height={48}
            className="h-10 w-auto object-contain opacity-90"
          />
          {/* Partner logos */}
          {PARTNER_LOGOS.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="h-10 w-auto object-contain opacity-80 transition hover:opacity-100"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
