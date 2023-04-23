import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import {
  FaGithubSquare,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='border-t-2 border-slate-400 max-w-[1240px] mx-auto py-12 px-8 grid lg:grid-cols-4 gap-8 text-gray-300'>
      <div className='col-span-2 mr-10 pr-10'>
        <h1 className='w-full text-3xl font-bold text-[#AC34FF]'>YESSY<span className='text-white'>LEE</span></h1>
        <p className='py-4'>Thank you She Codes Australia for the opportunity and your endless support in helping us achieving our career goal in tech. Forever grateful to She Codes Australia team - Kate Irwin, Angela Jacques, the amazing mentors and the rest of the crew 💜 </p>
        <p className='text-slate-500'>2023 Yessy Lee | She Codes Plus Australia Alumni. All rights reserved</p>
      </div>
    
    <div>
      <h6 className='font-bold text-lg text-purple-400'>SITE MAP</h6>
      <a className="cursor-pointer">
        <ul>
            <li className='text-md hover:text-purple-400'><Link to="home" smooth={true} offset={-200} duration={500}>Home</Link></li>
            <li className='text-md hover:text-purple-400'><Link to="portfolio" smooth={true} offset={-100} duration={500}>My portfolio</Link></li>
            <li className='text-md hover:text-purple-400'><Link to="about" smooth={true} offset={-100} duration={500}>Get to know me</Link></li>
            <li className='text-md hover:text-purple-400'><Link to="contact" smooth={true} offset={-40} duration={500}>Contact me</Link></li>
        </ul></a>
    </div>

    <div>
      <h6 className='font-bold text-lg text-purple-400'>GET IN TOUCH</h6>
        <ul>
          <li className='text-md'><a href='mailto:yessy.rayner@gmail.com'> E: yessy.rayner@gmail.com</a></li>
          <li className='text-md'>M: 0433 550 513</li>
          <li className='pt-5'></li>
          <li className='text-md font-bold'>Connect with me on:</li>
        </ul>

    <div className='flex justify-start md:w-[75%] my-6 gap-5 text-purple-400'>
      <a href="https://github.com/YessyLee"><FaGithubSquare size={30} className='hover:text-purple-100' /></a>
      <a href="https://www.linkedin.com/in/yessy-rayner-perth/"><FaLinkedin size={30} className='hover:text-purple-100' /></a>
      <a href='https://www.instagram.com/yessy_lee1/'><FaInstagram size={30} className='hover:text-purple-100'/></a>
    </div>
 </div>
</div>

  );
};


export default Footer;