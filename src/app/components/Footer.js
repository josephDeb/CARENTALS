'use client'

import {IoCarSportOutline} from 'react-icons/io5'
import Image from 'next/image'
import phone from '../images/phone-call.png'
import {MdMail} from 'react-icons/md'
import { fadeIn } from '../variantsjs'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <div className="h-screen z-50 xl:h-60 flex flex-col justify-center items-center xl:mt-12
      xl:flex xl:justify-center xl:items-center xl:mb-12 pb-44">
     <div className="h-full w-[100%] flex flex-col justify-center items-start container xl:flex-row xl:items-center xl:flex xl:gap-x-6 xl:w-[88%] xl:justify-center ">
        <div 
        className='flex flex-col justify-center items-start text-left w-[26%] mt-28 pb-8 xl:mt-0 xl:pb-0'>
          
          <motion.div 
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.4}}
          className='flex text-center justify-center items-center my-2'>
          <span className='text-3xl font-bold text-[#ed1d24]
          underline'>CARENTALS</span>
          <IoCarSportOutline className='font-bold text-[#ed1d24] text-5xl ml-1'/>
          </motion.div>
          
          <div>

             <motion.p 
             variants={fadeIn('right', 0.4)}
             initial='hidden'
             whileInView={'show'}
             viewport={{once: false, amount: 0.4}}
             
             className='my-2 xl:my-6 xl:w-[200px] '>Rent, choose, and repair with ease convenient repair.            
             </motion.p>

            <motion.div 
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.4}}
            
            className='flex justify-start items-center text-gray-800 my-2'>
             <Image src={phone} width={17} height={17} className='mr-2' alt=''/>
             <p className='text-gray-800'>0951744####</p>
            </motion.div>

            <motion.div 
            variants={fadeIn('right', 0.8)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.4}}
            className='flex justify-start items-center '>
             <MdMail className='mr-2 text-xl'/>
             <p className='text-gray-800'>josephdelonpogi@gmail.com</p>
            </motion.div>
          
          </div>

        </div>

        <div className='flex xl:flex justify-start items-start xl:mt-0 xl:w-[12%]  w-[200px]  '>
            <div>
                <motion.h3 
                variants={fadeIn('right', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.2}}
                className='h3 font-bold'>Company</motion.h3>
                <motion.ul 
                variants={fadeIn('right', 0.6)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.2}}
                className='font-semibold'>
                    <li className='xl:mt-2'>
                        <a>Philippines</a>
                    </li>
                    <li className='xl:mt-2'>
                        <a>Careers</a>
                    </li>
                    <li className='xl:mt-2'>
                        <a>Blog</a>
                    </li>
                    <li className='xl:mt-2'>
                        <a>Mobile</a>
                    </li>
                    <li className='xl:mt-2'>
                        <a>How we work</a>
                    </li>
                </motion.ul>
            </div>
        </div>

        <div className='xl:mt-0 mt-8 xl:w-[23%] xl:h-[199px] '>
          <div>
              <motion.h3 
              variants={fadeIn('right', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.4}}
              className='h3 font-bold '>Working hours</motion.h3>
              <motion.div 
              variants={fadeIn('right', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.4}}
              className='flex flex-1 flex-col  gap-y-3  xl:gap-0 xl:flex-col'>
                  <div className='flex flex-1 gap-x-2 xl:gap-x-4 '>
                    <div className=' xl:flex xl:gap-x-2'>
                      <div>Mon-Fri :</div>
                      <div className='font-semibold'>09:00 AM - 09:00 PM</div>
                    </div>
                    
                  </div>

                  <div className='flex flex-1 gap-x-2  xl:flex xl:mt-2'>
                    <div>Sat :</div>
                    <div className='font-semibold'>09:00 AM - 07:00 PM</div>
                  </div>

                  <div className='flex flex-1 gap-x-2 xl:mt-2'>
                    <div>Sat :</div>
                    <div className='font-semibold'>Closed</div>
                  </div>
              </motion.div>
          </div>
        </div>

      <div className=' mt-8 xl:mt-0 xl:h-[200px]'>
          <div>
            <motion.h3
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.2}} className='h3'>Newsletter</motion.h3>
            <motion.p
            variants={fadeIn('right', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.2}}
            >Dont shy to reach me up send email to me </motion.p>

            <div className='w-full flex gap-4 mt-6'>
              <motion.input 
              variants={fadeIn('right', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.2}}className='w-full  pl-4 border-2 border-gray-400' placeholder='Your email'></motion.input>
                <motion.button 
                variants={fadeIn('right', 0.6)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.2}}
                className='font-semibold text-white uppercase bg-[#ed1d24] px-4 py-2 rounded-lg'>Submit</motion.button>
            </div>
          </div>
      </div>

     </div>

    
    </div>
  )
}

export default Footer