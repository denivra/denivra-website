# Denivra Website Strategic Analysis

**Source:** Replit AI Agent Analysis (2026-02-14)
**Status:** Reference document for implementation

---

## Section 1: Business & Concept Analysis

### Current Business Model

Company: Denivra Inc. — founded 2024 by two co-founders (fintech/banking CIO + full-stack AI engineer).

Two distinct revenue tracks:

| Track | What It Sells | ICP | Revenue Model |
|-------|---------------|-----|---------------|
| SMB Product (Nous line) | AI automation appliance: hardware (Mac Mini) + software, deployed on-premises | Solopreneurs, SMBs (1-20 employees) in cafes, salons, CPA, restaurant, payroll, real estate | One-time hardware ($2,800-$5,800) + optional monthly support ($99-$449/mo) |
| Enterprise Consulting | BaaS architecture, payment infra, KYC/AML, compliance automation, legacy modernization | Banks, fintechs, regulated financial institutions | Hourly consulting ($200+/hr) |

### Misalignments Identified

1. **Two completely different businesses on one site.** The SMB product line (selling $2,800 Mac Minis to cafe owners) and the enterprise fintech consulting ($200/hr BaaS architecture for banks) target radically different ICPs.

2. **Pricing confusion across pages.** SmallBusinessPage shows "$499 starting price" while product tiers start at $2,800. Industry pages show "$1,299-$1,799" for cafe setup.

3. **No clear primary conversion funnel.** 30+ routes but no structured path from awareness to purchase.

4. **Enterprise consulting pages have no social proof specific to those services.**

5. **Industry pages are disconnected from product tiers.**

6. **The "Denivra" brand and the "Nous" brand compete.**

### Recommended Positioning: Concept A

**"Nous — The On-Premises AI Appliance"**

- Core offer: Vertical-specific AI automation hardware
- Each industry gets a named product (Nous Cafe, Nous Salon, etc.)
- Primary personas: (1) Small business owner overwhelmed by admin; (2) Multi-location operator
- Primary CTA: "See Your Industry" → Industry page → ROI Calculator → Book Demo

---

## Section 2: UX & Information Architecture

### Current IA Problems

- 30+ routes for a startup with one enterprise case study
- Most pages duplicate content in different arrangements
- Homepage is 686-line monolith duplicating nav/footer already in Layout
- Eight enterprise service pages that are essentially the same template

### Proposed IA (Concept A)

```
/ (homepage)
├── /products
│   ├── /nous-assist
│   ├── /nous-connect
│   └── /nous-command
├── /industries
│   ├── /cafe, /salon, /restaurant, /cpa, /payroll, /realty
│   └── /enterprise (consolidates all 8 enterprise + 3 solution pages)
├── /pricing (comparison table + ROI calculator inline)
├── /case-studies
├── /resources
│   ├── /blog
│   ├── /how-it-works (replaces /automations)
│   └── /security (data privacy, compliance, on-premises)
├── /about
├── /contact (with embedded Calendly)
├── /privacy, /terms
```

**Key changes:**
- Eliminated 14 pages (8 enterprise services, 3 solutions, voice-ai standalone, roi-calculator standalone, automations)
- Consolidated enterprise into single page
- Added /resources hub for SEO content cluster
- Added /security for enterprise trust-building

---

## Section 3: CMS & Content Model

Current: 100% static TypeScript files (~2,700 lines). Every content change requires code deploy.

### Content Types Defined

- Product: id, name, tagline, tier, price, features, hardware specs, integrations
- Industry: id, name, painPoints[], recommendedProduct (ref), features, ROI data
- CaseStudy: client, industry (ref), product (ref), challenge, solution, results[]
- BlogPost: title, excerpt, content, category, publishedAt
- Page: slug, title, sections (ContentBlock[])

---

## Section 4: Technical & Architecture Plan

### Critical Issues

| Issue | Impact |
|-------|--------|
| Duplicate nav/footer in App.tsx vs Layout | Maintenance burden, inconsistency |
| No code splitting | 500KB+ initial bundle |
| SmallBusinessPage "$499" vs "$2,800" | Pricing confusion |
| No SSR/SSG | Zero SEO, invisible to search |
| No meta tags | Can't be found |
| No analytics | Can't optimize |

### Prioritized Fix List

| Priority | Item | Effort |
|----------|------|--------|
| P0 | Add SEO meta tags | 1 day |
| P0 | Fix pricing inconsistencies | 2 hours |
| P0 | Deduplicate App.tsx nav/footer | 4 hours |
| P1 | Add route-based code splitting | 4 hours |
| P1 | Image optimization | 4 hours |
| P1 | Add sitemap.xml and robots.txt | 1 hour |
| P1 | Add analytics | 2 hours |
| P2 | Migrate to SSG framework | 2-3 weeks |

---

## Section 5: Content & Conversion Strategy

### Core Pages & Objectives

| Page | Funnel Stage | Objective |
|------|--------------|-----------|
| Homepage | Top | "I understand what this is" |
| Industry Pages | Top/Mid | "This is built for MY business" |
| Product Pages | Mid | "I know which tier I need" |
| Pricing | Mid | "The price is fair" |
| Case Studies | Mid/Bottom | "Others like me succeeded" |
| Contact/Demo | Bottom | "I'm ready to talk" |

---

## Section 6: 90-Day Roadmap

### Phase 1: Discovery & Foundations (Weeks 1-3)

- [ ] 1.1 Unify App.tsx into Layout component
- [ ] 1.2 Fix pricing inconsistencies (SmallBusinessPage "$499" → correct pricing)
- [ ] 1.3 Add SEO meta tags (react-helmet-async)
- [ ] 1.4 Add sitemap.xml + robots.txt ✅ DONE
- [ ] 1.5 Add analytics (Plausible/GA4)
- [ ] 1.6 Consolidate enterprise pages (8 → 1)
- [ ] 1.7 Add route-based code splitting ✅ DONE
- [ ] 1.8 Image optimization
- [ ] 1.9 Embed Calendly on contact page

### Phase 2: Core Experience Rebuild (Weeks 4-8)

- [ ] 2.1 Redesign homepage narrative flow
- [ ] 2.2 Add "How It Works" page
- [ ] 2.3 Add Security/Privacy page
- [ ] 2.4 Industry page redesign
- [ ] 2.5 Create comparison content
- [ ] 2.6 Implement lead capture
- [ ] 2.7 Content production (4-6 blog posts)
- [ ] 2.8 Restructure data files to match content model

### Phase 3: Optimization & Experiments (Weeks 9-12)

- [ ] 3.1 Analyze Phase 1-2 analytics
- [ ] 3.2 A/B test homepage hero
- [ ] 3.3 Add structured data (JSON-LD) ✅ DONE
- [ ] 3.4 Performance audit (Lighthouse 90+)
- [ ] 3.5 Evaluate SSG rebuild
- [ ] 3.6 CMS evaluation
- [ ] 3.7 Publish 4 more blog posts + 1 industry guide

---

## Implementation Status

**Completed:**
- ✅ Security fixes (env vars, DOMPurify, console stripping)
- ✅ SEO basics (OG tags, JSON-LD, sitemap, robots.txt)
- ✅ Code splitting (lazy loading all routes) — 1.7
- ✅ Error boundary
- ✅ 404 page
- ✅ Fix pricing inconsistencies — 1.2 (SmallBusinessPage, ROICalculator, chatbotKnowledge)
- ✅ 1.1 Deduplicate App.tsx into Layout (extract nav/footer) — 2026-02-14
- ✅ 1.5 Add analytics (GA4 placeholder) — 2026-02-14
- ✅ 1.9 Embed Calendly on contact page — 2026-02-14

**In Progress / Next:**
- [ ] 1.6 Consolidate enterprise pages (8 → 1)
- [ ] 1.8 Image optimization
- [ ] Clean up remaining pages with duplicate nav/footer (blog, legal, solutions)

**Commits:**
- `104494f` — Security fixes
- `a44591a` — SEO & Accessibility
- `5c98bbc` — Performance (lazy loading, 404)
- `ace3e5e` — ErrorBoundary, .env.example
- `f9a664b` — Pricing consistency fixes
- `01cabbd` — Phase 1.1: Layout component (dedupe nav/footer)
- `f1d8b8c` — Phase 1.5 + 1.9: GA4 analytics + Calendly embed
