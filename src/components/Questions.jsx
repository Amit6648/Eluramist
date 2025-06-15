import React from 'react'
import questimg from '../assets/images/ques.png'

function Questions() {
    return (

        <div className='max-w-screen flex justify-center mt-40'>

        <div className='bg-gray-300 h-screen w-[70vw] flex'>
            <div className='w-1/2 h-full  flex items-center justify-end'>
                <img className=' h-4/5' src={questimg} alt="dadadada" />
            </div>
            <div className='w-1/2 h-full  flex flex-col justify-center'>
            <div className='flex flex-col h-3/4 justify-around pl-10'>
                <div className='text-5xl flex flex-col gap-3.5 '>
                    <p className='font-inter '>Frequently Asked</p>
                    <p className='font-playboy'>Questions</p>
                </div>
                
                <ul className='font-inter text-xl flex flex-col gap-5'>
                    <li className='border-b h-14'>How do i place a order</li>
                    <li className='border-b h-14'> What payment methods do we accept</li>
                    <li className='border-b h-14'>What is payment methods</li>
                    <li className='border-b h-14'> How can i contact customer support</li>
                </ul>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Questions