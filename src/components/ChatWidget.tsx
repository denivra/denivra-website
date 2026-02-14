import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send, Bot, Phone, Calendar, DollarSign, Mic, Mail } from 'lucide-react'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
  streaming?: boolean
}

interface QuickAction {
  label: string
  value: string
  icon?: 'calendar' | 'pricing' | 'voice' | 'email'
}

const INITIAL_BUTTONS: QuickAction[] = [
  { label: 'View Pricing', value: 'What are your prices?', icon: 'pricing' },
  { label: 'Book Demo', value: 'I want to schedule a demo', icon: 'calendar' },
  { label: 'Voice AI', value: 'Tell me about voice AI', icon: 'voice' },
]

// Gateway WebSocket configuration
const WS_URL = 'wss://nikolaoss-mac-mini.tailc41dc1.ts.net'
const WS_TOKEN = '8ba1695d02a39d8e1b006668b6ef4d15671901c85926fd17'

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hey! 👋 I'm Pivot, Denivra's AI. How can I help?",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [sessionKey] = useState(() => `denivra-web:${Date.now()}-${Math.random().toString(36).slice(2, 8)}`)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const wsRef = useRef<WebSocket | null>(null)
  const reconnectTimeoutRef = useRef<NodeJS.Timeout>()
  const pendingMessageRef = useRef<string | null>(null)

  // Persist conversation in sessionStorage
  useEffect(() => {
    const saved = sessionStorage.getItem('pivot-chat')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        setMessages(parsed.messages.map((m: Message) => ({
          ...m,
          timestamp: new Date(m.timestamp)
        })))
      } catch {
        // Ignore parse errors
      }
    }
  }, [])

  useEffect(() => {
    if (messages.length > 1) {
      sessionStorage.setItem('pivot-chat', JSON.stringify({ messages }))
    }
  }, [messages])

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

  // WebSocket connection management
  const connectWebSocket = useCallback(() => {
    if (wsRef.current?.readyState === WebSocket.OPEN) return

    const ws = new WebSocket(WS_URL)
    wsRef.current = ws

    ws.onopen = () => {
      console.log('WebSocket connected')
      // Authenticate
      ws.send(JSON.stringify({ 
        type: 'auth', 
        token: WS_TOKEN,
        sessionKey,
        skillPaths: ['/Users/niko/clawd/skills/denivra-sales']
      }))
    }

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data)
        
        if (data.type === 'auth.ok') {
          setIsConnected(true)
          // Send pending message if any
          if (pendingMessageRef.current) {
            const msg = pendingMessageRef.current
            pendingMessageRef.current = null
            sendWebSocketMessage(msg)
          }
          return
        }

        if (data.type === 'auth.error') {
          console.error('Auth error:', data.error)
          setIsConnected(false)
          return
        }

        // Handle chat responses
        if (data.type === 'chat.response' || data.type === 'chat.chunk') {
          const content = data.content || data.text || data.message || ''
          
          setMessages(prev => {
            const lastMsg = prev[prev.length - 1]
            if (lastMsg?.streaming) {
              // Append to streaming message
              return [
                ...prev.slice(0, -1),
                { ...lastMsg, content: lastMsg.content + content }
              ]
            } else {
              // New assistant message
              return [
                ...prev,
                {
                  id: Date.now().toString(),
                  role: 'assistant',
                  content,
                  timestamp: new Date(),
                  streaming: true
                }
              ]
            }
          })
        }

        if (data.type === 'chat.done' || data.type === 'chat.end') {
          setMessages(prev => {
            const lastMsg = prev[prev.length - 1]
            if (lastMsg?.streaming) {
              return [
                ...prev.slice(0, -1),
                { ...lastMsg, streaming: false }
              ]
            }
            return prev
          })
          setIsLoading(false)
        }

        if (data.type === 'error') {
          console.error('Chat error:', data.error)
          setIsLoading(false)
          // Add error message
          setMessages(prev => [
            ...prev,
            {
              id: Date.now().toString(),
              role: 'assistant',
              content: "Connection issue. Please try again or reach us at +1 (347) 803-0812.",
              timestamp: new Date()
            }
          ])
        }
      } catch (e) {
        console.error('Message parse error:', e)
      }
    }

    ws.onclose = () => {
      console.log('WebSocket closed')
      setIsConnected(false)
      // Reconnect after delay if chat is open
      if (isOpen) {
        reconnectTimeoutRef.current = setTimeout(connectWebSocket, 3000)
      }
    }

    ws.onerror = (error) => {
      console.error('WebSocket error:', error)
      setIsConnected(false)
    }
  }, [isOpen, sessionKey])

  // Connect when chat opens
  useEffect(() => {
    if (isOpen && !wsRef.current) {
      connectWebSocket()
    }
    return () => {
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current)
      }
    }
  }, [isOpen, connectWebSocket])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (wsRef.current) {
        wsRef.current.close()
      }
    }
  }, [])

  const sendWebSocketMessage = (text: string) => {
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({
        type: 'chat.send',
        sessionKey,
        message: text,
        context: {
          source: 'denivra-website',
          skill: 'denivra-sales'
        }
      }))
    }
  }

  const sendMessage = async (messageText?: string) => {
    const text = messageText || input.trim()
    if (!text || isLoading) return

    // Handle special LINK: prefix
    if (text.startsWith('LINK:')) {
      window.open(text.replace('LINK:', ''), '_blank')
      return
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    if (isConnected && wsRef.current?.readyState === WebSocket.OPEN) {
      sendWebSocketMessage(text)
    } else {
      // Queue message for when connection is ready
      pendingMessageRef.current = text
      connectWebSocket()
      
      // Fallback after timeout
      setTimeout(() => {
        if (pendingMessageRef.current) {
          pendingMessageRef.current = null
          setIsLoading(false)
          setMessages(prev => [
            ...prev,
            {
              id: Date.now().toString(),
              role: 'assistant',
              content: "I'm having trouble connecting. You can reach us directly:\n\n📞 **Call:** +1 (347) 803-0812\n📧 **Email:** info@denivra.com\n📅 **Book:** calendly.com/bsa-denivra/30min",
              timestamp: new Date()
            }
          ])
        }
      }, 10000)
    }
  }

  const handleQuickAction = (action: QuickAction) => {
    sendMessage(action.value)
  }

  const getButtonIcon = (icon?: string) => {
    switch (icon) {
      case 'calendar': return <Calendar className="w-3 h-3" />
      case 'pricing': return <DollarSign className="w-3 h-3" />
      case 'voice': return <Mic className="w-3 h-3" />
      case 'email': return <Mail className="w-3 h-3" />
      default: return null
    }
  }

  const formatContent = (content: string) => {
    return content
      .split('\n')
      .map((line) => {
        // Bold
        line = line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        // Italic
        line = line.replace(/\*(.+?)\*/g, '<em>$1</em>')
        // Links
        line = line.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" class="text-primary-400 hover:underline">$1</a>')
        // Plain URLs
        line = line.replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" class="text-primary-400 hover:underline">$1</a>')
        // Bullet points
        if (line.startsWith('• ') || line.startsWith('- ') || line.startsWith('✅ ') || line.startsWith('✓ ')) {
          return `<div class="ml-2">${line}</div>`
        }
        if (line.match(/^<strong>.+<\/strong>$/)) {
          return `<div class="mt-2 mb-1">${line}</div>`
        }
        return line
      })
      .join('<br />')
  }

  const showQuickActions = messages.length === 1

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
            className="chat-bubble fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full bg-gradient-to-r from-primary-500 to-accent-purple shadow-lg shadow-primary-500/25 flex items-center justify-center hover:shadow-xl hover:shadow-primary-500/30 transition-shadow cursor-pointer group"
          >
            <MessageSquare className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-dark-950 animate-pulse" />
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
            className="fixed bottom-6 right-6 z-[9999] w-96 max-w-[calc(100vw-3rem)] h-[32rem] max-h-[calc(100vh-6rem)] bg-dark-900 border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-dark-900 to-dark-800">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-purple flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">Pivot</div>
                  <div className={`text-xs flex items-center space-x-1 ${isConnected ? 'text-green-400' : 'text-yellow-400'}`}>
                    <span className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-400 animate-pulse' : 'bg-yellow-400'}`} />
                    <span>{isConnected ? 'Online' : 'Connecting...'}</span>
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
              {messages.map((message, idx) => (
                <div key={message.id}>
                  <div
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] p-3 rounded-2xl ${
                        message.role === 'user'
                          ? 'bg-gradient-to-r from-primary-500 to-accent-purple text-white rounded-br-md'
                          : 'bg-dark-800 text-white rounded-bl-md'
                      }`}
                    >
                      <div 
                        className="text-sm leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: formatContent(message.content) }}
                      />
                      {!message.streaming && (
                        <p className="text-xs opacity-40 mt-2">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  {/* Quick Action Buttons */}
                  {message.role === 'assistant' && idx === 0 && showQuickActions && (
                    <div className="flex flex-wrap gap-2 mt-2 ml-1">
                      {INITIAL_BUTTONS.map((btn, bidx) => (
                        <button
                          key={bidx}
                          onClick={() => handleQuickAction(btn)}
                          disabled={isLoading}
                          className="inline-flex items-center space-x-1 px-3 py-1.5 text-xs font-medium 
                                     bg-dark-800 hover:bg-dark-700 border border-white/10 hover:border-primary-500/50
                                     rounded-full text-white/80 hover:text-white transition-all
                                     disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {getButtonIcon(btn.icon)}
                          <span>{btn.label}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {isLoading && !messages[messages.length - 1]?.streaming && (
                <div className="flex justify-start">
                  <div className="bg-dark-800 p-3 rounded-2xl rounded-bl-md">
                    <div className="flex space-x-1">
                      <span className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
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
                  disabled={isLoading}
                />
                <button
                  onClick={() => sendMessage()}
                  disabled={!input.trim() || isLoading}
                  className="p-3 bg-gradient-to-r from-primary-500 to-accent-purple rounded-xl
                             hover:shadow-lg hover:shadow-primary-500/25 transition-all
                             disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5 text-white" />
                </button>
              </div>
              <p className="text-xs text-dark-500 mt-2 text-center">
                Powered by Pivot AI • <a href="tel:+13478030812" className="text-primary-400 hover:underline">Call</a> • <a href="mailto:info@denivra.com" className="text-primary-400 hover:underline">Email</a>
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
