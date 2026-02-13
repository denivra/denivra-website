import type { Handler } from '@netlify/functions'

const CLAWDBOT_ENDPOINT = process.env.CLAWDBOT_WEBCHAT_URL || 'https://nikolaoss-mac-mini.tailc41dc1.ts.net/chat'
const CLAWDBOT_TOKEN = process.env.CLAWDBOT_WEBCHAT_TOKEN

interface ChatRequest {
  message: string
  sessionId?: string
}

export const handler: Handler = async (event) => {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
  }

  // Handle preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' }
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    }
  }

  try {
    const { message, sessionId } = JSON.parse(event.body || '{}') as ChatRequest

    if (!message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Message is required' }),
      }
    }

    // Forward to Clawdbot webchat endpoint
    const response = await fetch(CLAWDBOT_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(CLAWDBOT_TOKEN && { 'Authorization': `Bearer ${CLAWDBOT_TOKEN}` }),
      },
      body: JSON.stringify({
        message,
        sessionId,
        metadata: {
          source: 'denivra-website',
          channel: 'webchat',
        },
      }),
    })

    if (!response.ok) {
      throw new Error(`Clawdbot responded with ${response.status}`)
    }

    const data = await response.json()

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        message: data.response || data.message || data.text,
        sessionId: data.sessionId,
      }),
    }
  } catch (error) {
    console.error('Chat error:', error)
    
    // Return a fallback response so the chat doesn't break
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        message: "I'm having trouble connecting right now. Please try again in a moment, or email us at info@denivra.com.",
        fallback: true,
      }),
    }
  }
}
