import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Check, X, ArrowRight, HelpCircle, Phone, Mail,
  Zap, Shield, Clock, Users, BarChart3, MessageSquare,
  Headphones, Settings, Cpu, Wrench, Star
} from 'lucide-react'
import { products } from '../data/products'
import { supportTiers, deploymentPackages } from '../data/managedServices'

const faqs = [
  {
    q: "What's included in the 'from' price?",
    a: "The starting price covers: Mac Mini hardware, all software (n8n, Ollama, Qdrant, Grafana), base configuration, starter workflows, and 30 days of support. Industry-specific configurations and custom integrations are available as deployment packages.",
  },
  {
    q: "What's the difference between Support and Managed Services?",
    a: "Support (Care/Priority) keeps your system running — patches, monitoring, and help when things break. Managed Services (Managed/Managed+) actively runs your AI operations — building new automations, optimizing workflows, and acting as your dedicated AI team.",
  },
  {
    q: "How long does setup take?",
    a: "Starter Setup: 3-5 days. Growth Deployment: 1-2 weeks. Full Deployment: 2-4 weeks. We handle everything remotely — you just plug in the Mac Mini and give us access.",
  },
  {
    q: "Can I upgrade later?",
    a: "Yes. You can upgrade your hardware tier anytime — we'll credit your original purchase. You can also add managed services or switch support tiers month-to-month.",
  },
  {
    q: "Is my data secure?",
    a: "All processing happens locally on hardware you own. Your data never leaves your building. No cloud dependency for core operations. Enterprise tier includes encrypted storage and full audit logging.",
  },
  {
    q: "What's the typical ROI?",
    a: "Most clients see full payback within 2-4 months. CPA practices save 15+ hours/week. Cafes catch $200-500/month in invoice overcharges. Use our ROI calculator for a personalized estimate.",
  },
  {
    q: "Do I need technical skills?",
    a: "No. We handle all setup, configuration, and integration remotely. The n8n visual workflow builder is drag-and-drop if you want to build your own automations later.",
  },
]

export function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState<'hardware' | 'services'>('hardware')

  return (
    <div className="pt-20">
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Invest in Your
            <span className="gradient-text"> AI Employee</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-dark-300 mb-8"
          >
            One-time hardware + optional support or managed services. No cloud fees. No surprises.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center p-1 rounded-xl bg-dark-800/50 border border-white/10"
          >
            <button
              onClick={() => setActiveTab('hardware')}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'hardware'
                  ? 'bg-gradient-to-r from-primary-500 to-accent-purple text-white'
                  : 'text-dark-400 hover:text-white'
              }`}
            >
              Hardware + Setup
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'services'
                  ? 'bg-gradient-to-r from-primary-500 to-accent-purple text-white'
                  : 'text-dark-400 hover:text-white'
              }`}
            >
              Support & Managed Services
            </button>
          </motion.div>
        </div>
      </section>

      {activeTab === 'hardware' && (
        <>
          <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {products.map((product, i) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`relative p-8 rounded-2xl border ${
                      product.highlighted
                        ? 'bg-gradient-to-b from-primary-500/10 to-transparent border-primary-500/50'
                        : 'bg-dark-800/50 border-white/5'
                    }`}
                  >
                    {product.highlighted && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary-500 to-accent-purple rounded-full text-xs font-bold uppercase tracking-wider">
                        Most Popular
                      </div>
                    )}

                    <div className="mb-6">
                      <h3 className="text-xl font-bold">{product.name}</h3>
                      <p className="text-dark-400 text-sm">{product.tagline}</p>
                    </div>

                    <div className="mb-2">
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold gradient-text">{product.price}</span>
                      </div>
                      <div className="text-sm text-dark-400 mt-1">{product.priceLabel}</div>
                    </div>

                    <div className="flex items-center gap-3 mb-6 text-xs text-dark-400 py-3 border-y border-white/5">
                      <span>{product.chip}</span>
                      <span>&bull;</span>
                      <span>{product.ram}</span>
                      <span>&bull;</span>
                      <span>{product.storage}</span>
                    </div>

                    <p className="text-dark-300 text-sm mb-6">{product.description}</p>

                    <ul className="space-y-3 mb-8">
                      {product.features.map((feature, j) => (
                        <li key={j} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-dark-200 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to={`/products/${product.id}`}
                      className={`w-full py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all ${
                        product.highlighted
                          ? 'bg-gradient-to-r from-primary-500 to-accent-purple hover:shadow-lg hover:shadow-primary-500/25'
                          : 'bg-white/5 hover:bg-white/10 border border-white/10'
                      }`}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 px-4 border-t border-white/5">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Deployment <span className="gradient-text">Packages</span></h2>
                <p className="text-dark-300">From starter setup to complete AI operations overhaul</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {deploymentPackages.map((pkg, i) => (
                  <motion.div
                    key={pkg.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 rounded-2xl bg-dark-800/50 border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <h3 className="text-lg font-bold mb-1">{pkg.name}</h3>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-2xl font-bold gradient-text">{pkg.price}</span>
                      <span className="text-dark-400 text-sm">{pkg.priceLabel}</span>
                    </div>
                    <p className="text-dark-400 text-sm mb-4">{pkg.description}</p>
                    
                    <div className="flex items-center gap-2 mb-4 text-xs text-dark-400">
                      <Clock className="w-3 h-3" />
                      <span>Setup: {pkg.setupTime}</span>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {pkg.includes.map((item, j) => (
                        <li key={j} className="flex items-start space-x-2 text-sm">
                          <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-dark-300">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="text-xs text-dark-400 pt-3 border-t border-white/5">
                      Best for: {pkg.bestFor}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {activeTab === 'services' && (
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-2 text-center">Support Plans</h3>
              <p className="text-dark-400 text-center">Keep your Nous running smoothly</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {supportTiers.filter(t => t.type === 'support').map((tier, i) => (
                <motion.div
                  key={tier.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-2xl bg-dark-800/50 border border-white/5"
                >
                  <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-bold gradient-text">{tier.price}</span>
                    <span className="text-dark-400">{tier.priceLabel}</span>
                  </div>
                  <p className="text-dark-400 text-sm mb-6">{tier.description}</p>
                  <ul className="space-y-3">
                    {tier.features.map((feature, j) => (
                      <li key={j} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-dark-200 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-2 text-center">Managed <span className="gradient-text">Services</span></h3>
              <p className="text-dark-400 text-center">We run your AI operations so you can focus on your business</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {supportTiers.filter(t => t.type === 'managed').map((tier, i) => (
                <motion.div
                  key={tier.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-8 rounded-2xl border ${
                    tier.highlighted
                      ? 'bg-gradient-to-b from-primary-500/10 to-transparent border-primary-500/50'
                      : 'bg-dark-800/50 border-white/5'
                  }`}
                >
                  {tier.highlighted && (
                    <div className="inline-block px-3 py-1 bg-gradient-to-r from-primary-500 to-accent-purple rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                      Recommended
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-bold gradient-text">{tier.price}</span>
                    <span className="text-dark-400">{tier.priceLabel}</span>
                  </div>
                  <p className="text-dark-400 text-sm mb-6">{tier.description}</p>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, j) => (
                      <li key={j} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-dark-200 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all ${
                      tier.highlighted
                        ? 'bg-gradient-to-r from-primary-500 to-accent-purple hover:shadow-lg hover:shadow-primary-500/25'
                        : 'bg-white/5 hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    <span>{tier.price === 'Custom' ? "Let's Talk" : 'Get Started'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 px-4 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Every Nous Includes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Cpu, title: 'Mac Mini Hardware', desc: 'Apple Silicon, silent operation, fits anywhere' },
              { icon: Shield, title: 'Local Processing', desc: 'Your data stays on your hardware — no cloud dependency' },
              { icon: Clock, title: '30-Day Support', desc: 'Installation, configuration, and initial training included' },
              { icon: Settings, title: 'Full Setup', desc: 'n8n, Ollama, Qdrant, Grafana — all configured and running' },
              { icon: BarChart3, title: 'Activity Dashboard', desc: 'See exactly what your AI did while you slept' },
              { icon: Wrench, title: 'Remote Onboarding', desc: 'We handle everything — no tech skills required' },
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
                  <span className="font-medium pr-4">{faq.q}</span>
                  <HelpCircle className={`w-5 h-5 text-dark-400 transition-transform flex-shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} />
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

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-dark-300 mb-8">
            Book a 15-minute call. We'll recommend the right setup for your business — no pressure.
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
    </div>
  )
}
