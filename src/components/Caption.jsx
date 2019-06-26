import React from 'react'
import PropTypes from 'prop-types'

const Caption = ({ text }) => (
  <div className='caption'>
    <h1>{text}</h1>
  </div>
)

Caption.propTypes = {
  /**
   * Caption
   */
  text: PropTypes.string.isRequired
}

export default Caption