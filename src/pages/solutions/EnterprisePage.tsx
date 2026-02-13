import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Building, Shield, Server, Lock, Users, Zap,
  CheckCircle2, ArrowRight, BarChart3, Bot, Globe,
  FileCode, Layers, Cpu, Database, GitBranch
} from 'lucide-react'
import { ChatWidget } from '../../components/ChatWidget'

const capabilities = [
  { icon: Shield, label: 'SOC 2 Type II' },
  { icon: Lock, label: 'HIPAA Compliant' },
  { icon: Globe, label: 'Global Deployment' },
  { icon: Server, label: '99.99% SLA' },
]

const features = [
  {
    icon: Layers,
    title: 'Multi-System Orchestration',
    description: 'Connect legacy systems, modern APIs, and everything in between. We handle the complexity.',
  },
  {
    icon: FileCode,
    title: 'Legacy Modernization',
    description: 'AI-powered documentation, refactoring, and migration. Move to cloud without breaking production.',
  },
  {
    icon: Database,
    title: 'Enterprise Data Integration',
    description: 'Snowflake, Databricks, SAP, Oracle — unified AI layer across your data estate.',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Grafana, Metabase, custom dashboards. Real-time visibility into AI performance.',
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'On-prem deployment options, data residency controls, audit logging, SSO/SAML.',
  },
  {
    icon: Users,
    title: 'Dedicated Success Team',
    description: 'Named CSM, priority engineering support, quarterly business reviews.',
  },
]

const caseStudies = [
  {
    company: 'Fortune 500 Bank',
    challenge: 'Modernize 2M lines of COBOL without disrupting operations',
    result: 'Full documentation in 8 weeks, migration roadmap delivered',
    metric: '90% risk reduction',
  },
  {
    company: 'Healthcare Network',
    challenge: 'HIPAA-compliant patient communication at scale',
    result: 'AI handles 80% of appointment scheduling and follow-ups',
    metric: '$2.4M/year saved',
  },
  {
    company: 'Logistics Provider',
    challenge: 'Real-time dispatch optimization across 500+ vehicles',
    result: 'AI-powered routing reduces fuel costs and delivery times',
    metric: '23% efficiency gain',
  },
]

const process = [
  {
    step: '01',
    title: 'Discovery',
    description: 'Deep dive into your systems, workflows, and objectives. We map the landscape.',
    duration: '1-2 weeks',
  },
  {
    step: '02',
    title: 'Architecture',
    description: 'Custom solution design with security, scalability, and compliance baked in.',
    duration: '2-3 weeks',
  },
  {
    step: '03',
    title: 'Implementation',
    description: 'Phased rollout with testing, training, and validation at each stage.',
    duration: '4-12 weeks',
  },
  {
    step: '04',
    title: 'Optimization',
    description: 'Continuous improvement based on real-world performance and feedback.',
    duration: 'Ongoing',
  },
]

export function EnterprisePage() {
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
            <div className="flex items-center space-x-4">
              <Link to="/contact" className="btn-primary">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
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
              <Building className="w-4 h-4 text-primary-400" />
              <span className="text-sm text-primary-400">Enterprise Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Automation for{' '}
              <span className="gradient-text">Complex Enterprises</span>
            </h1>
            
            <p className="text-xl text-dark-300 mb-8">
              Nous Command handles the hard stuff — legacy modernization, multi-system 
              orchestration, and compliance-first automation for organizations that can't afford to fail.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Talk to Sales
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link to="/case-studies" className="btn-secondary">
                View Case Studies
              </Link>
            </div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-16"
          >
            {capabilities.map((cap, i) => (
              <div key={i} className="flex items-center space-x-2 bg-dark-900/80 border border-white/5 rounded-lg px-4 py-2">
                <cap.icon className="w-5 h-5 text-primary-400" />
                <span className="text-sm font-medium">{cap.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Enterprise-Grade Capabilities
            </h2>
            <p className="text-xl text-dark-300 max-w-2xl mx-auto">
              Built for organizations where security, compliance, and reliability are non-negotiable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card group hover:border-primary-500/30"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-purple/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-dark-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-dark-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proven Enterprise Results
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card"
              >
                <div className="text-primary-400 font-medium mb-2">{study.company}</div>
                <h3 className="font-semibold mb-2">{study.challenge}</h3>
                <p className="text-dark-400 text-sm mb-4">{study.result}</p>
                <div className="inline-flex items-center space-x-2 text-green-400 text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{study.metric}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/case-studies" className="text-primary-400 hover:text-primary-300">
              View All Case Studies →
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
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
                <div className="text-primary-400 text-sm">{phase.duration}</div>
                {i < process.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 w-8 h-8 text-dark-700" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Discuss Your Requirements
          </h2>
          <p className="text-xl text-dark-300 mb-8">
            Schedule a call with our enterprise team to explore how Nous Command 
            can transform your operations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Schedule Enterprise Demo
            </Link>
            <a href="mailto:enterprise@denivra.com" className="btn-secondary">
              enterprise@denivra.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-dark-400">
          <p>© 2025 Denivra Inc. All rights reserved.</p>
        </div>
      </footer>

      <ChatWidget />
    </div>
  )
}
