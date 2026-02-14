import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'

interface ProductCardProps {
  name: string
  price: string
  priceMonthly?: string
  description: string
  features: string[]
  highlighted?: boolean
  tier: 'starter' | 'professional' | 'enterprise'
  link?: string
}

export function ProductCard({ 
  name, 
  price, 
  priceMonthly,
  description, 
  features, 
  highlighted, 
  tier,
  link 
}: ProductCardProps) {
  const tierColors = {
    starter: 'from-blue-500/20 to-cyan-500/20',
    professional: 'from-primary-500/20 to-accent-purple/20',
    enterprise: 'from-purple-500/20 to-pink-500/20',
  }

  const tierLabels = {
    starter: 'Solo Operations',
    professional: 'Growing Teams',
    enterprise: 'Enterprise Scale',
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`
        relative rounded-2xl p-6 border transition-all
        ${highlighted 
          ? 'bg-gradient-to-b from-primary-500/10 to-transparent border-primary-500/50 shadow-lg shadow-primary-500/10' 
          : 'bg-dark-900/50 border-white/10 hover:border-white/20'
        }
      `}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary-500 rounded-full text-xs font-semibold">
          Most Popular
        </div>
      )}

      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tierColors[tier]} flex items-center justify-center mb-4`}>
        <span className="text-2xl">{tier === 'starter' ? '🚀' : tier === 'professional' ? '⚡' : '🏢'}</span>
      </div>

      <div className="text-xs text-dark-400 uppercase tracking-wide mb-1">{tierLabels[tier]}</div>
      <h3 className="text-xl font-bold mb-1">{name}</h3>
      
      <div className="flex items-baseline space-x-2 mb-2">
        <span className="text-3xl font-bold gradient-text">{price}</span>
        {price !== 'Custom' && <span className="text-dark-400 text-sm">one-time</span>}
      </div>
      
      {priceMonthly && (
        <div className="text-sm text-dark-400 mb-4">
          + {priceMonthly} maintenance <span className="text-dark-500">(optional)</span>
        </div>
      )}

      <p className="text-dark-400 text-sm mb-6">{description}</p>

      <ul className="space-y-3 mb-6">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start space-x-2 text-sm">
            <Check className="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
            <span className="text-dark-300">{feature}</span>
          </li>
        ))}
      </ul>

      <a 
        href={link || '/contact'} 
        className={`
          w-full py-3 rounded-xl font-medium text-center transition-all flex items-center justify-center space-x-2
          ${highlighted 
            ? 'bg-primary-500 hover:bg-primary-400 text-white' 
            : 'bg-white/5 hover:bg-white/10 text-white'
          }
        `}
      >
        <span>{price === 'Custom' ? 'Contact Sales' : 'Learn More'}</span>
        <ArrowRight className="w-4 h-4" />
      </a>
    </motion.div>
  )
}
