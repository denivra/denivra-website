import { Link } from 'react-router-dom'
import { ArrowLeft, Bot } from 'lucide-react'
import { ChatWidget } from '../../components/ChatWidget'

export function TermsPage() {
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

          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-dark-300">Last updated: February 1, 2025</p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using Denivra's services, you agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use our services.
            </p>

            <h2>2. Description of Services</h2>
            <p>
              Denivra provides AI-powered automation services including but not limited to:
            </p>
            <ul>
              <li>Voice AI agents for phone automation</li>
              <li>Email automation and triage</li>
              <li>Chat and messaging automation</li>
              <li>Workflow automation and integration</li>
              <li>Analytics and reporting</li>
            </ul>

            <h2>3. Account Registration</h2>
            <p>
              To use certain features, you may need to create an account. You agree to:
            </p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized access</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>

            <h2>4. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use our services for any illegal purpose</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit harmful code or malware</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use our services to harass, abuse, or harm others</li>
              <li>Resell or redistribute our services without authorization</li>
            </ul>

            <h2>5. Payment Terms</h2>
            <p>
              For paid services:
            </p>
            <ul>
              <li>Fees are as quoted at time of purchase</li>
              <li>Payment is due upon invoice unless otherwise agreed</li>
              <li>All fees are non-refundable unless specified</li>
              <li>We reserve the right to modify pricing with notice</li>
            </ul>

            <h2>6. Intellectual Property</h2>
            <p>
              All intellectual property rights in our services, including software, designs, and content, 
              remain our property. You receive a limited license to use our services as intended.
            </p>

            <h2>7. Data and Privacy</h2>
            <p>
              Your use of our services is also governed by our <Link to="/privacy" className="text-primary-400">Privacy Policy</Link>. 
              You retain ownership of your data and grant us license to process it to provide our services.
            </p>

            <h2>8. Disclaimers</h2>
            <p>
              Our services are provided "as is" without warranties of any kind. We do not guarantee:
            </p>
            <ul>
              <li>Uninterrupted or error-free service</li>
              <li>Specific results or outcomes</li>
              <li>Compatibility with all systems</li>
            </ul>

            <h2>9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Denivra shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages arising from your use of our services.
            </p>

            <h2>10. Indemnification</h2>
            <p>
              You agree to indemnify and hold Denivra harmless from any claims, damages, or expenses 
              arising from your use of our services or violation of these terms.
            </p>

            <h2>11. Termination</h2>
            <p>
              We may suspend or terminate your access to our services at any time for violation of 
              these terms or for any other reason with notice.
            </p>

            <h2>12. Governing Law</h2>
            <p>
              These terms shall be governed by the laws of the State of New Jersey, United States, 
              without regard to conflict of law principles.
            </p>

            <h2>13. Changes to Terms</h2>
            <p>
              We may modify these terms at any time. Continued use of our services after changes 
              constitutes acceptance of the modified terms.
            </p>

            <h2>14. Contact</h2>
            <p>
              For questions about these terms, contact us at:
            </p>
            <p>
              <strong>Email:</strong> legal@denivra.com<br />
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
