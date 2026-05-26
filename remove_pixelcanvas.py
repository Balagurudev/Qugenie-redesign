import os
import glob
import re

files = glob.glob("src/pages/solutions-*/ui/Solutions*.tsx", recursive=True)

for file in files:
    with open(file, "r", encoding="utf-8") as f:
        content = f.read()

    # Remove the PixelCanvas line entirely
    pattern = re.compile(r"\s*\{?\s*/\*\s*Background Pixel Animation Overlay\s*\*/\s*\}?\s*<PixelCanvas[^>]+/>")
    content = pattern.sub("", content)

    # We can also remove the import statement
    import_pattern = re.compile(r"import\s*\{\s*PixelCanvas\s*\}\s*from\s*['\"]@/shared/ui/pixel-logo-grid['\"];\n?")
    content = import_pattern.sub("", content)

    with open(file, "w", encoding="utf-8") as f:
        f.write(content)
