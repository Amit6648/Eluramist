import React from 'react'
import Logo from '../assets/svg/elura.svg?react'
import Phone from '../assets/svg/phone.svg?react'
import Loc from '../assets/svg/loc.svg?react'
import Mail from '../assets/svg/mail.svg?react'
import Facebook from '../assets/svg/facebook.svg?react'
import Instagram from '../assets/svg/instagram.svg?react'
function Fotter() {
  return (
    <div className=' font-inter p-10 bg-white'>
        <div className=' max-w-screen flex justify-around '>

            <div className='h-full flex flex-col justify-center'>
          <Logo className=" h-60 w-40 "/>
            </div>
            <div className=' text-lg flex flex-col gap-2.5' >
                <p className='text-2xl py-2.5'>Quick links</p>
                <p>Home</p>
                <p>Products</p>
                <p>About</p>
                <p>FAQ</p>
                <p>Contact Us</p>
                <p> Privacy Policy</p>
                <p>Return Policy</p>
                <p>Terms of Services</p>
            </div>
            <div className='flex flex-col gap-2.5'>
                <p className='text-2xl py-2.5'>REACH US AT :</p>
                <div className='flex gap-3 items-center'>
                    <Loc className=" h-8"/>
                <p>NEAR BUS STAND CHOWK Near Green Hotel, Punjab</p>
                </div>
                <div className='flex gap-3 items-center'>
                    <Phone className=" h-8"/>
                <p> +91-942424322423</p>
                </div>
                <div className='flex gap-3 items-center'>
                    <Mail className=" h-8"/>
                <p>info@Ellauramist.com</p>
                </div>
            </div>
            <div className='flex flex-col gap-2.5 py-2.5'>
                <p className='text-2xl'>Follow Us On :-</p>
                <p className='flex gap-2'>
                    <Instagram/>
                    <Facebook/>
                </p>
            </div>
        </div>
        <div className='max-w-screen flex justify-center py-6'>
            <p>Copyright © 2024 Ellaura Mist. All rights reserved</p>
        </div>
    </div>
  )
}

export default Fotter