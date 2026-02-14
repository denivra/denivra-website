# DENIVRA WEBSITE — COMPREHENSIVE EXECUTION PLAN

**Created:** 2026-02-14
**Status:** PENDING APPROVAL
**Estimated Credits:** 2-3 production deploys (30-45 credits)

---

## EXECUTIVE SUMMARY

### Current State Issues
| Issue | Severity | Root Cause |
|-------|----------|------------|
| Product pages show "Not Found" | CRITICAL | Router uses hardcoded paths but ProductPage expects `:id` param |
| No professional images | HIGH | Only placeholder SVG files exist |
| HubSpot form not connected | HIGH | `.env` has placeholder values, no real credentials |
| Enterprise section missing | HIGH | Not built; your banking expertise not leveraged |
| Chatbot unverified | MEDIUM | Uses local knowledge base; needs testing |
| Pages poorly interlinked | MEDIUM | Standalone pages, no cross-sell flow |

### What You Should Have Asked
> "Build a complete, production-ready website with working product pages, professional imagery, verified form integrations, an enterprise section showcasing my banking/transformation expertise, and a chatbot connected to comprehensive product knowledge. Create a detailed plan first, batch all changes, and deploy only once verified."

---

## PART 1: CRITICAL FIXES

### 1.1 Product Pages Routing (BROKEN)

**Problem:** Routes like `/products/nous-assist` use `<ProductPage />` but the component calls `useParams()` for `id`. Since the route is hardcoded (not `/products/:id`), the param is undefined.

**Fix:**
```tsx
// Option A: Extract ID from pathname
const location = useLocation()
const id = location.pathname.split('/').pop()

// Option B: Remove hardcoded routes, use only dynamic
<Route path="/products/:id" element={<ProductPage />} />
```

**Affected Pages:**
- `/products/nous-assist` → "Product Not Found"
- `/products/nous-connect` → "Product Not Found"  
- `/products/nous-command` → "Product Not Found"

### 1.2 HubSpot Integration

**Current State:** `.env` contains:
```
VITE_HUBSPOT_PORTAL_ID=your-portal-id
VITE_HUBSPOT_FORM_ID=your-contact-form-id
```

**Required:**
1. Get actual HubSpot Portal ID from your HubSpot account
2. Create a contact form in HubSpot → get Form ID
3. Update `.env` with real values
4. Netlify: Add environment variables in Site Settings → Build & Deploy → Environment

**Action Required from You:**
- Provide HubSpot Portal ID
- Provide HubSpot Form ID (or I create one if you give me access)

### 1.3 Chatbot Verification

**Current:** Uses `chatbotKnowledge.ts` with pattern matching:
- Product inquiries → Product details
- Pricing questions → Pricing tiers
- Integration questions → Integration list

**Testing Needed:**
- Test all major query types
- Verify responses match current offerings
- Ensure Calendly link works

---

## PART 2: IMAGES STRATEGY

### 2.1 Image Requirements

| Section | Images Needed | Purpose |
|---------|--------------|---------|
| Hero | 1 main visual | AI/automation concept, professional |
| Products (3) | 3 product visuals | Nous Assist, Connect, Command |
| Industries (6) | 6 industry photos | Café, CPA, Restaurant, Salon, Payroll, Realty |
| Enterprise | 3-5 visuals | Banking, boardroom, data visualization |
| Case Studies | 3-4 hero images | Professional business contexts |
| Team/About | 1-2 images | Denivra branding |

### 2.2 Image Sources (Options)

**Option A: AI-Generated (Recommended for speed)**
- Use DALL-E, Midjourney, or Stable Diffusion
- Generate professional business/tech imagery
- ~$5-20 for all images needed
- Full commercial rights

**Option B: Stock Photos**
- Unsplash (free, commercial OK)
- Pexels (free)
- iStock/Shutterstock (paid, higher quality)

**Option C: Custom Photography**
- Most authentic but most expensive
- Schedule shoot of Mac Mini setups, office, etc.

### 2.3 Image Style Guide

```
Style: Clean, modern, professional
Colors: Dark backgrounds (#0f172a), cyan/purple accents
Subjects: Technology, business operations, automation
Mood: Trustworthy, efficient, intelligent
Format: WebP for web, 800-1200px wide, optimized
```

---

## PART 3: ENTERPRISE SECTION

### 3.1 Value Proposition

Leveraging your background:
- **15+ years banking/fintech leadership**
- **$3.5M+ documented cost savings**
- **63 enterprise projects delivered**
- **CIO/IT Director experience**
- **CISM certified**

### 3.2 Enterprise Services Offering

| Service | Description | Target Buyer |
|---------|-------------|--------------|
| **Legacy Modernization** | Analyze, document, and create roadmaps for aging systems (proven: Olympic Payroll 1.6M LOC) | CTO, CIO |
| **AI Transformation Assessment** | Identify automation opportunities, ROI projections, implementation roadmap | CFO, COO |
| **Compliance Automation** | BSA/AML, KYC, regulatory reporting automation | Chief Compliance Officer |
| **Data Platform Architecture** | Snowflake, data warehouse, analytics modernization | CTO, VP Data |
| **Digital Transformation Strategy** | "Five Zeros + One" framework for finance transformation | CFO, CEO |
| **Security & Risk Assessment** | SIEM, threat detection, compliance frameworks | CISO |

### 3.3 Enterprise Page Structure

```
/solutions/enterprise (Complete Rebuild)

1. HERO
   - Headline: "Enterprise AI Transformation — By Someone Who's Done It"
   - Subhead: "15 years leading digital transformation at banks. Now bringing that expertise to your organization."
   - CTA: "Request Assessment"

2. CREDENTIALS SECTION
   - "Led IT for $1B+ bank serving 60,000+ accounts"
   - "$3.5M+ documented cost savings"
   - "100% regulatory compliance across 4 DFS audits"
   - "CISM certified"

3. SERVICE CARDS (6 services)
   - Each with: Icon, Title, 2-line description, "Learn More"

4. PROOF POINTS
   - Case Study: Olympic Payroll (1.6M lines analyzed)
   - Case Study: Banking transformation
   - Metrics bar: Projects | Cost Savings | Uptime

5. PROCESS SECTION
   - Step 1: Discovery Assessment (2 weeks)
   - Step 2: Roadmap & Recommendations
   - Step 3: Phased Implementation
   - Step 4: Knowledge Transfer & Support

6. INDUSTRIES SERVED
   - Banking & Financial Services
   - Fintech
   - Insurance
   - Healthcare (HIPAA)
   - Professional Services

7. CTA SECTION
   - "Start with a Free Assessment"
   - Calendly embed or contact form
```

### 3.4 New Enterprise Sub-Pages

| Page | Content |
|------|---------|
| `/enterprise/legacy-modernization` | Full service page for code analysis, documentation, migration planning |
| `/enterprise/ai-transformation` | Assessment framework, use cases, ROI calculator |
| `/enterprise/compliance-automation` | BSA/AML automation, regulatory dashboards |
| `/enterprise/case-studies` | Enterprise-specific case studies (Olympic Payroll, banking examples) |

---

## PART 4: COMPLETE SITEMAP

### 4.1 Current Pages (Need Fixes)

```
/ (Homepage) ........................ ✅ Working
/contact ............................ ⚠️ HubSpot not connected
/products/nous-assist ............... ❌ BROKEN
/products/nous-connect .............. ❌ BROKEN
/products/nous-command .............. ❌ BROKEN
/products/voice-ai .................. ✅ Working
/industries/cafe .................... ✅ Working
/industries/cpa ..................... ✅ Working
/industries/restaurant .............. ✅ Working
/industries/salon ................... ✅ Working
/industries/payroll ................. ✅ Working
/industries/realty .................. ✅ Working
/solutions/call-centers ............. ✅ Working
/solutions/small-business ........... ✅ Working
/solutions/enterprise ............... ⚠️ Exists but not leveraging your expertise
/case-studies ....................... ✅ Working
/case-studies/:slug ................. ✅ Working (fixed tables)
/blog ............................... ✅ Working
/blog/:slug ......................... ✅ Working
/automations ........................ ✅ Working
/privacy ............................ ✅ Working
/terms .............................. ✅ Working
```

### 4.2 New Pages Needed

```
/about .............................. Company story, team, mission
/enterprise/legacy-modernization .... Service detail page
/enterprise/ai-transformation ....... Service detail page
/enterprise/compliance-automation ... Service detail page
/pricing ............................ Consolidated pricing comparison
/demo ............................... Redirect to Calendly or contact
```

### 4.3 Page Interlinking Strategy

```
HOMEPAGE
├── Hero CTA → /contact
├── Products → /products/:id
├── Industries → /industries/:slug
├── Case Studies → /case-studies/:slug
├── ROI Calculator → stays on page or /pricing
└── Final CTA → /contact

PRODUCT PAGE
├── "Book Demo" → /contact
├── "View Automations" → /automations
├── Related Products → /products/:id
└── Case Study link → /case-studies/:slug

INDUSTRY PAGE
├── Recommended Product → /products/:id
├── Case Study → /case-studies/:slug
├── CTA → /contact
└── "See Similar" → other /industries/:slug

ENTERPRISE PAGE
├── Service cards → /enterprise/:service
├── Case studies → /case-studies/:slug
├── Assessment CTA → /contact with enterprise flag
└── "For Small Business" → /solutions/small-business

CASE STUDY PAGE
├── Product used → /products/:id
├── Related case studies → /case-studies/:slug
└── CTA → /contact
```

---

## PART 5: PAGE CONTENT HOOKS

### 5.1 Hook Strategy per Page Type

**Homepage Hooks:**
- "Your AI Mind That Never Sleeps" — speaks to the always-on promise
- "Real receipts. Real results." — shows literal invoice/cost proof
- ROI Calculator — interactive engagement

**Product Page Hooks:**
- Tier emoji (🚀⚡🏢) — quick visual categorization
- "X Automations Available" — concrete number
- "What's Included" checklist — builds value perception

**Industry Page Hooks:**
- Industry-specific pain point as headline
- "Nous processed X documents overnight" — specific proof
- Case study with exact numbers

**Enterprise Page Hooks (NEW):**
- "By Someone Who's Done It" — credibility from experience
- "$3.5M+ Documented Savings" — proof metric
- "1.6M Lines Analyzed" — scale proof
- "100% Regulatory Compliance" — risk mitigation

### 5.2 Use Cases That Reveal Possibilities

| Use Case | "Aha" Hook | Implementation |
|----------|-----------|----------------|
| **Email Triage** | "What if you woke up to a sorted inbox with drafts ready?" | Show before/after screenshot |
| **Voice Receptionist** | "Never miss a lead at 2 AM again" | Audio sample of AI handling call |
| **Invoice Processing** | "127 invoices processed while you slept" | Real screenshot of processed batch |
| **Competitive Intel** | "Know when your competitor changes their pricing" | Dashboard mockup |
| **Legacy Code Analysis** | "We read 1.6 million lines so you don't have to" | Visualization of codebase map |

---

## PART 6: EXECUTION PHASES

### Phase 1: Critical Fixes (Day 1)
**Scope:** Fix broken functionality
- [ ] Fix product page routing
- [ ] Verify all navigation links work
- [ ] Test chatbot with common queries
- [ ] Document HubSpot credentials needed from you

### Phase 2: Content & Images (Days 2-3)
**Scope:** Visual and content upgrade
- [ ] Generate/source all images (with your approval on style)
- [ ] Rewrite Enterprise page with your credentials
- [ ] Add compelling hooks to each page
- [ ] Create About page

### Phase 3: Enterprise Section (Days 3-4)
**Scope:** Build out enterprise offering
- [ ] Complete Enterprise landing page
- [ ] Create 3 service sub-pages
- [ ] Add enterprise-specific case studies
- [ ] Build "Request Assessment" flow

### Phase 4: Integration & Testing (Day 5)
**Scope:** Verify everything works
- [ ] Configure HubSpot (once you provide credentials)
- [ ] Test all forms
- [ ] Test chatbot extensively
- [ ] Cross-browser testing
- [ ] Mobile responsiveness check

### Phase 5: Single Production Deploy
**Scope:** One deploy with all changes
- [ ] Final review with you
- [ ] Single push to main
- [ ] Verify production site
- [ ] Monitor for issues

---

## PART 7: WHAT I NEED FROM YOU

### Required Before I Start
1. **HubSpot Credentials**
   - Portal ID
   - Form ID for contact form
   - (Or permission to create a form in your HubSpot)

2. **Image Direction**
   - Approve AI-generated vs. stock photos
   - Any specific style preferences
   - Any images you already have (logo high-res, etc.)

3. **Enterprise Services Validation**
   - Confirm the 6 services I proposed
   - Add/remove any services
   - Confirm case studies to feature (Olympic Payroll, banking examples)

4. **Content Approval**
   - Review proposed hooks and headlines
   - Confirm messaging tone
   - Any specific claims to include/exclude

### Optional But Helpful
- Any client testimonials (even informal quotes)
- Specific metrics you want highlighted
- Competitor sites you admire
- Industries you want to de-emphasize

---

## PART 8: CREDIT-CONSCIOUS WORKFLOW

### New Process (No More Wasteful Deploys)
1. **All changes locally** — `npm run dev` for testing
2. **Batch everything** — Multiple fixes in single commit
3. **Preview branch** — Push to `feature/website-fixes`, get deploy preview
4. **Review preview** — You and I verify on preview URL
5. **Single merge** — Only merge to `main` when approved
6. **One production deploy** — Final, verified deploy

### Expected Credit Usage
| Phase | Deploys | Credits |
|-------|---------|---------|
| Preview testing | 2-3 | 0 (previews are unlimited) |
| Production | 1 | 15 |
| **Total** | 1 production | **15 credits** |

---

## APPROVAL REQUIRED

**Before I execute ANY of this, I need your approval on:**

1. ✅ or ❌ — Overall approach
2. ✅ or ❌ — Enterprise services list
3. ✅ or ❌ — Image generation approach
4. ✅ or ❌ — Page structure/sitemap
5. Provide: HubSpot credentials (or delegation to set up)

---

**Reply with approvals/changes, and I'll proceed with Phase 1 fixes only after confirmation.**
