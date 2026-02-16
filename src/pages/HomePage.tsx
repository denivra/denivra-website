import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight, Calculator, ChevronDown,
  Sparkles, Building2, Scissors, Briefcase, Home, FileText, Star, X,
  Cpu, Server, Headphones, Settings, TrendingUp, BarChart3, Phone,
  Mail, MessageSquare, Coffee
} from 'lucide-react'
import {
  MacMiniVisualization,
  AnimatedFlow,
  SecondBrainSection,
  ROICalculator,
  ProductCard,
  CaseStudiesSection
} from '../components/index'
import { products } from '../data/products'
import { industries } from '../data/industries'

const useCases = [
  {
    icon: Phone,
    title: 'Voice AI Agents',
    description: '24/7 phone answering that qualifies leads, books appointments, and handles FAQs — all in natural conversation.',
    stats: '60% cost reduction',
    gradient: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    icon: Mail,
    title: 'Email & Document AI',
    description: 'Processes 150+ emails overnight. Extracts receipts, invoices, and docs directly into QuickBooks.',
    stats: '15+ hrs/week saved',
    gradient: 'from-primary-500/20 to-accent-purple/20',
  },
  {
    icon: MessageSquare,
    title: 'Multi-Channel Messaging',
    description: 'WhatsApp, SMS, Telegram — unified AI responses across all channels in under 30 seconds.',
    stats: '<30s response time',
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    icon: BarChart3,
    title: 'Operations Dashboard',
    description: 'Real-time view of everything your AI did overnight. Full audit trail, zero guessing.',
    stats: '147 tasks/night avg',
    gradient: 'from-amber-500/20 to-orange-500/20',
  },
]

const howItWorks = [
  {
    step: '01',
    title: 'Ship',
    description: 'A pre-configured Mac Mini with n8n, Ollama, and your industry workflows — ready to plug in.',
    icon: Server,
  },
  {
    step: '02',
    title: 'Connect',
    description: 'We integrate with your email, accounting, CRM, and phone system. Remote setup, no tech skills needed.',
    icon: Settings,
  },
  {
    step: '03',
    title: 'AI Works',
    description: 'Nous processes emails, handles calls, extracts documents, and updates your systems — 24/7.',
    icon: Cpu,
  },
  {
    step: '04',
    title: 'Results',
    description: 'Morning dashboard shows everything your AI did overnight. Review, approve, done.',
    icon: TrendingUp,
  },
]

const flowDemos = [
  {
    title: 'Expense to QuickBooks',
    subtitle: 'AI reading receipts while you sleep',
    steps: [
      {
        icon: '📸',
        label: 'Receipt Photo',
        detail: 'Email or uploaded to your inbox',
        color: 'from-cyan-500/20 to-blue-500/20',
      },
      {
        icon: '🔍',
        label: 'AI Extract',
        detail: 'Vendor, date, amount, category detected',
        color: 'from-primary-500/20 to-cyan-500/20',
      },
      {
        icon: '🏷️',
        label: 'Categorize',
        detail: 'Matched against 90-day history',
        color: 'from-accent-purple/20 to-primary-500/20',
      },
      {
        icon: '📊',
        label: 'QuickBooks Entry',
        detail: 'Auto-created with approval pending',
        color: 'from-green-500/20 to-emerald-500/20',
      },
      {
        icon: '✅',
        label: 'Confirmation',
        detail: 'Logged to audit trail, email receipt sent',
        color: 'from-emerald-500/20 to-green-500/20',
      },
    ],
  },
  {
    title: 'Service to Payment',
    subtitle: 'Complete job-to-payment automation',
    steps: [
      {
        icon: '🎯',
        label: 'Service Complete',
        detail: 'Logged in your operations system',
        color: 'from-blue-500/20 to-cyan-500/20',
      },
      {
        icon: '📝',
        label: 'Generate Invoice',
        detail: 'With all service details and pricing',
        color: 'from-primary-500/20 to-blue-500/20',
      },
      {
        icon: '✉️',
        label: 'Email Client',
        detail: 'Professional template, payment link included',
        color: 'from-accent-purple/20 to-primary-500/20',
      },
      {
        icon: '💳',
        label: 'Stripe Payment',
        detail: 'Client pays securely, funds settle overnight',
        color: 'from-orange-500/20 to-yellow-500/20',
      },
      {
        icon: '📚',
        label: 'Record in Books',
        detail: 'Automatic accounting entry + reconciliation',
        color: 'from-green-500/20 to-emerald-500/20',
      },
    ],
  },
]

const industryIcons: Record<string, typeof Coffee> = {
  cafe: Coffee,
  cpa: FileText,
  restaurant: Building2,
  salon: Scissors,
  payroll: Briefcase,
  realty: Home,
}

export function HomePage() {
  const [showROICalculator, setShowROICalculator] = useState(false)


  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 bg-grid">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-accent-pink/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-accent-purple" />
              <span className="text-sm">Local AI · Your data never leaves your building · ~$2/mo to run</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight max-w-4xl">
              Your Business Has a<br />
              <span className="gradient-text">Night Shift Now</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-dark-300 mb-8 max-w-3xl text-balance">
              A Mac Mini in your office that reads emails, answers phones, files receipts into QuickBooks, and syncs your CRM — all while you sleep. No cloud. No monthly fees. Just results.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
              <Link to="/contact" className="btn-primary flex items-center space-x-2 text-lg px-8 py-4">
                <span>Book a Demo</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button
                className="btn-secondary flex items-center space-x-2 text-lg px-8 py-4"
                onClick={() => setShowROICalculator(true)}
              >
                <Calculator className="w-5 h-5" />
                <span>Calculate Your ROI</span>
              </button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mb-16">
              {[
                { value: 'from $2,800', label: 'One-Time Setup' },
                { value: '~$2/mo', label: 'Running Cost' },
                { value: '<30s', label: 'Response Time' },
                { value: '2-4 mo', label: 'Avg. Payback' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-dark-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Mac Mini Visualization */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="relative max-w-5xl mx-auto"
            >
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-primary-500/10">
                <MacMiniVisualization />
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-dark-500" />
        </div>
      </section>

      {/* 2. SOCIAL PROOF BAR */}
      <section className="py-12 bg-dark-900/50 border-t border-b border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
            >
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text">40+</div>
                <div className="text-dark-400 text-sm mt-2">Businesses Automated</div>
              </div>
              <div className="hidden md:block w-px h-12 bg-white/10" />
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text">6</div>
                <div className="text-dark-400 text-sm mt-2">Industries Covered</div>
              </div>
              <div className="hidden md:block w-px h-12 bg-white/10" />
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text">$3.5M+</div>
                <div className="text-dark-400 text-sm mt-2">Total Client Savings</div>
              </div>
            </motion.div>
            <p className="text-dark-400 mt-8">
              Trusted by 40+ businesses across 6 industries
            </p>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section className="py-24 bg-dark-900/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="section-title">How It <span className="gradient-text">Works</span></h2>
            <p className="section-subtitle">From unboxing to full automation in under 2 weeks</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {howItWorks.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                {i < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-full h-px bg-gradient-to-r from-primary-500/50 to-transparent" />
                )}
                <div className="relative">
                  <div className="text-5xl font-bold text-dark-800 mb-4">{step.step}</div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-purple/20 flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-dark-400 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FLAGSHIP FLOW DEMOS */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Watch <span className="gradient-text">Nous Work</span></h2>
            <p className="section-subtitle">Real automation. Real results. No cloud involved.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {flowDemos.map((demo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <AnimatedFlow
                  title={demo.title}
                  subtitle={demo.subtitle}
                  steps={demo.steps}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SECOND BRAIN SECTION */}
      <section className="py-24 bg-dark-900/50 relative overflow-hidden">
        <SecondBrainSection />
      </section>

      {/* 6. PRODUCT TIER COMPARISON */}
      <section id="products" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Choose Your <span className="gradient-text">Nous</span></h2>
            <p className="section-subtitle">Mac Mini hardware included. No cloud fees. Starts from $2,800.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <ProductCard
                key={i}
                id={product.id}
                name={product.name}
                tagline={product.tagline}
                price={product.price}
                priceLabel={product.priceLabel}
                description={product.description}
                features={product.features}
                highlighted={product.highlighted}
                tier={product.tier}
                chip={product.chip}
                ram={product.ram}
                storage={product.storage}
                workflowCount={product.workflowCount}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-dark-400 text-sm mb-4">
              Need a fully configured solution connected to your systems?
            </p>
            <Link to="/pricing" className="text-primary-400 hover:text-primary-300 font-medium">
              See deployment packages and managed services &rarr;
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 7. INDUSTRY CAROUSEL */}
      <section id="industries" className="py-24 bg-dark-900/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Pre-Configured for <span className="gradient-text">Your Industry</span></h2>
            <p className="section-subtitle">Pick your industry. We ship it ready to go.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, i) => {
              const Icon = industryIcons[industry.id] || Building2
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={`/industries/${industry.slug}`}
                    className="card group cursor-pointer hover:border-primary-500/50 block h-full"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-purple/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-primary-400" />
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-dark-400">Runs on</div>
                        <div className="text-primary-400 font-semibold text-sm">{industry.recommendedTierName}</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{industry.name}</h3>
                    <p className="text-dark-400 text-sm mb-4">{industry.tagline}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {industry.features.slice(0, 3).map((feature, j) => (
                        <span key={j} className="text-xs px-2 py-1 bg-white/5 rounded-full text-dark-300">
                          {feature.name}
                        </span>
                      ))}
                      {industry.features.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-primary-500/20 rounded-full text-primary-400">
                          +{industry.features.length - 3} more
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-white/5">
                      <div className="text-sm">
                        <span className="text-dark-400">Starts from </span>
                        <span className="text-white font-semibold">{industry.startsFrom}</span>
                      </div>
                      {industry.caseStudy && (
                        <div className="flex items-center space-x-1 text-xs text-primary-400">
                          <Star className="w-3 h-3" />
                          <span>{industry.caseStudy.result}</span>
                        </div>
                      )}
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 8. USE CASES PREVIEW GRID */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">What <span className="gradient-text">Nous</span> Does While You Sleep</h2>
            <p className="section-subtitle">Real automation powered by n8n workflows and local AI. Not another chatbot wrapper.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${useCase.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <useCase.icon className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                <p className="text-dark-400 text-sm mb-4">{useCase.description}</p>
                <div className="text-primary-400 text-sm font-semibold">{useCase.stats}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CASE STUDIES SECTION */}
      <CaseStudiesSection limit={3} />

      {/* 10. ROI CALCULATOR SECTION */}
      <section id="roi" className="py-24 bg-dark-900/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Calculate Your <span className="gradient-text">ROI</span></h2>
            <p className="section-subtitle">See exactly how much time and money Nous saves you.</p>
          </div>
          <ROICalculator />
        </div>
      </section>

      {/* 11. FINAL CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-accent-purple/10 to-accent-pink/10" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Put Your<br /><span className="gradient-text">Business on Autopilot?</span>
            </h2>
            <p className="text-xl text-dark-300 mb-8">
              Book a 15-minute demo. We'll show you exactly what Nous can automate for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary flex items-center space-x-2 text-lg px-8 py-4">
                <Headphones className="w-5 h-5" />
                <span>Book a Demo</span>
              </Link>
              <Link to="/pricing" className="btn-secondary text-lg px-8 py-4">View Pricing</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ROI Calculator Modal */}
      <AnimatePresence>
        {showROICalculator && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setShowROICalculator(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-dark-900 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">ROI Calculator</h3>
                <button onClick={() => setShowROICalculator(false)} className="p-2 hover:bg-white/10 rounded-lg">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <ROICalculator />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
