import { Metadata } from 'next'
import './globals.css'

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Junyong Park | Frontend Developer',
  description: '',
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
