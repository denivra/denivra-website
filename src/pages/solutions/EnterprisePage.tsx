import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Building2, Shield, Server, Lock, Users, Zap, Award,
  CheckCircle2, ArrowRight, BarChart3, Bot, Globe,
  FileCode, Layers, Cpu, Database, GitBranch, Phone,
  CreditCard, FileSearch, Network, ShieldCheck, HardDrive,
  Menu, X, ChevronRight
} from 'lucide-react'
import { useState } from 'react'
import { ChatWidget } from '../../components/ChatWidget'

const credentials = [
  { value: '$3.5M+', label: 'Cost Savings Documented' },
  { value: '140+', label: 'Fintech Partners Integrated' },
  { value: '1.6M', label: 'Lines of Code Analyzed' },
  { value: '100%', label: 'Regulatory Compliance' },
]

const services = [
  {
    icon: Layers,
    title: 'BaaS Platform Architecture',
    slug: 'baas-architecture',
    description: 'Partner management, FBO structures, API governance, and multi-tenant architecture for fintech enablement.',
    proof: '140+ partner ecosystem design',
  },
  {
    icon: CreditCard,
    title: 'Payment Infrastructure',
    slug: 'payment-infrastructure',
    description: 'ACH, Fedwire, RTP/FedNow, Push-to-Card, SWIFT, and crypto rails — unified orchestration.',
    proof: 'Multi-rail settlement automation',
  },
  {
    icon: FileSearch,
    title: 'KYC/KYB/CIP Automation',
    slug: 'onboarding-kyc',
    description: 'Real-time identity verification, OFAC screening, fraud prevention, and digital account opening.',
    proof: '40% fraud reduction achieved',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance Automation',
    slug: 'compliance-automation',
    description: 'BSA/AML transaction monitoring, SAR/CTR filing, EDD automation, and regulatory reporting.',
    proof: 'Zero findings, 4 consecutive audits',
  },
  {
    icon: Network,
    title: 'Middleware & Integration',
    slug: 'middleware-integration',
    description: 'API orchestration, core system integration, dual-control workflows, and deterministic reconciliation.',
    proof: 'Fiserv Premier, FIS, Jack Henry',
  },
  {
    icon: FileCode,
    title: 'Legacy Modernization',
    slug: 'legacy-modernization',
    description: 'AI-assisted code analysis, documentation generation, and migration roadmaps.',
    proof: '1.6M LOC analyzed in 6 weeks',
  },
  {
    icon: Shield,
    title: 'Security Architecture',
    slug: 'security-architecture',
    description: 'SIEM, AI threat detection, identity management, and compliance frameworks.',
    proof: '95% unauthorized access reduction',
  },
  {
    icon: HardDrive,
    title: 'Infrastructure & DR',
    slug: 'infrastructure',
    description: 'Data center design, cloud migrations, disaster recovery, and operational resilience.',
    proof: '99.99% uptime, RTO <4 hours',
  },
]

const differentiators = [
  {
    them: '"You should implement API orchestration"',
    us: 'Built middleware processing $B+ in transactions',
  },
  {
    them: '"Consider BaaS architecture"',
    us: 'Designed 140+ fintech partner ecosystem from scratch',
  },
  {
    them: '"AML systems need work"',
    us: 'Created system with zero findings across 4 DFS audits',
  },
  {
    them: '"Here\'s a modernization framework"',
    us: 'Analyzed 1.6M lines of legacy code in 6 weeks',
  },
]

const process = [
  {
    step: '01',
    title: 'Discovery Assessment',
    description: 'Current state analysis, gap identification, and opportunity mapping.',
    duration: '2 weeks',
  },
  {
    step: '02',
    title: 'Roadmap & Recommendations',
    description: 'Prioritized action plan with business case and risk assessment.',
    duration: '1 week',
  },
  {
    step: '03',
    title: 'Phased Implementation',
    description: 'Hands-on execution with your team, checkpoints at each phase.',
    duration: 'Variable',
  },
  {
    step: '04',
    title: 'Knowledge Transfer',
    description: 'Documentation, training, runbooks, and ongoing support.',
    duration: 'Included',
  },
]

const industries = [
  'Banks & Credit Unions',
  'Fintechs & BaaS Providers',
  'Insurance',
  'Healthcare (HIPAA)',
  'Professional Services',
  'Government',
]

export function EnterprisePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-dark-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-purple flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Denivra</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/#products" className="text-dark-300 hover:text-white transition-colors">Products</Link>
              <Link to="/solutions/enterprise" className="text-white font-medium">Enterprise</Link>
              <Link to="/case-studies" className="text-dark-300 hover:text-white transition-colors">Case Studies</Link>
              <Link to="/contact" className="btn-primary text-sm">Request Assessment</Link>
            </div>

            <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-dark-900 border-t border-white/5">
            <div className="px-4 py-3 space-y-2">
              <Link to="/" className="block py-2 text-dark-300">Home</Link>
              <Link to="/case-studies" className="block py-2 text-dark-300">Case Studies</Link>
              <Link to="/contact" className="block py-2 btn-primary text-center">Request Assessment</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 bg-grid relative overflow-hidden">
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-4 py-2 mb-6">
              <Building2 className="w-4 h-4 text-primary-400" />
              <span className="text-sm text-primary-400">Denivra Red Team</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Enterprise AI Transformation —{' '}
              <span className="gradient-text">By Someone Who's Done It</span>
            </h1>
            
            <p className="text-xl text-dark-300 mb-4">
              15 years leading digital transformation at banks. 
              Now bringing that expertise to your organization.
            </p>
            
            <p className="text-lg text-dark-400 mb-8">
              IT Director → CIO | CISM Certified | $3.5M+ Documented Savings | 100% Audit Compliance
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary text-lg px-8 py-3">
                Request Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/case-studies" className="btn-secondary text-lg px-8 py-3">
                View Case Studies
              </Link>
            </div>
          </motion.div>

          {/* Credential Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {credentials.map((cred, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{cred.value}</div>
                <div className="text-sm text-dark-400">{cred.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Differentiator */}
      <section className="py-20 bg-dark-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Most Consultants Advise. We've <span className="gradient-text">Operated</span>.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-lg font-semibold text-dark-400 mb-4 uppercase tracking-wide">What Others Say</h3>
              <div className="space-y-4">
                {differentiators.map((d, i) => (
                  <div key={i} className="p-4 bg-dark-800/50 border border-dark-700 rounded-lg text-dark-400 italic">
                    {d.them}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary-400 mb-4 uppercase tracking-wide">What We've Done</h3>
              <div className="space-y-4">
                {differentiators.map((d, i) => (
                  <div key={i} className="p-4 bg-primary-500/10 border border-primary-500/20 rounded-lg text-white font-medium">
                    {d.us}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Enterprise Services
            </h2>
            <p className="text-xl text-dark-300 max-w-2xl mx-auto">
              Deep specialization in banking infrastructure, BaaS, and regulated technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <Link key={i} to={`/enterprise/${service.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="card group hover:border-primary-500/30 cursor-pointer h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-purple/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-dark-400 text-sm mb-3">{service.description}</p>
                  <div className="flex items-center text-xs text-primary-400 mb-2">
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    {service.proof}
                  </div>
                  <div className="text-primary-400 text-sm font-medium group-hover:underline flex items-center mt-auto">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-dark-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How We Work
            </h2>
            <p className="text-xl text-dark-300">
              Structured engagement, predictable outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-dark-800 mb-4">{phase.step}</div>
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-dark-400 text-sm mb-2">{phase.description}</p>
                <div className="text-primary-400 text-sm font-medium">{phase.duration}</div>
                {i < process.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 w-8 h-8 text-dark-700" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industries Served
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, i) => (
              <div key={i} className="px-6 py-3 bg-dark-800/50 border border-dark-700 rounded-full text-dark-300">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-500/10 via-accent-purple/10 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start with a Free Assessment
          </h2>
          <p className="text-xl text-dark-300 mb-8">
            2-week discovery. No obligation. Actionable roadmap delivered.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary text-lg px-8 py-3">
              Request Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a 
              href="https://calendly.com/bsa-denivra/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary text-lg px-8 py-3"
            >
              Schedule Directly
            </a>
          </div>
          <p className="text-dark-400 mt-6">
            Or email <a href="mailto:bsa@denivra.com" className="text-primary-400">bsa@denivra.com</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-purple flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Denivra</span>
            </Link>
            <div className="flex items-center space-x-6 text-dark-400 text-sm">
              <Link to="/privacy" className="hover:text-white">Privacy</Link>
              <Link to="/terms" className="hover:text-white">Terms</Link>
              <span>© 2025 Denivra Inc.</span>
            </div>
          </div>
        </div>
      </footer>

      <ChatWidget />
    </div>
  )
}
