"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import logoSrc from "@/app/SEREYKHMER_logo.png";
import { HEADER_CONTACT_CTA, HEADER_NAV_ITEMS } from "@/features/home/data/home-copy";
import { cn } from "@/shared/lib/utils";

type NavSectionId = (typeof HEADER_NAV_ITEMS)[number]["id"];
const NAV_IDS: NavSectionId[] = HEADER_NAV_ITEMS.map((item) => item.id);

const navLinkClass = (active: boolean) =>
  cn(
    "whitespace-nowrap text-[21px] text-brand-navy transition hover:opacity-80",
    active ? "font-semibold" : "font-medium",
  );

export function HomeHeader() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<NavSectionId>(NAV_IDS[0]);

  const updateActiveFromScroll = useCallback(() => {
    const offset = 96;
    let current = NAV_IDS[0];
    for (const id of NAV_IDS) {
      const el = document.getElementById(id);
      if (!el) continue;
      if (el.offsetTop <= window.scrollY + offset) {
        current = id;
      }
    }
    setActiveId(current);
  }, []);

  useEffect(() => {
    const onHash = () => {
      const h = window.location.hash.replace(/^#/, "");
      if (h && (NAV_IDS as readonly string[]).includes(h)) {
        setActiveId(h as NavSectionId);
        return;
      }
      updateActiveFromScroll();
    };

    onHash();
    window.addEventListener("scroll", updateActiveFromScroll, { passive: true });
    window.addEventListener("hashchange", onHash);
    return () => {
      window.removeEventListener("scroll", updateActiveFromScroll);
      window.removeEventListener("hashchange", onHash);
    };
  }, [updateActiveFromScroll]);

  return (
    <header lang="km" className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white">
      <div className="mx-auto flex h-[69px] max-w-7xl items-center justify-between gap-3 px-1 sm:px-1 lg:gap-6 lg:px-2">
        <a
          href="#top"
          className="relative flex shrink-0 items-center py-1"
          onClick={() => setOpen(false)}
        >
          <Image
            src={logoSrc}
            alt="SEREY KHMER"
            width={280}
            height={96}
            className="h-[65px] w-auto object-contain object-left"
            priority
          />
        </a>

        <nav className="hidden flex-1 items-center justify-center lg:flex lg:gap-[50px]">
          {HEADER_NAV_ITEMS.map((item) => {
            const active = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={navLinkClass(active)}
                aria-current={active ? "location" : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center">
          <a
            href="#contact"
            className="hidden items-center rounded-full bg-[#EF8C10] px-5 py-2 text-[21px] font-medium leading-none text-white shadow-[inset_0_5px_4px_rgba(0,0,0,0.25)] transition hover:brightness-105 lg:inline-flex"
          >
            {HEADER_CONTACT_CTA}
          </a>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-lg text-brand-navy lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "border-t border-neutral-100 bg-white lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
          {HEADER_NAV_ITEMS.map((item) => {
            const active = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn("rounded-lg px-3 py-3", navLinkClass(active))}
                aria-current={active ? "location" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            );
          })}
          <a
            href="#contact"
            className="mt-2 rounded-full bg-brand-orange px-4 py-3 text-center text-base font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            {HEADER_CONTACT_CTA}
          </a>
        </nav>
      </div>
    </header>
  );
}
