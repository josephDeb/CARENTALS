
'use client'
import React, {useState} from "react"

import {FaClock, FaLongArrowAltRight} from 'react-icons/fa'


import { Menu } from "@headlessui/react"



const HoursSelection = () => {

  const hours = ["10:00 AM", "12:00 AM", "04:00 PM", "06:00 PM"]
  
  const [hour, setHour] = useState('10:00 AM')

  return (
    <Menu as='div' className='w-full h-full flex xl:flex-row'>
    <div className="relative flex-1">

        <Menu.Button className='dropdown-btn w-full h-full flex justify-center items-center flex-col xl:items-start xl:pl-8'>
          
            <div className="flex flex-col xl:flex-row justify-start items-center xl:gap-x-2 gap-y-1 xl:gap-y-0 uppercase font-bold "><FaClock className="text-[#ed1d24]  text-[18px]"/>Select Hours
            </div>

            <div className="flex justify-center items-center gap-x-2">
             <div className="font-medium text-[15px] uppercase text-secondary text-center xl:text-center xl:ml-6">
              {hour}
            </div>
            <FaLongArrowAltRight className="text-[15px] text-[#ed1d24]"/>
            <div className="text-[15px] text-secondary font-medium">
             {hour}
            </div>
            </div>
            
        </Menu.Button>
      
      <Menu.Items className='dropdown-menu shadow-lg absolute -top-80 top xl:top-[96px] left-1/2 xl:left-0 z-10 transform -translate-x-1/2 xl:-translate-x-0 text-sm text-center xl:text-left w-full bg-white max-w-[332px] py-6 rounded-[10px]'>
        {hours.map((hr, index) => {
          return <div 
          onClick={() => setHour(hr)}  
          key={index}
          className="hover:bg-gray-50 text-center py-4 xl:py-4"
           >
          {hr}
          </div>
        })}
      </Menu.Items>
    </div>
  </Menu>
  )
}

export default HoursSelection