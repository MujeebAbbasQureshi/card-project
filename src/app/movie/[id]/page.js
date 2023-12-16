import React from 'react'
import Image from 'next/image'
import { FaHeart } from "react-icons/fa";

const Moviepage = async ({ params }) => {
  const movieId = params.id
  const res = await fetch(`http://api.themoviedb.org/3/movie/${movieId}?api_key=${"72acbab2ea7124b2ae3bad212540e2cf"}`)
  const movie = await res.json()
  return (
    <div className='w-full'>
      <div className='p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-5xl mx-auto md:space-x-6'>
        <Image src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
          width={500}
          height={300}
          alt="movie image"
          className="rounded-lg"
          style={{ maxWidth: "100%", height: "100%" }}
        >
        </Image>
        <div className='p-2'>
          <h2 className='text-lg mb-3 text-5xl font-bold'>{movie.title || movie.name}</h2>
          <p className='mb-3 text-lg'>
            <span className='font-semibold mr-1 text-xl'>Overview:</span>
            {movie.overview}
          </p>
          <p className='p-2 text-lg'>
            <span className='font-semibold mr-1 text-xl'>Released Date  :  </span>
            {movie.release_date}

          </p>
          <p className='p-2 item-center flex'>
            <span className='font-semibold mr-1 text-xl'> Rating : </span>
            <FaHeart className='text-red-500 mr-1 mt-1 text-lg' />{movie.vote_count}

          </p>
        </div>
      </div>

    </div>
  )
}

export default Moviepage
