import React from 'react'
import Navbar from '../components/Navbar'
import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import backtext from '../assets/images/backtext.png'
import sun from '../assets/images/sun.png'
import koji from '../assets/images/koji.png'
import robo from '../assets/images/robo.png'

function Contact() {
  const hero = useRef(null)
  const boxes = useRef(null)
  const pinarea = useRef(null)
  const orange = useRef(null)
  const brown = useRef(null)
  const blue = useRef(null)
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(hero.current, {
        opacity: 0
      },
        {
          y: -20,
          opacity: 1,
          ease: "power1.inOut"
        })

      ScrollTrigger.create({
        trigger : pinarea.current,
        start : "top-=10% top",
        end : "+=150%",
        pin : true
      })
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: hero.current,
          start: "top top+=50%",
          end: "+=100%",
          scrub: 0.5
        }
      
      })

      tl.to(hero.current,
        {
          y: -260,
          ease: "power1.inOut",
         
        }
      )

      tl.fromTo(boxes.current,
      {
        opacity : 0
      },

      {
        y : -250,
        opacity : 1,
        ease : "power1.inOut"
      }
    )

    tl.to(brown.current, {
      x: 60,
      ease : "power1.inOut",

      duration : 2
    },)


     tl.to(orange.current, {
      y: 60,
      ease : "power1.inOut",

      duration : 2
    } , "<")
  

     tl.to(blue.current, {
      x: -60,
      ease : "power1.inOut",

      duration : 2
    }, "<")
    
    })

    
    
    


    return () => ctx.revert();
  })
  return (
    <div className='bg-gray-200 h-[300vh]'>
      <Navbar />
      
      <div className='h-screen max-w-screen relative  bg-gradient-to-b from-gray-200 to-gray-500 overflow-hidden ' ref={pinarea}>

        <div className=' relative max-w-screen h-screen z-10  '>
 <img className=' absolute top scale-75 -bottom-100 -left-130 object-contain rotate-33' ref={orange} src={sun} alt="sun" />
  <img className=' absolute  scale-75  bottom-27 -left-170 object-contain rotate-116' ref={blue} src={robo} alt="sun" />
   <img className=' absolute scale-75 bottom-10 left-170 object-contain rotate-240' ref={brown} src={koji} alt="sun" />
      </div>
        <div ref={hero} className=' font-serifpro font-medium text-8xl top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-5  '>
          <p> Connect with </p>
          <p className='italic'>  Ellaura Mist</p>
        </div>

        <div ref={boxes} className='flex justify-center items-end h-screen gap-8 top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2 z-20' >
          <p className='bg-white/10 backdrop-blur-lg shadow rounded-lg w-66 h-52'></p>
          <p className='bg-white/10 backdrop-blur-lg shadow rounded-lg w-66 h-52'></p>
          <p className='bg-white/10 backdrop-blur-lg shadow rounded-lg w-66 h-52'></p>
        </div>
      </div>
    </div>
  )
}

export default Contact