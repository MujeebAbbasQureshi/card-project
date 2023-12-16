import React from 'react'
import Navbaritem from './Navbaritem'

const Navbar = () => {
  return (
    <div className='flex justify-center dark:bg-gray-600 lg:text-lg p-4'>
        
        <Navbaritem title={`Trending`} param="fetchTrending" />
        <Navbaritem title={`Top Rated`} param="fetchTopRated" />
       
    </div>
  )
}

export default Navbar