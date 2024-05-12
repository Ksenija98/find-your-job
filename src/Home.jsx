import React from 'react'
import homeImage from './homeImage.png';

const Home = () => {
  return (
    <div className='home'>
    <img src={homeImage} alt="Home page image" className="home-image" /> 
    </div>
  )
}

export default Home