import React from 'react'
import './FraButton.scss'

const FraButton = ({ text, style }) => {
  const classes = `fra-button ${style}`
  return (
    <button className={classes}>{ text }</button>
  )
}

export default FraButton
