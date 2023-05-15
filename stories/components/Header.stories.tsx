import React from 'react'
import { Meta, Story } from '@storybook/react'
import Header from 'components/Header'

export default {
  title: 'Component/Header',
  component: Header,
} as Meta

export const Primary: Story = () => <Header />
