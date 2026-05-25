import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus, Minus } from "lucide-react";

const FONT = "'Mirage Display Medium','Mirage Display Medium Placeholder',sans-serif";

const faqs = [
  { question: "Can we host QuGenie on our own servers?", answer: "Yes. QuGenie is built for on-premise deployment first. You can run the entire stack on your own infrastructure — air-gapped if required — with no telemetry pipelines back to us. Custom SLAs available." },
  { question: "How is QuGenie different from SAP, Oracle, or Microsoft Dynamics?", answer: "We don't charge per-user licenses or force telemetry pipelines. QuGenie gives you full sovereignty over your data and infrastructure, with agentic AI built directly into the core rather than bolted on." },
  { question: "Can we start with just one or two modules?", answer: "Yes. Our platform doesn't punish incremental adoption. You can pick the modules you need today and add the rest at your pace. Every transaction joins the shared ledger from day one." },
  { question: "How does the AI work, exactly?", answer: "We run agentic AI directly on your hardware or secure cloud node. It provides insight, audit, and automation natively. Your operational data is analyzed entirely in-situ with zero external API calls." },
  { question: "Is our data secure? What about compliance?", answer: "Absolutely. QuGenie uses a chained-hash ledger to make every transaction tamper-proof. It also includes built-in statutory engines for India-first compliance, generating audit packs on demand." },
  { question: "What's the implementation timeline?", answer: "Because we eliminated middleware tax and bloated enterprise lag, standard implementations run in days, not years. We get your operations running quickly and predictably." },
  { question: "Can we migrate from our current ERP?", answer: "Yes. QuGenie includes a modern REST API out of the box. We assist your team in migrating data from legacy systems like Tally or SAP and setting up real-time integrations." },
  { question: "How is QuGenie priced?", answer: "We charge zero license fees forever. There are no per-user taxes or forced subscriptions. You pay a predictable, flat cost for implementation and support, letting your business scale freely." },
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
