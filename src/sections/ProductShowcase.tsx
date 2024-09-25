'use client'

import ProductImage from '@/assets/product-image.png'
import Image from 'next/image';
import PyramidImage from '@/assets/pyramid.png'
import TubeImage from '@/assets/tube.png'
import { motion, useScroll, useTransform } from 'framer-motion'; 
import { useRef } from 'react';


export const ProductShowcase = () => {

  const productRef = useRef(null) 
  
  const { scrollYProgress } = useScroll({
    target:productRef,
    offset: ["start end", "end start"]
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [-150, 150])
 
  return (
    <section ref={productRef}  className=' overflow-x-clip bg-gradient-to-b from-[#ffffff] to-[#d2dcff] py-24 ' >
      <div className="container" >

        <div className='section-heading' >
              <div className='flex justify-center' >
              <div className='tag'>Boost your productivity</div>
              </div>
              <h2 className=' mt-5 section-title' >
                A more effective way to track progress</h2>
              
              <p className='mt-5 section-description ' 
              >Effortlessly turn your ideas into a fully functional, responsive, Saas 
                Website in just minutes with this template.
              </p>
          </div>
          
          <div className='relative' >

              <Image src={ProductImage} alt='product image' className='mt-10'/>
              
              <motion.img 
              src={PyramidImage.src} 
              alt='pyramid' 
              className=' hidden md:block absolute -right-36 -top-32'  
              height={262}
              width={262}

              style={{  
                translateY:translateY
              }}
              />

              <motion.img 
              src={TubeImage.src} 
              alt='pyramid' 
              className=' hidden md:block absolute bottom-24 -left-36'  
              height={248}
              width={248}
              
              style={{
                
                translateY:translateY
              }}
              />
          
          </div>

      </div>
    </section> 
  );
};


