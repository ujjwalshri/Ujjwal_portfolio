import React from 'react'
import {motion} from 'framer-motion'
const HeroSection = () => {
  return (
    <div className='flex flex-col justify-center items-center md:flex-row mb-10'>
        <div className='p-4'>
        <h1 className='text-6xl font-mono font-extrabold '> Hey!, Welcome to my portfolio

        </h1>
         <div className='ml-6 mt-6 text-4xl '>~ I am Ujjwal Shrivastava </div>
         <motion.div className='bg-base p-8 rounded-full mt-6 h-10  ml-10 flex  items-center shadow shadow-md shadow-gray-800 ' initial={{ opacity: 0 }}
    animate={{ opacity: 100 }}
    transition={{ delay: 0.5 }}>
           <div className='flex font-bold gap-2 justify-center items-center text-xl '>
           <a className='flex justify-center items-center' href="https://leetcode.com/u/ujjwal2309/" target='_blank'>Leetcode 
           <img className='w-1/6 h-1/6 rounded-full p-2' src="../public/images/download.png" alt="" />
           </a> 
            

           </div>
           
           <div  className='flex font-bold gap-2 justify-center items-center text-xl '>
           <a href="https://github.com/ujjwalshri" className='flex justify-center items-center'  target='_blank' >Github
           <img className='w-1/6 h-1/6 rounded-full ' src="../public/images/github.png" alt="" />
           </a> 
          


           </div>
           <div  className='flex font-bold gap-2 justify-center items-center text-xl '>
           <a href="https://www.linkedin.com/in/ujjwal-shrivastava-2a6138268/" className='flex justify-center items-center'  target='_blank'>LinkedIn
           <img className='w-1/6 h-1/6 rounded-full p-2' src="../public/images/linkedin.png" alt="" />
           </a> 
            


           </div>
           
       </motion.div>
        </div>
        <motion.img className='' src="../public/images/photo.png" alt="" initial={{ opacity: 0, scale: 0.2 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }} />
    
   
    </div>
  )
}

export default HeroSection