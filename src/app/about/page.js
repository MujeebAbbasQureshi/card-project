import React from 'react'

export default function About() {
  return (
    <section className='w-screen mt-12'>
    <div className='flex flex-1 justify-start items-center flex-col gap-6'>
        <h5 className='font-bold text-4xl'>Activities</h5>
        <p className='text-2xl uppercase font-light'>EduHub Institute of Technology</p>
        <p className='w-3/5 text-center text-2xl'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.This is a standard excerpt of Lorem Ipsum, commonly used as a placeholder in design mockups, prototypes, and content drafts. If you need more or less text, please let me know!"
        </p>
        <div className='flex justify-center items-center gap-6'>
            <img className='w-1/4 shadow-lg hover:shadow-2xl'
             src='https://www.nscc.ca/img/campuses/institute/pg-it-1.jpg' alt="Img1"/>

            <img className='w-1/4 shadow-lg hover:shadow-2xl '
             src='https://www.iit.edu/sites/default/files/styles/width_1600/public/2020-06/elexon_tube_2400x1200.jpg?itok=q3qTe7Me' alt='Img2'/>

            <img className='w-1/4 shadow-lg hover:shadow-2xl'
            src='https://news.wttw.com/sites/default/files/styles/full/public/article/image-non-gallery/IIT%20Gift_1025.jpg?itok=5wnNOMFb' alt='Img3' />
           
        </div>
        <button className='border-red-500 border-2 p-2 rounded-md'>View More</button>
    </div>
    </section>
  )
}
