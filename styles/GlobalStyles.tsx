import { Global, css } from '@emotion/react'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

const globalStyles = css({
  body: {
    ...tw`bg-synthwave-primary text-synthwave-contrastText`,
    ...tw`antialiased`,
    '::-webkit-scrollbar': {
      ...tw`w-2`,
    },
    '::-webkit-scrollbar-thumb': {
      ...tw`bg-synthwave-secondary`,
    },
    '::-webkit-scrollbar-track': {
      ...tw`bg-synthwave-primary`,
    },
  },
})

const GlobalStyles = () => (
  <>
    <Global styles={globalStyles} />
    <BaseStyles />
  </>
)

export default GlobalStyles
