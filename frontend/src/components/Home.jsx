import React from 'react'
import HeroSection from './HeroSection'
import Interests from './Interests'

const Home = () => {
  return (
    <div className='grid grid-cols-1 text-white'>
        <HeroSection/>
        
        <Interests/>

    </div>
  )
}

export default Home