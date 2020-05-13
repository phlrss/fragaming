import React from 'react'
import './FraFeaturedGame.scss'

const FraFeaturedGame = ({gameTitleLine1, gameTitleLine2}) => {
  return (
    <div className='fra-featured-game-container'>
      <span className='fra-featured-game' data-text={gameTitleLine1}>{gameTitleLine1}</span>
      <span className='fra-featured-game' data-text={gameTitleLine2}>{gameTitleLine2}</span>
    </div>
  )
}

export default FraFeaturedGame
