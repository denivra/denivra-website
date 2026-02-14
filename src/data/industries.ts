// Industry-Specific Solutions

export interface IndustryFeature {
  name: string;
  description: string;
  monthlyValue?: string;
}

export interface Industry {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  heroTitle: string;
  painPoints: string[];
  description: string;
  priceSetup: string;
  priceMonthly: string;
  features: IndustryFeature[];
  integrations: string[];
  hardware: string[];
  roi: {
    paybackPeriod: string;
    monthlySavingsLow: number;
    monthlySavingsHigh: number;
  };
  caseStudy?: {
    quote: string;
    author: string;
    role: string;
    result: string;
  };
}

export const industries: Industry[] = [
  {
    id: 'cafe',
    name: 'Nous Café',
    slug: 'cafe',
    tagline: 'Your 24/7 Digital Operations Manager',
    heroTitle: 'Stop Fighting Fires. Start Running Your Café.',
    painPoints: [
      "You're doing 10 jobs at once",
      'Bad reviews sit for days before you see them',
      'Staff scheduling is a constant headache',
      'You throw away food guessing wrong on prep',
      'Suppliers sneak in price increases',
      'Permits expire and you find out too late',
    ],
    description: 'A locally-hosted automation platform that transforms your café into an intelligently-managed operation. Runs on a Mac mini in your back office — no cloud fees, no data leaving your building.',
    priceSetup: '$1,299 - $1,799',
    priceMonthly: '~$2 (electricity)',
    features: [
      { name: 'Review Guardian', description: 'Monitors Google/Yelp/TripAdvisor every 15 min, drafts responses for approval', monthlyValue: '$100-300' },
      { name: 'Shift Swap Arbiter', description: 'Staff texts "can\'t work Friday" → System finds coverage automatically', monthlyValue: 'Manager time saved' },
      { name: 'Weather-Smart Prep', description: 'Heatwave? More cold brew. Rain? Less foot traffic prep.', monthlyValue: '$80-300' },
      { name: 'Equipment Watchdog', description: 'Knows if your freezer is failing before your food does', monthlyValue: '$2K-10K prevented' },
      { name: 'License Tracker', description: '"Your health permit expires in 60 days"', monthlyValue: 'Closure risk eliminated' },
      { name: 'Invoice Auditor', description: 'Catches when suppliers quietly raise prices', monthlyValue: '$50-200' },
      { name: 'Payroll Pre-Check', description: 'Flags overtime before it happens, catches missed punches', monthlyValue: '$100-300' },
      { name: 'Event Radar', description: '"Marathon passing your street Saturday. Staff up."', monthlyValue: '$200-800' },
      { name: 'Training Bot', description: 'New hire at 10 PM: "How do I close?" — answered instantly', monthlyValue: '30% training time' },
      { name: 'Slow Day Activator', description: 'Tuesday dead? One-tap flash sale to your customer list', monthlyValue: 'Dead hours → Revenue' },
      { name: 'Regulars Recognition', description: 'WiFi/POS-based regular customer identification (no face rec)', monthlyValue: 'Increased loyalty' },
      { name: 'AI Phone Answering', description: 'Capture after-hours catering inquiries', monthlyValue: 'Missed revenue captured' },
    ],
    integrations: ['Square POS', 'Toast', 'Clover', 'Google Business', 'Yelp', 'WhatsApp', 'Telegram'],
    hardware: ['Mac mini (24GB, silent operation)', '2 smart plugs (equipment monitoring)', '2 temperature sensors (freezer/cooler)'],
    roi: {
      paybackPeriod: '1-3 months',
      monthlySavingsLow: 570,
      monthlySavingsHigh: 1700,
    },
    caseStudy: {
      quote: "Nous caught a duplicate invoice that would have cost us $800. Paid for itself in week one.",
      author: "Maria",
      role: "Café Owner, Brooklyn",
      result: "$800 saved in first week",
    },
  },
  {
    id: 'cpa',
    name: 'Nous CPA',
    slug: 'cpa',
    tagline: 'Clients Text Receipts. You Wake Up to Categorized Books.',
    heroTitle: 'Do Advisory Work, Not Data Entry.',
    painPoints: [
      'Peak season is brutal — can\'t process fast enough',
      'Clients send documents everywhere — text, email, WhatsApp',
      'Manual data entry is killing your margins',
      'You\'re an accountant, not a data entry clerk',
      'Client meetings require hours of prep',
      '1099 season is chaos',
    ],
    description: 'Turn your CPA practice into an AI-augmented operation. Multi-channel document intake, AI extraction, automatic QuickBooks sync, and client-ready dashboards.',
    priceSetup: '$15,000',
    priceMonthly: '$499 - $2,499',
    features: [
      { name: 'Multi-Channel Intake', description: 'WhatsApp, Email, SMS → unified document queue', monthlyValue: 'Zero lost documents' },
      { name: 'AI Extraction', description: 'Vendor, amount, date, category from any receipt format', monthlyValue: '97% accuracy' },
      { name: 'QuickBooks Sync', description: 'Automatic expense entry with full audit trail', monthlyValue: '15+ hrs/week saved' },
      { name: 'Invoice Auditing', description: 'Flag price changes, duplicates, missing items', monthlyValue: '$200-500 caught' },
      { name: 'Client Dashboards', description: 'Pre-built views for each client before meetings', monthlyValue: '2 hrs prep → 5 min' },
      { name: 'Compliance Calendar', description: 'Tax deadlines, quarterly estimates, 1099 prep', monthlyValue: 'Never miss a deadline' },
      { name: 'Training Bot', description: '24/7 answers about your firm\'s procedures', monthlyValue: 'Staff self-serve' },
      { name: 'AR Aging Reports', description: 'Automated weekly aging analysis per client', monthlyValue: 'Collection improvement' },
    ],
    integrations: ['QuickBooks Online', 'Xero', 'Gmail', 'Outlook', 'WhatsApp Business', 'Slack', 'Box', 'Dropbox'],
    hardware: ['Mac mini (dedicated CPA configuration)', 'Secure document scanner (optional)', 'Client intake portal'],
    roi: {
      paybackPeriod: '2-4 months',
      monthlySavingsLow: 3000,
      monthlySavingsHigh: 8000,
    },
    caseStudy: {
      quote: "312 documents processed overnight. 97% accuracy. $4.27 cost. I didn't believe it until I saw my QuickBooks Monday morning.",
      author: "John",
      role: "CPA, New Jersey",
      result: "15 hours/week saved",
    },
  },
  {
    id: 'restaurant',
    name: 'Nous Restaurant',
    slug: 'restaurant',
    tagline: 'Full-Service Intelligence for Full-Service Dining',
    heroTitle: 'Run Every Shift Like Your Best Manager is There.',
    painPoints: [
      'Can\'t be everywhere at once',
      'Food costs are out of control',
      'Staff turnover is constant',
      'Reservations get lost',
      'Kitchen and FOH don\'t communicate',
      'Reviews pile up unanswered',
    ],
    description: 'Restaurant-specific AI platform combining café operations with full-service requirements: reservation management, kitchen display integration, menu engineering, and multi-location oversight.',
    priceSetup: '$2,500 - $5,000',
    priceMonthly: '$299 - $799',
    features: [
      { name: 'Reservation AI', description: 'Handle phone and web reservations, modifications, cancellations', monthlyValue: 'No missed bookings' },
      { name: 'Kitchen Display Integration', description: 'Real-time order flow, timing optimization', monthlyValue: '15% faster tickets' },
      { name: 'Menu Engineering', description: 'Analyze item profitability, suggest pricing changes', monthlyValue: '$500-2K margin' },
      { name: 'Inventory Intelligence', description: 'Predict needs, flag waste patterns, auto-order triggers', monthlyValue: '$300-800' },
      { name: 'Staff Performance', description: 'Track tips, table turns, upsells per server', monthlyValue: 'Data-driven coaching' },
      { name: 'Review Management', description: 'Multi-platform monitoring with drafted responses', monthlyValue: '$200-500' },
      { name: 'Health & Safety', description: 'Temperature logs, HACCP compliance automation', monthlyValue: 'Inspection-ready' },
      { name: 'Multi-Location Dashboard', description: 'Compare performance across all locations', monthlyValue: 'Operational visibility' },
    ],
    integrations: ['Toast', 'Square', 'Resy', 'OpenTable', 'Yelp', 'Google Business', 'UberEats', 'DoorDash', 'Grubhub'],
    hardware: ['Mac mini (restaurant configuration)', 'Temperature sensors', 'Kitchen display tablet (optional)'],
    roi: {
      paybackPeriod: '2-4 months',
      monthlySavingsLow: 1200,
      monthlySavingsHigh: 4000,
    },
  },
  {
    id: 'salon',
    name: 'Nous Salon',
    slug: 'salon',
    tagline: 'Book, Remind, Retain — Automatically',
    heroTitle: 'Your Stylists Create. AI Manages.',
    painPoints: [
      'No-shows kill your revenue',
      'Phone keeps ringing during appointments',
      'Product inventory is always off',
      'Client preferences get forgotten',
      'Staff scheduling conflicts',
      'Reviews go unanswered',
    ],
    description: 'Salon-specific AI for appointment management, client retention, and operational efficiency. Voice AI handles bookings while stylists focus on clients.',
    priceSetup: '$1,800 - $3,500',
    priceMonthly: '$199 - $499',
    features: [
      { name: 'Voice Booking AI', description: '24/7 phone answering for appointments, changes, cancellations', monthlyValue: 'Never miss a booking' },
      { name: 'No-Show Prevention', description: 'Smart reminders via text, email, voice — timed for maximum effect', monthlyValue: '$500-1500' },
      { name: 'Client Memory', description: 'AI remembers preferences, past services, product purchases', monthlyValue: 'Personalized service' },
      { name: 'Stylist Scheduling', description: 'Optimize bookings, balance workloads, handle time-off', monthlyValue: 'Zero conflicts' },
      { name: 'Product Inventory', description: 'Track usage, predict reorders, flag theft patterns', monthlyValue: '$200-500' },
      { name: 'Rebooking Engine', description: 'Automated follow-ups for due clients', monthlyValue: '20% more retention' },
      { name: 'Review Management', description: 'Prompt happy clients, intercept complaints', monthlyValue: '$300-600' },
      { name: 'Waitlist Management', description: 'Fill cancellations automatically from waitlist', monthlyValue: 'Zero dead slots' },
    ],
    integrations: ['Square Appointments', 'Vagaro', 'Fresha', 'Mindbody', 'Google Business', 'Yelp', 'Instagram'],
    hardware: ['Mac mini (salon configuration)', 'Reception tablet (optional)'],
    roi: {
      paybackPeriod: '1-3 months',
      monthlySavingsLow: 800,
      monthlySavingsHigh: 2500,
    },
  },
  {
    id: 'payroll',
    name: 'Nous Payroll',
    slug: 'payroll',
    tagline: 'Process Thousands. Review Exceptions.',
    heroTitle: 'Scale Payroll Operations Without Scaling Headcount.',
    painPoints: [
      'Manual processing can\'t scale',
      'Multi-state compliance is complex',
      'Clients send data in every format',
      'Errors are costly and embarrassing',
      'Year-end is brutal',
      'Can\'t compete on price with automation',
    ],
    description: 'For payroll service companies: AI-powered batch processing, multi-state compliance, and exception-based workflows that let you handle 10x clients.',
    priceSetup: '$20,000 - $50,000',
    priceMonthly: '$1,500 - $5,000',
    features: [
      { name: 'Batch Processing', description: 'Process hundreds of payrolls overnight, review exceptions', monthlyValue: '80% time reduction' },
      { name: 'Multi-State Compliance', description: 'Automatic tax calculations for all 50 states', monthlyValue: 'Zero compliance errors' },
      { name: 'Data Normalization', description: 'Accept any format — AI normalizes to your standard', monthlyValue: 'No manual reformatting' },
      { name: 'Exception Flagging', description: 'Only see the unusual — overtime, missing data, changes', monthlyValue: 'Focus on issues only' },
      { name: 'Client Portal', description: 'Self-service access for clients to submit and view', monthlyValue: 'Reduced support calls' },
      { name: 'Year-End Automation', description: 'W-2, 1099, ACA reporting automated', monthlyValue: '90% year-end time saved' },
      { name: 'Audit Trail', description: 'Complete documentation for compliance and disputes', monthlyValue: 'Litigation protection' },
      { name: 'Integration Hub', description: 'Connect to any legacy system or accounting platform', monthlyValue: 'No rip-and-replace' },
    ],
    integrations: ['ADP', 'Paychex', 'Gusto', 'QuickBooks Payroll', 'Sage', 'Legacy systems', 'Custom APIs'],
    hardware: ['Mac mini (enterprise configuration)', 'Secure processing environment'],
    roi: {
      paybackPeriod: '3-6 months',
      monthlySavingsLow: 5000,
      monthlySavingsHigh: 25000,
    },
  },
  {
    id: 'realty',
    name: 'Nous Realty',
    slug: 'realty',
    tagline: 'Qualify Leads While You\'re Showing Houses',
    heroTitle: 'Never Miss a Lead. Never Miss a Showing.',
    painPoints: [
      'Leads come in while you\'re with clients',
      'Follow-up falls through the cracks',
      'Scheduling showings is a nightmare',
      'Can\'t remember every client preference',
      'Transaction coordination is chaos',
      'Market analysis takes hours',
    ],
    description: 'Real estate AI for lead qualification, showing coordination, and transaction management. Voice AI handles inquiries while you close deals.',
    priceSetup: '$3,500 - $8,000',
    priceMonthly: '$399 - $999',
    features: [
      { name: 'Lead Qualification AI', description: '24/7 phone/text response, qualify budget, timeline, needs', monthlyValue: '40% more qualified leads' },
      { name: 'Showing Scheduler', description: 'AI coordinates availability, travel time, lockbox codes', monthlyValue: '5+ hrs/week saved' },
      { name: 'Client Preferences', description: 'Remember every requirement, match to new listings', monthlyValue: 'Faster matches' },
      { name: 'Transaction Coordinator', description: 'Track milestones, send reminders, flag delays', monthlyValue: 'Smoother closings' },
      { name: 'Market Analysis', description: 'Automated CMAs, trend reports, pricing recommendations', monthlyValue: '3+ hrs/listing saved' },
      { name: 'Drip Campaigns', description: 'Intelligent follow-up based on engagement signals', monthlyValue: '25% more conversions' },
      { name: 'Review Generation', description: 'Prompt happy clients at the right moment', monthlyValue: 'More referrals' },
      { name: 'MLS Integration', description: 'Auto-alert clients to new matches', monthlyValue: 'First to know' },
    ],
    integrations: ['MLS systems', 'Zillow', 'Realtor.com', 'DocuSign', 'Google Calendar', 'Follow Up Boss', 'KvCORE'],
    hardware: ['Mac mini (realty configuration)', 'Mobile integration'],
    roi: {
      paybackPeriod: '2-4 months',
      monthlySavingsLow: 2000,
      monthlySavingsHigh: 8000,
    },
  },
];

export const getIndustryBySlug = (slug: string): Industry | undefined => {
  return industries.find(i => i.slug === slug);
};
