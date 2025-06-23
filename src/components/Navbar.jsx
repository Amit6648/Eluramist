import React from 'react'
import { useLocation } from 'react-router-dom';
import { useRef, useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Logo from '../assets/svg/elura.svg?react';
import Cart from '../assets/svg/cart.svg?react';
// Inside any component
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaCartShopping } from "react-icons/fa6";





gsap.registerPlugin(ScrollTrigger);


function Navbar() {
  const logsv = useRef(null);
  const nav = useRef(null)
  const contact = useRef(null)

  const location = useLocation();
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      const mm = gsap.matchMedia()

      if (location.pathname === "/") {


        mm.add("(min-width:778px) and (max-width:1023px)", ()=>{
           gsap.set(logsv.current,
          {
            x: 80,
            y: 230,
            scale: 2

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
              markers : true

            }
          },)

        })


       mm.add("(min-width:1024px)", ()=>{
           gsap.set(logsv.current,
          {
            x: 93,
            y: 250,
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
              markers : true

            }
          },)


        })


       
        gsap.to(nav.current, {
          backgroundColor: "#ffffff",
          ease: "none",

          scrollTrigger: {

            end: "15%",
            scrub: 0.5
          }
        })

      }



      if (location.pathname === "/contact") {
        gsap.to(nav.current, {
          backgroundColor: "#ffffff",
          ease: "none",

          scrollTrigger: {
            trigger: nav.current,
            start: "top+=1000 top ",
            end: "+=200%",
            scrub: 0.5,
          }
        })
      }

      if (location.pathname === "/checkout") {
        gsap.set(nav.current, {
          background: "#ffffff"
        })
      }

    })

    return () => ctx.revert()
  }, [])






  return (
    <div ref={nav} className=' max-w-screen flex justify-center sticky top-0 z-10'>
      <div className=' hidden md:flex justify-between items-center w-[90vw]  '>
        <Link ref={logsv} to="/">
          <Logo className=" h-15 w-15 " />
        </Link>
        <ul className=' font-inter flex gap-20'>
          <Link to="/products"> Products</Link>
          <Link ref={contact} to="/contact">Contact</Link>
          <Link to="about"> About</Link>
        </ul>
        <Cart className="h-[25px] w-[25px]" />
      </div>
      <nav>

      </nav>
      <div className='flex justify-between items-center w-[90vw] md:hidden'>
        <RxHamburgerMenu className=' scale-150' />
        <Link to="/">
          <Logo className=" h-15 w-15 " />
        </Link>
   <Cart className="h-[25px] w-[25px]" />
      </div>
    </div>

  )
}

export default Navbar