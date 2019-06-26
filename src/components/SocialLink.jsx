import React from 'react'
import PropTypes from 'prop-types'

const SocialLink = ({ icon, name, link }) => (
  <div className='social-link'>
    <i className={`fab ${icon}`} />
    <a href={link} target='_blank'>{name}</a>
  </div>
)

SocialLink.propTypes = {
  /**
   * Social icon
   */
  icon: PropTypes.string.isRequired,

  /**
   * Social name
   */
  name: PropTypes.string.isRequired,

  /**
   * Social link
   */
  link: PropTypes.string.isRequired
}

export default SocialLink