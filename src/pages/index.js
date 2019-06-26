import React from 'react'
import Jumbotron from '../components/Jumbotron'
import Caption from '../components/Caption'
import Skill from '../components/Skill'
import GithubLink from '../components/GithubLink'
import SocialLink from '../components/SocialLink'
import Footer from '../components/Footer'
import '../styles/index.scss'

const App = () => (
  <>
    <Jumbotron />
    <div className='contents'>
      <section className='skills'>
        <Caption text='Technical Skills' />
        <ul>
          <li><Skill text='Node' /></li>
          <li><Skill text='React' /></li>
          <li><Skill text='Next.js' /></li>
          <li><Skill text='Jest' /></li>
          <li><Skill text='Enzyme' /></li>
          <li><Skill text='Puppeteer' /></li>
          <li><Skill text='Git' /></li>
          <li><Skill text='Babel' /></li>
          <li><Skill text='Webpack' /></li>
          <li><Skill text='Rollup' /></li>
          <li><Skill text='SASS' /></li>
          <li><Skill text='Gulp' /></li>
          <li><Skill text='Eslint' /></li>
          <li><Skill text='Docz' /></li>
          <li><Skill text='PM2' /></li>
          <li><Skill text='MS-SQL' /></li>
        </ul>
      </section>
      <section className='skills'>
        <Caption text='Interested Skills' />
        <ul>
          <li><Skill text='Travis CI' interested /></li>
          <li><Skill text='Docker' interested /></li>
          <li><Skill text='Python' interested /></li>
          <li><Skill text='Flask' interested /></li>
        </ul>
      </section>
      <section className='repos'>
        <Caption text='Github Repo' />
        <ul>
          <li>
            <GithubLink
              name='with-breakpoints'
              link='https://github.com/socker210/with-breakpoints'
              description='Mediaquery를 React에서 사용할 수 있는 component, HOC 지원'
            />
          </li>
          <li>
            <GithubLink
              name='event-emitter'
              link='https://github.com/socker210/event-emitter'
              description='심플한 EventEmitter'
            />
          </li>
        </ul>
      </section>
      <section className='links'>
        <Caption text='Links' />
        <ul>
          <li>
            <SocialLink
              icon='fa-github'
              name='Github'
              link='https://github.com/socker210'
            />
          </li>
          <li>
            <SocialLink
              icon='fa-medium'
              name='Medium'
              link='https://medium.com/@socker210'
            />
          </li>
          <li>
            <SocialLink
              icon='fa-npm'
              name='npm'
              link='https://www.npmjs.com/~socker210'
            />
          </li>
          <li>
            <SocialLink
              icon='fa-stack-overflow'
              name='Stackover flow'
              link='https://stackoverflow.com/users/5562984/socker210'
            />
          </li>
        </ul>
      </section>
    </div>
    <Footer />
  </>
)

export default App