import React from 'react';
import './App.scss';
import FraHeader from './components/FraHeader';
import HammyScreenshot from './images/hammy-screenshot.jpeg'

function App() {
  return (
    <div className="App">
      <FraHeader />
      <div className='fra-content'>
        <img className='hammy-screenshot' src={HammyScreenshot} alt='hammy' />
      </div>
      <div className='fra-footer'></div>
    </div>
  );
}

export default App;
