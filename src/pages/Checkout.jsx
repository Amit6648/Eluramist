import React from 'react'
import Navbar from '../components/Navbar'
import sunscreaminfo from '../assets/images/suncream.jpeg'
import sunscream from '../assets/images/sunscreamfro.jpeg'
import Product from '../components/product'
import acid from '../assets/images/acid.jpeg'
import Fotter from '../components/Fotter'

function Checkout() {

    return (
        <>
            <div className='bg-gray-200 max-w-screen h-[600vh]'>
                <Navbar />

                <div className=' max-w-screen h-screen flex flex-wrap'>
                    <div className=' w-[50%] h-full flex justify-end '>

                        <div className='h-[670px] w-[620px] flex p-10  '>
                            <img className=' object-fill w-full h-full' src={sunscream} alt="creams" />
                        </div>
                    </div>
                    <div className=' w-[50%] h-full flex flex-col p-10 '>
                        <div className='flex flex-col w-[70%] gap-2'>

                            <div className='flex flex-col gap-3 font-inter '>
                                <p className=' text-2xl font-inter '>Sunscreen SPF 50 for Dry Skin & oily Skin with Hydrating Formula</p>
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

                            <div className='py-6 flex gap-3.5'>
                                <button className='bg-black text-white text-md font-medium w-78 h-12  '> Add to cart</button>

                                <div className=' border border-gray-500 w-22 h-12 flex justify-between  '>
                                    <button className='border-r w-15 text-xl text-center'>+</button>
                                    <input type="text" className='w-10 text-center' value={0} />
                                    <button className='border-l w-15 text-xl text-center'>-</button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>


                <div className='max-w-screen p-30 flex flex-col gap-3.5'>
                    <h1 className='text-7xl font-inter'>
                        Related products
                    </h1>
                    <div className='flex gap-4'>
                        <Product price={"339"} description={"Glycolic Acid Face Wash"} image={acid} />
                        <Product price={"339"} description={"Glycolic Acid Face Wash"} image={acid} />
                        <Product price={"339"} description={"Glycolic Acid Face Wash"} image={acid} />
                    </div>
                </div>

              <Fotter/>
            </div>

        </>
    )
}

export default Checkout