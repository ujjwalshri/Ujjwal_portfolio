import React from 'react'
import {motion} from 'framer-motion'
const Contact = () => {
  return (
  
      <>
      <div className='flex justify-center items-center mt-16'>
      <h1 className='text-6xl font-mono font-extrabold text-white'>contact us</h1>
      </div>
     
      <div className='flex justify-center items-center w-full h-full'> 
      
      <motion.form action="https://formspree.io/f/mzbnrgop" method="POST" className="mt-4 border w-1/3 h-[50vh] bg-base p-4"     initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}>
  <input type="text" placeholder="Username" name="username" required autoComplete="off" className='mt-4 w-full p-2'  />
  <input type="email" placeholder="Enter your email" name="email" required autoComplete="off" className='mt-4 w-full p-2' />
  <textarea name="message" cols="30" rows="10" required autoComplete="off" placeholder="Enter your feedback" className='mt-4 w-full p-2'></textarea>
  <input type="submit" value="Send" className='mt-2 bg-buttonColor p-2 text-white' />
</motion.form>

      </div>
     
    </>
  )
}

export default Contact