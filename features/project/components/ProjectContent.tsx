import { PROJECT_CONTENT } from "../data/project-copy";

export function ProjectContent() {
  return (
    <article lang="km" className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
      {PROJECT_CONTENT.sections.map((section, idx) => (
        <section key={section.id} id={section.id}>
          <h2 className="mb-4 text-[24px] font-bold leading-snug text-stone-800 sm:text-[26px]">
            {section.heading}
          </h2>
          <p className="text-[16px] leading-relaxed text-stone-600">
            {section.body}
          </p>
          {section.body2 && (
            <p className="mt-3 text-[16px] leading-relaxed text-stone-600">
              {section.body2}
            </p>
          )}
          {"bullets" in section && Array.isArray(section.bullets) && (
            <ul className="mt-4 space-y-3">
              {(section as { bullets: string[] }).bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[16px] leading-relaxed text-stone-600"
                >
                  <span className="mt-2 size-2 shrink-0 rounded-full bg-brand-navy" />
                  {bullet}
                </li>
              ))}
            </ul>
          )}
          {idx < PROJECT_CONTENT.sections.length - 1 && (
            <hr className="mt-10 border-neutral-200" />
          )}
        </section>
      ))}
    </article>
  );
}
