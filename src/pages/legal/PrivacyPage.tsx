import { Link } from 'react-router-dom'
import { ArrowLeft, Bot } from 'lucide-react'
import { ChatWidget } from '../../components/ChatWidget'

export function PrivacyPage() {
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
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center space-x-2 text-dark-400 hover:text-white mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-dark-300">Last updated: February 1, 2025</p>

            <h2>1. Introduction</h2>
            <p>
              Denivra Inc. ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. 
              This privacy policy explains how we collect, use, and safeguard your information when you use our services.
            </p>

            <h2>2. Information We Collect</h2>
            <h3>Information you provide:</h3>
            <ul>
              <li>Contact information (name, email, phone number)</li>
              <li>Company information</li>
              <li>Communication preferences</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3>Information collected automatically:</h3>
            <ul>
              <li>Device and browser information</li>
              <li>IP address and location data</li>
              <li>Usage data and analytics</li>
              <li>Cookies and similar technologies</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Provide and improve our services</li>
              <li>Communicate with you about our products</li>
              <li>Process transactions and send related information</li>
              <li>Send promotional communications (with your consent)</li>
              <li>Analyze usage patterns to improve user experience</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>4. Data Sharing</h2>
            <p>
              We do not sell your personal data. We may share your information with:
            </p>
            <ul>
              <li>Service providers who assist in our operations</li>
              <li>Professional advisors (lawyers, accountants)</li>
              <li>Law enforcement when required by law</li>
            </ul>

            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data, including:
            </p>
            <ul>
              <li>Encryption in transit and at rest</li>
              <li>Access controls and authentication</li>
              <li>Regular security assessments</li>
              <li>Employee training on data protection</li>
            </ul>

            <h2>6. Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Delete your data</li>
              <li>Object to processing</li>
              <li>Data portability</li>
              <li>Withdraw consent</li>
            </ul>

            <h2>7. Cookies</h2>
            <p>
              We use cookies and similar technologies to enhance your experience. You can control cookie preferences 
              through your browser settings.
            </p>

            <h2>8. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any material changes 
              by posting the new policy on this page.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              If you have questions about this privacy policy or our data practices, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> privacy@denivra.com<br />
              <strong>Address:</strong> Denivra Inc., New Jersey, USA
            </p>
          </div>
        </div>
      </div>

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
