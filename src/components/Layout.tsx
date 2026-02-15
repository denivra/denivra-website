import { ReactNode } from 'react'
import { Navigation } from './Navigation'
import { Footer } from './Footer'
import { ChatWidget } from './ChatWidget'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-dark-950 overflow-x-hidden">
      <Navigation />
      <main>{children}</main>
      <Footer />
      <ChatWidget />
    </div>
  )
}
