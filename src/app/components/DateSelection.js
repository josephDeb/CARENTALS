'use client'
import React, {useState, } from "react"

import { Menu } from "@headlessui/react"

import {FaCalendarAlt} from 'react-icons/fa'
import {FaArrowRightLong} from 'react-icons/fa6'

import {DateRange} from 'react-date-range'
import {format, addDays} from 'date-fns';

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const DateSelection = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ])

  return (
    <Menu as='div' className='w-full h-full flex xl:flex-row'>
    <div className="relative flex-1">
        <Menu.Button className='dropdown-btn w-full h-full flex justify-center items-center flex-col xl:items-start xl:pl-8'>
          <div className="w-full h-16 xl:h-full flex justify-center xl:justify-start items-center xl:border-r xl:border-black/10">
            <div className="flex flex-col justify-center">
              <div className="flex flex-col xl:flex-row justify-start items-center xl:gap-x-2 gap-y-1 xl:gap-y-0 uppercase font-bold "><FaCalendarAlt className="text-[#ed1d24]  text[18px]"/>Select Date</div>
              <div className="flex justify-center items-center gap-x-3 xl:ml-6 text-secondary text-semibold ">
              <div>
                {format(date[0].startDate, 'dd/MM/yyy')}
              </div>
              <FaArrowRightLong className="text-[#ed1d24] text-[12px]"/>
              {date[0].endDate ? (<div>{format(date[0].endDate, 'dd/MM/yyyy')}</div>) 
              : (
                <div>{format(date[0].startDate, 'dd/MM/yyyy')}</div>
               ) 
              }
              </div>
             
            </div>
          </div>
        </Menu.Button>
      
      <Menu.Items className='dropdown-menu shadow-lg absolute -top-96 xl:top-[96px] left-1/2 xl:left-0 z-50 transform -translate-x-1/2 xl:-translate-x-0 rounded-[10px] overflow-hidden'>
       <DateRange 
       onChange={(item) => setDate([item.selection])}
       editableDateInputs={true} moveRangeOnFirstSelection={false}
       ranges={date}
       rangeColors={['#ed1d24']}
       minDate={addDays(new Date(), 0)}
       />
      </Menu.Items>
    </div>
  </Menu>
  )
}

export default DateSelection