import { AD_SECTION_PARAGRAPH } from "@/features/home/data/home-copy";
import { Container } from "@/shared/components/Container";

export function HomeAdBlock() {
  return (
    <section id="advertisers" className="bg-[#faf6ef] py-12 sm:py-16">
      <Container>
        <p className="mx-auto max-w-4xl whitespace-pre-wrap text-center text-base leading-relaxed text-stone-800 sm:text-lg">
          {AD_SECTION_PARAGRAPH}
        </p>
      </Container>
    </section>
  );
}
