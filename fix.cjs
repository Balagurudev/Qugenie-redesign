const fs = require('fs');
const path = require('path');
const pagesDir = path.join(process.cwd(), 'src/pages');
const folders = fs.readdirSync(pagesDir).filter(f => f.startsWith('solutions-'));

for (const folder of folders) {
  const uiDir = path.join(pagesDir, folder, 'ui');
  if (!fs.existsSync(uiDir)) continue;
  
  const files = fs.readdirSync(uiDir).filter(f => f.endsWith('.tsx'));
  for (const file of files) {
    const filePath = path.join(uiDir, file);
    let code = fs.readFileSync(filePath, 'utf-8');
    
    // Find the if (designSystem === 'ebay') block
    const ifBlockRegex = /  if \(designSystem === "ebay"\) \{\n    return \([\s\S]*?\);\n  \}\n/g;
    const match = ifBlockRegex.exec(code);
    if (match) {
      const block = match[0];
      // Remove it from its current position
      code = code.replace(block, '');
      
      // Insert it right before the final return (
      const finalReturnRegex = /  return \(/;
      code = code.replace(finalReturnRegex, block + '\n  return (');
      
      fs.writeFileSync(filePath, code);
      console.log('Fixed', file);
    }
  }
}
