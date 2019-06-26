import React from 'react'
import PropTypes from 'prop-types'

const GithubLink = ({ name, link, description }) => (
  <div className='github-link'>
    <a href={link} target='_blank'>{name}</a>
    <div className='github-link__disc'>{description}</div>
  </div>
)

GithubLink.propTypes = {
  /**
   * Repo name
   */
  name: PropTypes.string.isRequired,

  /**
   * Repo link
   */
  link: PropTypes.string.isRequired,

  /**
   * Repo description
   */
  description: PropTypes.string
}

export default GithubLink