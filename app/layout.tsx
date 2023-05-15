import { Metadata } from 'next'
import './globals.css'

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Personal blog',
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
