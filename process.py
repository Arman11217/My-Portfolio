import os
import re

with open('backup/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

def extract_section(start_marker, end_marker=None):
    if end_marker:
        pattern = f"{re.escape(start_marker)}(.*?){re.escape(end_marker)}"
        match = re.search(pattern, html, re.DOTALL)
        if match:
            return match.group(1).strip()
    else:
        # If no end marker, just find start and guess the end (not used)
        pass
    return ""

def to_jsx(html_str):
    # Basic HTML to JSX conversions
    jsx = html_str.replace('class=', 'className=')
    jsx = jsx.replace('for=', 'htmlFor=')
    jsx = jsx.replace('<!--', '{/*')
    jsx = jsx.replace('-->', '*/}')
    # Close void elements (img, input, hr, br, meta, link)
    jsx = re.sub(r'<img([^>]*?)(?<!/)>', r'<img\1 />', jsx)
    jsx = re.sub(r'<input([^>]*?)(?<!/)>', r'<input\1 />', jsx)
    jsx = re.sub(r'<hr([^>]*?)(?<!/)>', r'<hr\1 />', jsx)
    jsx = re.sub(r'<br([^>]*?)(?<!/)>', r'<br\1 />', jsx)
    # Remove inline style strings or convert them. For simplicity, convert simple styles
    # style="width: 90%;" -> style={{ width: '90%' }}
    def style_replacer(match):
        style_str = match.group(1)
        # simplistic conversion
        props = style_str.split(';')
        jsx_props = []
        for prop in props:
            if not prop.strip(): continue
            k, v = prop.split(':', 1)
            k = k.strip()
            # to camelCase
            k = re.sub(r'-([a-z])', lambda m: m.group(1).upper(), k)
            jsx_props.append(f"{k}: '{v.strip()}'")
        return 'style={{ ' + ', '.join(jsx_props) + ' }}'
    jsx = re.sub(r'style="([^"]*)"', style_replacer, jsx)
    
    # Handle onsubmit="handleFormSubmit(event)" -> onSubmit={handleFormSubmit}
    jsx = jsx.replace('onsubmit=', 'onSubmit=')
    jsx = jsx.replace('onclick=', 'onClick=')
    # handle onclick="openCertModal('assets/images/certificate-1.jpg', 'Applied AI & Deep Learning Certification')"
    jsx = re.sub(r'onClick="([^"]*)"', r'onClick={() => \1}', jsx)
    
    # Remove onclick="window.print()" -> onClick={() => window.print()}
    # The regex above already handles this!
    
    return jsx

sections = {
    'Navbar': extract_section('<!-- Navigation Bar -->', '<!-- Floating Kinetic Side Rail (Luxury Morphing Orbit) -->'),
    'SideRail': extract_section('<!-- Floating Kinetic Side Rail (Luxury Morphing Orbit) -->', '<!-- Main Content -->'),
    'Hero': extract_section('<!-- HERO SECTION -->', '<!-- ABOUT SECTION -->'),
    'About': extract_section('<!-- ABOUT SECTION -->', '<!-- FEATURED PROJECTS SECTION -->'),
    'Projects': extract_section('<!-- FEATURED PROJECTS SECTION -->', '<!-- SKILLS MATRIX SECTION -->'),
    'Skills': extract_section('<!-- SKILLS MATRIX SECTION -->', '<!-- EXPERIENCE & CERTIFICATES SECTION -->'),
    'Experience': extract_section('<!-- EXPERIENCE & CERTIFICATES SECTION -->', '<!-- RESEARCH & CURRENT INTERESTS SECTION -->'),
    'Interests': extract_section('<!-- RESEARCH & CURRENT INTERESTS SECTION -->', '<!-- CONTACT SECTION -->'),
    'Contact': extract_section('<!-- CONTACT SECTION -->', '</main>'),
    'Modals': extract_section('<!-- RESUME MODAL -->', '<!-- FOOTER -->'),
    'Footer': extract_section('<!-- FOOTER -->', '<!-- Back To Top Button -->'),
}

os.makedirs('src/components', exist_ok=True)

for name, content in sections.items():
    if not content: continue
    jsx_content = to_jsx(content)
    # For Modals it has 2 modals, wrap in Fragment
    if name == 'Modals':
        jsx_content = f'import React from "react";\n\nexport default function {name}() {{\n  return (\n    <>\n      {jsx_content}\n    </>\n  );\n}}'
    else:
        jsx_content = f'import React from "react";\n\nexport default function {name}() {{\n  return (\n    <>\n      {jsx_content}\n    </>\n  );\n}}'
    
    with open(f'src/components/{name}.jsx', 'w', encoding='utf-8') as f:
        f.write(jsx_content)

print("Components generated.")
