/** Orange crown / flame mark beside Khmer wordmark. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M20 4l2.8 6.1 6.7.8-5 4.7 1.4 6.6L20 19.8l-5.9 2.4 1.4-6.6-5-4.7 6.7-.8L20 4z"
        fill="currentColor"
      />
      <path
        d="M12 22c2.2 4.4 5.1 7 8 7s5.8-2.6 8-7c-1.6 3-4.5 5-8 5s-6.4-2-8-5z"
        fill="currentColor"
        opacity={0.92}
      />
    </svg>
  );
}
