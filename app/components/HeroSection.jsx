"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

   
  
export default function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white text-6xl sm:text-5xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Hello, I'm{" "}</span>
            <br />
             <TypeAnimation
      sequence={[
        'Mohamed',
        1000, 
        'frontEnd developer',
        1000
        
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
          </h1>
          <p className="text-[#abd7be] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            tempora atque ex. Est, alias neque!
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">HIRE ME</button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white  mt-3 ">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
              Download CV
              </span>
              </button>
          </div> 
        </div>
        <div className="col-span-5 place-self-center mt-5 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[300px] h-[300px] relative overflow-hidden">
            <Image
              alt="mohamed"
              src="/imgs/Portfolio.PNG"
              className="absolute transform -translate-x-0.5 translate-y-0.5"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
