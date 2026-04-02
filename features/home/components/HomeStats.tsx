import { STATS } from "@/features/home/data/home-copy";
import { Container } from "@/shared/components/Container";

export function HomeStats() {
  return (
    <section id="about" className="bg-gradient-to-b from-[#faf6ef] to-[#f0ebe3] py-12 sm:py-16">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-5xl font-semibold text-brand-navy sm:text-6xl md:text-7xl">
            {STATS.primary.value}
          </p>
          <p className="mt-2 text-lg text-stone-800 sm:text-xl">{STATS.primary.label}</p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-brand-navy sm:text-3xl">{STATS.aboutTitle}</h2>
          <div className="mt-4 space-y-2 text-base leading-relaxed text-stone-800 sm:text-lg">
            {STATS.aboutLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-8 sm:grid-cols-3">
          {STATS.columns.map((col) => (
            <div key={col.label} className="text-center">
              <p className="text-4xl font-semibold text-brand-navy sm:text-5xl">{col.value}</p>
              <p className="mt-2 text-sm leading-snug text-stone-800 sm:text-base">{col.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
