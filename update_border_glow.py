import os
import re

TARGET_DIR = r"c:\Users\qugates\Downloads\Qugenie prototype test\src\pages"

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content
    
    # Update useThemeCustomizer destructuring to include palette if it doesn't already
    if "useThemeCustomizer" in content and "BorderGlow" in content:
        if "const { designSystem }" in content:
            content = content.replace("const { designSystem }", "const { designSystem, palette }")
        elif "const { designSystem," not in content and "palette" not in content:
            # Maybe it's not destructured exactly like that
            pass
            
        # Replace the hardcoded colors array in BorderGlow
        content = re.sub(
            r"colors=\{\['#[a-fA-F0-9]+',\s*'#[a-fA-F0-9]+',\s*'#[a-fA-F0-9]+'\]\}",
            r"colors={[palette.shades['400'], palette.shades['800'], palette.shades['950']]}",
            content
        )

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}")

for root, _, files in os.walk(TARGET_DIR):
    for file in files:
        if file.endswith((".tsx", ".ts", ".jsx", ".js")):
            process_file(os.path.join(root, file))
