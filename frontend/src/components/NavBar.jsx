import React from 'react'
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
<div className=''>
<motion.div className='bg-base shadow-gray-800 rounded-xl shadow-lg p-4 w-[90vw] max-w-screen-lg mx-auto flex flex-wrap gap-4 justify-between'  initial={{ opacity: 0 }}
    animate={{ opacity: 100 }}
    transition={{ delay: 0.5 }}
    
        >
      <Link to={'/'} className='w-1/6 h-1/2 py-4 bg-black rounded-3xl flex justify-center items-center'>
        <h1 className='font-bold text-2xl text-white'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
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