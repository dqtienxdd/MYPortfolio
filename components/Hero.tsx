"use client";
import React from 'react'
import { Spotlight } from './ui/Spotlight';

import { HeroHighlight } from "./ui/herogrid";
import {TextGenerateEffect} from "./ui/TextGeneratedEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
const Hero = () => {
  return (
    <div className = "pb-20 pt-36 h-screen" >
      <div>
        <Spotlight className="-top-40 -left-10 
        md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="top-10 left-full
        h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="top-28 left-full
        h-[80vh] w-[50vw]" fill="purple" />
      </div>
      {/* <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.2] absolute flex items-center justify-center
      top-0 left-0"> */}
        {/* Radial gradient for the container to give a faded look */}
        {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        
      </div>
      <div className= "flex justify-center relative my-20 z-10">
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'></div>
          <h2 className = "uppercase tracking-widest text-xs text-center text-blue-100
          max-w-80">
            My Portfolio
          </h2>
      </div> */}
      <HeroHighlight>
      
    </HeroHighlight>
    <div className="flex justify-center relative my-20 x-10">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
        <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
         
        </h2>
      <TextGenerateEffect 
        className="mt-10 text-center text-[40px] md:text-5xl lg: text-6xl"
        words="Hi, I&apos;m Tien"

          />
      <p  className="text-center md: tracking-wider mb-4
      text-sm md:text-lg lg:text-2xl"
          style={{
            maxWidth: '50ch', // Adjust the value to set the character limit per line
            wordWrap: 'break-word',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 4, // Adjust the value to set the number of lines
            
          }}>
        I am a Fullstack Developer with a deep passion for coding and an exceptional work ethic thrives in both front-end and back-end development. 
      </p>
      <a href="#about">
        <MagicButton 
        title="Show my work"
        icon ={<FaLocationArrow/>}
        position = 'right'
        />
        
      </a>
      
      </div>

    </div>
    </div>
  )
}

export default Hero
