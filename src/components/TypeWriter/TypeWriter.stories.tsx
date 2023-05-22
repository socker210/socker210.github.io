import type { Meta, StoryObj } from '@storybook/react'
import TypeWriter from './TypeWriter'

type Story = StoryObj<typeof TypeWriter>

const meta: Meta<typeof TypeWriter> = {
  title: 'TypeWriter',
  component: TypeWriter,
}

export const Primary: Story = {
  render: () => (
    <TypeWriter>
      <h1>HAHA1</h1>
      <h1>HAHA2</h1>
    </TypeWriter>
  ),
}

export const WithComponent: Story = {
  render: () => {
    const Comp: React.FC = () => {
      return <h1 className='text-red-400'>Component</h1>
    }

    return (
      <TypeWriter>
        <Comp />
      </TypeWriter>
    )
  },
}

export default meta
