import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send, Bot, Loader2, Phone } from 'lucide-react'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hi! I'm Pivot, Denivra's AI assistant. How can I help you today?\n\nI can tell you about:\n• Pricing & packages\n• Voice AI agents\n• Email automation\n• Scheduling a demo",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Expose open function globally
  useEffect(() => {
    window.openPivotChat = () => setIsOpen(true)
    return () => { delete window.openPivotChat }
  }, [])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getResponse = (userInput: string): string => {
    const lower = userInput.toLowerCase()

    if (lower.includes('price') || lower.includes('cost') || lower.includes('pricing') || lower.includes('how much')) {
      return `Our packages:\n\n**Nous Assist** — $499 (one-time)\nEmail + chat automation for small teams\n\n**Nous Connect** — $2,499 (one-time)\nVoice AI + advanced integrations\n\n**Nous Command** — Custom pricing\nEnterprise-grade orchestration\n\nAll include setup & training. Want details on a specific tier?`
    }

    if (lower.includes('demo') || lower.includes('trial') || lower.includes('try') || lower.includes('schedule') || lower.includes('book') || lower.includes('call')) {
      return `Let's get you scheduled!\n\n📅 Book directly: calendly.com/bsa-denivra/30min\n📧 Email: info@denivra.com\n📞 Call: +1 (347) 803-0812\n\nOr tell me your preferred time!`
    }

    if (lower.includes('voice') || lower.includes('phone') || lower.includes('call center')) {
      return `Our Voice AI agents handle calls 24/7:\n\n• Answer customer inquiries\n• Qualify leads automatically\n• Book appointments\n• Handle support tickets\n\nClients see 60% cost reduction in call ops.\n\nWant to hear a demo call?`
    }

    if (lower.includes('email') || lower.includes('inbox')) {
      return `Our email automation:\n\n• Auto-categorize incoming mail\n• Respond to routine queries\n• Extract data from attachments\n• Route to the right team\n\nOne client saves 6+ hours/day.\n\nWhat's your current email volume?`
    }

    if (lower.includes('integrat') || lower.includes('connect') || lower.includes('crm') || lower.includes('hubspot') || lower.includes('quickbooks')) {
      return `We integrate with:\n\n**CRMs:** HubSpot, Pipedrive, Salesforce\n**Accounting:** QuickBooks, Xero\n**Comms:** Gmail, Outlook, WhatsApp, Slack\n**Custom:** Almost any API\n\nWhat systems do you use?`
    }

    if (lower.includes('hi') || lower.includes('hello') || lower.includes('hey')) {
      return `Hey! 👋 How can I help?\n\nI can tell you about:\n• Pricing & packages\n• Voice AI for calls\n• Email automation\n• Scheduling a demo`
    }

    return `I can help with:\n\n💰 **Pricing** — Our packages & what's included\n🎯 **Demo** — Schedule a walkthrough\n📞 **Voice AI** — Phone automation\n📧 **Email** — Inbox automation\n🔌 **Integrations** — What we connect to\n\nWhat interests you?`
  }

  const sendMessage = () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    const userInput = input.trim()
    setInput('')
    setIsLoading(true)

    // Simulate brief delay for natural feel
    setTimeout(() => {
      const response = getResponse(userInput)
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, assistantMessage])
      setIsLoading(false)
    }, 500)
  }

  return (
    <>
      {/* Chat Bubble */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setIsOpen(true)}
            className="chat-bubble fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full bg-gradient-to-r from-primary-500 to-accent-purple shadow-lg shadow-primary-500/25 flex items-center justify-center hover:shadow-xl hover:shadow-primary-500/30 transition-shadow cursor-pointer"
          >
            <MessageSquare className="w-6 h-6 text-white" />
            <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-dark-950" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-6 right-6 z-[9999] w-96 h-[32rem] bg-dark-900 border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-dark-900">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-purple flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">Pivot</div>
                  <div className="text-xs text-green-400 flex items-center space-x-1">
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                    <span>Online</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <a
                  href="tel:+13478030812"
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  title="Call us"
                >
                  <Phone className="w-5 h-5 text-primary-400" />
                </a>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-primary-500 to-accent-purple text-white rounded-br-md'
                        : 'bg-dark-800 text-white rounded-bl-md'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.content}</p>
                    <p className="text-xs opacity-50 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-dark-800 p-3 rounded-2xl rounded-bl-md">
                    <Loader2 className="w-5 h-5 animate-spin text-primary-400" />
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10 bg-dark-900">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Type a message..."
                  className="flex-1 bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-dark-400
                             focus:outline-none focus:border-primary-500 transition-colors"
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading}
                  className="p-3 bg-gradient-to-r from-primary-500 to-accent-purple rounded-xl
                             hover:shadow-lg hover:shadow-primary-500/25 transition-all
                             disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5 text-white" />
                </button>
              </div>
              <p className="text-xs text-dark-500 mt-2 text-center">
                Powered by Pivot AI • <a href="tel:+13478030812" className="text-primary-400 hover:underline">Call us</a>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// Global type declaration
declare global {
  interface Window {
    openPivotChat?: () => void
  }
}
