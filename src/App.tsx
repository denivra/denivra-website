import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Bot, Phone, Mail, MessageSquare, Zap, TrendingUp, Clock, 
  DollarSign, Users, BarChart3, ChevronRight, Menu, X,
  Sparkles, Shield, Globe, ArrowRight, Check, Calculator,
  Coffee, Building2, Scissors, Briefcase, Home, FileText,
  Play, Star
} from 'lucide-react'
import { ROICalculator } from './components/ROICalculator'
import { ChatWidget } from './components/ChatWidget'
import { ProductCard } from './components/ProductCard'
import { BlogSection } from './components/BlogSection'
import { CaseStudiesSection } from './components/CaseStudiesSection'
import { products } from './data/products'
import { industries } from './data/industries'

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

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showROICalculator, setShowROICalculator] = useState(false)

  return (
    <div className="min-h-screen bg-dark-950 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-purple flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Denivra</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <div className="relative group">
                <button className="text-dark-300 hover:text-white transition-colors flex items-center space-x-1">
                  <span>Products</span>
                  <ChevronRight className="w-4 h-4 rotate-90" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 bg-dark-900 border border-white/10 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all shadow-xl">
                  <a href="/products/nous-assist" className="block px-4 py-3 text-sm text-dark-300 hover:text-white hover:bg-white/5 rounded-t-xl">
                    <div className="font-medium text-white">Nous Assist</div>
                    <div className="text-xs text-dark-400">Solo operations • $2,800</div>
                  </a>
                  <a href="/products/nous-connect" className="block px-4 py-3 text-sm text-dark-300 hover:text-white hover:bg-white/5">
                    <div className="font-medium text-white">Nous Connect</div>
                    <div className="text-xs text-dark-400">Growing teams • $7,500</div>
                  </a>
                  <a href="/products/nous-command" className="block px-4 py-3 text-sm text-dark-300 hover:text-white hover:bg-white/5">
                    <div className="font-medium text-white">Nous Command</div>
                    <div className="text-xs text-dark-400">Enterprise • Custom</div>
                  </a>
                  <a href="/products/voice-ai" className="block px-4 py-3 text-sm text-dark-300 hover:text-white hover:bg-white/5 rounded-b-xl border-t border-white/5">
                    <div className="font-medium text-white">Voice AI</div>
                    <div className="text-xs text-dark-400">Standalone phone agents</div>
                  </a>
                </div>
              </div>
              
              <div className="relative group">
                <button className="text-dark-300 hover:text-white transition-colors flex items-center space-x-1">
                  <span>Industries</span>
                  <ChevronRight className="w-4 h-4 rotate-90" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-dark-900 border border-white/10 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all shadow-xl">
                  <a href="/industries/cafe" className="block px-4 py-3 text-sm text-dark-300 hover:text-white hover:bg-white/5 rounded-t-xl">Cafés & Coffee Shops</a>
                  <a href="/industries/cpa" className="block px-4 py-3 text-sm text-dark-300 hover:text-white hover:bg-white/5">CPA & Accounting</a>
                  <a href="/industries/restaurant" className="block px-4 py-3 text-sm text-dark-300 hover:text-white hover:bg-white/5">Restaurants</a>
                  <a href="/industries/salon" className="block px-4 py-3 text-sm text-dark-300 hover:text-white hover:bg-white/5">Salons & Spas</a>
                  <a href="/industries/payroll" className="block px-4 py-3 text-sm text-dark-300 hover:text-white hover:bg-white/5">Payroll Services</a>
                  <a href="/industries/realty" className="block px-4 py-3 text-sm text-dark-300 hover:text-white hover:bg-white/5 rounded-b-xl">Real Estate</a>
                </div>
              </div>
              
              <a href="/automations" className="text-dark-300 hover:text-white transition-colors">Automations</a>
              <a href="/case-studies" className="text-dark-300 hover:text-white transition-colors">Case Studies</a>
              <a href="#roi" className="text-dark-300 hover:text-white transition-colors">ROI</a>
              <a href="/contact" className="btn-primary text-sm">Book Demo</a>
            </div>

            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-dark-950/95 backdrop-blur-xl pt-20"
          >
            <div className="flex flex-col items-center space-y-6 p-8">
              <a href="/products/nous-assist" className="text-xl" onClick={() => setMobileMenuOpen(false)}>Nous Assist</a>
              <a href="/products/nous-connect" className="text-xl" onClick={() => setMobileMenuOpen(false)}>Nous Connect</a>
              <a href="/products/nous-command" className="text-xl" onClick={() => setMobileMenuOpen(false)}>Nous Command</a>
              <div className="w-full h-px bg-white/10" />
              <a href="/industries/cafe" className="text-lg text-dark-300" onClick={() => setMobileMenuOpen(false)}>Cafés</a>
              <a href="/industries/cpa" className="text-lg text-dark-300" onClick={() => setMobileMenuOpen(false)}>CPA</a>
              <a href="/industries/restaurant" className="text-lg text-dark-300" onClick={() => setMobileMenuOpen(false)}>Restaurants</a>
              <a href="/industries/salon" className="text-lg text-dark-300" onClick={() => setMobileMenuOpen(false)}>Salons</a>
              <div className="w-full h-px bg-white/10" />
              <a href="/case-studies" className="text-xl" onClick={() => setMobileMenuOpen(false)}>Case Studies</a>
              <a href="#roi" className="text-xl" onClick={() => setMobileMenuOpen(false)}>ROI</a>
              <button className="btn-primary" onClick={() => setMobileMenuOpen(false)}>Book Demo</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
              <a href="/contact" className="btn-primary flex items-center space-x-2">
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4" />
              </a>
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

      {/* Products Section */}
      <section id="products" className="py-24 bg-dark-900/50 relative">
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
                <motion.a
                  key={i}
                  href={`/industries/${industry.slug}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card group cursor-pointer hover:border-primary-500/50"
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
                </motion.a>
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
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-purple flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">The Denivra Team</div>
                  <div className="text-dark-400 text-sm">Engineers & AI Specialists</div>
                </div>
              </div>
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
            <a href="/contact" className="btn-primary flex items-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Book Demo</span>
            </a>
            <button className="btn-secondary" onClick={() => setShowROICalculator(true)}>Calculate ROI</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-purple flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Denivra</span>
              </div>
              <p className="text-dark-400 text-sm">
                Your AI mind that never sleeps.<br/>
                Local-first automation for real businesses.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-dark-400 text-sm">
                <li><a href="/products/nous-assist" className="hover:text-white transition-colors">Nous Assist — $2,800</a></li>
                <li><a href="/products/nous-connect" className="hover:text-white transition-colors">Nous Connect — $7,500</a></li>
                <li><a href="/products/nous-command" className="hover:text-white transition-colors">Nous Command — Custom</a></li>
                <li><a href="/products/voice-ai" className="hover:text-white transition-colors">Voice AI Agents</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Industries</h4>
              <ul className="space-y-2 text-dark-400 text-sm">
                <li><a href="/industries/cafe" className="hover:text-white transition-colors">Cafés & Coffee</a></li>
                <li><a href="/industries/cpa" className="hover:text-white transition-colors">CPA & Accounting</a></li>
                <li><a href="/industries/restaurant" className="hover:text-white transition-colors">Restaurants</a></li>
                <li><a href="/industries/salon" className="hover:text-white transition-colors">Salons & Spas</a></li>
                <li><a href="/industries/payroll" className="hover:text-white transition-colors">Payroll Services</a></li>
                <li><a href="/industries/realty" className="hover:text-white transition-colors">Real Estate</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-dark-400 text-sm">
                <li><a href="/case-studies" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="mailto:info@denivra.com" className="hover:text-white transition-colors">info@denivra.com</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-dark-400 text-sm">
            <p>© 2025 Denivra Inc. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Chat Widget */}
      <ChatWidget />

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
    </div>
  )
}

export default App
