import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ErrorBoundary } from './components/ErrorBoundary'

// Use basename for GitHub Pages deployment
const basename = import.meta.env.BASE_URL || '/'

// Eager load - always needed
import App from './App'

// Lazy load all other pages for better performance
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })))
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })))
const PricingPage = lazy(() => import('./pages/PricingPage').then(m => ({ default: m.PricingPage })))
const ROICalculatorPage = lazy(() => import('./pages/ROICalculatorPage').then(m => ({ default: m.ROICalculatorPage })))
const AutomationsPage = lazy(() => import('./pages/AutomationsPage').then(m => ({ default: m.AutomationsPage })))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })))

// Solutions
const CallCentersPage = lazy(() => import('./pages/solutions/CallCentersPage').then(m => ({ default: m.CallCentersPage })))
const SmallBusinessPage = lazy(() => import('./pages/solutions/SmallBusinessPage').then(m => ({ default: m.SmallBusinessPage })))
const EnterprisePage = lazy(() => import('./pages/solutions/EnterprisePage').then(m => ({ default: m.EnterprisePage })))

// Enterprise Services
const ServicePage = lazy(() => import('./pages/enterprise/ServicePage').then(m => ({ default: m.ServicePage })))

// Products
const VoiceAIPage = lazy(() => import('./pages/products/VoiceAIPage').then(m => ({ default: m.VoiceAIPage })))
const ProductPage = lazy(() => import('./pages/products/ProductPage').then(m => ({ default: m.ProductPage })))

// Industries
const IndustryPage = lazy(() => import('./pages/industries/IndustryPage').then(m => ({ default: m.IndustryPage })))

// Case Studies
const CaseStudiesListPage = lazy(() => import('./pages/CaseStudiesListPage').then(m => ({ default: m.CaseStudiesListPage })))
const CaseStudyPage = lazy(() => import('./pages/CaseStudyPage').then(m => ({ default: m.CaseStudyPage })))

// Blog
const BlogListPage = lazy(() => import('./pages/blog/BlogListPage').then(m => ({ default: m.BlogListPage })))
const BlogPostPage = lazy(() => import('./pages/blog/BlogPostPage').then(m => ({ default: m.BlogPostPage })))

// Legal
const PrivacyPage = lazy(() => import('./pages/legal/PrivacyPage').then(m => ({ default: m.PrivacyPage })))
const TermsPage = lazy(() => import('./pages/legal/TermsPage').then(m => ({ default: m.TermsPage })))

// Loading fallback component
function PageLoader() {
  return (
    <div className="min-h-screen bg-dark-950 flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-dark-400 text-sm">Loading...</p>
      </div>
    </div>
  )
}

export function Router() {
  return (
    <BrowserRouter basename={basename}>
      <ErrorBoundary>
        <Suspense fallback={<PageLoader />}>
          <Routes>
          {/* Main */}
          <Route path="/" element={<App />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/roi-calculator" element={<ROICalculatorPage />} />
          
          {/* Solutions */}
          <Route path="/solutions/call-centers" element={<CallCentersPage />} />
          <Route path="/solutions/small-business" element={<SmallBusinessPage />} />
          <Route path="/solutions/enterprise" element={<EnterprisePage />} />
          
          {/* Enterprise Services */}
          <Route path="/enterprise/baas-architecture" element={<ServicePage />} />
          <Route path="/enterprise/payment-infrastructure" element={<ServicePage />} />
          <Route path="/enterprise/onboarding-kyc" element={<ServicePage />} />
          <Route path="/enterprise/compliance-automation" element={<ServicePage />} />
          <Route path="/enterprise/middleware-integration" element={<ServicePage />} />
          <Route path="/enterprise/legacy-modernization" element={<ServicePage />} />
          <Route path="/enterprise/security-architecture" element={<ServicePage />} />
          <Route path="/enterprise/infrastructure" element={<ServicePage />} />
          <Route path="/enterprise/:serviceId" element={<ServicePage />} />
          
          {/* Products */}
          <Route path="/products/nous-assist" element={<ProductPage />} />
          <Route path="/products/nous-connect" element={<ProductPage />} />
          <Route path="/products/nous-command" element={<ProductPage />} />
          <Route path="/products/voice-ai" element={<VoiceAIPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          
          {/* Industries */}
          <Route path="/industries/cafe" element={<IndustryPage />} />
          <Route path="/industries/cpa" element={<IndustryPage />} />
          <Route path="/industries/restaurant" element={<IndustryPage />} />
          <Route path="/industries/salon" element={<IndustryPage />} />
          <Route path="/industries/payroll" element={<IndustryPage />} />
          <Route path="/industries/realty" element={<IndustryPage />} />
          <Route path="/industries/:slug" element={<IndustryPage />} />
          
          {/* Automations */}
          <Route path="/automations" element={<AutomationsPage />} />
          
          {/* Case Studies */}
          <Route path="/case-studies" element={<CaseStudiesListPage />} />
          <Route path="/case-studies/:slug" element={<CaseStudyPage />} />
          
          {/* Blog */}
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          
          {/* Legal */}
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          
          {/* 404 - Catch all */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  )
}
