/** Stylized white line-art classical dancers — decorative, matches reference tone. */
export function HeroDancersArt({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 420 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <title>Khmer classical dancers</title>
      {/* Left figure */}
      <g stroke="white" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" opacity={0.95}>
        <ellipse cx="118" cy="248" rx="28" ry="6" opacity={0.25} />
        <path d="M98 248c-4-42 8-88 32-118 10-12 22-20 36-22" />
        <path d="M166 108c8-4 18-6 28-4 14 4 24 18 26 34" />
        <path d="M118 130c-6 18-10 38-12 58" />
        <path d="M128 188c-14 8-24 22-28 38" />
        <path d="M152 188c10 10 18 24 20 42" />
        <path d="M104 132c-16-10-24-28-22-48" />
        <path d="M82 84c6-18 22-32 42-34" />
        <path d="M124 52c0-14 12-26 28-28 18-2 34 12 36 30" />
        <path d="M152 54c10-6 22-8 34-4" />
        <circle cx="168" cy="38" r="22" />
        <path d="M154 28c8-4 18-6 28-4" opacity={0.6} />
      </g>
      {/* Right figure */}
      <g stroke="white" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" opacity={0.95}>
        <ellipse cx="302" cy="248" rx="28" ry="6" opacity={0.25} />
        <path d="M282 248c4-42-8-88-32-118-10-12-22-20-36-22" />
        <path d="M254 108c-8-4-18-6-28-4-14 4-24 18-26 34" />
        <path d="M302 130c6 18 10 38 12 58" />
        <path d="M292 188c14 8 24 22 28 38" />
        <path d="M268 188c-10 10-18 24-20 42" />
        <path d="M316 132c16-10 24-28 22-48" />
        <path d="M338 84c-6-18-22-32-42-34" />
        <path d="M296 52c0-14-12-26-28-28-18-2-34 12-36 30" />
        <path d="M268 54c-10-6-22-8-34-4" />
        <circle cx="252" cy="38" r="22" />
        <path d="M266 28c-8-4-18-6-28-4" opacity={0.6} />
      </g>
      {/* Connecting decorative curve */}
      <path
        d="M190 200c20-8 40-8 60 0"
        stroke="white"
        strokeWidth="1"
        opacity={0.35}
      />
    </svg>
  );
}
