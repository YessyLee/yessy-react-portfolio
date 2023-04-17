import React from 'react';
import Slider1 from './Slider1/Slider1';
import Slider2 from './Slider2/Slider2';
import Slider3 from './Slider3/Slider3';
import Slider4 from './Slider4/Slider4';



import { DiJavascript1, DiReact, DiHtml5 } from 'react-icons/di';
import { SiTailwindcss, SiCsswizardry, SiPython, SiPandas, SiJupyter, SiNumpy, SiDjango } from 'react-icons/si';

const Portfolio = () => {
  return (
    <body className="mt-10 p-24">
      
      <h1 className="animate-text text-center bg-gradient-to-r from-teal-500 via-purple-600 to-orange-500 bg-clip-text text-transparent text-5xl font-black pb-12 mb-5 md:text-4xl lg:text-5xl">My portfolio.</h1>

    <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-10 flex-col w-full">
      
      <div>
        <Slider1 />
      </div>

      <div className='p-5 border-b-2 border-slate-600 pb-10'>
        <h1 className='text-3xl font-bold text-white'>Crowdfunding site: <span className='text-[#AC34FF]'>FutureProofME</span></h1>
        <div className='flex justify-start gap-6 md:w-[75%] my-6 text-purple-400'>
          <DiJavascript1 size={30} />
          <DiReact size={30} />
          <SiTailwindcss size={30} />
          <SiCsswizardry size={30} />
          <DiHtml5 size={30} />
        </div>
        <p className='mt-4 text-slate-100 text-lg leading-tight'>FutureProofME is a crowdfunding platform to help users raise funds for their education. FutureProofME can help users overcome financial barriers that may otherwise prevent them from pursuing their desired career. </p>
        <p className='mt-5 mb-5 text-slate-100 text-lg leading-tight'>This is our last individual project at She Codes Plus, using React.js connecting to our DRF backend that we build on previous project. I styled the site using TailwindCSS as well as some html/CSS.</p>
        <button className='hover:bg-[#AC34FF] bg-fuchsia-400  w-[150px] 
          rounded-full font-bold py-2 mr-4 m-1 text-white text-lg'>Live website</button>
        <button className='hover:bg-[#AC34FF] bg-fuchsia-400  w-[150px] 
          rounded-full font-bold py-2 m-1 text-white text-lg'>Github</button>
        </div>

        <div>
        <Slider2 />
      </div>

      <div className='p-5 border-b-2 border-slate-600 pb-10'>
        <h1 className='text-3xl font-bold text-white'>Group project: <span 
      className='text-[#AC34FF]'>Buybuddy</span></h1>
        <div className='flex justify-start gap-6 md:w-[75%] my-6 text-purple-400'>
          <DiJavascript1 size={30} />
          <DiReact size={30} />
          <SiCsswizardry size={30} />
          <DiHtml5 size={30} />
          <SiDjango size={30} />
        </div>
        <p className='mt-4 text-slate-100 text-lg leading-tight'>Buybuddy is a website created by our group to help streamline purchasing decision for users, where users can easily compare products side by side from multiple websites. Buybuddy acts as a personal notebook for shopping purposes. Users can organise all of their favourite products through just one website, Buybuddy!</p>
      
        <p className='mt-5 mb-5 text-slate-100 text-lg leading-tight'>In this project, we created a fuctional backend using Django REST framework. Followed by React, Javascript, HTML/CSS on the frontend.</p>
        <button className='hover:bg-[#AC34FF] bg-fuchsia-400  w-[150px] 
          rounded-full font-bold py-2 mr-4 m-1 text-white text-lg'>Live website</button>
        <button className='hover:bg-[#AC34FF] bg-fuchsia-400  w-[150px] 
          rounded-full font-bold py-2 m-1 text-white text-lg'>Github</button>
        </div>

        <div>
        <Slider3 />
      </div>

      <div className='p-5 border-b-2 border-slate-600 pb-10'>
        <h1 className='text-3xl font-bold text-white'>My very first: <span 
      className='text-[#AC34FF]'>HTML/CSS profile page</span></h1>
        <div className='flex justify-start gap-6 md:w-[75%] my-6 text-purple-400'>
          <SiCsswizardry size={30} />
          <DiHtml5 size={30} />
          <DiJavascript1 size={30} />
        </div>
        <p className='mt-4 text-slate-100 text-lg leading-tight'>My very first website as part of our first project in the She Codes Plus program. I had lots of fun learning HTML/CSS for the first time, thoroughly enjoyed the Flexbox Froggy games (now bookmarked on my browser LOL).</p>
        <p className='mt-5 mb-5 text-slate-100 text-lg leading-tight'>The setup on this site is fairly simple due to my beginner experience, however managed to add a splash of Javascript on the 🍔 hamburger menu. I didn't refine on this project, as I will be using this new React.js website moving forward.</p>
        <button className='hover:bg-[#AC34FF] bg-fuchsia-400  w-[150px] 
          rounded-full font-bold py-2 mr-4 m-1 text-white text-lg'>Live website</button>
        <button className='hover:bg-[#AC34FF] bg-fuchsia-400  w-[150px] 
          rounded-full font-bold py-2 m-1 text-white text-lg'>Github</button>
        </div>

        <div>
        <Slider4 />
      </div>

      <div className='p-5'>
        <h1 className='text-3xl font-bold text-white'>Data Analytics: <span 
      className='text-[#AC34FF]'>Bike Rental Analysis</span></h1>
        <div className='flex justify-start gap-6 md:w-[75%] my-6 text-purple-400'>
          <SiPython size={30} />
          <SiPandas size={30} />
          <SiJupyter size={30} />
          <SiNumpy size={30} />
        </div>
        <p className='mt-4 text-slate-100 text-lg leading-tight'>Prior to She Codes Plus, I completed an intensive 16-week Data Analytics bootcamp. I always love working with numbers, data, reports and visualisation. Through data, we could made informed and better decision that could benefit everyone.</p>
        <p className='mt-5 mb-5 text-slate-100 text-lg leading-tight'>In this capstone project, I analysed bike rental market and presented my recommendation through live visual storytelling. I created the prediction using multiple regression modelling. This project was created on Jupyter Notebook using Python languages and libraries such as Pandas, Numpy, Seaborn, Matplotlib, SckitLearn and more...</p>
        <button className='hover:bg-[#AC34FF] bg-fuchsia-400  w-[150px] 
          rounded-full m-1 font-bold py-2 text-white text-lg'>Github repo</button>
        </div>
      </div>
    

    <div className="bg-gradient-to-r from-[#AC34FF] from-10% via-sky-via-30% to-indigo-900 to-90% rounded-lg shadow-2xl mt-10 py-3">
      <div className="flex justify-around">
        <h1 className="text-left text-xl font-bold text-slate-100 p-6">Please visit my Github page to view the rest of my backend projects using Python, Django and DRF!</h1>
        <p className='ml-10 mr-10 text-white-100 text-left'><button type="button"
        className=" py-2 text-sm font-bold p-4 m-4 rounded-lg text-slate-100 
        text-center bg-fuchsia-500 hover:bg-[#AC34FF] sm:text-lg ">My Github Page ➔</button></p>
      </div>
    </div>

   </body>
  );
};

export default Portfolio