import React, { AnchorHTMLAttributes } from 'react'
import {
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaInstagram,
  FaStackOverflow,
} from 'react-icons/fa'
import constant from 'constant.config'

const IconLink: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> = (props) => {
  return <a rel='noopener noreferrer' target='_blank' {...props} />
}

const SNSList: React.FC = () => {
  return (
    <div className='flex justify-end p-3 text-lg space-x-2 border-b'>
      <IconLink href={constant.externalLink.github}>
        <FaGithub />
      </IconLink>
      <IconLink href={constant.externalLink.linkedIn}>
        <FaLinkedin />
      </IconLink>
      <IconLink href={constant.externalLink.medium}>
        <FaMedium />
      </IconLink>
      <IconLink href={constant.externalLink.instagram}>
        <FaInstagram />
      </IconLink>
      <IconLink href={constant.externalLink.stackoverflow}>
        <FaStackOverflow />
      </IconLink>
    </div>
  )
}

export default SNSList
