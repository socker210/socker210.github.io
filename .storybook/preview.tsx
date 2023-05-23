import React from 'react'
import type { Preview } from '@storybook/react'
import GlobalStyles from '../styles/GlobalStyles'
import '../styles/hljs-theme.css'

const preview: Preview = {
  decorators: [
    (Story) => (
      <>
        <GlobalStyles />
        <Story />
      </>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
