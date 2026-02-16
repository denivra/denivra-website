import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Mail, MessageSquare, FileText, Calculator, Users, Calendar,
  Phone, Settings, ShoppingCart, Shield, Megaphone, UserPlus,
  ArrowRight, Clock} from 'lucide-react'
import {
  useCases, categoryIcons,
  getAllCategories, UseCaseCategory
} from '../data/useCases'

const lucideIconMap: Record<string, typeof Mail> = {
  Mail, MessageSquare, FileText, Calculator, Users, Calendar,
  Phone, Settings, ShoppingCart, Shield, Megaphone, UserPlus,
}

const tierLabels: Record<string, string> = {
  solo: 'Solo',
  pro: 'Pro',
  enterprise: 'Enterprise',
}

const tierStyles: Record<string, string> = {
  solo: 'bg-cyan-500/20 text-cyan-400',
  pro: 'bg-purple-500/20 text-purple-400',
  enterprise: 'bg-pink-500/20 text-pink-400',
}

export function UseCasesPage() {
  const [selectedCategory, setSelectedCategory] = useState<UseCaseCategory | 'all'>('all')
  const [selectedTier, setSelectedTier] = useState<'all' | 'solo' | 'pro' | 'enterprise'>('all')

  const categories = getAllCategories()
  const tiers = ['all', 'solo', 'pro', 'enterprise'] as const

  const filtered = useCases.filter(uc => {
    const catMatch = selectedCategory === 'all' || uc.category === selectedCategory
    const tierMatch = selectedTier === 'all' || uc.tier.includes(selectedTier)
    return catMatch && tierMatch
  })

  return (
    <>
      <section className="relative pt-32 pb-16 bg-grid">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-accent-purple/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">50+</span> Automation Use Cases
            </h1>
            <p className="text-xl text-dark-300 max-w-2xl mx-auto">
              Real workflows that run your business on autopilot. Browse by category
              or tier to find the perfect automation for your needs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="sticky top-16 z-40 bg-dark-950/95 backdrop-blur-xl border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex flex-wrap gap-2 flex-1">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-primary-500 text-white'
                    : 'bg-white/5 text-dark-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                All
              </button>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-primary-500 text-white'
                      : 'bg-white/5 text-dark-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              {tiers.map(tier => (
                <button
                  key={tier}
                  onClick={() => setSelectedTier(tier)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    selectedTier === tier
                      ? tier === 'all'
                        ? 'bg-white/20 text-white'
                        : tierStyles[tier] + ' ring-1 ring-current'
                      : 'bg-white/5 text-dark-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {tier === 'all' ? 'All Tiers' : tierLabels[tier]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 text-dark-400 text-sm">
            Showing {filtered.length} use case{filtered.length !== 1 ? 's' : ''}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((uc, i) => {
              const iconName = categoryIcons[uc.category]
              const Icon = lucideIconMap[iconName] || Settings

              return (
                <motion.div
                  key={uc.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 6) * 0.05 }}
                  className="card group flex flex-col"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-purple/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-primary-400" />
                    </div>
                    <div className="flex items-center space-x-1.5 text-xs text-dark-400">
                      <Clock className="w-3 h-3" />
                      <span>{uc.timeSaved}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">{uc.title}</h3>
                  <p className="text-sm text-dark-400 mb-4 line-clamp-3 flex-1">{uc.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {uc.tools.slice(0, 4).map(tool => (
                      <span
                        key={tool}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-dark-400"
                      >
                        {tool}
                      </span>
                    ))}
                    {uc.tools.length > 4 && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-dark-500">
                        +{uc.tools.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/5">
                    <div className="flex space-x-1">
                      {uc.tier.map(t => (
                        <span
                          key={t}
                          className={`text-xs px-2 py-0.5 rounded-full ${tierStyles[t]}`}
                        >
                          {tierLabels[t]}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/use-cases/${uc.id}`}
                      className="text-xs text-primary-400 hover:text-primary-300 flex items-center space-x-1 transition-colors"
                    >
                      <span>See Workflow</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary-500/10 via-accent-purple/10 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Automate?</h2>
          <p className="text-dark-400 mb-8">
            Book a demo to see these workflows running live for your industry.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center space-x-2">
            <span>Book Demo</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
