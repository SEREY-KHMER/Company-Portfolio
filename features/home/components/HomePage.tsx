import { HomeAbout } from "./HomeAbout";
import { HomeAdvertisers } from "./HomeAdvertisers";
import { HomeBanner } from "./HomeBanner";
import { HomeFooter } from "./HomeFooter";
import { HomeHeader } from "./HomeHeader";
import { HomeServices } from "./HomeServices";
import { HomeWorks } from "./HomeWorks";

export function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-stone-900">
      <HomeHeader />
      <main lang="km" className="flex-1">
        <HomeBanner />
        <HomeServices />
        <HomeWorks />
        <HomeAdvertisers />
        <HomeAbout />
      </main>
      <HomeFooter />
    </div>
  );
}
