import React, { useEffect, useState } from 'react'
import GlobalApi from '../services/GlobalApi'
import MovieCard from './MovieCard'
import HrMovieCard from './HrMovieCard';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './MovieListSlider.css'
// import required modules
import { Navigation } from 'swiper/modules';


function MovieList({genredId, index_}) {

    const[movieList, setMovieList] = useState([])

    useEffect(() => {
        getMovieByGenreId()
    }, [])

    const getMovieByGenreId = () => {
        GlobalApi.getMovieByGenreId(genredId).then(res => {
            // console.log(res.data.results);
            setMovieList(res.data.results)
        })
    }
  return (
    <>
     <Swiper
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper text-xl"
        breakpoints={{
            490: {
             slidesPerView: 4
            },
            640: {
             slidesPerView: 5,
            },
            1024: {
             slidesPerView: 6
            },
            // 1550: {
            //  slidesPerView: 7
            // } 
          }}
      >     
        <div className='flex'>
            {movieList.map(item => (
                <SwiperSlide>
                  {index_ %3== 0 ? <HrMovieCard movie={item}/> : <MovieCard movie={item}/>}  
                </SwiperSlide>
            ))}
        </div>  
      </Swiper>
    
    </>
  )
}

export default MovieList