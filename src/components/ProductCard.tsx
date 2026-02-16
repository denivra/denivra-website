import { motion } from 'framer-motion'
import { Check, ArrowRight, Cpu, HardDrive, MemoryStick, Rocket, Zap, Building2 } from 'lucide-react'
import { Link } from 'react-router-dom'

interface ProductCardProps {
  id: string
  name: string
  tagline: string
  price: string
  priceLabel: string
  description: string
  features: string[]
  highlighted?: boolean
  tier: 'solo' | 'pro' | 'enterprise'
  chip: string
  ram: string
  storage: string
  workflowCount: string
}

export function ProductCard({ 
  id,
  name,
  tagline,
  price, 
  priceLabel,
  description, 
  features, 
  highlighted, 
  tier,
  chip,
  ram,
  storage,
  workflowCount,
}: ProductCardProps) {
  const tierGradients = {
    solo: 'from-cyan-500 to-blue-500',
    pro: 'from-primary-500 to-accent-purple',
    enterprise: 'from-purple-500 to-pink-500',
  }

  const TierIcon = tier === 'solo' ? Rocket : tier === 'pro' ? Zap : Building2

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className={`
        relative rounded-2xl p-6 border transition-all
        ${highlighted 
          ? 'bg-gradient-to-b from-primary-500/10 to-transparent border-primary-500/50 shadow-lg shadow-primary-500/10' 
          : 'bg-dark-900/50 border-white/10 hover:border-white/20'
        }
      `}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary-500 to-accent-purple rounded-full text-xs font-bold uppercase tracking-wider">
          Most Popular
        </div>
      )}

      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tierGradients[tier]} bg-opacity-20 flex items-center justify-center`}
          style={{ background: `linear-gradient(135deg, ${tier === 'solo' ? 'rgba(6,182,212,0.2)' : tier === 'pro' ? 'rgba(14,165,233,0.2)' : 'rgba(168,85,247,0.2)'}, ${tier === 'solo' ? 'rgba(59,130,246,0.2)' : tier === 'pro' ? 'rgba(168,85,247,0.2)' : 'rgba(236,72,153,0.2)'})` }}
        >
          <TierIcon className="w-6 h-6 text-white" />
        </div>
        <div className="text-xs px-3 py-1 rounded-full bg-white/5 text-dark-300">
          {workflowCount} workflows
        </div>
      </div>

      <h3 className="text-xl font-bold mb-1">{name}</h3>
      <p className="text-sm text-dark-400 mb-4">{tagline}</p>
      
      <div className="mb-4">
        <span className="text-3xl font-bold gradient-text">{price}</span>
        <span className="text-dark-400 text-sm ml-2">{priceLabel}</span>
      </div>

      <div className="flex items-center gap-3 mb-4 text-xs text-dark-400">
        <div className="flex items-center gap-1">
          <Cpu className="w-3 h-3" />
          <span>{chip.split(' ').pop()}</span>
        </div>
        <div className="flex items-center gap-1">
          <MemoryStick className="w-3 h-3" />
          <span>{ram.split(' ')[0]}</span>
        </div>
        <div className="flex items-center gap-1">
          <HardDrive className="w-3 h-3" />
          <span>{storage}</span>
        </div>
      </div>

      <p className="text-dark-400 text-sm mb-6">{description}</p>

      <ul className="space-y-2.5 mb-6">
        {features.slice(0, 7).map((feature, i) => (
          <li key={i} className="flex items-start space-x-2 text-sm">
            <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
            <span className="text-dark-300">{feature}</span>
          </li>
        ))}
        {features.length > 7 && (
          <li className="text-sm text-primary-400 pl-6">
            +{features.length - 7} more capabilities
          </li>
        )}
      </ul>

      <Link 
        to={`/products/${id}`}
        className={`
          w-full py-3 rounded-xl font-medium text-center transition-all flex items-center justify-center space-x-2
          ${highlighted 
            ? 'bg-gradient-to-r from-primary-500 to-accent-purple hover:shadow-lg hover:shadow-primary-500/25 text-white' 
            : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
          }
        `}
      >
        <span>Learn More</span>
        <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  )
}
