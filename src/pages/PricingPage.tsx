import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Bot, Check, X, ArrowRight, HelpCircle, Phone, Mail,
  Zap, Shield, Clock, Users, BarChart3, MessageSquare
} from 'lucide-react'

const tiers = [
  {
    id: 'nous-assist',
    name: 'Nous Assist',
    tagline: 'For solopreneurs',
    price: '$2,800',
    priceNote: 'one-time',
    monthly: '$250/mo',
    monthlyNote: 'optional support',
    description: 'Entry-level AI appliance. Perfect for solo operations that need to scale without hiring.',
    features: [
      { name: 'Email triage & auto-response', included: true },
      { name: 'WhatsApp/SMS chatbot', included: true },
      { name: 'Document processing', included: true },
      { name: 'Local SQLite dashboard', included: true },
      { name: '5 pre-built workflows', included: true },
      { name: 'Mac Mini hardware included', included: true },
      { name: 'Voice AI agents', included: false },
      { name: 'QuickBooks integration', included: false },
      { name: 'CRM sync', included: false },
      { name: 'Custom workflows', included: false },
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    id: 'nous-connect',
    name: 'Nous Connect',
    tagline: 'For growing teams',
    price: '$7,500',
    priceNote: 'one-time',
    monthly: '$750/mo',
    monthlyNote: 'optional support',
    description: 'Full automation platform with voice AI, accounting sync, and advanced analytics.',
    features: [
      { name: 'Everything in Assist', included: true },
      { name: 'Voice AI agents (24/7)', included: true },
      { name: 'QuickBooks integration', included: true },
      { name: 'CRM sync (HubSpot)', included: true },
      { name: 'Advanced analytics', included: true },
      { name: 'Custom workflow builder', included: true },
      { name: 'n8n automation engine', included: true },
      { name: 'Priority support', included: true },
      { name: 'Multi-location', included: false },
      { name: 'White-label', included: false },
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    id: 'nous-command',
    name: 'Nous Command',
    tagline: 'For enterprises',
    price: 'Custom',
    priceNote: 'contact us',
    monthly: 'Custom',
    monthlyNote: 'SLA included',
    description: 'Enterprise AI orchestration with fleet management, legacy integration, and white-label.',
    features: [
      { name: 'Everything in Connect', included: true },
      { name: 'Legacy system integration', included: true },
      { name: 'Multi-box fleet management', included: true },
      { name: 'Grafana + Metabase analytics', included: true },
      { name: 'White-label options', included: true },
      { name: 'Dedicated success manager', included: true },
      { name: 'SLA guarantees', included: true },
      { name: 'Custom integrations', included: true },
      { name: 'On-site installation', included: true },
      { name: 'Training & onboarding', included: true },
    ],
    cta: 'Contact Sales',
    popular: false,
  },
]

const faqs = [
  {
    q: "What's included in the one-time price?",
    a: "The one-time price covers: Mac Mini hardware (24GB RAM), all software licenses, installation, configuration, initial training, and 30 days of support. After that, monthly support is optional.",
  },
  {
    q: "Do I need the monthly support?",
    a: "No, it's optional. Your Nous box will continue running without it. Monthly support includes updates, monitoring, priority support, and hands-on help with new workflows.",
  },
  {
    q: "How long does setup take?",
    a: "Nous Assist: 2 weeks. Nous Connect: 3-4 weeks. Nous Command: 4-8 weeks depending on complexity. We handle everything remotely.",
  },
  {
    q: "What if I need features from a higher tier?",
    a: "You can upgrade anytime. We'll credit your original purchase toward the higher tier and migrate your workflows.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. All processing happens locally on hardware you own. Your data never leaves your building. No cloud dependency for core operations.",
  },
  {
    q: "What's the typical ROI?",
    a: "Most clients see full payback within 2-4 months. Average time savings: 15+ hours/week. Use our ROI calculator for a personalized estimate.",
  },
]

export function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'one-time' | 'monthly'>('one-time')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

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
            <Link
              to="/contact"
              className="px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-purple rounded-lg font-medium hover:shadow-lg hover:shadow-primary-500/25 transition-all"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Simple, Transparent
            <span className="gradient-text"> Pricing</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-dark-300 mb-8"
          >
            One-time setup + optional monthly support. No surprises.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center p-1 rounded-xl bg-dark-800/50 border border-white/10"
          >
            <button
              onClick={() => setBillingCycle('one-time')}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                billingCycle === 'one-time'
                  ? 'bg-gradient-to-r from-primary-500 to-accent-purple text-white'
                  : 'text-dark-400 hover:text-white'
              }`}
            >
              One-Time Setup
            </button>
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-primary-500 to-accent-purple text-white'
                  : 'text-dark-400 hover:text-white'
              }`}
            >
              + Monthly Support
            </button>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-8 rounded-2xl border ${
                  tier.popular
                    ? 'bg-gradient-to-b from-primary-500/10 to-transparent border-primary-500/50'
                    : 'bg-dark-800/50 border-white/5'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary-500 to-accent-purple rounded-full text-xs font-bold">
                    MOST POPULAR
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold">{tier.name}</h3>
                  <p className="text-dark-400 text-sm">{tier.tagline}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-dark-400 ml-2">{tier.priceNote}</span>
                  </div>
                  {billingCycle === 'monthly' && (
                    <div className="text-sm text-dark-400 mt-1">
                      + {tier.monthly} <span className="text-dark-500">{tier.monthlyNote}</span>
                    </div>
                  )}
                </div>

                <p className="text-dark-300 text-sm mb-6">{tier.description}</p>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-start space-x-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-dark-600 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={feature.included ? 'text-dark-200' : 'text-dark-500'}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={tier.id === 'nous-command' ? '/contact' : `/products/${tier.id}`}
                  className={`w-full py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all ${
                    tier.popular
                      ? 'bg-gradient-to-r from-primary-500 to-accent-purple hover:shadow-lg hover:shadow-primary-500/25'
                      : 'bg-white/5 hover:bg-white/10 border border-white/10'
                  }`}
                >
                  <span>{tier.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-4 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Every Plan Includes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: 'Mac Mini Hardware', desc: '24GB RAM, silent operation, installs anywhere' },
              { icon: Shield, title: 'Local Processing', desc: 'Your data stays on your hardware — no cloud dependency' },
              { icon: Clock, title: '30-Day Support', desc: 'Installation, configuration, and initial training included' },
              { icon: Users, title: 'Onboarding', desc: 'We handle setup remotely — no tech skills required' },
              { icon: BarChart3, title: 'Activity Dashboard', desc: 'See exactly what your AI did while you slept' },
              { icon: MessageSquare, title: 'Pivot Chatbot', desc: 'Your AI assistant, available 24/7' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex space-x-4"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-purple/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-dark-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-dark-900/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-xl bg-dark-800/50 border border-white/5 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-medium">{faq.q}</span>
                  <HelpCircle className={`w-5 h-5 text-dark-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-dark-300 text-sm">
                    {faq.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
          <p className="text-dark-300 mb-8">
            Book a call and we'll walk you through everything — no pressure, no sales pitch.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-purple rounded-xl font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all"
            >
              <Phone className="w-5 h-5" />
              <span>Book a Call</span>
            </Link>
            <a
              href="mailto:info@denivra.com"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-semibold hover:bg-white/10 transition-all"
            >
              <Mail className="w-5 h-5" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-primary-500 to-accent-purple flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold">Denivra</span>
          </div>
          <p className="text-dark-500 text-sm">
            © {new Date().getFullYear()} Denivra Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
