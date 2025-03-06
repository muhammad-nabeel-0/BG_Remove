import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='py-3 mx-4 lg:mx-44 flex items-center justify-between'>
      <Link to='/'><img src={assets.logo} className='w-32 sm:w-44' /></Link>
      <button className='bg-zinc-800 text-white flex items-center gap-2 group px-4 py-2 sm:px-8 sm:py-3 text-sm rounded-full'>Get Started <img src={assets.arrow_icon} className='w-3 sm:w-4 group-hover:translate-x-1 duration-150' /></button>
        
      
    </div>
  )
}

export default Navbar
