import React from 'react';
import Typed from 'react-typed';
import { Link, animateScroll as scroll } from 'react-scroll';

const Hero = () => {
  return (
    <div name='home' className='flex flex-wrap text-white pb-12 lg:pb-24 border-b-2 border-slate-500'>
        <div className='flex flex-wrap'>
        <img className="flex flex-wrap lg:ml-24 pl-10 object-contai h-auto w-96" src="/images/yessy2.png" alt="yessy"></img> 
        </div>

      <div className='max-w-[850px] mt-[-96px] mx-auto flex flex-col justify-center pl-8'>
        <p className='text-[#AC34FF] font-bold text-xl mt-20 mb-4 lg:mt-56'>
        Hello and welcome to my page!
        </p>
        <h1 className='md:text-4xl sm:text-2xl text-lg font-bold md:py-6'>
          My name is Yessy, I am a junior developer.
        </h1>
        <div className='flex items-center'>
          <p className='md:text-4xl sm:text-2xl text-lg font-bold py-2'>
            Enthusiastic for an opportunity in 
          </p>
          <Typed
          className='md:text-4xl sm:text-2xl text-lg text-[#AC34FF] font-bold md:pl-4 pl-2'
            strings={['FRONTEND,', 'BACKEND,', 'DATA.']}
            typeSpeed={140}
            backSpeed={160}
            loop
          />
        </div>
        <p className='md:text-xl text-md py-3 pr-2 text-gray-300'>I am a 2023 She Codes Plus alumni who is highly motivated and ready to tackle my first role in tech as a developer!</p>
        <button className='bg-[#AC34FF] hover:bg-fuchsia-400  w-[200px] rounded-md font-bold my-6 py-3 text-white text-lg'><Link to="contact" smooth={true} offset={-40} duration={500}>Get in touch!</Link></button>
      </div>
    </div>
  );
};

export default Hero;