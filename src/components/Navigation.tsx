import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Bot, ChevronRight, Menu, X } from 'lucide-react'

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-purple flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Denivra</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Products Dropdown */}
            <div className="relative group">
              <button 
                className="text-dark-300 hover:text-white transition-colors flex items-center space-x-1"
                aria-haspopup="true"
                aria-expanded="false"
                aria-label="Products menu"
              >
                <span>Products</span>
                <ChevronRight className="w-4 h-4 rotate-90" aria-hidden="true" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-dark-900 border border-white/10 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all shadow-xl">
                <Link to="/products/nous-assist" className="block px-4 py-3 text-sm text-dark-300 hover:text-white hover:bg-white/5 rounded-t-xl">
                  <div className="font-medium text-white">Nous Assist</div>
                  <div className="text-xs text-dark-400">Solo operations • $2,800</div>
                </Link>
                <Link to="/products/nous-connect" className="block px-4 py-3 text-sm text-dark-300 hover:text-white hover:bg-white/5">
                  <div className="font-medium text-white">Nous Connect</div>
                  <div className="text-xs text-dark-400">Growing teams • $7,500</div>
                </Link>
                <Link to="/products/nous-command" className="block px-4 py-3 text-sm text-dark-300 hover:text-white hover:bg-white/5">
                  <div className="font-medium text-white">Nous Command</div>
                  <div className="text-xs text-dark-400">Enterprise • Custom</div>
                </Link>
                <Link to="/products/voice-ai" className="block px-4 py-3 text-sm text-dark-300 hover:text-white hover:bg-white/5 rounded-b-xl border-t border-white/5">
                  <div className="font-medium text-white">Voice AI</div>
                  <div className="text-xs text-dark-400">Standalone phone agents</div>
                </Link>
              </div>
            </div>
            
            {/* Industries Dropdown */}
            <div className="relative group">
              <button 
                className="text-dark-300 hover:text-white transition-colors flex items-center space-x-1"
                aria-haspopup="true"
                aria-expanded="false"
                aria-label="Industries menu"
              >
                <span>Industries</span>
                <ChevronRight className="w-4 h-4 rotate-90" aria-hidden="true" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-dark-900 border border-white/10 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all shadow-xl">
                <Link to="/industries/cafe" className="block px-4 py-3 text-sm text-dark-300 hover:text-white hover:bg-white/5 rounded-t-xl">Cafés & Coffee Shops</Link>
                <Link to="/industries/cpa" className="block px-4 py-3 text-sm text-dark-300 hover:text-white hover:bg-white/5">CPA & Accounting</Link>
                <Link to="/industries/restaurant" className="block px-4 py-3 text-sm text-dark-300 hover:text-white hover:bg-white/5">Restaurants</Link>
                <Link to="/industries/salon" className="block px-4 py-3 text-sm text-dark-300 hover:text-white hover:bg-white/5">Salons & Spas</Link>
                <Link to="/industries/payroll" className="block px-4 py-3 text-sm text-dark-300 hover:text-white hover:bg-white/5">Payroll Services</Link>
                <Link to="/industries/realty" className="block px-4 py-3 text-sm text-dark-300 hover:text-white hover:bg-white/5 rounded-b-xl">Real Estate</Link>
              </div>
            </div>
            
            {/* Enterprise Dropdown */}
            <div className="relative group">
              <Link to="/solutions/enterprise" className="text-dark-300 hover:text-white transition-colors flex items-center space-x-1 font-medium">
                <span>Enterprise</span>
                <ChevronRight className="w-4 h-4 rotate-90" />
              </Link>
              <div className="absolute top-full left-0 mt-2 w-64 bg-dark-900 border border-white/10 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all shadow-xl">
                <Link to="/enterprise/baas-architecture" className="block px-4 py-3 text-sm text-dark-300 hover:text-white hover:bg-white/5 rounded-t-xl">
                  <div className="font-medium text-white">🏗️ BaaS Architecture</div>
                  <div className="text-xs text-dark-400">Partner ecosystems, FBO structures</div>
                </Link>
                <Link to="/enterprise/payment-infrastructure" className="block px-4 py-3 text-sm text-dark-300 hover:text-white hover:bg-white/5">
                  <div className="font-medium text-white">💳 Payment Infrastructure</div>
                  <div className="text-xs text-dark-400">Multi-rail orchestration</div>
                </Link>
                <Link to="/enterprise/compliance-automation" className="block px-4 py-3 text-sm text-dark-300 hover:text-white hover:bg-white/5">
                  <div className="font-medium text-white">⚖️ Compliance Automation</div>
                  <div className="text-xs text-dark-400">AML/BSA, zero audit findings</div>
                </Link>
                <Link to="/enterprise/legacy-modernization" className="block px-4 py-3 text-sm text-dark-300 hover:text-white hover:bg-white/5">
                  <div className="font-medium text-white">🔄 Legacy Modernization</div>
                  <div className="text-xs text-dark-400">AI-assisted code analysis</div>
                </Link>
                <Link to="/solutions/enterprise" className="block px-4 py-3 text-sm text-primary-400 hover:text-primary-300 hover:bg-white/5 rounded-b-xl border-t border-white/5">
                  View All Services →
                </Link>
              </div>
            </div>
            
            <Link to="/pricing" className="text-dark-300 hover:text-white transition-colors">Pricing</Link>
            <Link to="/case-studies" className="text-dark-300 hover:text-white transition-colors">Case Studies</Link>
            <Link
              to="/contact"
              className="px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-purple rounded-lg font-medium hover:shadow-lg hover:shadow-primary-500/25 transition-all"
            >
              Book Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-dark-900 border-b border-white/10 shadow-xl">
          <div className="px-4 py-4 space-y-4">
            <div className="space-y-2">
              <div className="text-xs text-dark-400 uppercase tracking-wider">Products</div>
              <Link to="/products/nous-assist" className="block py-2 text-dark-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Nous Assist</Link>
              <Link to="/products/nous-connect" className="block py-2 text-dark-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Nous Connect</Link>
              <Link to="/products/nous-command" className="block py-2 text-dark-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Nous Command</Link>
              <Link to="/products/voice-ai" className="block py-2 text-dark-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Voice AI</Link>
            </div>
            
            <div className="space-y-2">
              <div className="text-xs text-dark-400 uppercase tracking-wider">Industries</div>
              <Link to="/industries/cafe" className="block py-2 text-dark-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Cafés & Coffee</Link>
              <Link to="/industries/cpa" className="block py-2 text-dark-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>CPA & Accounting</Link>
              <Link to="/industries/restaurant" className="block py-2 text-dark-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Restaurants</Link>
              <Link to="/industries/salon" className="block py-2 text-dark-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Salons & Spas</Link>
              <Link to="/industries/payroll" className="block py-2 text-dark-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Payroll</Link>
              <Link to="/industries/realty" className="block py-2 text-dark-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Real Estate</Link>
            </div>
            
            <div className="space-y-2">
              <div className="text-xs text-dark-400 uppercase tracking-wider">Enterprise</div>
              <Link to="/solutions/enterprise" className="block py-2 text-dark-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>All Services</Link>
            </div>
            
            <div className="pt-4 border-t border-white/10 space-y-2">
              <Link to="/pricing" className="block py-2 text-dark-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
              <Link to="/case-studies" className="block py-2 text-dark-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Case Studies</Link>
              <Link
                to="/contact"
                className="block w-full text-center px-4 py-3 bg-gradient-to-r from-primary-500 to-accent-purple rounded-lg font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
