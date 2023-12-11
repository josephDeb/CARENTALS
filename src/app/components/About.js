'use client'

import Image from "next/image"

import {
  MdOutlineMapsHomeWork,
  MdOutlineBuildCircle,
  MdOutlineDirectionsCar
} from 'react-icons/md'

import Countup from 'react-countup';
import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";
import { fadeIn } from "../variantsjs";

import img from '../images/w2.jpg'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })

  return (
    <div
    
    className="w-full h-[100vh] xl:h-[120vh] flex justify-center items-center xl:mt-0" id="about" ref={ref}>
      
      <div className="h-full container mx-auto flex flex-col justify-center items-center xl:flex-row w-full mt-20 xl:mt-0">
        <motion.div 
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.6}}
        className="flex justify-center items-center">
          <Image src={img} width={600} height={400} alt="" className="rounded-3xl"/>
        </motion.div>

        <div className="mx-16 flex flex-col xl:flex-col xl:justify-center xl:items-center">

          <div className="w-[380px] xl:w-[440px] text-left py-4 xl:py-0">

            <motion.h1 
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.2}}
            className="w-[400px] font-bold text-3xl text-[32px] xl:text-4xl py-4 ">Car services simplified.</motion.h1>
            
            <motion.div 
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.2}}
            className="w-[360px]">
              <p>
              Rent, choose, and repair with ease. Our convenient locations, diverse car types, and reliable repair points ensure a seamless car experience
              </p>
            </motion.div>

          </div>

      <motion.div 
      variants={fadeIn('up', 0.8)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.12}}
      className="flex justify-between text-left gap-16 mt-4">
          <div className="flex flex-col justify-center items-start  w-[12%] uppercase xl:w-[15%] ">
            <MdOutlineDirectionsCar className="text-[#ed1d24] text-5xl"/>
            <div className="text-4xl font-black mb-2 flex justify-center items-center">          
              {inView ? (<Countup start={0} end={50} duration={3} delay={1}/>) : null}+
            </div> 
            <h2>Cart Types</h2>         
          </div>

            <div className="flex flex-col justify-center items-start uppercase w-[12%] xl:w-[15%]">
            <MdOutlineMapsHomeWork className="text-[#ed1d24] text-5xl"/>
            <div className="text-4xl font-black mb-2 flex justify-center items-center">            
              {inView ? (<Countup start={0} end={135} duration={3} delay={1}/>) : null}
            </div>           
            <h2>Rental Outlets</h2> 
            </div>

            <div className="flex flex-col w-[15%] items-start justify-center uppercase ">
            <MdOutlineBuildCircle className="text-[#ed1d24] text-5xl"/>
            <div className="text-4xl font-black mb-2 flex justify-center items-center ">           
              {inView ? (<Countup start={0} end={35} duration={3} delay={1}/>) : null}
            </div> 
            <h2>Repair points</h2>            
            </div>

          
          </motion.div>
          
            
          <motion.div 
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.4}}
          className="w-full justify-start items-center xl:block hidden">
              <button className="btn btn-lg bg-[#ed1d24] w-[178px] mt-8 xl:mb-6  ">
                  See all cars
              </button>
            </motion.div>

        </div>
      </div>

    </div>
  )
}

export default About