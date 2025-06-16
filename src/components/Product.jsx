import React from 'react'
import sunscream from '../assets/images/suncream.jpeg'
function Product( {price, description, image}) {
  return (
  <>
  
  
  
                  <div className='card  w-78 h-[58vh] p-5 flex flex-col gap-2 '>
                      <img className='h-80' src={image} alt="sunscream " />
                      <div className='flex flex-col justify-between gap-4'>
                          <p className='text-md h-8'>{description}</p>
                          <p className='text-sm opacity-70'>₹{price}</p>
                      </div>
                      <div className=''>
                          <button className=' bg-gray-50 w-full p-4 border'>Add to cart</button>
                      </div>
  
                  </div>
  
                  <div>
  
                  </div>
  </>
             
  )
}

export default Product