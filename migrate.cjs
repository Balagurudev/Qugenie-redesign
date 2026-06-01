const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  if (content.includes('EbaySolutionTemplate')) return; // Already processed

  // Inject imports
  const importInject = `import { useThemeCustomizer } from "@/contexts/ThemeCustomizerContext";\nimport { EbaySolutionTemplate } from "@/widgets/ebay/EbaySolutionTemplate";\n`;
  content = importInject + content;

  // Find the component function name
  const compMatch = content.match(/export default function ([A-Za-z0-9_]+)\(\) {/);
  if (!compMatch) return;
  const compName = compMatch[1];

  // Extract tagline
  const taglineMatch = content.match(/<motion\.span[^>]*>\s*([^<]+)\s*<\/motion\.span>/);
  const tagline = taglineMatch ? taglineMatch[1].trim() : 'SOLUTION';

  // Extract title
  const titleMatch = content.match(/<h1[^>]*>\s*([\s\S]*?)\s*<\/h1>/);
  const title = titleMatch ? titleMatch[1].trim().replace(/\s+/g, ' ').replace(/—/g, '-').replace(/<br\s*\/?>/gi, '') : compName;

  // Extract subtitle
  const subtitleMatch = content.match(/<h2[^>]*>\s*([\s\S]*?)\s*<\/h2>/);
  const subtitle = subtitleMatch ? subtitleMatch[1].trim().replace(/\s+/g, ' ').replace(/—/g, '-').replace(/<br\s*\/?>/gi, '') : '';

  // Extract description
  const descMatch = content.match(/<p[^>]*text-muted-foreground[^>]*>\s*([\s\S]*?)<\/p>/);
  const description = descMatch ? descMatch[1].trim().replace(/\s+/g, ' ').replace(/—/g, '-').replace(/<br\s*\/?>/gi, '') : '';

  // Identify features array name
  const featuresNameMatch = content.match(/const ([A-Za-z0-9_]+) = \[\s*\{/);
  const featuresName = featuresNameMatch ? featuresNameMatch[1] : 'features';

  // Inject the hook and conditional return
  const hookInject = `\n  const { designSystem } = useThemeCustomizer();\n\n  if (designSystem === "ebay") {\n    return (\n      <EbaySolutionTemplate \n        tagline="${tagline}" \n        title="${title}" \n        subtitle="${subtitle}" \n        description="${description}" \n        features={${featuresName}}\n      />\n    );\n  }\n`;
  
  content = content.replace(/(export default function [A-Za-z0-9_]+\(\) {)/, `$1${hookInject}`);

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log('Processed', filePath);
}

const pagesDir = path.join(process.cwd(), 'src/pages');
const folders = fs.readdirSync(pagesDir).filter(f => f.startsWith('solutions-') && f !== 'solutions-quikynet');
folders.forEach(f => {
  const uiDir = path.join(pagesDir, f, 'ui');
  if (fs.existsSync(uiDir)) {
    const files = fs.readdirSync(uiDir).filter(file => file.endsWith('.tsx'));
    files.forEach(file => {
      processFile(path.join(uiDir, file));
    });
  }
});
