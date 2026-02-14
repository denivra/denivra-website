// Automation Capabilities Library

export interface Automation {
  id: string;
  name: string;
  category: 'communication' | 'document' | 'operations' | 'finance' | 'intelligence' | 'integration';
  icon: string; // Lucide icon name
  tagline: string;
  description: string;
  howItWorks: string[];
  example: {
    before: string;
    after: string;
    savings: string;
  };
  integrations: string[];
  availableIn: ('assist' | 'connect' | 'command')[];
}

export const automations: Automation[] = [
  // COMMUNICATION
  {
    id: 'voice-ai',
    name: 'Voice AI Agents',
    category: 'communication',
    icon: 'Phone',
    tagline: '24/7 phone support that never sleeps',
    description: 'AI-powered voice agents handle inbound and outbound calls. Qualify leads, book appointments, answer FAQs, and route complex issues to humans.',
    howItWorks: [
      'Incoming call triggers AI agent with your knowledge base',
      'Natural conversation handles common scenarios',
      'Complex issues get warm-transferred to you with context',
      'All calls transcribed and logged for review',
    ],
    example: {
      before: 'Missed 40% of calls while with clients. Lost leads.',
      after: 'Every call answered in <2 seconds. 60% resolved by AI.',
      savings: '$3,000/month in captured revenue',
    },
    integrations: ['Twilio', 'Vapi', 'Bland AI', 'Google Calendar', 'HubSpot'],
    availableIn: ['connect', 'command'],
  },
  {
    id: 'email-triage',
    name: 'Email Triage',
    category: 'communication',
    icon: 'Mail',
    tagline: 'Wake up to an organized inbox',
    description: 'AI categorizes, prioritizes, and responds to routine emails. Your inbox becomes a dashboard of decisions, not a pile of chaos.',
    howItWorks: [
      'Emails processed in real-time as they arrive',
      'AI categorizes: urgent, routine, spam, delegatable',
      'Routine emails get auto-drafted responses',
      'Morning summary shows what needs your attention',
    ],
    example: {
      before: '150 emails to process every morning. 2-3 hours lost.',
      after: '8 items need decision. 15 minutes to clear.',
      savings: '2.5 hours/day saved',
    },
    integrations: ['Gmail', 'Outlook', 'Microsoft 365'],
    availableIn: ['assist', 'connect', 'command'],
  },
  {
    id: 'whatsapp-bot',
    name: 'WhatsApp Automation',
    category: 'communication',
    icon: 'MessageSquare',
    tagline: 'Business messaging on autopilot',
    description: 'Unified WhatsApp, SMS, and Telegram handling. AI responds to inquiries, captures documents, and escalates when needed.',
    howItWorks: [
      'Connect WhatsApp Business API or Evolution API',
      'AI handles FAQ responses instantly',
      'Documents sent via chat are auto-processed',
      'Complex queries routed to human with full context',
    ],
    example: {
      before: 'Clients wait hours for responses. Messages get lost.',
      after: '<30 second response time. Zero missed messages.',
      savings: '4 hours/day in messaging',
    },
    integrations: ['WhatsApp Business', 'Telegram', 'Signal', 'SMS/Twilio'],
    availableIn: ['assist', 'connect', 'command'],
  },
  // DOCUMENT PROCESSING
  {
    id: 'receipt-extraction',
    name: 'Receipt Processing',
    category: 'document',
    icon: 'Receipt',
    tagline: 'Photos → Categorized expenses',
    description: 'Snap a photo of any receipt — AI extracts vendor, amount, date, and category. Auto-pushes to QuickBooks or your accounting system.',
    howItWorks: [
      'Client sends receipt via WhatsApp/email/SMS',
      'AI extracts: vendor, amount, date, payment method',
      'Auto-categorizes based on learned patterns',
      'Pushes to QuickBooks with full audit trail',
    ],
    example: {
      before: 'Manual data entry: 3-5 minutes per receipt',
      after: 'AI processing: <10 seconds per receipt',
      savings: '15+ hours/week for accounting practices',
    },
    integrations: ['QuickBooks Online', 'Xero', 'FreshBooks'],
    availableIn: ['connect', 'command'],
  },
  {
    id: 'invoice-auditor',
    name: 'Invoice Auditing',
    category: 'document',
    icon: 'FileSearch',
    tagline: 'Catch price hikes before you pay',
    description: 'AI monitors invoices against historical data. Flags price increases, duplicate charges, and unusual patterns before payment.',
    howItWorks: [
      'Invoice arrives via email or upload',
      'AI extracts line items and totals',
      'Compares against vendor history',
      'Alerts on anomalies: price increases, duplicates, new charges',
    ],
    example: {
      before: 'Supplier raised avocado price 15%. Nobody noticed for 3 months.',
      after: 'Alert: "Avocados up 15% vs 90-day average. Approve?"',
      savings: '$200-500/month in caught overcharges',
    },
    integrations: ['QuickBooks', 'Gmail', 'Outlook', 'Box', 'Dropbox'],
    availableIn: ['connect', 'command'],
  },
  {
    id: 'document-intake',
    name: 'Multi-Channel Intake',
    category: 'document',
    icon: 'Inbox',
    tagline: 'One inbox for all client documents',
    description: 'Clients send docs via any channel — email, text, WhatsApp, portal. AI normalizes everything into your workflow.',
    howItWorks: [
      'Set up intake points: email, WhatsApp, SMS, portal',
      'Documents auto-classified by type',
      'AI extracts key data and routes appropriately',
      'Dashboard shows all incoming with status',
    ],
    example: {
      before: 'Documents scattered across email, texts, Dropbox. Hours hunting.',
      after: 'Single dashboard. Everything categorized and searchable.',
      savings: '5+ hours/week in document handling',
    },
    integrations: ['Gmail', 'Outlook', 'WhatsApp', 'SMS', 'Box', 'Dropbox', 'Google Drive'],
    availableIn: ['assist', 'connect', 'command'],
  },
  // OPERATIONS
  {
    id: 'shift-scheduler',
    name: 'Shift Management',
    category: 'operations',
    icon: 'Calendar',
    tagline: 'Staff swaps without manager headaches',
    description: 'AI handles shift swap requests, finds coverage, and updates schedules. Manager only sees the final result.',
    howItWorks: [
      'Employee texts: "Can\'t work Friday"',
      'AI checks who\'s available and qualified',
      'Proposes swap to available employees',
      'First to accept gets the shift. Schedule updated.',
    ],
    example: {
      before: 'Manager spends 45 min on group text finding coverage.',
      after: 'AI resolves swap in 10 minutes. Manager involvement: zero.',
      savings: '3-5 hours/week in scheduling',
    },
    integrations: ['7shifts', 'When I Work', 'Deputy', 'Homebase', 'Google Calendar'],
    availableIn: ['connect', 'command'],
  },
  {
    id: 'equipment-monitor',
    name: 'Equipment Monitoring',
    category: 'operations',
    icon: 'Thermometer',
    tagline: 'Know before it breaks',
    description: 'IoT sensors track equipment health. AI alerts you to problems before they become failures. Save thousands in spoilage and repairs.',
    howItWorks: [
      'Install smart plugs and temperature sensors',
      'AI learns normal operating patterns',
      'Anomaly detected: "Freezer temp rising — check seal"',
      'Alert via SMS/WhatsApp with recommended action',
    ],
    example: {
      before: 'Freezer failed overnight. $2,000 in spoiled inventory.',
      after: 'Alert at 2 AM: "Freezer temp above threshold." Tech called. $0 loss.',
      savings: '$2,000-10,000 per prevented incident',
    },
    integrations: ['Shelly smart plugs', 'Govee sensors', 'Home Assistant'],
    availableIn: ['connect', 'command'],
  },
  {
    id: 'review-management',
    name: 'Review Management',
    category: 'operations',
    icon: 'Star',
    tagline: 'Respond in minutes, not days',
    description: 'Monitor reviews across Google, Yelp, TripAdvisor. AI drafts responses instantly. You approve with one tap.',
    howItWorks: [
      'Reviews monitored every 15 minutes',
      'New review triggers AI analysis',
      'Response drafted based on sentiment and content',
      'Push notification with approve/edit/escalate options',
    ],
    example: {
      before: '1-star review sits for 3 days. Damage done.',
      after: 'Review detected in 15 min. Response live in 30 min.',
      savings: '$100-500/month in retained customers',
    },
    integrations: ['Google Business', 'Yelp', 'TripAdvisor', 'Facebook'],
    availableIn: ['connect', 'command'],
  },
  {
    id: 'training-bot',
    name: 'Training Knowledge Bot',
    category: 'operations',
    icon: 'GraduationCap',
    tagline: '24/7 answers for your team',
    description: 'Upload your SOPs, manuals, and policies. AI answers staff questions instantly, anytime. No more 10 PM texts to the owner.',
    howItWorks: [
      'Upload training materials, SOPs, FAQs',
      'AI indexes and understands your content',
      'Staff asks via WhatsApp/SMS: "How do I close the register?"',
      'AI responds with accurate answer from your materials',
    ],
    example: {
      before: 'New hire texts you at 10 PM with questions. Every week.',
      after: 'Bot answers instantly. You sleep.',
      savings: '30% reduction in training time',
    },
    integrations: ['WhatsApp', 'Slack', 'Teams', 'Telegram'],
    availableIn: ['connect', 'command'],
  },
  // FINANCE
  {
    id: 'quickbooks-sync',
    name: 'QuickBooks Integration',
    category: 'finance',
    icon: 'Calculator',
    tagline: 'Expenses in. Reports out.',
    description: 'Two-way sync with QuickBooks Online. Auto-push expenses, pull reports, reconcile accounts. Accounting on autopilot.',
    howItWorks: [
      'OAuth connection to QuickBooks',
      'Processed receipts auto-create expense entries',
      'Categorization matches your chart of accounts',
      'Daily reconciliation checks for discrepancies',
    ],
    example: {
      before: 'Manual QuickBooks entry: 2-3 hours/week',
      after: 'Automatic sync overnight. 5-min morning review.',
      savings: '2.5 hours/week',
    },
    integrations: ['QuickBooks Online', 'QuickBooks Desktop (via API)'],
    availableIn: ['connect', 'command'],
  },
  {
    id: 'payroll-precheck',
    name: 'Payroll Pre-Check',
    category: 'finance',
    icon: 'DollarSign',
    tagline: 'Catch errors before they cost you',
    description: 'AI reviews timesheets before payroll runs. Flags overtime, missed punches, unusual patterns. No more payroll surprises.',
    howItWorks: [
      'Pull timesheet data from your system',
      'AI checks against rules: overtime, missed punches, anomalies',
      'Report generated with flagged items',
      'Fix issues before payroll runs',
    ],
    example: {
      before: '3 employees in unplanned overtime = $600 extra payroll',
      after: 'Alert Monday: "3 employees approaching OT. Adjust schedule?"',
      savings: '$300-800/month in prevented overtime',
    },
    integrations: ['7shifts', 'When I Work', 'ADP', 'Gusto', 'Paychex'],
    availableIn: ['connect', 'command'],
  },
  // INTELLIGENCE
  {
    id: 'weather-prep',
    name: 'Weather Intelligence',
    category: 'intelligence',
    icon: 'CloudSun',
    tagline: 'Prep sheets that predict demand',
    description: 'AI correlates weather with historical sales. Automatically adjusts prep sheets. Less waste, fewer stockouts.',
    howItWorks: [
      'Pull 7-day weather forecast',
      'Analyze correlation with past sales data',
      'Generate adjusted prep sheet',
      'Send to kitchen before opening',
    ],
    example: {
      before: 'Guess on prep. Throw away $200 in cold brew when it rains.',
      after: 'AI: "Rain tomorrow. Reduce cold brew 40%."',
      savings: '$80-300/month in reduced waste',
    },
    integrations: ['Weather APIs', 'POS systems', 'Email/WhatsApp'],
    availableIn: ['connect', 'command'],
  },
  {
    id: 'event-radar',
    name: 'Local Event Radar',
    category: 'intelligence',
    icon: 'MapPin',
    tagline: 'Know what\'s happening before it happens',
    description: 'AI monitors local events that could impact your business. Concerts, marathons, conferences — get staffing alerts in advance.',
    howItWorks: [
      'Monitor event calendars, permits, news',
      'Filter for events within your impact radius',
      'Estimate foot traffic impact',
      'Alert: "Marathon passing your street Saturday. +40% expected."',
    ],
    example: {
      before: 'Surprised by marathon crowd. Understaffed. Lost $500 in sales.',
      after: 'Alert 3 days early. Fully staffed. Captured all demand.',
      savings: '$200-800/month in captured revenue',
    },
    integrations: ['Google Calendar', 'Event APIs', 'Local news feeds'],
    availableIn: ['connect', 'command'],
  },
  {
    id: 'activity-dashboard',
    name: 'Activity Dashboard',
    category: 'intelligence',
    icon: 'BarChart3',
    tagline: 'What your AI did while you slept',
    description: 'Real-time dashboard showing all automated activity. Tasks completed, decisions made, items flagged. Full visibility, zero guessing.',
    howItWorks: [
      'All AI actions logged to local database',
      'Dashboard updates in real-time',
      'Morning summary pushed via email/WhatsApp',
      'Drill down into any action for details',
    ],
    example: {
      before: 'No idea what automation is doing. Trust issues.',
      after: '147 tasks/night logged. Full audit trail. Total confidence.',
      savings: 'Priceless: peace of mind',
    },
    integrations: ['SQLite', 'PostgreSQL', 'Grafana (Command)'],
    availableIn: ['assist', 'connect', 'command'],
  },
  // INTEGRATION
  {
    id: 'crm-sync',
    name: 'CRM Integration',
    category: 'integration',
    icon: 'Users',
    tagline: 'Contacts and deals in sync',
    description: 'Two-way sync with HubSpot, Salesforce, or your CRM. AI logs activities, updates contacts, and keeps your pipeline current.',
    howItWorks: [
      'Connect CRM via OAuth',
      'Calls, emails, meetings auto-logged as activities',
      'Contact info updated from communications',
      'Deal stages updated based on signals',
    ],
    example: {
      before: 'Rep forgets to log call. Pipeline data is stale.',
      after: 'Every interaction logged automatically. Pipeline accurate.',
      savings: '3+ hours/week in CRM maintenance',
    },
    integrations: ['HubSpot', 'Salesforce', 'Pipedrive', 'Close'],
    availableIn: ['connect', 'command'],
  },
  {
    id: 'legacy-connect',
    name: 'Legacy System Integration',
    category: 'integration',
    icon: 'Server',
    tagline: 'Modern AI meets classic systems',
    description: 'Connect Nous to mainframes, AS/400, custom databases, and proprietary APIs. No rip-and-replace required.',
    howItWorks: [
      'Analyze existing system APIs and data structures',
      'Build secure middleware connectors',
      'Sync data in real-time or batched',
      'Nous works with your systems, not against them',
    ],
    example: {
      before: 'Stuck with 20-year-old system. Can\'t modernize. Can\'t integrate.',
      after: 'Nous talks to legacy system via custom connector. AI layer added.',
      savings: 'Avoided $500K+ system replacement',
    },
    integrations: ['Custom APIs', 'ODBC', 'REST/SOAP wrappers', 'File-based interfaces'],
    availableIn: ['command'],
  },
];

export const getAutomationById = (id: string): Automation | undefined => {
  return automations.find(a => a.id === id);
};

export const getAutomationsByCategory = (category: Automation['category']): Automation[] => {
  return automations.filter(a => a.category === category);
};

export const getAutomationsForTier = (tier: 'assist' | 'connect' | 'command'): Automation[] => {
  return automations.filter(a => a.availableIn.includes(tier));
};
