import { HomeAdBlock } from "./HomeAdBlock";
import { HomeContact } from "./HomeContact";
import { HomeFooter } from "./HomeFooter";
import { HomeHeader } from "./HomeHeader";
import { HomeHero } from "./HomeHero";
import { HomeIntro } from "./HomeIntro";
import { HomeServices } from "./HomeServices";
import { HomeStats } from "./HomeStats";
import { HomeTestimonials } from "./HomeTestimonials";
import { HomeWork } from "./HomeWork";

export function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-stone-900">
      <HomeHeader />
      <main className="flex-1">
        <HomeHero />
        <HomeIntro />
        <HomeServices />
        <HomeWork />
        <HomeAdBlock />
        <HomeTestimonials />
        <HomeStats />
        <HomeContact />
      </main>
      <HomeFooter />
    </div>
  );
}
