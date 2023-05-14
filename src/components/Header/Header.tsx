import React, { useState, useCallback, ChangeEvent } from 'react'
import { FaArrowDown } from 'react-icons/fa'
import Logo from 'components/Logo'
import SNSList from './SNSList'
import NavList from './NavList'

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleChange = useCallback(() => setIsOpen((prev) => !prev), [])

  return (
    <header className='mx-auto'>
      <SNSList />
      <div className='p-2 text-base'>
        <Logo />
      </div>
      <input
        id='header-menu-check'
        type='checkbox'
        className='peer'
        checked={isOpen}
        onChange={handleChange}
      />
      <NavList isOpen={isOpen} />
      <label
        htmlFor='header-menu-check'
        className='flex justify-center cursor-pointer'
      >
        haha
      </label>
    </header>
  )
}

export default Header
