'use client'

import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css'

import { usePresence, useIsPresent } from "framer-motion"

import {Pagination} from 'swiper/modules'
import 'swiper/css/pagination'
import {FaQuoteLeft} from 'react-icons/fa'

import { motion } from 'framer-motion';
import { fadeIn } from '../variantsjs';
import Image from 'next/image';
import profile from '../images/joseph.png'
import profile2 from '../images/jerome.png'
import profile3 from '../images/pat.png'
import { useState,useEffect } from 'react'

const testimonialData = [
  {
    message: 'My expectations ahhhhhm ok lang',
    avatar: profile,
    name: 'Joseph De leon',
    job: 'Front end Developer & Cute'
  },
  {
    message: 'Abay grabe sulit talaga mag rent sa CARENTALS kasyang kasya yung mga chix ko dito',
    avatar: profile2,
    name: 'Jerome Apduhan',
    job: 'Photographer & Manyak '
  },
  {
    message: 'No Comment',
    avatar: profile3,
    name: 'Jan Patrick Abayon',
    job: 'Guitarist & Pogiii'
  }
]

const TestimonialSlider = () => { 

  return (
    <div className='w-[100%] mx-auto mt-[26px] xl:mt-[8px] h-full flex justify-center items-center'>
        <Swiper 
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={{Pagination}}
          className='h-[620px] xl:h-[450px] xl:mt-8 '
        >
          {testimonialData.map((person, index)=> {
            return <div key={index} className='flex justify-center items-center xl:mt-28 border-2'>
                <SwiperSlide key={index}>
                
                  <motion.div 
                  variants={fadeIn('down', 0.4)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{once: false, amount: 0.4}}
                  className='flex justify-center items-center flex-col text-center gap-1 mt-[18px] xl:mt-0'>

                    <div className='flex justify-center items-center flex-col text-center'>
                    <FaQuoteLeft className='text-[#ed1d24] text-8xl my-4 xl:text-6xl'/>

                    <h1 className='h2 text-gray-600 my-4 xl:w-[88%]'>{person.message}</h1>
                </div>
                    

              
                  <motion.div 
                  variants={fadeIn('up', 0.8)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{once: false, amount: 0.4}}
                  className='flex flex-col justify-center items-center gap-1 '
                  >     

                    <motion.div 
                    onClick={() => handleCLick()}
                    className='w-[88px] h-[88px] bg-red-500 rounded-full mt-[28px] flex justify-center items-center'>
                      <Image src={person.avatar} alt='' width={62} height={62}
                      className='rounded-full h-full w-full'
                      />
                    </motion.div>


                    <h3 className='text-2xl font-semibold'>{person.name}</h3>

                    <p>{person.job}</p>

                    <div                    
                   className='h-3 w-3 bg-red-500 rounded-full mt-[28px] xl:mt-[18px]'></div>


                  </motion.div>
                 
                    
                    
                  </motion.div>
                </SwiperSlide>
            </div>
          })}
        </Swiper>
    </div>
  )
}

export default TestimonialSlider