import React from 'react'
import Map from './Map'

function Location() {
    return (
        <div className=' py-40'>
            <div className=' text-4xl md:text-6xl lg:text-7xl max-w-screen flex flex-col justify-center items-center font-inter gap-3.5 p-10 md:p-24'>
                <p>Get in Touch With </p>
                <p className='font-serifpro italic'>Ellaura Mist</p>
            </div>
            <div className='flex justify-center  max-w-screen'>
                <div className=' h-full w-full flex font-karla items-center md:items-start md:justify-center  gap-8 flex-col md:flex-row px-5  lg:px-40 md:px-30 md:h-[40rem] '>
                    <form className=' h-full w-full  lg:w-1/2 lg:min-w-[25rem] md:min-w-[22rem] flex flex-col text-md font-inter font-light gap-4 flex-1  ' action="">
                        <ul className=' flex flex-col gap-5'>
                            <li className=' flex-1 flex flex-col gap-2 '>
                                <label htmlFor="">Your name</label>
                                <input className='bg-gray-300 h-8 lg:h-12 md:h-10' type="text" />

                            </li>
                            <li className=' flex flex-col gap-2 '>
                                <label htmlFor="">Email</label>
                                <input className='bg-gray-300 h-8 lg:h-12 md:h-10' type="text" />

                            </li>
                            <li className=' flex flex-col gap-2 '>
                                <label htmlFor="">Subject</label>
                                <input className='bg-gray-300 h-8 lg:h-12 md:h-10' type="text" />

                            </li>
                            <li className=' flex flex-col gap-2 justify-center  '>
                                <label htmlFor="">Messege</label>
                                <input className='bg-gray-300 lg:h-60 h-40 md:h-50' type="text" />

                            </li>
                        </ul>
                        <div className=' w-full flex justify-center md:justify-start'>
                            <button className='border h-10 w-26 rounded-full font-medium ' >Submit</button>
                        </div>


                    </form>


                    <div className=' w-full lg:w-1/2 lg:min-w-[28rem] md:min-w-[22rem] md:h-[31.5rem] lg:h-[35.7rem] z-0 flex justify-center aspect-square'>
                        <Map />
                    </div>


                </div>


            </div>
        </div>
    )
}

export default Location