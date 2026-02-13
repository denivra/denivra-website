import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Building2, Clock, CheckCircle2, TrendingUp, Quote, ChevronRight } from 'lucide-react'
import { caseStudies } from '../data/caseStudies'
import { ChatWidget } from '../components/ChatWidget'

export function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>()
  const study = caseStudies.find(s => s.slug === slug)

  if (!study) {
    return (
      <div className="min-h-screen bg-dark-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <Link to="/" className="text-primary-400 hover:text-primary-300">
            ← Back to Home
          </Link>
        </div>
      </div>
    )
  }

  // Parse markdown-like content to HTML
  const parseContent = (content: string) => {
    return content
      .split('\n\n')
      .map((block, i) => {
        // Headers
        if (block.startsWith('## ')) {
          return (
            <h2 key={i} className="text-2xl font-bold mt-12 mb-4 gradient-text">
              {block.replace('## ', '')}
            </h2>
          )
        }
        if (block.startsWith('### ')) {
          return (
            <h3 key={i} className="text-xl font-semibold mt-8 mb-3 text-white">
              {block.replace('### ', '')}
            </h3>
          )
        }
        // Lists
        if (block.includes('\n- ')) {
          const items = block.split('\n- ').filter(Boolean)
          return (
            <ul key={i} className="space-y-2 my-4">
              {items.map((item, j) => (
                <li key={j} className="flex items-start space-x-2 text-dark-300">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>{item.replace(/^\*\*(.+)\*\*/, '<strong>$1</strong>')}</span>
                </li>
              ))}
            </ul>
          )
        }
        // Bold text within paragraphs
        if (block.startsWith('**')) {
          const parts = block.split(/\*\*(.+?)\*\*/g)
          return (
            <p key={i} className="text-dark-300 my-4 leading-relaxed">
              {parts.map((part, j) => 
                j % 2 === 1 ? <strong key={j} className="text-white">{part}</strong> : part
              )}
            </p>
          )
        }
        // Regular paragraphs
        if (block.trim()) {
          return (
            <p key={i} className="text-dark-300 my-4 leading-relaxed">
              {block}
            </p>
          )
        }
        return null
      })
  }

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
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-sm text-dark-400 mb-6">
              <Link to="/" className="hover:text-white">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/case-studies" className="hover:text-white">Case Studies</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">{study.client}</span>
            </div>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                Case Study
              </span>
              <div className="flex items-center space-x-2 text-dark-400 text-sm">
                <Building2 className="w-4 h-4" />
                <span>{study.industry}</span>
              </div>
              <div className="flex items-center space-x-2 text-dark-400 text-sm">
                <Clock className="w-4 h-4" />
                <span>{study.implementation.timeline}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {study.title}
            </h1>

            {/* Challenge Summary */}
            <p className="text-xl text-dark-300 mb-8">
              {study.challenge}
            </p>

            {/* Products Used */}
            <div className="flex flex-wrap gap-2">
              {study.implementation.products.map((product, i) => (
                <span key={i} className="px-4 py-2 rounded-full bg-primary-500/20 text-primary-400 text-sm font-medium">
                  {product}
                </span>
              ))}
              {study.implementation.integrations.map((integration, i) => (
                <span key={i} className="px-4 py-2 rounded-full bg-dark-800 text-dark-300 text-sm">
                  {integration}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Grid */}
      <section className="py-12 bg-dark-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold text-dark-400 uppercase tracking-wider mb-6">Key Results</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {study.results.map((result, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="card text-center"
              >
                <div className="text-3xl font-bold gradient-text mb-1">{result.value}</div>
                <div className="text-sm text-dark-400">{result.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {study.testimonial && (
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative card bg-gradient-to-br from-primary-500/10 to-accent-purple/10">
              <Quote className="absolute top-4 left-4 w-12 h-12 text-primary-500/20" />
              <blockquote className="relative z-10 pl-8">
                <p className="text-xl md:text-2xl italic text-white mb-4">
                  "{study.testimonial.quote}"
                </p>
                <footer className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-purple flex items-center justify-center text-white font-bold">
                    {study.testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{study.testimonial.author}</div>
                    <div className="text-sm text-dark-400">{study.testimonial.role}</div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>
      )}

      {/* Full Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-invert max-w-none">
            {parseContent(study.fullContent)}
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-500/10 via-accent-purple/10 to-accent-pink/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Similar Results?</h2>
          <p className="text-dark-300 mb-8">
            Let's discuss how Nous can transform your operations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Get Started
            </Link>
            <Link to="/case-studies" className="btn-secondary">
              View More Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Related Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies
              .filter(s => s.id !== study.id && (s.industry === study.industry || s.tags.some(t => study.tags.includes(t))))
              .slice(0, 2)
              .map((related, i) => (
                <Link
                  key={related.id}
                  to={`/case-studies/${related.slug}`}
                  className="card group hover:border-primary-500/30"
                >
                  <div className="flex items-center space-x-2 text-dark-400 text-sm mb-3">
                    <Building2 className="w-4 h-4" />
                    <span>{related.industry}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary-400 transition-colors">
                    {related.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {related.results.slice(0, 2).map((result, j) => (
                      <span key={j} className="inline-flex items-center px-2 py-1 rounded-lg bg-dark-800 text-sm">
                        <TrendingUp className="w-3 h-3 mr-1 text-green-400" />
                        <span className="font-semibold text-green-400">{result.value}</span>
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-dark-400 text-sm">
          © 2025 Denivra Inc. All rights reserved.
        </div>
      </footer>

      <ChatWidget />
    </div>
  )
}
