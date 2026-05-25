const fs = require('fs');
const glob = require('glob');

const newClasses = 'text-[32px] md:text-[44px] lg:text-[56px] font-sans font-bold tracking-tighter uppercase leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white to-[#8a93a2]';

function updateFile(file) {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  const patterns = [
    { p: /className="text-\[32px\] md:text-\[38px\] font-semibold text-foreground tracking-tight leading-snug"/g, r: `className="${newClasses}"` },
    { p: /<h2\s+style=\{\{[^}]*fontFamily:\s*FONT[^}]*\}\}>/g, r: `<h2 className="${newClasses} text-center">` },
    { p: /className="text-\[32px\] md:text-\[44px\] font-semibold leading-tight tracking-tight"/g, r: `className="${newClasses} text-center"` },
    { p: /className="text-\[40px\] md:text-\[56px\] leading-\[1.1\] font-semibold tracking-tight uppercase"/g, r: `className="${newClasses}"` },
    { p: /className="text-\[36px\] md:text-\[48px\] font-semibold tracking-\[-0.02em\] uppercase text-center mb-6"/g, r: `className="${newClasses} text-center mb-6"` },
    { p: /className="text-\[24px\] leading-\[32px\] md:text-\[36px\] md:leading-\[44px\] font-bold tracking-tight text-white font-\['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif\] uppercase"/g, r: `className="${newClasses}"` },
    { p: /className="text-\[48px\] leading-\[60px\] md:text-\[72px\] md:leading-\[90px\] font-bold tracking-tight text-white font-\['Mirage_Display_Medium','Mirage_Display_Medium_Placeholder',sans-serif\]"/g, r: `className="${newClasses}"` },
    { p: /className="text-\[32px\] font-semibold text-foreground tracking-\[-0.02em\]"/g, r: `className="${newClasses}"` },
    { p: /className="text-\[32px\] md:text-\[44px\] font-semibold text-foreground leading-\[1.2\] max-w-\[800px\] tracking-\[-0.02em\]"/g, r: `className="${newClasses}"` }
  ];

  for (const {p, r} of patterns) {
    if (p.test(content)) {
      content = content.replace(p, r);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated', file);
  }
}

glob.sync('src/**/*.{tsx,jsx}').forEach(updateFile);
