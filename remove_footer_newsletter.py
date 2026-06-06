import os
import re

TARGET_DIRS = [
    r"c:\Users\qugates\Downloads\Qugenie prototype test\src\pages",
    r"c:\Users\qugates\Downloads\Qugenie prototype test\src\widgets"
]

def process_file(filepath):
    # Don't modify the actual components
    if "src\\widgets\\footer" in filepath or "src\\widgets\\newsletter" in filepath:
        return
    # Also skip App.tsx if it's there
    if "App.tsx" in filepath:
        return

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content
    
    # Remove imports
    content = re.sub(r'import\s+\{\s*Footer\s*\}\s+from\s+[^;]+;', '', content)
    content = re.sub(r'import\s+\{\s*Newsletter\s*\}\s+from\s+[^;]+;', '', content)
    
    # Remove usage
    # <Footer /> or <Footer></Footer>
    content = re.sub(r'<Footer\s*/?>', '', content)
    content = re.sub(r'<Footer>.*?</Footer>', '', content, flags=re.DOTALL)
    
    # Newsletter might have props
    content = re.sub(r'<Newsletter[^>]*/>', '', content)
    content = re.sub(r'<Newsletter[^>]*>.*?</Newsletter>', '', content, flags=re.DOTALL)

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Removed Newsletter/Footer from {filepath}")

for TARGET_DIR in TARGET_DIRS:
    for root, _, files in os.walk(TARGET_DIR):
        for file in files:
            if file.endswith((".tsx", ".ts", ".jsx", ".js")):
                process_file(os.path.join(root, file))
