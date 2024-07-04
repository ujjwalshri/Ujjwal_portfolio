import React from 'react';
import { motion } from 'framer-motion';

const SocialLinks = () => {
  return (
    <div className='flex justify-center'>
      <motion.div
        className='bg-base px-8 pt-4  rounded-full mt-6 flex flex-wrap gap-4 items-center shadow shadow-md shadow-gray-800 '
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{ delay: 0.5 }}
      >
        <div className='flex font-bold gap-2 justify-center items-center text-base sm:text-lg md:text-xl '>
          <a
            className='flex flex-col justify-center items-center'
            href="https://leetcode.com/u/ujjwal2309/"
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='w-10 h-10 md:w-12 md:h-12 rounded-full p-1'
              src="../public/images/download.png"
              alt="Leetcode"
            />
            <span>Leetcode</span>
          </a>
        </div>

        <div className='flex font-bold gap-2 justify-center items-center text-base sm:text-lg md:text-xl'>
          <a
            className='flex flex-col justify-center items-center'
            href="https://github.com/ujjwalshri"
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='w-10 h-10 md:w-12 md:h-12 rounded-full'
              src="../public/images/github.png"
              alt="Github"
            />
            <span>Github</span>
          </a>
        </div>

        <div className='flex font-bold gap-2 justify-center items-center text-base sm:text-lg md:text-xl'>
          <a
            className='flex flex-col justify-center items-center'
            href="https://www.linkedin.com/in/ujjwal-shrivastava-2a6138268/"
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='w-10 h-10 md:w-12 md:h-12 rounded-full p-1'
              src="../public/images/linkedin.png"
              alt="LinkedIn"
            />
            <span>LinkedIn</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default SocialLinks;