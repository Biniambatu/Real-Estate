import React from 'react'
import { assets } from '../assets/assets'

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';






const Footer = () => {
  return (
    <div className='pt-10 md:px-20 lg:px-32 bg-gray-900 overflow-hidden' id='Footer'>
    <div className='container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 text-gray-400'>
      <div className='w-full md:w-1/3'>
        <img src={assets.logo_dark} alt="" />
        <p className='text-gray-400 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ipsam tempora 
           natus animi nihil sequi fugit libero est dolor.</p>
      </div>
  
      <div className='w-full md:w-1/5'>
        <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
        <ul className='flex flex-col gap-2'>
          <a href="#Header" className='hover:text-white'>Home</a>
          <a href="#About" className='hover:text-white'>About us</a>
          <a href="#Contact" className='hover:text-white'>Contact us</a>
          <a href="#" className='hover:text-white'>Privacy policy</a>
        </ul>
      </div>
  
      <div className='w-full md:w-1/5'>
        <h2 className='text-white text-lg font-bold mb-4'>Follow Us</h2>
        <div className="flex flex-col space-y-3">
          <a href="#" className="flex items-center space-x-2 text-xl hover:text-white">
            <FaFacebook />
            <span>Facebook</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-xl hover:text-white">
            <FaTwitter />
            <span>Twitter</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-xl hover:text-white">
            <FaInstagram />
            <span>Instagram</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-xl hover:text-white">
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
  
      <div className='w-full md:w-1/3'>
        <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our newsletter</h3>
        <p className='text-gray-400 mb-4'>The latest news, articles, and resources, sent to your inbox weekly.</p>
        <div className='flex gap-2'>
          <input className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full' type="email" placeholder='Enter your email' />
          <button className='py-2 px-4 rounded bg-blue-500 hover:bg-blue-600 text-white'>Subscribe</button>
        </div>
      </div>
    </div>
  
    <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
      Copyright 2024 @ BiniWeb. All Rights Reserved.
    </div>
  </div>
  
  )
}

export default Footer
