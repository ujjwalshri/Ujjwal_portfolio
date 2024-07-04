import React, { useEffect } from 'react';
import HorizontalLine from './HorizontalLine';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Projects = ({ data }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div>
        <div className='flex justify-center items-center mt-8'>
          <HorizontalLine />
        </div>

        <div className='flex justify-center items-center mt-16'>
          <h1 className='text-4xl md:text-7xl font-mono text-white'> Projects </h1>
        </div>

        <div className='grid grid-cols-1 p-8 md:p-28 gap-8 md:gap-16 mx-4 md:mx-48'>
          {data.map((d, index) => (
            <div key={index} className=' p-10 md:p-10 border rounded-3xl' data-aos='flip-right'>
              <img
                src={d.img[0]}
                alt={`Image ${index}`}
                onError={(e) => { e.target.onerror = null; e.target.src = 'fallback-image.jpg'; }}
                className='w-full h-auto object-cover rounded-2xl'
              />
              <div className='flex justify-center mt-4'>
                <h1 className='text-white text-2xl md:text-3xl font-extrabold'>{d.name}</h1>
              </div>
              <div className='flex justify-center items-center p-2 mt-1'>
                <p className='text-white font-light text-center'> ~ {d.description}</p>
              </div>
              <div className='flex justify-center items-center mb-2'>
                <h1 className='text-white text-2xl md:text-3xl'>{d.techStack}</h1>
              </div>
              <div className='flex flex-col md:flex-row justify-center items-center mt-4 gap-4'>
                <a href="#" className='bg-buttonColor p-2 w-full md:w-1/3 flex justify-center items-center text-white rounded-full' target='_blank' rel='noopener noreferrer'>
                  Try now
                </a>
                <a href="https://github.com/ujjwalshri/Ujjwal-s_BNB/tree/day2-" className='bg-buttonColor p-2 w-full md:w-1/3 flex justify-center items-center text-white rounded-full' target='_blank' rel='noopener noreferrer'>
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;