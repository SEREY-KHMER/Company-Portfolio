import { TEAM_MEMBERS } from "../data/about-copy";

export function AboutTeam() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      {/* Title */}
      <h2
        lang="km"
        className="mb-10 text-center text-[42px] font-bold text-brand-orange sm:text-[48px]"
      >
        ក្រុមការងារ
      </h2>

      {/* 4-column grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {TEAM_MEMBERS.map((member, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-md"
          >
            {/* Photo */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
              <img
                src={member.image}
                alt={member.name}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="p-4">
              <p lang="km" className="text-[17px] font-bold text-brand-navy">
                {member.name}
              </p>
              <p lang="en" className="mt-0.5 text-[14px] text-stone-500">
                {member.role}
              </p>
              <div className="mt-3 space-y-1">
                <p lang="en" className="flex items-center gap-2 text-[13px] text-stone-600">
                  <svg className="size-4 shrink-0 text-brand-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {member.phone}
                </p>
                <p lang="en" className="flex items-center gap-2 text-[13px] text-stone-600 break-all">
                  <svg className="size-4 shrink-0 text-brand-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {member.email}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
