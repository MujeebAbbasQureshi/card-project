import React from 'react'
import { Menuitem } from './Menuitem'
import { FaHome } from "react-icons/fa";
import Link from 'next/link';
import { FaInfoCircle } from "react-icons/fa";


const Header = () => {
  return (
    <>
        <div className='flex justify-between mx-2 max-w-4xl sm:mx-auto items-center py-6'>
            <div className='flex'>
            <Menuitem title={'HOME'} address={"/"} icon={FaHome}/>
            <Menuitem title={'About'} address={"/about"} icon={FaInfoCircle }/>

        </div>
        <div className='flex pl-2'>
          
            <Link href="/">
                <h2 className='text-2xl'>
                    <span className='font-bold bg-amber-500 py-1 px-3 rounded-lg ml-9'>IMDB</span>
                    <span className='text-xl hidden sm:inline ml-1'>Clone</span>
                </h2>
            </Link>
        </div>
       </div>
    </>
  )
}

export default Header