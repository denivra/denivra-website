import { useParams, useLocation, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  ArrowLeft, Check, ArrowRight, Zap, Play, 
  Cpu, HardDrive, MemoryStick, Brain, Headphones
} from 'lucide-react'
import { getProductById, Product } from '../../data/products'
import { getAutomationsForTier } from '../../data/automations'

const tierEmoji = {
  solo: '🚀',
  pro: '⚡',
  enterprise: '🏢',
}

function ProductPageContent({ product }: { product: Product }) {
  const availableAutomations = getAutomationsForTier(product.tier)

  return (
    <>
      <section className="relative pt-32 pb-20 bg-grid">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center space-x-2 text-dark-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6">
                <span className="text-2xl">{tierEmoji[product.tier]}</span>
                <span className="text-sm">{product.tagline}</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-primary-400 mb-4">{product.tagline}</p>
              <p className="text-lg text-dark-300 mb-8">{product.description}</p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/contact" className="btn-primary flex items-center justify-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Book Demo</span>
                </Link>
                <div className="flex items-center justify-center space-x-2 text-dark-300">
                  <span className="text-2xl font-bold gradient-text">{product.price}</span>
                  <span className="text-dark-400">{product.priceLabel}</span>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="font-semibold text-lg mb-4">What's Included</h3>
              
              <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-white/5 mb-6">
                <div className="text-center">
                  <Cpu className="w-5 h-5 mx-auto mb-1 text-primary-400" />
                  <div className="text-xs text-dark-400">Chip</div>
                  <div className="text-sm font-medium">{product.chip.split(' ').slice(-1)}</div>
                </div>
                <div className="text-center">
                  <MemoryStick className="w-5 h-5 mx-auto mb-1 text-primary-400" />
                  <div className="text-xs text-dark-400">RAM</div>
                  <div className="text-sm font-medium">{product.ram.split(' ')[0]}</div>
                </div>
                <div className="text-center">
                  <HardDrive className="w-5 h-5 mx-auto mb-1 text-primary-400" />
                  <div className="text-xs text-dark-400">Storage</div>
                  <div className="text-sm font-medium">{product.storage}</div>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-4 text-sm text-dark-400">
                <Brain className="w-4 h-4 text-accent-purple" />
                <span>{product.llmCapability}</span>
              </div>

              <ul className="space-y-2.5">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-dark-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-dark-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="gradient-text">Capabilities</span>
            </h2>
            <p className="text-dark-400">Everything {product.name} can do for you</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5 text-primary-400" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{cap.name}</h3>
                <p className="text-dark-400 text-sm">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Integrations</h2>
            <p className="text-dark-400">Connect with tools you already use</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {product.integrations.map((integration, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-6 py-3 bg-white/5 rounded-full text-dark-300 hover:bg-white/10 transition-colors"
              >
                {integration}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="gradient-text">{availableAutomations.length}</span> Automations Available
            </h2>
            <p className="text-dark-400">{product.workflowCount} pre-built workflows ready to deploy</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {availableAutomations.slice(0, 8).map((automation, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
              >
                <div className="font-medium mb-1">{automation.name}</div>
                <div className="text-sm text-dark-400">{automation.tagline}</div>
              </motion.div>
            ))}
          </div>

          {availableAutomations.length > 8 && (
            <div className="text-center mt-8">
              <Link to="/automations" className="text-primary-400 hover:text-primary-300 transition-colors">
                View all {availableAutomations.length} automations &rarr;
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-dark-400">From unboxing to running autonomously</p>
          </div>

          <div className="space-y-8">
            {[
              { step: 1, title: 'Discovery Call', desc: 'We map your current workflows, pain points, and integration needs. 15-30 minutes.' },
              { step: 2, title: 'We Ship & Configure', desc: 'Your Mac Mini arrives pre-configured. We connect your email, accounting, CRM, and phone remotely.' },
              { step: 3, title: 'AI Learns Your Business', desc: 'AI trains on your patterns — email responses, document categorizations, client preferences.' },
              { step: 4, title: 'You Wake Up to Results', desc: 'System runs 24/7. Morning dashboard shows everything your AI did overnight. Review, approve, done.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-400 font-bold">{item.step}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-dark-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary-500/10 via-accent-purple/10 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Meet Your AI Employee?</h2>
          <p className="text-dark-400 mb-8">
            Book a demo to see {product.name} in action for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary flex items-center space-x-2">
              <Headphones className="w-5 h-5" />
              <span>Book Demo</span>
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

export function ProductPage() {
  const { id: paramId } = useParams<{ id: string }>()
  const location = useLocation()
  
  const id = paramId || location.pathname.split('/').pop()
  const product = id ? getProductById(id) : undefined

  if (!product) {
    return (
      <div className="pt-32 text-center">
        <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
        <p className="text-dark-400 mb-4">Looking for: {id || 'unknown'}</p>
        <Link to="/" className="btn-primary">Go Home</Link>
      </div>
    )
  }

  return <ProductPageContent product={product} />
}
