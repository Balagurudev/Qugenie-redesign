import os
import glob
import re

files = glob.glob("src/pages/solutions-*/ui/Solutions*.tsx", recursive=True)

for file in files:
    with open(file, "r", encoding="utf-8") as f:
        content = f.read()

    if "import BorderGlow" not in content:
        content = content.replace("import { PixelCanvas } from \"@/shared/ui/pixel-logo-grid\";", "import { PixelCanvas } from \"@/shared/ui/pixel-logo-grid\";\nimport BorderGlow from \"@/components/ui/border-glow\";")

    pattern_open = re.compile(r'<div \s*key=\{idx\}\s*className="group relative bg-\[#050510\] border border-white/5 p-6 rounded-\[16px\] flex flex-col gap-3 shadow-sm transition-all overflow-hidden cursor-pointer hover:border-white/10 hover:shadow-\[0_0_30px_rgba\(255,255,255,0\.03\)\]"\s*>')
    
    replacement_open = """<BorderGlow
              key={idx}
              className="w-full h-full cursor-pointer"
              edgeSensitivity={36}
              glowColor="220 100 60"
              backgroundColor="#03010a"
              borderRadius={16}
              glowRadius={31}
              glowIntensity={2.1}
              coneSpread={25}
              animated={false}
              colors={['#5586ff', '#0040C1', '#002060']}
            >
              <div className="p-6 h-full flex flex-col gap-3 group">"""
    
    content = pattern_open.sub(replacement_open, content)

    # Replace the closing </div> that matches the outer div before `))} `
    pattern_close = re.compile(r'</div>\s*\n\s*</div>\s*\n\s*\)\)}')
    replacement_close = """</div>\n              </div>\n            </BorderGlow>\n          ))}"""
    content = pattern_close.sub(replacement_close, content)

    with open(file, "w", encoding="utf-8") as f:
        f.write(content)
