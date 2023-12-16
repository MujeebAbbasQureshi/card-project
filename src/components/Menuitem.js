import Link from 'next/link'
import React from 'react'

export const Menuitem = ({title,address,icon}) => {
  return (
    <div>
        <Link href={address} className='mx-4 lg:mx-6 hover:text-amber-600'>
            <icon className="text-6xl sm:hidden mx-2" />
            <span>{title}</span>
        </Link>
   </div>
  )
}
