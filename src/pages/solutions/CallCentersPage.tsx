import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Phone, PhoneCall, Clock, DollarSign, Users, TrendingDown, 
  CheckCircle2, ArrowRight, BarChart3, Headphones, Bot, Zap,
  Globe, Shield, MessageSquare
} from 'lucide-react'

const stats = [
  { value: '60%', label: 'Cost Reduction', icon: TrendingDown },
  { value: '24/7', label: 'Availability', icon: Clock },
  { value: '<3s', label: 'Response Time', icon: Zap },
  { value: '95%', label: 'Resolution Rate', icon: CheckCircle2 },
]

const features = [
  {
    icon: PhoneCall,
    title: 'Inbound Call Handling',
    description: 'AI answers calls instantly, qualifies callers, routes to the right department, or resolves issues directly.',
  },
  {
    icon: Phone,
    title: 'Outbound Campaigns',
    description: 'Automated follow-ups, appointment reminders, payment collections, and customer surveys at scale.',
  },
  {
    icon: MessageSquare,
    title: 'Omnichannel Support',
    description: 'Voice, SMS, WhatsApp, email — unified AI responses across all channels.',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Live dashboards showing call volumes, resolution rates, sentiment analysis, and agent performance.',
  },
  {
    icon: Globe,
    title: 'Multilingual Support',
    description: 'AI agents that speak 50+ languages with native-level fluency.',
  },
  {
    icon: Shield,
    title: 'Compliance Built-In',
    description: 'PCI-DSS, HIPAA, SOC 2 compliant. Call recording and transcription with redaction.',
  },
]

const useCases = [
  {
    title: 'Customer Support',
    description: 'Handle tier-1 support tickets, FAQs, and common issues without human intervention.',
    savings: 'Save 40+ agent hours/week',
  },
  {
    title: 'Appointment Scheduling',
    description: 'Book, reschedule, and confirm appointments automatically via voice or text.',
    savings: 'Reduce no-shows by 35%',
  },
  {
    title: 'Lead Qualification',
    description: 'Screen inbound leads, gather requirements, and route hot prospects to sales.',
    savings: '3x more qualified leads',
  },
  {
    title: 'Payment Collections',
    description: 'Automated payment reminders and collections calls with empathetic AI.',
    savings: '25% faster collections',
  },
]

export function CallCentersPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-grid relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent-purple/20 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-4 py-2 mb-6">
              <Headphones className="w-4 h-4 text-primary-400" />
              <span className="text-sm text-primary-400">Call Center Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cut Call Center Costs by{' '}
              <span className="gradient-text">60%</span>
            </h1>
            
            <p className="text-xl text-dark-300 mb-8">
              AI voice agents that handle calls 24/7, qualify leads, resolve issues, 
              and never take a sick day. Scale your support without scaling your headcount.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Schedule Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link to="/roi-calculator" className="btn-secondary">
                Calculate Your Savings
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {stats.map((stat, i) => (
              <div key={i} className="card text-center">
                <stat.icon className="w-8 h-8 text-primary-400 mx-auto mb-3" />
                <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-dark-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Enterprise-Grade Voice AI
            </h2>
            <p className="text-xl text-dark-300 max-w-2xl mx-auto">
              Not a simple IVR. Intelligent AI agents that understand context, 
              handle complex conversations, and get smarter over time.
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

      <section className="py-20 bg-dark-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Use Cases That Deliver ROI
            </h2>
            <p className="text-xl text-dark-300">
              Real applications, real results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="card"
              >
                <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                <p className="text-dark-400 mb-4">{useCase.description}</p>
                <div className="inline-flex items-center space-x-2 text-green-400 text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{useCase.savings}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Call Center?
          </h2>
          <p className="text-xl text-dark-300 mb-8">
            See how much you could save with AI-powered voice agents.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Get Custom Quote
            </Link>
            <Link to="/roi-calculator" className="btn-secondary">
              ROI Calculator
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
