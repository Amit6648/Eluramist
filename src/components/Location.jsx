import React from 'react'
import Map from './Map'

function Location() {
    return (
        <div>
        <div className='text-6xl max-w-screen flex flex-col justify-center items-center  font-inter gap-3.5 p-24'>
            <p>Get in Touch With </p>
            <p className='font-serifpro italic'>Ellaura Mist</p>
        </div>
        <div className='flex justify-center flex-wrap'>
            <div className='h-screen  w-[70vw] flex justify-between gap-8'>
                <form className=' w-[50%] h-[83%]  flex flex-col justify-between text-sm font-inter font-light' action="">
                    <ul className='flex flex-col gap-5 h-[90%] w-[100%] '>
                        <li className=' h-18 bg-gray-300 flex justify-center '>
                            <div className=' w-[95%] flex flex-col justify-around'>

                                <p className=''>Your  Name</p>
                                <input className='border-b border-gray-400' type="text" />
                          
                            </div>

                        </li>
                       <li className=' h-18 bg-gray-300 flex justify-center '>
                            <div className=' w-[95%] flex flex-col justify-around'>

                                <p className=''> Your Email</p>
                                <input className='border-b border-gray-400' type="text" />
                          
                            </div>

                        </li>
                         <li className=' h-18 bg-gray-300 flex justify-center '>
                            <div className=' w-[95%] flex flex-col justify-around'>

                                <p className=''>Subject</p>
                                <input className='border-b border-gray-400' type="text" />
                          
                            </div>

                        </li>
                        <li className=' h-78 bg-gray-300 flex justify-center  '>
                            <div className=' w-[95%] flex flex-col justify-around'>

                                <p className=''> Messege</p>
                                <input className='border-b h-56 border-gray-400' type="text" />
                          
                            </div>

                        </li>
                    </ul>

                    <button className='border h-10 w-26 rounded-full font-medium' >Submit</button>
                </form>
                <div className='w-[50%] z-0 h-[75%]'>
                    <Map />
                </div>

            </div>


        </div>
        </div>
    )
}

export default Location