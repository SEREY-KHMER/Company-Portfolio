import { TESTIMONIALS } from "@/features/home/data/home-copy";
import { Container } from "@/shared/components/Container";

export function HomeTestimonials() {
  return (
    <section className="border-y border-brand-navy/10 bg-[#f7f4ee] py-12 sm:py-16">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className="flex flex-col rounded-2xl border border-brand-navy/10 bg-white/90 p-5 shadow-sm"
            >
              <blockquote className="flex-1 text-base font-medium text-brand-navy">{t.quote}</blockquote>
              <figcaption className="mt-4 text-sm text-stone-600">{t.author}</figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
