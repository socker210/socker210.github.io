import React from 'react'

const Jumbotron = () => (
  <div className='jumbotron' role='banner'>
    <div className='jumbotron__profile'>
      <img src='profile_circle.png' alt='profile picture' />
    </div>
    <div className='jumbootron__title'>
      <h1>Junyong Park</h1>
      <h2>Front-end Developer</h2>
      <h3 className='title__sub'>MES 개발자로 개발 인생 시작. 현재 프론트엔드 개발자로 개발 인생 살아가는 중. 하지만 미래에는 풀 스택 개발자.</h3>
    </div>
  </div>
)

export default Jumbotron