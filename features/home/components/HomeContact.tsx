import { CONTACT_SECTION } from "@/features/home/data/home-copy";
import { Container } from "@/shared/components/Container";

export function HomeContact() {
  return (
    <section id="contact" className="border-t border-brand-navy/10 bg-[#f7f4ee] py-12 sm:py-16">
      <Container>
        <div className="mx-auto max-w-2xl space-y-3 text-center text-lg leading-relaxed text-stone-800 sm:text-xl">
          {CONTACT_SECTION.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </Container>
    </section>
  );
}
