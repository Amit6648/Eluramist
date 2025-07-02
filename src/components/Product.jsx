import React from 'react'
function Product({ price, description, image }) {
    return (
        <>
            <div className='card  flex flex-col gap-2  md:min-w-[19rem] '>
                <div className='h-[300px] w-[300px] '>
                    <img className=' object-contain ' src={image} alt="sunscream " />
                </div>
                
                <div className='flex flex-col justify-between gap-4 w-full'>
                    <p className=' text-md h-10'>{description}</p>
                    <p className='text-sm  opacity-70'>₹{price}</p>
                </div>
                <div className=''>
                    <button className=' bg-gray-50 w-full p-2 md:p-4 border'>Add to cart</button>
                </div>

            </div>

            <div>

            </div>
        </>

    )
}

export default Product