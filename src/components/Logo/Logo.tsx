import type { ComponentPropsWithRef } from 'react'
import tw, { styled } from 'twin.macro'

type LogoProps = ComponentPropsWithRef<typeof Root>

const Root = styled.span(() => [tw`font-bungee tracking-widest`])

const Emphasis = styled.span(() => [tw`text-synthwave-secondary`])

const Logo: React.FC<LogoProps> = (props) => {
  return (
    <Root {...props}>
      Junyong <Emphasis>Park.</Emphasis>
    </Root>
  )
}

export default Logo
