'use client'

import React, {useState, useEffect} from 'react'
import {FaChevronUp} from 'react-icons/fa'
import { Link } from 'react-scroll';
import { fadeIn } from '../variantsjs';
import { motion, scroll } from 'framer-motion';

const BackToTopBtn = () => {

 
  return (
    <motion.div 
    variants={fadeIn('down', 0.2)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.4}}
    className=' relative'>
      
      <Link 
      to='home'
      smooth={true}
      className='cursor-pointer'
      >
        <FaChevronUp 
        className={`absolute bottom-[88px] right-[28px]  bg-[#ed1d24] w-12 h-12 p-2 text-white text-[11px] font-extrabold flex justify-center items-center`}
      
        />
      </Link>
    </motion.div>
      

     
  )
}

export default BackToTopBtn