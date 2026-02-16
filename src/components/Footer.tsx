import { Link } from 'react-router-dom'
import { Bot } from 'lucide-react'

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-purple flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Denivra</span>
            </Link>
            <p className="text-dark-400 text-sm">
              Your AI employee that never sleeps.<br/>
              Local-first automation for real businesses.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-dark-400 text-sm">
              <li><Link to="/products/nous-solo" className="hover:text-white transition-colors">Nous Solo &mdash; from $2,800</Link></li>
              <li><Link to="/products/nous-pro" className="hover:text-white transition-colors">Nous Pro &mdash; from $4,800</Link></li>
              <li><Link to="/products/nous-enterprise" className="hover:text-white transition-colors">Nous Enterprise &mdash; from $7,500</Link></li>
              <li><Link to="/products/voice-ai" className="hover:text-white transition-colors">Voice AI Agents</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Industries</h4>
            <ul className="space-y-2 text-dark-400 text-sm">
              <li><Link to="/industries/cafe" className="hover:text-white transition-colors">Cafes & Coffee</Link></li>
              <li><Link to="/industries/salon" className="hover:text-white transition-colors">Salons & Spas</Link></li>
              <li><Link to="/industries/cpa" className="hover:text-white transition-colors">CPA & Accounting</Link></li>
              <li><Link to="/industries/restaurant" className="hover:text-white transition-colors">Restaurants</Link></li>
              <li><Link to="/industries/realty" className="hover:text-white transition-colors">Real Estate</Link></li>
              <li><Link to="/industries/payroll" className="hover:text-white transition-colors">Payroll Services</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-dark-400 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><a href="mailto:info@denivra.com" className="hover:text-white transition-colors">info@denivra.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-dark-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Denivra Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
