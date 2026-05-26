const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/pages/solutions-*/ui/Solutions*.tsx');

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  // 1. Add import if it doesn't exist
  if (!content.includes('PixelCanvas')) {
    content = content.replace('import { Footer } from "@/widgets/footer/ui/Footer";', 
      'import { Footer } from "@/widgets/footer/ui/Footer";\nimport { PixelCanvas } from "@/shared/ui/pixel-logo-grid";');
  }

  // 2. Replace the card map logic
  const searchPattern = /<motion\.div\s*key=\{idx\}\s*whileHover=\{\{\s*y:\s*-4,\s*borderColor:\s*"rgba\(0,\s*64,\s*193,\s*0\.4\)"\s*\}\}\s*className="bg-card border border-border p-6 rounded-\[16px\] flex flex-col gap-3 shadow-sm transition-all relative overflow-hidden group"\s*>[\s\S]*?<\/motion\.div>/g;
  
  const replacement = `<div 
              key={idx}
              className="group relative bg-[#050510] border border-white/5 p-6 rounded-[16px] flex flex-col gap-3 shadow-sm transition-all overflow-hidden cursor-pointer hover:border-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.03)]"
            >
              {/* Background Pixel Animation Overlay */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <PixelCanvas gap={3} speed={2} colors={["#e0f2fe", "#7dd3fc", "#0ea5e9"]} />
              </div>

              <div className="relative z-10 flex flex-col gap-3 h-full">
                <div className="w-[36px] h-[36px] rounded-[8px] bg-white/5 flex items-center justify-center text-white mt-1 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>

                <h4 className="text-[17px] font-semibold text-white tracking-tight mt-2">
                  {item.title}
                </h4>
                <p className="text-[14px] leading-[24px] text-white/60">
                  {item.desc}
                </p>
              </div>
            </div>`;

  if (searchPattern.test(content)) {
    content = content.replace(searchPattern, replacement);
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  } else {
    console.log(`Could not find match in ${file}`);
  }
}
