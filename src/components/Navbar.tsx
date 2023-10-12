import React from 'react';
import Image from 'next/image';

import { logonetflix } from "../assets";

const Navbar = () => {
  return (
	  <nav className="mx-auto lg:max-w-6xl px-9 py-1 sx:py-2 flex justify-between items-center">
      <Image src={logonetflix} alt="netflixlogo" className="w-28 h-12 ms:w-48 ms:h-20 xs:-ml-2.5 -ml-9" />
        <div className="flex space-x-6 lg:px-[30px] sx:inline-flex">
          <select className="w-14 h-7 ml-2.5 ms:w-36 ms:h-8 ms:m-0 bg-transparent rounded border border-white px-6 py-1 text-white">
            <option value="en">English</option>
            <option value="pt">Português</option>
          </select>
          <button className="bg-[#e50914] font-bold xs:px-[15px] sx:px-[10px] rounded-[3px] text-white text-[0.9rem]"> Entrar </button>  
        </div>
    </nav>
  );
};

export default Navbar;