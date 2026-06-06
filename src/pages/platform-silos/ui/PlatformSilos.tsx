import { motion } from "motion/react";

import { UnifiedEcosystem } from "./UnifiedEcosystem";


export default function PlatformSilos() {
  const handleDemoClick = () => {
    window.location.hash = "#/contact";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full flex flex-col items-center min-h-screen bg-background text-foreground pt-[120px] font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif]" data-name="PlatformSilosPage">
      
      <UnifiedEcosystem />

      {/* Bottom Conversion Band */}
      

      
    </div>
  );
}
