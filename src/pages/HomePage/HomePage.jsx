import React from 'react';
import HammyScreenshot from '../../images/hammy-screenshot.jpeg'
import FraFeaturedGame from '../../components/FraFeaturedGame';
import './HomePage.scss';

const HomePage = () => {
  return (
    <div className='fra-home-page'>
      <div className='fra-featured'>
        <div className='left-half half'>
          <FraFeaturedGame gameTitleLine1='Hammy' gameTitleLine2='Hop' />
        </div>
        <div className='right-half half'>
          <img className='fra-featured-screenshot' src={HammyScreenshot} alt='featured' />
        </div>
      </div>
      <div className='fra-footer'>
        <a href='https://play.google.com/store/apps/details?id=com.FraGaming.HammyHop' target='_blank' alt='Google Play Link' className='fra-store-badge google'></a>
        {/* <button className='fra-store-badge apple'></button> */}
      </div>
    </div>
  )
}

export default HomePage
