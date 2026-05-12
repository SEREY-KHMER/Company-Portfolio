import { PROJECT_IMAGES } from "../data/project-copy";

export function ProjectImages() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {PROJECT_IMAGES.map((src, i) => (
          <div
            key={i}
            className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-neutral-100"
          >
            <img
              src={src}
              alt={`Project image ${i + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
