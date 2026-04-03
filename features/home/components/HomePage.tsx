
import { HomeFooter } from "./HomeFooter";
import { HomeHeader } from "./HomeHeader";
import { HomeBanner } from "./HomeBanner";

export function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-stone-900">
      <HomeHeader />
      <main lang="km" className="flex-1">
        <HomeBanner />
      </main>
      <HomeFooter />
    </div>
  );
}
