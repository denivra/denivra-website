import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft, ArrowRight, Clock, Wrench, Zap,
  Mail, MessageSquare, FileText, Calculator, Users, Calendar,
  Phone, Settings, ShoppingCart, Shield, Megaphone, UserPlus,
  Brain, Tags, CheckCircle, CreditCard, DollarSign, Send,
  GitBranch, Search, Database, Globe, PenTool, ShieldCheck,
  Sun, Activity, TrendingUp, Bell, BarChart3, Target,
  User, Timer, AlertTriangle, Upload, Download, Link as LinkIcon,
  CheckSquare, Camera, Table, AlertCircle, Building, Package,
  Truck, Heart, Gift, Filter, Home, ListChecks, HelpCircle,
  ThumbsUp, ClipboardCheck, UserCheck, UserMinus, FolderInput,
  Star, Headphones
} from 'lucide-react'
import {
  getUseCaseById, getUseCasesByCategory,
  categoryLabels, categoryIcons,
  UseCaseCategory
} from '../data/useCases'

const lucideIconMap: Record<string, typeof Mail> = {
  Mail, MessageSquare, FileText, Calculator, Users, Calendar,
  Phone, Settings, ShoppingCart, Shield, Megaphone, UserPlus,
  Brain, Tags, CheckCircle, CreditCard, DollarSign, Send,
  GitBranch, Search, Database, Globe, PenTool, ShieldCheck,
  Sun, Activity, TrendingUp, Bell, BarChart3, Target,
  User, Timer, AlertTriangle, Upload, Download, Link: LinkIcon,
  CheckSquare, Camera, Table, AlertCircle, Building, Package,
  Truck, Heart, Gift, Filter, Home, ListChecks, HelpCircle,
  ThumbsUp, ClipboardCheck, UserCheck, UserMinus, FolderInput,
  Zap, Star, Clock, Headphones,
  ScanLine: Search,
  FileSearch: Search,
  FolderSearch: Search,
  Sheet: Table,
  CircleCheck: CheckCircle,
  PenLine: PenTool,
  ShoppingBag: ShoppingCart,
}

const categoryIconMap: Record<string, typeof Mail> = {
  Mail, MessageSquare, FileText, Calculator, Users, Calendar,
  Phone, Settings, ShoppingCart, Shield, Megaphone, UserPlus,
}

const tierLabels: Record<string, string> = {
  solo: 'Solo',
  pro: 'Pro',
  enterprise: 'Enterprise',
}

const tierStyles: Record<string, string> = {
  solo: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  pro: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  enterprise: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
}

export function UseCaseDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const useCase = slug ? getUseCaseById(slug) : undefined

  if (!useCase) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Use Case Not Found</h1>
        <p className="text-dark-400 mb-8">The use case you're looking for doesn't exist.</p>
        <Link to="/use-cases" className="btn-primary">Browse Use Cases</Link>
      </div>
    )
  }

  const catIconName = categoryIcons[useCase.category]
  const CatIcon = categoryIconMap[catIconName] || Settings

  const related = getUseCasesByCategory(useCase.category)
    .filter(uc => uc.id !== useCase.id)
    .slice(0, 3)

  return (
    <>
      <section className="relative pt-32 pb-20 bg-grid overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-accent-purple/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/use-cases"
            className="inline-flex items-center space-x-2 text-dark-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Use Cases</span>
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center space-x-1.5 glass px-3 py-1.5 rounded-full text-sm">
                <CatIcon className="w-4 h-4 text-primary-400" />
                <span>{categoryLabels[useCase.category]}</span>
              </span>
              {useCase.tier.map(t => (
                <span
                  key={t}
                  className={`text-xs px-3 py-1 rounded-full border ${tierStyles[t]}`}
                >
                  {tierLabels[t]}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{useCase.title}</h1>
            <p className="text-lg text-dark-300 max-w-3xl">{useCase.description}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">
              <span className="gradient-text">Workflow</span> Visualization
            </h2>
            <p className="text-dark-400">
              See exactly how this automation flows from trigger to output
            </p>
          </motion.div>

          <div className="relative">
            {useCase.workflowSteps.map((step, i) => {
              const StepIcon = lucideIconMap[step.icon] || Zap
              const isLast = i === useCase.workflowSteps.length - 1

              return (
                <div key={i} className="relative">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                    className="relative flex items-start gap-6 pb-12"
                  >
                    <div className="relative flex-shrink-0 flex flex-col items-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 + 0.1, type: 'spring', stiffness: 200 }}
                        className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 via-primary-500/20 to-accent-purple/20 border border-cyan-500/30 flex items-center justify-center z-10 relative"
                      >
                        <StepIcon className="w-6 h-6 text-cyan-400" />
                        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-dark-900 border border-cyan-500/50 flex items-center justify-center">
                          <span className="text-[10px] font-bold text-cyan-400">{i + 1}</span>
                        </div>
                      </motion.div>

                      {!isLast && (
                        <motion.div
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.15 + 0.3, duration: 0.4 }}
                          className="w-0.5 flex-1 mt-2 origin-top"
                          style={{
                            background: 'linear-gradient(to bottom, rgb(6, 182, 212), rgb(59, 130, 246), rgb(139, 92, 246))',
                          }}
                        />
                      )}

                      {!isLast && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.15 + 0.5 }}
                          className="absolute bottom-2 left-1/2 -translate-x-1/2"
                        >
                          <svg width="12" height="8" viewBox="0 0 12 8" className="text-blue-500">
                            <path d="M6 8L0 0h12L6 8z" fill="currentColor" />
                          </svg>
                        </motion.div>
                      )}
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + 0.2 }}
                      className="flex-1 pt-1"
                    >
                      <div className="card hover:border-cyan-500/20 transition-colors">
                        <h3 className="text-lg font-semibold mb-1">{step.label}</h3>
                        <p className="text-sm text-dark-400">{step.detail}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold">Tools & Integrations</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {useCase.tools.map(tool => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-full bg-white/5 text-sm text-dark-300 hover:bg-white/10 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold">Time Saved</h3>
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">{useCase.timeSaved}</div>
              <p className="text-sm text-dark-400">
                Reclaimed by automating this workflow end to end
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Related Use Cases</h2>
              <p className="text-dark-400">
                More {categoryLabels[useCase.category]} automations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {related.map((uc, i) => {
                const RelIcon = categoryIconMap[categoryIcons[uc.category]] || Settings
                return (
                  <motion.div
                    key={uc.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link to={`/use-cases/${uc.id}`} className="card block group h-full">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-purple/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <RelIcon className="w-5 h-5 text-primary-400" />
                        </div>
                        <span className="text-xs text-dark-500">{uc.timeSaved}</span>
                      </div>
                      <h3 className="font-semibold mb-2 line-clamp-2">{uc.title}</h3>
                      <p className="text-sm text-dark-400 line-clamp-2">{uc.description}</p>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-gradient-to-r from-primary-500/10 via-accent-purple/10 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Automate This Workflow</h2>
          <p className="text-dark-400 mb-8">
            Book a demo to see this automation running live for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary flex items-center space-x-2">
              <Headphones className="w-5 h-5" />
              <span>Book Demo</span>
            </Link>
            <Link
              to="/use-cases"
              className="text-primary-400 hover:text-primary-300 font-medium flex items-center space-x-1"
            >
              <span>Browse all use cases</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
