'use client'
import React, {useState} from "react"

import { Menu } from "@headlessui/react"

import {FaMapMarkerAlt} from 'react-icons/fa'



const LocationSelection = () => {

  const loc = [
    'SM Novaliches, Philippines',
    'SM Fairview, Philippines',
    'SM North, Philippines'
  ];

  const [location, setLocation] = useState("Select Location")

  return (
    <Menu as='div' className='w-full h-full flex xl:flex-row'>
      <div className="relative flex-1">
          <Menu.Button className='dropdown-btn w-full h-full flex justify-center items-center flex-col xl:items-start xl:pl-8'>
            <div className="w-full h-16 xl:h-full flex justify-center xl:justify-start items-center xl:border-r xl:border-black/10">
              <div className="flex flex-col justify-center">
                <div className="flex flex-col xl:flex-row justify-start items-center xl:gap-x-2 gap-y-1 xl:gap-y-0 uppercase font-bold "><FaMapMarkerAlt className="text-[#ed1d24]  text-[15px]"/>
                Select Location</div>
                <div className="font-medium text-[12px] uppercase text-secondary text-center xl:text-center xl:ml-6">{location}
                </div>
              </div>
            </div>
          </Menu.Button>
        
        <Menu.Items className='dropdown-menu shadow-lg absolute -top-56 top xl:top-[96px] left-1/2 xl:left-0 z-10 transform -translate-x-1/2 xl:-translate-x-0 text-sm text-center xl:text-left w-full bg-white max-w-[332px] py-6 rounded-[10px]'>
          {loc.map((loc, index) => {
            return <div onClick={() => setLocation(loc)} key={index} className="cursor-pointer hover:bg-gray-50 text-[15px] py-4 xl:py-3 px-4 font-semibold">{loc}</div>
          })}
        </Menu.Items>
      </div>
    </Menu>
  )
}

export default LocationSelection