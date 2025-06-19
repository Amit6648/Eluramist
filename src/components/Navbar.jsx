import React from 'react'
import { useLocation } from 'react-router-dom';
import { useRef, useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Logo from '../assets/svg/elura.svg?react';
import Cart from '../assets/svg/cart.svg?react';
// Inside any component
import { Link } from 'react-router-dom';





gsap.registerPlugin(ScrollTrigger);


function Navbar() {
  const logsv = useRef(null);
  const nav = useRef(null)
  const contact = useRef(null)
  
 const location = useLocation();
useLayoutEffect(() => {
  const ctx = gsap.context(()=>{
    

    if (location.pathname === "/") {
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

          scrub: true,



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
    
    }

 

    else
    {
      gsap.to(nav.current, {
      backgroundColor: "#ffffff",
      ease: "none",

      scrollTrigger: {
        trigger : nav.current,
       start : "top+=1000 top ",
        end: "+=200%",
        scrub: 0.5,
      
      }
    })
    }
    
  })

  return ()=> ctx.revert()
}, [])






  return (
    <div ref={nav} className=' max-w-screen flex justify-center sticky top-0 z-10'>
 <div  className='flex justify-between items-center w-[90vw]  '>
      <Link ref={logsv} to="/">
       <Logo className=" h-15 w-15 " />
      </Link>
      <ul className=' font-inter flex gap-20'>
       <Link  to="/products"> Products</Link>
       <Link ref={contact} to="/contact">Contact</Link>
       <Link to="about"> About</Link>
      </ul>
      <Cart className="h-[25px] w-[25px]" />
    </div>
    
    </div>
   
  )
}

export default Navbar