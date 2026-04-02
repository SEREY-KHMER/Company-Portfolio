/** Vertical Kbach-inspired motif strip (lighter blue on navy). */
export function HeroKbachStrip() {
  return (
    <div
      className="relative w-10 shrink-0 self-stretch bg-brand-navy-strip sm:w-12 md:w-14"
      aria-hidden
    >
      <svg
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        viewBox="0 0 56 400"
      >
        <defs>
          <pattern id="kbach-dots" width="56" height="56" patternUnits="userSpaceOnUse">
            <circle cx="28" cy="28" r="14" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
            <circle cx="28" cy="28" r="6" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.75" />
            <path
              d="M28 8v8M28 40v8M8 28h8M40 28h8"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="0.6"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#kbach-dots)" />
      </svg>
    </div>
  );
}
