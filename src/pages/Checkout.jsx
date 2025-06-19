import React from 'react'
import Navbar from '../components/Navbar'

function Checkout() {

    //     const details = {
    //         "price" : "549",
    //         "Product Benefits " : "Hydrating, Anti-Aging, Radiant Skin, Moisturizing, Brightening",
    // "Sun Protection Factor" : "50 Sun Protection Factor (SPF)",
    // "Item Weight" : "50 Grams",
    // "Number of Items" : 1,
    // "Net Quantity" : "50.0 gram",
    // "Skin Type": "All",
    // "Item dimensions L x W x H": "15 x 5 x 5 Centimeters",
    // "Brand ": "ELLAURAMIST",
    // "Item Volume": "50 Millilitres",
    // "Skin Tone": "All"
    //     }
    return (
        <>
            <div className='bg-gray-200 max-w-screen h-[600vh]'>
                <Navbar />

                <div className=' max-w-screen h-screen flex flex-wrap'>
                    <div className='border w-[50%] h-full bg-green-400 '></div>
                    <div className='border w-[50%] h-full flex flex-col p-10  '>
                        <div className='flex flex-col w-[70%]'>

                            <div className='flex flex-col gap-3 font-inter '>
                                <p className=' text-xl font-inter '>Sunscreen SPF 50 for Dry Skin & oily Skin with Hydrating Formula</p>
                                <p className='font-inter'>₹559</p>
                            </div>
                            <p className='py-5 text-md font-light font-inter '>Indulge your skin in a rich, hydrating formula designed to smooth fine lines, enhance radiance, and restore youthful glow. With every use, enjoy intense moisture, visible brightness, and timeless elegance</p>

                            <ul>
                                <li className='flex gap-2.5'>
                                    <p className=' font-medium'>Item Volume :</p>
                                    <p className='font-light'> 50 Millilitres</p>
                                </li>
                                <li className='flex gap-2.5'>
                                    <p className=' font-medium'>Skin type :</p>
                                    <p className='font-light'> All</p>
                                </li>

                                <li className='flex gap-2.5'>
                                    <p className=' font-medium'>Item dimensions L x W x H:</p>
                                    <p className='font-light'>  15 x 5 x 5 Centimeters</p>
                                </li>

                            </ul>

                            <div className='py-6'>
                                <button className='bg-white text-lg font-medium p-2 w-56 border '> Checkout</button>
                                
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Checkout