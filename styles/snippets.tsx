import tw, { styled } from 'twin.macro'

export const Block = styled.div(() => [tw`mx-auto max-w-7xl`])

export const ContentBox = styled.main(() => [
  tw`p-m-spacing`,
  tw`sm:p-pc-spacing`,
])
