import { FOOTER_CONTACT, FOOTER_NAV } from "@/features/home/data/home-copy";
import { Container } from "@/shared/components/Container";

export function HomeFooter() {
  return (
    <footer className="bg-[#1c1814] text-orange-50/95">
      <Container className="py-12 sm:py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div>
            <p lang="en" className="font-en text-xl font-semibold text-orange-100">
              SEREY KHMER
            </p>
            <nav
              lang="km"
              className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-orange-100/85"
            >
              {FOOTER_NAV.map((label) => (
                <span key={label}>{label}</span>
              ))}
            </nav>
          </div>

          <div className="space-y-3 text-sm leading-relaxed text-orange-100/90 sm:text-base">
            <p lang="en" className="font-en">
              <a href={`mailto:${FOOTER_CONTACT.email}`} className="underline-offset-2 hover:underline">
                {FOOTER_CONTACT.email}
              </a>
            </p>
            <p lang="en" className="font-en">
              <a href={`tel:${FOOTER_CONTACT.phone.replace(/\s/g, "")}`} className="underline-offset-2 hover:underline">
                {FOOTER_CONTACT.phone}
              </a>
            </p>
            {FOOTER_CONTACT.addressLines.map((line) => (
              <p key={line} lang="km" className="whitespace-pre-wrap">
                {line}
              </p>
            ))}
          </div>
        </div>

        <p
          lang="en"
          className="mt-10 border-t border-orange-100/10 pt-8 text-center text-xs text-orange-200/70 sm:text-sm font-en"
        >
          {FOOTER_CONTACT.copyright}
        </p>
      </Container>
    </footer>
  );
}
