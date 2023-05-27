import tw, { styled } from 'twin.macro'

export const Block = styled.div(() => [tw`mx-auto max-w-7xl`])

export const ContentBox = styled.main(() => [
  tw`min-h-[calc(100vh-theme('spacing.m-header'))] p-m-spacing`,
  tw`sm:min-h-[calc(100vh - theme('spacing.pc-header'))] sm:p-pc-spacing`,
])
