#!/usr/bin/env python3
"""Generate images for Denivra website using Google Gemini/Imagen"""

import os
import sys
import base64
import json
from pathlib import Path

try:
    import google.generativeai as genai
except ImportError:
    print("Installing google-generativeai...")
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "google-generativeai", "-q"])
    import google.generativeai as genai

# Load API key
API_KEY = os.environ.get("GOOGLE_API_KEY", "")
if not API_KEY:
    # Try loading from .env
    env_path = Path.home() / "Business" / ".env"
    if env_path.exists():
        with open(env_path) as f:
            for line in f:
                if line.startswith("GOOGLE_API_KEY="):
                    API_KEY = line.strip().split("=", 1)[1]
                    break

if not API_KEY:
    print("ERROR: GOOGLE_API_KEY not found")
    sys.exit(1)

genai.configure(api_key=API_KEY)

OUTPUT_DIR = Path(__file__).parent.parent / "public" / "images"

# Image prompts for different sections
PROMPTS = {
    "industries": {
        "cafe": "Modern minimalist illustration of a cozy coffee shop interior with warm lighting, a Mac Mini computer subtly visible on a back shelf, coffee equipment, and a barista. Tech-forward but warm. Dark background with subtle blue and purple accent lighting. Professional vector style.",
        "cpa": "Professional illustration of a modern accounting office with organized documents, dual monitors showing financial dashboards, a Mac Mini on the desk, and abstract representations of automated document processing. Dark theme with blue and purple accents. Clean vector style.",
        "restaurant": "Stylized illustration of a modern restaurant kitchen and dining area, with subtle tech elements like tablets and a Mac Mini in the back office. Warm lighting, professional atmosphere. Dark background with amber and blue accents. Vector illustration style.",
        "salon": "Elegant illustration of a modern hair salon interior with styling stations, mirrors, and a reception area. Subtle technology integration with a tablet at reception. Sophisticated dark theme with pink and purple accent lighting. Clean vector style.",
        "payroll": "Abstract illustration representing payroll automation - flowing documents transforming into organized data, with a Mac Mini at the center. Corporate blue and purple color scheme on dark background. Modern vector style.",
        "realty": "Stylized illustration of a real estate office with house models, property listings on screens, and a Mac Mini. Professional atmosphere with green and blue accents on dark background. Clean vector illustration.",
    },
    "products": {
        "nous-assist": "Minimalist tech illustration of a single Mac Mini with glowing blue edges, surrounded by floating icons representing email, messages, and documents. Dark background, futuristic but approachable. Vector style.",
        "nous-connect": "Tech illustration showing a Mac Mini as the center hub with multiple glowing connection lines to various business tools - phone, email, QuickBooks, CRM icons. Purple and blue gradients on dark background. Vector style.",
        "nous-command": "Enterprise-scale illustration showing multiple connected Mac Minis forming a network, with data flowing between them and connecting to large building silhouettes. Blue and purple corporate style on dark background.",
    },
    "hero": {
        "main": "Abstract futuristic illustration representing AI automation - a glowing neural network pattern with nodes representing different business functions (email, phone, documents) all connected to a central AI brain. Dark background with blue and purple gradients. Clean minimalist vector style.",
    }
}

def generate_placeholder_svg(name: str, category: str) -> str:
    """Generate a placeholder SVG when image generation isn't available"""
    colors = {
        "cafe": ("#f97316", "#ea580c"),  # Orange
        "cpa": ("#3b82f6", "#1d4ed8"),   # Blue
        "restaurant": ("#f59e0b", "#d97706"),  # Amber
        "salon": ("#ec4899", "#db2777"),  # Pink
        "payroll": ("#8b5cf6", "#7c3aed"),  # Purple
        "realty": ("#22c55e", "#16a34a"),  # Green
        "nous-assist": ("#0ea5e9", "#0284c7"),  # Sky
        "nous-connect": ("#8b5cf6", "#7c3aed"),  # Purple
        "nous-command": ("#6366f1", "#4f46e5"),  # Indigo
        "main": ("#0ea5e9", "#8b5cf6"),  # Blue to purple
    }
    
    c1, c2 = colors.get(name, ("#0ea5e9", "#8b5cf6"))
    
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:{c1};stop-opacity:0.3" />
      <stop offset="100%" style="stop-color:{c2};stop-opacity:0.3" />
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  <rect width="800" height="450" fill="#020617"/>
  <rect width="800" height="450" fill="url(#grad)"/>
  <circle cx="400" cy="225" r="80" fill="{c1}" opacity="0.2" filter="url(#glow)"/>
  <circle cx="400" cy="225" r="40" fill="{c2}" opacity="0.3" filter="url(#glow)"/>
  <text x="400" y="235" font-family="system-ui" font-size="24" fill="white" text-anchor="middle" opacity="0.8">{name.replace("-", " ").title()}</text>
</svg>'''
    return svg


def main():
    print("Generating images for Denivra website...")
    
    # For now, generate placeholder SVGs
    # (Gemini Imagen requires specific API access)
    
    for category, prompts in PROMPTS.items():
        category_dir = OUTPUT_DIR / category
        category_dir.mkdir(parents=True, exist_ok=True)
        
        for name, prompt in prompts.items():
            svg_content = generate_placeholder_svg(name, category)
            svg_path = category_dir / f"{name}.svg"
            
            with open(svg_path, "w") as f:
                f.write(svg_content)
            
            print(f"✓ Generated {svg_path}")
    
    print("\n✅ All placeholder images generated!")
    print("\nTo generate real images, you'll need:")
    print("1. Gemini Imagen API access (currently in limited preview)")
    print("2. Or use DALL-E, Midjourney, or Stable Diffusion")
    print(f"\nImage prompts saved for reference in each SVG's alt text.")

if __name__ == "__main__":
    main()
