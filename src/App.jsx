import { useState, useRef, useEffect } from 'react'
import Home from './pages/Home'
import Products from './pages/Products';
import Contact from './pages/Contact';
import Lenis from 'lenis'
import gsap from 'gsap';
import 'lenis/dist/lenis.css'
import ScrollTrigger from 'gsap/ScrollTrigger';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './pages/checkout';
import About from './pages/About'


function App() {


  useEffect(() => {


  gsap.registerPlugin(ScrollTrigger);

// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);
}, [])
  return (
    <>
<Router>
  <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/products' element={<Products/>}/>
   <Route path='/contact' element ={<Contact/>}/>
   <Route path='/checkout' element = {<Checkout/>}/>
   <Route path='/about' element = {<About/>}/>
  </Routes>
</Router>
    </>
  )
}

export default App
