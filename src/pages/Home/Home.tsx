import React from 'react'
import Header from 'components/Header'

// TODO: Frame 짜서 컴포넌트 좀 구체화 하기(Button, Typography 등)

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <div className='flex justify-center items-center h-screen bg-background'>
        <h1 className='font-primary text-5xl'>Welcome</h1>
      </div>
      <div className='flex justify-center items-center h-screen'>
        <h1 className='font-primary text-5xl'>Welcome 2</h1>
      </div>
    </div>
  )
}

export default Home
