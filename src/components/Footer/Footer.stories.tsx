import type { Meta, StoryObj } from '@storybook/react'
import Footer from './Footer'

type Story = StoryObj<typeof Footer>

const meta: Meta<typeof Footer> = {
  title: 'Component/Footer',
  component: Footer,
}

export const Primary: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => {
    return (
      <>
        <div tw='fixed inset-x-0 bottom-0'>
          <Footer />
        </div>
      </>
    )
  },
}

export default meta
