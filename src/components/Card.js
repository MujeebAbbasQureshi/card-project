"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaHeart } from 'react-icons/fa';

const Card = ({ result }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    
    const storedLiked = localStorage.getItem(`liked_${result.id}`);
    if (storedLiked) {
      setLiked(true);
      setLikeCount(parseInt(storedLiked, 10));
    }
  }, [result.id]);

  const handleLikeClick = () => {
    const newLikeCount = liked ? likeCount - 1 : likeCount + 1;
    localStorage.setItem(`liked_${result.id}`, newLikeCount);
    setLiked(!liked);
    setLikeCount(newLikeCount);
  };

  return (
    <div className='cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 group sm:m-2 transition-shadow duration-200'>
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
          width={500}
          height={300}
          alt='movie image'
          className='sm:rounded-t-lg group-hover:opacity-80 transition duration-200'
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </Link>
      <div className='p-2 text-lg'>
        <p>{result.overview.substring(0, 40)}...</p>
        <h2 className='text-lg font-bold p-4'>{result.name || result.title}</h2>
        <p className='flex items-center font-bold'>{result.release_date}</p>
        <p className='p-2 item-center flex'>
          <span className='font-semibold mr-1'> Rating : </span>
          <FaHeart className='text-red-500 mr-1 mt-1' />
          {result.vote_count}
        </p>
        <div>
          <button
            onClick={handleLikeClick}
            className={`flex items-center justify-center mt-2 p-4 px-5 bg-red-500 rounded-md ${
              liked ? 'text-gray-200' : 'text-gray-200'
            }`}
          >
            {liked ? 'Unlike' : 'Like'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
