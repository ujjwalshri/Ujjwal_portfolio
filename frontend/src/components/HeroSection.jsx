import React from 'react'
import {motion} from 'framer-motion'
import SocialLinks from './SocialLinks'
const HeroSection = () => {
  return (
    <div className='flex flex-col justify-center items-center md:flex-row mb-10'>
        <div className='p-4'>
        <h1 className='text-6xl font-mono font-extrabold '> Hey!, Welcome to my portfolio

        </h1>
         <div className='ml-6 mt-6 text-4xl '>~ I am Ujjwal Shrivastava </div>
         <SocialLinks/>
        </div>
        <motion.img className='pb-40' src="../public/images/photo.png" alt="" initial={{ opacity: 0, scale: 0.2 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }} />
    
   
    </div>
  )
}

export default HeroSection