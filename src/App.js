import React from 'react';
import './App.scss';
import FraHeader from './components/FraHeader';
import HammyScreenshot from './images/hammy-screenshot.jpeg'
import FraFeaturedGame from './components/FraFeaturedGame';

function App() {
  return (
    <div className="App">
      <FraHeader />
      <div className='fra-content'>
        <FraFeaturedGame gameTitleLine1='Hammy' gameTitleLine2='Hop' />
        <img className='fra-featured-screenshot' src={HammyScreenshot} alt='featured' />
      </div>
      <div className='fra-footer'></div>
    </div>
  );
}

export default App;
