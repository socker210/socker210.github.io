import type { ReactNode } from 'react'
import { keyframes } from '@emotion/react'
import tw, { styled } from 'twin.macro'
import Text from './Text'

interface ConveyorProps {
  children: ReactNode
}

const conveyorLine = [0, 1, 2]

const conveyorAnimation = keyframes`
	from {
		transform: translateX(0);
	}
	to {
		transform: translateX(-100%);
	}
`

const Root = styled.div`
  mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 0%,
    rgb(20, 6, 40) 12.5%,
    rgb(20, 6, 40) 87.5%,
    rgba(0, 0, 0, 0) 100%
  );

  ${() => ({
    ...tw`flex w-full flex-nowrap overflow-hidden py-2`,
    ...tw`sm:py-4`,
  })}
`

const Inner = styled.div`
  animation: ${conveyorAnimation} 20s linear infinite;
`

const Conveyor = ({ children }: ConveyorProps): JSX.Element => {
  return (
    <Root>
      {conveyorLine.map((line) => (
        <Inner key={line}>{children}</Inner>
      ))}
    </Root>
  )
}

Conveyor.Text = Text

export default Conveyor
