import { PORTFOLIO_ITEMS, WORK_SECTION_TITLE } from "@/features/home/data/home-copy";
import { Container } from "@/shared/components/Container";

export function HomeWork() {
  return (
    <section id="works" className="border-y border-brand-navy/10 bg-[#f7f4ee] py-12 sm:py-16">
      <Container>
        <h2 className="mx-auto max-w-4xl whitespace-pre-wrap text-center text-xl font-semibold leading-snug text-brand-navy sm:text-2xl">
          {WORK_SECTION_TITLE}
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO_ITEMS.map((item, i) => (
            <article
              key={i}
              className="overflow-hidden rounded-2xl border border-brand-navy/10 bg-gradient-to-br from-white to-brand-orange/5 shadow-sm"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-brand-orange/15 to-stone-200/60" />
              <div className="p-5">
                <p className="text-lg font-semibold text-brand-navy">{item.title}</p>
                <p className="mt-1 text-sm text-stone-600">{item.tag}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
