import React from 'react'
import GenersList from '../constant/GenersList'
import MovieList from './MovieList'

function GenerMovieList() {
  return (
    <div>
        {GenersList.genere.map((item, index )=> index <= 4 &&(
            <div key={item.id} className='p-5 md:px-10'>
                <h2 className='md:text-xl text-white font-bold'>{item.name}</h2>
                <MovieList genredId={item.id} index_={index}/>
            </div>
        ))}
    </div>
  )
}

export default GenerMovieList