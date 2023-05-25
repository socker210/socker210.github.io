import type { ReactNode } from 'react'
import { Bungee, Noto_Sans_KR, Roboto } from 'next/font/google'
import tw, { styled } from 'twin.macro'

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
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-notoSansKR',
})

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

const fontVariables = [
  bungee.variable,
  notoSansKR.variable,
  roboto.variable,
].join(' ')

const Root = styled.div(() => [tw`font-notoSansKR`])

const Font: React.FC<FontProps> = ({ children }) => {
  return <Root className={fontVariables}>{children}</Root>
}

export default Font
