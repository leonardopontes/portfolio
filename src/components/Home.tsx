import React from 'react';

const Home = () => {

  return (
    <div className="w-11/12 mx-auto flex justify-center -mt-36 ms:-mt-10 py-20">
      <div className="text-white py-20">
        <h1 className="font-bold text-3xl ms:text-5xl text-center py-20"> Filmes, séries e muito mais, sem limites </h1>
        <div className="flex justify-center">  
          <h1 className="text-lg -mt-12 ms:text-2xl text-center"> Assista onde quiser. Cancele quando quiser. </h1>
        </div>
        <div className="flex justify-center">  
          <h1 className="text-lg ms:text-xl text-center"> Quer assistir? Informe seu email para criar ou reiniciar sua assinatura. </h1>
        </div>
        <div className="flex flex-col items-center py-5 ss:flex-row ss:justify-center ss:space-x-4">
          <input type="text" placeholder="Email" className="bg-[#1b1b1b] opacity-50 rounded border ss:w-[45%] ss:px-5 ss:py-4 w-[80%] px-[10px] py-3 placeholder:text-sm" /> 
          <button className="bg-[#e50914] rounded border[#e50914] ss:mt-0 ss:py-3 ss:px-5 px-3 py-2 flex items-center mt-4">
            <span className='font-bold text-lg ss:text-2xl'>Vamos lá</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="Hawkins-Icon Hawkins-Icon-Standard"></svg>
          </button>  
        </div>
      </div>  
    </div> 
  )  
};

export default Home;