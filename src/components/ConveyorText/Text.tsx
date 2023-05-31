import type { ReactNode } from 'react'
import tw, { styled } from 'twin.macro'

interface TextProps {
  children: ReactNode
}

const Word = styled.span(() => [
  tw`text-[clamp(theme('fontSize.3xl'), 3.65vw, theme('fontSize.4xl'))]`,
  tw`mx-2 font-roboto font-semibold text-synthwave-contrastText text-opacity-50`,
  tw`sm:mx-4`,
])

const Text: React.FC<TextProps> = ({ children }) => {
  return <Word>{children}</Word>
}

export default Text
