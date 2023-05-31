import tw, { styled, theme } from 'twin.macro'

export const Vars = styled.div`
  --nav-height: ${() => theme('spacing.m-nav')};
  --header-height: ${() => theme('spacing.m-header')};
  --spacing: ${() => theme('spacing.m-spacing')};

  @media (min-width: ${theme('screens.sm')}) {
    --nav-height: ${() => theme('spacing.pc-nav')};
    --header-height: ${() => theme('spacing.pc-header')};
    --spacing: ${() => theme('spacing.pc-spacing')};
  }
`

export const Block = styled.div(() => [tw`mx-auto max-w-7xl`])

export const ContentBox = styled.main(() => [
  tw`min-h-[calc(100vh-theme('spacing.m-header'))] p-m-spacing`,
  tw`sm:min-h-[calc(100vh - theme('spacing.pc-header'))] sm:p-pc-spacing`,
])
