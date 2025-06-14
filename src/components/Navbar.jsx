import React from 'react'
import { useRef, useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Logo from '../assets/svg/elura.svg?react';
import Cart from '../assets/svg/cart.svg?react';


gsap.registerPlugin(ScrollTrigger);


function Navbar() {
  const logsv = useRef(null);
  const nav = useRef(null)
useLayoutEffect(() => {
  const ctx = gsap.context(()=>{
    

    
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
  })

  return ()=> ctx.revert()
}, [])






  return (
    <div ref={nav} className=' max-w-screen flex justify-center sticky top-0 z-10'>
 <div  className='flex justify-between  items-center w-[90vw]  '>
      <div ref={logsv}>
        <Logo className=" h-15 w-15 " />
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