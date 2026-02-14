import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Bot, ArrowRight, Linkedin, Mail, MapPin, Calendar,
  Code, Briefcase, Award, Users, Target, Lightbulb
} from 'lucide-react'

const team = [
  {
    name: 'Nikolaos Bessas',
    role: 'Co-Founder & CEO',
    bio: 'IT Director → CIO track with 15+ years leading digital transformation at banks and fintechs. Built middleware processing $B+ in transactions, designed BaaS architecture for 140+ fintech partners, and achieved zero findings across 4 consecutive DFS audits. CISM certified. $3.5M+ in documented cost savings.',
    linkedin: 'https://linkedin.com/in/nikolaosbessas',
    email: 'bsa@denivra.com',
    expertise: ['BaaS Architecture', 'Payment Infrastructure', 'Compliance Automation', 'Legacy Modernization'],
    credentials: ['CISM Certified', '$3.5M+ Savings', '100% Audit Compliance'],
  },
  {
    name: 'Spyros Nakos',
    role: 'Co-Founder & CTO',
    bio: 'Full-stack engineer and AI systems architect. Built scalable platforms serving millions of users. Expert in voice AI, automation pipelines, and real-time systems. Specializes in turning complex enterprise requirements into elegant, working solutions.',
    linkedin: 'https://linkedin.com/in/spyrosnakos',
    email: 'spyros@denivra.com',
    expertise: ['Voice AI', 'System Architecture', 'Automation'],
    credentials: [],
  },
]

const timeline = [
  {
    year: '2024',
    title: 'Founded Denivra',
    description: 'Started with a vision to make enterprise AI accessible to small businesses.',
  },
  {
    year: '2024',
    title: 'Launched Nous Platform',
    description: 'Released our first AI automation appliance, combining hardware + software in one package.',
  },
  {
    year: '2025',
    title: 'Industry Solutions',
    description: 'Expanded to café, CPA, salon, restaurant, and payroll verticals with specialized AI.',
  },
  {
    year: '2025',
    title: 'Voice AI Launch',
    description: 'Introduced 24/7 AI phone agents that handle calls, qualify leads, and book appointments.',
  },
]

const values = [
  {
    icon: Target,
    title: 'Results Over Features',
    description: 'We measure success in hours saved and revenue generated, not feature checkboxes.',
  },
  {
    icon: Users,
    title: 'Human-First Automation',
    description: 'AI should amplify human capability, not replace human judgment.',
  },
  {
    icon: Lightbulb,
    title: 'Practical Innovation',
    description: 'We build what works today, not what might work someday.',
  },
]

export function AboutPage() {
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
            <Link
              to="/contact"
              className="px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-purple rounded-lg font-medium hover:shadow-lg hover:shadow-primary-500/25 transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <span className="text-primary-400 text-sm font-medium">About Denivra</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Building AI That
            <span className="gradient-text"> Actually Works</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-dark-300 max-w-2xl mx-auto"
          >
            We're on a mission to give every small business the automation power of a Fortune 500 company — without the Fortune 500 budget.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-dark-300">
                <p>
                  We started Denivra after watching small business owners drown in operational chaos — 
                  answering phones at 10 PM, manually entering receipts, missing customer emails for days.
                </p>
                <p>
                  Meanwhile, enterprise companies had armies of automation handling everything. 
                  The gap wasn't about capability — it was about accessibility.
                </p>
                <p>
                  So we built Nous: AI automation that comes in a box, installs in a week, 
                  and starts saving hours on day one. No army of consultants required.
                </p>
                <p className="text-white font-medium">
                  Today, our AI handles thousands of tasks every night while our clients sleep.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-16 text-primary-400 font-bold">
                    {item.year}
                  </div>
                  <div className="pb-4 border-l border-white/10 pl-4">
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-dark-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-dark-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What We Believe</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-dark-800/50 border border-white/5"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-purple/20 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-dark-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Meet the Team</h2>
          <p className="text-dark-400 text-center mb-12 max-w-2xl mx-auto">
            Two founders, one mission: make AI work for small businesses.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-dark-800/50 border border-white/5"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-primary-400">{member.role}</p>
                  </div>
                  <div className="flex space-x-2">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <p className="text-dark-300 mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 text-xs rounded-full bg-white/5 text-dark-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 px-4 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 text-dark-400 mb-4">
            <MapPin className="w-4 h-4" />
            <span>Based in New Jersey, serving clients worldwide</span>
          </div>
          <h2 className="text-3xl font-bold mb-6">Ready to automate?</h2>
          <p className="text-dark-300 mb-8">
            Book a call and we'll show you exactly how Nous can transform your operations.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-purple rounded-xl font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-primary-500 to-accent-purple flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold">Denivra</span>
          </div>
          <p className="text-dark-500 text-sm">
            © {new Date().getFullYear()} Denivra Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
