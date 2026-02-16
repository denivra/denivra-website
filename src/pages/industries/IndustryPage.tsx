import { useParams, useLocation, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  ArrowLeft, Check, ArrowRight, Star, Clock, 
  Shield, Zap, Play, Headphones, Cpu
} from 'lucide-react'
import { getIndustryBySlug, Industry } from '../../data/industries'

const industryEmoji: Record<string, string> = {
  cafe: '☕',
  salon: '💇',
  cpa: '📊',
  restaurant: '🍽️',
  realty: '🏠',
  payroll: '💰',
}

function IndustryPageContent({ industry }: { industry: Industry }) {
  return (
    <>
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
              <span className="text-2xl">{industryEmoji[industry.id] || '🏢'}</span>
              <span className="text-sm">{industry.name}</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {industry.heroTitle.split('.')[0]}.<br />
              <span className="gradient-text">{industry.heroTitle.split('.').slice(1).join('.').trim()}</span>
            </h1>

            <p className="text-xl text-dark-300 mb-8 max-w-2xl">
              {industry.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/contact" className="btn-primary flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Book Demo</span>
              </Link>
              <div className="flex items-center space-x-4 text-dark-300">
                <div className="flex items-center space-x-2">
                  <Cpu className="w-5 h-5 text-primary-400" />
                  <span>Runs on <strong className="text-white">{industry.recommendedTierName}</strong></span>
                </div>
                <div className="text-dark-500">|</div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-primary-400" />
                  <span>{industry.roi.paybackPeriod} payback</span>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center space-x-2 text-sm text-dark-400">
              <span>Starts from</span>
              <span className="text-xl font-bold gradient-text">{industry.startsFrom}</span>
              <span>&bull; Custom deployment pricing on request</span>
            </div>
          </motion.div>
        </div>
      </section>

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
                  <span className="text-red-400 text-lg flex-shrink-0">✗</span>
                  <span className="text-dark-300">{pain}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="gradient-text">{industry.features.length} Capabilities</span> Pre-Configured
            </h2>
            <p className="text-dark-400">Ready to go on day one</p>
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
                    <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full whitespace-nowrap">
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

      <section className="py-20 bg-dark-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">What's Included</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-primary-400" />
                    <span>Hardware & Software</span>
                  </h3>
                  <ul className="space-y-2">
                    {industry.hardware.map((item, i) => (
                      <li key={i} className="flex items-center space-x-2 text-dark-300">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                    <li className="flex items-center space-x-2 text-dark-300">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>n8n workflow engine + Ollama local AI</span>
                    </li>
                    <li className="flex items-center space-x-2 text-dark-300">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>Qdrant vector database + Grafana dashboards</span>
                    </li>
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
                    <span className="text-dark-400">Monthly Savings (Optimistic)</span>
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
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
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

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Automate Your Business?</h2>
          <p className="text-dark-300 mb-2">
            {industry.name} runs on <strong className="text-white">{industry.recommendedTierName}</strong>, starting from <strong className="gradient-text">{industry.startsFrom}</strong>.
          </p>
          <p className="text-dark-400 mb-8">
            Custom deployment and integration pricing available on request.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary inline-flex items-center space-x-2">
              <Headphones className="w-5 h-5" />
              <span>Book a Demo</span>
            </Link>
            <Link to="/pricing" className="text-primary-400 hover:text-primary-300 font-medium">
              See all pricing options &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export function IndustryPage() {
  const { slug: paramSlug } = useParams<{ slug: string }>()
  const location = useLocation()
  
  const slug = paramSlug || location.pathname.split('/').pop()
  const industry = slug ? getIndustryBySlug(slug) : undefined

  if (!industry) {
    return (
      <div className="pt-32 text-center">
        <h1 className="text-4xl font-bold mb-4">Industry Not Found</h1>
        <Link to="/" className="btn-primary">Go Home</Link>
      </div>
    )
  }

  return <IndustryPageContent industry={industry} />
}
