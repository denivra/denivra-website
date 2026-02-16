import { motion } from 'framer-motion'
import { Clock, ArrowRight, Tag } from 'lucide-react'
import { blogPosts, BlogPost } from '../data/blogPosts'

const categoryColors: Record<string, string> = {
  'ai-trends': 'from-blue-500 to-cyan-500',
  'automation': 'from-primary-500 to-accent-purple',
  'case-study': 'from-green-500 to-emerald-500',
  'voice-ai': 'from-orange-500 to-red-500',
  'industry': 'from-violet-500 to-purple-500',
}

const categoryLabels: Record<string, string> = {
  'ai-trends': 'AI Trends',
  'automation': 'Automation',
  'case-study': 'Case Study',
  'voice-ai': 'Voice AI',
  'industry': 'Industry',
}

interface BlogCardProps {
  post: BlogPost
  index: number
}

function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="card group cursor-pointer hover:border-primary-500/30"
    >
      {/* Category Badge */}
      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${categoryColors[post.category]} bg-opacity-10 text-white mb-4`}>
        <Tag className="w-3 h-3 mr-1" />
        {categoryLabels[post.category]}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold mb-3 group-hover:text-primary-400 transition-colors line-clamp-2">
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="text-dark-400 text-sm mb-4 line-clamp-3">
        {post.excerpt}
      </p>

      {/* Meta */}
      <div className="flex items-center justify-between text-xs text-dark-500">
        <div className="flex items-center space-x-4">
          <span>{post.author.name}</span>
          <span className="flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            {post.readTime}
          </span>
        </div>
        <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
      </div>

      {/* Read More Link */}
      <div className="mt-4 pt-4 border-t border-white/5 flex items-center text-primary-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
        Read Article
        <ArrowRight className="w-4 h-4 ml-1" />
      </div>
    </motion.article>
  )
}

interface BlogSectionProps {
  limit?: number
  showTitle?: boolean
  showViewAll?: boolean
}

export function BlogSection({ limit = 4, showTitle = true, showViewAll = true }: BlogSectionProps) {
  const displayPosts = limit ? blogPosts.slice(0, limit) : blogPosts

  return (
    <section id="blog" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="text-center mb-16">
            <h2 className="section-title">Latest <span className="gradient-text">Insights</span></h2>
            <p className="section-subtitle">
              Real talk about AI automation. No hype, just what works.
            </p>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayPosts.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>

        {showViewAll && blogPosts.length > limit && (
          <div className="mt-12 text-center">
            <a 
              href="/blog" 
              className="inline-flex items-center text-primary-400 hover:text-primary-300 font-medium transition-colors"
            >
              View All Articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        )}
      </div>
    </section>
  )
}

// Featured Blog Post (larger format for homepage)
export function FeaturedBlogPost() {
  const featured = blogPosts.find(p => p.featured)
  if (!featured) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card lg:col-span-2 cursor-pointer group hover:border-primary-500/30"
    >
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Placeholder for image */}
        <div className="lg:w-1/3 h-48 lg:h-auto rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-purple/20 flex items-center justify-center">
          <span className="text-4xl">📰</span>
        </div>
        
        <div className="lg:w-2/3">
          <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${categoryColors[featured.category]} bg-opacity-10 text-white mb-4`}>
            <Tag className="w-3 h-3 mr-1" />
            {categoryLabels[featured.category]}
          </div>

          <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-400 transition-colors">
            {featured.title}
          </h3>

          <p className="text-dark-400 mb-4">
            {featured.excerpt}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-dark-500">
              <span>{featured.author.name}</span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {featured.readTime}
              </span>
            </div>
            
            <div className="flex items-center text-primary-400 font-medium group-hover:translate-x-1 transition-transform">
              Read More
              <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
