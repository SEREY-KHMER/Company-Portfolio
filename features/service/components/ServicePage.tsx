import { ServiceBanner } from "./ServiceBanner";
import { ServiceContent } from "./ServiceContent";
import { HomeFooter } from "../../home/components/HomeFooter";
import { ServiceForm } from "./ServiceForm";
import { HomeHeader } from "../../home/components/HomeHeader";

export function ServicePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-stone-900">
      <HomeHeader />

      <main lang="km" className="flex-1">
        <ServiceBanner />

        {/* Main two-column layout: sidebar form + content */}
        <div className="mx-auto w-full max-w-[1100px] px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
            {/* Sidebar form — sticky on desktop */}
            <div className="lg:sticky lg:top-[85px] lg:self-start">
              <ServiceForm />
            </div>

            {/* Main content */}
            <ServiceContent />
          </div>
        </div>
      </main>

      <HomeFooter />
    </div>
  );
}
