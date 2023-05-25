import type { Meta, StoryObj } from '@storybook/react'
import Header from '@components/Header'
import Footer from '@components/Footer'

const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <div tw='h-screen p-m-spacing sm:p-pc-spacing'>
        <p tw='text-xl'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
          perferendis, non officia molestiae ipsa consequatur. Quam numquam
          necessitatibus nihil reiciendis vero reprehenderit repellendus qui
          blanditiis quisquam assumenda doloribus, dolore sequi?
        </p>
      </div>
      <Footer />
    </div>
  )
}

type Story = StoryObj<typeof Layout>

const meta: Meta<typeof Layout> = {
  title: 'Composite/Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
}

export const Primary: Story = {
  render: () => <Layout />,
}

export default meta
