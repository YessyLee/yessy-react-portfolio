import React from 'react';
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='border-t-2 border-slate-400 max-w-[1240px] mx-auto py-12 px-4 grid lg:grid-cols-4 gap-8 text-gray-300'>
      <div className='col-span-2 mr-10 pr-10'>
        <h1 className='w-full text-3xl font-bold text-[#AC34FF]'>YESSY<span className='text-white'>LEE</span></h1>
        <p className='py-4'>Thank you She Codes Australia for the opportunity and your endless support in helping us achiving our career goal in tech. Forever grateful to She Codes Australia team - Kate Irwin, Angela Jacques, the amazing mentors and the rest of the crew 💜 </p>
        <p className='text-slate-500'>2023 Yessy Lee | She Codes Plus Australia Alumni. All rights reserved</p>
      </div>
    
    <div>
      <h6 className='font-bold text-lg text-purple-400'>SITE MAP</h6>
        <ul>
            <li className='text-md'>Home</li>
            <li className='text-md'>My portfolio</li>
            <li className='text-md'>Get to know me</li>
            <li className='text-md'>Contact me</li>
        </ul>
    </div>

    <div>
      <h6 className='font-bold text-lg text-purple-400'>GET IN TOUCH</h6>
        <ul>
          <li className='text-md'>E: yessy.rayner@gmail.com</li>
          <li className='text-md'>M: 0433 550 513</li>
          <li className='text-md'>Connect with me on:</li>
        </ul>

    <div className='flex justify-start md:w-[75%] my-6 gap-5 text-purple-400'>
     <FaGithubSquare size={30} />
     <FaLinkedin size={30} />
     <FaInstagram size={30} />
    </div>
 </div>
</div>

  );
};


export default Footer;