"use client"
import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'
const Navbaritem = ({ title, param }) => {
    const searchparams = useSearchParams()
    const genre = searchparams.get(`genre`)
    return (
        <div>
            <Link className={`m-4 hover:text-amber-600 font-semibold p-2 ${genre && genre === param && `underline underline-offset-8 decoration-4 decoration-amber-600 rounded-lg`}`} href={`/?genre=${param}`}>
                {title}
            </Link>
        </div>
    )
}

export default Navbaritem