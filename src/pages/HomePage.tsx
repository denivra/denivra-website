import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Phone, Mail, MessageSquare, Zap, Clock, 
  BarChart3, ChevronDown,
  Sparkles, Shield, Globe, ArrowRight, Check, Calculator,
  Coffee, Building2, Scissors, Briefcase, Home, FileText,
  Play, Star, X, Cpu, Server, Lock,
  Headphones, Settings, TrendingUp
} from 'lucide-react'
import { ROICalculator } from '../components/ROICalculator'
import { ProductCard } from '../components/ProductCard'
import { CaseStudiesSection } from '../components/CaseStudiesSection'
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

const industryIcons: Record<string, typeof Coffee> = {
  cafe: Coffee,
  cpa: FileText,
  restaurant: Building2,
  salon: Scissors,
  payroll: Briefcase,
  realty: Home,
}

const howItWorks = [
  {
    step: '01',
    title: 'We Ship Your Nous',
    description: 'A pre-configured Mac Mini with n8n, Ollama, and your industry workflows — ready to plug in.',
    icon: Server,
  },
  {
    step: '02',
    title: 'Connect Your Tools',
    description: 'We integrate with your email, accounting, CRM, and phone system. Remote setup, no tech skills needed.',
    icon: Settings,
  },
  {
    step: '03',
    title: 'AI Goes to Work',
    description: 'Nous processes emails, handles calls, extracts documents, and updates your systems — 24/7.',
    icon: Cpu,
  },
  {
    step: '04',
    title: 'You Wake Up to Results',
    description: 'Morning dashboard shows everything your AI did overnight. Review, approve, done.',
    icon: TrendingUp,
  },
]

export function HomePage() {
  const [showROICalculator, setShowROICalculator] = useState(false)

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center pt-16 bg-grid">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-accent-pink/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-accent-purple" />
              <span className="text-sm">Powered by n8n + Ollama &bull; Local-first AI &bull; Your data never leaves your building</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Your AI Employee<br />
              <span className="gradient-text">That Never Sleeps</span>
            </h1>

            <p className="text-xl md:text-2xl text-dark-300 mb-8 max-w-3xl mx-auto text-balance">
              A Mac Mini in your office that processes emails, handles phone calls, 
              extracts documents into QuickBooks, and manages your operations — all while you sleep.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
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

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
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
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-dark-500" />
        </div>
      </section>

      <section className="py-24 relative">
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

      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">The <span className="gradient-text">Receipts</span></h2>
            <p className="section-subtitle">Real outputs from real Nous deployments. Not mockups.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded bg-primary-500/20 flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-primary-400" />
                </div>
                <span className="text-sm text-dark-400">OVERNIGHT REPORT &bull; CPA PRACTICE</span>
              </div>
              <div className="font-mono text-sm space-y-2">
                <div className="flex justify-between">
                  <span className="text-dark-400">Receipts extracted:</span>
                  <span className="text-white">312</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark-400">Pushed to QuickBooks:</span>
                  <span className="text-white">298</span>
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
                  <span className="text-dark-400">Items flagged for review:</span>
                  <span className="text-yellow-400">3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark-400">Accuracy rate:</span>
                  <span className="text-green-400">97.1%</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-white/10">
                  <span className="text-dark-400">Processing cost:</span>
                  <span className="text-green-400">$4.27</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded bg-yellow-500/20 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-yellow-400" />
                </div>
                <span className="text-sm text-dark-400">INVOICE AUDIT ALERT &bull; CAFE</span>
              </div>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                  <div className="text-yellow-400 text-sm font-medium mb-1">Price Increase Detected</div>
                  <div className="text-dark-300 text-sm">
                    <strong>Supplier:</strong> Fresh Produce Co.<br/>
                    <strong>Item:</strong> Avocados (case)<br/>
                    <strong>Previous:</strong> $42.00 &rarr; <strong>Current:</strong> $48.30<br/>
                    <strong>Change:</strong> +15% vs 90-day average
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                  <div className="text-green-400 text-sm font-medium mb-1">Duplicate Invoice Caught</div>
                  <div className="text-dark-300 text-sm">
                    <strong>Vendor:</strong> Paper Supplies Inc.<br/>
                    <strong>Amount:</strong> $347.50 &bull; Already paid on 01/15<br/>
                    <strong>Saved:</strong> $347.50
                  </div>
                </div>
                <div className="flex space-x-2">
                  <span className="text-xs px-3 py-1 bg-green-500/20 text-green-400 rounded-full">Approve</span>
                  <span className="text-xs px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full">Flag for Review</span>
                  <span className="text-xs px-3 py-1 bg-red-500/20 text-red-400 rounded-full">Dispute</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="products" className="py-24 bg-dark-900/50 relative">
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

      <section id="industries" className="py-24 relative">
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

      <section className="py-24 bg-dark-900/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="section-title">Two Ways to <span className="gradient-text">Work With Us</span></h2>
            <p className="section-subtitle">Whether you're a coffee shop or a Fortune 500 bank</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card border-primary-500/20 hover:border-primary-500/40 transition-colors"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-cyan-500/20 flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Nous AI Products</h3>
                  <p className="text-primary-400 text-sm">For small businesses</p>
                </div>
              </div>
              <p className="text-dark-300 mb-6">
                AI automation hardware that handles calls, emails, invoices, and scheduling. 
                Like hiring a night-shift employee who never calls in sick.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-dark-300 text-sm"><Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" /> Mac Mini with n8n + Ollama pre-configured</li>
                <li className="flex items-center text-dark-300 text-sm"><Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" /> Voice AI, email automation, document processing</li>
                <li className="flex items-center text-dark-300 text-sm"><Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" /> QuickBooks, CRM, and 50+ integrations</li>
                <li className="flex items-center text-dark-300 text-sm"><Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" /> Your data stays local — no cloud fees</li>
              </ul>
              <div className="flex items-center justify-between">
                <div className="text-dark-400">From <span className="text-white font-bold text-xl">$2,800</span></div>
                <Link to="/pricing" className="text-primary-400 hover:text-primary-300 font-medium">See Pricing &rarr;</Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card border-accent-purple/20 hover:border-accent-purple/40 transition-colors"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-purple/20 to-pink-500/20 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-accent-purple" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Enterprise Consulting</h3>
                  <p className="text-accent-purple text-sm">For banks & fintechs</p>
                </div>
              </div>
              <p className="text-dark-300 mb-6">
                Banking infrastructure expertise from someone who's built it. 
                BaaS architecture, payment systems, compliance automation, legacy modernization.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-dark-300 text-sm"><Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" /> 15+ years production banking systems</li>
                <li className="flex items-center text-dark-300 text-sm"><Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" /> $3.5M+ documented client savings</li>
                <li className="flex items-center text-dark-300 text-sm"><Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" /> 100% regulatory compliance track record</li>
                <li className="flex items-center text-dark-300 text-sm"><Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" /> CISM certified</li>
              </ul>
              <div className="flex items-center justify-between">
                <div className="text-dark-400">From <span className="text-white font-bold text-xl">$200/hr</span></div>
                <Link to="/solutions/enterprise" className="text-accent-purple hover:text-accent-purple/80 font-medium">Learn More &rarr;</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="roi" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Calculate Your <span className="gradient-text">ROI</span></h2>
            <p className="section-subtitle">See exactly how much time and money Nous saves you.</p>
          </div>
          <ROICalculator />
        </div>
      </section>

      <CaseStudiesSection limit={3} />

      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-title">Built by <span className="gradient-text">Builders</span></h2>
              <p className="text-dark-300 mb-6">
                Denivra was founded by a technologist who got tired of enterprise bloatware. 
                We build AI that actually works — not another dashboard that requires three consultants to configure.
              </p>
              <p className="text-dark-300 mb-8">
                Our approach: <strong className="text-white">Local-first AI</strong>. Your data stays on hardware you own. 
                No cloud subscriptions bleeding your budget. No vendor lock-in. Just a Mac Mini in your office 
                running autonomous AI that works while you sleep.
              </p>
              <Link to="/about" className="text-primary-400 hover:text-primary-300 font-medium">
                About Denivra &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Lock, label: 'Local-First', desc: 'Your data, your building' },
                { icon: Globe, label: 'No Cloud Fees', desc: '$2/mo electricity' },
                { icon: Clock, label: '24/7 Operation', desc: 'Never sleeps, never quits' },
                { icon: Zap, label: 'Fast Setup', desc: 'Under 2 weeks live' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card text-center"
                >
                  <item.icon className="w-8 h-8 mx-auto mb-3 text-primary-400" />
                  <div className="font-semibold text-sm">{item.label}</div>
                  <div className="text-dark-400 text-xs">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-accent-purple/10 to-accent-pink/10" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Hire Your<br /><span className="gradient-text">AI Employee?</span>
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
