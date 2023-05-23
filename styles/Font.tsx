import type { ReactNode } from 'react'
import { Bungee, Noto_Sans_KR } from 'next/font/google'

interface FontProps {
  children: ReactNode
}

const bungee = Bungee({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bungee',
})

const notoSansKR = Noto_Sans_KR({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-notoSansKR',
})

const fontVariables = [bungee.variable, notoSansKR.variable].join(' ')

const Font: React.FC<FontProps> = ({ children }) => {
  return <div className={fontVariables}>{children}</div>
}

export default Font
