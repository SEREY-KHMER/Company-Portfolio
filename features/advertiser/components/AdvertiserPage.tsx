import { HomeFooter } from "../../home/components/HomeFooter";
import { HomeHeader } from "../../home/components/HomeHeader";
import { AdvertiserBanner } from "./AdvertiserBanner";
import { AdvertiserGrid } from "./AdvertiserGrid";

export function AdvertiserPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-stone-900">
      <HomeHeader />
      <main lang="km" className="flex-1">
        <AdvertiserBanner />
        <AdvertiserGrid />
      </main>
      <HomeFooter />
    </div>
  );
}
