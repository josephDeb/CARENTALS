'use client'

import {useContext} from 'react'
import {SearchContext} from '../context/search'

import LocationSelection from './LocationSelection'
import DateSelection from './DateSelection'
import HoursSelection from './HoursSelection'

const Search = () => {
    const {searchActive} = useContext(SearchContext)
  return (
    <div className={`${searchActive ? 'bg-white rounded-none xl:h-[70px]' : 'bg-white rounded-[20px] py-6 xl:pr-4 xl:h-[90px]'} hidden xl:block ${searchActive ? 'w-[100%]' : 'w-[90%]'} mx-auto relative shadow-lg`}>
        <div className={`flex h-full items-center ${searchActive ? 'container px-[44px] mx-auto' : ''}`}>
            <LocationSelection />
            <DateSelection />
            <HoursSelection />

            <div className={`${searchActive ? 'btn py-3 bg-[#ed1d24] hover:bg-[#ff2f36] cursor-pointer xl:w-[38%] text-[15px]' : 'btn btn-sm bg-[#ed1d24] hover:bg-[#ff2f36] cursor-pointer xl:w-[44%] text-[15px]'}`}>Search</div>
        </div>
    </div>
  )
}

export default Search