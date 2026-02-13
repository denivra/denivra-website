import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import { 
  CaseStudyPage, 
  CaseStudiesListPage, 
  ContactPage,
  // Solutions
  CallCentersPage,
  SmallBusinessPage,
  EnterprisePage,
  // Products
  VoiceAIPage,
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
        
        {/* Solutions */}
        <Route path="/solutions/call-centers" element={<CallCentersPage />} />
        <Route path="/solutions/small-business" element={<SmallBusinessPage />} />
        <Route path="/solutions/enterprise" element={<EnterprisePage />} />
        
        {/* Products */}
        <Route path="/products/voice-ai" element={<VoiceAIPage />} />
        
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
