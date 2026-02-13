import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Building2, Clock, DollarSign, Mail, MessageSquare, Phone,
  CheckCircle2, ArrowRight, Calendar, FileText, Bot, Zap,
  Users, TrendingUp, Sparkles
} from 'lucide-react'
import { ChatWidget } from '../../components/ChatWidget'

const benefits = [
  { value: '$499', label: 'Starting Price', sublabel: 'One-time setup' },
  { value: '6+', label: 'Hours Saved', sublabel: 'Per day on average' },
  { value: '< 2wk', label: 'Setup Time', sublabel: 'Fully operational' },
  { value: '10x', label: 'ROI', sublabel: 'First year average' },
]

const features = [
  {
    icon: Mail,
    title: 'Email Automation',
    description: 'AI reads, categorizes, and responds to routine emails. Never miss a lead or forget a follow-up.',
    included: 'Nous Assist',
  },
  {
    icon: MessageSquare,
    title: 'Chat & SMS',
    description: 'WhatsApp, SMS, and web chat — all handled by AI. Instant responses, 24/7.',
    included: 'Nous Assist',
  },
  {
    icon: Calendar,
    title: 'Appointment Booking',
    description: 'Customers book directly through chat or voice. Syncs with your calendar automatically.',
    included: 'Nous Assist',
  },
  {
    icon: Phone,
    title: 'Voice AI',
    description: 'AI answers your phone, qualifies leads, and books appointments while you focus on work.',
    included: 'Nous Connect',
  },
  {
    icon: FileText,
    title: 'Invoice & Billing',
    description: 'QuickBooks integration. Automated invoicing, payment reminders, and reconciliation.',
    included: 'Nous Connect',
  },
  {
    icon: TrendingUp,
    title: 'Growth Insights',
    description: 'Know what works. AI analyzes your customer interactions and suggests improvements.',
    included: 'Nous Connect',
  },
]

const testimonials = [
  {
    quote: "I was spending 3 hours a day on emails alone. Now Nous handles 80% of them automatically. I can actually focus on my clients.",
    author: "Sarah Chen",
    role: "Owner, Chen Law Firm",
    metric: "3 hrs/day saved",
  },
  {
    quote: "The voice AI paid for itself in the first week. I was missing calls from potential customers — now every call gets answered.",
    author: "Marcus Johnson",
    role: "Owner, MJ Plumbing",
    metric: "40% more leads",
  },
]

const packages = [
  {
    name: 'Nous Assist',
    price: '$499',
    description: 'Perfect for solopreneurs and small teams',
    features: [
      'Email triage & auto-response',
      'WhatsApp/SMS chatbot',
      'Basic CRM integration',
      'Simple dashboard',
      '5 workflows included',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Nous Connect',
    price: '$2,499',
    description: 'For growing businesses ready to scale',
    features: [
      'Everything in Assist',
      'Voice AI agents',
      'QuickBooks integration',
      'Advanced analytics',
      'Custom workflows',
      'Priority support',
    ],
    cta: 'Most Popular',
    highlighted: true,
  },
]

export function SmallBusinessPage() {
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
      <section className="pt-32 pb-20 bg-grid relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-accent-purple/10 border border-accent-purple/20 rounded-full px-4 py-2 mb-6">
              <Building2 className="w-4 h-4 text-accent-purple" />
              <span className="text-sm text-accent-purple">Small Business</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI That Works{' '}
              <span className="gradient-text">While You Sleep</span>
            </h1>
            
            <p className="text-xl text-dark-300 mb-8">
              Stop drowning in emails, missed calls, and admin work. 
              Nous handles the busywork so you can focus on what you do best.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link to="/#roi" className="btn-secondary">
                Calculate Your Savings
              </Link>
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {benefits.map((benefit, i) => (
              <div key={i} className="card text-center">
                <div className="text-3xl font-bold gradient-text">{benefit.value}</div>
                <div className="text-white font-medium">{benefit.label}</div>
                <div className="text-dark-500 text-sm">{benefit.sublabel}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Automate
            </h2>
            <p className="text-xl text-dark-300 max-w-2xl mx-auto">
              No tech skills required. We set it up, train it on your business, 
              and it starts working immediately.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card group hover:border-primary-500/30"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-purple/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <span className="text-xs bg-dark-800 px-2 py-1 rounded-full text-dark-400">
                    {feature.included}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-dark-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-dark-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Small Business Owners Love Nous
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex items-center space-x-2 text-green-400 text-sm mb-4">
                  <Sparkles className="w-4 h-4" />
                  <span>{testimonial.metric}</span>
                </div>
                <blockquote className="text-lg mb-4">"{testimonial.quote}"</blockquote>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-dark-400 text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-dark-300">
              One-time setup fee. No hidden costs. Optional monthly maintenance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {packages.map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`card ${pkg.highlighted ? 'border-primary-500/50 relative' : ''}`}
              >
                {pkg.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-500 to-accent-purple px-3 py-1 rounded-full text-xs font-medium">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold gradient-text">{pkg.price}</span>
                  <span className="text-dark-400 ml-2">one-time</span>
                </div>
                <p className="text-dark-400 mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={pkg.highlighted ? 'btn-primary w-full text-center' : 'btn-secondary w-full text-center'}
                >
                  {pkg.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stop Working Weekends
          </h2>
          <p className="text-xl text-dark-300 mb-8">
            Let AI handle the busywork while you focus on growing your business.
          </p>
          <Link to="/contact" className="btn-primary">
            Start Your Free Trial
            <ArrowRight className="w-4 h-4 ml-2" />
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
