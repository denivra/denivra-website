import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Bot, Phone, Mail, MessageSquare, Zap, TrendingUp, Clock, 
  DollarSign, Users, BarChart3, ChevronRight, Play, Menu, X,
  Sparkles, Shield, Globe, ArrowRight, Check, Calculator
} from 'lucide-react'
import { ROICalculator } from './components/ROICalculator'
import { ChatWidget } from './components/ChatWidget'
import { ProductCard } from './components/ProductCard'
import { TestimonialCard } from './components/TestimonialCard'
import { BlogSection } from './components/BlogSection'
import { CaseStudiesSection } from './components/CaseStudiesSection'

const products = [
  {
    name: 'Nous Assist',
    price: '$499',
    description: 'Entry-level AI automation for small businesses',
    features: [
      'Email triage & auto-response',
      'WhatsApp/SMS chatbot',
      'Basic CRM integration',
      'SQLite dashboard',
      '5 workflows included',
    ],
    highlighted: false,
    tier: 'starter',
  },
  {
    name: 'Nous Connect',
    price: '$2,499',
    description: 'Full-featured automation with advanced integrations',
    features: [
      'Everything in Assist',
      'Voice AI agents (Vapi)',
      'QuickBooks integration',
      'Advanced analytics dashboard',
      'Custom workflow builder',
      'Priority support',
    ],
    highlighted: true,
    tier: 'professional',
  },
  {
    name: 'Nous Command',
    price: 'Custom',
    description: 'Enterprise-grade AI orchestration',
    features: [
      'Everything in Connect',
      'Legacy system modernization',
      'Full Grafana/Metabase analytics',
      'White-label options',
      'Dedicated success manager',
      'SLA guarantees',
    ],
    highlighted: false,
    tier: 'enterprise',
  },
]

const useCases = [
  {
    icon: Phone,
    title: 'Voice AI Agents',
    description: '24/7 phone support that never sleeps. Handle calls, qualify leads, and book appointments.',
    stats: '60% cost reduction',
  },
  {
    icon: Mail,
    title: 'Email Automation',
    description: 'AI processes, categorizes, and responds to emails. Zero inbox, maximum efficiency.',
    stats: '6 hours/day saved',
  },
  {
    icon: MessageSquare,
    title: 'Chat & Messaging',
    description: 'WhatsApp, SMS, Telegram — unified AI responses across all channels.',
    stats: '<30s response time',
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence',
    description: 'Real-time dashboards showing what your AI did while you slept.',
    stats: '147 tasks/night avg',
  },
]

// Testimonials now integrated into CaseStudiesSection

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
                <div className="absolute top-full left-0 mt-2 w-48 bg-dark-900 border border-white/10 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all shadow-xl">
                  <a href="/products/voice-ai" className="block px-4 py-3 text-sm text-dark-300 hover:text-white hover:bg-white/5 rounded-t-xl">Voice AI</a>
                  <a href="#products" className="block px-4 py-3 text-sm text-dark-300 hover:text-white hover:bg-white/5">Nous Assist</a>
                  <a href="#products" className="block px-4 py-3 text-sm text-dark-300 hover:text-white hover:bg-white/5">Nous Connect</a>
                  <a href="#products" className="block px-4 py-3 text-sm text-dark-300 hover:text-white hover:bg-white/5 rounded-b-xl">Nous Command</a>
                </div>
              </div>
              <div className="relative group">
                <button className="text-dark-300 hover:text-white transition-colors flex items-center space-x-1">
                  <span>Solutions</span>
                  <ChevronRight className="w-4 h-4 rotate-90" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-dark-900 border border-white/10 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all shadow-xl">
                  <a href="/solutions/call-centers" className="block px-4 py-3 text-sm text-dark-300 hover:text-white hover:bg-white/5 rounded-t-xl">Call Centers</a>
                  <a href="/solutions/small-business" className="block px-4 py-3 text-sm text-dark-300 hover:text-white hover:bg-white/5">Small Business</a>
                  <a href="/solutions/enterprise" className="block px-4 py-3 text-sm text-dark-300 hover:text-white hover:bg-white/5 rounded-b-xl">Enterprise</a>
                </div>
              </div>
              <a href="/case-studies" className="text-dark-300 hover:text-white transition-colors">Case Studies</a>
              <a href="/blog" className="text-dark-300 hover:text-white transition-colors">Blog</a>
              <a href="#roi" className="text-dark-300 hover:text-white transition-colors">ROI</a>
              <a href="#about" className="text-dark-300 hover:text-white transition-colors">About</a>
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
              <a href="#products" className="text-2xl" onClick={() => setMobileMenuOpen(false)}>Products</a>
              <a href="#solutions" className="text-2xl" onClick={() => setMobileMenuOpen(false)}>Solutions</a>
              <a href="#case-studies" className="text-2xl" onClick={() => setMobileMenuOpen(false)}>Case Studies</a>
              <a href="#blog" className="text-2xl" onClick={() => setMobileMenuOpen(false)}>Blog</a>
              <a href="#roi" className="text-2xl" onClick={() => setMobileMenuOpen(false)}>ROI</a>
              <a href="#about" className="text-2xl" onClick={() => setMobileMenuOpen(false)}>About</a>
              <button className="btn-primary">Book Demo</button>
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
              <span className="text-sm">Powered by Claude, GPT-4 & Custom AI</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Build Your<br />
              <span className="gradient-text">Digital Workforce</span>
            </h1>

            <p className="text-xl md:text-2xl text-dark-300 mb-8 max-w-3xl mx-auto text-balance">
              AI automation that works while you sleep. Voice agents, email processing, 
              workflow automation — all handled by Nous, your tireless digital team.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <button className="btn-primary flex items-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>
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
                { value: '60%', label: 'Cost Reduction' },
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

      {/* Use Cases Section */}
      <section id="solutions" className="py-24 relative">
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
            <h2 className="section-title">Choose Your <span className="gradient-text">AI Package</span></h2>
            <p className="section-subtitle">One-time setup + optional monthly maintenance. No hidden fees.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <ProductCard key={i} {...product} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-dark-400 text-sm">
              All packages include: Discovery, AI training on your data, full integration with existing systems
            </p>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section id="roi" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Calculate Your <span className="gradient-text">ROI</span></h2>
            <p className="section-subtitle">See exactly how much time and money Nous can save you.</p>
          </div>

          <ROICalculator />
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
                Our backgrounds: 20+ years in banking tech, enterprise transformations, 
                and a shared obsession with making AI useful for real businesses.
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
                { icon: Shield, label: 'Enterprise Security', desc: 'SOC 2 compliant' },
                { icon: Globe, label: 'Global Deployment', desc: 'US, EU, Asia' },
                { icon: Clock, label: '24/7 Monitoring', desc: 'Always on' },
                { icon: Zap, label: 'Fast Integration', desc: '< 2 weeks' },
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
            Chat with Pivot, our AI assistant, to see how Nous can transform your operations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-primary flex items-center space-x-2">
              <MessageSquare className="w-5 h-5" />
              <span>Chat with Pivot</span>
            </button>
            <button className="btn-secondary">Schedule Demo</button>
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
                AI automation that works while you sleep.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-dark-400 text-sm">
                <li><a href="#products" className="hover:text-white transition-colors">Nous Assist</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Nous Connect</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Nous Command</a></li>
                <li><a href="/products/voice-ai" className="hover:text-white transition-colors">Voice AI</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-dark-400 text-sm">
                <li><a href="/solutions/call-centers" className="hover:text-white transition-colors">Call Centers</a></li>
                <li><a href="/solutions/small-business" className="hover:text-white transition-colors">Small Business</a></li>
                <li><a href="/solutions/enterprise" className="hover:text-white transition-colors">Enterprise</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-dark-400 text-sm">
                <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="/case-studies" className="hover:text-white transition-colors">Case Studies</a></li>
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
