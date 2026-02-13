import type { Handler } from '@netlify/functions'

const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY
const HUBSPOT_PORTAL_ID = process.env.HUBSPOT_PORTAL_ID
const CLAWDBOT_WEBHOOK = process.env.CLAWDBOT_CONTACT_WEBHOOK
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'info@denivra.com'

interface ContactRequest {
  firstName: string
  lastName: string
  email: string
  company?: string
  phone?: string
  interest?: string
  budget?: string
  message: string
  source?: string
  timestamp?: string
}

export const handler: Handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
  }

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
    const data = JSON.parse(event.body || '{}') as ContactRequest

    if (!data.email || !data.firstName || !data.message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing required fields' }),
      }
    }

    const results: { hubspot?: boolean; webhook?: boolean } = {}

    // 1. Send to HubSpot
    if (HUBSPOT_API_KEY && HUBSPOT_PORTAL_ID) {
      try {
        const hubspotResponse = await fetch(
          `https://api.hubapi.com/crm/v3/objects/contacts`,
          {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              properties: {
                firstname: data.firstName,
                lastname: data.lastName,
                email: data.email,
                company: data.company,
                phone: data.phone,
                message: data.message,
                hs_lead_status: 'NEW',
                lead_source: 'Website Contact Form',
                budget: data.budget,
                interest: data.interest,
              },
            }),
          }
        )

        results.hubspot = hubspotResponse.ok

        // If contact exists, update instead
        if (hubspotResponse.status === 409) {
          // Contact exists - try to create a note/engagement instead
          console.log('Contact already exists in HubSpot')
          results.hubspot = true
        }
      } catch (hubspotError) {
        console.error('HubSpot error:', hubspotError)
        results.hubspot = false
      }
    }

    // 2. Send to Clawdbot webhook for notification
    if (CLAWDBOT_WEBHOOK) {
      try {
        const webhookResponse = await fetch(CLAWDBOT_WEBHOOK, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: 'contact_form_submission',
            data: {
              ...data,
              submittedAt: new Date().toISOString(),
            },
            notification: {
              title: `New Lead: ${data.firstName} ${data.lastName}`,
              body: `${data.company || 'Individual'} - ${data.interest || 'General inquiry'}\n${data.message.slice(0, 200)}...`,
              priority: 'high',
            },
          }),
        })
        results.webhook = webhookResponse.ok
      } catch (webhookError) {
        console.error('Webhook error:', webhookError)
        results.webhook = false
      }
    }

    // Log the submission
    console.log('Contact form submission:', {
      email: data.email,
      company: data.company,
      interest: data.interest,
      results,
    })

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: 'Thank you! We\'ll be in touch within 2 hours.',
        results,
      }),
    }
  } catch (error) {
    console.error('Contact form error:', error)
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Failed to process submission',
        message: 'Please email us directly at info@denivra.com',
      }),
    }
  }
}
