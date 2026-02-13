import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import { CaseStudyPage, CaseStudiesListPage, ContactPage } from './pages'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/case-studies" element={<CaseStudiesListPage />} />
        <Route path="/case-studies/:slug" element={<CaseStudyPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}
