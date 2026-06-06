import os
import re

TARGET_DIR = r"c:\Users\qugates\Downloads\Qugenie prototype test\src"

replacements = {
    # Any hover bg with dark blues
    r"hover:bg-\[#0033a0\]": "hover:bg-[var(--primary)] hover:brightness-110",
    r"hover:bg-\[#00359E\]": "hover:bg-[var(--primary)] hover:brightness-110",
    r"hover:bg-\[#004EEB\]": "hover:bg-[var(--primary)] hover:brightness-110",
    r"hover:bg-\[#0040C1\]": "hover:bg-[var(--primary)] hover:brightness-110",
    
    # Shadows
    r"shadow-\[0_8px_20px_rgba\(0,64,193,0\.3\)\]": "shadow-[0_8px_20px_var(--glow-primary)]",
    r"hover:shadow-\[0_20px_40px_rgba\(0,64,193,0\.2\)\]": "hover:shadow-[0_20px_40px_var(--glow-primary)]",
    r"shadow-\[0_20px_40px_rgba\(0,64,193,0\.2\)\]": "shadow-[0_20px_40px_var(--glow-primary)]",
    
    # Backgrounds
    r"bg-\[#0040C1\]": "bg-[var(--primary)]",
    r"bg-\[#004EEB\]": "bg-[var(--primary)]",
    r"bg-\[#2970FF\]": "bg-[var(--primary)]",
    
    # Gradients
    r"via-\[#0040C1\]": "via-[var(--primary)]",
    r"from-\[#0040C1\]": "from-[var(--primary)]",
    r"to-\[#0040C1\]": "to-[var(--primary)]",
    r"via-\[#004EEB\]": "via-[var(--primary)]",
    r"from-\[#004EEB\]": "from-[var(--primary)]",
    r"from-\[#5586ff\]": "from-[var(--primary)]",
    r"via-\[#5586ff\]": "via-[var(--primary)]",
    r"bg-\[#5586ff\]": "bg-[var(--primary)]",
    
    # Text and Border
    r"text-\[#0040C1\]": "text-[var(--primary)]",
    r"border-\[#0040C1\]": "border-[var(--primary)]",
    r"text-\[#004EEB\]": "text-[var(--primary)]",
    r"border-\[#004EEB\]": "border-[var(--primary)]",
    
    # And lowercases
    r"\[#0040c1\]": "[var(--primary)]",
    r"\[#004eeb\]": "[var(--primary)]",
    r"\[#0033a0\]": "[var(--primary)]"
}

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content
    for pattern, replacement in replacements.items():
        content = re.sub(pattern, replacement, content)

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}")

for root, _, files in os.walk(TARGET_DIR):
    for file in files:
        if file.endswith((".tsx", ".ts", ".jsx", ".js", ".css")):
            process_file(os.path.join(root, file))
