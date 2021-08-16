import React from 'react'
import { Story } from '@storybook/react'
import { BrowserRouter, Route } from 'react-router-dom'
import '@storybook/addon-console'
import '../src/app.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story: Story): React.ReactNode => (
    <BrowserRouter>
      <Route path='/' component={Story} />
    </BrowserRouter>
  ),
]
