import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ErrorBoundary } from './components/ErrorBoundary'
import { Layout } from './components/Layout'

const basename = import.meta.env.BASE_URL || '/'

const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })))
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })))
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })))
const PricingPage = lazy(() => import('./pages/PricingPage').then(m => ({ default: m.PricingPage })))
const ROICalculatorPage = lazy(() => import('./pages/ROICalculatorPage').then(m => ({ default: m.ROICalculatorPage })))
const AutomationsPage = lazy(() => import('./pages/AutomationsPage').then(m => ({ default: m.AutomationsPage })))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })))

const CallCentersPage = lazy(() => import('./pages/solutions/CallCentersPage').then(m => ({ default: m.CallCentersPage })))
const SmallBusinessPage = lazy(() => import('./pages/solutions/SmallBusinessPage').then(m => ({ default: m.SmallBusinessPage })))
const EnterprisePage = lazy(() => import('./pages/solutions/EnterprisePage').then(m => ({ default: m.EnterprisePage })))

const ServicePage = lazy(() => import('./pages/enterprise/ServicePage').then(m => ({ default: m.ServicePage })))

const VoiceAIPage = lazy(() => import('./pages/products/VoiceAIPage').then(m => ({ default: m.VoiceAIPage })))
const ProductPage = lazy(() => import('./pages/products/ProductPage').then(m => ({ default: m.ProductPage })))

const IndustryPage = lazy(() => import('./pages/industries/IndustryPage').then(m => ({ default: m.IndustryPage })))

const CaseStudiesListPage = lazy(() => import('./pages/CaseStudiesListPage').then(m => ({ default: m.CaseStudiesListPage })))
const CaseStudyPage = lazy(() => import('./pages/CaseStudyPage').then(m => ({ default: m.CaseStudyPage })))

const UseCasesPage = lazy(() => import('./pages/UseCasesPage').then(m => ({ default: m.UseCasesPage })))
const UseCaseDetailPage = lazy(() => import('./pages/UseCaseDetailPage').then(m => ({ default: m.UseCaseDetailPage })))

const BlogListPage = lazy(() => import('./pages/blog/BlogListPage').then(m => ({ default: m.BlogListPage })))
const BlogPostPage = lazy(() => import('./pages/blog/BlogPostPage').then(m => ({ default: m.BlogPostPage })))

const PrivacyPage = lazy(() => import('./pages/legal/PrivacyPage').then(m => ({ default: m.PrivacyPage })))
const TermsPage = lazy(() => import('./pages/legal/TermsPage').then(m => ({ default: m.TermsPage })))

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
        <Layout>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/roi-calculator" element={<ROICalculatorPage />} />
              
              <Route path="/solutions/call-centers" element={<CallCentersPage />} />
              <Route path="/solutions/small-business" element={<SmallBusinessPage />} />
              <Route path="/solutions/enterprise" element={<EnterprisePage />} />
              
              <Route path="/enterprise/:serviceId" element={<ServicePage />} />
              
              <Route path="/products/voice-ai" element={<VoiceAIPage />} />
              <Route path="/products/:id" element={<ProductPage />} />
              
              <Route path="/industries/:slug" element={<IndustryPage />} />
              
              <Route path="/automations" element={<AutomationsPage />} />
              
              <Route path="/use-cases" element={<UseCasesPage />} />
              <Route path="/use-cases/:slug" element={<UseCaseDetailPage />} />
              
              <Route path="/case-studies" element={<CaseStudiesListPage />} />
              <Route path="/case-studies/:slug" element={<CaseStudyPage />} />
              
              <Route path="/blog" element={<BlogListPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </Layout>
      </ErrorBoundary>
    </BrowserRouter>
  )
}
