import tw, { styled } from 'twin.macro'
import { Block } from '@styles/snippets'

const Root = styled.header(() => [
  tw`sticky top-0`,
  tw`border-b border-solid border-synthwave-text border-opacity-20`,
  tw`bg-synthwave-purple bg-opacity-60 backdrop-blur-sm`,
])

const Inner = styled.div(() => [
  tw`flex items-center`,
  tw`h-m-header px-m-spacing`,
  tw`sm:h-pc-header sm:px-pc-spacing`,
])

const Logo = styled.span(() => [
  tw`font-bungee tracking-widest`,
  tw`text-xl`,
  tw`sm:text-3xl`,
])

const LogoEmphasis = styled.span(() => [tw`text-synthwave-orange`])

const Header: React.FC = () => {
  return (
    <Root>
      <Block>
        <Inner>
          <Logo>
            Junyong <LogoEmphasis>Park.</LogoEmphasis>
          </Logo>
        </Inner>
      </Block>
    </Root>
  )
}

export default Header
