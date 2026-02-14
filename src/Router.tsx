import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import { 
  CaseStudyPage, 
  CaseStudiesListPage, 
  ContactPage,
  AutomationsPage,
  AboutPage,
  PricingPage,
  ROICalculatorPage,
  // Solutions
  CallCentersPage,
  SmallBusinessPage,
  EnterprisePage,
  // Enterprise Services
  ServicePage,
  // Products
  VoiceAIPage,
  ProductPage,
  // Industries
  IndustryPage,
  // Blog
  BlogListPage,
  BlogPostPage,
  // Legal
  PrivacyPage,
  TermsPage,
} from './pages'

export function Router() {
  return (
    <BrowserRouter>
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
        
        {/* Products - New dynamic routes */}
        <Route path="/products/nous-assist" element={<ProductPage />} />
        <Route path="/products/nous-connect" element={<ProductPage />} />
        <Route path="/products/nous-command" element={<ProductPage />} />
        <Route path="/products/voice-ai" element={<VoiceAIPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        
        {/* Industries - Dynamic routes */}
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
      </Routes>
    </BrowserRouter>
  )
}
