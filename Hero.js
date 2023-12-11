"use client"
import React from "react"
import Search from "./src/app/components/Search"
import { SearchContext } from "./src/app/context/search"
import {useContext} from 'react'
import playstore from '../images/playstore.png'
import appstore from '../images/appstore.png'
import car4 from '../images/about.png'
import ehpaanokung from '../images/josemarichan.png'
import Image from 'next/image';
import {fadeIn} from './src/app/variantsjs'
import {motion, easeInOut} from 'framer-motion'


const Hero = () => {
    const {searchActive} = useContext(SearchContext)

    const [click, setClick] = React.useState(false)

    const handleClick = () => {
        setClick(!click);
    }

  return (
    <section className="h-screen xl:h-[90vh] bg-[#b2b7c2]/10" id="home">
        
<div className="container mx-auto h-full">

      <div className=" flex flex-col xl:flex-row justify-center items-center h-full w-full">

        <div className="text-center xl:text-left mb-20 max-w-xl xl:mt-16">
           <div>
              <motion.h1 
                variants={fadeIn('down', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.6}}
                className="h1"
                >Explore the Finnest 
                <span className="text-[#ed1d24]"> GLOBAL</span> offers
              </motion.h1>
           </div>
           
            <div>
              <motion.p 
              variants={fadeIn('down', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.6}} 
              className="mx-auto max-w-[550px]"             
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, odio commodi, excepturi a culpa quo error officia cupiditate.
              </motion.p>
            </div>
          
           <div className="relative">  

              <motion.div
              variants={fadeIn('down', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.6}}
              className="flex justify-center items-center max-h-20 xl:justify-start"
              >
                
              <Image src={appstore} alt="" width={161} height={44} className="cursor-pointer"/>
              <Image src={playstore} alt="" width={161} height={44} className="cursor-pointer" />
              </motion.div>
           </div>

        </div>

        <div>

        

            <motion.div 
            variants={fadeIn('up', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.6}}
            className="relative w-full h-full max-h-[50vh] flex justify-center items-center md:max-w-[70vw]  xl:max-w-[590px] xl:max-h-[530px]
            top-8 xl:top-8
            "
            >
          <Image src={ehpaanokung} alt=""
          className="absolute w-48 hidden md:block xl:block top-1 brightness-100 xl:right-[350px] -rotate-12"
          />
              
            <Image 
            src={car4}
            alt=""
            style={{objectFit: 'contain'}}
            priority
            className="hover:ml-44 transition-all duration-1000 relative"
            />

            </motion.div>
        </div>
      </div>
        
      
  
</div>

        {searchActive ? (
          <div className="fixed top-[62px] z-10 w-full max-w-[1920px]">
            <motion.div 
            initial={{y: '-100'}}
            animate={{y: 0}}
            transition={{ease: easeInOut}}
            ><Search />
            </motion.div>
          </div>
        ) 
        : 
        (
        
        <div className="-mt-12 w-full max-w-[1300px] mx-auto">
          <motion.div 
          variants={fadeIn('up', 0.8)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.2}}
          
          ><Search/></motion.div>
        </div>
        )}


        
    </section>
  )
}

export default Hero