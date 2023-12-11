'use client' 

import {MdHandshake, MdKey, MdTrendingUp} from 'react-icons/md'
import {FaStar} from 'react-icons/fa'

import Image from 'next/image'
import car from '../images/q1.png'

import {motion} from 'framer-motion'
import { fadeIn } from '../variantsjs'

const Why = () => {
  return (
    <div className=" xl:h-[130vh] h-screen flex justify-center items-center flex-col xl:mt-28 " id="whyus">

      <div className="flex justify-center items-center flex-col text-center mx-auto xl:scroll xl:pt-16">

          <motion.div 
          variants={fadeIn('down', 0.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.2}}
          className="w-[350px] mt-8 xl:w-[100%] xl:mt-0" > 
            <h1 className="h1 text-[44px] font-bold">
              Unmatched excellence and customer satisfaction
            </h1>
          </motion.div>

          <motion.div 
          variants={fadeIn('down', 0.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.2}}
          className="w-[350px] text-center xl:w-[53%] ">
            <p>
            Our dedication to providing exceptional  services sees us apart from the competition, From the moment you engage with us, we strive exceed your expectations in every interaction
            </p>           
          </motion.div>

          <motion.div 
          variants={fadeIn('up', 0.8)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.2}}
          className='xl:mt-8 hidden xl:block'>
              <Image src={car} alt='' width={400} height={400}/>
          </motion.div>

      </div>

      <div className='flex text-[#ed1d24] gap-8 text-4xl my-8 xl:hidden'>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
      </div>

      <motion.div 
      variants={fadeIn('up', 0.2)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.2}}
      className='flex flex-col xl:flex-row justify-center items-center  text-center gap-6 xl:gap-4 xl:justify-end px-16  xl:mt-8'>
          <div className='flex justify-center items-center text-center mx-auto  h-full xl:h-full xl:mt-0 '>
            <div className='text-center flex justify-start items-center flex-col  w-[44%] xl:w-[81%]  h-full '>
              <MdKey className='text-2xl text-[#ed1d24] xl:text-4xl'/>
                <h2 className='text-xl font-semibold'>Rent simply & qucikly</h2>
                <p className='hidden xl:block xl:w-[74%]'>
                We prioritize your needs and go above and beyond to ensure your experience with us is nothing short of outstanding.
                </p>
            </div>

            <div className='text-center flex justify-start items-center flex-col w-[50%] xl:w-[70%] xl:pr-12  h-full '>
              <MdTrendingUp className='text-2xl text-[#ed1d24] xl:text-4xl'/>
                <h2 className='text-xl font-semibold'>Modern & well maintained vehicies</h2>
                <p className='hidden xl:block'>
                We prioritize your needs and go above and beyond to ensure your experience with us is nothing short of outstanding.
                </p>
            </div>
          </div>

          <div className='text-center flex justify-start items-center flex-col w-[44%] xl:w-[50%]  h-full '>
              <MdHandshake className='text-2xl text-[#ed1d24] xl:text-4xl'/>
                <h2 className='text-xl font-semibold'>Prompt & flexible services</h2>
                <p className='hidden xl:block'>
                We prioritize your needs and go above and beyond to ensure your experience with us is nothing short of outstanding.
                </p>
            </div>
      </motion.div>

      

      

    </div>
  )
}

export default Why