'use client';

import {useContext, useState, useEffect} from 'react'
import {BiX, BiMenuAltRight} from 'react-icons/bi'
import Image from 'next/image';
import {Link} from 'react-scroll';

import SearchMobile from './SearchMobile';
import { useMediaQuery } from 'react-responsive';


import {SearchContext} from '../context/search'
import {IoCarSportOutline} from 'react-icons/io5'
const Header = () => {
    const {setSearchActive} = useContext(SearchContext)

    const [header, setHeader] = useState(false);
    const [nav, setNav] = useState(false);

    const desktopMode = useMediaQuery({
        query: '(min-width: 1300px)',
    });


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setHeader(true);
            } else {
                setHeader(false);
            }

            if(window.scrollY > 484) {
               setSearchActive(true) 
            } else {
                setSearchActive(false)
            }
        };

        window.addEventListener('scroll', handleScroll);

     return ()=> {
        window.removeEventListener('scroll', handleScroll);
    }
    })

    

    

  return (
    <div 
    className={`${header ? 'bg-white shadow-md py-2' : 'bg-transparent shadow-none py-4'} fixed w-full max-w-[1520px] xl:px-20 mx-auto z-20 transition-all duration-300`}>
    
        <div className='xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between'>
            <div 
                className='flex justify-between items-center px-3 relative'>
                <Link 
                to='home'
                smooth={desktopMode}
                spy={true}
                className='cursor-pointer'
                
                >
                  
                    <div className='flex eightjustify-center items-center'>
                         <h4 className='h4 text-[#ed1d24] font-bold text-lg xl:text-2xl underline '>CARENTALS
                         </h4>
                         <IoCarSportOutline className='text-[#ed1d24] xl:text-5xl ml-1 text-4xl' />
                    </div>
                </Link>

                <div onClick={() => setNav(!nav)} className='xl:hidden cursor-pointer'>{nav ?  <BiX  className='text-4xl'/> : <BiMenuAltRight className='text-4xl'/>}</div>
            </div> 

            <nav className={`${nav ? 'max-h-max py-8 px-4 xl:py-0 xl:px-0 ' : 'max-h-0 xl:max-h-max'}   flex flex-col w-full bg-white gap-y-6 overflow-hidden transition-all duration-150 font-bold  xl:flex-row xl:w-max xl:gap-x-8 xl:font-semibold xl:bg-transparent text-center xl:text-left uppercase text-sm xl:normal-case xl:text-[15px]`}>
               <Link
                 className='cursor-pointer '
                 to='home'
                 activeClass='active'
                 spy={true}
                 smooth={desktopMode}
                > Home
                </Link>
                <Link
                 className='cursor-pointer'
                 to='cars'
                 activeClass='active'
                 spy={true}
                 smooth={desktopMode}
                > Cars
                </Link>
                <Link
                 className='cursor-pointer'
                 to='about'
                 activeClass='active'
                 spy={true}
                 smooth={desktopMode}
                > About
                </Link>
                <Link
                 className='cursor-pointer'
                 to='whyus'
                 activeClass='active'
                 spy={true}
                 smooth={desktopMode}
                > Why Us
                </Link>
                <Link
                 className='cursor-pointer'
                 to='testimonials'
                 activeClass='active'
                 spy={true}
                 smooth={desktopMode}
                > Testimonials
                </Link>
                <Link
                 className='cursor-pointer'
                 to='contact'
                 activeClass='active'
                 spy={true}
                 smooth={desktopMode}
                > Contact
                </Link>
                <Link
                 className='cursor-pointer xl:hidden btn btn-primary btn-sm max-w-[164px] mx-auto'
                 to='seeallcars'
                 activeClass='active'
                 spy={true}
                 smooth={desktopMode}
                > See all cars
                </Link>
                <SearchMobile />
                
                

            </nav>
        </div>
    </div>
  )
}

export default Header