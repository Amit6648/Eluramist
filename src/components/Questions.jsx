import React from 'react'
import questimg from '../assets/images/ques.png'

function Questions() {
    return (

        <div className='max-w-screen flex justify-center mt-40 p-5 '>

        <div className=' w-[1100px] flex flex-col  md:flex-row lg:gap-10' >
            <div className=' w-full md:w-1/2  flex items-center justify-center   '>
                <img className='  object-fill h-[350px] block md:h-[450px] lg:h-[600px] ' src={questimg} alt="dadadada" />
            </div>
            <div className='w-full md:w-1/2 h-full  flex flex-col justify-center items-center '>
            <div className='flex flex-col h-3/4  gap-10 lg:gap-16'>
                <div className='text-3xl lg:text-5xl flex flex-col gap-3.5 font-medium '>
                    <p className='font-inter '>Frequently Asked</p>
                    <p className='font-serifpro italic'>Questions</p>
                </div>
                <ul className='font-inter lg:text-xl flex flex-col gap-5 text-gray-700 w-[330px]  md:w-[350px] lg:w-[500px]'>
                    <li className='border-b border-gray-500 md:h-10 lg:h-14 flex justify-between'>
                        <p>How do i place a order</p>
                        <p className='text-2xl'>+</p>
                    </li>
                    <li className='border-b border-gray-500 md:h-10 lg:h-14 flex justify-between'> 
                        <p>What payment methods do we accept</p>
                         <p className='text-2xl'>+</p>
                    </li>
                    <li className='border-b border-gray-500 md:h-10 lg:h-14 flex justify-between'>
                        <p>What is payment methods</p>
                         <p className='text-2xl'>+</p>
                    </li>
                    <li className='border-b border-gray-500 md:h-10 lg:h-14 flex justify-between'> 
                        <p>How can i contact customer support</p>
                         <p className='text-2xl'>+</p>
                    </li>
                </ul>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Questions