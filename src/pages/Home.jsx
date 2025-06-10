import React from 'react'
import { useState, useRef, useEffect } from 'react'
import Navbar from '../components/navbar'
import showcase from '../assets/images/elurahome.png'
import girl1 from '../assets/images/girl1.jpg'
import girl2 from '../assets/images/girl2.jpg'
import Star from '../assets/svg/star.svg?react'
import Sun from '../assets/svg/sun.svg?react'
import Drop from '../assets/svg/droplet.svg?react'

function Home() {
    return (
        <div className=' bg-gray-200 h-[400vh]'>
            < Navbar />
            <div className=' h-[120vh] max-w-screen  bg-gray-300 bg-gradient-to-b from-gray-200 to-gray-500'>

                <div className='h-132 relative '>
                    <img src={showcase} alt="elura" className='w-screen h-160 ' />

                    <div className=' font-serifpro  h-50  w-110 text-6xl font-medium absolute inset-0 inset-x-28 inset-y-50 flex flex-col gap-4 '>
                        <p >Glow Up </p>
                        <p>Your Daily Ritual</p>
                        <button className='bg-white text-black p-2  rounded-full font-inter font-medium text-sm w-25 mt-1.5'>Shop now</button>
                    </div>
                </div>
            </div>

            <div className=' w-screen flex justify-center mt-24 mb-24'>
                <p className='flex justify-center items-center p-10 border-t-2 border-b-2 w-[95vw] font-playboy text-4xl italic font-semibold '>Your skin  Your ritual  Your time</p>
            </div>

            <div className='bg-gray-300 w-screen h-[110vh]'>
                <div className=' w-screen flex items-center justify-center font-serifpro italic font-semibold text-4xl  py-4'>
                    <div className=' flex border-b-2 gap-2.5'>
                        <p className=''>Ellaura</p>
                        <p className='text-orange-600'> Mist</p>
                    </div>

                </div>

                <div className=' flex pt-10'>
                    <div className='w-1/2 flex justify-center'>
                        <div className='w-60 h-96 relative flex items-end justify-end'>
                            <img className='h-66' src={girl1} alt="girl1" />
                            <img className=' h-46 absolute top-8 -left-1.5' src={girl2} alt="girl2" />
                        </div>
                    </div>

                    <div className='w-1/2 h-full  flex justify-center items-center'>
                        <ul className='font-inter flex flex-col gap-6'>
                            <li className='w-92 flex gap-1'>
                                <div>
                                    <Star />
                                </div>

                                <div className='flex gap-1.5 flex-col border-b-2 pb-3'>

                                    <p className='text-xl'>Cleansers</p>
                                    <p className='text-gray-800'>Gently exfoliate and brighten with Glycolic Acid, while Salicylic Acid + LHA clears pores and fights breakouts fresh, balanced skin every time</p>
                                </div>

                            </li>

                            <li className='w-92 flex gap-1'>
                                <div >
                                    <Drop />
                                </div>

                                <div className='flex gap-1.5 flex-col border-b-2 pb-3'>

                                    <p className='text-xl'>Moisturizers</p>
                                    <p className='text-gray-800'>Hydrate deeply and restore elasticity with our nourishing creams and gels packed with retinoids, hyaluronic acid, and brightening boosters for radiant, smooth skin</p>
                                </div>

                            </li>

                            <li className='w-92 flex gap-1'>
                                <div >
                                    <Sun />
                                </div>

                                <div className='flex gap-1.5 flex-col border-b-2 pb-3'>

                                    <p className='text-xl'>Sun protection</p>
                                    <p className='text-gray-800'>Shield your skin with broad-spectrum SPF 50 formulas that hydrate and protect perfect for keeping your glow safe from harmful rays all day long</p>
                                </div>

                            </li>

                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home