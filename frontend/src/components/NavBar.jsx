import React from 'react'
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
<div className=''>
  <div className='w-full h-6'>

  </div>
<motion.div className='bg-base shadow-gray-800 rounded-xl shadow-lg pr-4 w-[90vw] max-w-screen-lg mx-auto flex flex-wrap gap-4 justify-between'  initial={{ opacity: 0 }}
    animate={{ opacity: 100 }}
    transition={{ delay: 0.5 }}
    
        >
      <Link to={'/'} className='w-1/6 rounded-3xl flex justify-center items-center'>
        <h1 className='font-bold text-2xl text-white '>
          <div className='flex justify-center ite'>
          <img className='w-3/4 h-3/4' src="../public/images/perfectlogo.png" alt="" />
          </div>
       
        </h1>
      </Link>

      <div className='flex flex-wrap justify-around items-center gap-8 w-full sm:w-auto'>

        <Link to={'/contact'} className='text-textColor text-lg sm:text-2xl  font-mono'>Contact</Link>
        <Link to={'/projects'} className='text-textColor text-lg sm:text-2xl  font-mono'>Projects</Link>
        <Link to={'/skills'}  className='text-textColor text-lg sm:text-2xl  font-mono'>Skills</Link>
        <a href="https://drive.google.com/file/d/1hD79vil8TMcs6vjygdIMx6J5rhgDECIh/view?usp=drive_link" target='_blank' className='text-textColor text-lg sm:text-2xl  font-mono' >Resume</a>
      </div>
     
    </motion.div>
    

</div>
    
  )
}

export default NavBar