import { useState, useRef, useEffect } from 'react'
import Home from './pages/Home'
import Lenis from 'lenis'
import gsap from 'gsap';
import 'lenis/dist/lenis.css'
import ScrollTrigger from 'gsap/ScrollTrigger';



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
<Home/>
    </>
  )
}

export default App
