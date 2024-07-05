import React from 'react';
import HorizontalLine from './HorizontalLine';
import perfectLogo from '../images/perfectlogo.png';
import Aos from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
const About = ({ data }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <div className='flex justify-center p-10 items-center'>
        <HorizontalLine />
      </div>
      <div className='flex justify-center items-center'>
        <h1 className='text-4xl md:text-6xl font-mono font-extrabold mt-12 md:mt-24'>About me</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center p-10 md:p-40' data-aos='fade-right' >
        <div className='flex justify-center items-center mb-8 md:mb-0'>
          <p className='text-sm md:text-gray-300 '>
            Hey, I am {data.name} and I am {data.age} years old full stack web developer.
            As a passionate Full Stack Web Developer with extensive experience in both front-end and back-end technologies, I thrive on creating innovative and efficient web solutions. My journey as a developer has been marked by a strong foundation in Java and Data Structures and Algorithms (DSA), where I have tackled over 800+ problems on LeetCode, honing my problem-solving skills and analytical thinking.
          </p>
        </div>
        <div className='flex justify-center items-center p-0'>
          <img className='w-48 h-48 md:w-[50vh] md:h-[50vh]' src={perfectLogo} alt="Logo" data-aos = "fade-left" />
        </div>
      </div>
    </div>
  );
}

export default About;