import React from 'react';
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='border-t-2 border-slate-400 max-w-[1240px] mx-auto py-12 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#AC34FF]'>YESSYLEE</h1>
        <p className='py-4'>Thank you She Codes Australia for the opportunity and your endless support in helping us achiving our career goal in tech. Forever grateful to She Codes Australia - Kate Irwin, Angela Jacques, the amazing mentors and the rest of the team 💜 </p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaGithubSquare size={30} />
            <FaLinkedin size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between'>
    <div></div>
    
    
    <div>
        <h6 className='font-bold text-lg text-slate-500 mt-12'>YESSYLEE SITE MAP</h6>
        <ul>
            <li className='text-md'>Home</li>
            <li className='text-md'>My portfolio</li>
            <li className='text-md'>Get to know me</li>
            <li className='text-md'>Contact me</li>
        </ul>
    </div>
    <div></div>
      </div>
    </div>
  );
};


export default Footer;