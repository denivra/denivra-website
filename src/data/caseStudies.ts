export interface CaseStudy {
  id: string
  slug: string
  title: string
  client: string
  industry: string
  challenge: string
  solution: string
  results: {
    metric: string
    value: string
    description: string
  }[]
  implementation: {
    timeline: string
    products: string[]
    integrations: string[]
  }
  testimonial?: {
    quote: string
    author: string
    role: string
  }
  fullContent: string
  publishedAt: string
  featured: boolean
  tags: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'case-001',
    slug: 'olympic-payroll-legacy-modernization',
    title: 'Modernizing 1.6M Lines of Legacy Code Without Breaking Payroll',
    client: 'Olympic Payroll Services',
    industry: 'Payroll & HR Tech',
    challenge: 'A 25-year-old payroll system serving 60,000+ workers needed modernization, but couldn\'t afford downtime. The codebase had grown to 1.6M lines with minimal documentation.',
    solution: 'AI-assisted codebase analysis to document every function, map dependencies, and create a migration roadmap — all while the system stayed live.',
    results: [
      { metric: 'Documentation', value: '800+', description: 'APIs fully documented' },
      { metric: 'Workers Served', value: '60,000+', description: 'Zero disruption to payroll' },
      { metric: 'Analysis Time', value: '6 weeks', description: 'vs. 6+ months manual' },
      { metric: 'Risk Reduction', value: '90%', description: 'Migration failure risk' },
    ],
    implementation: {
      timeline: '6 weeks',
      products: ['Nous Enterprise'],
      integrations: ['Custom legacy system', 'GitHub', 'Confluence'],
    },
    testimonial: {
      quote: 'They mapped our entire codebase in 6 weeks. Our team estimated 6 months. The documentation alone is worth the investment.',
      author: 'CTO',
      role: 'Olympic Payroll Services',
    },
    fullContent: `
## The Challenge

Olympic Payroll Services processes payroll for over 60,000 workers across 200+ businesses. Their core system, built incrementally over 25 years, had become a maze:

- **1.6 million lines of code** across multiple languages
- **800+ API endpoints** with minimal documentation
- **Zero test coverage** for legacy components
- **Single points of failure** that only two senior developers understood

The business needed modernization to scale, but couldn't risk disrupting payroll for thousands of workers.

## The Discovery

We deployed our AI analysis toolkit to:

1. **Map the entire codebase** — Function by function, tracing data flows and dependencies
2. **Identify critical paths** — Which code actually runs payroll vs. abandoned features
3. **Document APIs** — Automated generation of OpenAPI specs from live traffic
4. **Risk assessment** — Which components are stable vs. fragile

### Key Findings

- 40% of code was effectively dead (unused for 3+ years)
- 12 critical functions had no error handling
- 3 "ticking time bombs" — date-handling bugs waiting to surface
- 800+ APIs reduced to 340 actually in use

## The Solution

We delivered a complete modernization roadmap:

**Phase 1: Documentation**
- Full API documentation (auto-generated + human-reviewed)
- Dependency maps for every major component
- Risk classification (red/yellow/green)

**Phase 2: Stabilization**
- Added monitoring to critical paths
- Implemented graceful degradation
- Created rollback procedures

**Phase 3: Modernization Plan**
- Microservice extraction strategy
- Database migration approach
- Timeline with go/no-go checkpoints

## The Results

| Metric | Before | After |
|--------|--------|-------|
| Documentation coverage | 15% | 95% |
| Known critical bugs | Unknown | 12 identified, 8 fixed |
| Developer onboarding | 6 months | 3 weeks |
| Deployment confidence | Low | High (with rollback) |

The client is now executing the modernization plan with internal resources, using our documentation as the foundation.

## Why It Worked

Traditional approaches would have required:
- 6+ months of manual code review
- Pulling senior developers off production work
- Extensive interviews with legacy knowledge holders

Our AI-assisted approach:
- Completed analysis in 6 weeks
- Zero disruption to ongoing development
- Captured knowledge even for undocumented features (by analyzing actual behavior)

---

*Facing a legacy modernization challenge? [Talk to us](/demo) — we've done this before.*
    `,
    publishedAt: '2025-02-01',
    featured: true,
    tags: ['legacy-modernization', 'enterprise', 'code-analysis', 'payroll'],
  },
  {
    id: 'case-002',
    slug: 'cafe-operations-invoice-automation',
    title: 'From Invoice Chaos to Automated Books in 2 Weeks',
    client: 'Multi-Location Café Group',
    industry: 'Food & Beverage',
    challenge: 'A 5-location café operation was drowning in vendor invoices. 200+ invoices/month, manual entry into QuickBooks, frequent duplicates, missed early payment discounts.',
    solution: 'Deployed AI invoice processing — scan, extract, validate, push to QuickBooks. Humans only review exceptions.',
    results: [
      { metric: 'Processing Time', value: '90%', description: 'Reduction in manual work' },
      { metric: 'Duplicates Caught', value: '$1,200', description: 'Saved monthly from duplicate detection' },
      { metric: 'Discounts Captured', value: '$800', description: 'Early payment discounts now captured' },
      { metric: 'Implementation', value: '2 weeks', description: 'From kickoff to live' },
    ],
    implementation: {
      timeline: '2 weeks',
      products: ['Nous Pro'],
      integrations: ['QuickBooks Online', 'Gmail', 'Google Drive'],
    },
    testimonial: {
      quote: 'Nous processed 127 documents overnight. Extracted vendor, amount, date from each. Pushed to QuickBooks. Zero manual entry.',
      author: 'Operations Manager',
      role: 'Café Group',
    },
    fullContent: `
## The Problem

Running 5 café locations means dealing with:

- **200+ vendor invoices monthly** (produce, dairy, supplies, utilities)
- **5 different managers** forwarding invoices via email, WhatsApp, photos
- **Manual QuickBooks entry** taking 15+ hours/month
- **Duplicate payments** slipping through (average $1,200/month)
- **Missed early payment discounts** because invoices sat in email

The owner was spending Sunday evenings doing data entry instead of actually running the business.

## The Solution

We deployed a complete invoice automation flow:

### Ingestion Points
- **Email**: Forward invoices to invoices@[client].denivra.ai
- **WhatsApp**: Managers snap photos, AI processes immediately
- **Shared Drive**: Drop PDFs in folder, processed within minutes

### Processing Pipeline

\`\`\`
Invoice arrives → AI classifies document type
                → Extracts: Vendor, Amount, Date, Due Date, Line Items
                → Checks for duplicates (same vendor + amount + date window)
                → Validates against known vendors
                → Creates draft in QuickBooks
                → Human reviews exceptions only
\`\`\`

### Duplicate Detection Logic

We caught duplicates others miss:
- Same invoice sent by vendor and manager
- Invoices with slightly different totals (tax included vs. excluded)
- Resubmissions with new invoice numbers

**Detection method**: Vendor + approximate amount (±5%) + date window (±7 days)

## The Numbers

### Before Nous

| Task | Time/Month |
|------|------------|
| Sorting invoices | 3 hours |
| Manual data entry | 10 hours |
| Duplicate reconciliation | 2 hours |
| **Total** | **15 hours** |

### After Nous

| Task | Time/Month |
|------|------------|
| Exception review | 1 hour |
| Spot checks | 30 minutes |
| **Total** | **1.5 hours** |

**Time saved: 13.5 hours/month (90% reduction)**

### Financial Impact

| Savings | Monthly |
|---------|---------|
| Duplicates prevented | $1,200 |
| Early payment discounts | $800 |
| Labor savings (at $25/hr) | $338 |
| **Total Monthly Savings** | **$2,338** |

**ROI: 10x in the first month** (Nous Pro = $249/month)

## What We Learned

**WhatsApp is a document delivery system**
Managers already use it to communicate. Adding invoice processing to the same channel they already use = zero behavior change, instant adoption.

**Duplicate detection is the hidden win**
The client didn't know they had a duplicate problem. They thought it was "occasional." $1,200/month is not occasional.

**Exception handling > full automation**
We aimed for 95% automation, 5% human review. That 5% catches edge cases without creating distrust in the system.

---

*Drowning in invoices? [Let's fix it](/demo) — we've seen every invoice format.*
    `,
    publishedAt: '2025-01-25',
    featured: true,
    tags: ['invoice-automation', 'quickbooks', 'smb', 'food-beverage'],
  },
  {
    id: 'case-003',
    slug: 'real-estate-voice-ai-lead-qualification',
    title: 'Real Estate Agency Captures 40% More Leads with Voice AI',
    client: 'Regional Real Estate Brokerage',
    industry: 'Real Estate',
    challenge: 'Agents were missing calls during showings. After-hours leads went to voicemail and rarely converted. Hiring reception staff wasn\'t cost-effective.',
    solution: 'Deployed 24/7 Voice AI agent that qualifies leads, answers property questions, and books showings directly into agent calendars.',
    results: [
      { metric: 'Lead Capture', value: '+40%', description: 'Increase in captured leads' },
      { metric: 'Response Time', value: '<10s', description: 'Average time to answer' },
      { metric: 'After-Hours', value: '35%', description: 'Of leads come after 6pm' },
      { metric: 'Showing Bookings', value: '3x', description: 'Increase in booked showings' },
    ],
    implementation: {
      timeline: '10 days',
      products: ['Nous Pro'],
      integrations: ['Vapi', 'Google Calendar', 'Follow Up Boss CRM'],
    },
    fullContent: `
## The Missed Call Problem

Real estate runs on leads. And leads call when they're interested — which is often when agents are:

- Showing properties
- Driving between appointments
- At dinner with family
- Sleeping (yes, people browse Zillow at midnight)

The agency was losing 35% of incoming leads to voicemail. Of those, only 20% called back. That's a lot of lost commission.

## The Voice AI Solution

We deployed a natural-sounding AI agent that:

### Answers Every Call

**Caller**: "Hi, I'm calling about the listing on Oak Street."

**Nous**: "Hi! The Oak Street property — great choice. That's the 3-bed, 2-bath listed at $425,000. Are you looking to schedule a showing, or do you have questions about the property first?"

### Qualifies Leads

- Pre-approved for mortgage?
- Timeline for purchase
- Requirements (beds, baths, area)
- Currently working with an agent?

### Books Showings

**Nous**: "I can get you in to see Oak Street tomorrow or Wednesday. What works better?"

**Caller**: "Wednesday afternoon."

**Nous**: "Perfect. I've got 2pm or 4pm available with Agent Sarah. Which do you prefer?"

*[Directly books in agent's calendar, sends confirmation to both parties]*

### Handles Property Questions

Trained on all active listings:
- Square footage, bed/bath counts
- HOA fees, property taxes
- School districts, commute times
- When can it be shown

## The Results

### Lead Capture

| Period | Leads Captured |
|--------|----------------|
| Before (voicemail) | 62/month |
| After (Voice AI) | 87/month |
| **Improvement** | **+40%** |

### After-Hours Performance

- 35% of all captured leads came after 6pm
- Previously: These went to voicemail (80% never returned)
- Now: Captured and qualified in real-time

### Showing Conversion

- Leads that book showings via AI: 3x more likely to close
- Why? Immediate gratification + qualification = serious buyers

## Agent Feedback

*"I thought clients would hate talking to a robot. They don't. They actually prefer it for simple stuff — no hold time, no phone tag. And when they come to showings, I already know what they want because Nous captured it."* — Top-producing agent

## The Economics

| Item | Monthly |
|------|---------|
| Nous Pro subscription | $249 |
| Voice minutes (~500) | $75 |
| **Total cost** | **$324** |

| Item | Monthly |
|------|---------|
| Additional leads captured | 25 |
| Average commission | $8,000 |
| Close rate on qualified leads | 8% |
| **Additional revenue** | **$16,000** |

**ROI: 49x**

---

*Losing leads to voicemail? [Let's fix it](/demo) — 24/7 coverage in under 2 weeks.*
    `,
    publishedAt: '2025-01-20',
    featured: true,
    tags: ['voice-ai', 'real-estate', 'lead-qualification', 'crm'],
  },
  {
    id: 'case-004',
    slug: 'ecommerce-customer-support-automation',
    title: 'E-commerce Brand Cuts Support Tickets 60% with AI',
    client: 'DTC Fashion Brand',
    industry: 'E-commerce',
    challenge: 'Growing fashion brand was overwhelmed with repetitive support tickets — order status, returns, sizing questions. 2-person support team couldn\'t scale.',
    solution: 'Multi-channel AI support across email, website chat, and Instagram DMs. Handles routine queries, escalates complex issues.',
    results: [
      { metric: 'Ticket Reduction', value: '60%', description: 'Fewer tickets reaching human agents' },
      { metric: 'Response Time', value: '2min', description: 'Average first response (was 8 hours)' },
      { metric: 'CSAT Score', value: '4.6/5', description: 'Up from 3.9/5' },
      { metric: 'Cost Savings', value: '$4,500', description: 'Monthly support cost reduction' },
    ],
    implementation: {
      timeline: '3 weeks',
      products: ['Nous Pro'],
      integrations: ['Shopify', 'Gorgias', 'Instagram', 'Klaviyo'],
    },
    fullContent: `
## The Support Scaling Problem

This DTC fashion brand was growing fast:
- 10,000+ orders/month
- 2-person support team
- Average response time: 8 hours
- CSAT slipping: 3.9/5

They could hire more people, but:
- Good support hires are expensive
- Training takes months
- Seasonal spikes need flexible capacity

## The Solution

We deployed AI support across three channels:

### Website Chat (40% of volume)
- Instant responses to browsing customers
- Size guide assistance
- Product recommendations
- "Is this in stock?" queries

### Email (45% of volume)
- Auto-categorize incoming tickets
- Draft responses for routine queries
- Auto-resolve simple issues (WISMO, return labels)
- Escalate complex cases with context

### Instagram DMs (15% of volume)
- Product questions on posts
- Stock checks
- Redirect to website for orders
- Influencer inquiry routing

## Query Distribution & Handling

| Query Type | % of Volume | AI Resolution Rate |
|------------|-------------|-------------------|
| "Where is my order?" | 35% | 95% |
| Returns/exchanges | 20% | 80% |
| Sizing questions | 15% | 90% |
| Product availability | 15% | 95% |
| Complaints/issues | 10% | 20% (escalated) |
| Other | 5% | 50% |

**Overall AI resolution: 75%**
**Human intervention required: 25%**

## The "Where Is My Order?" Flow

This single query type was 35% of all tickets:

\`\`\`
Customer: "Where is my order #12345?"
↓
AI: [Pulls Shopify order data]
    - Order placed: Feb 5
    - Shipped: Feb 6
    - Tracking: 1Z999...
    - Status: In transit, delivery Feb 9
↓
Response: "Hi! Your order #12345 shipped on Feb 6 via UPS.
          📦 Tracking: [link]
          📅 Expected delivery: Feb 9
          
          Need anything else?"
\`\`\`

**Resolution time**: 30 seconds
**Human involvement**: Zero

## Smart Escalation

AI knows when to hand off:

**Escalation triggers:**
- Negative sentiment detected
- Complaint about product quality
- Shipping damage mentioned
- Multiple back-and-forth without resolution
- Customer explicitly asks for human

**Handoff format:**
- Full conversation history
- Customer order history
- Sentiment analysis
- Suggested resolution

Human agents get context, not cold transfers.

## The Results

### Response Time
- Before: 8 hours average
- After: 2 minutes average
- Improvement: **96% faster**

### Ticket Volume (reaching humans)
- Before: 1,200/month
- After: 480/month
- Reduction: **60%**

### Customer Satisfaction
- Before: 3.9/5
- After: 4.6/5
- Improvement: **18%**

### Cost
- 2 full-time support hires avoided: $8,000/month
- Nous Pro cost: $249/month
- Additional AI usage: $200/month
- **Net savings: $7,550/month**

## Key Learning

**Speed > perfection for Tier 1 support**

Customers would rather get a fast, accurate answer from AI than wait 8 hours for a human to say the same thing. Save human empathy for problems that actually need it.

---

*Support tickets overwhelming your team? [Let's automate the routine](/demo).*
    `,
    publishedAt: '2025-01-15',
    featured: false,
    tags: ['ecommerce', 'customer-support', 'shopify', 'instagram'],
  },
]

export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => {
  return caseStudies.find(cs => cs.slug === slug)
}

export const getFeaturedCaseStudies = (): CaseStudy[] => {
  return caseStudies.filter(cs => cs.featured)
}

export const getCaseStudiesByIndustry = (industry: string): CaseStudy[] => {
  return caseStudies.filter(cs => cs.industry.toLowerCase().includes(industry.toLowerCase()))
}
