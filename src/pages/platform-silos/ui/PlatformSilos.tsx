import { motion } from "motion/react";
import { Footer } from "@/widgets/footer/ui/Footer";
import { UnifiedEcosystem } from "./UnifiedEcosystem";
import { Newsletter } from "@/widgets/newsletter/ui/Newsletter";

export default function PlatformSilos() {
  const handleDemoClick = () => {
    window.location.hash = "#/contact";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full flex flex-col items-center min-h-screen bg-background text-foreground pt-[120px] font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif]" data-name="PlatformSilosPage">
      
      <UnifiedEcosystem />

      {/* Bottom Conversion Band */}
      <Newsletter 
        title="One platform for every department. See it run on your data."
        description=""
        buttonText="Book a Free Demo"
        onButtonClick={handleDemoClick}
      />

      <Footer />
    </div>
  );
}
