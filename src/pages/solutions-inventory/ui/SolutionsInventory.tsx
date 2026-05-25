import { motion } from "motion/react";
import { Footer } from "@/widgets/footer/ui/Footer";

export default function SolutionsInventory() {
  const handleDemoClick = () => {
    window.location.hash = "#/contact";
  };

  const features = [
    { title: "Multi-Location Sync", desc: "Track stock movements across endless warehouses in real-time." },
    { title: "Serialized Barcoding", desc: "Print and scan item-level barcodes for flawless fulfillment." },
    { title: "Automated Reorders", desc: "Set minimum thresholds to trigger automated purchase orders." },
    { title: "Batch & Expiry", desc: "Strict FEFO/FIFO controls for perishable or time-sensitive goods." },
    { title: "Stock Valuation", desc: "Instant valuation updates using moving average or standard cost methods." },
    { title: "Warehouse Routing", desc: "Optimized pick-and-pack workflows for faster outbound logistics." },
    { title: "Quality Inspections", desc: "Mandatory quality checks upon goods receipt or before dispatch." },
    { title: "Return Management", desc: "Seamlessly handle RMAs, restocks, and supplier chargebacks." },
    { title: "Inventory Analytics", desc: "Identify dead stock, fast movers, and seasonal trends instantly." }
  ];

  return (
    <div className="w-full flex flex-col items-center min-h-screen bg-background text-foreground pt-[120px] font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif]" data-name="SolutionsInventoryPage">
      
      {/* Top Tagline */}
      <section className="w-full max-w-[1120px] px-6 pt-6">
        <motion.span 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[14px] font-semibold uppercase tracking-[3px] text-[#0040C1]"
        >
          WAREHOUSE SOLUTION
        </motion.span>
      </section>

      {/* Spectacular Graphic Hero Panel */}
      <section className="w-full max-w-[1120px] px-6 py-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="h-[360px] w-full rounded-[24px] relative overflow-hidden bg-gradient-to-br from-[#0040C1] via-[#002266] to-[#03010a] flex flex-col justify-end p-8 md:p-12 shadow-lg"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent pointer-events-none" />
          
          <div className="relative z-10 max-w-[600px] flex flex-col gap-2">
            <span className="bg-white/10 text-white font-semibold text-[12px] uppercase tracking-widest px-3 py-1 rounded-[4px] self-start mb-2">SCALE READY</span>
            <h1 className="text-[38px] md:text-[48px] font-semibold text-white tracking-tight leading-none">
              Inventory & Warehouse
            </h1>
          </div>
        </motion.div>
      </section>

      {/* Split Description Section */}
      <section className="w-full max-w-[1120px] px-6 py-[60px] grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* Left Title */}
        <div className="md:col-span-7 flex flex-col items-start gap-4">
          <h2 className="text-[32px] md:text-[44px] lg:text-[56px] font-sans font-medium tracking-tighter uppercase leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white to-[#8a93a2]">
            Flawless Fulfillment at Every Scale
          </h2>
        </div>

        {/* Right Copy & CTA */}
        <div className="md:col-span-5 flex flex-col items-start gap-6">
          <p className="text-[16px] leading-[28px] text-muted-foreground">
            QuGenie Inventory gives you absolute control over your supply chain. From the receiving dock to the customer's door, track every unit with precision.
          </p>
          <motion.button 
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleDemoClick}
            className="bg-[#0040C1] text-white font-semibold text-[15px] px-[26px] py-[14px] rounded-[8px] cursor-pointer shadow-sm hover:shadow-[0px_8px_16px_rgba(0,64,193,0.25)] transition-all"
          >
            Book a Free Demo
          </motion.button>
        </div>

      </section>

      {/* Grid of 9 Cards */}
      <section className="w-full max-w-[1120px] px-6 py-[40px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -4, borderColor: "rgba(0, 64, 193, 0.4)" }}
              className="bg-card border border-border p-6 rounded-[16px] flex flex-col gap-3 shadow-sm transition-all relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-[3px] bg-[#0040C1] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

              <div className="w-[36px] h-[36px] rounded-[8px] bg-[#0040C1]/10 flex items-center justify-center text-[#0040C1] mt-1 shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>

              <h4 className="text-[17px] font-semibold text-foreground tracking-tight mt-2">
                {item.title}
              </h4>
              <p className="text-[14px] leading-[24px] text-muted-foreground">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Standard bottom space before footer */}
      <div className="w-full h-[60px]" />

      <Footer />
    </div>
  );
}
