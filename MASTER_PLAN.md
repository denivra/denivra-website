# DENIVRA WEBSITE — MASTER EXECUTION PLAN

**Created:** 2026-02-14
**Version:** 1.0
**Status:** AWAITING APPROVAL

---

## I. EXECUTIVE SUMMARY

### What We're Building

A dual-track website that positions Denivra as:

1. **Nous Suite** — AI automation for SMBs (cafes, CPAs, salons, restaurants)
   - Entry: $75-500/month
   - Audience: Small business owners who hate admin work
   - Value prop: "Your AI mind that never sleeps"

2. **Red Team** — Enterprise consulting for banks/fintechs
   - Entry: $200-600/hour
   - Audience: CTOs, CIOs, CCOs at financial institutions
   - Value prop: "We've built what we're selling you"

### Why This Wins

| Competitor Problem | Denivra Solution |
|-------------------|------------------|
| AI companies are all talk | You have 15 years of production-grade banking infrastructure experience |
| Consultants advise but never operated | You've built $B+ transaction systems, passed DFS audits, led 140+ fintech integrations |
| SMB tools are generic | Industry-specific automation with real receipts (Café Olympiad, CPA examples) |
| Enterprise solutions require big teams | One person with proven systems, lower overhead, faster delivery |

---

## II. BRAND POSITIONING

### Taglines

| Audience | Tagline | Supporting Hook |
|----------|---------|-----------------|
| **SMBs** | "Your AI Mind That Never Sleeps" | "127 invoices processed while you slept" |
| **Enterprise** | "Built by Someone Who's Done It" | "$3.5M+ documented savings. 100% audit compliance." |
| **Universal** | "Real Receipts. Real Results." | Show actual invoices, metrics, before/after |

### Voice & Tone

**Nous (SMB):**
- Conversational, friendly, slightly playful
- Focus on relief: "Stop doing the thing you hate"
- Concrete examples: "Like having a night-shift employee who never calls in sick"

**Red Team (Enterprise):**
- Confident, technical, proof-driven
- Focus on risk mitigation: "Zero findings. Four consecutive audits."
- Specific proof: "1.6M lines analyzed in 6 weeks"

### Trust Signals

| For SMBs | For Enterprise |
|----------|----------------|
| ROI calculator | CISM certification |
| Case studies with dollar amounts | DFS/SOC2/SOX compliance history |
| "Used by X businesses" | 140+ fintech partner integrations |
| Demo videos | Architecture diagrams |
| Customer testimonials | Regulatory proof points |

---

## III. SITEMAP & NAVIGATION

### Information Architecture

```
denivra.com
│
├── / (Homepage)
│   └── Hero with dual-track CTAs
│
├── /products (Nous Suite)
│   ├── /products/nous-assist      → Starter tier ($75-149)
│   ├── /products/nous-connect     → Growth tier ($199-499)
│   ├── /products/nous-command     → Pro tier ($599-1,499)
│   └── /products/comparison       → Side-by-side tiers
│
├── /solutions (Industry Verticals)
│   ├── /solutions/cafes           → Coffee shops, bakeries
│   ├── /solutions/restaurants     → Restaurants, food service
│   ├── /solutions/cpas            → Accountants, tax pros
│   ├── /solutions/salons          → Hair, beauty, spas
│   ├── /solutions/payroll         → Payroll providers
│   ├── /solutions/realty          → Real estate agents
│   ├── /solutions/small-business  → General SMB landing
│   └── /solutions/call-centers    → Call center operations
│
├── /enterprise (Red Team Consulting)
│   ├── /enterprise                → Main landing page
│   ├── /enterprise/baas-architecture        → BaaS platform design
│   ├── /enterprise/payment-infrastructure   → Multi-rail payments
│   ├── /enterprise/onboarding-kyc           → KYC/KYB/CIP automation
│   ├── /enterprise/compliance-automation    → BSA/AML, regulatory
│   ├── /enterprise/middleware-integration   → API & core integration
│   ├── /enterprise/legacy-modernization     → Code analysis, migration
│   ├── /enterprise/security-architecture    → SIEM, IAM, threat detection
│   └── /enterprise/infrastructure           → Data center, cloud, DR
│
├── /case-studies
│   ├── /case-studies/cafe-olympiad          → SMB example
│   ├── /case-studies/olympic-payroll        → Enterprise example (1.6M LOC)
│   ├── /case-studies/banking-transformation → Enterprise example
│   └── /case-studies/[more...]
│
├── /blog
│   └── /blog/:slug
│
├── /automations                   → Automation showcase
├── /pricing                       → Consolidated pricing page
├── /about                         → Company story, credentials
├── /contact                       → HubSpot form + Calendly
├── /demo                          → Redirect to Calendly
├── /privacy                       → Privacy policy
└── /terms                         → Terms of service
```

### Navigation Structure

**Top Nav:**
```
Logo | Products ▼ | Solutions ▼ | Enterprise ▼ | Case Studies | Pricing | [Book Demo]
```

**Products Dropdown:**
```
Nous Assist       → AI receptionist, voice, basic automation
Nous Connect      → Multi-channel, integrations, workflows
Nous Command      → Full orchestration, custom AI, API access
Compare Plans →
```

**Solutions Dropdown:**
```
By Industry               By Use Case
─────────────            ─────────────
Cafes & Coffee           Call Centers
Restaurants              Customer Service
CPAs & Accountants       Lead Qualification
Salons & Spas            Appointment Booking
Payroll Providers        Invoice Processing
Real Estate              
```

**Enterprise Dropdown:**
```
Services                         Why Denivra
─────────────                   ─────────────
BaaS Architecture               $3.5M+ Cost Savings
Payment Infrastructure          100% Audit Compliance
KYC/KYB/CIP Automation          15+ Years Production
Compliance Automation           CISM Certified
Middleware & Integration        
Legacy Modernization            Request Assessment →
Security Architecture           
```

---

## IV. PAGE-BY-PAGE CONTENT PLAN

### A. HOMEPAGE

**Purpose:** Route visitors to the right track (SMB or Enterprise)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  HERO SECTION                                                               │
│  ─────────────────────────────────────────────────────────────────────────  │
│  Headline: "AI That Actually Works for Your Business"                       │
│  Subhead: "From coffee shops to Fortune 500 banks — automation that        │
│           delivers real results, not empty promises."                       │
│                                                                             │
│  [Explore Nous Suite]              [Enterprise Consulting]                  │
│   For small business                For banks & fintechs                    │
│                                                                             │
│  Trust bar: "Trusted by X businesses | $Y saved | Z hours automated"       │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│  PROOF SECTION — "Real Receipts. Real Results."                            │
│  ─────────────────────────────────────────────────────────────────────────  │
│  Three cards with actual screenshots/invoices:                              │
│                                                                             │
│  [Screenshot: Invoice batch]    [Screenshot: Call log]   [Screenshot: ROI] │
│  "127 invoices processed"       "24/7 call handling"     "$3,200/mo saved" │
│  Café Olympiad case study       Voice AI in action       ROI calculator    │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│  DUAL TRACK SECTION                                                         │
│  ─────────────────────────────────────────────────────────────────────────  │
│  ┌─────────────────────────────┐  ┌─────────────────────────────────────┐  │
│  │  🚀 FOR SMALL BUSINESS      │  │  🏢 FOR ENTERPRISE                  │  │
│  │  ─────────────────────────  │  │  ─────────────────────────────────  │  │
│  │  The Nous Suite             │  │  Red Team Consulting                │  │
│  │                             │  │                                     │  │
│  │  AI automation that handles │  │  Banking infrastructure expertise  │  │
│  │  the work you hate:         │  │  from someone who's built it:      │  │
│  │  • Calls & scheduling       │  │  • BaaS architecture               │  │
│  │  • Email & invoices         │  │  • Payment systems                 │  │
│  │  • Customer follow-up       │  │  • Compliance automation           │  │
│  │  • Document processing      │  │  • Legacy modernization            │  │
│  │                             │  │                                     │  │
│  │  From $75/month             │  │  From $200/hour                    │  │
│  │  [See Products →]           │  │  [Request Assessment →]            │  │
│  └─────────────────────────────┘  └─────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│  INDUSTRY SHOWCASE                                                          │
│  ─────────────────────────────────────────────────────────────────────────  │
│  "Built for how you actually work"                                          │
│                                                                             │
│  [☕ Cafes]  [🍽️ Restaurants]  [📊 CPAs]  [💇 Salons]  [💰 Payroll]  [🏠 Realty]│
│                                                                             │
│  Each links to industry-specific landing page                               │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│  ROI CALCULATOR (Interactive)                                               │
│  ─────────────────────────────────────────────────────────────────────────  │
│  "How much could you save?"                                                 │
│                                                                             │
│  Inputs:                          Output:                                   │
│  • Hours/week on admin: [__]      Monthly savings: $X,XXX                   │
│  • Hourly rate: [__]              Annual savings: $XX,XXX                   │
│  • Missed calls/week: [__]        ROI: X months to payback                  │
│  • Industry: [dropdown]           [Get Custom Analysis →]                   │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│  CASE STUDIES PREVIEW                                                       │
│  ─────────────────────────────────────────────────────────────────────────  │
│  Two featured case studies (one SMB, one Enterprise)                        │
│                                                                             │
│  [Café Olympiad]                   [Olympic Payroll]                        │
│  "$3,200/month saved"              "1.6M lines analyzed in 6 weeks"         │
│  Read case study →                 Read case study →                        │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│  FINAL CTA                                                                  │
│  ─────────────────────────────────────────────────────────────────────────  │
│  "Ready to stop doing the work you hate?"                                   │
│                                                                             │
│  [Book a Demo — It's Free]                                                  │
│  "30 minutes. No pressure. Real answers."                                   │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

### B. PRODUCT PAGES (Nous Suite)

**Template for each product:**

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  PRODUCT HERO                                                               │
│  ─────────────────────────────────────────────────────────────────────────  │
│  [Tier emoji] [Product Name]                                                │
│                                                                             │
│  Headline: [Pain-focused headline]                                          │
│  Subhead: [What it does + who it's for]                                     │
│                                                                             │
│  Price: $XXX/month        [Start Free Trial]  [Book Demo]                   │
│                                                                             │
│  "X automations included"                                                   │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│  USE CASE SCENARIOS                                                         │
│  ─────────────────────────────────────────────────────────────────────────  │
│  "A Day in the Life with [Product]"                                         │
│                                                                             │
│  7 AM: AI answers first call while you sleep                                │
│  9 AM: Inbox sorted, urgent items flagged                                   │
│  12 PM: Appointment reminders sent automatically                            │
│  5 PM: Day's invoices processed and filed                                   │
│  11 PM: After-hours voicemail → text transcript ready                       │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│  FEATURES LIST (Checkboxes)                                                 │
│  ─────────────────────────────────────────────────────────────────────────  │
│  ✅ AI Voice Receptionist         ✅ Smart Email Triage                     │
│  ✅ Appointment Scheduling         ✅ Invoice Processing                    │
│  ✅ Customer Follow-up             ✅ Document Organization                 │
│  ✅ Multi-channel Support          ✅ Integration Library                   │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│  INTEGRATIONS                                                               │
│  ─────────────────────────────────────────────────────────────────────────  │
│  "Connects with tools you already use"                                      │
│                                                                             │
│  [QuickBooks] [Google] [Calendly] [Twilio] [Slack] [HubSpot] [+30 more]    │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│  COMPARISON (vs. other tiers)                                               │
│  ─────────────────────────────────────────────────────────────────────────  │
│  "How [Product] compares"                                                   │
│                                                                             │
│  |Feature          | Assist | Connect | Command |                          │
│  |Voice AI         | Basic  | Advanced| Custom  |                          │
│  |Integrations     | 5      | 20      | Unlimited|                         │
│  |etc.             |        |         |          |                          │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│  CTA                                                                        │
│  ─────────────────────────────────────────────────────────────────────────  │
│  [Start 14-Day Free Trial]                                                  │
│  "No credit card required. Cancel anytime."                                 │
│                                                                             │
│  Or: [Book a Demo] — "Get a personalized walkthrough"                       │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Product-Specific Content:**

#### Nous Assist ($75-149/month)
```
Emoji: 🚀
Headline: "Never Miss Another Call"
Subhead: "AI receptionist that answers, schedules, and follows up — 24/7."
Best for: Solo operators, micro-businesses, service providers

Key differentiators:
- AI voice that sounds human (play audio sample)
- Instant call-to-text transcription
- Basic calendar integration
- 5 pre-built automations

Hook: "Like hiring a receptionist for $3/day"
```

#### Nous Connect ($199-499/month)
```
Emoji: ⚡
Headline: "Connect Everything. Automate Everything."
Subhead: "Multi-channel AI that manages calls, emails, texts, and more."
Best for: Growing businesses, multi-location, teams

Key differentiators:
- All channels in one inbox
- 20+ integrations (QuickBooks, Google, etc.)
- Custom workflow builder
- Team collaboration features

Hook: "Your entire front office in one AI"
```

#### Nous Command ($599-1,499/month)
```
Emoji: 🏢
Headline: "Complete AI Operations Center"
Subhead: "Full automation suite with custom AI, API access, and white-glove support."
Best for: Established businesses, franchises, enterprise SMB

Key differentiators:
- Custom AI training on your data
- Full API access
- Dedicated account manager
- Unlimited integrations
- SLA guarantees

Hook: "Enterprise-grade AI, small business pricing"
```

---

### C. ENTERPRISE SECTION (Red Team)

#### Main Landing Page (/enterprise)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  HERO                                                                       │
│  ─────────────────────────────────────────────────────────────────────────  │
│  Headline: "Enterprise AI Transformation — By Someone Who's Done It"        │
│  Subhead: "15 years leading digital transformation at banks.                │
│           Now bringing that expertise to your organization."                │
│                                                                             │
│  [Request Assessment]                                                       │
│                                                                             │
│  Credentials bar:                                                           │
│  "IT Director → CIO | $3.5M+ Savings | 100% Audit Compliance | CISM"       │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│  DIFFERENTIATOR                                                             │
│  ─────────────────────────────────────────────────────────────────────────  │
│  "Most consultants advise. We've operated."                                 │
│                                                                             │
│  Two columns:                                                               │
│                                                                             │
│  WHAT OTHERS SAY:              WHAT WE'VE DONE:                             │
│  "You should implement         Built middleware processing                  │
│   API orchestration"           $B+ in transactions                          │
│                                                                             │
│  "Consider BaaS architecture"  Designed 140+ fintech partner                │
│                                ecosystem from scratch                        │
│                                                                             │
│  "AML systems need work"       Created system with zero                     │
│                                findings across 4 DFS audits                  │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│  SERVICE CARDS (8 services)                                                 │
│  ─────────────────────────────────────────────────────────────────────────  │
│  Grid of 8 cards, each with:                                                │
│  - Icon                                                                     │
│  - Service name                                                             │
│  - 2-line description                                                       │
│  - [Learn More →]                                                           │
│                                                                             │
│  [BaaS Architecture]           [Payment Infrastructure]                     │
│  [KYC/KYB/CIP]                 [Compliance Automation]                      │
│  [Middleware Integration]      [Legacy Modernization]                       │
│  [Security Architecture]       [Infrastructure & DR]                        │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│  PROOF METRICS                                                              │
│  ─────────────────────────────────────────────────────────────────────────  │
│  Counter-style metrics bar:                                                 │
│                                                                             │
│  $3.5M+          140+          1.6M          100%                           │
│  Cost Savings    Fintech       Lines of      Regulatory                     │
│  Documented      Partners      Code Analyzed Compliance                     │
│                  Integrated                                                 │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│  PROCESS SECTION                                                            │
│  ─────────────────────────────────────────────────────────────────────────  │
│  "How We Work"                                                              │
│                                                                             │
│  Step 1: Discovery Assessment (2 weeks)                                     │
│          → Current state analysis, gap identification                       │
│                                                                             │
│  Step 2: Roadmap & Recommendations                                          │
│          → Prioritized action plan with business case                       │
│                                                                             │
│  Step 3: Phased Implementation                                              │
│          → Hands-on execution with your team                                │
│                                                                             │
│  Step 4: Knowledge Transfer                                                 │
│          → Documentation, training, ongoing support                         │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│  CASE STUDIES                                                               │
│  ─────────────────────────────────────────────────────────────────────────  │
│  Featured enterprise case studies:                                          │
│                                                                             │
│  [Olympic Payroll]             [Banking Transformation]                     │
│  Legacy modernization          Digital transformation                       │
│  1.6M LOC analyzed             $3.5M+ saved                                 │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│  INDUSTRIES SERVED                                                          │
│  ─────────────────────────────────────────────────────────────────────────  │
│  • Banks & Credit Unions       • Healthcare (HIPAA)                         │
│  • Fintechs & BaaS Providers   • Professional Services                      │
│  • Insurance                   • Government                                 │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│  CTA                                                                        │
│  ─────────────────────────────────────────────────────────────────────────  │
│  "Start with a Free Assessment"                                             │
│                                                                             │
│  [Request Assessment]                                                       │
│  "2-week discovery. No obligation. Actionable roadmap."                     │
│                                                                             │
│  Or: Schedule directly → [Calendly embed]                                   │
└─────────────────────────────────────────────────────────────────────────────┘
```

#### Service Sub-Pages Template

Each service page (/enterprise/baas-architecture, etc.) follows this structure:

```
1. HERO
   - Service name + headline
   - 2-sentence value prop
   - [Request Assessment]

2. THE CHALLENGE
   - What organizations struggle with
   - Pain points we address

3. OUR APPROACH
   - Architecture diagrams (from RED_TEAM_STRUCTURE.md)
   - Technical detail for credibility
   - Simplified explanation for executives

4. DELIVERABLES
   - Concrete list of what client receives
   - Timeline expectations

5. PROOF POINTS
   - Metrics from past work
   - Relevant case study

6. CTA
   - [Request Assessment] + Calendly option
```

---

### D. INDUSTRY PAGES

Each industry page targets specific pain points:

| Industry | Primary Pain | Hook | Automation Focus |
|----------|-------------|------|------------------|
| **Cafes** | Missed calls during rush | "Never lose a catering order again" | Phone handling, order follow-up |
| **Restaurants** | Reservation chaos | "Reservations that handle themselves" | Booking, confirmation, waitlist |
| **CPAs** | Tax season overwhelm | "127 documents sorted overnight" | Document processing, client comms |
| **Salons** | No-shows, scheduling | "End no-shows forever" | Reminders, rebooking, follow-up |
| **Payroll** | Complex compliance | "Compliance that doesn't sleep" | Document tracking, notifications |
| **Realty** | Lead response time | "Respond in seconds, not hours" | Lead capture, showing scheduling |

**Page Template:**
```
HERO: Industry-specific pain point headline
PROBLEM: "The [Industry] Struggle" — relatable pain description
SOLUTION: How Nous Suite solves it
AUTOMATIONS: 4-6 industry-specific automations highlighted
CASE STUDY: Industry-relevant example
PRICING: Recommended tier for this industry
CTA: Book demo with industry context
```

---

## V. IMAGES STRATEGY

### Required Images

| Section | Image Needed | Style | Source Recommendation |
|---------|--------------|-------|----------------------|
| **Homepage Hero** | Abstract AI/automation visual | Dark bg, cyan/purple accents | AI-generated (Midjourney) |
| **Proof Section** | Screenshot mockups of dashboard | UI style matching site | Designed in Figma |
| **Nous Assist** | Person using phone, AI visual | Professional, clean | Stock (Unsplash) |
| **Nous Connect** | Multi-device, connected nodes | Tech-forward | AI-generated |
| **Nous Command** | Command center / dashboard | Enterprise feel | AI-generated |
| **Cafes** | Coffee shop scene | Warm, busy | Stock (Unsplash) |
| **Restaurants** | Restaurant interior | Upscale casual | Stock (Pexels) |
| **CPAs** | Office with documents | Professional | Stock |
| **Salons** | Salon interior | Modern, clean | Stock |
| **Payroll** | Payroll dashboard mockup | Professional | Designed |
| **Realty** | Real estate agent with phone | Professional | Stock |
| **Enterprise Hero** | Boardroom / data center | Corporate | Stock or AI |
| **BaaS Architecture** | Architecture diagram | Technical | Created from existing ASCII |
| **Payment Rails** | Payment flow visual | Technical | Created from existing ASCII |
| **Compliance** | Dashboard with alerts | Professional | Mockup |
| **Legacy Code** | Code visualization | Technical | AI-generated |
| **Security** | Security operations center | Technical | Stock |
| **Case Studies** | Business context photos | Professional | Stock or AI |
| **About Page** | Mac Mini setup / office | Authentic | Original photo (optional) |

### Image Style Guide

```
Primary Background: #0f172a (dark navy)
Accent Colors: #06b6d4 (cyan), #8b5cf6 (purple)
Style: Modern, clean, minimalist
Subjects: Technology, business operations, professional settings
Mood: Trustworthy, efficient, intelligent
Format: WebP, optimized, 800-1200px width
```

### Image Generation Prompts (for AI-generated)

**Homepage Hero:**
```
"Abstract visualization of AI neural network with flowing cyan and purple light trails on dark navy background, professional corporate style, clean minimalist, 16:9 aspect ratio"
```

**Enterprise Hero:**
```
"Modern corporate boardroom with holographic data visualization, blue and purple accent lighting, photorealistic, professional atmosphere, cinematic lighting"
```

**Product Visuals:**
```
"Isometric illustration of connected devices - phone, laptop, tablet - with glowing connection lines, dark background, cyan and purple accent colors, clean tech style"
```

---

## VI. CUSTOMER TARGETING & JOURNEY

### Audience Segmentation

| Segment | Demographics | Pain Points | Entry Point | Conversion Path |
|---------|-------------|-------------|-------------|-----------------|
| **Solo Operators** | 1 person, <$500K revenue | Wearing all hats, missing calls | Google "AI receptionist" | Blog → Product → Free trial |
| **Small Teams** | 2-10 people, $500K-$2M | Scaling problems, manual processes | Referral, LinkedIn | Case study → Demo → Paid |
| **Growing Business** | 10-50 people, $2M-$10M | Integration hell, inconsistency | Industry search | Industry page → Enterprise |
| **Enterprise** | 50+, regulated industry | Compliance, legacy, transformation | Direct outreach, conference | Enterprise page → Assessment |

### Conversion Funnels

**SMB Funnel:**
```
AWARENESS → INTEREST → CONSIDERATION → DECISION → ONBOARDING
                                                        
Blog post    Product     ROI          Demo      Free trial
Social       page        Calculator   Call      Setup
Referral     Automations Pricing               First win
Ad           page        page         
```

**Enterprise Funnel:**
```
AWARENESS → CREDENTIALING → DISCOVERY → PROPOSAL → ENGAGEMENT

LinkedIn      Enterprise    Assessment   Custom      SOW
Conference    page          call         proposal    Kickoff
Referral      Case studies  Gap          Phasing
Article       Credentials   analysis
```

### Lead Qualification (BANT + SPIN)

**Website Chatbot Flow:**
```
1. Greeting → Identify visitor type (SMB vs Enterprise)
2. Situation → "What does your current [X] look like?"
3. Problem → "What's not working as well as you'd like?"
4. Budget signal → Tier recommendation
5. Authority → Decision maker check
6. Timeline → Urgency assessment
7. Route → Demo booking or Assessment request
```

**Form Fields:**
```
SMB Form:                    Enterprise Form:
- Name*                      - Name*
- Email*                     - Email*
- Company                    - Company*
- Industry (dropdown)        - Title*
- Team size                  - Company size*
- Primary pain (checkbox)    - Primary challenge
- How did you hear?          - Timeline
                             - Current systems
```

---

## VII. TECHNICAL FIXES REQUIRED

### Critical (Must Fix Before Launch)

| Issue | Root Cause | Fix |
|-------|------------|-----|
| Product pages "Not Found" | Router param mismatch | Extract ID from pathname or use dynamic route |
| HubSpot not connected | Placeholder env vars | Get real Portal ID + Form ID, add to Netlify |
| Enterprise section missing | Not built | Build from RED_TEAM_STRUCTURE.md content |

### High Priority

| Issue | Root Cause | Fix |
|-------|------------|-----|
| No professional images | Placeholder SVGs only | Generate/source per image strategy above |
| Chatbot not fully tested | No QA | Test all query paths, verify responses |
| Pages not interlinked | Standalone builds | Add cross-links per navigation strategy |

### Medium Priority

| Issue | Root Cause | Fix |
|-------|------------|-----|
| No About page | Not built | Create company story page |
| No consolidated Pricing | Split across products | Create comparison pricing page |
| No demo page | Missing | Redirect /demo → Calendly or contact |

---

## VIII. HOOKS & COPYWRITING

### Headline Formulas

**Pain-Focused:**
- "Stop [doing thing they hate]"
- "Never [bad thing] again"
- "End [problem] forever"

**Benefit-Focused:**
- "Your AI [role] that never sleeps"
- "[X] processed while you slept"
- "What if you woke up to [desired state]?"

**Proof-Focused:**
- "$[X] saved in [timeframe]"
- "[X] lines analyzed in [Y] weeks"
- "Zero findings. [X] consecutive audits."

### Page-Specific Headlines

| Page | Headline | Supporting Copy |
|------|----------|-----------------|
| Homepage | "AI That Actually Works for Your Business" | From coffee shops to Fortune 500 banks |
| Nous Assist | "Never Miss Another Call" | AI receptionist, 24/7, $3/day |
| Nous Connect | "Connect Everything. Automate Everything." | One inbox, all channels |
| Nous Command | "Complete AI Operations Center" | Enterprise power, SMB pricing |
| Enterprise | "Enterprise AI Transformation — By Someone Who's Done It" | 15 years, $3.5M saved |
| Legacy | "1.6 Million Lines Analyzed. 800 APIs Documented. 6 Weeks." | AI-assisted modernization |
| Compliance | "Zero Findings. Four Consecutive Audits." | We build systems that pass |

### Call-to-Action Copy

| Context | CTA Text | Supporting Text |
|---------|----------|-----------------|
| Product page | "Start Free Trial" | "14 days free. No credit card." |
| Product page alt | "Book a Demo" | "30 min. No pressure. Real answers." |
| Enterprise page | "Request Assessment" | "2-week discovery. No obligation." |
| Pricing page | "Get Started" | "Setup in minutes, not weeks." |
| Contact page | "Let's Talk" | "Response within 24 hours." |
| Blog CTA | "See How It Works" | "Watch the 2-minute demo." |

### Objection Pre-emption

Embed these throughout the site:

| Objection | Pre-emption Copy | Placement |
|-----------|------------------|-----------|
| "Too expensive" | "Less than $3/day" / "ROI in 60 days" | Pricing, product pages |
| "Too complex" | "Setup in minutes, not weeks" | Product pages, CTA areas |
| "Will it work for me?" | Industry-specific case studies | Industry pages |
| "Can I trust AI?" | "Human review on sensitive decisions" | Enterprise, compliance |
| "What if it breaks?" | "99.9% uptime SLA" / "Dedicated support" | Enterprise, Command tier |

---

## IX. EXECUTION TIMELINE

### Phase 1: Critical Fixes (Day 1)
- [ ] Fix product page routing
- [ ] Verify all navigation works
- [ ] Document HubSpot credentials needed

**Deliverable:** Working site navigation

### Phase 2: Content Foundation (Days 2-3)
- [ ] Write homepage copy
- [ ] Write all product page copy
- [ ] Write enterprise landing page copy
- [ ] Create About page content

**Deliverable:** All core copy written

### Phase 3: Enterprise Build-Out (Days 3-4)
- [ ] Build /enterprise landing page
- [ ] Build 4 priority service pages (BaaS, Payments, Compliance, Legacy)
- [ ] Add enterprise case studies
- [ ] Implement "Request Assessment" flow

**Deliverable:** Enterprise section live

### Phase 4: Images & Polish (Days 4-5)
- [ ] Generate/source all images (with your approval)
- [ ] Implement image optimization
- [ ] Cross-link all pages
- [ ] Mobile responsiveness check

**Deliverable:** Visually complete site

### Phase 5: Integration & Testing (Day 5)
- [ ] Configure HubSpot (need credentials from you)
- [ ] Test all forms
- [ ] Test chatbot flows
- [ ] Cross-browser testing
- [ ] Load testing

**Deliverable:** Fully functional site

### Phase 6: Deploy (Day 6)
- [ ] Final review with you
- [ ] Single production deploy
- [ ] Post-deploy verification
- [ ] Monitor for 24 hours

**Deliverable:** Live production site

---

## X. WHAT I NEED FROM YOU

### Before Starting

1. **HubSpot Credentials**
   - Portal ID
   - Form ID (or access to create one)

2. **Image Approval**
   - Confirm AI-generated is acceptable
   - Or provide stock photo budget/account
   - Or schedule photo shoot

3. **Content Review**
   - Confirm pricing tiers are accurate
   - Confirm service descriptions are accurate
   - Any messaging changes for enterprise positioning

### During Execution

4. **Case Study Details**
   - Can I use "Café Olympiad" name publicly?
   - Can I use "Olympic Payroll" name publicly?
   - Specific numbers I can quote

5. **Calendly Link**
   - Current link for demos
   - Separate link for enterprise assessments?

### Before Deploy

6. **Final Approval**
   - Full site walkthrough
   - Copy sign-off
   - Go/no-go decision

---

## XI. SUCCESS METRICS

### Launch KPIs

| Metric | Target | Measurement |
|--------|--------|-------------|
| Site load time | <3 seconds | Lighthouse |
| Mobile score | >90 | Lighthouse |
| All pages working | 100% | Manual test |
| Forms submitting | 100% | Test submissions |
| Chatbot responding | 100% | Test queries |

### Post-Launch KPIs (30 days)

| Metric | Target | Measurement |
|--------|--------|-------------|
| Organic traffic | +50% | Google Analytics |
| Demo bookings | 10+ | Calendly |
| Contact form submissions | 20+ | HubSpot |
| Enterprise inquiries | 3+ | HubSpot |
| Bounce rate | <50% | Google Analytics |

---

## XII. APPENDICES

### A. Full Sitemap (Technical)

```
/                           → HomePage.tsx
/products                   → ProductsPage.tsx (hub)
/products/nous-assist       → ProductPage.tsx (id: nous-assist)
/products/nous-connect      → ProductPage.tsx (id: nous-connect)
/products/nous-command      → ProductPage.tsx (id: nous-command)
/products/comparison        → ProductComparisonPage.tsx (NEW)
/solutions/cafes            → IndustryPage.tsx
/solutions/restaurants      → IndustryPage.tsx
/solutions/cpas             → IndustryPage.tsx
/solutions/salons           → IndustryPage.tsx
/solutions/payroll          → IndustryPage.tsx
/solutions/realty           → IndustryPage.tsx
/solutions/small-business   → SolutionPage.tsx
/solutions/call-centers     → SolutionPage.tsx
/enterprise                 → EnterprisePage.tsx (NEW)
/enterprise/baas-architecture       → ServicePage.tsx (NEW)
/enterprise/payment-infrastructure  → ServicePage.tsx (NEW)
/enterprise/onboarding-kyc          → ServicePage.tsx (NEW)
/enterprise/compliance-automation   → ServicePage.tsx (NEW)
/enterprise/middleware-integration  → ServicePage.tsx (NEW)
/enterprise/legacy-modernization    → ServicePage.tsx (NEW)
/enterprise/security-architecture   → ServicePage.tsx (NEW)
/enterprise/infrastructure          → ServicePage.tsx (NEW)
/case-studies               → CaseStudiesPage.tsx
/case-studies/:slug         → CaseStudyPage.tsx
/blog                       → BlogPage.tsx
/blog/:slug                 → BlogPostPage.tsx
/automations                → AutomationsPage.tsx
/pricing                    → PricingPage.tsx (NEW)
/about                      → AboutPage.tsx (NEW)
/contact                    → ContactPage.tsx
/demo                       → Redirect to Calendly
/privacy                    → PrivacyPage.tsx
/terms                      → TermsPage.tsx
```

### B. Component Requirements

**New Components Needed:**
- `EnterprisePage.tsx` — Main enterprise landing
- `ServicePage.tsx` — Template for service sub-pages
- `PricingPage.tsx` — Consolidated pricing comparison
- `AboutPage.tsx` — Company story
- `ProductComparisonPage.tsx` — Side-by-side product comparison
- `ROICalculator.tsx` — Interactive calculator component
- `MetricsCounter.tsx` — Animated metrics display
- `ServiceCard.tsx` — Reusable enterprise service card

**Existing Components to Update:**
- `ProductPage.tsx` — Fix routing, enhance content
- `Navigation.tsx` — Add enterprise dropdown
- `Footer.tsx` — Update links

### C. Content Files Location

All content from RED_TEAM_STRUCTURE.md (129KB) is ready to be used:
- BaaS Architecture diagrams ✓
- Payment Infrastructure flows ✓
- KYC/KYB/CIP pipelines ✓
- Compliance automation ✓
- Middleware patterns ✓
- Legacy modernization approach ✓
- Security architecture ✓
- Infrastructure & DR ✓

---

**END OF MASTER PLAN**

---

Confirm to proceed. I'll execute this in batched phases, deploy once at the end.
