import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Phone, Mail, MessageSquare, Zap, Clock, 
  BarChart3, ChevronRight,
  Sparkles, Shield, Globe, ArrowRight, Check, Calculator,
  Coffee, Building2, Scissors, Briefcase, Home, FileText,
  Play, Star, X
} from 'lucide-react'
import { ROICalculator } from '../components/ROICalculator'
import { ProductCard } from '../components/ProductCard'
import { BlogSection } from '../components/BlogSection'
import { CaseStudiesSection } from '../components/CaseStudiesSection'
import { products } from '../data/products'
import { industries } from '../data/industries'

const useCases = [
  {
    icon: Phone,
    title: 'Voice AI Agents',
    description: '24/7 phone support that never sleeps. Handle calls, qualify leads, and book appointments automatically.',
    stats: '60% cost reduction',
  },
  {
    icon: Mail,
    title: 'Email Automation',
    description: 'AI processes, categorizes, and responds to emails. Wake up to decisions, not chaos.',
    stats: '6 hours/day saved',
  },
  {
    icon: MessageSquare,
    title: 'Chat & Messaging',
    description: 'WhatsApp, SMS, Telegram — unified AI responses across all channels in <30 seconds.',
    stats: '<30s response time',
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence',
    description: 'Real-time dashboards showing what your AI did while you slept. Full audit trail.',
    stats: '147 tasks/night avg',
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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 bg-grid">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-accent-purple" />
              <span className="text-sm">Local-first AI • Your data never leaves your building</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Your AI Mind<br />
              <span className="gradient-text">That Never Sleeps</span>
            </h1>

            <p className="text-xl md:text-2xl text-dark-300 mb-8 max-w-3xl mx-auto text-balance">
              While you rest, Nous processes emails, handles calls, extracts documents, 
              and updates your systems. Wake up to a dashboard, not an inbox.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link to="/contact" className="btn-primary flex items-center space-x-2">
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button 
                className="btn-secondary flex items-center space-x-2"
                onClick={() => setShowROICalculator(true)}
              >
                <Calculator className="w-4 h-4" />
                <span>Calculate Your ROI</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { value: '147', label: 'Tasks/Night Avg' },
                { value: '99.9%', label: 'Uptime SLA' },
                { value: '<30s', label: 'Response Time' },
                { value: '~$2', label: 'Monthly Run Cost' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-dark-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 rotate-90 text-dark-500" />
        </div>
      </section>

      {/* What Nous Does */}
      <section id="capabilities" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">What <span className="gradient-text">Nous</span> Does</h2>
            <p className="section-subtitle">Real automation, real results. Not another chatbot wrapper.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-purple/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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

      {/* Dual Track Section */}
      <section className="py-24 bg-dark-900/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="section-title">Two Ways to <span className="gradient-text">Work With Us</span></h2>
            <p className="section-subtitle">From coffee shops to Fortune 500 banks — we've got you covered</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* SMB Track */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card border-primary-500/20 hover:border-primary-500/40 transition-colors"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-3xl">🚀</div>
                <h3 className="text-2xl font-bold">For Small Business</h3>
              </div>
              <p className="text-primary-400 text-lg mb-4">The Nous Suite</p>
              <p className="text-dark-300 mb-6">
                AI automation that handles the work you hate — calls, emails, invoices, 
                scheduling. Like hiring a night-shift employee who never calls in sick.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-dark-300"><Check className="w-4 h-4 text-green-400 mr-2" /> 24/7 Voice AI receptionist</li>
                <li className="flex items-center text-dark-300"><Check className="w-4 h-4 text-green-400 mr-2" /> Email & invoice automation</li>
                <li className="flex items-center text-dark-300"><Check className="w-4 h-4 text-green-400 mr-2" /> QuickBooks & CRM integration</li>
                <li className="flex items-center text-dark-300"><Check className="w-4 h-4 text-green-400 mr-2" /> Hardware included, no cloud fees</li>
              </ul>
              <div className="flex items-center justify-between">
                <div className="text-dark-400">From <span className="text-white font-bold text-xl">$2,800</span> one-time</div>
                <Link to="/pricing" className="text-primary-400 hover:text-primary-300 font-medium">See Products →</Link>
              </div>
            </motion.div>

            {/* Enterprise Track */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card border-accent-purple/20 hover:border-accent-purple/40 transition-colors"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-3xl">🏢</div>
                <h3 className="text-2xl font-bold">For Enterprise</h3>
              </div>
              <p className="text-accent-purple text-lg mb-4">Red Team Consulting</p>
              <p className="text-dark-300 mb-6">
                Banking infrastructure expertise from someone who's built it. 
                BaaS architecture, payment systems, compliance automation, legacy modernization.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-dark-300"><Check className="w-4 h-4 text-green-400 mr-2" /> 15+ years production experience</li>
                <li className="flex items-center text-dark-300"><Check className="w-4 h-4 text-green-400 mr-2" /> $3.5M+ documented savings</li>
                <li className="flex items-center text-dark-300"><Check className="w-4 h-4 text-green-400 mr-2" /> 100% regulatory compliance</li>
                <li className="flex items-center text-dark-300"><Check className="w-4 h-4 text-green-400 mr-2" /> CISM certified</li>
              </ul>
              <div className="flex items-center justify-between">
                <div className="text-dark-400">From <span className="text-white font-bold text-xl">$200/hr</span></div>
                <Link to="/solutions/enterprise" className="text-accent-purple hover:text-accent-purple/80 font-medium">Learn More →</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Choose Your <span className="gradient-text">Nous</span></h2>
            <p className="section-subtitle">One-time setup + optional monthly maintenance. Hardware included. No cloud fees.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <ProductCard 
                key={i} 
                name={product.name}
                price={product.price}
                description={product.description}
                features={product.features}
                highlighted={product.highlighted}
                tier={product.tier}
                priceMonthly={product.priceMonthly}
                link={`/products/${product.id}`}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-dark-400 text-sm">
              All packages include: Mac Mini hardware, AI training on your data, full integration with existing systems
            </p>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Built for <span className="gradient-text">Your Industry</span></h2>
            <p className="section-subtitle">Pre-configured solutions with industry-specific automations.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, i) => {
              const Icon = industryIcons[industry.id] || Building2
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={`/industries/${industry.slug}`}
                    className="card group cursor-pointer hover:border-primary-500/50 block"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-purple/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-primary-400" />
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-dark-400">Starting at</div>
                        <div className="text-primary-400 font-semibold">{industry.priceSetup.split(' ')[0]}</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
                    <p className="text-dark-400 text-sm mb-4">{industry.tagline}</p>
                    <div className="flex flex-wrap gap-2">
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
                    {industry.caseStudy && (
                      <div className="mt-4 pt-4 border-t border-white/5">
                        <div className="flex items-center space-x-1 text-sm text-primary-400">
                          <Star className="w-4 h-4" />
                          <span>{industry.caseStudy.result}</span>
                        </div>
                      </div>
                    )}
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section id="roi" className="py-24 bg-dark-900/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Calculate Your <span className="gradient-text">ROI</span></h2>
            <p className="section-subtitle">See exactly how much time and money Nous can save you.</p>
          </div>

          <ROICalculator />
        </div>
      </section>

      {/* Proof Section - What Nous Actually Does */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">The <span className="gradient-text">Receipts</span></h2>
            <p className="section-subtitle">Real outputs from real Nous deployments. Not mockups.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded bg-primary-500/20 flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-primary-400" />
                </div>
                <span className="text-sm text-dark-400">OVERNIGHT REPORT</span>
              </div>
              <div className="font-mono text-sm space-y-2">
                <div className="flex justify-between">
                  <span className="text-dark-400">Documents processed:</span>
                  <span className="text-white">47</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark-400">Emails triaged:</span>
                  <span className="text-white">128</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark-400">Auto-responses sent:</span>
                  <span className="text-white">23</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark-400">Expenses to QuickBooks:</span>
                  <span className="text-white">31</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark-400">Items flagged for review:</span>
                  <span className="text-yellow-400">3</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-white/10">
                  <span className="text-dark-400">Processing cost:</span>
                  <span className="text-green-400">$0.04</span>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded bg-green-500/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-sm text-dark-400">INVOICE AUDIT ALERT</span>
              </div>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                  <div className="text-yellow-400 text-sm font-medium mb-1">⚠️ Price Increase Detected</div>
                  <div className="text-dark-300 text-sm">
                    <strong>Supplier:</strong> Fresh Produce Co.<br/>
                    <strong>Item:</strong> Avocados (case)<br/>
                    <strong>Previous:</strong> $42.00 → <strong>Current:</strong> $48.30<br/>
                    <strong>Change:</strong> +15% vs 90-day average
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="text-xs px-3 py-1 bg-green-500/20 text-green-400 rounded-full">Approve</button>
                  <button className="text-xs px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full">Flag for Review</button>
                  <button className="text-xs px-3 py-1 bg-red-500/20 text-red-400 rounded-full">Dispute</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <CaseStudiesSection limit={3} />

      {/* Blog Section */}
      <BlogSection limit={4} />

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-title">Built by <span className="gradient-text">Builders</span></h2>
              <p className="text-dark-300 mb-6">
                Denivra was founded by technologists who got tired of enterprise bloatware. 
                We build AI that actually works — not another dashboard that requires three consultants to configure.
              </p>
              <p className="text-dark-300 mb-8">
                Our approach: <strong className="text-white">Local-first AI</strong>. Your data stays on hardware you own. 
                No cloud subscriptions bleeding your budget. No vendor lock-in. Just a Mac Mini in your office 
                running autonomous AI that works while you sleep.
              </p>
              
              <Link to="/about" className="text-primary-400 hover:text-primary-300 font-medium">
                Meet the Team →
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield, label: 'Local-First', desc: 'Your data, your building' },
                { icon: Globe, label: 'No Cloud Fees', desc: '$2/mo electricity' },
                { icon: Clock, label: '24/7 Operation', desc: 'Never sleeps' },
                { icon: Zap, label: 'Fast Setup', desc: '< 2 weeks live' },
              ].map((item, i) => (
                <div key={i} className="card text-center">
                  <item.icon className="w-8 h-8 mx-auto mb-3 text-primary-400" />
                  <div className="font-semibold text-sm">{item.label}</div>
                  <div className="text-dark-400 text-xs">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-accent-purple/10 to-accent-pink/10" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Your<br /><span className="gradient-text">Digital Workforce?</span>
          </h2>
          <p className="text-xl text-dark-300 mb-8">
            Chat with Pivot, our AI assistant, or book a demo to see Nous in action.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary flex items-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Book Demo</span>
            </Link>
            <button className="btn-secondary" onClick={() => setShowROICalculator(true)}>Calculate ROI</button>
          </div>
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
