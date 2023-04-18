import React from 'react';
import { DiVisualstudio } from 'react-icons/di';

const About = () => {
  return (
    <body name='about' className="mt-12 p-12 lg:p-24 border-b-2 border-slate-500 bg-gray-100">
        <h1 className="animate-text text-center bg-gradient-to-r from-teal-500 via-purple-600 to-orange-500 bg-clip-text text-transparent text-4xl font-black pb-12 mb-5 md:text-4xl lg:text-5xl">Get to know me.</h1>

        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-10 flex-col w-full">
            <div className="lg:p-10">
                <h2 className="animate-text bg-gradient-to-r from-teal-500 
                via-purple-600 to-orange-500 bg-clip-text text-transparent 
                font-black pb-12 text-2xl lg:text-3xl">My journey, why now.</h2>
                <p className='text-slate-600 lg:text-lg font-bold italic'>"Second chance in life don't always come twice, so grab the first opportunity that come to you."</p>
                <p className='text-slate-600 lg:text-lg pt-5'>This has been my life-hack for the past 2 years. Due to an unexpected event in 2020, I decided that I need a career transformation. I have been in the marketing and advertising field for over a decade, involved in all aspects across the industry. I always loved working with large data sets and numbers, and excel in problem-solving, so I decided to give tech and data a go. 
                </p>
                <p className='text-slate-600 lg:text-lg pt-5'>In 2022, I have been undertaking extensive learning in Data Science using Python programming languages, then came across She Codes Australia, applied for the Plus program and got in. I have been on the non-stop learning journey from 2022, I throroughly enjoy the process and don't want to lose the momentum. I can't wait to start my career in tech so I can be continually learning and upskilling.
                </p>
                <p className='text-slate-600 lg:text-lg pt-5 pb-5'>I am looking forward to start my career in tech, whether in the frontend, backend development or both, as well as data analytics. Below are some of my details, would love to connect and see where this takes us!</p>

                <button className='bg-[#AC34FF] hover:bg-fuchsia-400  w-[150px] 
                rounded-full font-bold py-2 m-2 text-white text-lg'><a href='https://drive.google.com/file/d/1N9i_8hg2cMCiU6_9LPysQe34vF_LANkL/view?usp=sharing'>My resume</a></button>
                <button className='bg-[#AC34FF] hover:bg-fuchsia-400  w-[150px] 
                rounded-full font-bold py-2 m-2 text-white text-lg'><a href='https://www.linkedin.com/in/yessy-rayner-perth/'>My LinkedIn</a></button>
                 <button className='bg-[#AC34FF] hover:bg-fuchsia-400  w-[150px] 
                rounded-full font-bold py-2 m-2 text-white text-lg'><a href='https://github.com/YessyLee'>My Github</a></button>
                
            
            
            </div>
            <div className='lg:p-10'>
            <h2 className="animate-text bg-gradient-to-r from-teal-500 
             via-purple-600 to-orange-500 bg-clip-text text-transparent text-2xl font-black pb-12 md:text-2xl lg:text-3xl">Things I love when I am not coding.</h2>

            <div className="h-screen">
               <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-4 gap-4 h-5/6 mx-auto">

                  <div className="bg-indigo-100/50 row-span-1 md:row-span-2">
                     <span></span>
                     <img className='w-full h-full object-cover mix-blend-normal shadow-xl' src="/images/hiking.jpg" alt="/" />
                  </div>

                  <div className="bg-pink-100 col-span-1 md:col-span-2">
                     <span></span>
                     <img className='w-full h-full object-cover mix-blend-normal shadow-xl' src="/images/puppies.jpg" alt="/" />
                  </div>

                  <div className="bg-purple-100/50">
                     <span></span>
                     <img className='w-full h-full object-cover mix-blend-normal shadow-xl' src="/images/gratitude.jpg" alt="/" />
                  </div>

                  <div className="bg-violet-100/50 row-span-1 md:row-span-2">
                     <span></span>
                     <img className='w-full h-full object-cover mix-blend-normal shadow-xl' src="/images/fengshui.jpg" alt="/" />
                  </div>

                  <div className="bg-sky-100/50 row-span-1 md:row-span-2 col-span-1 md:col-span-2">
                     <span></span>
                     <img className='w-full h-full object-cover mix-blend-normal shadow-xl' src="/images/indoorplants2.jpg" alt="/" />
                  </div>

                  <div className="bg-emerald-100/50">
                     <span></span>
                     <img className='w-full h-full object-cover mix-blend-normal shadow-xl' src="/images/crystals.jpeg" alt="/" />
                  </div>

               </div>
            </div>

            </div>
        </div>
    
    </body>
  );
};

export default About
