import React from 'react';
import './FraHeader.scss'
import FraButton from '../FraButton';

const FraHeader = () => {
  return (
    <div className='header-container'>
      <FraButton style='main' link='/' text='' />
      <div className='fra-button-list'>
        {/* <FraButton text='Games' link='/' /> */}
        {/* <FraButton text='About Us' link='/about' /> */}
      </div>
    </div>
  )
}

export default FraHeader
