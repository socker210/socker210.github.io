import React from 'react'
import { Meta, Story } from '@storybook/react'
import Logo from 'components/Logo'

export default {
  title: 'Component/Logo',
  component: Logo,
} as Meta

export const Primary: Story = () => <Logo />
