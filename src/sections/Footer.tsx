import LogoImage from '@/assets/logosaas.png'
import Image from 'next/image';
import SocialInsta from '@/assets/social-insta.svg'
import SocialLinkedin from '@/assets/social-linkedin.svg'
import SocialPin from '@/assets/social-pin.svg'
import SocialX from '@/assets/social-x.svg'
import SocialYoutube from '@/assets/social-youtube.svg'

export const Footer = () => {
  return (
    <footer className='bg-black text-[#bcbcbc] text-sm py-10 text-center' >
        <div className="container" >
              
              <div className='inline-flex relative  
              before:content-[""] before:top-2 before:bottom-0 before:blur before:w-full
              before:bg-[linear-gradient(to_right,#f87bff,#fb92cf,#ffdd9b,#c2f0b1,#2fd8fe)] 
              before:absolute ' >
                <Image className='relative'
                src={LogoImage} alt='' height={40} width={40}  />
              </div>
            
            <nav className='flex flex-col md:flex-row md:justify-center gap-6 mt-6' >
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Customers</a>
              <a href="#">Princing</a>
              <a href="#">Help</a>
              <a href="#">Carreers</a>
            </nav>
            <div className='flex  justify-center gap-6 mt-6' >
            <SocialInsta/>
            <SocialLinkedin/>
            <SocialPin/>
            <SocialX/>
            <SocialYoutube/>
            </div>
            <p className='mt-6' >&copy; 2024 your company .Inc All rights reserved</p>
        </div>
    </footer>
  );
};
