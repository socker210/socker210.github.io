import type { Meta, StoryObj } from '@storybook/react'
import Header from './Header'

type Story = StoryObj<typeof Header>

const meta: Meta<typeof Header> = {
  title: 'Header',
  component: Header,
}

export const Primary: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => {
    return (
      <div>
        <p tw='p-6 text-xl font-bold'>hello</p>
        <Header />
        <div tw='h-screen'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore,
          quaerat enim fuga magni neque fugiat repellendus odio cum velit ipsa
          ratione ab incidunt, nisi optio aliquam tempora voluptate. Cum, nam!
        </div>
        <div tw='h-screen'>
          <p tw='text-3xl'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
            pariatur incidunt officiis eaque iste asperiores perspiciatis
            numquam illo dolorum corrupti adipisci ipsa, neque doloremque saepe
            est fugit repellat labore beatae.
          </p>
        </div>
      </div>
    )
  },
}

export default meta
