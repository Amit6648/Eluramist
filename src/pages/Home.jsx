import React from 'react'
import { useState, useRef, useEffect, useLayoutEffect } from 'react'
import { motion, rgba, scale } from "motion/react"
import Navbar from '../components/Navbar'
import showcase from '../assets/images/elurahome.png'
import girl1 from '../assets/images/girl1.jpg'
import girl2 from '../assets/images/girl2.jpg'
import Star from '../assets/svg/star.svg?react'
import Sun from '../assets/svg/sun.svg?react'
import Drop from '../assets/svg/droplet.svg?react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';
import Product from '../components/product'
import sunscream from '../assets/images/sunscreamfro.jpeg'
import retoniod from '../assets/images/retenoid.jpeg'
import aqua from '../assets/images/aqua.jpeg'
import acid from '../assets/images/acid.jpeg'
import Questions from '../components/Questions'
import Location from '../components/Location'
import Fotter from '../components/Fotter'
import productsm from '../assets/images/elurahomephone.png'

function Home() {
    gsap.registerPlugin(ScrollTrigger);

    const maintext = useRef(null)
    const protext = useRef(null)
    const products = useRef(null)
    const pinnedarea = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
   const mm = gsap.matchMedia();

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: protext.current,
                start: "top center",
                end: "+=60%",
                scrub: true
            }
        });

        tl.fromTo(protext.current, {
            y: "50%",
            opacity: 0,
            ease: "power1.in"
        }, {
            y: "0%",
            opacity: 1,
            ease: "power1.out",
            duration : 0.5
        });


        tl.to(protext.current,{
            y:"-50%",
            opacity : 0,
            ease : "power1.out"
        })

        ScrollTrigger.create({
            trigger: pinnedarea.current,
            start: "top top",
            end: "+=200%",
            pin: true
        });


        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: products.current,
                start: "top top",
                end: "+=100%",
                scrub: 1
            }
        });

        tl1.fromTo(products.current, {
            y: "80%",
            opacity: 0,
            ease: "power1.in"
        }, {
            y: "0%",
            opacity: 1,
            ease: "power1.out"
        });

    });

    return () => ctx.revert(); 
}, []);



return (
    <div className=' bg-gray-200  max-w-srceen '>

        < Navbar />


        <div className=' md:h-[700px] lg:h-screen  max-w-screen  bg-gray-300 bg-gradient-to-b from-gray-200 to-gray-500'>

            <div className='h-screen max-w-screen relative  flex justify-center items-center'>
                <img src={showcase} alt="elura" className=' absolute  hidden md:top-[10%] lg:top-0  md:block' />

                <img src={productsm} alt=""  className=' absolute object-cover object-center h-[80vh] md:hidden opacity-70'/>
          

                <motion.div initial = {{
                   y:40,
                   opacity : 0
                }} 
                animate = {
                    {
                        y:0,
                        opacity:1,
                    }
                }

                transition={
                    {
                        ease : "easeInOut",
                        duration : 0.5
                    }
                }
                className=' text-4xl font-serifpro h-50 font-medium flex flex-col items-center gap-4 absolute top-50

                md:w-150 md:text-5xl lg:text-7xl  md:transform-none md:-translate-x-0 md:-translate-y-0 lg:top-[300px] lg:left-[120px] md:top-[250px] md:left-[100px] md:items-start
                  
                  '>
                    <p >Glow Up </p>
                    <p>Your Daily Ritual</p>
                    <motion.button
                    whileHover={{
                        color : "rgba(255,255,255)",
                        backgroundColor : "rgba(0,0,0)"

                    }}

                    transition={{
                        ease : "easeInOut",
                        duration : 0.2
                    }}
                    className='bg-white text-black p-2  rounded-full font-inter font-medium text-sm w-25 mt-1.5'>Shop now</motion.button>
                </motion.div>
            </div>
        </div>

        <motion.div
       initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
        className=' max-w-screen flex justify-center mt-24 mb-24'>
            <p className='flex justify-center items-center p-5 lg:p-10 border-t-2 border-b-2 w-[95vw] font-playboy text-xl md:text-4xl  italic font-semibold '>Your skin  Your ritual  Your time</p>
        </motion.div>

        <div className='max-w-screen  bg-gradient-to-tl from-white to-gray-400  '>
            <div className=' max-w-screen flex items-center justify-center font-serifpro italic font-semibold text-5xl'>
                <div className=' flex border-b-2 gap-2.5'>
                    <p className=''>Ellaura</p>
                    <p className='text-orange-600'> Mist</p>
                </div>

            </div>

            <div className=' flex flex-col md:flex-row  items-center py-10 gap-5'>
                <div className='w-1/2 flex justify-center scale-100 md:scale-110 lg:scale-130 '>
                    <div className='md:w-60 md:h-96  relative flex items-end justify-end  '>
                        <img className='h-76' src={girl1} alt="girl1" />
                        <img className=' h-56 absolute top-8 -left-12.5' src={girl2} alt="girl2" />
                    </div>
                </div>

                <div className='w-1/2 h-full  flex justify-center items-center py-10 '>
                    <ul className='font-karla flex flex-col gap-6'>
                        <li className='w-92 flex gap-1'>
                            <div>
                                <Star />
                            </div>

                            <div className='flex gap-1.5 flex-col border-b pb-3'>

                                <p className=' md:text-xl'>Cleansers</p>
                                <p className='text-sm md:text-[16px] text-gray-800'>Gently exfoliate and brighten with Glycolic Acid, while Salicylic Acid + LHA clears pores and fights breakouts fresh, balanced skin every time</p>
                            </div>

                        </li>

                        <li className='w-92 flex gap-1'>
                            <div >
                                <Drop />
                            </div>

                            <div className='flex gap-1.5 flex-col border-b pb-3'>

                                <p className=' md:text-xl'>Moisturizers</p>
                                <p className='text-sm md:text-[16px] text-gray-800'>Hydrate deeply and restore elasticity with our nourishing creams and gels packed with retinoids, hyaluronic acid, and brightening boosters for radiant, smooth skin</p>
                            </div>

                        </li>

                        <li className='w-92 flex gap-1'>
                            <div >
                                <Sun />
                            </div>

                            <div className='flex gap-1.5 flex-col border-b pb-3'>

                                <p className=' md:text-xl'>Sun protection</p>
                                <p className='text-sm md:text-[16px] text-gray-800'>Shield your skin with broad-spectrum SPF 50 formulas that hydrate and protect perfect for keeping your glow safe from harmful rays all day long</p>
                            </div>

                        </li>

                    </ul>

                </div>
            </div>
        </div>

        <div ref={pinnedarea} className=' relative '>


            <div ref={protext} className='text-4xl md:text-8xl flex items-end justify-center font-inter  mt-20 text-gray-800 gap-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <p>OUR</p>
                <p>PRODUCTS</p>
            </div>
            <div ref={products} className='mt-20 '>
               
                  <div className='p-5'>

                <div className=' w-full flex items-center lg:justify-center font-karla gap-4 overflow-x-auto '>
                    <Product price={"500"} description={"Sunscreen SPF 50 with Hydrating Formula"} image={sunscream} />
                    <Product price={"449"} description={"Granactive Retinoid Cream"} image={retoniod} />
                    <Product price={"449"} description={"Hyaluronic Aqua Ge"} image={aqua} />
                    <Product price={"339"} description={"Glycolic Acid Face Wash"} image={acid} />
                </div>
                  </div>
               

                <div className='flex items-center justify-center py-6 '>
                    <button className=' bg-white border-2 border-dotted p-2 w-60 md:w-80 md:p-5'>More Products</button>
                </div>
            </div>

        </div>

        {/* <div className='h-screen md:hidden'></div> */}


        <Questions/>
      
      <Location/>
  
 <Fotter/>
    </div>
)
}

export default Home