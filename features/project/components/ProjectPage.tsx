import { HomeFooter } from "../../home/components/HomeFooter";
import { HomeHeader } from "../../home/components/HomeHeader";
import { ProjectBanner } from "./ProjectBanner";
import { ProjectContent } from "./ProjectContent";
import { ProjectImages } from "./ProjectImages";
import { ProjectTabs } from "./ProjectTabs";

export function ProjectPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-stone-900">
      <HomeHeader />
      <main lang="km" className="flex-1">
        <ProjectBanner />
        <div className="mt-8">
          <ProjectTabs />
        </div>
        <div className="mt-8">
          <ProjectImages />
        </div>
        <div className="mt-10 pb-20">
          <ProjectContent />
        </div>
      </main>
      <HomeFooter />
    </div>
  );
}
