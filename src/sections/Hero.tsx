'use client'

import ArrowRight from '@/assets/arrow-right.svg'
import cogImage from '@/assets/cog.png'
import Image from 'next/image'
import cylinder from '@/assets/cylinder.png'
import noodleImage from '@/assets/noodle.png'
import {motion, useScroll, useTransform, } from 'framer-motion'
import { useRef } from 'react'

export const Hero = () => {
  
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"]
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  
  // useMotionValueEvent(translateY, 
  //   "change", (latestValue) => console.log(latestValue))

  return (
    <section ref={heroRef} className=' max-h-[900px] pt-8 pb-0 md:pt-5 md:pb-10
    bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#eaeefe_100%)] 
    overflow-x-clip ' > 
      <div className='container' >
      <div className='md:flex items-center' >

      
      <div className='md:w-[478px]' >
        
        <div className='tag' > Version 2.0 is here
      </div>
      
      <h1 className=' text-5xl md:text-7xl tracking-tighter 
      font-bold bg-gradient-to-b from-black
       to-[#0f66ca] text-transparent
      bg-clip-text mt-6' >
        Pathway to productivity</h1>
      <p className='mt-6 text-xl text-[#010D3E] tracking-tight ' >
        Celebrate the joy of accomplishment
        with an app deseigned to track your
        progress, motivate your efforts, and
        celebrate your successes.
      </p>
      
      <div className='flex mt-[30px] items-center gap-1' >
        <button className='btn btn-primary' >get for free
        </button>
        <button className='btn btn-text gap-1'>Lear more</button>
        <span>
          <ArrowRight className="w-5 h-5" />
          </span>
        </div>
        
        </div>
      
      <div className='mt-20 md:mt-0 h-[648px] 
      md:flex-1 relative ' >
        
        <motion.img src={cogImage.src} 
        className=' md:absolute md:h-full md:w-auto 
        md:max-w-none md:-left-6 lg:left-0'
        alt='seila'  
        
        animate={{
            translateY: [-30, 30]
        }}

        transition={{
            repeat: Infinity,
            repeatType:"mirror",
            duration:3,
            ease: 'easeInOut'
        }}
        />
        
        <motion.img src={cylinder.src} 
        className='hidden md:block -top-8 
        -left-32 absolute'
        width={220} 
        height={220} 
        alt='cilindro' 
        
        style={{
          translateY: translateY
        }}
        />
        
        <motion.img src={noodleImage.src} 
        className='hidden lg:block md:block 
        top-[524px] left-[448px] absolute 
        rotate-[30deg]'
        width={220} 
        height={220} 
        alt='cilindro' 
        
        style={{
          rotate:30,
          translateY: translateY
        }}

        />
      
      </div>
      </div>
      </div>
    </section>
  );
};
