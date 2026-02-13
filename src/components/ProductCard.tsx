import { motion } from 'framer-motion'
import { Check, Sparkles } from 'lucide-react'

interface ProductCardProps {
  name: string
  price: string
  description: string
  features: string[]
  highlighted: boolean
  tier: 'starter' | 'professional' | 'enterprise'
}

export function ProductCard({
  name,
  price,
  description,
  features,
  highlighted,
  tier,
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative rounded-2xl p-8 ${
        highlighted
          ? 'bg-gradient-to-br from-primary-500/20 via-accent-purple/20 to-accent-pink/20 border border-primary-500/50'
          : 'glass'
      }`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="flex items-center space-x-1 bg-gradient-to-r from-primary-500 to-accent-purple px-4 py-1 rounded-full text-sm font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>Most Popular</span>
          </div>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-dark-400 text-sm">{description}</p>
      </div>

      <div className="mb-6">
        <span className="text-4xl font-bold gradient-text">{price}</span>
        {tier !== 'enterprise' && (
          <span className="text-dark-400 text-sm ml-2">one-time</span>
        )}
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start space-x-3">
            <Check className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
            <span className="text-sm text-dark-200">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
          highlighted
            ? 'bg-gradient-to-r from-primary-500 to-accent-purple text-white hover:shadow-lg hover:shadow-primary-500/25'
            : 'border border-white/20 hover:bg-white/10'
        }`}
      >
        {tier === 'enterprise' ? 'Contact Sales' : 'Get Started'}
      </button>

      {tier !== 'enterprise' && (
        <p className="text-center text-dark-500 text-xs mt-4">
          + $99-199/mo optional maintenance
        </p>
      )}
    </motion.div>
  )
}
