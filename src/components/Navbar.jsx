import React from 'react'
import { useLocation } from 'react-router-dom';
import { useRef, useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Logo from '../assets/svg/elura.svg?react';
import Cart from '../assets/svg/cart.svg?react';
import { motion, scale } from "motion/react"
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";



gsap.registerPlugin(ScrollTrigger);


function Navbar() {


  const MotionLink = motion(Link);
  const logsv = useRef(null);
  const nav = useRef(null)

  const location = useLocation();
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      const mm = gsap.matchMedia()

      if (location.pathname === "/") {


        mm.add("(min-width:778px) and (max-width:1023px)", () => {
          gsap.to(nav.current, {
            backgroundColor: "#ffffff",
            ease: "none",

            scrollTrigger: {

              end: "15%",
              scrub: 0.5
            }
          })

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


              }
            })

          gsap.fromTo(logsv.current,
            {
              x: 80,
              y: 270,
              scale: 2,
              opacity: 0,
              ease: "power1.inOut"
            },
            {
              x: 80,
              y: 230,
              scale: 2,
              opacity: 1,
              ease: "power1.inOut",
              duration: 0.5

            }
          )

        })


        mm.add("(min-width:1024px)", () => {
          gsap.to(nav.current, {
            backgroundColor: "#ffffff",
            ease: "none",

            scrollTrigger: {

              end: "15%",
              scrub: 0.5
            }
          })
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


              }
            },)


        })

      }

      if (location.pathname === "/contact" || location.pathname === "/about") {
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
    <div ref={nav} className=' max-w-screen flex justify-center sticky top-0 z-30'>
      <div className=' hidden md:flex justify-between items-center w-[90vw]  '>
        <Link ref={logsv} to="/">
          <Logo className=" h-15 w-15 " />
        </Link>
        <ul className=' font-inter flex gap-20'>
          <MotionLink
            whileHover={
              {


                backdropFilter: "blur(8px)",
                scale: 1.2,
                backgroundColor: "rgba(0,0,0,0.1)"

              }

            }
            transition={
              {
                ease: "easeInOut"
              }
            }

            className=' rounded-lg px-2 py-1 ' to="/products"> Products</MotionLink>
          <MotionLink
            whileHover={
              {
                backdropFilter: "blur(8px)",
                scale: 1.2,
                backgroundColor: "rgba(0,0,0,0.1)"


              }

            }
            transition={
              {
                ease: "easeInOut"
              }
            }
            className=' rounded-lg px-2 py-1' to="/contact">Contact</MotionLink>
          <MotionLink whileHover={
            {
              backdropFilter: "blur(8px)",
              scale: 1.2,
              backgroundColor: "rgba(0,0,0,0.1)"

            }

          }
            transition={
              {
                ease: "easeInOut"
              }
            }
            className=' rounded-lg px-2 py-1 ' to="/about"> About</MotionLink>
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