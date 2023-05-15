import React from 'react'
import { Link } from 'react-router-dom'
import * as routes from 'routes.config'

const Logo: React.FC = () => {
  return (
    <Link to={routes.home.path} className='relative font-primary font-medium'>
      <span className='relative'>
        Junn
        <span
          className='absolute inset-x-0 bottom-0 -z-1 transform -translate-y-1 rota rounded-sm bg-primary'
          style={{ height: '25%' }}
        />
      </span>
      .frontend
    </Link>
  )
}

export default Logo
