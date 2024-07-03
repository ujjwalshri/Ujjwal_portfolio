import React from 'react'
import HeroSection from './HeroSection'
import Interests from './Interests'
import About from './About'

const myData = {
  name : "Ujjwal Shrivastava", 
  age: 20,
  passion: "coding", 
  college : "Amity University Madhya Pradesh", 
}


const Home = () => {
  return (
    <div className='grid grid-cols-1 text-white'>
        <HeroSection/>
        <About data={myData}/>
        <Interests/>


    </div>
  )
}

export default Home