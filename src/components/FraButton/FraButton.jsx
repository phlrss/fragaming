import React from 'react'
import './FraButton.scss'
import { Link } from 'react-router-dom'

const FraButton = ({ text, link, style }) => {
  const classes = `fra-button ${style}`
  return (
    <Link to={link} className={classes}>{ text }</Link>
  )
}

export default FraButton
