import { ADVERTISER_CARDS, ADVERTISER_PAGE } from "../data/advertiser-copy";

export function AdvertiserGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      {/* Subtitle */}
      <p
        lang="km"
        className="mb-10 text-center text-[18px] leading-relaxed text-stone-600"
      >
        {ADVERTISER_PAGE.subtitle}
      </p>

      {/* 4×2 grid */}
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {ADVERTISER_CARDS.map((card, i) => (
          <div
            key={i}
            className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-md"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
              <img
                src={card.image}
                alt={card.name}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </div>

            {/* Info */}
            <div className="p-3">
              <p
                lang="km"
                className="text-[15px] font-bold leading-snug text-brand-navy"
              >
                {card.name}
              </p>
              <p
                lang="km"
                className="mt-0.5 text-[13px] leading-snug text-stone-500"
              >
                {card.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
