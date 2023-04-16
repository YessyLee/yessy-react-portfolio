import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='border-b-2 border-slate-400 flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='text-4xl font-bold text-[#AC34FF]'>YESSYLEE</h1>
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
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-5'>YESSYLEE</h1>
          <li className='p-5 border-b border-gray-600'>home</li>
          <li className='p-5 border-b border-gray-600'>my portfolio</li>
          <li className='p-5 border-b border-gray-600'>get to know me</li>
          <li className='p-5'>contact me</li>
        </ul>
        
    </div>
  );
};

export default Navbar;