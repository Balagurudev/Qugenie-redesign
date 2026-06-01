import { useEffect, useState, Suspense } from "react";
import { ThemeCustomizerProvider, useThemeCustomizer } from "@/contexts/ThemeCustomizerContext";
import { EbayHeader } from "@/widgets/ebay/EbayHeader";
import { LoadingAnimation } from "@/widgets/loading-animation/ui/LoadingAnimation";
import { Header } from "@/widgets/header/ui/Header";
import { Hero } from "@/widgets/hero/ui/Hero";
import { AboutUs } from "@/widgets/about-us/ui/AboutUs";
import { Services } from "@/widgets/services/ui/Services";
import { WhyQuGenie } from "@/widgets/why-qugenie/ui/WhyQuGenie";
import { AgenticCoreLanding } from "@/widgets/agentic-core-landing/ui/AgenticCoreLanding";
import { AgenticCoreLandingV2 } from "@/widgets/agentic-core-landing/ui/AgenticCoreLandingV2";
import { Infrastructure } from "@/widgets/infrastructure/ui/Infrastructure";
import { FAQ } from "@/widgets/faq/ui/FAQ";
import { Newsletter } from "@/widgets/newsletter/ui/Newsletter";
import { Footer } from "@/widgets/footer/ui/Footer";

// FSD Pages
import PlatformSilos from "@/pages/platform-silos/ui/PlatformSilos";
import PlatformDeployment from "@/pages/platform-deployment/ui/PlatformDeployment";
import PlatformOnPremise from "@/pages/platform-onpremise/ui/PlatformOnPremise";
import PlatformCost from "@/pages/platform-cost/ui/PlatformCost";
import PlatformAgentic from "@/pages/platform-agentic/ui/PlatformAgentic";
import SolutionsHRMS from "@/pages/solutions-hrms/ui/SolutionsHRMS";
import SolutionsSales from "@/pages/solutions-sales/ui/SolutionsSales";
import SolutionsFinance from "@/pages/solutions-finance/ui/SolutionsFinance";
import SolutionsInventory from "@/pages/solutions-inventory/ui/SolutionsInventory";
import SolutionsProcurement from "@/pages/solutions-procurement/ui/SolutionsProcurement";
import SolutionsProject from "@/pages/solutions-project/ui/SolutionsProject";
import SolutionsManufacturing from "@/pages/solutions-manufacturing/ui/SolutionsManufacturing";
import SolutionsSupport from "@/pages/solutions-support/ui/SolutionsSupport";
import SolutionsRecruitment from "@/pages/solutions-recruitment/ui/SolutionsRecruitment";
import SolutionsQuikynet from "@/pages/solutions-quikynet/ui/SolutionsQuikynet";
import SolutionsCompliance from "@/pages/solutions-compliance/ui/SolutionsCompliance";
import SolutionsCommunications from "@/pages/solutions-communications/ui/SolutionsCommunications";
import SolutionsVault from "@/pages/solutions-vault/ui/SolutionsVault";
import SolutionsLearning from "@/pages/solutions-learning/ui/SolutionsLearning";
import SolutionsAnalytics from "@/pages/solutions-analytics/ui/SolutionsAnalytics";
import AboutUsPage from "@/pages/about-us/ui/AboutUsPage";
import ContactPage from "@/pages/contact/ui/ContactPage";

function AppContent() {
  const [page, setPage] = useState("home");
  const [showLoading, setShowLoading] = useState(true);
  const { designSystem } = useThemeCustomizer();

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === "" || hash === "#" || hash === "#/") {
        setPage("home");
      } else if (hash === "#/platform/silos") {
        setPage("platform-silos");
      } else if (hash === "#/platform/deployment") {
        setPage("platform-deployment");
      } else if (hash === "#/platform/on-premise") {
        setPage("platform-onpremise");
      } else if (hash === "#/platform/cost-effective") {
        setPage("platform-cost");
      } else if (hash === "#/platform/agentic") {
        setPage("platform-agentic");
      } else if (hash === "#/solutions/hrms") {
        setPage("solutions-hrms");
      } else if (hash === "#/solutions/sales") {
        setPage("solutions-sales");
      } else if (hash === "#/solutions/finance") {
        setPage("solutions-finance");
      } else if (hash === "#/solutions/inventory") {
        setPage("solutions-inventory");
      } else if (hash === "#/solutions/procurement") {
        setPage("solutions-procurement");
      } else if (hash === "#/solutions/project") {
        setPage("solutions-project");
      } else if (hash === "#/solutions/manufacturing") {
        setPage("solutions-manufacturing");
      } else if (hash === "#/solutions/support") {
        setPage("solutions-support");
      } else if (hash === "#/solutions/recruitment") {
        setPage("solutions-recruitment");
      } else if (hash === "#/solutions/quikynet") {
        setPage("solutions-quikynet");
      } else if (hash === "#/solutions/compliance") {
        setPage("solutions-compliance");
      } else if (hash === "#/solutions/communications") {
        setPage("solutions-communications");
      } else if (hash === "#/solutions/vault") {
        setPage("solutions-vault");
      } else if (hash === "#/solutions/learning") {
        setPage("solutions-learning");
      } else if (hash === "#/solutions/analytics") {
        setPage("solutions-analytics");
      } else if (hash === "#/about-us") {
        setPage("about-us");
      } else if (hash === "#/contact") {
        setPage("contact");
      } else {
        setPage("home");
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("hashchange", handleHash);
    handleHash(); // Run on initial load
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return (
    <>
      {showLoading && (
        <LoadingAnimation onComplete={() => setShowLoading(false)} />
      )}
      
      <div 
        className="bg-background text-foreground content-stretch flex flex-col items-center relative w-full overflow-x-clip min-h-screen"
        style={{ opacity: showLoading ? 0 : 1, transition: "opacity 1s ease-in-out", pointerEvents: showLoading ? "none" : "auto" }}
      >
        {designSystem === "cinematic" ? <Header /> : <EbayHeader />}

      {page === "home" && (
        <>
          <Hero />
          {/* <AboutUs /> */}
          <Services />
          <WhyQuGenie />
          {/* <AgenticCoreLanding /> */}
          {/* <AgenticCoreLandingV2 /> */}
          {/* <Infrastructure /> */}
          <FAQ />
          {/* <Newsletter /> */}
          <Footer />
        </>
      )}

      {page === "platform-silos" && <PlatformSilos />}
      {page === "platform-deployment" && <PlatformDeployment />}
      {page === "platform-onpremise" && <PlatformOnPremise />}
      {page === "platform-cost" && <PlatformCost />}
      {page === "platform-agentic" && <PlatformAgentic />}
      {page === "solutions-hrms" && <SolutionsHRMS />}
      {page === "solutions-sales" && <SolutionsSales />}
      {page === "solutions-finance" && <SolutionsFinance />}
      {page === "solutions-inventory" && <SolutionsInventory />}
      {page === "solutions-procurement" && <SolutionsProcurement />}
      {page === "solutions-project" && <SolutionsProject />}
      {page === "solutions-manufacturing" && <SolutionsManufacturing />}
      {page === "solutions-support" && <SolutionsSupport />}
      {page === "solutions-recruitment" && <SolutionsRecruitment />}
      {page === "solutions-quikynet" && <SolutionsQuikynet />}
      {page === "solutions-compliance" && <SolutionsCompliance />}
      {page === "solutions-communications" && <SolutionsCommunications />}
      {page === "solutions-vault" && <SolutionsVault />}
      {page === "solutions-learning" && <SolutionsLearning />}
      {page === "solutions-analytics" && <SolutionsAnalytics />}
      {page === "about-us" && <AboutUsPage />}
      {page === "contact" && <ContactPage />}
      </div>
    </>
  );
}

export default function App() {
  return (
    <ThemeCustomizerProvider>
      <AppContent />
    </ThemeCustomizerProvider>
  );
}
