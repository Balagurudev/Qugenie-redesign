import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus, Minus } from "lucide-react";

const FONT = "'Mirage Display Medium','Mirage Display Medium Placeholder',sans-serif";

const faqs = [
  { question: "What is a sovereign enterprise platform?", answer: "A sovereign enterprise platform means you own the source code, the server, and the database. There is no recurring monthly subscription, no vendor lock-in, and your data never leaves your control." },
  { question: "How do we handle modular upgrades?", answer: "Upgrades are completely modular and optional. You can pull the latest audited builds from our repository and deploy them locally with a single-click script, without disrupting current features." },
  { question: "What are the hosting requirements?", answer: "Our lightweight Go/React architecture is highly optimized. It can run on as little as a dual-core CPU with 4GB RAM for smaller offices, or scale up to multi-node clusters on private clouds." },
  { question: "How does local AI data privacy work?", answer: "We configure and run local LLMs (like Llama 3 or Mistral) directly on your physical hardware or secure VPS node. Your operational ledger data is analyzed entirely in-situ, with zero external API calls." },
  { question: "What support packages are available?", answer: "We offer custom SLAs ranging from 9-to-5 general tech assistance to dedicated 24/7 incident support, custom development hours, and automated backup monitoring." },
  { question: "Can we integrate existing legacy systems?", answer: "Yes. QuGenie comes out-of-the-box with a standard modern REST API. We assist in migrating data from legacy systems (like Tally, SAP, or spreadsheets) and setting up real-time integrations." },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      style={{ width: "100%", background: "var(--surface-secondary)", borderBottom: "1px solid var(--surface-divider)", display: "flex", justifyContent: "center", padding: "80px 0", transition: "background 0.3s ease" }}
      data-name="FAQ"
    >
      <div style={{ width: "100%", maxWidth: 820, padding: "0 24px", display: "flex", flexDirection: "column", gap: 48 }}>

        {/* Header — centered */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "center", textAlign: "center", fontFamily: FONT }}>
          <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "var(--text-brand)" }}>
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 style={{ fontSize: 44, fontWeight: 600, color: "var(--text-heading)", lineHeight: 1.15, letterSpacing: "-0.03em", margin: 0 }}>
            Questions, answered.
          </h2>
          <p style={{ fontSize: 18, fontWeight: 400, color: "var(--text-subtle)", lineHeight: 1.6, letterSpacing: "-0.015em", margin: 0, maxWidth: 560 }}>
            Everything you need to know about pricing, sovereignty, modules, and support.
          </p>
        </div>

        {/* Accordion list */}
        <div style={{ borderTop: "1px solid var(--surface-divider)" }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: "1px solid var(--surface-divider)", padding: "24px 0", fontFamily: FONT }}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "left" as const }}
              >
                <span style={{ fontSize: 18, fontWeight: 600, color: "var(--text-heading)", letterSpacing: "-0.025em", lineHeight: 1.35, fontFamily: FONT }}>
                  {faq.question}
                </span>
                <span style={{ flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", width: 32, height: 32, borderRadius: "50%", border: "1px solid var(--accordion-icon-border)", color: "var(--text-brand)" }}>
                  {openIndex === i ? <Minus size={15} /> : <Plus size={15} />}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <p style={{ fontFamily: FONT, fontSize: 15, color: "var(--text-subtle)", lineHeight: 1.7, fontWeight: 400, letterSpacing: "-0.01em", margin: "16px 0 0 0", paddingRight: 40 }}>
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
