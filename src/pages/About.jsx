import React from 'react'
import Navbar from '../components/Navbar'
import sun from '../assets/images/sun.png'
import koji from '../assets/images/koji.png'
import robo from '../assets/images/robo.png'
import { useRef, useLayoutEffect } from 'react'
import girl1 from '../assets/images/girl1.jpg'
import back from '../assets/images/bacgroundab.jpg'

function About() {

  const hero = useRef(null)
  return (
    <div className=' bg-gray-200  max-w-srceen'>
      <Navbar />


      <div className='md:h-[700px] lg:h-screen  max-w-screen  bg-gray-300 bg-gradient-to-b from-gray-200 to-gray-500 overflow-hidden'>
        <div className=' relative max-w-screen h-full hidden md:block  '>
          <img className=' absolute top scale-100 lg:scale-75 -bottom-[5%] lg:-bottom-[45%] -left-[20%] object-contain -rotate-33' src={sun} alt="sun" />
          <img className=' absolute scale-100 lg:scale-75 md:bottom-[40%] lg:bottom-[17%] -left-[35%]  rotate-45 ' src={robo} alt="sun" />
          <img className=' absolute scale-100 lg:scale-75 bottom-[50%] lg:bottom-[0%] left-[30%] object-contain rotate-210' src={koji} alt="sun" />
        </div>

        <div ref={hero} className=' text-2xl scale-200 font-serifpro font-medium md:scale-100 md:text-7xl lg:scale-140 top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center md:items-start gap-2 '>
          <p className=' text-5xl'> Discover</p>
          <p className='italic'>  Ellaura Mist</p>
        </div>
      </div>

      <div className='bg-black/10 backdrop-blur-2xl h-screen w-full rounded-xl absolute top-15 flex '>
        <div className=' w-1/2 h-full relative flex justify-center items-center bg-black/50  '>
          <div className=' relative h-150 w-100 border'>
            <img className=' w-86 aspect-[2.6/4] z-20 absolute left-[20%] top-[7%] ' src={girl1} alt="" />
            <img className=' aspect-[3/4]  absolute  z-10' src={back} alt="" />
          </div>
        </div>
        <div className=' w-1/2 h-full font-inter flex flex-col items-center justify-center'>
          <div className=' px-30 flex flex-col gap-10'>

            <div className='flex gap-2.5 text-5xl justify-start '>
              <p>Discover Ellaura Mist</p>
              <p className=''></p>
            </div>
            <div className='flex flex-col gap-5'>
              <p>Welcome to Ellaura Mist, your trusted partner in skincare. We offer a range of dermatologist-tested face washes and creams formulated with high-quality ingredients to enhance your natural beauty. Discover the magic of healthy skin</p>
              <p>Our mission is to empower individuals with effective and safe skincare solutions that cater to various skin types and concerns. Explore our collection and experience the difference that quality makes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About