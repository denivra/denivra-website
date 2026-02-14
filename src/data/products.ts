// NOUS Product Suite — Correct pricing and features

export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: string;
  priceMonthly?: string;
  description: string;
  target: string;
  features: string[];
  capabilities: {
    name: string;
    description: string;
  }[];
  integrations: string[];
  highlighted: boolean;
  tier: 'starter' | 'professional' | 'enterprise';
}

export const products: Product[] = [
  {
    id: 'nous-assist',
    name: 'Nous Assist',
    tagline: 'Your AI Mind for Solo Operations',
    price: '$2,800',
    priceMonthly: '$250/mo',
    description: 'Entry-level AI appliance on Mac Mini. Perfect for solopreneurs who need to scale without hiring.',
    target: 'Solopreneurs, freelancers, 1-person operations',
    features: [
      'Email triage & auto-response',
      'WhatsApp/SMS chatbot',
      'Document processing & extraction',
      'Local SQLite dashboard',
      '5 pre-built workflows',
      'Mac Mini hardware included',
    ],
    capabilities: [
      { name: 'Email Triage', description: 'Categorize, prioritize, auto-respond to routine emails' },
      { name: 'WhatsApp Bot', description: 'Answer FAQs, capture leads, route to human when needed' },
      { name: 'Document Processing', description: 'Extract data from receipts, invoices, statements' },
      { name: 'Activity Dashboard', description: 'SQLite-powered daily summaries and activity log' },
      { name: 'Workflow Automation', description: '5 pre-built templates for common tasks' },
    ],
    integrations: ['Gmail', 'Outlook', 'WhatsApp Business', 'Basic CRM export'],
    highlighted: false,
    tier: 'starter',
  },
  {
    id: 'nous-connect',
    name: 'Nous Connect',
    tagline: 'Full-Featured AI for Growing Teams',
    price: '$7,500',
    priceMonthly: '$750/mo',
    description: 'Complete automation platform with voice AI, accounting sync, and advanced analytics. For businesses ready to 10x their operations.',
    target: 'Small businesses, 5-20 employees, growing operations',
    features: [
      'Everything in Assist',
      'Voice AI agents (phone support)',
      'QuickBooks integration',
      'CRM sync (HubSpot)',
      'Advanced analytics dashboard',
      'Custom workflow builder',
      'n8n automation engine',
      'Priority support',
    ],
    capabilities: [
      { name: 'Voice AI Agents', description: '24/7 phone answering, lead qualification, appointment booking' },
      { name: 'Accounting Sync', description: 'Auto-push expenses to QuickBooks, reconciliation checks' },
      { name: 'CRM Integration', description: 'Sync contacts, deals, activities with HubSpot' },
      { name: 'Analytics Dashboard', description: 'Grafana-powered real-time metrics and reporting' },
      { name: 'Workflow Builder', description: 'Visual n8n editor for custom automation flows' },
      { name: 'Multi-Channel', description: 'Unified inbox across email, chat, voice, SMS' },
    ],
    integrations: ['Gmail', 'Outlook', 'WhatsApp', 'Telegram', 'QuickBooks Online', 'HubSpot', 'Slack', 'Twilio', 'Vapi'],
    highlighted: true,
    tier: 'professional',
  },
  {
    id: 'nous-command',
    name: 'Nous Command',
    tagline: 'Enterprise AI Orchestration',
    price: 'Custom',
    priceMonthly: 'Custom',
    description: 'Full AI orchestration platform for enterprises. Multi-location fleet management, legacy system integration, and white-label options.',
    target: 'Enterprises, multi-location, complex operations',
    features: [
      'Everything in Connect',
      'Legacy system modernization',
      'Multi-box fleet management',
      'Grafana + Metabase analytics',
      'White-label options',
      'Dedicated success manager',
      'SLA guarantees',
      'Custom integrations',
    ],
    capabilities: [
      { name: 'Fleet Management', description: 'Central dashboard for multiple Nous boxes across locations' },
      { name: 'Legacy Integration', description: 'Connect to mainframes, custom APIs, proprietary systems' },
      { name: 'Enterprise Analytics', description: 'Full Grafana + Metabase with custom dashboards' },
      { name: 'White-Label', description: 'Your branding, your customer portal, our engine' },
      { name: 'SLA Guarantees', description: '99.9% uptime, 4-hour response, dedicated support' },
      { name: 'Custom Development', description: 'Bespoke workflows and integrations for your needs' },
    ],
    integrations: ['All Connect integrations', 'SAP', 'Oracle', 'Salesforce', 'Custom APIs', 'Legacy systems'],
    highlighted: false,
    tier: 'enterprise',
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};
