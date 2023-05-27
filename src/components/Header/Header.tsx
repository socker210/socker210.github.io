import tw, { styled } from 'twin.macro'
import { Block } from '@styles/snippets'
import _Logo from '@components/Logo'

const Root = styled.header(() => [
  tw`sticky top-0 z-header`,
  tw`bg-synthwave-primary bg-opacity-60 backdrop-blur-sm`,
  tw`border-b border-solid border-synthwave-contrastText border-opacity-20`,
])

const Inner = styled.div(() => [
  tw`flex items-center`,
  tw`h-m-header px-m-spacing`,
  tw`sm:h-pc-header sm:px-pc-spacing`,
])

const Logo = styled(_Logo)(() => [tw`text-xl`, tw`sm:text-3xl`])

const Header: React.FC = () => {
  return (
    <Root>
      <Block>
        <Inner>
          <Logo />
        </Inner>
      </Block>
    </Root>
  )
}

export default Header
