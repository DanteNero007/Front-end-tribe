'use client'

import ArrowRight from '@/assets/arrow-right.svg'
import Image from 'next/image';
import StarImage from '@/assets/star.png'
import SpringImage from '@/assets/spring.png'
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const CallToAction = () => {
  
  const callToActionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target:callToActionRef,
    offset: ["start end", "end start"]
  })

  const translateY = useTransform(scrollYProgress, [0,1], [150, -150])


  return (
    <section ref={callToActionRef} className="bg-gradient-to-b from-white to-[#d2dcff] 
    py-4 overflow-x-clip " >
        
        <div className="container" >
          
          <div className='section-heading relative' >
        <h2 className="section-title" >Sign up for free today</h2>
        <p className="section-description mt-5" >Celebrate the joy of accomplishment with an app designed
          to take your progress and motivate your efforts.
        </p>
        
        <motion.img src={StarImage.src}  alt='' 
        width={360} height={360} 
        className='absolute -left-[350px] -top-[137px] '
        style={{
          translateY,
        }}

        />

        <motion.img src={SpringImage.src}  alt='' 
        width={360} height={360} 
        className='absolute -right-[331px] -top-[19px] '
        style={{
          translateY,
        }}
        />
        </div>

        <div className="flex justify-center items-center mt-10 gap-2" >
          <button className="btn btn-primary" >Get for free</button>
          <button className="btn-text flex items-center gap-1 " >
            <span>Learn more</span>
            <ArrowRight className="h-5 w-5" />
            </button>
            </div>

        
        </div>

    </section>
  );
};
