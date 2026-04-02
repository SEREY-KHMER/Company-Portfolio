import { CONTACT_STRIP, INTRO_PARAGRAPH } from "@/features/home/data/home-copy";
import { Container } from "@/shared/components/Container";

export function HomeIntro() {
  return (
    <section id="services" className="border-b border-brand-navy/10 bg-[#f7f4ee] py-12 sm:py-16">
      <Container>
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-xl font-semibold text-brand-navy sm:text-2xl">
            {CONTACT_STRIP}
          </p>
          <p className="mt-6 whitespace-pre-wrap text-center text-base leading-relaxed text-stone-800 sm:text-lg">
            {INTRO_PARAGRAPH}
          </p>
        </div>
      </Container>
    </section>
  );
}
