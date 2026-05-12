import { HomeFooter } from "../../home/components/HomeFooter";
import { HomeHeader } from "../../home/components/HomeHeader";
import { ContactSection } from "./ContactSection";

export function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-stone-900">
      <HomeHeader />
      <main className="flex-1">
        <ContactSection />
      </main>
      <HomeFooter />
    </div>
  );
}
