import { motion } from 'framer-motion'
import { ArrowRight, Building2, TrendingUp, Clock, CheckCircle2 } from 'lucide-react'
import { caseStudies, CaseStudy } from '../data/caseStudies'

interface CaseStudyCardProps {
  study: CaseStudy
  index: number
  variant?: 'default' | 'compact' | 'featured'
}

function CaseStudyCard({ study, index, variant = 'default' }: CaseStudyCardProps) {
  if (variant === 'featured') {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15 }}
        className="card group cursor-pointer hover:border-primary-500/30 col-span-full lg:col-span-2"
      >
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Results Preview */}
          <div className="lg:w-1/3 space-y-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-green-500 to-emerald-500 text-white">
              Case Study
            </div>
            
            <h3 className="text-2xl font-bold group-hover:text-primary-400 transition-colors">
              {study.title}
            </h3>

            <div className="flex items-center space-x-2 text-dark-400 text-sm">
              <Building2 className="w-4 h-4" />
              <span>{study.industry}</span>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-2 gap-4 mb-6">
              {study.results.slice(0, 4).map((result, i) => (
                <div key={i} className="bg-dark-800/50 rounded-xl p-4">
                  <div className="text-2xl font-bold gradient-text">{result.value}</div>
                  <div className="text-sm text-dark-400">{result.description}</div>
                </div>
              ))}
            </div>

            <p className="text-dark-400 mb-4">{study.challenge}</p>

            {study.testimonial && (
              <blockquote className="border-l-2 border-primary-500 pl-4 italic text-dark-300">
                "{study.testimonial.quote}"
                <footer className="text-sm text-dark-500 mt-2">
                  — {study.testimonial.author}, {study.testimonial.role}
                </footer>
              </blockquote>
            )}

            <div className="mt-6 flex items-center text-primary-400 font-medium group-hover:translate-x-1 transition-transform">
              Read Full Case Study
              <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </div>
        </div>
      </motion.article>
    )
  }

  if (variant === 'compact') {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="card group cursor-pointer hover:border-primary-500/30"
      >
        <div className="flex items-center space-x-2 text-dark-400 text-sm mb-3">
          <Building2 className="w-4 h-4" />
          <span>{study.industry}</span>
        </div>

        <h3 className="text-lg font-bold mb-2 group-hover:text-primary-400 transition-colors line-clamp-2">
          {study.title}
        </h3>

        <div className="flex flex-wrap gap-2 mb-4">
          {study.results.slice(0, 2).map((result, i) => (
            <span key={i} className="inline-flex items-center px-2 py-1 rounded-lg bg-dark-800 text-sm">
              <TrendingUp className="w-3 h-3 mr-1 text-green-400" />
              <span className="font-semibold text-green-400">{result.value}</span>
              <span className="ml-1 text-dark-400">{result.metric}</span>
            </span>
          ))}
        </div>

        <div className="flex items-center text-primary-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
          View Details
          <ArrowRight className="w-3 h-3 ml-1" />
        </div>
      </motion.article>
    )
  }

  // Default variant
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="card group cursor-pointer hover:border-primary-500/30"
    >
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
      <p className="text-dark-400 text-sm mb-4 line-clamp-3">
        {study.challenge}
      </p>

      {/* Key Results */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {study.results.slice(0, 2).map((result, i) => (
          <div key={i} className="bg-dark-800/50 rounded-lg p-3 text-center">
            <div className="text-lg font-bold gradient-text">{result.value}</div>
            <div className="text-xs text-dark-400 line-clamp-1">{result.description}</div>
          </div>
        ))}
      </div>

      {/* Products Used */}
      <div className="flex flex-wrap gap-1 mb-4">
        {study.implementation.products.map((product, i) => (
          <span key={i} className="px-2 py-0.5 rounded-full bg-primary-500/10 text-primary-400 text-xs">
            {product}
          </span>
        ))}
      </div>

      {/* Read More */}
      <div className="pt-4 border-t border-white/5 flex items-center text-primary-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
        Read Case Study
        <ArrowRight className="w-4 h-4 ml-1" />
      </div>
    </motion.article>
  )
}

interface CaseStudiesSectionProps {
  limit?: number
  showTitle?: boolean
  showViewAll?: boolean
  variant?: 'default' | 'compact' | 'featured'
}

export function CaseStudiesSection({ 
  limit = 3, 
  showTitle = true, 
  showViewAll = true,
  variant = 'default'
}: CaseStudiesSectionProps) {
  const displayStudies = limit ? caseStudies.slice(0, limit) : caseStudies
  const featured = caseStudies.find(s => s.featured)

  return (
    <section id="case-studies" className="py-24 bg-dark-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="text-center mb-16">
            <h2 className="section-title">Real <span className="gradient-text">Results</span></h2>
            <p className="section-subtitle">
              Not theory. Receipts. See how businesses like yours automated their way to growth.
            </p>
          </div>
        )}

        {/* Featured Case Study */}
        {featured && variant !== 'compact' && (
          <div className="mb-12">
            <CaseStudyCard study={featured} index={0} variant="featured" />
          </div>
        )}

        {/* Grid of Case Studies */}
        <div className={`grid gap-6 ${variant === 'compact' ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
          {displayStudies
            .filter(s => !s.featured || variant === 'compact')
            .map((study, i) => (
              <CaseStudyCard 
                key={study.id} 
                study={study} 
                index={i} 
                variant={variant}
              />
            ))}
        </div>

        {showViewAll && caseStudies.length > limit && (
          <div className="mt-12 text-center">
            <a 
              href="/case-studies" 
              className="inline-flex items-center text-primary-400 hover:text-primary-300 font-medium transition-colors"
            >
              View All Case Studies
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        )}

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-2xl bg-gradient-to-r from-dark-800/50 to-dark-900/50 border border-white/5"
        >
          {[
            { value: '60%', label: 'Average Cost Reduction' },
            { value: '< 2wk', label: 'Typical Implementation' },
            { value: '10x', label: 'Average ROI (Year 1)' },
            { value: '99.9%', label: 'Uptime SLA' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-dark-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Industry Filter Component
export function CaseStudyFilters({ 
  activeIndustry, 
  onFilterChange 
}: { 
  activeIndustry: string | null
  onFilterChange: (industry: string | null) => void 
}) {
  const industries = [...new Set(caseStudies.map(s => s.industry))]

  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      <button
        onClick={() => onFilterChange(null)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
          activeIndustry === null 
            ? 'bg-primary-500 text-white' 
            : 'bg-dark-800 text-dark-300 hover:bg-dark-700'
        }`}
      >
        All Industries
      </button>
      {industries.map(industry => (
        <button
          key={industry}
          onClick={() => onFilterChange(industry)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            activeIndustry === industry 
              ? 'bg-primary-500 text-white' 
              : 'bg-dark-800 text-dark-300 hover:bg-dark-700'
          }`}
        >
          {industry}
        </button>
      ))}
    </div>
  )
}
