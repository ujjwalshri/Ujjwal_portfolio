import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <>
      <div className='flex justify-center items-center mt-8 md:mt-16'>
        <h1 className='text-4xl md:text-6xl font-mono font-extrabold text-white'>Contact Us</h1>
      </div>

      <div className='flex justify-center items-center w-full h-full mt-8 md:mt-16'>
        <motion.form
          action="https://formspree.io/f/mzbnrgop"
          method="POST"
          className="w-full max-w-md md:w-1/3 bg-base p-4 border rounded-lg"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <input
            type="text"
            placeholder="Username"
            name="username"
            required
            autoComplete="off"
            className='mt-4 w-full p-2 border border-gray-300 rounded-md'
          />
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            required
            autoComplete="off"
            className='mt-4 w-full p-2 border border-gray-300 rounded-md'
          />
          <textarea
            name="message"
            cols="30"
            rows="6"
            required
            autoComplete="off"
            placeholder="Enter your feedback"
            className='mt-4 w-full p-2 border border-gray-300 rounded-md'
          ></textarea>
          <input
            type="submit"
            value="Send"
            className='mt-4 bg-buttonColor p-2 text-white rounded-md cursor-pointer'
          />
        </motion.form>
      </div>
    </>
  );
}

export default Contact;