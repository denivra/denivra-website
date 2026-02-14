import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Bot, ArrowLeft, Phone, Mail, MessageSquare, FileText, 
  BarChart3, Calendar, Thermometer, Star, GraduationCap,
  Calculator, DollarSign, CloudSun, MapPin, Users, Server,
  Menu, X, Check, ArrowRight, Inbox, FileSearch
} from 'lucide-react'
import { automations, Automation } from '../data/automations'
import { ChatWidget } from '../components/ChatWidget'

const categoryLabels: Record<Automation['category'], string> = {
  communication: 'Communication',
  document: 'Document Processing',
  operations: 'Operations',
  finance: 'Finance',
  intelligence: 'Intelligence',
  integration: 'Integration',
}

const categoryIcons: Record<Automation['category'], typeof Phone> = {
  communication: Phone,
  document: FileText,
  operations: Calendar,
  finance: DollarSign,
  intelligence: BarChart3,
  integration: Server,
}

const iconMap: Record<string, typeof Phone> = {
  Phone, Mail, MessageSquare, Receipt: FileText, FileSearch, Inbox,
  Calendar, Thermometer, Star, GraduationCap, Calculator, DollarSign,
  CloudSun, MapPin, BarChart3, Users, Server,
}

export function AutomationsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Automation['category'] | 'all'>('all')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const categories = ['all', ...Object.keys(categoryLabels)] as const
  
  const filteredAutomations = selectedCategory === 'all' 
    ? automations 
    : automations.filter(a => a.category === selectedCategory)

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
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/#products" className="text-dark-300 hover:text-white transition-colors">Products</Link>
              <Link to="/#industries" className="text-dark-300 hover:text-white transition-colors">Industries</Link>
              <Link to="/case-studies" className="text-dark-300 hover:text-white transition-colors">Case Studies</Link>
              <Link to="/contact" className="btn-primary text-sm">Book Demo</Link>
            </div>

            <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center space-x-2 text-dark-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">{automations.length}</span> Automations
            </h1>
            <p className="text-xl text-dark-300 max-w-2xl">
              Pre-built workflows ready to deploy. Each automation works autonomously — 
              no prompts needed, no babysitting required.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-40 bg-dark-950/95 backdrop-blur-xl border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  selectedCategory === cat
                    ? 'bg-primary-500 text-white'
                    : 'bg-white/5 text-dark-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat === 'all' ? 'All' : categoryLabels[cat as Automation['category']]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Automations Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAutomations.map((automation, i) => {
              const Icon = iconMap[automation.icon] || BarChart3
              const CategoryIcon = categoryIcons[automation.category]
              
              return (
                <motion.div
                  key={automation.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="card group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-purple/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-primary-400" />
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-dark-400">
                      <CategoryIcon className="w-3 h-3" />
                      <span>{categoryLabels[automation.category]}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mb-1">{automation.name}</h3>
                  <p className="text-sm text-primary-400 mb-3">{automation.tagline}</p>
                  <p className="text-sm text-dark-400 mb-4">{automation.description}</p>

                  {/* How It Works */}
                  <div className="mb-4">
                    <div className="text-xs text-dark-500 uppercase mb-2">How It Works</div>
                    <ul className="space-y-1">
                      {automation.howItWorks.slice(0, 3).map((step, j) => (
                        <li key={j} className="text-xs text-dark-400 flex items-start space-x-2">
                          <span className="text-primary-400">{j + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Example */}
                  <div className="p-3 rounded-lg bg-green-500/5 border border-green-500/10 mb-4">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-dark-500">Before → After</span>
                      <span className="text-green-400 font-medium">{automation.example.savings}</span>
                    </div>
                    <div className="text-xs text-dark-400">
                      <span className="text-red-400/70">{automation.example.before}</span>
                      <span className="mx-2">→</span>
                      <span className="text-green-400/70">{automation.example.after}</span>
                    </div>
                  </div>

                  {/* Available In */}
                  <div className="flex items-center justify-between pt-3 border-t border-white/5">
                    <div className="flex space-x-1">
                      {automation.availableIn.map((tier) => (
                        <span
                          key={tier}
                          className={`text-xs px-2 py-0.5 rounded-full ${
                            tier === 'assist' ? 'bg-blue-500/20 text-blue-400' :
                            tier === 'connect' ? 'bg-purple-500/20 text-purple-400' :
                            'bg-pink-500/20 text-pink-400'
                          }`}
                        >
                          {tier === 'assist' ? 'Assist' : tier === 'connect' ? 'Connect' : 'Command'}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-500/10 via-accent-purple/10 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Automate?</h2>
          <p className="text-dark-400 mb-8">
            Book a demo to see these automations in action.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center space-x-2">
            <span>Book Demo</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-purple flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Denivra</span>
            </Link>
            <div className="text-dark-400 text-sm">
              © 2025 Denivra Inc. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      <ChatWidget />
    </div>
  )
}
