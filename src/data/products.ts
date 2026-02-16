export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: string;
  priceLabel: string;
  description: string;
  target: string;
  hardware: string;
  chip: string;
  ram: string;
  storage: string;
  llmCapability: string;
  features: string[];
  capabilities: {
    name: string;
    description: string;
  }[];
  integrations: string[];
  workflowCount: string;
  highlighted: boolean;
  tier: 'solo' | 'pro' | 'enterprise';
}

export const products: Product[] = [
  {
    id: 'nous-solo',
    name: 'Nous Solo',
    tagline: 'Your Night Shift Employee',
    price: 'from $2,800',
    priceLabel: 'one-time',
    description: 'The AI employee that handles your busywork while you sleep. Email triage, document processing, messaging bots, and scheduling — all running locally on a Mac Mini in your office.',
    target: 'Solopreneurs, freelancers, 1-5 person shops',
    hardware: 'Mac Mini M4',
    chip: 'Apple M4 10-core',
    ram: '24GB Unified Memory',
    storage: '512GB SSD',
    llmCapability: 'Runs Llama 3.2 (3B-8B) at 28-35 tokens/sec',
    features: [
      'Email triage & smart auto-responses',
      'WhatsApp / Telegram customer bot',
      'Document & receipt extraction',
      'Calendar management & reminders',
      'CRM basics (Airtable / Notion)',
      'Review monitoring & draft responses',
      'Daily activity dashboard',
      'File auto-organization',
      '10 pre-built n8n workflows',
      'Mac Mini hardware included',
    ],
    capabilities: [
      { name: 'Email Triage', description: 'Categorize, prioritize, auto-respond to routine emails overnight' },
      { name: 'Messaging Bot', description: 'WhatsApp & Telegram bot for customer inquiries and lead capture' },
      { name: 'Document Processing', description: 'Extract data from receipts, invoices, PDFs into structured data' },
      { name: 'Smart Calendar', description: 'Auto-schedule appointments, send reminders, prevent conflicts' },
      { name: 'Review Guardian', description: 'Monitor Google/Yelp reviews and draft responses for your approval' },
      { name: 'Activity Dashboard', description: 'Morning summary of everything your AI did overnight' },
    ],
    integrations: ['Gmail', 'Google Calendar', 'WhatsApp Business', 'Telegram', 'Airtable', 'Google Drive', 'Instagram'],
    workflowCount: '10',
    highlighted: false,
    tier: 'solo',
  },
  {
    id: 'nous-pro',
    name: 'Nous Pro',
    tagline: 'Your Operations Manager',
    price: 'from $4,800',
    priceLabel: 'one-time',
    description: 'Full-featured AI operations platform with voice agents, accounting sync, CRM integration, and the visual n8n workflow builder. For businesses ready to automate everything.',
    target: 'Small businesses, 5-50 employees, multi-channel operations',
    hardware: 'Mac Mini M4 Pro',
    chip: 'Apple M4 Pro 12-core',
    ram: '48GB Unified Memory',
    storage: '1TB SSD',
    llmCapability: 'Runs Llama 3.1 (8B-13B) + Mixtral for complex reasoning',
    features: [
      'Everything in Solo',
      '24/7 Voice AI phone answering',
      'QuickBooks / Xero accounting sync',
      'HubSpot / Pipedrive CRM integration',
      'Visual n8n workflow builder',
      'Advanced Grafana analytics',
      'Email drip campaigns & follow-ups',
      'E-commerce (Shopify / Square)',
      'Team Slack / Discord notifications',
      'RAG knowledge base (your docs)',
      '25+ pre-built n8n workflows',
    ],
    capabilities: [
      { name: 'Voice AI Agents', description: '24/7 phone answering, lead qualification, appointment booking via Vapi' },
      { name: 'Accounting Sync', description: 'Auto-push expenses to QuickBooks, invoice generation, reconciliation' },
      { name: 'CRM Integration', description: 'Two-way sync with HubSpot or Pipedrive — contacts, deals, activities' },
      { name: 'Workflow Builder', description: 'Visual n8n editor — build custom automations without writing code' },
      { name: 'Marketing Automation', description: 'Email sequences, follow-up campaigns, drip automation' },
      { name: 'Knowledge Base', description: 'Upload your docs — AI answers questions from YOUR data via RAG' },
      { name: 'Multi-Channel Inbox', description: 'Unified inbox across email, WhatsApp, Telegram, SMS, and voice' },
      { name: 'E-commerce', description: 'Shopify/Square order processing, inventory sync, payment tracking' },
    ],
    integrations: ['Gmail', 'Outlook', 'WhatsApp', 'Telegram', 'QuickBooks Online', 'Xero', 'HubSpot', 'Pipedrive', 'Slack', 'Stripe', 'Square', 'Shopify', 'Vapi', 'DocuSign', 'Calendly', 'Mailchimp'],
    workflowCount: '25+',
    highlighted: true,
    tier: 'pro',
  },
  {
    id: 'nous-enterprise',
    name: 'Nous Enterprise',
    tagline: 'Your AI Department',
    price: 'from $7,500',
    priceLabel: 'one-time',
    description: 'Enterprise-grade AI operations with compliance engine, multi-location fleet management, legacy system integration, and encrypted storage. Built for regulated industries.',
    target: 'Law firms, medical practices, financial services, multi-location businesses',
    hardware: 'Mac Mini M4 Pro',
    chip: 'Apple M4 Pro 12-core',
    ram: '48GB Unified Memory',
    storage: '2TB SSD (encrypted)',
    llmCapability: 'Runs 13B-32B models with multi-model routing',
    features: [
      'Everything in Pro',
      'Compliance engine (HIPAA, SOC2, FINRA)',
      'Multi-office fleet management',
      'Legacy system integration (custom APIs)',
      'HR automation (BambooHR)',
      'Enterprise CRM (Salesforce)',
      'Enterprise helpdesk (Zendesk / Freshdesk)',
      'Advanced security & audit logging',
      'Multi-model routing (fast + powerful)',
      'White-label client portal',
      '50+ pre-built n8n workflows',
    ],
    capabilities: [
      { name: 'Compliance Engine', description: 'HIPAA-safe document processing, SOC2 audit trails, regulatory monitoring' },
      { name: 'Fleet Management', description: 'Central dashboard managing multiple Nous boxes across locations' },
      { name: 'Legacy Integration', description: 'Connect to old systems via custom APIs and data migration tools' },
      { name: 'Multi-Model Routing', description: 'Route tasks to the best local LLM — fast model for simple, powerful for complex' },
      { name: 'Enterprise Security', description: 'Encrypted storage, access controls, complete audit logging' },
      { name: 'White-Label Portal', description: 'Custom-branded client portal powered by your Nous infrastructure' },
      { name: 'Legal Document Review', description: 'Contract analysis, clause extraction, risk flagging' },
      { name: 'Advanced Reporting', description: 'Grafana + Metabase dashboards, custom KPIs, scheduled reports' },
    ],
    integrations: ['All Pro integrations', 'Salesforce', 'Jira', 'Zendesk', 'Freshdesk', 'BambooHR', 'Zoom', 'Asana', 'Monday', 'ClickUp', 'Custom APIs', 'Legacy systems'],
    workflowCount: '50+',
    highlighted: false,
    tier: 'enterprise',
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};
