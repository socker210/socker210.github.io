import { Global, css } from '@emotion/react'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

const globalStyles = css({
  body: tw`bg-synthwave-purple text-synthwave-text antialiased`,
})

const GlobalStyles = () => (
  <>
    <Global styles={globalStyles} />
    <BaseStyles />
  </>
)

export default GlobalStyles
