import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Clock, User, Bot, ArrowRight } from 'lucide-react'
import { blogPosts } from '../../data/blogPosts'
import { ChatWidget } from '../../components/ChatWidget'

const categories = ['All', 'Voice AI', 'Automation', 'AI Trends']

export function BlogListPage() {
  return (
    <div className="min-h-screen bg-dark-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-purple flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Denivra</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/contact" className="btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-12 bg-grid relative">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link to="/" className="inline-flex items-center space-x-2 text-dark-400 hover:text-white mb-6">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Latest <span className="gradient-text">Insights</span>
            </h1>
            
            <p className="text-xl text-dark-300 max-w-2xl">
              Real talk about AI automation. No hype, just what works.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  category === 'All'
                    ? 'bg-primary-500 text-white'
                    : 'bg-dark-800 text-dark-300 hover:bg-dark-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card group hover:border-primary-500/30"
              >
                <div className="flex items-center space-x-2 text-sm mb-3">
                  <span className="bg-primary-500/20 text-primary-400 px-2 py-1 rounded-full text-xs">
                    {post.category}
                  </span>
                  {post.featured && (
                    <span className="bg-accent-purple/20 text-accent-purple px-2 py-1 rounded-full text-xs">
                      Featured
                    </span>
                  )}
                </div>
                
                <Link to={`/blog/${post.slug}`}>
                  <h2 className="text-xl font-semibold mb-3 group-hover:text-primary-400 transition-colors">
                    {post.title}
                  </h2>
                </Link>
                
                <p className="text-dark-400 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-dark-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author.name}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="text-primary-400 hover:text-primary-300 flex items-center space-x-1"
                  >
                    <span>Read</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-dark-900/50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Get AI Insights Weekly
          </h2>
          <p className="text-dark-400 mb-6">
            Join 5,000+ business owners getting actionable AI automation tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-dark-800 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-500"
            />
            <button className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-dark-400">
          <p>© 2025 Denivra Inc. All rights reserved.</p>
        </div>
      </footer>

      <ChatWidget />
    </div>
  )
}
