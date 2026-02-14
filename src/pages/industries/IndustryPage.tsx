import { useParams, useLocation, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Bot, ArrowLeft, Check, ArrowRight, Star, DollarSign, Clock, 
  Shield, Zap, Play, ChevronRight, Menu, X
} from 'lucide-react'
import { useState } from 'react'
import { getIndustryBySlug, Industry } from '../../data/industries'
import { ChatWidget } from '../../components/ChatWidget'

function IndustryPageContent({ industry }: { industry: Industry }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-grid">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center space-x-2 text-dark-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6">
              <span className="text-2xl">☕</span>
              <span className="text-sm">{industry.name}</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {industry.heroTitle.split('.')[0]}.<br />
              <span className="gradient-text">{industry.heroTitle.split('.')[1] || ''}</span>
            </h1>

            <p className="text-xl text-dark-300 mb-8 max-w-2xl">
              {industry.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/contact" className="btn-primary flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Book Demo</span>
              </Link>
              <div className="flex items-center space-x-4 text-dark-300">
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-5 h-5 text-primary-400" />
                  <span>{industry.priceSetup}</span>
                </div>
                <div className="text-dark-500">|</div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-primary-400" />
                  <span>{industry.roi.paybackPeriod} payback</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 bg-dark-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Sound Familiar?</h2>
            <p className="text-dark-400">The problems {industry.name} solves</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industry.painPoints.map((pain, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-4 rounded-xl bg-red-500/5 border border-red-500/10"
              >
                <div className="flex items-start space-x-3">
                  <span className="text-red-400 text-lg">✗</span>
                  <span className="text-dark-300">{pain}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="gradient-text">{industry.features.length} Capabilities</span> Built-In
            </h2>
            <p className="text-dark-400">Everything you need, pre-configured</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="card"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-lg">{feature.name}</h3>
                  {feature.monthlyValue && (
                    <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full">
                      {feature.monthlyValue}
                    </span>
                  )}
                </div>
                <p className="text-dark-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-dark-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">What's Included</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-primary-400" />
                    <span>Hardware</span>
                  </h3>
                  <ul className="space-y-2">
                    {industry.hardware.map((item, i) => (
                      <li key={i} className="flex items-center space-x-2 text-dark-300">
                        <Check className="w-4 h-4 text-green-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center space-x-2">
                    <Zap className="w-5 h-5 text-primary-400" />
                    <span>Integrations</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {industry.integrations.map((item, i) => (
                      <span key={i} className="text-sm px-3 py-1 bg-white/5 rounded-full text-dark-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">ROI Estimate</h2>
              
              <div className="card">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-dark-400">Monthly Savings (Conservative)</span>
                    <span className="text-2xl font-bold text-green-400">
                      ${industry.roi.monthlySavingsLow.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-dark-400">Monthly Savings (High)</span>
                    <span className="text-2xl font-bold text-green-400">
                      ${industry.roi.monthlySavingsHigh.toLocaleString()}
                    </span>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex justify-between items-center">
                      <span className="text-dark-400">Typical Payback Period</span>
                      <span className="text-xl font-bold gradient-text">
                        {industry.roi.paybackPeriod}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {industry.caseStudy && (
                <div className="mt-6 p-6 rounded-xl bg-primary-500/10 border border-primary-500/20">
                  <div className="flex items-center space-x-1 mb-3">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <Star className="w-4 h-4 text-yellow-400" />
                    <Star className="w-4 h-4 text-yellow-400" />
                    <Star className="w-4 h-4 text-yellow-400" />
                    <Star className="w-4 h-4 text-yellow-400" />
                  </div>
                  <p className="text-dark-200 italic mb-4">"{industry.caseStudy.quote}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{industry.caseStudy.author}</div>
                      <div className="text-sm text-dark-400">{industry.caseStudy.role}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-dark-400">Result</div>
                      <div className="text-primary-400 font-semibold">{industry.caseStudy.result}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Investment</h2>
          <p className="text-dark-400 mb-8">One-time setup. No hidden fees. Your data stays yours.</p>

          <div className="card inline-block">
            <div className="flex items-center justify-center space-x-8">
              <div>
                <div className="text-sm text-dark-400 mb-1">Setup</div>
                <div className="text-3xl font-bold gradient-text">{industry.priceSetup}</div>
              </div>
              <div className="text-dark-500 text-2xl">+</div>
              <div>
                <div className="text-sm text-dark-400 mb-1">Monthly</div>
                <div className="text-3xl font-bold text-green-400">{industry.priceMonthly}</div>
                <div className="text-xs text-dark-500">(electricity only)</div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Link to="/contact" className="btn-primary inline-flex items-center space-x-2">
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-dark-400 text-sm mt-4">
              30-minute call. See exactly how {industry.name} works for your business.
            </p>
          </div>
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

export function IndustryPage() {
  const { slug: paramSlug } = useParams<{ slug: string }>()
  const location = useLocation()
  
  // Extract slug from pathname if useParams doesn't work (hardcoded routes)
  const slug = paramSlug || location.pathname.split('/').pop()
  const industry = slug ? getIndustryBySlug(slug) : undefined

  if (!industry) {
    return (
      <div className="min-h-screen bg-dark-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Industry Not Found</h1>
          <Link to="/" className="btn-primary">Go Home</Link>
        </div>
      </div>
    )
  }

  return <IndustryPageContent industry={industry} />
}
