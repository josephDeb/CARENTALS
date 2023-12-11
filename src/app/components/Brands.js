'use client'
import Image from "next/image"
import logo1 from '../images/ferari.png'
import logo2 from '../images/alfa.png'
import logo3 from '../images/aston.png'
import logo4 from '../images/jaguar.png'
import logo5 from '../images/bmw.png'
import logo6 from '../images/bentley.png'
import logo7 from '../images/lamborghini.png'
import logo8 from '../images/jeep.png'

import {motion} from 'framer-motion'
import {fadeIn} from '../variantsjs'

import {} from 'framer-motion'
const allLogo = [
  {
    img: logo1
  },
  {
    img: logo2
  },
  {
    img: logo3
  },
  {
    img: logo4
  },
  {
    img: logo5
  }
  ,
  {
    img: logo6
  },
  {
    img: logo7
  },
  {
    img: logo8
  }
]


const Brands = () => {
  return (
   <div className="mt-28 xl:mt-0 ">
          <motion.div 
      variants={fadeIn('down', 0.4)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.6}}
      className="flex flex-col justify-center items-center mx-4">
        <div className="grid grid-cols-3
        items-center gap-6 
        xl:flex xl:mt-[8%] xl:justify-between xl:w-[80%] w-[80%]"> 
            {allLogo.map((brand, index) => {
              return <Image className="w-[62px] h-[52px]" src={brand.img} alt="" width={71} height={71} key={index}/>
            })}
        </div>
      </motion.div>
      
   </div>
        

  )
}

export default Brands