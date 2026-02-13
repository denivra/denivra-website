import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Building2, Clock, CheckCircle2, TrendingUp, Quote, ChevronRight, Bot } from 'lucide-react'
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
          <Link to="/case-studies" className="text-primary-400 hover:text-primary-300">
            ← Back to Case Studies
          </Link>
        </div>
      </div>
    )
  }

  // Better content parser
  const renderContent = (content: string) => {
    const lines = content.trim().split('\n')
    const elements: JSX.Element[] = []
    let currentList: string[] = []
    let listKey = 0

    const flushList = () => {
      if (currentList.length > 0) {
        elements.push(
          <ul key={`list-${listKey++}`} className="my-6 space-y-3">
            {currentList.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-dark-200">{item}</span>
              </li>
            ))}
          </ul>
        )
        currentList = []
      }
    }

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim()
      
      if (!line) {
        flushList()
        continue
      }

      // H2 headers
      if (line.startsWith('## ')) {
        flushList()
        elements.push(
          <h2 key={`h2-${i}`} className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-white">
            {line.replace('## ', '')}
          </h2>
        )
        continue
      }

      // H3 headers
      if (line.startsWith('### ')) {
        flushList()
        elements.push(
          <h3 key={`h3-${i}`} className="text-xl font-semibold mt-8 mb-4 text-white">
            {line.replace('### ', '')}
          </h3>
        )
        continue
      }

      // List items
      if (line.startsWith('- ')) {
        currentList.push(line.replace('- ', ''))
        continue
      }

      // Regular paragraphs
      flushList()
      
      // Handle bold text
      const parts = line.split(/\*\*(.+?)\*\*/g)
      elements.push(
        <p key={`p-${i}`} className="text-dark-300 text-lg leading-relaxed my-4">
          {parts.map((part, j) => 
            j % 2 === 1 ? <strong key={j} className="text-white font-semibold">{part}</strong> : part
          )}
        </p>
      )
    }

    flushList()
    return elements
  }

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
            <div className="flex items-center space-x-2 text-sm text-dark-400 mb-8">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-dark-300">{study.client}</span>
            </div>

            {/* Meta badges */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1.5 rounded-full text-sm font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                Case Study
              </span>
              <span className="px-3 py-1.5 rounded-full text-sm bg-dark-800 text-dark-300 border border-white/10">
                {study.industry}
              </span>
              <span className="px-3 py-1.5 rounded-full text-sm bg-dark-800 text-dark-300 border border-white/10">
                {study.implementation.timeline}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white">
              {study.title}
            </h1>

            {/* Challenge Summary */}
            <p className="text-xl text-dark-300 leading-relaxed mb-8">
              {study.challenge}
            </p>

            {/* Products & Integrations */}
            <div className="flex flex-wrap gap-2">
              {study.implementation.products.map((product, i) => (
                <span key={i} className="px-4 py-2 rounded-lg bg-primary-500/20 text-primary-400 text-sm font-medium border border-primary-500/30">
                  {product}
                </span>
              ))}
              {study.implementation.integrations.map((integration, i) => (
                <span key={i} className="px-4 py-2 rounded-lg bg-dark-800 text-dark-400 text-sm border border-white/10">
                  {integration}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Grid */}
      <section className="py-16 bg-dark-900/50 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold text-dark-400 uppercase tracking-wider mb-8">Key Results</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {study.results.map((result, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-dark-800/50 border border-white/10 rounded-2xl p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-purple mb-2">
                  {result.value}
                </div>
                <div className="text-sm text-dark-400">{result.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {study.testimonial && (
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-gradient-to-br from-primary-500/10 to-accent-purple/10 border border-primary-500/20 rounded-2xl p-8 md:p-12">
              <Quote className="absolute top-6 left-6 w-10 h-10 text-primary-500/30" />
              <blockquote className="relative z-10">
                <p className="text-xl md:text-2xl text-white leading-relaxed mb-6 pl-8">
                  "{study.testimonial.quote}"
                </p>
                <footer className="flex items-center gap-4 pl-8">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-purple flex items-center justify-center text-white font-bold text-lg">
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
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="text-lg">
            {renderContent(study.fullContent)}
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-500/10 via-accent-purple/10 to-accent-pink/10 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready for Similar Results?</h2>
          <p className="text-xl text-dark-300 mb-8">
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
      {caseStudies.filter(s => s.id !== study.id).length > 0 && (
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8 text-white">More Case Studies</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {caseStudies
                .filter(s => s.id !== study.id)
                .slice(0, 2)
                .map((related) => (
                  <Link
                    key={related.id}
                    to={`/case-studies/${related.slug}`}
                    className="group bg-dark-800/50 border border-white/10 rounded-2xl p-6 hover:border-primary-500/30 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-dark-400 text-sm mb-3">
                      <Building2 className="w-4 h-4" />
                      <span>{related.industry}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-primary-400 transition-colors">
                      {related.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {related.results.slice(0, 2).map((result, j) => (
                        <span key={j} className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-dark-900 text-sm">
                          <TrendingUp className="w-3 h-3 text-green-400" />
                          <span className="font-semibold text-green-400">{result.value}</span>
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      )}

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
