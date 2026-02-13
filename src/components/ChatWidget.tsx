import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send, Bot, Loader2, Phone, PhoneCall } from 'lucide-react'
import { detectIntent, productInfo } from '../data/chatbotKnowledge'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

// Try to get a response from the knowledge base
function getKnowledgeResponse(userInput: string): string | null {
  const intent = detectIntent(userInput)
  const lowerInput = userInput.toLowerCase()
  
  // Handle based on detected intent
  if (intent === 'pricing') {
    return `Our packages:\n\n**${productInfo.nousAssist.name}** — ${productInfo.nousAssist.price}\n${productInfo.nousAssist.tagline}\n\n**${productInfo.nousConnect.name}** — ${productInfo.nousConnect.price} (Most Popular)\n${productInfo.nousConnect.tagline}\n\n**${productInfo.nousCommand.name}** — ${productInfo.nousCommand.price}\n${productInfo.nousCommand.tagline}\n\nAll include one-time setup. Which tier interests you?`
  }
  
  if (intent === 'demo') {
    return `Great! I can help you schedule a demo:\n\n1. 📅 Book directly: calendly.com/denivra/demo\n2. 📧 Email: info@denivra.com\n3. 📞 Call: +1 (347) 803-0812\n\nOr tell me your preferred time and I'll arrange it!`
  }
  
  if (intent === 'voice_ai') {
    return `Our Voice AI agents handle calls 24/7:\n\n• Answer customer inquiries\n• Qualify leads automatically\n• Book appointments\n• Handle support tickets\n\n**Clients see 60% cost reduction** in call center ops.\n\nWant to hear a demo call, or discuss your use case?`
  }
  
  if (intent === 'email') {
    return `Our email automation:\n\n• Triage & categorize incoming mail\n• Auto-respond to common queries\n• Extract data from attachments\n• Route to the right team\n\n**One client saves 6+ hours/day** on email.\n\nWhat does your current email volume look like?`
  }
  
  if (intent === 'integration') {
    return `We integrate with:\n\n**CRMs:** HubSpot, Pipedrive, Salesforce\n**Accounting:** QuickBooks, Xero\n**Comms:** Gmail, Outlook, WhatsApp, Slack\n**Custom:** Almost any API\n\nWhat systems are you currently using?`
  }
  
  return null
}

// Generate session ID
function generateSessionId(): string {
  return 'sess_' + Math.random().toString(36).substring(2, 15) + Date.now().toString(36)
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [showCallOption, setShowCallOption] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hi! I'm Pivot, Denivra's AI assistant. I can help you understand our products, calculate your potential ROI, or schedule a demo. What would you like to know?",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [sessionId] = useState(() => generateSessionId())
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    const userInput = input.trim()
    setInput('')
    setIsLoading(true)

    try {
      // First try to get a local knowledge base response
      const knowledgeResponse = getKnowledgeResponse(userInput)
      
      if (knowledgeResponse) {
        // Use knowledge base response (instant)
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: knowledgeResponse,
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, assistantMessage])
      } else {
        // Try to connect to Pivot via API
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            message: userInput,
            sessionId,
          }),
        })

        let assistantContent: string

        if (response.ok) {
          const data = await response.json()
          assistantContent = data.message
        } else {
          // Fallback response
          assistantContent = getFallbackResponse(userInput)
        }

        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: assistantContent,
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, assistantMessage])
      }

      // Show call option after a few exchanges
      if (messages.length >= 4 && !showCallOption) {
        setShowCallOption(true)
      }
    } catch (error) {
      console.error('Chat error:', error)
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: getFallbackResponse(userInput),
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
    } finally {
      setIsLoading(false)
    }
  }

  // Fallback response logic
  const getFallbackResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase()

    if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('pricing')) {
      return `Our packages start at $499 for Nous Assist, $2,499 for Nous Connect (most popular), and custom pricing for Nous Command (enterprise). All include one-time setup with optional monthly maintenance. Would you like me to explain what's included in each tier?`
    }

    if (lowerInput.includes('demo') || lowerInput.includes('trial') || lowerInput.includes('try')) {
      return `Great! I can help you schedule a demo. You can:\n\n1. 📅 Book directly at calendly.com/denivra/demo\n2. 📧 Email us at info@denivra.com\n3. 💬 Tell me your preferred time and I'll pass it to the team\n\nWhich works best for you?`
    }

    if (lowerInput.includes('voice') || lowerInput.includes('phone') || lowerInput.includes('call')) {
      return `Our Voice AI agents use Vapi and Twilio to handle calls 24/7. They can:\n\n• Answer customer inquiries\n• Qualify leads\n• Book appointments\n• Handle support tickets\n\nClients typically see a 60% reduction in call center costs. Want to hear a demo call?`
    }

    if (lowerInput.includes('email') || lowerInput.includes('inbox')) {
      return `Our email automation uses AI to:\n\n• Triage and categorize incoming emails\n• Auto-respond to common queries\n• Extract data from attachments\n• Route important emails to the right team\n\nOne client saves 6+ hours/day on email processing. Would you like to see how it works?`
    }

    if (lowerInput.includes('roi') || lowerInput.includes('save') || lowerInput.includes('savings')) {
      return `Check out our ROI Calculator on this page! On average, Nous clients see:\n\n• 60% reduction in manual work\n• $5,000-15,000/month in savings\n• Payback within 2-3 months\n\nWant me to help you calculate your specific ROI?`
    }

    if (lowerInput.includes('integrat') || lowerInput.includes('connect') || lowerInput.includes('crm') || lowerInput.includes('quickbooks') || lowerInput.includes('hubspot')) {
      return `Nous integrates with:\n\n• CRMs: HubSpot, Pipedrive, Salesforce\n• Accounting: QuickBooks, Xero\n• Communication: Gmail, Outlook, WhatsApp, Slack\n• Calendars: Google Calendar, Outlook\n• Custom APIs: We can connect to almost anything!\n\nWhat systems do you currently use?`
    }

    if (lowerInput.includes('how') && lowerInput.includes('work')) {
      return `Here's how we deploy Nous:\n\n1️⃣ **Discovery** (1-2 days): We audit your workflows\n2️⃣ **Configuration** (3-5 days): We train AI on your data\n3️⃣ **Integration** (2-3 days): We connect to your systems\n4️⃣ **Launch** (1 day): Go live with monitoring\n\nTotal time: Usually under 2 weeks. Want to start with a discovery call?`
    }

    if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
      return `Hey! 👋 I'm Pivot. How can I help you today?\n\nI can tell you about:\n• Our AI automation products\n• Pricing and packages\n• How we work with clients\n• Scheduling a demo\n\nWhat interests you?`
    }

    return `Thanks for your question! Here's what I can help with:\n\n• 💰 **Pricing** - Our packages and what's included\n• 🎯 **Demo** - Schedule a live walkthrough\n• 📊 **ROI** - Calculate your potential savings\n• 🔌 **Integrations** - What systems we connect to\n• 📞 **Voice AI** - Our phone automation\n• 📧 **Email** - Inbox automation\n\nWhat interests you most?`
  }

  const handleCallRequest = () => {
    window.open('tel:+13478030812', '_self')
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
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-primary-500 to-accent-purple shadow-lg shadow-primary-500/25 flex items-center justify-center hover:shadow-xl hover:shadow-primary-500/30 transition-shadow"
          >
            <MessageSquare className="w-6 h-6 text-white" />
            {/* Notification dot */}
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
            className="fixed bottom-6 right-6 z-50 w-96 h-[32rem] bg-dark-900 border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-dark-900/50">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-purple flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Pivot</div>
                  <div className="text-xs text-green-400 flex items-center space-x-1">
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                    <span>Online</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleCallRequest}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  title="Call us"
                >
                  <Phone className="w-5 h-5 text-primary-400" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Call CTA (shown after engagement) */}
            {showCallOption && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="px-4 py-3 bg-primary-500/10 border-b border-primary-500/20"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <PhoneCall className="w-4 h-4 text-primary-400" />
                    <span className="text-sm">Prefer to talk? Our AI can assess your needs over a call.</span>
                  </div>
                  <a
                    href="tel:+13478030812"
                    className="px-3 py-1 bg-primary-500 rounded-lg text-sm font-medium hover:bg-primary-600 transition-colors"
                  >
                    Call Now
                  </a>
                </div>
              </motion.div>
            )}

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
            <div className="p-4 border-t border-white/10 bg-dark-900/50">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Type a message..."
                  className="flex-1 bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-sm
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
