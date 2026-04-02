import { Container } from "@/shared/components/Container";

export function AboutPage() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50 font-sans dark:bg-black">
      <Container className="py-16">
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
          About
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Replace this with your company story.
        </p>
      </Container>
    </div>
  );
}
