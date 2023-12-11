'use client'

import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'

import Image from 'next/image'
import {FaStar, FaStarHalfAlt, FaRegStar} from 'react-icons/fa'
import {motion} from 'framer-motion'
import {fadeIn} from '../variantsjs'
import Link from 'next/link'


import car1 from '../images/fordmustang.png'
import car2 from '../images/car2.png'
import car3 from '../images/car3.png'
import car4 from '../images/car4.png'
import car5 from '../images/car5.png'
import car6 from '../images/car6.png'
import car7 from '../images/car7.png'
import car8 from '../images/car8.png'

import part1 from '../images/manual.png'
import part2 from '../images/gas.png'
import part3 from '../images/seat.png'
import part4 from '../images/horsepower.png'
import part5 from '../images/front.png'

const cars = [
  {
    type: 'DB11',
    name: 'ASTON MARTIN',
    price: 29,
    stars: 3.5,
    image: car1,
    
    info: [
      {
        icon: part1,
        text: 'Manual'
      },
      {
        icon: part2,
        text: 'Gas'
      },
      {
        icon: part3,
        text: '4 seat'
      },
      {
        icon: part4,
        text: '3998 CC'
      },
      {
        icon: part5,
        text: 'Front'
      },
    ]
  },
  {
    type: 'XE (X760)',
    name: 'JAGUAR',
    price: 29,
    stars: 3.5,
    image: car2,
    info: [
      {
        icon: part1,
        text: 'Automatic'
      },
      {
        icon: part2,
        text: 'Gas'
      },
      {
        icon: part3,
        text: '5 seat'
      },
      {
        icon: part4,
        text: '1999 CC'
      },
      {
        icon: part5,
        text: 'Front'
      },
    ]
  },
  {
    type: 'X6 F16',
    name: 'BMW',
    price: 29,
    stars: 3.5,
    image: car3,
    info: [
      {
        icon: part1,
        text: 'Automatic'
      },
      {
        icon: part2,
        text: 'Gas'
      },
      {
        icon: part3,
        text: '5 seat'
      },
      {
        icon: part4,
        text: '2998 CC'
      },
      {
        icon: part5,
        text: 'FRONT'
      },
    ]
  },
  {
    type: 'FLYING SPUR (2nd GEN)',
    name: 'BENTLEY',
    price: 29,
    stars: 3.5,
    image: car4,
    info: [
      {
        icon: part1,
        text: 'Automatic'
      },
      {
        icon: part2,
        text: 'Gas'
      },
      {
        icon: part3,
        text: '5 seat'
      },
      {
        icon: part4,
        text: '3993 CC'
      },
      {
        icon: part5,
        text: 'Front'
      },
    ]
  },
  {
    type: 'Giulia (952)',
    name: 'ALFA ROMEO',
    price: 29,
    stars: 3.5,
    image: car5,
    info: [
      {
        icon: part1,
        text: 'Automatic'
      },
      {
        icon: part2,
        text: 'Gas'
      },
      {
        icon: part3,
        text: '5 seat'
      },
      {
        icon: part4,
        text: '1995 CC'
      },
      {
        icon: part5,
        text: 'Front'
      },
    ]
  },
  {
    type: 'F12 BERLINETTA',
    name: 'FERRARI',
    price: 29,
    stars: 3.5,
    image: car6,
    info: [
      {
        icon: part1,
        text: 'Automatic'
      },
      {
        icon: part2,
        text: 'Gas'
      },
      {
        icon: part3,
        text: '2 seat'
      },
      {
        icon: part4,
        text: '6262 CC'
      },
      {
        icon: part5,
        text: 'Front'
      },
    ]
  },
  {
    type: 'URUS',
    name: 'LAMBORGHINI',
    price: 29,
    stars: 3.5,
    image: car7,
    info: [
      {
        icon: part1,
        text: 'Automatic'
      },
      {
        icon: part2,
        text: 'Gas'
      },
      {
        icon: part3,
        text: '5 seat'
      },
      {
        icon: part4,
        text: '3996 CC'
      },
      {
        icon: part5,
        text: 'Front'
      },
    ]
  },
  {
    type: 'WRANGLER / GLADIATOR',
    name: 'JEEP',
    price: 29,
    stars: 3.5,
    image: car8,
    info: [
      {
        icon: part1,
        text: 'Manual'
      },
      {
        icon: part2,
        text: 'Gas'
      },
      {
        icon: part3,
        text: '5 seat'
      },
      {
        icon: part4,
        text: '3604 CC'
      },
      {
        icon: part5,
        text: 'Front'
      },
    ]
  }
]

const CarSlider = () => {
  return (
    <motion.div 
    variants={fadeIn('up', 0.4)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once: false, amount: 0.2}}
    className='container mx-auto h-full  items-center w-full xl:pl-20 xl:mt-8'>
      
        <Swiper
          breakpoints={{
            320: {slidesPerView: 1, spaceBetween: 15},
            640:{slidesPerView: 2, spaceBetween: 32},
            1260:{slidesPerView: 3, spaceBetween: 32},
          }}
        >
          <div className='flex'>
          {cars.map((car, index) => {
            return <SwiperSlide key={index}>
              <div className='max-w-[340px] mx-auto sm:mx-0 xl:h-[460px] xl:max-w-[300px] h-[600px] flex flex-col xl:justify-end  justify-start xl:mt-0 '>
               <div className=' flex justify-start items-start h-[300px]'>
                <Image src={car.image} alt='' key={index} 
               className='xl:max-w-[300px] xl:max-h-[300px] h-[300px] '
              />
              </div>

              

              <div className='flex justify-between'>
                <div className='mb-6'>
                {car.type}
                <h2 className='font-bold uppercase'>{car.name}</h2>
                <h3 className='text-[#ed1d24] font-semibold'>{car.price}/day</h3>
                </div>

                <div className='flex gap-x-2 text-[#ed1d24] h-max'>              
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </div>
                
              </div>

              <div className='flex items-center mb-6'>
                {car.info.map((item, index) => {
                  return <div key={index} className='flex flex-col justify-between items-center w-full '>

                      <div className='w-12 h-12  rounded-full bg-slate-400 flex justify-center items-center'>
                      <Image 
                        src={item.icon} 
                        width={26}
                        height={26}                      
                        alt=''
                        
                        key={index}
                      />          
                      </div>
                      
                      <div>
                      <span className='text-[12px] text-black uppercase'>{item.text}</span>
                      </div>
                  </div>
                  
                })}
              </div>

              <Link href={'/addTopic'} >
                  <button className='btn btn-sm bg-[#ed1d24]'>
                  See Details
                  </button>
              </Link>

              </div>     
            </SwiperSlide>
          })}
          </div>
          
        </Swiper>
      
    </motion.div>
  )
}

export default CarSlider