import React from 'react'
import PropTypes from 'prop-types'

const Skill = ({ text, interested }) => (
  <span className={`skill ${interested ? 'skills--interested ' : ''}`}>{text}</span>
)

Skill.propTypes = {
  /**
   * Skill text
   */
  text: PropTypes.string.isRequired,

  /**
   * Skill interested
   */
  interested: PropTypes.bool
}

Skill.defaultProps = {
  interested: false
}

export default Skill