import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'

const Page: NextPageWithLayout = () => {
  return null
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>
}

export default Page
