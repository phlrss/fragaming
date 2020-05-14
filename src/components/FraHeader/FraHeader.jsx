import React from 'react';
import './FraHeader.scss'
import FraButton from '../FraButton';

const FraHeader = () => {
  return (
    <div className='header-container'>
      <FraButton style='main' text='' />
      <FraButton text='Games' />
      <FraButton text='About Us' />
      <FraButton text='Link 3?' />
      <FraButton text='Free Beer?' />
    </div>
  )
}

export default FraHeader
