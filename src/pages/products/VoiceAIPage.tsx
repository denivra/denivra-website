import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { PhoneCall, Mic, Volume2, Globe,
  CheckCircle2, ArrowRight, Bot, Zap, Brain, Settings} from 'lucide-react'
import { ChatWidget } from '../../components/ChatWidget'

const capabilities = [
  {
    icon: Brain,
    title: 'Natural Conversation',
    description: 'Not robotic IVR. Real conversational AI that understands context, handles interruptions, and sounds human.',
  },
  {
    icon: Globe,
    title: '50+ Languages',
    description: 'Native-level fluency in major languages. Automatic language detection and switching mid-call.',
  },
  {
    icon: Zap,
    title: 'Sub-Second Response',
    description: 'No awkward pauses. AI responds in <300ms for natural conversation flow.',
  },
  {
    icon: Settings,
    title: 'Fully Customizable',
    description: 'Your voice, your personality, your scripts. Train on your specific use cases and terminology.',
  },
]

const useCases = [
  {
    title: 'Inbound Support',
    description: 'Answer customer calls 24/7, resolve common issues, and escalate complex cases to humans.',
    features: ['FAQ handling', 'Ticket creation', 'Smart routing', 'Sentiment detection'],
  },
  {
    title: 'Lead Qualification',
    description: 'Screen inbound leads, gather requirements, and book meetings with qualified prospects.',
    features: ['BANT qualification', 'Calendar booking', 'CRM updates', 'Lead scoring'],
  },
  {
    title: 'Appointment Scheduling',
    description: 'Let customers book, reschedule, or cancel appointments via voice, any time.',
    features: ['Calendar sync', 'Reminder calls', 'Confirmation texts', 'No-show follow-up'],
  },
  {
    title: 'Outbound Campaigns',
    description: 'Automated follow-ups, payment reminders, and survey calls at scale.',
    features: ['Bulk dialing', 'Campaign tracking', 'A/B testing', 'Compliance built-in'],
  },
]

const techStack = [
  { name: 'Vapi', description: 'Voice infrastructure' },
  { name: 'Twilio', description: 'Telephony network' },
  { name: 'OpenAI', description: 'Language models' },
  { name: 'ElevenLabs', description: 'Voice synthesis' },
]

const pricing = [
  {
    tier: 'Starter',
    price: '$0.12',
    unit: '/minute',
    features: ['1 voice agent', 'Basic customization', 'Email support'],
    cta: 'Get Started',
  },
  {
    tier: 'Professional',
    price: '$0.09',
    unit: '/minute',
    features: ['Unlimited agents', 'Full customization', 'Priority support', 'Analytics dashboard'],
    cta: 'Most Popular',
    highlighted: true,
  },
  {
    tier: 'Enterprise',
    price: 'Custom',
    unit: '',
    features: ['Volume discounts', 'Dedicated infrastructure', 'SLA guarantee', 'Custom integrations'],
    cta: 'Contact Sales',
  },
]

export function VoiceAIPage() {
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
                Get Demo
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 bg-grid relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent-purple/20 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-4 py-2 mb-6">
              <Mic className="w-4 h-4 text-primary-400" />
              <span className="text-sm text-primary-400">Voice AI Agents</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI That{' '}
              <span className="gradient-text">Sounds Human</span>
            </h1>
            
            <p className="text-xl text-dark-300 mb-8">
              Voice agents that handle calls like your best employee — 24/7, 
              in any language, at a fraction of the cost.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Hear a Demo Call
                <Volume2 className="w-4 h-4 ml-2" />
              </Link>
              <Link to="/#roi" className="btn-secondary">
                Calculate Savings
              </Link>
            </div>

            {/* Audio Demo Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-12 max-w-2xl mx-auto"
            >
              <div className="card bg-gradient-to-br from-primary-500/10 to-accent-purple/10 border-primary-500/20">
                <div className="flex items-center justify-center space-x-4 py-4">
                  <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center">
                    <PhoneCall className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">Sample: Lead Qualification Call</div>
                    <div className="text-dark-400 text-sm">AI qualifies a prospect and books a demo</div>
                  </div>
                  <button className="btn-primary px-4 py-2">
                    Play Demo
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-purple/20 flex items-center justify-center mx-auto mb-4">
                  <cap.icon className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{cap.title}</h3>
                <p className="text-dark-400 text-sm">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-dark-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Voice AI Can Do
            </h2>
            <p className="text-xl text-dark-300">
              Real use cases, real results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card"
              >
                <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                <p className="text-dark-400 mb-4">{useCase.description}</p>
                <div className="flex flex-wrap gap-2">
                  {useCase.features.map((feature, j) => (
                    <span key={j} className="text-xs bg-dark-800 px-2 py-1 rounded-full text-dark-300">
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powered by Best-in-Class Tech
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8">
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-white">{tech.name}</div>
                <div className="text-dark-400 text-sm">{tech.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-dark-900/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple Per-Minute Pricing
            </h2>
            <p className="text-xl text-dark-300">
              Pay only for what you use. No minimums, no commitments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`card ${plan.highlighted ? 'border-primary-500/50 relative' : ''}`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-500 to-accent-purple px-3 py-1 rounded-full text-xs font-medium">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{plan.tier}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                  <span className="text-dark-400 ml-1">{plan.unit}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center space-x-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={plan.highlighted ? 'btn-primary w-full text-center' : 'btn-secondary w-full text-center'}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Automate Your Calls?
          </h2>
          <p className="text-xl text-dark-300 mb-8">
            Get a personalized demo and see Voice AI in action for your use case.
          </p>
          <Link to="/contact" className="btn-primary">
            Schedule Demo
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
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
