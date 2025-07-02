import React from 'react'
import Navbar from '../components/Navbar'
import sun from '../assets/images/sun.png'
import koji from '../assets/images/koji.png'
import robo from '../assets/images/robo.png'

function About() {
  return (
    <div className=' bg-gray-200  max-w-srceen'>
      <Navbar />
      <div className='md:h-[700px] lg:h-screen  max-w-screen  bg-gray-300 bg-gradient-to-b from-gray-200 to-gray-500'>
        <div className='w-full h-full overflow-hidden relative'>
          <img className=' absolute top scale-75 -bottom-100 -left-130 object-contain rotate-33' src={sun} alt="sun" />
          <img className=' absolute  scale-75  bottom-27 -left-170 object-contain rotate-116'  src={robo} alt="sun" />
          <img className=' absolute scale-75 bottom-10 left-170 object-contain rotate-240'  src={koji} alt="sun" />
        </div>
      </div>
    </div>
  )
}

export default About