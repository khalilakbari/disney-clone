import React from 'react'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function HrMovieCard({movie}) {
  return (
    <section className='p-2 mt-2 md:mt-5 hover:scale-105 hover:-translate-y-2 transition-all ease-in duration-150 cursor-pointer'>
        <img src={IMAGE_BASE_URL+movie.backdrop_path}
        className='w-28 md:w-[260px] rounded-lg hover:border border-gray-400
         transition-all ease-in duration-150 cursor-pointer'/>
        <h2 className='w-28 md:w-[260px] text-white mt-2'>{movie.title}</h2>
    </section>
  )
}

export default HrMovieCard