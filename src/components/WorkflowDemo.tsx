import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Mail, FileText, Calculator, CreditCard, CheckCircle, 
  ArrowRight, MessageSquare, Users, Receipt, Send,
  ChevronRight
} from 'lucide-react'

interface WorkflowStep {
  icon: typeof Mail
  label: string
  detail: string
  color: string
}

const workflows = [
  {
    id: 'expense',
    title: 'Email to QuickBooks',
    subtitle: 'Expense receipts processed automatically',
    steps: [
      { icon: Mail, label: 'Email Arrives', detail: 'Receipt from vendor detected in inbox', color: 'from-blue-500/20 to-cyan-500/20' },
      { icon: FileText, label: 'AI Extracts Data', detail: 'Vendor, amount, date, category identified', color: 'from-cyan-500/20 to-primary-500/20' },
      { icon: Receipt, label: 'Expense Classified', detail: 'Matched to chart of accounts automatically', color: 'from-primary-500/20 to-accent-purple/20' },
      { icon: Calculator, label: 'QuickBooks Entry', detail: 'Expense created via API with full audit trail', color: 'from-accent-purple/20 to-green-500/20' },
      { icon: CheckCircle, label: 'Done', detail: 'Morning report shows 127 expenses processed', color: 'from-green-500/20 to-emerald-500/20' },
    ] as WorkflowStep[],
  },
  {
    id: 'invoice',
    title: 'Service to Payment',
    subtitle: 'From job completion to money in the bank',
    steps: [
      { icon: MessageSquare, label: 'Employee Texts', detail: '"Job at 123 Oak St completed for Mr. Smith"', color: 'from-blue-500/20 to-cyan-500/20' },
      { icon: Users, label: 'HubSpot Updated', detail: 'Deal marked complete, service note logged', color: 'from-cyan-500/20 to-primary-500/20' },
      { icon: Receipt, label: 'Invoice Created', detail: 'Line items pulled from deal, invoice generated', color: 'from-primary-500/20 to-accent-purple/20' },
      { icon: CreditCard, label: 'Stripe Link Sent', detail: 'Payment link emailed with invoice to client', color: 'from-accent-purple/20 to-pink-500/20' },
      { icon: CheckCircle, label: 'Payment Received', detail: 'Stripe confirms payment. Cycle closed.', color: 'from-green-500/20 to-emerald-500/20' },
    ] as WorkflowStep[],
  },
  {
    id: 'telegram',
    title: 'Telegram Command',
    subtitle: 'Text it. It does the work.',
    steps: [
      { icon: Send, label: 'You Text Nous', detail: '"Check if invoice #4521 was paid"', color: 'from-blue-500/20 to-cyan-500/20' },
      { icon: FileText, label: 'AI Understands', detail: 'Intent parsed: check payment status for invoice', color: 'from-cyan-500/20 to-primary-500/20' },
      { icon: Calculator, label: 'Systems Checked', detail: 'QuickBooks queried, Stripe payment confirmed', color: 'from-primary-500/20 to-accent-purple/20' },
      { icon: MessageSquare, label: 'You Get Answer', detail: '"Yes, invoice #4521 was paid $2,340 on Feb 12"', color: 'from-accent-purple/20 to-green-500/20' },
    ] as WorkflowStep[],
  },
]

export function WorkflowDemo() {
  const [activeWorkflow, setActiveWorkflow] = useState(0)
  const current = workflows[activeWorkflow]

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-accent-purple/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="section-title">See It <span className="gradient-text">In Action</span></h2>
          <p className="section-subtitle">Real automation flows running on Nous right now</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {workflows.map((wf, i) => (
            <button
              key={wf.id}
              onClick={() => setActiveWorkflow(i)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeWorkflow === i
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                  : 'bg-white/5 text-dark-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {wf.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-1">{current.title}</h3>
              <p className="text-dark-400">{current.subtitle}</p>
            </div>

            <div className="hidden md:flex items-start justify-center gap-2 max-w-6xl mx-auto">
              {current.steps.map((step, i) => (
                <div key={i} className="flex items-start">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.15, type: 'spring', stiffness: 200 }}
                    className="flex flex-col items-center w-44"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.15 + 0.1, type: 'spring', stiffness: 300 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-3 border border-white/10`}
                    >
                      <step.icon className="w-7 h-7 text-primary-400" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.15 + 0.2 }}
                      className="text-center"
                    >
                      <div className="font-semibold text-sm mb-1">{step.label}</div>
                      <div className="text-xs text-dark-400 leading-relaxed">{step.detail}</div>
                    </motion.div>
                  </motion.div>

                  {i < current.steps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      transition={{ delay: i * 0.15 + 0.25 }}
                      className="mt-6 flex items-center"
                    >
                      <div className="w-8 h-px bg-gradient-to-r from-primary-500/50 to-accent-purple/50" />
                      <ChevronRight className="w-4 h-4 text-primary-500/50 -ml-1" />
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            <div className="md:hidden space-y-3">
              {current.steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="relative flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center border border-white/10`}>
                      <step.icon className="w-5 h-5 text-primary-400" />
                    </div>
                    {i < current.steps.length - 1 && (
                      <div className="w-px h-8 bg-gradient-to-b from-primary-500/30 to-transparent mt-1" />
                    )}
                  </div>
                  <div className="pt-2">
                    <div className="font-semibold text-sm">{step.label}</div>
                    <div className="text-xs text-dark-400">{step.detail}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
