import React from 'react';
import HorizontalLine from './HorizontalLine';

const About = ({ data }) => {
  return (
    <div>
      <div className='flex justify-center p-10 items-center'>
        <HorizontalLine />
      </div>
      <div className='flex justify-center items-center'>
        <h1 className='text-4xl md:text-6xl font-mono font-extrabold mt-12 md:mt-24'>About us</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center p-10 md:p-40'>
        <div className='flex justify-center items-center mb-8 md:mb-0'>
          <p className='text-sm md:text-base'>
            Hey, I am {data.name} and I am doing this in my life bla bla bla. I am {data.age} years old.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam saepe eos impedit. Illo reiciendis, expedita amet quasi quia mollitia in sed, similique accusantium exercitationem consequuntur enim fuga tenetur culpa blanditiis?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quia quae iste aspernatur perspiciatis, quo illum minus cum placeat eos doloremque, fugiat libero consequuntur quam ut? Eos corporis unde illo.
            Saepe, soluta facilis veniam et quasi tempora sapiente. Tempora in neque officia, voluptas vitae harum quisquam repudiandae, hic porro optio eligendi illum! Libero eum soluta, mollitia placeat aliquid quo ullam?
            Ut, ducimus. Delectus mollitia nemo accusamus sed doloribus? Veritatis vel enim error iste et molestiae tenetur culpa sint laudantium, laborum consequuntur blanditiis! Harum molestias fugiat quasi dolorum nobis ad provident.
            Numquam dolores nam eum eius. Ipsam sapiente eius ab alias iste non magni velit quaerat sint perspiciatis, eos in, tempora ex saepe fugit at et dolorem doloribus est atque amet!
          </p>
        </div>
        <div className='flex justify-center items-center'>
          <img className='w-48 h-48 md:w-[50vh] md:h-[50vh]' src="../public/images/logo.png" alt="Logo" />
        </div>
      </div>
    </div>
  );
}

export default About;