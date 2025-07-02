import React from 'react';
import Navbar from '../components/Navbar';
import elupro from '../assets/images/elurahomepro.png';
import Product from '../components/product';
import sunscream from '../assets/images/sunscreamfro.jpeg'
import retoniod from '../assets/images/retenoid.jpeg'
import aqua from '../assets/images/aqua.jpeg'
import acid from '../assets/images/acid.jpeg'
import kojic from '../assets/images/kojic.jpeg'
import sylic from '../assets/images/sylic.jpeg'
import Fotter from '../components/Fotter';

function Products() {
    return (
        <div className='bg-gray-200 '>
            <Navbar />
            <div className="h-screen max-w-screen bg-gradient-to-b from-gray-200 to-gray-500">


                <div className="relative w-full h-[90vh]">
                    <p className=' text-2xl font-medium  md:text-6xl  lg:text-8xl font-playboy absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-20 scale-200  md:scale-150 lg:scale-100 lg:font-light   '>Our Products </p>
                    <div className=' absolute  h-full w-full z-10'></div>
                    <img
                        src={elupro}
                        alt="Elura Home Product"
                        className="absolute top-0 left-0 w-full h-full object-cover z-0  "
                    />
                </div>
            </div>


            <div className='max-w-screen flex flex-col justify-center items-center mt-32'>
                <p className=' text-3xl md:text-6xl font-inter'>Empower Your Skin with </p>
                <p className='text-4xl md:text-6xl font-playboy italic'>Intelligent Care</p>
            </div>
            <div className='max-w-screen flex justify-center py-10'>
                <div className=' flex lg:grid grid-cols-6   gap-4 overflow-x-auto w-[70rem] px-10'>
                    <Product price={"500"} description={"Sunscreen SPF 50 with Hydrating Formula"} image={sunscream} />
                    <Product price={"449"} description={"Granactive Retinoid Cream"} image={retoniod} />
                    <Product price={"449"} description={"Hyaluronic Aqua Ge"} image={aqua} />
                    <Product price={"339"} description={"Glycolic Acid Face Wash"} image={acid} />
                    <Product price={"339"} description={"Glycolic Acid Face Wash"} image={acid} />
                    <Product price={"339"} description={"Glycolic Acid Face Wash"} image={acid} />
                </div>
            </div>

          <Fotter className="mt-20"/>
        </div>
    );
}

export default Products;
