import Image from 'next/image'
import React from 'react'
import Profile from "../public/assets/profile.png";

const Navbar = () => {
  return (
    <div className=' mx-2 md:mx-[20px] flex justify-between items-center my-1'>
        <div className='logo'>
            <p className='text-3xl text-black font-semibold'>WhatBytes</p>
        </div>
        <div className='id'>
            <div className='box flex  justify-between gap-5 items-center bg-gray-100 border-gray-300 shadow-sm border-2 px-2 md:px-4 py-2 rounded-md'>
                <Image src={Profile} width={30} height={30} alt='profile' />
                <p className='text-black font-semibold'>Rahil Siddiqui</p>
            </div>
        </div>

        


        
      
    </div>
  )
}

export default Navbar
