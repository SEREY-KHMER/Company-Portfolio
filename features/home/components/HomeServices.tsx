import { SERVICE_CARDS } from "@/features/home/data/home-copy";
import { Container } from "@/shared/components/Container";

export function HomeServices() {
  return (
    <section className="bg-[#faf6ef] py-12 sm:py-16">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {SERVICE_CARDS.map((lines, i) => (
            <article
              key={i}
              className="flex flex-col rounded-2xl border border-brand-navy/10 bg-white/80 p-6 shadow-sm shadow-brand-navy/5"
            >
              {lines.map((line, j) => (
                <p
                  key={j}
                  className={
                    j === 0
                      ? "text-lg font-semibold text-brand-navy"
                      : "mt-2 whitespace-pre-wrap text-sm leading-relaxed text-stone-800 sm:text-base"
                  }
                >
                  {line}
                </p>
              ))}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
