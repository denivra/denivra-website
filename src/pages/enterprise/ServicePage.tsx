import { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  ArrowRight, Check, ChevronRight, Calendar, ArrowLeft, Phone
} from 'lucide-react'
import { getServiceById, enterpriseServices } from '../../data/enterpriseServices'

export function ServicePage() {
  const location = useLocation()
  const serviceId = location.pathname.split('/').pop() || ''
  const service = getServiceById(serviceId)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [serviceId])

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-dark-400 mb-8">The service you're looking for doesn't exist.</p>
          <Link to="/solutions/enterprise" className="btn-primary">
            Back to Enterprise
          </Link>
        </div>
      </div>
    )
  }

  const relatedServices = enterpriseServices
    .filter(s => s.id !== service.id)
    .slice(0, 3)

  return (
    <>
      <div className="pt-20 pb-4 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm text-dark-400">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link to="/solutions/enterprise" className="hover:text-white">Enterprise</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">{service.name}</span>
          </div>
        </div>
      </div>

      <section className="py-20 relative bg-grid">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="text-5xl mb-6">{service.icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {service.headline}
            </h1>
            <p className="text-xl text-dark-300 mb-8">
              {service.subhead}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary flex items-center space-x-2">
                <span>Request Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/solutions/enterprise" className="btn-secondary">
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-dark-900/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {service.proofPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text">{point.metric}</div>
                <div className="text-dark-400 text-sm">{point.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{service.challenge.title}</h2>
              <ul className="space-y-4">
                {service.challenge.points.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-red-400 text-xs">✕</span>
                    </div>
                    <span className="text-dark-300">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="card border-red-500/20">
              <div className="text-center">
                <div className="text-6xl mb-4">😰</div>
                <h3 className="text-xl font-bold mb-2">Sound Familiar?</h3>
                <p className="text-dark-400">
                  These aren't theoretical problems. We've solved each one in production environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{service.approach.title}</h2>
            <p className="text-xl text-dark-300 max-w-3xl mx-auto">{service.approach.description}</p>
          </div>

          {service.approach.diagram && (
            <div className="max-w-3xl mx-auto">
              <div className="card bg-dark-900 border-primary-500/20">
                <div className="font-mono text-sm space-y-3">
                  {service.approach.diagram.map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 }}
                      className="flex items-center"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-primary-400 font-bold">{i + 1}</span>
                      </div>
                      <span className="text-dark-200">{line}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What You Get</h2>
            <p className="text-dark-400">Concrete deliverables, not vague recommendations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.deliverables.map((deliverable, i) => {
              const [title, description] = deliverable.split(' — ')
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card hover:border-primary-500/50 transition-colors"
                >
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="w-4 h-4 text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{title}</h3>
                      {description && <p className="text-dark-400 text-sm">{description}</p>}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {service.technologies && (
        <section className="py-12 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h3 className="text-lg font-semibold text-dark-400">Technologies & Platforms</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {service.technologies.map((tech, i) => (
                <div
                  key={i}
                  className="px-4 py-2 bg-white/5 rounded-full text-sm text-dark-300"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.caseStudy && (
        <section className="py-20 bg-dark-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="card border-primary-500/20 max-w-3xl mx-auto text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-2">See It In Action</h3>
              <p className="text-dark-300 mb-2">{service.caseStudy.title}</p>
              <p className="text-primary-400 font-semibold mb-6">{service.caseStudy.result}</p>
              <Link to={service.caseStudy.link} className="btn-secondary">
                Read Case Study →
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Related Services</h2>
            <p className="text-dark-400">Complementary capabilities for comprehensive transformation</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedServices.map((related, i) => (
              <motion.div
                key={related.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={`/enterprise/${related.id}`}
                  className="card block hover:border-primary-500/50 transition-colors h-full"
                >
                  <div className="text-3xl mb-3">{related.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{related.name}</h3>
                  <p className="text-dark-400 text-sm line-clamp-2">{related.subhead}</p>
                  <div className="mt-4 text-primary-400 text-sm font-medium flex items-center">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary-500/10 via-accent-purple/10 to-accent-pink/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your<br />
            <span className="gradient-text">{service.name}?</span>
          </h2>
          <p className="text-xl text-dark-300 mb-8">
            Start with a 2-week discovery assessment. No obligation. Actionable roadmap.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Request Assessment</span>
            </Link>
            <a href="tel:+13478030812" className="btn-secondary flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>Call Direct</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
