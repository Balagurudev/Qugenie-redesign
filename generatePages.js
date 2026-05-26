import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pages = [
  {
    folder: 'solutions-compliance',
    componentName: 'SolutionsCompliance',
    tagline: 'INDIA COMPLIANCE',
    title: 'One Platform for Audit-Ready Compliance',
    desc: 'Statutory compliance built into the platform, not bolted on. Thirteen statutory engines covering EPFO, ESIC, Professional Tax, TDS (24Q, 26Q, 27Q), GST (GSTR-1, 3B, 9), MCA, LWF, and sector overlays. Audit packs generated on demand. Chained-hash ledger ensures evidence integrity.',
    features: [
      { title: "PF / EPFO ECR", desc: "Centralise pf / epfo ecr data and documents — every record, one source of truth." },
      { title: "ESI Returns", desc: "Built-in esi returns workflows with audit trail." },
      { title: "Professional Tax", desc: "Built-in professional tax workflows with audit trail." },
      { title: "TDS 24Q / 26Q / 27Q", desc: "Built-in tds 24q / 26q / 27q workflows with audit trail." },
      { title: "GST GSTR-1 / 3B / 9", desc: "Built-in gst gstr-1 / 3b / 9 workflows with audit trail." },
      { title: "MCA Audit Trail", desc: "Built-in mca audit trail workflows with audit trail." },
      { title: "Sector-specific Packs", desc: "Built-in sector-specific packs workflows with audit trail." }
    ]
  },
  {
    folder: 'solutions-communications',
    componentName: 'SolutionsCommunications',
    tagline: 'COMMUNICATIONS',
    title: 'One Platform for Every Employee Conversation',
    desc: 'Identity-anchored multi-channel communication. In-app notifications, organisation newsfeed, polls and pulse surveys, broadcast announcements. Delivery via in-app, email, SMS, and integrated messengers. Audit-traced for compliance-sensitive communications.',
    features: [
      { title: "In-App Notifications", desc: "Centralise in-app notifications data and documents — every record, one source of truth." },
      { title: "Organisation Newsfeed", desc: "Built-in organisation newsfeed workflows with audit trail." },
      { title: "Polls & Pulse Surveys", desc: "Built-in polls & pulse surveys workflows with audit trail." },
      { title: "Broadcast Announcements", desc: "Built-in broadcast announcements workflows with audit trail." },
      { title: "Multi-channel Delivery", desc: "Built-in multi-channel delivery workflows with audit trail." },
      { title: "Engagement Analytics", desc: "Built-in engagement analytics workflows with audit trail." }
    ]
  },
  {
    folder: 'solutions-vault',
    componentName: 'SolutionsVault',
    tagline: 'DOCUMENT VAULT',
    title: 'One Platform for Every Business Document',
    desc: 'One-touch document intake. Upload a bill, receipt, contract, certificate, or scan — OCR and entity extraction produce a draft transaction in the right module. Sensitivity tiering (T1-T5) governs access. Retention schedules per statutory category. Every access audit-traced.',
    features: [
      { title: "Drag-and-drop Upload", desc: "Centralise drag-and-drop upload data and documents — every record, one source of truth." },
      { title: "OCR & Entity Extraction", desc: "Built-in ocr & entity extraction workflows with audit trail." },
      { title: "Auto-routing to Modules", desc: "Built-in auto-routing to modules workflows with audit trail." },
      { title: "Sensitivity Tiering", desc: "Built-in sensitivity tiering workflows with audit trail." },
      { title: "Retention Schedules", desc: "Built-in retention schedules workflows with audit trail." },
      { title: "Access Audit Trail", desc: "Built-in access audit trail workflows with audit trail." }
    ]
  },
  {
    folder: 'solutions-learning',
    componentName: 'SolutionsLearning',
    tagline: 'LEARNING & DEVELOPMENT',
    title: 'One Platform from Onboarding to Mastery',
    desc: 'Build the workforce of tomorrow. Course catalogue, learning path management, certification tracking, and skill matrices that connect learning to appraisal. Sector flavours ship with role-aligned learning bundles.',
    features: [
      { title: "Course Catalogue", desc: "Centralise course catalogue data and documents — every record, one source of truth." },
      { title: "Learning Paths", desc: "Built-in learning paths workflows with audit trail." },
      { title: "Certification Tracking", desc: "Built-in certification tracking workflows with audit trail." },
      { title: "Skill Matrix", desc: "Built-in skill matrix workflows with audit trail." },
      { title: "Compliance Training", desc: "Built-in compliance training workflows with audit trail." },
      { title: "Learning Analytics", desc: "Built-in learning analytics workflows with audit trail." }
    ]
  },
  {
    folder: 'solutions-analytics',
    componentName: 'SolutionsAnalytics',
    tagline: 'BI & ANALYTICS',
    title: 'One Platform for Cross-Module Insight',
    desc: 'Cross-module insight built on a sovereign analytical store. Per-module dashboards surface in-context; the aggregate MIS surface combines signals across HRMS, Finance, Operations, and the rest. Read-only by design — analytics never mutates business data.',
    features: [
      { title: "Per-module Dashboards", desc: "Centralise per-module dashboards data and documents — every record, one source of truth." },
      { title: "Aggregate MIS", desc: "Built-in aggregate mis workflows with audit trail." },
      { title: "Custom Dashboard Builder", desc: "Built-in custom dashboard builder workflows with audit trail." },
      { title: "Real-time Sync", desc: "Built-in real-time sync workflows with audit trail." },
      { title: "Scheduled Reports", desc: "Built-in scheduled reports workflows with audit trail." },
      { title: "Drill-down Analytics", desc: "Built-in drill-down analytics workflows with audit trail." }
    ]
  }
];

const template = (page) => 'import { motion } from "motion/react";\n' +
'import { Footer } from "@/widgets/footer/ui/Footer";\n' +
'\n' +
'export default function ' + page.componentName + '() {\n' +
'  const handleDemoClick = () => {\n' +
'    window.location.hash = "#/contact";\n' +
'  };\n' +
'\n' +
'  const features = ' + JSON.stringify(page.features, null, 4) + ';\n' +
'\n' +
'  return (\n' +
'    <div className="w-full flex flex-col items-center min-h-screen bg-background text-foreground pt-[120px] font-[\'Mirage_Display_Medium\',\'Mirage_Display_Medium_Placeholder\',sans-serif]" data-name="' + page.componentName + 'Page">\n' +
'      \n' +
'      {/* Top Tagline */}\n' +
'      <section className="w-full max-w-[1120px] px-6 pt-6">\n' +
'        <motion.span \n' +
'          initial={{ opacity: 0, y: 15 }}\n' +
'          animate={{ opacity: 1, y: 0 }}\n' +
'          className="text-[14px] font-semibold uppercase tracking-[3px] text-[#0040C1]"\n' +
'        >\n' +
'          ' + page.tagline + '\n' +
'        </motion.span>\n' +
'      </section>\n' +
'\n' +
'      {/* Spectacular Graphic Hero Panel */}\n' +
'      <section className="w-full max-w-[1120px] px-6 py-6">\n' +
'        <motion.div \n' +
'          initial={{ opacity: 0, y: 20 }}\n' +
'          animate={{ opacity: 1, y: 0 }}\n' +
'          className="h-[360px] w-full rounded-[24px] relative overflow-hidden bg-gradient-to-br from-[#0040C1] via-[#002266] to-[#03010a] flex flex-col justify-end p-8 md:p-12 shadow-lg"\n' +
'        >\n' +
'          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent pointer-events-none" />\n' +
'          \n' +
'          <div className="relative z-10 max-w-[600px] flex flex-col gap-2">\n' +
'            <span className="bg-white/10 text-white font-semibold text-[12px] uppercase tracking-widest px-3 py-1 rounded-[4px] self-start mb-2">ENTERPRISE READY</span>\n' +
'            <h1 className="text-[38px] md:text-[48px] font-semibold text-white tracking-tight leading-none">\n' +
'              ' + page.tagline + '\n' +
'            </h1>\n' +
'          </div>\n' +
'        </motion.div>\n' +
'      </section>\n' +
'\n' +
'      {/* Split Description Section */}\n' +
'      <section className="w-full max-w-[1120px] px-6 py-[60px] grid grid-cols-1 md:grid-cols-12 gap-12 items-center">\n' +
'        \n' +
'        {/* Left Title */}\n' +
'        <div className="md:col-span-7 flex flex-col items-start gap-4">\n' +
'          <h2 className="text-[32px] md:text-[44px] lg:text-[56px] font-sans font-medium tracking-tighter uppercase leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white to-[#8a93a2]">\n' +
'            ' + page.title + '\n' +
'          </h2>\n' +
'        </div>\n' +
'\n' +
'        {/* Right Copy & CTA */}\n' +
'        <div className="md:col-span-5 flex flex-col items-start gap-6">\n' +
'          <p className="text-[16px] leading-[28px] text-muted-foreground">\n' +
'            ' + page.desc + '\n' +
'          </p>\n' +
'          <motion.button \n' +
'            whileHover={{ scale: 1.03, y: -2 }}\n' +
'            whileTap={{ scale: 0.98 }}\n' +
'            onClick={handleDemoClick}\n' +
'            className="bg-[#0040C1] text-white font-semibold text-[15px] px-[26px] py-[14px] rounded-[8px] cursor-pointer shadow-sm hover:shadow-[0px_8px_16px_rgba(0,64,193,0.25)] transition-all"\n' +
'          >\n' +
'            Book a Free Demo\n' +
'          </motion.button>\n' +
'        </div>\n' +
'\n' +
'      </section>\n' +
'\n' +
'      {/* Grid of Cards */}\n' +
'      <section className="w-full max-w-[1120px] px-6 py-[40px]">\n' +
'        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">\n' +
'          {features.map((item, idx) => (\n' +
'            <motion.div \n' +
'              key={idx}\n' +
'              whileHover={{ y: -4, borderColor: "rgba(0, 64, 193, 0.4)" }}\n' +
'              className="bg-card border border-border p-6 rounded-[16px] flex flex-col gap-3 shadow-sm transition-all relative overflow-hidden group"\n' +
'            >\n' +
'              <div className="absolute top-0 left-0 w-full h-[3px] bg-[#0040C1] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />\n' +
'\n' +
'              <div className="w-[36px] h-[36px] rounded-[8px] bg-[#0040C1]/10 flex items-center justify-center text-[#0040C1] mt-1 shrink-0">\n' +
'                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\n' +
'                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />\n' +
'                </svg>\n' +
'              </div>\n' +
'\n' +
'              <h4 className="text-[17px] font-semibold text-foreground tracking-tight mt-2">\n' +
'                {item.title}\n' +
'              </h4>\n' +
'              <p className="text-[14px] leading-[24px] text-muted-foreground">\n' +
'                {item.desc}\n' +
'              </p>\n' +
'            </motion.div>\n' +
'          ))}\n' +
'        </div>\n' +
'      </section>\n' +
'\n' +
'      {/* Standard bottom space before footer */}\n' +
'      <div className="w-full h-[60px]" />\n' +
'\n' +
'      <Footer />\n' +
'    </div>\n' +
'  );\n' +
'}';

pages.forEach(page => {
  const folderPath = path.join(__dirname, 'src', 'pages', page.folder, 'ui');
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }
  const filePath = path.join(folderPath, page.componentName + '.tsx');
  fs.writeFileSync(filePath, template(page));
  console.log('Created ' + filePath);
});

// Update App.tsx
const appTsxPath = path.join(__dirname, 'src', 'app', 'App.tsx');
let appTsx = fs.readFileSync(appTsxPath, 'utf8');

const imports = [
  'import SolutionsCompliance from "@/pages/solutions-compliance/ui/SolutionsCompliance";',
  'import SolutionsCommunications from "@/pages/solutions-communications/ui/SolutionsCommunications";',
  'import SolutionsVault from "@/pages/solutions-vault/ui/SolutionsVault";',
  'import SolutionsLearning from "@/pages/solutions-learning/ui/SolutionsLearning";',
  'import SolutionsAnalytics from "@/pages/solutions-analytics/ui/SolutionsAnalytics";'
].join('\n');

if (!appTsx.includes('import SolutionsCompliance')) {
  appTsx = appTsx.replace('import SolutionsQuikynet from "@/pages/solutions-quikynet/ui/SolutionsQuikynet";', 
    'import SolutionsQuikynet from "@/pages/solutions-quikynet/ui/SolutionsQuikynet";\n' + imports);
}

const routes1 = [
  '      } else if (hash === "#/solutions/compliance") {',
  '        setPage("solutions-compliance");',
  '      } else if (hash === "#/solutions/communications") {',
  '        setPage("solutions-communications");',
  '      } else if (hash === "#/solutions/vault") {',
  '        setPage("solutions-vault");',
  '      } else if (hash === "#/solutions/learning") {',
  '        setPage("solutions-learning");',
  '      } else if (hash === "#/solutions/analytics") {',
  '        setPage("solutions-analytics");'
].join('\n');

if (!appTsx.includes('#/solutions/compliance')) {
  appTsx = appTsx.replace('      } else if (hash === "#/solutions/quikynet") {\n        setPage("solutions-quikynet");', 
    '      } else if (hash === "#/solutions/quikynet") {\n        setPage("solutions-quikynet");\n' + routes1);
}

const routes2 = [
  '      {page === "solutions-compliance" && <SolutionsCompliance />}',
  '      {page === "solutions-communications" && <SolutionsCommunications />}',
  '      {page === "solutions-vault" && <SolutionsVault />}',
  '      {page === "solutions-learning" && <SolutionsLearning />}',
  '      {page === "solutions-analytics" && <SolutionsAnalytics />}'
].join('\n');

if (!appTsx.includes('<SolutionsCompliance />')) {
  appTsx = appTsx.replace('      {page === "solutions-quikynet" && <SolutionsQuikynet />}', 
    '      {page === "solutions-quikynet" && <SolutionsQuikynet />}\n' + routes2);
}

fs.writeFileSync(appTsxPath, appTsx);
console.log('Updated App.tsx');
