import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions'

/**
 * Pivot Chatbot API - Netlify Serverless Function
 * 
 * This function proxies chat requests to Clawdbot for intelligent responses.
 * Falls back to local response generation if Clawdbot is unavailable.
 */

interface ChatRequest {
  message: string
  conversationId?: string
  context?: {
    page?: string
    referrer?: string
    previousMessages?: { role: string; content: string }[]
  }
}

interface ChatResponse {
  message: string
  conversationId: string
  suggestedActions?: string[]
  leadScore?: number
}

// Intent detection
function detectIntent(message: string): string {
  const lower = message.toLowerCase()
  
  if (/\b(price|cost|pricing|how much|investment|budget|afford)\b/.test(lower)) return 'pricing'
  if (/\b(demo|trial|try|test|see it|show me)\b/.test(lower)) return 'demo'
  if (/\b(voice|phone|call|calling|answering)\b/.test(lower)) return 'voice-ai'
  if (/\b(email|inbox|gmail|outlook)\b/.test(lower)) return 'email-automation'
  if (/\b(invoice|document|receipt|pdf|ocr|quickbooks|xero)\b/.test(lower)) return 'document-processing'
  if (/\b(roi|savings|save|return|worth it)\b/.test(lower)) return 'roi'
  if (/\b(integrat|connect|crm|hubspot|salesforce|api)\b/.test(lower)) return 'integrations'
  if (/\b(how|work|process|implement|setup|timeline)\b/.test(lower)) return 'how-it-works'
  if (/\b(case study|example|proof|results|success)\b/.test(lower)) return 'case-studies'
  if (/\b(blog|article|read|learn)\b/.test(lower)) return 'blog'
  
  return 'general'
}

// Generate local response based on intent
function generateLocalResponse(message: string, intent: string): ChatResponse {
  const responses: Record<string, string> = {
    pricing: `Our packages are designed for different stages:

💼 **Nous Assist** — $499 one-time
Best for small businesses just starting with automation

🚀 **Nous Connect** — $2,499 one-time  
Most popular! Includes Voice AI, QuickBooks, advanced dashboards

🏢 **Nous Command** — Custom pricing
Enterprise-grade with SLA, dedicated support, white-label options

All include implementation and training. Monthly maintenance is optional.

What size business are you automating for?`,

    demo: `I'd love to show you what Nous can do! Here are your options:

📅 **Quick Call** — 15 minutes, no pitch, just answers
[Book here](https://calendly.com/denivra/demo)

💬 **Live Chat** — Keep talking with me and I'll show you specific features

📧 **Email** — Send us your questions at info@denivra.com

Which works best for your schedule?`,

    'voice-ai': `Our Voice AI handles calls 24/7 — it's like having a tireless receptionist who never sleeps.

**What it does:**
• Answers incoming calls with natural conversation
• Qualifies leads (budget, timeline, decision maker)
• Books appointments directly into your calendar
• Handles FAQs without breaking a sweat

**Real results:**
• Real estate agency: +40% lead capture
• After-hours leads that used to go to voicemail? Now captured and qualified.

Want to hear a sample call, or shall I explain how we'd set this up for your business?`,

    'email-automation': `Email automation is where most businesses start — it's high-impact and fast to implement.

**Typical setup:**
• AI triages incoming emails (urgent/normal/spam)
• Auto-responds to common queries
• Extracts data from attachments (invoices, forms)
• Routes important emails to the right person

**Impact:**
• Average client saves 2-4 hours/day
• Response time goes from hours to seconds

What kind of email volume are you dealing with?`,

    'document-processing': `Document processing is one of our strongest use cases — we've saved clients thousands in duplicate payments alone.

**The flow:**
1. Send invoices/receipts anywhere (email, WhatsApp, upload portal)
2. AI extracts vendor, amount, date, line items
3. Validates against known vendors
4. Pushes to QuickBooks/Xero
5. Flags duplicates and anomalies

**Case Study:**
Café group processing 200+ invoices/month → 90% time reduction, $1,200/month saved in caught duplicates.

What's your document volume like?`,

    roi: `ROI is what matters. Here's what our clients typically see:

📊 **Time Savings**
• 2-6 hours/day on email processing
• 15+ hours/month on invoice entry
• 60% reduction in support tickets

💰 **Cost Savings**
• $2,000-10,000/month depending on scale
• Payback period: 30-90 days typically

📈 **Revenue Impact**
• +40% lead capture (24/7 response)
• +15% conversion (faster follow-up)

Check out our ROI Calculator on the site — it'll give you personalized numbers.

What's your biggest time sink right now?`,

    integrations: `We play nice with everything:

**CRMs:** HubSpot, Pipedrive, Salesforce, Close
**Accounting:** QuickBooks, Xero, FreshBooks
**Communication:** Gmail, Outlook, WhatsApp, SMS, Slack
**Calendars:** Google Calendar, Outlook, Calendly
**E-commerce:** Shopify, WooCommerce
**Custom:** We can build API connections to almost anything

What systems are you currently using?`,

    'how-it-works': `Here's our typical implementation:

**Week 1: Discovery**
• We audit your current workflows
• Identify automation opportunities
• Design the solution architecture

**Week 2: Build**
• Configure AI to your data/tone
• Set up integrations
• Build dashboards

**Week 3: Test & Launch**
• Parallel run (AI + human)
• Refinements based on feedback
• Go live with monitoring

**Ongoing:** Optional monthly maintenance for updates and optimization.

Most clients are live in under 2 weeks. What's your timeline looking like?`,

    'case-studies': `We've got receipts! Here are a few highlights:

🏢 **Olympic Payroll**
1.6M lines of legacy code documented in 6 weeks
60,000+ workers served, zero disruption

☕ **Café Operations**
200+ invoices/month automated
$2,000/month saved (duplicates + discounts + labor)

🏠 **Real Estate Brokerage**
40% more leads captured with Voice AI
24/7 coverage, 10-second response time

🛍️ **DTC Fashion Brand**
60% reduction in support tickets
Response time: 8 hours → 2 minutes

Want to dive deep into any of these? Or tell me your industry and I'll point you to the most relevant one.`,

    blog: `We write about what actually works in AI automation — no hype, just practical insights.

**Recent articles:**
• "AI Voice Agents Are Replacing Call Centers — Here's What's Actually Happening"
• "The SMB Automation Playbook: What Actually Delivers ROI"
• "Claude vs GPT-4 for Enterprise Automation"

Check out the Blog section on our site, or ask me about any specific topic you're curious about!`,

    general: `I'm Pivot, Denivra's AI. I help businesses figure out what's worth automating.

Here's what I can help with:

💰 **Pricing** — Our packages and what's included
🎯 **Demo** — Schedule a walkthrough
📊 **ROI** — Calculate your potential savings
🔌 **Integrations** — What systems we connect to
📞 **Voice AI** — 24/7 phone automation
📧 **Email** — Inbox automation
📄 **Documents** — Invoice/receipt processing
📚 **Case Studies** — Real results from real clients

What's on your mind?`
  }

  return {
    message: responses[intent] || responses.general,
    conversationId: `conv-${Date.now()}`,
    suggestedActions: getSuggestedActions(intent),
  }
}

function getSuggestedActions(intent: string): string[] {
  const actions: Record<string, string[]> = {
    pricing: ['See ROI Calculator', 'Book Demo', 'View Case Studies'],
    demo: ['Pricing Details', 'Case Studies', 'How It Works'],
    'voice-ai': ['Hear Sample Call', 'See Pricing', 'Book Demo'],
    'email-automation': ['See ROI', 'Book Demo', 'Case Studies'],
    'document-processing': ['QuickBooks Integration', 'Pricing', 'Book Demo'],
    roi: ['Open ROI Calculator', 'Book Demo', 'Case Studies'],
    integrations: ['View All Integrations', 'Book Demo', 'Pricing'],
    'how-it-works': ['Book Discovery Call', 'Pricing', 'Case Studies'],
    'case-studies': ['Read Full Studies', 'Book Demo', 'Pricing'],
    blog: ['Read Articles', 'Subscribe', 'Book Demo'],
    general: ['Pricing', 'Demo', 'Case Studies'],
  }
  
  return actions[intent] || actions.general
}

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
  }

  // Handle preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' }
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    }
  }

  try {
    const body: ChatRequest = JSON.parse(event.body || '{}')
    
    if (!body.message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Message is required' }),
      }
    }

    // Try Clawdbot backend first (if configured)
    const clawdbotUrl = process.env.CLAWDBOT_URL
    const clawdbotToken = process.env.CLAWDBOT_TOKEN

    if (clawdbotUrl && clawdbotToken) {
      try {
        const clawdbotResponse = await fetch(`${clawdbotUrl}/api/chat`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${clawdbotToken}`,
          },
          body: JSON.stringify({
            message: body.message,
            sessionId: body.conversationId,
            context: {
              source: 'denivra-website',
              ...body.context,
            },
          }),
        })

        if (clawdbotResponse.ok) {
          const data = await clawdbotResponse.json()
          return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
              message: data.message,
              conversationId: data.sessionId || body.conversationId,
              suggestedActions: data.suggestedActions,
            }),
          }
        }
      } catch (e) {
        console.error('Clawdbot API error, falling back to local:', e)
      }
    }

    // Fallback to local response generation
    const intent = detectIntent(body.message)
    const response = generateLocalResponse(body.message, intent)

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(response),
    }

  } catch (error) {
    console.error('Chat API error:', error)
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Internal server error',
        message: "Sorry, I'm having trouble right now. Please try again or email us at info@denivra.com",
      }),
    }
  }
}

export { handler }
