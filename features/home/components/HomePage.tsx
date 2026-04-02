import { Container } from "@/shared/components/Container";

export function HomePage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Container className="flex flex-col items-center justify-center py-16 text-center">
        <p className="text-lg text-zinc-800 dark:text-zinc-200">Hello World</p>
      </Container>
    </div>
  );
}
