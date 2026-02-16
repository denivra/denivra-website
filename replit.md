# Denivra Website

## Overview

Denivra is a marketing and product website for Denivra Inc., an AI automation agency that sells two things: (1) the "Nous" product line — on-premises AI automation appliances built on Mac Mini hardware powered by n8n, Ollama, and local LLMs for small businesses (cafés, salons, CPAs, restaurants, payroll, real estate), and (2) enterprise consulting services for banks and fintechs (BaaS architecture, payment infrastructure, compliance automation, legacy modernization).

The site is a React single-page application with client-side routing, built with Vite, TypeScript, and Tailwind CSS. It includes 30+ pages covering products, industry verticals, enterprise services, blog posts, case studies, an ROI calculator, a chatbot widget, and legal pages.

## Recent Changes (Feb 2026)

- **Use Cases System**: New `useCases.ts` data file with 68 detailed use cases, each with workflow steps, tier applicability, tools, and industry mapping. New UseCasesPage and UseCaseDetailPage with animated workflow visualizations
- **Animated Workflow Demos**: WorkflowDemo component on homepage showing 3 real-world automation flows (Email→QuickBooks, Service→Invoice→Stripe, Telegram Command) with animated step-by-step diagrams
- **Emoji → Icon Migration**: All emojis replaced with Lucide icons across ProductCard, ProductPage, IndustryPage for professional look
- **Solo Capabilities Enhanced**: Added Telegram control ("message it anytime"), email summaries with proposed actions, HubSpot light sync, research tasks, local file access to Nous Solo product data
- **Images Added**: Hero device image, product Mac Mini image, workflow illustration, office setup photo in public/images/
- **Navigation Updated**: Added "Use Cases" link to desktop and mobile navigation
- **Product Pages Enhanced**: Now show included workflow count per tier, link to filtered use cases page with workflow diagrams
- **AutomationsPage Fixed**: Removed duplicate nav/footer/ChatWidget, now uses shared Layout; fixed old tier names (Assist/Connect/Command → Solo/Pro/Enterprise)
- **Product Tier Rename**: Assist → Solo ($2,800), Connect → Pro ($4,800), Command → Enterprise ($7,500)
- **Hardware Specs Added**: Each tier now shows Apple M4 chip, RAM (24GB/48GB), storage, and LLM capability
- **Managed Services Data**: New `managedServices.ts` with support tiers ($99/$249/mo) and managed services packages ($499+/mo)
- **Homepage Rebuild**: New hero "Your AI Employee That Never Sleeps", n8n+Ollama badge, hardware-first messaging, hero device image
- **Pricing Page Rebuild**: Tabbed interface (Hardware + Setup vs Support & Managed Services), deployment packages, FAQ
- **Product/Industry Pages**: Show recommended tier, "starts from" pricing, hardware specs
- **Solution/Enterprise Pages Cleanup**: Removed duplicate nav/footer/ChatWidget from SmallBusinessPage, EnterprisePage, CallCentersPage, ServicePage, AutomationsPage — all now use shared Layout
- **Updated product references**: All "Nous Assist"→"Nous Solo", "Nous Connect"→"Nous Pro" across solution pages
- **Vite config cleaned**: Removed merge conflict, removed console/debugger stripping from dev mode

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
- `/products/:id` — Product detail pages (nous-solo, nous-pro, nous-enterprise)
- `/products/voice-ai` — Standalone voice AI page
- `/industries/:slug` — Industry-specific pages (cafe, cpa, restaurant, salon, payroll, realty)
- `/solutions/*` — Solution pages (call-centers, small-business, enterprise)
- `/enterprise/:serviceId` — Enterprise service detail pages
- `/blog`, `/blog/:slug` — Blog listing and individual posts
- `/case-studies`, `/case-studies/:slug` — Case study listing and detail
- `/use-cases`, `/use-cases/:slug` — Use case listing and detail with workflow visualizations
- `/pricing`, `/roi-calculator`, `/automations`, `/about`, `/contact`
- `/privacy`, `/terms` — Legal pages

### Data Layer
There is **no database**. All content is stored as TypeScript data files in `src/data/`:
- `products.ts` — Three product tiers (Nous Solo $2,800, Nous Pro $4,800, Nous Enterprise $7,500) with hardware specs
- `managedServices.ts` — Support tiers ($99/$249/mo) and managed services packages ($499+/mo)
- `industries.ts` — Six industry verticals with features, pricing, ROI data, recommended tier mapping
- `blogPosts.ts` — Blog content with markdown-like string content
- `caseStudies.ts` — Case study content with metrics and testimonials
- `useCases.ts` — 68 detailed use cases with workflow steps, tier applicability, tools, and industry mapping
- `automations.ts` — Automation capabilities catalog
- `enterpriseServices.ts` — Enterprise consulting service descriptions
- `chatbotKnowledge.ts` — SPIN-model sales knowledge base for the chatbot

Each data file exports getter functions (e.g., `getProductById()`, `getIndustryBySlug()`, `getBlogPost()`) used by page components.

### Component Architecture
- `src/components/` — Shared UI components (Navigation, Footer, ChatWidget, ROICalculator, ProductCard, ErrorBoundary, etc.)
- `src/pages/` — Page-level components organized by section (products/, industries/, solutions/, enterprise/, blog/, legal/)
- Pages render as fragments (`<>...</>`) and rely on Layout for nav/footer/chat
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
- `vite.config.ts` — Clean config with `base: '/'`, ES2020 target

### Styling Conventions
- Dark theme with `bg-dark-950` as the base background
- Glass morphism effects via `.glass` utility class (white/5 background, backdrop blur, border)
- Gradient text via `.gradient-text` class
- Custom color palette defined in `tailwind.config.js` (primary blues, accent purple/pink/cyan, dark slate scale)
- Inter font for body, JetBrains Mono for code
- Custom animations: gradient, float, pulse-slow, glow

### Path Aliases
TypeScript path alias `@/*` maps to `./src/*` (configured in `tsconfig.json`). Note: Vite config does not currently include the corresponding resolve alias — this may need to be added if `@/` imports are used.

## Product Tiers

| Tier | Price | Chip | RAM | Storage | LLM Capability |
|------|-------|------|-----|---------|----------------|
| Nous Solo | from $2,800 | Apple M4 10-core | 24GB Unified | 512GB SSD | Llama 3.1 (8B) for focused tasks |
| Nous Pro | from $4,800 | Apple M4 Pro 12-core | 48GB Unified | 1TB SSD | Llama 3.1 (8B-13B) + Mixtral |
| Nous Enterprise | from $7,500 | Apple M4 Pro 12-core | 48GB Unified | 2TB SSD (encrypted) | Llama 3.1 (70B quantized) + any model |

### Industry → Tier Mapping
- Café, Salon → Nous Solo
- CPA, Restaurant, Realty → Nous Pro
- Payroll → Nous Enterprise

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
