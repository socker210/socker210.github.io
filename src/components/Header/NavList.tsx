import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as routes from 'routes.config'

type NavListProps = {
  isOpen: boolean
}

type NavListItem = {
  label: string
  path: string
}

const navList: NavListItem[] = [
  {
    label: 'About Me',
    path: '/aboutme',
  },
  {
    label: 'Posts',
    path: '/posts',
  },
  {
    label: 'Packages',
    path: '/packages',
  },
  {
    label: 'League of legends',
    path: '/league-of-legends',
  },
]

const NavList = ({ isOpen }: NavListProps): JSX.Element => {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (navRef.current) {
      const { height } = navRef.current.getBoundingClientRect()

      navRef.current.style.height = isOpen ? `${96}px` : '0px'
    }
  }, [isOpen])

  return (
    <nav ref={navRef} className='bg-primary transition-height overflow-hidden'>
      <ul className='flex'>
        {navList.map(({ label, path }) => (
          <li key={path} className='p-3'>
            <Link to={path}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

NavList.defaultProps = {
  isOpen: false,
}

export default NavList
