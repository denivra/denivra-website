import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  ArrowLeft, Mail, Phone, MessageSquare, MapPin, Clock, Send, 
  CheckCircle2, Calendar, PhoneCall
} from 'lucide-react'

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: {
          portalId: string
          formId: string
          target: string
          onFormSubmit?: () => void
        }) => void
      }
    }
    openPivotChat?: () => void
  }
}

export function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    interest: '',
    message: '',
    budget: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [useHubSpot, setUseHubSpot] = useState(false)

  // Load HubSpot form if configured
  useEffect(() => {
    const hubspotPortalId = import.meta.env.VITE_HUBSPOT_PORTAL_ID
    const hubspotFormId = import.meta.env.VITE_HUBSPOT_FORM_ID
    
    if (hubspotPortalId && hubspotFormId) {
      setUseHubSpot(true)
      
      const script = document.createElement('script')
      script.src = '//js.hsforms.net/forms/v2.js'
      script.async = true
      script.onload = () => {
        if (window.hbspt) {
          window.hbspt.forms.create({
            portalId: hubspotPortalId,
            formId: hubspotFormId,
            target: '#hubspot-form-container',
            onFormSubmit: () => setIsSubmitted(true)
          })
        }
      }
      document.head.appendChild(script)
      
      return () => {
        document.head.removeChild(script)
      }
    }
  }, [])

  // Load Calendly widget
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.head.appendChild(script)
    
    return () => {
      document.head.removeChild(script)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'website-contact-form',
          timestamp: new Date().toISOString(),
        }),
      })

      if (!response.ok) {
        const hubspotPortalId = import.meta.env.VITE_HUBSPOT_PORTAL_ID
        const hubspotFormId = import.meta.env.VITE_HUBSPOT_FORM_ID
        
        if (hubspotPortalId && hubspotFormId) {
          await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${hubspotPortalId}/${hubspotFormId}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              fields: [
                { name: 'firstname', value: formData.firstName },
                { name: 'lastname', value: formData.lastName },
                { name: 'email', value: formData.email },
                { name: 'company', value: formData.company },
                { name: 'phone', value: formData.phone },
                { name: 'message', value: formData.message },
              ],
              context: {
                pageUri: window.location.href,
                pageName: 'Contact Page'
              }
            }),
          })
        }
      }

      setIsSubmitted(true)
    } catch (error) {
      setIsSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const interests = [
    'Voice AI Agents',
    'Email Automation',
    'Workflow Automation',
    'Legacy Modernization',
    'Custom AI Solution',
    'Just Exploring',
  ]

  const budgets = [
    'Under $5,000',
    '$5,000 - $15,000',
    '$15,000 - $50,000',
    '$50,000+',
    'Not sure yet',
  ]

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-grid relative">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's <span className="gradient-text">Talk</span>
            </h1>
            <p className="text-xl text-dark-300">
              Ready to automate your business? Chat with Pivot, fill out the form, 
              or call us directly. We respond within 2 hours during business hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { 
                icon: MessageSquare, 
                title: 'Chat with Pivot', 
                desc: 'Instant AI-powered help',
                action: 'Open Chat',
                onClick: () => {
                  if (window.openPivotChat) {
                    window.openPivotChat()
                  } else {
                    const chatBtn = document.querySelector('.chat-bubble') as HTMLButtonElement
                    chatBtn?.click()
                  }
                }
              },
              { 
                icon: PhoneCall, 
                title: 'Call Us', 
                desc: '+1 (347) 803-0812',
                action: 'Call Now',
                href: 'tel:+13478030812'
              },
              { 
                icon: Calendar, 
                title: 'Book a Demo', 
                desc: '30-min walkthrough',
                action: 'Schedule',
                href: 'https://calendly.com/bsa-denivra/30min'
              },
              { 
                icon: Mail, 
                title: 'Email Us', 
                desc: 'info@denivra.com',
                action: 'Send Email',
                href: 'mailto:info@denivra.com'
              },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                onClick={item.onClick}
                target={item.href?.startsWith('http') ? '_blank' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="card group cursor-pointer hover:border-primary-500/30 text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-purple/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-dark-400 mb-3">{item.desc}</p>
                <span className="text-primary-400 text-sm font-medium">{item.action} →</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="card"
            >
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              
              {useHubSpot ? (
                <div id="hubspot-form-container" />
              ) : isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-dark-400 mb-6">
                    We'll get back to you within 2 hours during business hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-primary-400 hover:text-primary-300"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-500"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-500"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Work Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-500"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Company</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-500"
                        placeholder="Acme Inc."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-500"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">What are you interested in?</label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-500"
                    >
                      <option value="">Select an option...</option>
                      {interests.map(interest => (
                        <option key={interest} value={interest}>{interest}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Budget Range</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-500"
                    >
                      <option value="">Select a range...</option>
                      {budgets.map(budget => (
                        <option key={budget} value={budget}>{budget}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Tell us about your project *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-500 resize-none"
                      placeholder="What challenges are you facing? What would you like to automate?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin">⏳</span>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Company Info + AI Assessment CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              {/* AI Voice Assessment */}
              <div className="card bg-gradient-to-br from-primary-500/10 to-accent-purple/10 border-primary-500/20">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-purple flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">AI Assessment Call</h3>
                    <p className="text-dark-300 mb-4">
                      Prefer to talk through your needs? Our AI assistant can conduct 
                      a quick assessment call to understand your requirements and provide 
                      instant recommendations.
                    </p>
                    <a 
                      href="tel:+13478030812" 
                      className="inline-flex items-center space-x-2 text-primary-400 font-medium hover:text-primary-300"
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span>Call +1 (347) 803-0812</span>
                    </a>
                    <p className="text-xs text-dark-500 mt-2">
                      Available 24/7 • AI-powered assessment • Human follow-up within 2 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Company Info */}
              <div className="card">
                <h3 className="text-xl font-bold mb-6">Denivra Inc.</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-primary-400 mt-0.5" />
                    <div>
                      <div className="font-medium">Email</div>
                      <a href="mailto:info@denivra.com" className="text-dark-400 hover:text-white">
                        info@denivra.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-primary-400 mt-0.5" />
                    <div>
                      <div className="font-medium">Phone</div>
                      <a href="tel:+13478030812" className="text-dark-400 hover:text-white">
                        +1 (347) 803-0812
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary-400 mt-0.5" />
                    <div>
                      <div className="font-medium">Location</div>
                      <div className="text-dark-400">
                        New Jersey, USA<br />
                        <span className="text-sm">Serving clients globally</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-primary-400 mt-0.5" />
                    <div>
                      <div className="font-medium">Response Time</div>
                      <div className="text-dark-400">
                        Within 2 hours (business hours)<br />
                        <span className="text-sm">AI available 24/7</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Signals */}
              <div className="card">
                <h3 className="font-semibold mb-4">Why Denivra?</h3>
                <ul className="space-y-3">
                  {[
                    '20+ years enterprise tech experience',
                    'Cross River Bank, Goldman Sachs alumni',
                    'SOC 2 compliant infrastructure',
                    '< 2 week implementation time',
                    'Pay only when it works',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-2 text-dark-300">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Calendly Embed Section */}
      <section className="py-12 bg-dark-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Or Schedule Directly</h2>
            <p className="text-dark-400">Pick a time that works for you</p>
          </div>
          <div 
            className="calendly-inline-widget rounded-xl overflow-hidden" 
            data-url="https://calendly.com/bsa-denivra/30min?hide_gdpr_banner=1&background_color=0a0a0f&text_color=ffffff&primary_color=8b5cf6"
            style={{ minWidth: '320px', height: '700px' }}
          />
        </div>
      </section>
    </>
  )
}
