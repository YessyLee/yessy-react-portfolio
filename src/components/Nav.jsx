import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, animateScroll as scroll } from 'react-scroll';

const Nav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => { 
    setNav(!nav);
  };

  const handleClose =()=> setNav(!nav)

  return (
    <div className='sticky top-0 left-0 right 0 z-10 bg-[#000300] flex justify-between items-center mx-auto h-28 w-full px-4 text-white pl-32'>
      <Link to="home" smooth={true} offset={-200} duration={500}>
      <a className="cursor-pointer"> 
      <h1 className='text-4xl font-bold text-[#AC34FF]'>YESSY<span className='text-white'>LEE</span></h1></a></Link>

      <a className="cursor-pointer"> 
      <ul className='hidden md:flex ml-96'>
        <li className='p-4 hover:text-purple-500'><Link to="home" smooth={true} offset={-200} duration={500}>home</Link></li>
        <li className='p-4 hover:text-purple-500'><Link to="portfolio" smooth={true} offset={-100} duration={500}>my portfolio</Link></li>
        <li className='p-4 hover:text-purple-500'><Link to="about" smooth={true} offset={-100} duration={500}>get to know me</Link></li>
        <li className='p-4 hover:text-purple-500'><Link to="contact" smooth={true} offset={-40} duration={500}>contact me</Link></li>
      </ul></a>

      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <a className="cursor-pointer"> 
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300]/90 ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#AC34FF] m-5'>YESSY<span className='text-white'>LEE</span></h1>
          <li className='p-5 border-b border-gray-600'><Link onClick={handleClose} to="home" smooth={true} offset={-50} duration={500}>home</Link></li>
          <li className='p-5 border-b border-gray-600'><Link onClick={handleClose} to="portfolio" smooth={true} offset={-100} duration={500}>my portfolio</Link></li>
          <li className='p-5 border-b border-gray-600'><Link onClick={handleClose} to="about" smooth={true} offset={-100} duration={500}>get to know me</Link></li>
          <li className='p-5'><Link to="contact" onClick={handleClose} smooth={true} offset={-100} duration={500}>contact me</Link></li>
        </ul></a>
        
    </div>
  );
};

export default Nav;