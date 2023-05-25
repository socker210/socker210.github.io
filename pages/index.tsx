import Header from '@components/Header'
import Footer from '@components/Footer'
import type { NextPageWithLayout } from './_app'

const Page: NextPageWithLayout = () => {
  return (
    <div>
      <Header />
      <div tw='h-screen p-pc-spacing'>
        <p tw='text-2xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quo
          quam perspiciatis nisi, ad, harum et tenetur mollitia pariatur dolor
          maxime esse beatae fugiat alias nobis tempore, ipsam vel inventore!
        </p>
      </div>
      <Footer />
    </div>
  )
}

export default Page
