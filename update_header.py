import re

filepath = r"src\widgets\ebay\EbayHeader.tsx"
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

replacements = {
    r'text-\[\#111\](?!\s*dark:)': 'text-[#111] dark:text-white',
    r'text-\[\#555\](?!\s*dark:)': 'text-[#555] dark:text-[#A6A6A6]',
    r'bg-\[\#111\](?!\s*dark:)': 'bg-[#111] dark:bg-white',
    r'text-white(?!\s*dark:)': 'text-white dark:text-[#111]'
}

for k, v in replacements.items():
    content = re.sub(k, v, content)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
