/**
 * Denivra Content Generator
 * 
 * Automated content generation for blog posts and case studies.
 * Run via Clawdbot cron jobs twice daily.
 * 
 * Usage:
 *   npx ts-node automation/content-generator.ts --type=blog
 *   npx ts-node automation/content-generator.ts --type=case-study
 */

import * as fs from 'fs'
import * as path from 'path'

interface BlogPostDraft {
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  tags: string[]
  sourceUrl?: string
  sourceTitle?: string
}

interface CaseStudyDraft {
  title: string
  slug: string
  client: string
  industry: string
  challenge: string
  solution: string
  results: { metric: string; value: string; description: string }[]
  sourceContext?: string
}

// Content templates for wrapping AI news into Denivra-style content
const blogTemplates = {
  'ai-development': {
    intro: `The AI landscape is moving fast. Here's what caught our attention and how it applies to business automation.`,
    denivraAngle: `At Denivra, we're watching these developments closely because they directly impact what we can build for our clients.`,
    cta: `Want to explore how this technology could work for your business? [Chat with Pivot](/chat) or [book a demo](/demo).`,
  },
  'use-case': {
    intro: `Real-world AI applications are proving their value every day. Here's an interesting example and what it means for businesses like yours.`,
    denivraAngle: `This is exactly the kind of automation we help businesses implement — practical AI that delivers measurable ROI.`,
    cta: `See similar results with Nous. [Check out our case studies](/case-studies) or [calculate your ROI](/roi).`,
  },
  'trend-analysis': {
    intro: `Market trends tell us where AI automation is heading. Here's our analysis of what's happening and why it matters.`,
    denivraAngle: `These trends shape our product roadmap at Denivra. We build ahead of the curve so you can stay competitive.`,
    cta: `Stay ahead with Nous. [Explore our products](/products) or [talk to us](/demo).`,
  },
}

// Transform raw AI news into Denivra-wrapped content
function wrapContentForDenivra(
  rawContent: string, 
  sourceTitle: string, 
  sourceUrl: string,
  category: 'ai-development' | 'use-case' | 'trend-analysis'
): BlogPostDraft {
  const template = blogTemplates[category]
  const slug = sourceTitle
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 60)

  // Generate Denivra-flavored title
  const denivraTitle = transformTitle(sourceTitle)

  const content = `
${template.intro}

---

## The Development

${rawContent}

*Source: [${sourceTitle}](${sourceUrl})*

---

## The Denivra Take

${template.denivraAngle}

### What This Means for Your Business

**Immediate Opportunities:**
- Automation potential in your existing workflows
- Cost reduction through AI-assisted processes
- Competitive advantage from early adoption

**What to Watch:**
- How this integrates with your current systems
- Timeline for practical implementation
- ROI considerations

---

${template.cta}
`

  return {
    title: denivraTitle,
    slug: `${slug}-${Date.now()}`,
    excerpt: extractExcerpt(rawContent),
    content,
    category: mapToCategory(category),
    tags: extractTags(rawContent, sourceTitle),
    sourceUrl,
    sourceTitle,
  }
}

function transformTitle(originalTitle: string): string {
  // Make titles more actionable and Denivra-relevant
  const prefixes = [
    'How',
    'What',
    'Why',
    'The Business Case for',
    "Here's What",
    'What This Means:',
  ]
  
  // If title already starts with a good prefix, keep it
  if (prefixes.some(p => originalTitle.startsWith(p))) {
    return originalTitle
  }

  // Transform into a more engaging title
  return `What This Means for Your Business: ${originalTitle}`
}

function extractExcerpt(content: string): string {
  // Get first 200 chars, end at sentence boundary
  const clean = content.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim()
  const excerpt = clean.slice(0, 200)
  const lastPeriod = excerpt.lastIndexOf('.')
  return lastPeriod > 100 ? excerpt.slice(0, lastPeriod + 1) : excerpt + '...'
}

function mapToCategory(type: string): string {
  const mapping: Record<string, string> = {
    'ai-development': 'ai-trends',
    'use-case': 'automation',
    'trend-analysis': 'industry',
  }
  return mapping[type] || 'ai-trends'
}

function extractTags(content: string, title: string): string[] {
  const text = `${title} ${content}`.toLowerCase()
  const tagPatterns: Record<string, RegExp> = {
    'voice-ai': /voice|speech|call|phone/,
    'automation': /automat|workflow|process/,
    'llm': /gpt|claude|llm|language model/,
    'enterprise': /enterprise|fortune 500|corporate/,
    'smb': /small business|smb|startup/,
    'integration': /integrat|api|connect/,
    'customer-service': /customer service|support|helpdesk/,
    'document-processing': /document|invoice|ocr|pdf/,
    'cost-savings': /cost|sav|roi|reduction/,
  }

  const tags: string[] = []
  for (const [tag, pattern] of Object.entries(tagPatterns)) {
    if (pattern.test(text)) {
      tags.push(tag)
    }
  }

  return tags.slice(0, 5) // Max 5 tags
}

// Create case study from real-world AI implementation news
function createCaseStudyFromNews(
  newsContent: string,
  company: string,
  industry: string,
  results: { metric: string; value: string }[]
): CaseStudyDraft {
  const slug = company
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

  return {
    title: `How ${company} Automated Their Operations with AI`,
    slug: `${slug}-ai-automation-case-study`,
    client: company,
    industry,
    challenge: extractChallenge(newsContent),
    solution: wrapSolutionForDenivra(newsContent),
    results: results.map(r => ({
      ...r,
      description: generateResultDescription(r.metric, r.value),
    })),
    sourceContext: newsContent,
  }
}

function extractChallenge(content: string): string {
  // Extract the "before" state / problem from content
  const problemPatterns = [
    /challenged by ([^.]+)/i,
    /struggled with ([^.]+)/i,
    /faced ([^.]+)/i,
    /needed to ([^.]+)/i,
  ]

  for (const pattern of problemPatterns) {
    const match = content.match(pattern)
    if (match) {
      return match[1].trim()
    }
  }

  return 'Manual processes consuming significant time and resources'
}

function wrapSolutionForDenivra(content: string): string {
  return `Implemented AI automation using a combination of modern LLMs and workflow orchestration — similar to what Nous provides. The solution focused on practical, measurable outcomes rather than theoretical capabilities.`
}

function generateResultDescription(metric: string, value: string): string {
  const descriptions: Record<string, string> = {
    'time': 'Hours saved through automation',
    'cost': 'Reduction in operational costs',
    'efficiency': 'Improvement in process efficiency',
    'accuracy': 'Increase in accuracy/quality',
    'speed': 'Faster processing time',
  }

  const key = Object.keys(descriptions).find(k => 
    metric.toLowerCase().includes(k)
  )

  return descriptions[key || 'efficiency'] || metric
}

// File management
function saveDraft(draft: BlogPostDraft | CaseStudyDraft, type: 'blog' | 'case-study'): void {
  const draftsDir = path.join(__dirname, '..', 'content-drafts', type)
  
  if (!fs.existsSync(draftsDir)) {
    fs.mkdirSync(draftsDir, { recursive: true })
  }

  const filename = `${draft.slug}.json`
  const filepath = path.join(draftsDir, filename)

  fs.writeFileSync(filepath, JSON.stringify(draft, null, 2))
  console.log(`Saved draft: ${filepath}`)
}

function loadDrafts(type: 'blog' | 'case-study'): (BlogPostDraft | CaseStudyDraft)[] {
  const draftsDir = path.join(__dirname, '..', 'content-drafts', type)
  
  if (!fs.existsSync(draftsDir)) {
    return []
  }

  const files = fs.readdirSync(draftsDir).filter(f => f.endsWith('.json'))
  return files.map(f => {
    const content = fs.readFileSync(path.join(draftsDir, f), 'utf-8')
    return JSON.parse(content)
  })
}

// Export functions for use by Clawdbot cron jobs
export {
  wrapContentForDenivra,
  createCaseStudyFromNews,
  saveDraft,
  loadDrafts,
  BlogPostDraft,
  CaseStudyDraft,
}

// CLI entry point
if (require.main === module) {
  const args = process.argv.slice(2)
  const typeArg = args.find(a => a.startsWith('--type='))
  const type = typeArg?.split('=')[1] || 'blog'

  console.log(`Content Generator - Type: ${type}`)
  console.log('This script is designed to be called by Clawdbot with AI news context.')
  console.log('Direct execution requires news data input.')
  
  // List existing drafts
  const drafts = loadDrafts(type as 'blog' | 'case-study')
  console.log(`\nExisting ${type} drafts: ${drafts.length}`)
  drafts.forEach(d => console.log(`  - ${d.title}`))
}
