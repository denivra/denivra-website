import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Calendar, Bot, Twitter, Linkedin } from 'lucide-react'
import { getBlogPost, blogPosts } from '../../data/blogPosts'
import { ChatWidget } from '../../components/ChatWidget'

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getBlogPost(slug) : undefined

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  const relatedPosts = blogPosts
    .filter(p => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2)

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

      {/* Article */}
      <article className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link to="/blog" className="inline-flex items-center space-x-2 text-dark-400 hover:text-white mb-8">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Blog</span>
            </Link>

            {/* Header */}
            <header className="mb-12">
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-primary-500/20 text-primary-400 px-3 py-1 rounded-full text-sm">
                  {post.category}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-dark-400">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-purple flex items-center justify-center">
                    <span className="text-white font-semibold">
                      {post.author.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-medium">{post.author.name}</div>
                    <div className="text-sm">{post.author.role}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime} read</span>
                  </div>
                </div>
              </div>
            </header>

            {/* Content */}
            <div 
              className="prose prose-invert prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-white
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-dark-300 prose-p:leading-relaxed
                prose-strong:text-white prose-strong:font-semibold
                prose-a:text-primary-400 prose-a:no-underline hover:prose-a:underline
                prose-ul:text-dark-300 prose-ol:text-dark-300
                prose-li:marker:text-primary-400
                prose-blockquote:border-primary-500 prose-blockquote:text-dark-300
                prose-code:text-primary-400 prose-code:bg-dark-800 prose-code:px-1 prose-code:rounded
                prose-table:text-dark-300
                prose-th:text-white prose-th:font-semibold prose-th:border-dark-700
                prose-td:border-dark-700"
            >
              {post.content.split('\n').map((paragraph, i) => {
                if (paragraph.startsWith('## ')) {
                  return <h2 key={i}>{paragraph.replace('## ', '')}</h2>
                }
                if (paragraph.startsWith('### ')) {
                  return <h3 key={i}>{paragraph.replace('### ', '')}</h3>
                }
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return <p key={i}><strong>{paragraph.replace(/\*\*/g, '')}</strong></p>
                }
                if (paragraph.startsWith('- ')) {
                  return null // Skip list items, handle separately
                }
                if (paragraph.startsWith('|')) {
                  return null // Skip table rows, would need proper table parsing
                }
                if (paragraph.trim()) {
                  return <p key={i}>{paragraph}</p>
                }
                return null
              })}
            </div>

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex items-center justify-between">
                <span className="text-dark-400">Share this article</span>
                <div className="flex items-center space-x-3">
                  <a 
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-dark-800 rounded-lg hover:bg-dark-700 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a 
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-dark-800 rounded-lg hover:bg-dark-700 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-dark-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  to={`/blog/${relatedPost.slug}`}
                  className="card group hover:border-primary-500/30"
                >
                  <span className="text-xs bg-primary-500/20 text-primary-400 px-2 py-1 rounded-full">
                    {relatedPost.category}
                  </span>
                  <h3 className="text-lg font-semibold mt-3 group-hover:text-primary-400 transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-dark-400 text-sm mt-2 line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Automate Your Business?
          </h2>
          <p className="text-dark-400 mb-6">
            See how Nous can transform your operations.
          </p>
          <Link to="/contact" className="btn-primary">
            Schedule Demo
          </Link>
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
