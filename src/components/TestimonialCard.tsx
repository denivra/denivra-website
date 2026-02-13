import { motion } from 'framer-motion'
import { Quote, TrendingUp } from 'lucide-react'

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  metric: string
}

export function TestimonialCard({ quote, author, role, metric }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-accent-purple/10 rounded-full blur-3xl" />
      
      <Quote className="w-10 h-10 text-primary-500/30 mb-4" />
      
      <p className="text-lg text-dark-200 mb-6 leading-relaxed relative z-10">
        "{quote}"
      </p>
      
      <div className="flex items-center justify-between relative z-10">
        <div>
          <div className="font-semibold">{author}</div>
          <div className="text-dark-400 text-sm">{role}</div>
        </div>
        
        <div className="flex items-center space-x-2 px-3 py-2 bg-green-500/10 rounded-lg border border-green-500/20">
          <TrendingUp className="w-4 h-4 text-green-400" />
          <span className="text-sm text-green-400 font-medium">{metric}</span>
        </div>
      </div>
    </motion.div>
  )
}
