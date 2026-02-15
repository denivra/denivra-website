# Denivra Website

## Overview

Denivra is a marketing and product website for Denivra Inc., an AI automation agency that sells two things: (1) the "Nous" product line — on-premises AI automation appliances built on Mac Mini hardware for small businesses (cafés, salons, CPAs, restaurants, payroll, real estate), and (2) enterprise consulting services for banks and fintechs (BaaS architecture, payment infrastructure, compliance automation, legacy modernization).

The site is a React single-page application with client-side routing, built with Vite, TypeScript, and Tailwind CSS. It includes 30+ pages covering products, industry verticals, enterprise services, blog posts, case studies, an ROI calculator, a chatbot widget, and legal pages.

**Known Issues (from project docs):**
- Product pages (`/products/nous-assist`, etc.) have a routing bug where `useParams()` returns undefined because routes are hardcoded instead of using `:id` param — the components fall back to extracting the ID from `useLocation().pathname`
- HubSpot form integration uses placeholder environment variables
- Chatbot (Pivot) connects via WebSocket to an external gateway that may not be configured
- The `vite.config.ts` has a git merge conflict marker that needs resolving (the `base` property)
- `docs/` folder contains a stale GitHub Pages build with hardcoded asset paths — not relevant to Replit deployment

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Stack
- **React 18** with TypeScript, using Vite as the build tool
- **Tailwind CSS 3** for styling with a custom dark theme (dark blues, primary sky-blue, accent purple/pink/cyan)
- **Framer Motion** for page transitions and scroll animations
- **React Router v6** for client-side routing with lazy-loaded pages via `React.lazy()` and `Suspense`
- **Radix UI** primitives for accessible dialog and slider components
- **Recharts** for data visualization (ROI calculator charts)
- **Lucide React** for icons throughout the site
- **DOMPurify** for sanitizing rendered HTML content (blog posts, case studies use markdown-like content stored as strings)

### Routing Architecture
The router is defined in `src/Router.tsx`. All page components are lazy-loaded. The app uses a shared `Layout` component (`src/components/Layout.tsx`) that wraps pages with `Navigation`, `Footer`, and `ChatWidget`.

Key route groups:
- `/` — Home page
- `/products/:id` — Product detail pages (nous-assist, nous-connect, nous-command)
- `/products/voice-ai` — Standalone voice AI page
- `/industries/:slug` — Industry-specific pages (cafe, cpa, restaurant, salon, payroll, realty)
- `/solutions/*` — Solution pages (call-centers, small-business, enterprise)
- `/enterprise/*` — Enterprise service detail pages
- `/blog`, `/blog/:slug` — Blog listing and individual posts
- `/case-studies`, `/case-studies/:slug` — Case study listing and detail
- `/pricing`, `/roi-calculator`, `/automations`, `/about`, `/contact`
- `/privacy`, `/terms` — Legal pages

### Data Layer
There is **no database**. All content is stored as TypeScript data files in `src/data/`:
- `products.ts` — Three product tiers (Nous Assist $2,800, Nous Connect $7,500, Nous Command custom)
- `industries.ts` — Six industry verticals with features, pricing, ROI data
- `blogPosts.ts` — Blog content with markdown-like string content
- `caseStudies.ts` — Case study content with metrics and testimonials
- `automations.ts` — Automation capabilities catalog
- `enterpriseServices.ts` — Enterprise consulting service descriptions
- `chatbotKnowledge.ts` — SPIN-model sales knowledge base for the chatbot

Each data file exports getter functions (e.g., `getProductById()`, `getIndustryBySlug()`, `getBlogPost()`) used by page components.

### Component Architecture
- `src/components/` — Shared UI components (Navigation, Footer, ChatWidget, ROICalculator, ProductCard, ErrorBoundary, etc.)
- `src/pages/` — Page-level components organized by section (products/, industries/, solutions/, enterprise/, blog/, legal/)
- Pages that render dynamic content (ProductPage, IndustryPage, ServicePage, CaseStudyPage, BlogPostPage) extract their ID/slug from URL params or pathname

### ChatWidget (Pivot AI)
The chat widget (`src/components/ChatWidget.tsx`) connects via WebSocket to an external gateway. Configuration comes from environment variables `VITE_WS_URL` and `VITE_WS_TOKEN`. It includes a local knowledge base fallback, session persistence via sessionStorage, and quick-action buttons.

### Contact Form
The contact page (`src/pages/ContactPage.tsx`) has two modes:
1. **HubSpot embedded form** — if `VITE_HUBSPOT_PORTAL_ID` and `VITE_HUBSPOT_FORM_ID` env vars are set
2. **Custom form** — falls back to a built-in form that POSTs to a serverless function

### Serverless Functions
Located in `netlify/functions/` (designed for Netlify deployment):
- `chat.ts` — Proxies chat messages to an external Clawdbot endpoint
- `contact.ts` — Handles contact form submissions, forwards to HubSpot API and a webhook

### Build & Dev
- Dev server: `npm run dev` (Vite on port 5000, host 0.0.0.0)
- Build: `npm run build` (outputs to `dist/`)
- Preview: `npm run preview`
- The `vite.config.ts` has a merge conflict that should be resolved — keep `base: '/'` for Replit deployment
- Production build strips `console` and `debugger` statements via esbuild

### Styling Conventions
- Dark theme with `bg-dark-950` as the base background
- Glass morphism effects via `.glass` utility class (white/5 background, backdrop blur, border)
- Gradient text via `.gradient-text` class
- Custom color palette defined in `tailwind.config.js` (primary blues, accent purple/pink/cyan, dark slate scale)
- Inter font for body, JetBrains Mono for code
- Custom animations: gradient, float, pulse-slow, glow

### Path Aliases
TypeScript path alias `@/*` maps to `./src/*` (configured in `tsconfig.json`). Note: Vite config does not currently include the corresponding resolve alias — this may need to be added if `@/` imports are used.

## External Dependencies

### Environment Variables
| Variable | Purpose | Status |
|----------|---------|--------|
| `VITE_HUBSPOT_PORTAL_ID` | HubSpot form portal ID | Placeholder — needs real value |
| `VITE_HUBSPOT_FORM_ID` | HubSpot form ID | Placeholder — needs real value |
| `VITE_WS_URL` | WebSocket URL for Pivot chatbot | Optional — chatbot degrades gracefully |
| `VITE_WS_TOKEN` | Auth token for chatbot WebSocket | Optional |
| `VITE_CLAWDBOT_WEBCHAT_URL` | Clawdbot chat endpoint (serverless) | Used in Netlify functions |
| `VITE_BLAND_AI_PHONE` | Bland AI phone number | Referenced but not critical |
| `GOOGLE_API_KEY` | Google Imagen API for image generation scripts | Only for offline scripts |

### Third-Party Services
- **HubSpot** — CRM and form embedding for lead capture (not yet connected)
- **Clawdbot/Pivot** — External AI chatbot service via WebSocket gateway
- **Google Analytics (GA4)** — Tracking tag in `index.html` (placeholder ID `G-XXXXXXXXXX`)
- **Google Fonts** — Inter and JetBrains Mono fonts loaded via CDN
- **Netlify Functions** — Serverless backend for chat proxy and contact form handling

### NPM Dependencies (Runtime)
- `react`, `react-dom` — UI framework
- `react-router-dom` — Client-side routing
- `framer-motion` — Animations
- `lucide-react` — Icon library
- `@radix-ui/react-dialog`, `@radix-ui/react-slider` — Accessible UI primitives
- `recharts` — Charts for ROI calculator
- `tailwind-merge`, `clsx` — CSS class utilities
- `dompurify` — HTML sanitization for rendered content

### NPM Dependencies (Dev)
- `vite`, `@vitejs/plugin-react` — Build tooling
- `typescript` — Type checking
- `tailwindcss`, `postcss`, `autoprefixer` — CSS processing