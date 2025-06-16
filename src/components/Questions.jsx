import React from 'react'
import questimg from '../assets/images/ques.png'

function Questions() {
    return (

        <div className='max-w-screen flex justify-center mt-40'>

        <div className=' h-screen w-[70vw] flex'>
            <div className='w-1/2 h-full  flex items-center justify-end'>
                <img className=' h-4/5' src={questimg} alt="dadadada" />
            </div>
            <div className='w-1/2 h-full  flex flex-col justify-center'>
            <div className='flex flex-col h-3/4 justify-around pl-10'>
                <div className='text-5xl flex flex-col gap-3.5 font-medium '>
                    <p className='font-inter '>Frequently Asked</p>
                    <p className='font-serifpro italic'>Questions</p>
                </div>
                
                <ul className='font-inter text-xl flex flex-col gap-5 text-gray-700'>
                    <li className='border-b border-gray-500 h-14 flex justify-between'>
                        <p>How do i place a order</p>
                        <p className='text-2xl'>+</p>
                    </li>
                    <li className='border-b border-gray-500 h-14 flex justify-between'> 
                        <p>What payment methods do we accept</p>
                         <p className='text-2xl'>+</p>
                    </li>
                    <li className='border-b border-gray-500 h-14 flex justify-between'>
                        <p>What is payment methods</p>
                         <p className='text-2xl'>+</p>
                    </li>
                    <li className='border-b border-gray-500 h-14 flex justify-between'> 
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