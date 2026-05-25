import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Footer } from "@/widgets/footer/ui/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    org: "",
    email: "",
    employees: "1-10",
    posture: "on-premise",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full flex flex-col items-center min-h-screen bg-background text-foreground pt-[120px] font-['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif]" data-name="ContactPage">
      
      {/* Grid Layout Container */}
      <section className="w-full max-w-[1120px] px-6 py-[60px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
        
        {/* Left Column: Context Info */}
        <div className="lg:col-span-5 flex flex-col items-start gap-6">
          <span className="text-[14px] font-semibold uppercase tracking-[3px] text-[#0040C1]">DEMO BOOKING</span>
          <h1 className="text-[44px] md:text-[52px] font-semibold tracking-tight leading-none text-foreground">
            Rule Your Enterprise.
          </h1>
          <p className="text-[16px] leading-[26px] text-muted-foreground mt-2">
            Schedule a dedicated operational session with our architecture team. We will walk you through modular FSD deployment, sovereign data ownership patterns, and zero-silos business workflows tailored for your business.
          </p>

          <div className="flex flex-col gap-4 mt-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#0040C1]/10 flex items-center justify-center text-[#0040C1]">
                ✓
              </div>
              <span className="text-[14px] font-medium text-foreground">100% Data Sovereignty Assured</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#0040C1]/10 flex items-center justify-center text-[#0040C1]">
                ✓
              </div>
              <span className="text-[14px] font-medium text-foreground">Sovereign On-Premise Sandbox Available</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#0040C1]/10 flex items-center justify-center text-[#0040C1]">
                ✓
              </div>
              <span className="text-[14px] font-medium text-foreground">Named Operational Architecture Promise</span>
            </div>
          </div>
        </div>

        {/* Right Column: High-Fidelity Animated Glass Form */}
        <div className="lg:col-span-7 w-full bg-card border border-border/80 p-8 md:p-[40px] rounded-[24px] shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent pointer-events-none" />

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 relative z-10"
              >
                <h3 className="text-[22px] font-semibold text-foreground">Request Architectural Access</h3>
                
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] font-semibold uppercase tracking-wider text-muted-foreground">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name" 
                    className="w-full bg-secondary border border-border rounded-[8px] px-4 py-3 text-[14px] text-foreground focus:outline-none focus:border-[#0040C1] transition-colors"
                  />
                </div>

                {/* Organization */}
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] font-semibold uppercase tracking-wider text-muted-foreground">Organization Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.org}
                    onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                    placeholder="e.g. QuGates Technologies" 
                    className="w-full bg-secondary border border-border rounded-[8px] px-4 py-3 text-[14px] text-foreground focus:outline-none focus:border-[#0040C1] transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] font-semibold uppercase tracking-wider text-muted-foreground">Work Email</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com" 
                    className="w-full bg-secondary border border-border rounded-[8px] px-4 py-3 text-[14px] text-foreground focus:outline-none focus:border-[#0040C1] transition-colors"
                  />
                </div>

                {/* Deployment Posture Preference */}
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] font-semibold uppercase tracking-wider text-muted-foreground">Preferred Deployment Posture</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button 
                      type="button"
                      onClick={() => setFormData({ ...formData, posture: "cloud" })}
                      className={`py-3.5 px-4 rounded-[8px] border text-[13px] font-semibold tracking-wider uppercase transition-colors cursor-pointer ${
                        formData.posture === "cloud" 
                          ? "bg-[#0040C1] border-[#0040C1] text-white" 
                          : "bg-secondary border-border text-foreground hover:bg-secondary/80"
                      }`}
                    >
                      Cloud SaaS
                    </button>
                    <button 
                      type="button"
                      onClick={() => setFormData({ ...formData, posture: "on-premise" })}
                      className={`py-3.5 px-4 rounded-[8px] border text-[13px] font-semibold tracking-wider uppercase transition-colors cursor-pointer ${
                        formData.posture === "on-premise" 
                          ? "bg-[#0040C1] border-[#0040C1] text-white" 
                          : "bg-secondary border-border text-foreground hover:bg-secondary/80"
                      }`}
                    >
                      On-Premise (Recommended)
                    </button>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] font-semibold uppercase tracking-wider text-muted-foreground">Requirements Summary</label>
                  <textarea 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your business systems, legacy ERP roadblocks, or modular scaling plans." 
                    className="w-full bg-secondary border border-border rounded-[8px] px-4 py-3 text-[14px] text-foreground focus:outline-none focus:border-[#0040C1] transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[#0040C1] text-white font-semibold py-4 rounded-[8px] cursor-pointer shadow-md hover:shadow-[0px_8px_20px_rgba(0,64,193,0.3)] transition-all mt-2"
                >
                  Book Free Architecture Session
                </motion.button>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-[80px] text-center gap-6 relative z-10"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 text-[32px] mb-2">
                  ✓
                </div>
                <h3 className="text-[24px] font-semibold text-foreground">Architectural Request Filed</h3>
                <p className="text-[15px] leading-[26px] text-muted-foreground max-w-[380px]">
                  Thank you, <span className="font-semibold text-foreground">{formData.name}</span>. An operational coordinator from QuGates Technologies Pvt. Ltd. Bengaluru will reach out to <span className="font-semibold text-foreground">{formData.email}</span> within one business hour to align your sandbox.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-[#0040C1] font-semibold text-[14px] hover:underline cursor-pointer mt-4"
                >
                  Submit another request
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </section>

      <Footer />
    </div>
  );
}
