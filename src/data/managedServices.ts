export interface SupportTier {
  id: string;
  name: string;
  price: string;
  priceLabel: string;
  description: string;
  features: string[];
  highlighted: boolean;
  type: 'support' | 'managed';
}

export const supportTiers: SupportTier[] = [
  {
    id: 'nous-care',
    name: 'Nous Care',
    price: '$99',
    priceLabel: '/month',
    description: 'Keep your Nous running smoothly with monitoring, patches, and basic support.',
    features: [
      'System health monitoring',
      'Security patches & updates',
      'Email support (48h response)',
      'Monthly status report',
      'Backup verification',
    ],
    highlighted: false,
    type: 'support',
  },
  {
    id: 'nous-priority',
    name: 'Nous Priority',
    price: '$249',
    priceLabel: '/month',
    description: 'Priority support with faster response times and a monthly strategy call.',
    features: [
      'Everything in Nous Care',
      'Priority support (4h response)',
      'Monthly 30-min strategy call',
      'Workflow adjustments & tuning',
      'Performance optimization',
      'Phone & video support',
    ],
    highlighted: false,
    type: 'support',
  },
  {
    id: 'nous-managed',
    name: 'Nous Managed',
    price: '$499',
    priceLabel: '/month',
    description: 'Dedicated account management with proactive monitoring and unlimited workflow tweaks.',
    features: [
      'Everything in Priority',
      'Dedicated account manager',
      'Proactive system monitoring',
      'Unlimited workflow adjustments',
      'Weekly performance reports',
      'Same-day support response',
      'Quarterly system audit',
    ],
    highlighted: true,
    type: 'managed',
  },
  {
    id: 'nous-managed-plus',
    name: 'Nous Managed+',
    price: 'Custom',
    priceLabel: 'from $999/mo',
    description: 'Full-service AI operations management. We build, optimize, and run your automations so you can focus on your business.',
    features: [
      'Everything in Managed',
      'Up to 4 new automations built/month',
      'Quarterly business reviews',
      'On-call emergency support',
      'System optimization & scaling',
      'Team training sessions',
      'Custom reporting & KPIs',
      'Integration development',
    ],
    highlighted: false,
    type: 'managed',
  },
];

export interface DeploymentPackage {
  id: string;
  name: string;
  price: string;
  priceLabel: string;
  description: string;
  includes: string[];
  setupTime: string;
  bestFor: string;
}

export const deploymentPackages: DeploymentPackage[] = [
  {
    id: 'starter',
    name: 'Starter Setup',
    price: 'from $2,800',
    priceLabel: 'one-time',
    description: 'Hardware with base configuration and starter workflows to get you automating fast.',
    includes: [
      'Nous hardware (your tier)',
      'Base software configuration',
      '5-10 starter workflows',
      'Email + calendar integration',
      '30 days of support',
    ],
    setupTime: '3-5 days',
    bestFor: 'Testing the waters with AI automation',
  },
  {
    id: 'growth',
    name: 'Growth Deployment',
    price: 'from $7,500',
    priceLabel: 'one-time',
    description: 'Full industry configuration with accounting, CRM, and voice AI integrations connected to your systems.',
    includes: [
      'Nous hardware (Pro or Enterprise)',
      'Industry-specific configuration',
      '15-25 custom workflows',
      'Accounting + CRM integration',
      'Voice AI setup',
      'Team onboarding session',
      '60 days of support',
    ],
    setupTime: '1-2 weeks',
    bestFor: 'Businesses ready to automate operations',
  },
  {
    id: 'full-deployment',
    name: 'Full Deployment',
    price: "Let's Talk",
    priceLabel: 'custom quote',
    description: 'Complete AI operations overhaul. We connect everything, build custom workflows, and integrate with your legacy systems.',
    includes: [
      'Nous hardware (Enterprise)',
      'Full custom solution design',
      'Unlimited custom workflows',
      'Legacy system integration',
      'Compliance & security setup',
      'Multi-location coordination',
      'Full team training program',
      '90 days of priority support',
    ],
    setupTime: '2-4 weeks',
    bestFor: 'Complete AI operations transformation',
  },
];

export const getSupportTierById = (id: string): SupportTier | undefined => {
  return supportTiers.find(t => t.id === id);
};
