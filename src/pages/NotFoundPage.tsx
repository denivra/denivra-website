import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, Search, Bot } from 'lucide-react'

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-dark-950 flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-purple/20 flex items-center justify-center">
            <Bot className="w-10 h-10 text-primary-400" />
          </div>
          
          <h1 className="text-6xl font-bold gradient-text mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-dark-400 mb-8">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/" 
              className="btn-primary flex items-center space-x-2"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <Link 
              to="/contact" 
              className="btn-secondary flex items-center space-x-2"
            >
              <Search className="w-4 h-4" />
              <span>Contact Us</span>
            </Link>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-dark-500 text-sm">
              Looking for something specific?
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <Link to="/products/nous-solo" className="text-sm text-dark-400 hover:text-primary-400">Products</Link>
              <span className="text-dark-600">•</span>
              <Link to="/pricing" className="text-sm text-dark-400 hover:text-primary-400">Pricing</Link>
              <span className="text-dark-600">•</span>
              <Link to="/case-studies" className="text-sm text-dark-400 hover:text-primary-400">Case Studies</Link>
              <span className="text-dark-600">•</span>
              <Link to="/blog" className="text-sm text-dark-400 hover:text-primary-400">Blog</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
