"use client"
import React from 'react';
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  const work = ['Frontend Engineer', 2000, 'Backend Engineer', 2000]

  return (
  <div>    
    <div className="w-full h-full sm:h-full mt-0 overflow-hidden">
    <div className="w-10/12 mx-auto">
    <div className="grid grid-cols-2 gap-4 text-white justify-between py-16 ss:gap-[30px] max-w-[1100px] mx-auto items-center">
      <div>
        <p className="text-6xl text-white font-semibold -mt-10"> Iam NoName </p>
        <p className="text-5xl text-white font-semibold mt-2">
          <TypeAnimation sequence={work} speed={1} wrapper="span" cursor={true} repeat={Infinity}/>
        </p>
      </div>
      <div className="mt-2 text-center">
        <Image src="../assets/vercel.svg" alt="Avatar" width={180} height={37} priority className='rounded-full mx-auto' />
      </div>  
    </div>
    </div>  
    </div> 
  </div> 
  )  
};

export default Home;