import { HERO } from "@/features/home/data/home-copy";

function CornerPattern({
  className,
  flipY,
}: {
  className?: string;
  flipY?: boolean;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      style={flipY ? { transform: "scaleY(-1)" } : undefined}
    >
      <defs>
        <pattern id="kbach-corner" width="44" height="44" patternUnits="userSpaceOnUse">
          <path
            d="M22 4c8 0 14 6 14 14s-6 14-14 14S8 26 8 18 14 4 22 4Z"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="1"
          />
          <path
            d="M22 12c4 0 6 2 6 6s-2 6-6 6-6-2-6-6 2-6 6-6Z"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="220" height="220" fill="url(#kbach-corner)" />
      <rect width="220" height="220" fill="rgba(55,81,124,0.10)" />
    </svg>
  );
}

function SocialIcon({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href="#"
      aria-label={label}
      className="group inline-flex size-11 items-center justify-center rounded-full bg-white text-brand-navy transition hover:bg-white/75"
    >
      <span className="size-6 opacity-95 group-hover:opacity-100 [&>svg]:h-full [&>svg]:w-full">
        {children}
      </span>
    </a>
  );
}

export function HomeBanner() {
  return (
    <section id="top" className="anchor-target bg-white pb-8 pt-[12px] sm:pb-10 sm:pt-[12px]">
      <div className="mx-auto w-[97.5%]">
        <div className="relative min-h-[calc(97vh-69px)] overflow-hidden rounded-2xl border border-neutral-200/90 bg-brand-navy shadow-sm sm:rounded-3xl">
          {/* Corner patterns (left) */}
          <CornerPattern className="pointer-events-none absolute left-0 top-0 h-36 w-36 opacity-75 sm:h-44 sm:w-44" />
          <CornerPattern
            className="pointer-events-none absolute bottom-0 left-0 h-36 w-36 opacity-75 sm:h-44 sm:w-44"
            flipY
          />

          {/* Social icons (right) */}
          <div className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-4 md:flex">
            <SocialIcon label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M13.5 22v-8h2.6l.4-3h-3V9.1c0-.9.2-1.5 1.5-1.5H16.6V5a20 20 0 0 0-2.4-.1c-2.4 0-4.1 1.4-4.1 4.1V11H7.5v3h2.6v8h3.4Z" />
              </svg>
            </SocialIcon>
            <SocialIcon label="TikTok">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M15.7 5.1c.7 1.2 1.8 2 3.3 2.2v3.1c-1.6-.1-3-.6-4.2-1.6v6.4c0 3.2-2.6 5.8-5.8 5.8S3.2 18.4 3.2 15.2s2.6-5.8 5.8-5.8c.4 0 .8 0 1.2.1v3.2a2.7 2.7 0 0 0-1.2-.3c-1.5 0-2.8 1.2-2.8 2.8S7.5 18 9 18s2.8-1.2 2.8-2.8V3.1h3c.2.7.5 1.4.9 2Z" />
              </svg>
            </SocialIcon>
            <SocialIcon label="Telegram">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M20.6 4.6 2.9 11.8c-1.2.5-1.2 1.2-.2 1.5l4.6 1.4 1.7 5.1c.2.6.1.8.7.8.4 0 .6-.2.9-.4l2.2-2.1 4.6 3.4c.8.5 1.4.2 1.6-.7l3-14.1c.3-1.1-.4-1.6-1.4-1.1Zm-2.4 3.1-8.8 7.9-.3 3.3-1.2-3.9 10.4-6.6c.5-.3.9-.1.6.3Z" />
              </svg>
            </SocialIcon>
          </div>

          <div className="flex flex-col gap-8 px-6 py-10 sm:px-10 sm:py-12 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:py-16">
            <div className="max-w-2xl">
              <h1 className="text-[32px] font-extrabold leading-[1.05] tracking-tight text-white sm:text-[44px] lg:text-[52px]">
                <span lang="en" className="font-en">
                  {HERO.titleEnBefore}
                </span>
                <span lang="km">{HERO.titleKm}</span>
                <span lang="en" className="font-en">
                  {HERO.titleEnAfter}
                </span>
                <br />
                <span lang="en" className="font-en">
                  {HERO.lines.join(" ")}
                </span>
              </h1>

              <div className="mt-7">
                <a
                  href="#contact"
                  lang="km"
                  className="inline-flex items-center rounded-full bg-[#EF8C10] px-6 py-3 text-[18px] font-bold leading-none text-white shadow-[inset_0_5px_4px_rgba(0,0,0,0.25)] transition hover:brightness-105 sm:text-[20px]"
                >
                  {HERO.cta}
                </a>
              </div>
            </div>

            <div className="relative flex flex-1 items-center justify-center lg:justify-end">
              {/* Orange mark (approximation) */}
              <div className="pointer-events-none select-none text-[120px] font-black leading-none text-[#EF8C10] drop-shadow-[0_10px_18px_rgba(0,0,0,0.18)] sm:text-[160px] lg:text-[200px]">
                សិរី
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
