import React from 'react';
import './App.scss';
import FraHeader from './components/FraHeader';
import HammyScreenshot from './images/hammy-screenshot.jpeg'
import FraFeaturedGame from './components/FraFeaturedGame';

function App() {
  return (
    <div className="App">
      <FraHeader />
      <div className='fra-featured'>
        <div className='left-half half'>
          <FraFeaturedGame gameTitleLine1='Hammy' gameTitleLine2='Hop' />
        </div>
        <div className='right-half half'>
          <img className='fra-featured-screenshot' src={HammyScreenshot} alt='featured' />
        </div>
      </div>
      <div className='fra-footer'>
        <button className='fra-store-badge google'></button>
        <button className='fra-store-badge apple'></button>
      </div>
    </div>
  );
}

export default App;
