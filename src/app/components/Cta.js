'use client'


import Image from 'next/image'
import playstore from '../images/playstore.png'
import appstore from '../images/appstore.png'
import windows from '../images/microsoft.png'
import {IoCarSportOutline} from 'react-icons/io5'
import mobileres from '../images/mob.png'
import desktop from '../images/desktop.png'
import { fadeIn } from '../variantsjs'
import { motion } from 'framer-motion'
const Cta = () => {
  
  return (
    <div className="h-screen xl:max-h-[120vh] flex justify-center items-center mx-auto z-10 overflow-hidden xl:mb-16" id="contact">

        <div className="mx-8 h-[70vh] xl:flex xl:justify-center xl:items-center xl:mx-auto xl:mt-28">
            <motion.div 
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.6}}
            className="text-center xl:flex xl:flex-col xl:justify-center xl:items-center xl:max-w-[50%]">
              
              <h1 className="h1 hidden xl:block">Download on your mobile device
              </h1>

              <h1 className="h1 xl:hidden
              ">Download on your Windows & Mac
              </h1>
  
            <div className='flex justify-center items-center text-center xl:mb-8'>
            <span className='text-[#ed1d24] xl:text-5xl font-bold underline text-3xl'>CARENTALS</span><IoCarSportOutline className='text-[#ed1d24] text-6xl ml-1 xl:text-8xl'/>
            </div>
               
            
             
              <p>
                 Rent, choose, and repair with ease. Our convenient locations, diverse car types, and reliable repair points ensure a seamless car experience
              </p>

              <div >  
              <div
             
              className="flex justify-center items-center max-h-20 xl:justify-start"
              >
              <Image src={appstore} alt="" width={161} height={44} className="cursor-pointer"/>
              <Image src={windows} alt="" width={144} height={44} className="cursor-pointer xl:hidden "/>
              <Image src={playstore} alt="" width={161} height={44} className="cursor-pointer hidden xl:block" />
              </div>

              <div className='flex justify-center items-center'>
                <Image src={desktop} width={400} height={400} alt='' className='xl:hidden'/>
              </div>
            
           </div>

            </motion.div>

            <motion.div 
             variants={fadeIn('left', 0.2)}
             initial='hidden'
             whileInView={'show'}
             viewport={{once: false, amount: 0.8}}
            className=''>
            <div className='hidden xl:block ml-12 '>
                <Image src={mobileres} width={350} height={350} alt='' className=' rounded-xl xl:mb-12'/>

            </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Cta