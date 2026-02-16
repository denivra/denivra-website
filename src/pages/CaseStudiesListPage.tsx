import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Building2, Clock, Filter } from 'lucide-react'
import { caseStudies} from '../data/caseStudies'
import { ChatWidget } from '../components/ChatWidget'

export function CaseStudiesListPage() {
  const [activeIndustry, setActiveIndustry] = useState<string | null>(null)
  const industries = [...new Set(caseStudies.map(s => s.industry))]
  
  const filteredStudies = activeIndustry 
    ? caseStudies.filter(s => s.industry === activeIndustry)
    : caseStudies

  return (
    <div className="min-h-screen bg-dark-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2 text-dark-300 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <Link to="/contact" className="btn-primary text-sm">Get Started</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-grid relative">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Real <span className="gradient-text">Results</span>
            </h1>
            <p className="text-xl text-dark-300 max-w-2xl mx-auto">
              Not theory. Receipts. See how businesses like yours automated their way to growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 mb-4">
            <Filter className="w-4 h-4 text-dark-400" />
            <span className="text-sm text-dark-400">Filter by Industry:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveIndustry(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeIndustry === null 
                  ? 'bg-primary-500 text-white' 
                  : 'bg-dark-800 text-dark-300 hover:bg-dark-700'
              }`}
            >
              All ({caseStudies.length})
            </button>
            {industries.map(industry => {
              const count = caseStudies.filter(s => s.industry === industry).length
              return (
                <button
                  key={industry}
                  onClick={() => setActiveIndustry(industry)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeIndustry === industry 
                      ? 'bg-primary-500 text-white' 
                      : 'bg-dark-800 text-dark-300 hover:bg-dark-700'
                  }`}
                >
                  {industry} ({count})
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study, i) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={`/case-studies/${study.slug}`}
                  className="card group cursor-pointer hover:border-primary-500/30 flex flex-col h-full"
                >
                  {/* Featured Badge */}
                  {study.featured && (
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-green-500 to-emerald-500 text-white w-fit mb-4">
                      Featured
                    </div>
                  )}

                  {/* Industry Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-dark-400 text-sm">
                      <Building2 className="w-4 h-4" />
                      <span>{study.industry}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-dark-500">
                      <Clock className="w-3 h-3" />
                      <span>{study.implementation.timeline}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary-400 transition-colors line-clamp-2">
                    {study.title}
                  </h3>

                  {/* Challenge */}
                  <p className="text-dark-400 text-sm mb-4 line-clamp-3 flex-1">
                    {study.challenge}
                  </p>

                  {/* Key Results */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {study.results.slice(0, 2).map((result, j) => (
                      <div key={j} className="bg-dark-800/50 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold gradient-text">{result.value}</div>
                        <div className="text-xs text-dark-400 line-clamp-1">{result.description}</div>
                      </div>
                    ))}
                  </div>

                  {/* Products Used */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {study.implementation.products.map((product, j) => (
                      <span key={j} className="px-2 py-0.5 rounded-full bg-primary-500/10 text-primary-400 text-xs">
                        {product}
                      </span>
                    ))}
                  </div>

                  {/* Read More */}
                  <div className="pt-4 border-t border-white/5 flex items-center text-primary-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-500/10 via-accent-purple/10 to-accent-pink/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Be Our Next Success Story?</h2>
          <p className="text-dark-300 mb-8">
            Let's discuss how Nous can transform your operations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Start Your Project
            </Link>
            <Link to="/#roi" className="btn-secondary">
              Calculate Your ROI
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-dark-400 text-sm">
          © 2025 Denivra Inc. All rights reserved.
        </div>
      </footer>

      <ChatWidget />
    </div>
  )
}
