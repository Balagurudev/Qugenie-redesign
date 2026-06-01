import os
import re

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    if 'designSystem === "ebay"' not in content:
        return

    # Replacements dictionary
    replacements = {
        r'bg-\[\#FAFAF9\]': 'bg-[#FAFAF9] dark:bg-background',
        r'text-\[\#111111\]': 'text-[#111111] dark:text-white',
        r'text-\[\#111\]': 'text-[#111] dark:text-white',
        r'text-\[\#555\]': 'text-[#555] dark:text-[#A6A6A6]',
        r'text-\[\#666\]': 'text-[#666] dark:text-[#A6A6A6]',
        r'text-\[\#777\]': 'text-[#777] dark:text-[#A6A6A6]',
        r'text-\[\#999\]': 'text-[#999] dark:text-[#A6A6A6]',
        r'bg-white': 'bg-white dark:bg-[#111111]',
        r'border-\[\#d1d1d1\]': 'border-[#d1d1d1] dark:border-[#333]',
        r'border-gray-100': 'border-gray-100 dark:border-[#333]',
        r'bg-\[\#fcfcfc\]': 'bg-[#fcfcfc] dark:bg-[#222]',
        r'bg-\[\#fafafa\]': 'bg-[#fafafa] dark:bg-[#1a1a1a]',
        r'border-\[\#f0f0f0\]': 'border-[#f0f0f0] dark:border-[#333]',
        r'bg-\[\#fff5f0\]': 'bg-[#fff5f0] dark:bg-[#2a1a1a]'
    }

    parts = content.split('designSystem === "ebay"')
    if len(parts) > 1:
        ebay_part = parts[1]
        
        for k, v in replacements.items():
            pattern = k + r'(?!\s*dark:)'
            ebay_part = re.sub(pattern, v, ebay_part)
            
        new_content = parts[0] + 'designSystem === "ebay"' + ebay_part
        
        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {filepath}")

for root, _, files in os.walk('src'):
    for file in files:
        if file.endswith('.tsx'):
            process_file(os.path.join(root, file))
