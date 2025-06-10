import React from 'react'
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Logo from '../assets/svg/elura.svg?react';
import Cart from '../assets/svg/cart.svg?react';


gsap.registerPlugin(ScrollTrigger);


function Navbar() {
  const logsv = useRef(null);
  const nav = useRef(null)
  useEffect(() => {

    gsap.set(logsv.current,
      {
        x:93,
        y: 150,
        scale: 3

      }
    )
    gsap.to(logsv.current,
      {

        x: 0,
        y: 0,
        scale: 1,
        ease: "power1.inOut",
        scrollTrigger: {


          end: "5%",

          scrub: 0.5,



        }
      },)

    gsap.to(nav.current, {
      backgroundColor: "#ffffff",
      ease: "none",

      scrollTrigger: {
       
        end: "15%",
        scrub: 0.5
      }
    })

  }, [])






  return (
    <div ref={nav} className='sticky top-0 z-10 w-screen flex justify-center'>
 <div  className='flex justify-between  items-center w-[90vw]  '>
      <div ref={logsv}>
        <Logo className=" h-15 w-15" />
      </div>
      <ul className=' font-inter flex gap-20'>
        <li>Products</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
      <Cart className="h-[25px] w-[25px]" />
    </div>
    </div>
   
  )
}

export default Navbar