/**
 * Pivot Chatbot Knowledge Base
 * Sales-optimized with SPIN model, objection handling, and lead qualification
 */

export interface ConversationContext {
  stage: 'greeting' | 'discovery' | 'qualification' | 'presentation' | 'objection' | 'close'
  userInfo: {
    name?: string
    email?: string
    company?: string
    role?: string
    industry?: string
    teamSize?: string
    currentPain?: string
    budget?: string
    timeline?: string
    decisionMaker?: boolean
  }
  interests: string[]
  objections: string[]
  messageCount: number
}

// SPIN Question Framework
export const spinQuestions = {
  situation: [
    "What does your current workflow look like for [TOPIC]?",
    "How is your team currently handling [TOPIC]?",
    "What tools are you using today for [TOPIC]?",
    "How many [ITEMS] do you typically process per month?",
    "Who's currently responsible for [TASK]?",
  ],
  problem: [
    "What's not working as well as you'd like?",
    "Where do you feel like you're leaving money on the table?",
    "What's the most frustrating part of [CURRENT_PROCESS]?",
    "How often do things slip through the cracks?",
    "What happens when [NEGATIVE_SCENARIO]?",
  ],
  implication: [
    "What does that end up costing you — in time, money, or stress?",
    "How does that affect your team's ability to [GOAL]?",
    "If that continues for another year, what's the impact?",
    "What opportunities are you missing because of this?",
    "How does that compare to where you want to be?",
  ],
  needPayoff: [
    "If you could solve that, what would it mean for your business?",
    "What would change if [PROBLEM] wasn't a factor?",
    "How would it feel to have [DESIRED_STATE]?",
    "What could you do with [TIME/MONEY] back each month?",
    "If this worked perfectly, what does success look like?",
  ],
}

// Objection Handling (AIRCC Model)
export const objectionResponses: Record<string, {
  acknowledge: string
  isolate: string
  reframe: string
  resolve: string
  confirm: string
}> = {
  price_too_high: {
    acknowledge: "I completely understand budget concerns — it's a real consideration for any business investment.",
    isolate: "If we could make the numbers work, is there anything else that would hold you back?",
    reframe: "Let me ask this differently — what's the cost of *not* solving this problem? What are you spending now on manual work, missed opportunities, or errors?",
    resolve: "Our clients typically see ROI within 60-90 days. Nous Assist starts at $499 — that's less than 20 hours of employee time. If we save you 5 hours/week, it pays for itself in a month.",
    confirm: "Does that help put the investment in perspective?",
  },
  need_to_think: {
    acknowledge: "Totally fair — this is a decision worth considering carefully.",
    isolate: "When you say 'think about it,' what specifically are you weighing? Is it the cost, the implementation, the timing, or something else?",
    reframe: "I've found that 'need to think' usually means there's a specific question I haven't answered yet. What would make this a clear yes or no for you?",
    resolve: "Here's what I can do — let me send you a personalized breakdown based on what we discussed. You can review it, and if questions come up, I'm here. Would that help?",
    confirm: "What's a good email for that?",
  },
  already_have_solution: {
    acknowledge: "Good — it's smart that you're not starting from zero. Existing systems mean you understand the value of automation.",
    isolate: "What made you curious enough to explore alternatives? Is something not quite working?",
    reframe: "Most clients who come to us already have 'something.' They come because it's either too expensive, too limited, or requires too much maintenance. Does any of that resonate?",
    resolve: "We're not asking you to rip anything out. Nous often *complements* existing tools — filling gaps or handling overflow. Want me to show you where we typically add value alongside [COMPETITOR]?",
    confirm: "Would it help to see a side-by-side?",
  },
  not_right_time: {
    acknowledge: "Timing matters. There's never a perfect moment, but some are definitely better than others.",
    isolate: "What would make this the right time? A certain budget cycle, team capacity, or milestone?",
    reframe: "Here's the thing — the problem you described doesn't pause. Every week you wait, that's another [X hours lost / Y dollars spent / Z opportunities missed]. At what point does waiting cost more than acting?",
    resolve: "We can start small — Nous Assist is designed exactly for this. Minimal commitment, fast setup, proves value before you scale.",
    confirm: "Would a pilot approach make more sense for where you are right now?",
  },
  need_stakeholder_approval: {
    acknowledge: "Makes sense — decisions like this usually involve more than one person.",
    isolate: "Who else would need to weigh in? And what do they typically care about most — cost, security, ROI, or ease of implementation?",
    reframe: "Let me help you sell this internally. What would make this a no-brainer for them? I can prepare a one-pager that addresses exactly what they'll ask.",
    resolve: "I can also join a brief call with your team — sometimes it's easier to have the expert answer questions directly rather than playing telephone.",
    confirm: "Would a deck or a call be more helpful?",
  },
  too_complex: {
    acknowledge: "I hear that a lot — change is disruptive, and implementation fatigue is real.",
    isolate: "What's the biggest concern — disrupting current workflows, training your team, or the technical integration itself?",
    reframe: "What if I told you most clients are live within 2 weeks, with minimal involvement from their team? We handle the heavy lifting.",
    resolve: "Our process: 1) We audit your workflows, 2) We configure everything, 3) You test, 4) We launch. Your team's involvement is mostly approval, not implementation.",
    confirm: "Does that change how you're thinking about complexity?",
  },
}

// Lead Qualification Questions
export const qualificationQuestions = {
  budget: [
    "What kind of budget do you typically allocate for tools like this?",
    "Are you evaluating this for this quarter, or planning for next year?",
  ],
  authority: [
    "Are you the one making this decision, or is there a team involved?",
    "Who else would need to sign off on something like this?",
  ],
  need: [
    "On a scale of 1-10, how urgent is solving this?",
    "What happens if you don't address this in the next 3-6 months?",
  ],
  timeline: [
    "If this looked right, what's your timeline for implementing something?",
    "Is there a specific deadline or event driving this?",
  ],
}

// Product Knowledge
export const productInfo = {
  nousAssist: {
    name: 'Nous Assist',
    price: '$499 one-time + $99/mo optional maintenance',
    target: 'Small businesses, solopreneurs, startups',
    features: [
      'Email triage & auto-response',
      'WhatsApp/SMS chatbot',
      'Basic CRM integration',
      'SQLite dashboard',
      '5 workflows included',
    ],
    bestFor: 'Businesses processing <500 emails/month, wanting to dip toes into automation',
    notFor: 'Complex multi-system integrations, voice AI, enterprise compliance',
  },
  nousConnect: {
    name: 'Nous Connect',
    price: '$2,499 one-time + $249/mo maintenance',
    target: 'Growing businesses, professional services, multi-channel operations',
    features: [
      'Everything in Assist',
      'Voice AI agents (24/7 phone support)',
      'QuickBooks/Xero integration',
      'Advanced analytics dashboard',
      'Custom workflow builder',
      'Priority support',
    ],
    bestFor: 'Businesses with call volume, invoice processing, multi-channel customer service',
    notFor: 'Enterprise compliance requirements, 50k+ monthly interactions',
  },
  nousCommand: {
    name: 'Nous Command',
    price: 'Custom (typically $10K-50K)',
    target: 'Enterprise, regulated industries, complex transformations',
    features: [
      'Everything in Connect',
      'Legacy system modernization',
      'Full Grafana/Metabase analytics',
      'White-label options',
      'Dedicated success manager',
      'SLA guarantees',
      'On-premise deployment options',
    ],
    bestFor: 'Banks, healthcare, enterprise with compliance needs, legacy modernization',
    notFor: 'Budget-constrained SMBs',
  },
}

// Industry-Specific Talking Points
export const industryInsights: Record<string, {
  commonPains: string[]
  relevantUseCases: string[]
  relevantCaseStudy: string
  objectionPattern: string
}> = {
  'real-estate': {
    commonPains: [
      'Missed calls during showings',
      'Lead follow-up delays',
      'After-hours inquiries going unanswered',
      'Manual CRM updates',
    ],
    relevantUseCases: ['Voice AI for 24/7 lead capture', 'Automated showing scheduling', 'Lead qualification'],
    relevantCaseStudy: 'real-estate-voice-ai-lead-qualification',
    objectionPattern: 'too_complex',
  },
  'restaurant': {
    commonPains: [
      'Invoice chaos from multiple vendors',
      'Manual bookkeeping',
      'Reservation management',
      'Staff scheduling coordination',
    ],
    relevantUseCases: ['Invoice automation', 'WhatsApp reservations', 'Vendor payment optimization'],
    relevantCaseStudy: 'cafe-operations-invoice-automation',
    objectionPattern: 'price_too_high',
  },
  'ecommerce': {
    commonPains: [
      'Support ticket volume',
      'Where-is-my-order queries',
      'Returns processing',
      'Multi-channel communication',
    ],
    relevantUseCases: ['Customer support automation', 'Order status automation', 'Instagram DM handling'],
    relevantCaseStudy: 'ecommerce-customer-support-automation',
    objectionPattern: 'already_have_solution',
  },
  'professional-services': {
    commonPains: [
      'Client communication overhead',
      'Appointment scheduling',
      'Document intake and processing',
      'Time tracking and invoicing',
    ],
    relevantUseCases: ['Client portal automation', 'Document processing', 'Calendar automation'],
    relevantCaseStudy: '',
    objectionPattern: 'need_to_think',
  },
}

// Conversation Starters & Hooks
export const conversationHooks = {
  valueStatements: [
    "We help businesses automate the 80% of work that's repetitive — so humans can focus on the 20% that actually needs a brain.",
    "Our clients typically save 15-30 hours per week within the first month. What could you do with that time back?",
    "The average SMB loses $5,000/month to manual work that AI can handle. We prove it with a free audit.",
  ],
  urgencyCreators: [
    "Every week you wait, that's another [X] hours of manual work that could be automated.",
    "What's the cost of missing one more lead because you were busy?",
    "Your competitors are already automating. The gap grows every month.",
  ],
  socialProof: [
    "We've automated invoice processing for restaurant groups saving $2,000+/month.",
    "Our voice AI handles 60,000+ payroll workers without a single human.",
    "Real estate agents using our lead capture see 40% more conversions.",
  ],
}

// Response Templates
export const responseTemplates = {
  greeting: {
    standard: "Hey! I'm Pivot, Denivra's AI. I help businesses figure out what's worth automating. What brings you here today?",
    returning: "Welcome back! Still exploring, or ready to move forward?",
    afterHours: "I'm here 24/7 — that's kind of our whole thing. 🙂 What can I help you figure out?",
  },
  discovery: {
    openEnded: "Tell me a bit about your business. What's eating up most of your time right now?",
    directed: "Based on what you said, sounds like [PAIN_POINT] is a real issue. How is that affecting your day-to-day?",
  },
  qualification: {
    soft: "Just so I can point you to the right solution — how big is your team, and what tools are you using today?",
    direct: "If this looked right, who would need to sign off, and what's your timeline for making a decision?",
  },
  presentation: {
    recommend: "Based on what you've told me, [PRODUCT] would be the best fit. Here's why...",
    compare: "You're between [A] and [B]. Here's how I'd think about it...",
  },
  close: {
    soft: "Want me to set up a 15-minute call to walk through this with a human? No pitch, just answers.",
    direct: "Ready to get started? I can have someone reach out today with a custom proposal.",
    followup: "What's the best email to send you more info? Or should I book you directly into our calendar?",
  },
}

// Chat Response Logic Helpers
export function detectIntent(message: string): string {
  const lower = message.toLowerCase()
  
  // Price/Cost
  if (/\b(price|cost|pricing|how much|investment|budget|afford)\b/.test(lower)) {
    return 'pricing'
  }
  
  // Demo/Trial
  if (/\b(demo|trial|try|test|see it|show me)\b/.test(lower)) {
    return 'demo'
  }
  
  // Voice/Phone
  if (/\b(voice|phone|call|calling|answering)\b/.test(lower)) {
    return 'voice-ai'
  }
  
  // Email
  if (/\b(email|inbox|gmail|outlook)\b/.test(lower)) {
    return 'email-automation'
  }
  
  // Documents/Invoices
  if (/\b(invoice|document|receipt|pdf|ocr|quickbooks|xero)\b/.test(lower)) {
    return 'document-processing'
  }
  
  // ROI/Savings
  if (/\b(roi|savings|save|return|worth it)\b/.test(lower)) {
    return 'roi'
  }
  
  // Integrations
  if (/\b(integrat|connect|crm|hubspot|salesforce|api)\b/.test(lower)) {
    return 'integrations'
  }
  
  // How it works
  if (/\b(how|work|process|implement|setup|timeline)\b/.test(lower)) {
    return 'how-it-works'
  }
  
  // Comparison
  if (/\b(vs|versus|compare|better|different|competitor)\b/.test(lower)) {
    return 'comparison'
  }
  
  // Case Studies
  if (/\b(example|case study|proof|results|success)\b/.test(lower)) {
    return 'case-studies'
  }
  
  // Objection signals
  if (/\b(expensive|too much|think about|not sure|maybe later)\b/.test(lower)) {
    return 'objection'
  }
  
  return 'general'
}

export function detectSentiment(message: string): 'positive' | 'neutral' | 'negative' | 'urgent' {
  const lower = message.toLowerCase()
  
  if (/\b(frustrated|angry|annoyed|terrible|hate|worst)\b/.test(lower)) {
    return 'negative'
  }
  if (/\b(asap|urgent|immediately|emergency|desperate)\b/.test(lower)) {
    return 'urgent'
  }
  if (/\b(love|great|excited|amazing|perfect|excellent)\b/.test(lower)) {
    return 'positive'
  }
  
  return 'neutral'
}

export function detectIndustry(message: string): string | null {
  const lower = message.toLowerCase()
  
  if (/\b(real estate|realtor|property|showing|listing)\b/.test(lower)) return 'real-estate'
  if (/\b(restaurant|café|cafe|food|beverage|hospitality)\b/.test(lower)) return 'restaurant'
  if (/\b(ecommerce|e-commerce|online store|shopify|amazon)\b/.test(lower)) return 'ecommerce'
  if (/\b(law|legal|attorney|lawyer)\b/.test(lower)) return 'professional-services'
  if (/\b(medical|healthcare|clinic|doctor|patient)\b/.test(lower)) return 'healthcare'
  if (/\b(finance|banking|insurance|accounting)\b/.test(lower)) return 'finance'
  
  return null
}
