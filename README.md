# Denivra.com — Modern AI Automation Agency Website

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment Options

### Option 1: Lovable (Recommended)
1. Push to GitHub
2. Connect repo to Lovable
3. Auto-deploy on push

### Option 2: Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

Or connect GitHub repo at netlify.com for auto-deploy.

### Option 3: Replit
1. Import from GitHub
2. Add build command: `npm run build`
3. Add run command: `npx vite preview --host 0.0.0.0`

## 📁 Project Structure

```
denivra-website/
├── src/
│   ├── components/
│   │   ├── ROICalculator.tsx   # Interactive ROI calculator
│   │   ├── ChatWidget.tsx      # Pivot AI chatbot
│   │   ├── ProductCard.tsx     # Product tier cards
│   │   └── TestimonialCard.tsx # Client testimonials
│   ├── App.tsx                 # Main application
│   ├── main.tsx               # Entry point
│   └── index.css              # Tailwind + custom styles
├── public/
│   └── favicon.svg            # Site favicon
├── index.html                 # HTML template
└── package.json
```

## 🎨 Design System

### Colors
- **Primary:** Blue gradient (#0ea5e9 → #8b5cf6)
- **Background:** Dark slate (#020617)
- **Glass effects:** White/5% + blur

### Typography
- **Sans:** Inter
- **Mono:** JetBrains Mono

## 🔌 Chatbot Integration

The ChatWidget component is designed to connect to Clawdbot/Pivot. To enable live chat:

1. Set up a chat API endpoint at `/api/chat`
2. The endpoint should accept POST with `{ message: string }`
3. Return `{ message: string }` for AI responses

For demo/fallback, the widget uses local response logic.

## 🧮 ROI Calculator

Interactive calculator that estimates:
- Monthly hours saved
- Monthly cost savings
- First-year ROI
- Payback period

Based on:
- Team size
- Hours on manual tasks
- Average hourly rate
- Email/call volume

## 📦 Products Featured

1. **Nous Assist** ($499) - Entry-level
2. **Nous Connect** ($2,499) - Full-featured
3. **Nous Command** (Custom) - Enterprise

## 🔧 Customization

### Update Products
Edit the `products` array in `App.tsx`

### Update Use Cases
Edit the `useCases` array in `App.tsx`

### Update Testimonials
Edit the `testimonials` array in `App.tsx`

### Update Styling
Modify `tailwind.config.js` and `src/index.css`

## 📝 License

© 2025 Denivra Inc. All rights reserved.
