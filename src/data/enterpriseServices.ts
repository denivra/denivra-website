export interface EnterpriseService {
  id: string
  name: string
  headline: string
  subhead: string
  icon: string
  heroImage?: string
  challenge: {
    title: string
    points: string[]
  }
  approach: {
    title: string
    description: string
    diagram?: string[]
  }
  deliverables: string[]
  proofPoints: {
    metric: string
    label: string
  }[]
  caseStudy?: {
    title: string
    result: string
    link: string
  }
  technologies?: string[]
}

export const enterpriseServices: EnterpriseService[] = [
  {
    id: 'baas-architecture',
    name: 'BaaS Platform Architecture',
    headline: 'Design Banking-as-a-Service Infrastructure That Scales',
    subhead: 'Partner management, FBO structures, API governance, and multi-tenant architecture for fintech enablement.',
    icon: '🏗️',
    challenge: {
      title: 'The BaaS Challenge',
      points: [
        'Multiple fintech partners each need isolated environments and custom configurations',
        'FBO/subledger accounting must reconcile perfectly with master accounts daily',
        'API governance must balance flexibility with security and compliance',
        'Partner onboarding takes months instead of weeks',
        'Scaling partner ecosystem without scaling operational headcount'
      ]
    },
    approach: {
      title: 'Our Approach',
      description: 'We design three-layer BaaS architectures with clear separation between partner ecosystem, middleware orchestration, and core banking systems.',
      diagram: [
        'Partner Ecosystem Layer → API Gateway / Tenant Isolation / RBAC',
        'Middleware Layer (RML) → Account Lifecycle, Payment Orchestrator, Compliance Gates',
        'Core Systems Layer → Core Banking, General Ledger, Payment Networks'
      ]
    },
    deliverables: [
      'Partner Onboarding Framework — Due diligence, contracting, technical setup',
      'API Gateway Design — OAuth2/OIDC, scoping, rate limiting, audit',
      'FBO/Subledger Architecture — Account structures, reconciliation rules',
      'Partner Program Configuration — Limits, entitlements, fee structures',
      'Operational Playbooks — Settlement, exception handling, escalation'
    ],
    proofPoints: [
      { metric: '140+', label: 'Fintech Partners Integrated' },
      { metric: '<2 weeks', label: 'Partner Onboarding Time' },
      { metric: '$0', label: 'Settlement Breaks' },
      { metric: '99.99%', label: 'API Uptime' }
    ],
    technologies: ['Fiserv Premier', 'FIS IBS', 'Jack Henry', 'Alloy', 'MANTL', 'Plaid'],
    caseStudy: {
      title: 'Cross River Bank',
      result: '140+ fintech partner ecosystem design',
      link: '/case-studies/banking-transformation'
    }
  },
  {
    id: 'payment-infrastructure',
    name: 'Payment Infrastructure',
    headline: 'Multi-Rail Payment Orchestration for Modern Banking',
    subhead: 'ACH, wires, RTP/FedNow, Push-to-Card, SWIFT, and crypto rails — unified through intelligent orchestration.',
    icon: '💳',
    challenge: {
      title: 'The Payment Challenge',
      points: [
        'Each payment rail has different speeds, limits, cutoffs, and costs',
        'Intelligent routing decisions must happen in milliseconds',
        'Settlement reconciliation across rails is error-prone and manual',
        'Cutoff management failures cause costly exceptions',
        '24/7 instant payment expectations vs. legacy batch processing'
      ]
    },
    approach: {
      title: 'Our Approach',
      description: 'Intelligent rail selection with pre-execution compliance gates, automated settlement, and 3-way reconciliation across middleware, core, and external networks.',
      diagram: [
        'Payment Request → Intelligent Rail Selection',
        'Pre-Execution Gates → Balance, OFAC, Velocity, Fraud, Approval',
        'Rail-Specific Execution → ACH/Wire/RTP/P2C/SWIFT',
        'Post-Execution → Core Posting, GL Entry, Webhooks, Reconciliation'
      ]
    },
    deliverables: [
      'Rail Selection Engine — Rules-based routing with cost/speed optimization',
      'Settlement Automation — Daily settlement with automated exception handling',
      'Reconciliation Platform — 3-way matching with audit trail',
      'Cutoff Management — Automated cutoff enforcement and override workflows',
      'Network Connectivity — FedLine Direct, TCH, card network integration'
    ],
    proofPoints: [
      { metric: '$B+', label: 'Transaction Volume Processed' },
      { metric: '7', label: 'Payment Rails Supported' },
      { metric: '<10s', label: 'RTP Settlement Time' },
      { metric: '100%', label: 'Reconciliation Accuracy' }
    ],
    technologies: ['FedLine Direct', 'TCH RTP', 'FedNow', 'Visa Direct', 'Mastercard Send', 'SWIFT'],
    caseStudy: {
      title: 'Olympic Payroll',
      result: 'Multi-rail instant disbursement platform',
      link: '/case-studies/olympic-payroll'
    }
  },
  {
    id: 'onboarding-kyc',
    name: 'Digital Onboarding & KYC',
    headline: 'Digital Account Opening That Converts — And Complies',
    subhead: 'Identity verification, OFAC/PEP screening, and real-time account decisioning that reduces friction while maintaining compliance.',
    icon: '🔐',
    challenge: {
      title: 'The Onboarding Challenge',
      points: [
        'Manual KYC processes take days and kill conversion',
        'False positives from OFAC screening create operational burden',
        'Document verification requires human review for edge cases',
        'CIP requirements vary by account type and risk profile',
        'Balancing conversion rates with fraud prevention'
      ]
    },
    approach: {
      title: 'Our Approach',
      description: 'Real-time identity verification with tiered decisioning — instant approval for clean applications, efficient queuing for exceptions, and automated EDD workflows.',
      diagram: [
        'Application Intake → Document Upload, Data Validation',
        'Identity Verification → Alloy/MANTL, Document OCR, Liveness',
        'Compliance Screening → OFAC/PEP, CIP, Risk Scoring',
        'Decisioning → Auto-Approve / Manual Review / Decline',
        'Account Provisioning → Core Setup, Card Issuance, Welcome'
      ]
    },
    deliverables: [
      'OAO Platform Design — Mobile-first account opening flow',
      'Identity Verification Integration — Alloy, MANTL, Jumio, Socure',
      'Screening Automation — OFAC/PEP with false positive reduction',
      'Risk-Based Decisioning — Tiered approval workflows',
      'Exception Queue Management — SLA-based routing and escalation'
    ],
    proofPoints: [
      { metric: '<5 min', label: 'Account Opening Time' },
      { metric: '85%', label: 'Auto-Approval Rate' },
      { metric: '60%', label: 'False Positive Reduction' },
      { metric: '100%', label: 'CIP Compliance' }
    ],
    technologies: ['Alloy', 'MANTL', 'Jumio', 'Socure', 'World-Check', 'LexisNexis'],
    caseStudy: {
      title: 'Digital Banking Transformation',
      result: 'Sub-5-minute account opening',
      link: '/case-studies/banking-transformation'
    }
  },
  {
    id: 'compliance-automation',
    name: 'Compliance Automation',
    headline: 'Zero Findings. Four Consecutive Audits.',
    subhead: 'AML/BSA transaction monitoring, SAR/CTR automation, and regulatory reporting that passes examiner scrutiny.',
    icon: '⚖️',
    challenge: {
      title: 'The Compliance Challenge',
      points: [
        'Manual SAR filing takes 8+ hours per case',
        'Alert volumes exceed analyst capacity',
        'Examiners find documentation gaps during audits',
        'Rule tuning requires expensive vendor consulting',
        'Regulatory changes require constant system updates'
      ]
    },
    approach: {
      title: 'Our Approach',
      description: 'AI-enhanced transaction monitoring with automated case management, SAR/CTR pre-population, and examiner-ready documentation.',
      diagram: [
        'Transaction Monitoring → Rules + ML Anomaly Detection',
        'Alert Triage → Risk Scoring, Auto-Closure, Priority Queue',
        'Investigation → Case Management, Document Assembly',
        'Filing → SAR/CTR Pre-Population, Quality Review',
        'Audit Trail → Examiner-Ready Documentation'
      ]
    },
    deliverables: [
      'Transaction Monitoring Enhancement — Rule tuning, ML integration',
      'Case Management Platform — Workflow automation, SLA tracking',
      'SAR/CTR Automation — Pre-population, quality checks, filing',
      'Look-Back Investigation — Historical transaction analysis',
      'Examiner Documentation — Audit-ready reports and evidence'
    ],
    proofPoints: [
      { metric: '0', label: 'Audit Findings (4 consecutive)' },
      { metric: '40M+', label: 'Transactions Analyzed' },
      { metric: '$300K+', label: 'Consulting Costs Avoided' },
      { metric: '70%', label: 'Alert Volume Reduction' }
    ],
    technologies: ['Verafin', 'Actimize', 'SAS AML', 'Catchy/CSI', 'Custom ML Models'],
    caseStudy: {
      title: 'AML System Overhaul',
      result: 'Zero DFS findings, $300K saved',
      link: '/case-studies/banking-transformation'
    }
  },
  {
    id: 'middleware-integration',
    name: 'Middleware & Integration',
    headline: 'The API Layer That Makes Banking Modern',
    subhead: 'Event-driven architecture, dual-control workflows, and real-time core banking integration.',
    icon: '🔌',
    challenge: {
      title: 'The Integration Challenge',
      points: [
        'Core banking systems weren\'t designed for real-time API access',
        'Partner integrations require custom development for each connection',
        'Dual-control requirements slow down payment approvals',
        'Event choreography across systems creates race conditions',
        'Legacy batch processes can\'t meet instant payment SLAs'
      ]
    },
    approach: {
      title: 'Our Approach',
      description: 'Rapid Middleware Layer (RML) architecture that abstracts core complexity, provides unified APIs, and handles workflow orchestration.',
      diagram: [
        'External APIs → Rate Limiting, Auth, Transformation',
        'Service Mesh → Account, Payment, Compliance, Partner',
        'Event Bus → Kafka/RabbitMQ, Outbox Pattern',
        'Core Adapters → Fiserv, FIS, Jack Henry Translation',
        'Workflow Engine → Dual-Control, Approval Chains'
      ]
    },
    deliverables: [
      'Middleware Architecture Design — Microservices, event-driven patterns',
      'API Platform Implementation — REST/GraphQL, OAuth2, rate limiting',
      'Core Banking Adapters — Real-time Premier/FIS/JH integration',
      'Workflow Orchestration — Dual-control, approval chains, SLA tracking',
      'Event-Driven Integration — Kafka, webhooks, idempotency'
    ],
    proofPoints: [
      { metric: '800+', label: 'APIs Documented' },
      { metric: '<100ms', label: 'API Response Time' },
      { metric: '99.99%', label: 'Uptime SLA' },
      { metric: '50%', label: 'Development Time Reduction' }
    ],
    technologies: ['Kafka', 'Kubernetes', 'Kong', 'Apigee', 'GraphQL', 'gRPC'],
    caseStudy: {
      title: 'Rapid Middleware Layer',
      result: 'Real-time core banking APIs',
      link: '/case-studies/banking-transformation'
    }
  },
  {
    id: 'legacy-modernization',
    name: 'Legacy Modernization',
    headline: '1.6 Million Lines Analyzed. 800 APIs Documented. 6 Weeks.',
    subhead: 'AI-assisted code analysis, dependency mapping, and migration planning for aging infrastructure.',
    icon: '🔄',
    challenge: {
      title: 'The Legacy Challenge',
      points: [
        'Critical business logic buried in decades-old code',
        'Original developers have retired — tribal knowledge is gone',
        'Documentation is outdated or nonexistent',
        'Fear of breaking production prevents any changes',
        'Compliance requirements mandate understanding what systems do'
      ]
    },
    approach: {
      title: 'Our Approach',
      description: 'AI-powered code comprehension that reads, analyzes, and documents legacy systems — then creates modernization roadmaps with risk-ranked priorities.',
      diagram: [
        'Code Ingestion → Repository scanning, dependency mapping',
        'AI Analysis → Business logic extraction, API discovery',
        'Documentation → Auto-generated specs, data flow diagrams',
        'Risk Assessment → Change impact analysis, dead code identification',
        'Roadmap → Prioritized modernization phases with ROI'
      ]
    },
    deliverables: [
      'Codebase Analysis — Full repository comprehension and mapping',
      'Business Logic Documentation — What the code actually does',
      'API Discovery — Hidden integrations and data flows',
      'Dependency Mapping — System interconnections and risks',
      'Modernization Roadmap — Phased approach with priorities'
    ],
    proofPoints: [
      { metric: '1.6M', label: 'Lines of Code Analyzed' },
      { metric: '800+', label: 'APIs Documented' },
      { metric: '6 weeks', label: 'Full Analysis Timeline' },
      { metric: '30%', label: 'Dead Code Identified' }
    ],
    technologies: ['Custom AI/LLM Analysis', 'Static Analysis Tools', 'Dependency Graphing', 'Documentation Generators'],
    caseStudy: {
      title: 'Olympic Payroll Modernization',
      result: '1.6M LOC comprehension in 6 weeks',
      link: '/case-studies/olympic-payroll'
    }
  },
  {
    id: 'security-architecture',
    name: 'Security Architecture',
    headline: '95% Reduction in Unauthorized Access Attempts',
    subhead: 'SIEM implementation, AI threat detection, identity management, and security operations center design.',
    icon: '🛡️',
    challenge: {
      title: 'The Security Challenge',
      points: [
        'Alert fatigue from poorly tuned SIEM generates noise, not signal',
        'Identity sprawl across systems creates access control gaps',
        'Threat detection relies on signatures, missing novel attacks',
        'Security operations are reactive, not predictive',
        'Compliance requirements (SOC2, PCI) demand continuous evidence'
      ]
    },
    approach: {
      title: 'Our Approach',
      description: 'Defense-in-depth architecture with AI-enhanced threat detection, zero-trust identity management, and automated compliance evidence collection.',
      diagram: [
        'Perimeter → WAF, DDoS Protection, Geo-Blocking',
        'Network → Segmentation, Micro-Segmentation, East-West Inspection',
        'Identity → Zero-Trust, MFA, Privileged Access Management',
        'Detection → SIEM + Darktrace AI, Behavioral Analytics',
        'Response → SOAR Automation, Incident Playbooks'
      ]
    },
    deliverables: [
      'SIEM Implementation — Splunk deployment, 300+ asset integration',
      'AI Threat Detection — Darktrace / behavioral anomaly detection',
      'Identity Architecture — Okta/Azure AD, MFA, PAM',
      'Security Operations — SOC design, runbooks, escalation',
      'Compliance Automation — Continuous evidence collection'
    ],
    proofPoints: [
      { metric: '95%', label: 'Unauthorized Access Reduction' },
      { metric: '300+', label: 'Assets Monitored' },
      { metric: '<15min', label: 'Threat Response Time' },
      { metric: '0', label: 'Security Breaches' }
    ],
    technologies: ['Splunk', 'Darktrace', 'CrowdStrike', 'Okta', 'HashiCorp Vault', 'Palo Alto'],
    caseStudy: {
      title: 'Security Transformation',
      result: '95% reduction in unauthorized access',
      link: '/case-studies/banking-transformation'
    }
  },
  {
    id: 'infrastructure',
    name: 'Infrastructure & DR',
    headline: '99.99% Uptime with Seamless Disaster Recovery',
    subhead: 'Data center modernization, cloud migration, and business continuity planning for regulated environments.',
    icon: '☁️',
    challenge: {
      title: 'The Infrastructure Challenge',
      points: [
        'Legacy data center contracts ending with no migration plan',
        'DR testing is infrequent and results are uncertain',
        'Cloud adoption blocked by compliance and security concerns',
        'Capacity planning is reactive — outages happen during growth spikes',
        'Operational costs rising while agility decreases'
      ]
    },
    approach: {
      title: 'Our Approach',
      description: 'Hybrid cloud architecture designed for regulated industries — combining on-premises control with cloud scalability, automated DR, and continuous compliance.',
      diagram: [
        'Assessment → Current state, dependencies, compliance requirements',
        'Architecture → Hybrid cloud design, network topology, security controls',
        'Migration → Phased approach, rollback plans, testing',
        'DR/BC → Active-active or warm standby, automated failover',
        'Operations → Monitoring, alerting, capacity management'
      ]
    },
    deliverables: [
      'Infrastructure Assessment — Current state and gap analysis',
      'Cloud Migration Strategy — AWS/Azure/GCP for regulated workloads',
      'Disaster Recovery Design — RTO/RPO alignment, automated failover',
      'Network Architecture — Hybrid connectivity, zero-trust design',
      'Operational Runbooks — Incident response, capacity management'
    ],
    proofPoints: [
      { metric: '99.99%', label: 'Uptime Achieved' },
      { metric: '<4 hrs', label: 'RTO for Critical Systems' },
      { metric: '40%', label: 'Infrastructure Cost Reduction' },
      { metric: '0', label: 'Unplanned Outages' }
    ],
    technologies: ['AWS', 'Azure', 'Kubernetes', 'Terraform', 'VMware', 'Zerto'],
    caseStudy: {
      title: 'Data Center Migration',
      result: 'Zero-downtime migration to hybrid cloud',
      link: '/case-studies/banking-transformation'
    }
  }
]

export function getServiceById(id: string): EnterpriseService | undefined {
  return enterpriseServices.find(service => service.id === id)
}
