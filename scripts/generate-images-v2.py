#!/usr/bin/env python3
"""Generate images for Denivra website using Google Imagen 3"""

import os
import sys
import base64
from pathlib import Path

try:
    from google import genai
    from google.genai import types
except ImportError:
    print("Installing google-genai...")
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "google-genai", "-q"])
    from google import genai
    from google.genai import types

# Load API key
API_KEY = os.environ.get("GOOGLE_API_KEY", "")
if not API_KEY:
    env_path = Path.home() / "Business" / ".env"
    if env_path.exists():
        with open(env_path) as f:
            for line in f:
                if line.startswith("GOOGLE_API_KEY="):
                    API_KEY = line.strip().split("=", 1)[-1]
                    break

if not API_KEY:
    print("ERROR: GOOGLE_API_KEY not found")
    sys.exit(1)

# Initialize client
client = genai.Client(api_key=API_KEY)

OUTPUT_DIR = Path(__file__).parent.parent / "public" / "images"

# Prompts optimized for Imagen
PROMPTS = {
    "industries/cafe": "Minimalist vector illustration of a modern cozy coffee shop with warm ambient lighting, subtle technology elements like a small computer, coffee equipment and plants. Dark navy background with soft orange and blue accent glows. Clean geometric style, no text.",
    
    "industries/cpa": "Clean vector illustration of a modern accounting workspace with organized documents flowing into a computer screen showing charts and graphs. Abstract representation of automated data processing. Dark background with blue and purple accent lighting. Geometric minimalist style, no text.",
    
    "industries/restaurant": "Stylized vector illustration of an upscale restaurant interior combining kitchen and dining elements. Warm amber lighting with subtle tech integration. Dark background with orange and blue accents. Modern geometric style, no text or people.",
    
    "industries/salon": "Elegant vector illustration of a modern beauty salon with styling chairs, mirrors with soft lighting, and a sleek reception desk. Dark background with pink and purple accent glows. Sophisticated minimalist style, no text.",
    
    "products/nous-assist": "Futuristic minimalist illustration of a small glowing cube (representing Mac Mini) floating in space with three orbital rings representing email, chat, and documents. Dark space background with soft blue glow. Clean tech aesthetic, no text.",
    
    "products/nous-connect": "Tech illustration of a glowing central hub with multiple connection lines extending outward to floating icons representing phone, email, accounting, and CRM. Dark background with purple and blue gradients. Network visualization style, no text.",
    
    "hero/main": "Abstract futuristic illustration of a glowing AI brain made of interconnected nodes and circuits, with subtle representations of business automation (emails, phone, documents) flowing around it. Dark navy background with vibrant blue and purple gradients. Clean minimal tech style, no text.",
}


def generate_image(prompt: str, output_path: Path) -> bool:
    """Generate an image using Imagen 3"""
    try:
        print(f"  Generating: {output_path.name}...")
        
        response = client.models.generate_images(
            model="imagen-3.0-generate-002",
            prompt=prompt,
            config=types.GenerateImagesConfig(
                number_of_images=1,
                aspect_ratio="16:9",
                safety_filter_level="BLOCK_ONLY_HIGH",
            )
        )
        
        if response.generated_images:
            image = response.generated_images[0]
            # Save the image
            output_path.parent.mkdir(parents=True, exist_ok=True)
            
            # The image data is in image.image.image_bytes
            image_bytes = image.image.image_bytes
            
            with open(output_path, "wb") as f:
                f.write(image_bytes)
            
            print(f"  ✓ Saved: {output_path}")
            return True
        else:
            print(f"  ✗ No image generated for {output_path.name}")
            return False
            
    except Exception as e:
        print(f"  ✗ Error generating {output_path.name}: {e}")
        return False


def main():
    print("🎨 Generating images for Denivra website using Imagen 3...\n")
    
    success_count = 0
    total_count = len(PROMPTS)
    
    for path, prompt in PROMPTS.items():
        output_path = OUTPUT_DIR / f"{path}.png"
        if generate_image(prompt, output_path):
            success_count += 1
    
    print(f"\n✅ Generated {success_count}/{total_count} images")
    
    if success_count < total_count:
        print("\n⚠️  Some images failed. This may be due to:")
        print("   - API quota limits")
        print("   - Content policy restrictions")
        print("   - Network issues")


if __name__ == "__main__":
    main()
