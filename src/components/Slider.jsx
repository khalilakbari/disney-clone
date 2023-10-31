import React, { useEffect, useState } from "react";
import GlobalApi from "../services/GlobalApi";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

function Slider() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getTreadingMovies();
  }, []);

  const getTreadingMovies = () => {
    GlobalApi.getTrandingVideos.then((res) => {
      setMovieList(res.data.results);
    });
  };
  return (
    <div className="mt-5">
      <Swiper
       effect={'coverflow'}
       grabCursor={true}
       slidesPerView={'auto'}
       spaceBetween={30}
       centeredSlides={true}
       loop={true}
       coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
       autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
       pagination={{
         clickable: true,
       }}
       modules={[Autoplay, EffectCoverflow, Pagination]}
       className="mySwiper"
       breakpoints={{
         640: {
          slidesPerView: 2
         }
       }}
       >
          <div className="flex">
            {movieList.map((item) => (
              <SwiperSlide>
                <img src={IMAGE_BASE_URL + item.backdrop_path}
                   className="min-w-full h-[330px] lg:h-[400px] object-cover rounded-md"
                />
              </SwiperSlide>
             ))}
          </div>
      </Swiper>
    </div>
  );
}

export default Slider;
