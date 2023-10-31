import React from 'react'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieCard({movie}) {
  return (
    <div className='p-2 mt-2 md:mt-5'>
        <img src={IMAGE_BASE_URL+movie.poster_path}
        className='w-28 md:w-[260px] rounded-lg hover:border border-gray-400
        hover:scale-105 transition-all ease-in duration-150 cursor-pointer'/>
    </div>
  )
}

export default MovieCard