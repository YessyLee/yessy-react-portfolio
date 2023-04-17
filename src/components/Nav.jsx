import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Nav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='sticky top-0 left-0 right 0 z-10 bg-[#000300] flex justify-between items-center h-28 w-full mx-auto px-4 text-white pl-28 pr-28'>
      <h1 className='text-4xl font-bold text-[#AC34FF]'>YESSY<span className='text-white'>LEE</span></h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>home</li>
        <li className='p-4'>my portfolio</li>
        <li className='p-4'>get to know me</li>
        <li className='p-4'>contact me</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#AC34FF] m-5'>YESSY<span className='text-white'>LEE</span></h1>
          <li className='p-5 border-b border-gray-600'>home</li>
          <li className='p-5 border-b border-gray-600'>my portfolio</li>
          <li className='p-5 border-b border-gray-600'>get to know me</li>
          <li className='p-5'>contact me</li>
        </ul>
        
    </div>
  );
};

export default Nav;