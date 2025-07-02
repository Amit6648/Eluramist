import React from 'react'
import Navbar from '../components/Navbar'
import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import backtext from '../assets/images/backtext.png'
import sun from '../assets/images/sun.png'
import koji from '../assets/images/koji.png'
import robo from '../assets/images/robo.png'
import Questions from '../components/Questions'
import Location from '../components/Location'
import Fotter from '../components/Fotter'
import { IoMdCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";


function Contact() {
  const hero = useRef(null)
  const boxes = useRef(null)
  const pinarea = useRef(null)
  const orange = useRef(null)
  const brown = useRef(null)
  const blue = useRef(null)
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {

    const mm = gsap.matchMedia();


    const ctx = gsap.context(() => {

      mm.add("(max-width:778px)", () => {
        gsap.fromTo(hero.current, {
          opacity: 0
        },
          {
            y: -20,
            opacity: 1,
            ease: "power1.inOut"
          })

        ScrollTrigger.create({
          trigger: pinarea.current,
          start: "top-=10% top",
          end: "+=150%",
          pin: true
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
            y: -300,
            ease: "power1.inOut",
            color : "#616160"

          }
        )

        tl.fromTo(boxes.current,
          {
            opacity: 0
          },

          {
            y: -170,
            opacity: 1,
            ease: "power1.inOut"
          }
        )

        tl.to(brown.current, {
          x: 60,
          ease: "power1.inOut",

          duration: 2
        },)


        tl.to(orange.current, {
          y: 60,
          ease: "power1.inOut",

          duration: 2
        }, "<")


        tl.to(blue.current, {
          x: -60,
          ease: "power1.inOut",

          duration: 2
        }, "<")
      })


      mm.add("(min-width:778px)", ()=>{
      gsap.fromTo(hero.current, {
        opacity: 0
      },
        {
          y: -20,
          opacity: 1,
          ease: "power1.inOut"
        })

      ScrollTrigger.create({
        trigger: pinarea.current,
        start: "top-=10% top",
        end: "+=150%",
        pin: true
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
          opacity: 0
        },

        {
          y: -250,
          opacity: 1,
          ease: "power1.inOut"
        }
      )

      tl.to(brown.current, {
        x: 60,
        ease: "power1.inOut",

        duration: 2
      },)


      tl.to(orange.current, {
        y: 60,
        ease: "power1.inOut",

        duration: 2
      }, "<")


      tl.to(blue.current, {
        x: -60,
        ease: "power1.inOut",

        duration: 2
      }, "<")
    })

    })
    






    return () => ctx.revert();
  })
  return (
    <div className='bg-gray-200'>
      <Navbar />

      <div className=' h-screen   max-w-screen relative  bg-gradient-to-b from-gray-200 to-gray-500 overflow-hidden ' ref={pinarea}>

        <div className=' relative max-w-screen h-full z-10 hidden md:block  '>
          <img className=' absolute top scale-75 -bottom-100 -left-130 object-contain rotate-33' ref={orange} src={sun} alt="sun" />
          <img className=' absolute scale-75  bottom-27 -left-[45%] object-contain rotate-116' ref={blue} src={robo} alt="sun" />
          <img className=' absolute scale-75 bottom-10 left-170 object-contain rotate-240' ref={brown} src={koji} alt="sun" />
        </div>
        <div ref={hero} className=' text-2xl scale-200 font-serifpro font-medium lg:scale-100 lg:text-8xl top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-2 '>
          <p> Connect with </p>
          <p className='italic'>  Ellaura Mist</p>
        </div>

        <div ref={boxes} className=' flex flex-col md:flex-row  justify-end w-full md:flex md:justify-center md:items-end h-screen gap-4 md:gap-8 top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2 z-20' >
          <div className='bg-white/10 backdrop-blur-lg shadow rounded-lg  md:w-66 h-32 md:h-52 flex md:flex-col md:justify-around px-2.5 gap-3'>
            <div className=' flex flex-col justify-center md:justify-start'>
              <FaLocationDot className=' size-10' />
            </div>
            <div className='flex flex-col justify-center gap-2.5 font-karla'>
              <p className=' text-lg '>Our Address</p>
              <p className='text-xl font-semibold'>
                <p>BUS STAND CHOWK</p>
                <p>Near Green Hotel, Punjab</p>
              </p>
            </div>
          </div>
          <div className='bg-white/10 backdrop-blur-lg shadow rounded-lg  md:w-66 h-32 md:h-52 flex md:flex-col md:justify-around px-2.5 gap-3'>
            <div className=' flex flex-col justify-center md:justify-start'>
              <IoMdCall className=' size-10' />
            </div>
            <div className='flex flex-col justify-center gap-2.5 font-karla'>
              <p className=' text-lg '>Our Phone</p>
              <p className='text-xl font-semibold'>
                +91-9800660047
              </p>
            </div>
          </div>
          <div className='bg-white/10 backdrop-blur-lg shadow rounded-lg  md:w-66 h-32 md:h-52 flex md:flex-col md:justify-around px-2.5 gap-3'>
            <div className=' flex flex-col justify-center md:justify-start'>
              <IoMdMail className='size-10' />
            </div>
            <div className='flex flex-col justify-center gap-2.5 font-karla'>
              <p className=' text-lg '>Our Email</p>
              <p className='text-xl font-semibold'>
                info@ellauramist.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <Location />
      <Fotter />
    </div>
  )
}

export default Contact