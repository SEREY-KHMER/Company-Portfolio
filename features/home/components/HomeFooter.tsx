import type { ReactNode } from "react";
import Image from "next/image";

import logoSrc from "@/app/SEREYKHMER_logo.png";
import {
  FOOTER_CONTACT,
  FOOTER_CONTACT_COLUMN_TITLE,
  FOOTER_HEADLINE_LINES,
  FOOTER_QUICK_LINKS_TITLE,
  FOOTER_SOCIAL,
  HEADER_CONTACT_CTA,
  HEADER_NAV_ITEMS,
  HERO,
} from "@/features/home/data/home-copy";
import { cn } from "@/shared/lib/utils";

function SocialCircle({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex size-10 items-center justify-center rounded-full bg-white text-brand-navy transition hover:bg-white/90"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span className="size-5 [&>svg]:h-full [&>svg]:w-full">{children}</span>
    </a>
  );
}

export function HomeFooter() {
  return (
    <footer className="bg-brand-navy text-white">
      {/* Main footer only — watermark stays inside this block (not in copyright strip) */}
      <div className="relative h-[550px] overflow-hidden">
        <img
          src="/graphic/footerBottomRight.svg"
          alt=""
          className="pointer-events-none absolute bottom-0 right-0 z-0 max-h-[min(55vh,520px)] w-auto max-w-[min(90vw,420px)] select-none opacity-[0.35]"
        />

      {/* Overlapping top bar — white pill */}
      <div className="relative z-20 mx-auto max-w-6xl px-4 sm:px-6 -mt-14 mb-10 sm:-mt-16">
        <div className="flex flex-col gap-4 rounded-full bg-white px-5 py-4 shadow-md sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-4">
          <a href="#top" className="relative block h-11 w-auto shrink-0 self-start sm:self-center">
            <Image
              src={logoSrc}
              alt="SEREY KHMER"
              width={220}
              height={72}
              className="h-11 w-auto object-contain object-left"
            />
          </a>
          <div className="flex w-full flex-wrap items-center justify-end gap-3 sm:w-auto">
            <a
              href="#contact"
              lang="km"
              className="inline-flex items-center justify-center rounded-full bg-brand-navy px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:brightness-110 sm:text-base"
            >
              {HERO.cta}
            </a>
            <a
              href={FOOTER_SOCIAL.telegram}
              aria-label="Telegram"
              className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-navy text-white shadow-sm transition hover:brightness-110"
            >
              <svg className="size-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M20.6 4.6 2.9 11.8c-1.2.5-1.2 1.2-.2 1.5l4.6 1.4 1.7 5.1c.2.6.1.8.7.8.4 0 .6-.2.9-.4l2.2-2.1 4.6 3.4c.8.5 1.4.2 1.6-.7l3-14.1c.3-1.1-.4-1.6-1.4-1.1Zm-2.4 3.1-8.8 7.9-.3 3.3-1.2-3.9 10.4-6.6c.5-.3.9-.1.6.3Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,38%)_1fr] lg:gap-16 lg:items-start">
          {/* Left: headline + CTAs */}
          <div lang="km" className="space-y-8">
            <h2 className="text-2xl font-bold leading-snug tracking-tight sm:text-3xl lg:text-[34px] lg:leading-tight">
              {FOOTER_HEADLINE_LINES.map((line, i) => (
                <span key={line}>
                  {i > 0 ? <br /> : null}
                  {line}
                </span>
              ))}
            </h2>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-white/95 px-7 py-3 text-sm font-bold text-brand-navy shadow-sm transition hover:bg-white sm:text-base"
                lang="km"
              >
                {HERO.cta}
              </a>
              <a
                href="#contact"
                aria-label={HEADER_CONTACT_CTA}
                className="inline-flex size-12 items-center justify-center rounded-full bg-white/95 text-brand-navy shadow-sm transition hover:bg-white"
              >
                <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: quick links + contact (divider from left column on lg; between cols on sm+) */}
          <div className="border-t border-white/20 pt-10 lg:border-l lg:border-t-0 lg:border-white/25 lg:pl-12 lg:pt-0">
            <div className="grid gap-10 sm:grid-cols-2 sm:gap-10 lg:gap-12">
              <div lang="km">
                <p className="text-lg font-bold text-white">{FOOTER_QUICK_LINKS_TITLE}</p>
                <ul className="mt-5 space-y-3 text-sm text-white/95 sm:text-base">
                  {HEADER_NAV_ITEMS.map((item) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} className="transition hover:text-white hover:underline">
                        {item.label}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a href="#contact" className="transition hover:text-white hover:underline">
                      {HEADER_CONTACT_CTA}
                    </a>
                  </li>
                </ul>
              </div>

              <div lang="km" className="space-y-5 sm:border-l sm:border-white/25 sm:pl-10">
              <p className="text-lg font-bold text-white">{FOOTER_CONTACT_COLUMN_TITLE}</p>
              <div className="space-y-4 text-sm text-white/95 sm:text-base">
                <p className="flex gap-3">
                  <span className="mt-0.5 shrink-0 text-white/90" aria-hidden>
                    <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.75}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <a
                    href={`mailto:${FOOTER_CONTACT.email}`}
                    className="font-en break-all underline-offset-2 hover:underline"
                    lang="en"
                  >
                    {FOOTER_CONTACT.email}
                  </a>
                </p>
                <p className="flex gap-3">
                  <span className="mt-0.5 shrink-0 text-white/90" aria-hidden>
                    <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.75}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </span>
                  <a
                    href={`tel:${FOOTER_CONTACT.phone.replace(/\s/g, "")}`}
                    className="font-en underline-offset-2 hover:underline"
                    lang="en"
                  >
                    {FOOTER_CONTACT.phone}
                  </a>
                </p>
                <div className="flex gap-3">
                  <span className="mt-1 shrink-0 text-white/90" aria-hidden>
                    <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.75}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <div className="space-y-1 whitespace-pre-wrap">
                    {FOOTER_CONTACT.addressLines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <SocialCircle href={FOOTER_SOCIAL.facebook} label="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M13.5 22v-8h2.6l.4-3h-3V9.1c0-.9.2-1.5 1.5-1.5H16.6V5a20 20 0 0 0-2.4-.1c-2.4 0-4.1 1.4-4.1 4.1V11H7.5v3h2.6v8h3.4Z" />
                  </svg>
                </SocialCircle>
                <SocialCircle href={FOOTER_SOCIAL.tiktok} label="TikTok">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M15.7 5.1c.7 1.2 1.8 2 3.3 2.2v3.1c-1.6-.1-3-.6-4.2-1.6v6.4c0 3.2-2.6 5.8-5.8 5.8S3.2 18.4 3.2 15.2s2.6-5.8 5.8-5.8c.4 0 .8 0 1.2.1v3.2a2.7 2.7 0 0 0-1.2-.3c-1.5 0-2.8 1.2-2.8 2.8S7.5 18 9 18s2.8-1.2 2.8-2.8V3.1h3c.2.7.5 1.4.9 2Z" />
                  </svg>
                </SocialCircle>
                <SocialCircle href={FOOTER_SOCIAL.youtube} label="YouTube">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1 31.6 31.6 0 0 0 .5-5.8 31.6 31.6 0 0 0-.5-5.8zM9.6 15.6V8.4L15.8 12 9.6 15.6z" />
                  </svg>
                </SocialCircle>
                <SocialCircle href={FOOTER_SOCIAL.telegram} label="Telegram">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M20.6 4.6 2.9 11.8c-1.2.5-1.2 1.2-.2 1.5l4.6 1.4 1.7 5.1c.2.6.1.8.7.8.4 0 .6-.2.9-.4l2.2-2.1 4.6 3.4c.8.5 1.4.2 1.6-.7l3-14.1c.3-1.1-.4-1.6-1.4-1.1Zm-2.4 3.1-8.8 7.9-.3 3.3-1.2-3.9 10.4-6.6c.5-.3.9-.1.6.3Z" />
                  </svg>
                </SocialCircle>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Copyright — separate from main footer; no decorative graphic here */}
      <div className="flex h-[55px] items-center border-t border-white/25 bg-[#37517C]">
        <div className="mx-auto flex h-full w-full max-w-6xl items-center px-4 sm:px-6">
          <p
            lang="en"
            className={cn(
              "text-left text-xs leading-none text-white/80 sm:text-sm",
              "font-en",
            )}
          >
            {FOOTER_CONTACT.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
