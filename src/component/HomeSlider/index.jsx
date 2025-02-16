import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './styles.css';
import {Autoplay, Pagination, Navigation } from 'swiper/modules';

const HomeSlider = () => {
  return (
<>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://api.spicezgold.com/download/file_1734524878924_1721277298204_banner.jpg" alt="Banner Slider 1" className='w-full' /></SwiperSlide>
        <SwiperSlide><img src="https://api.spicezgold.com/download/file_1734525014348_NewProject(7).jpg" alt="Banner Slider 2" className='w-full' /></SwiperSlide>
        <SwiperSlide><img src="https://api.spicezgold.com/download/file_1734525002307_1723967638078_slideBanner1.6bbeed1a0c8ffb494f7c.jpg" alt="Banner Slider 3" className='w-full' /></SwiperSlide>
        <SwiperSlide><img src="https://api.spicezgold.com/download/file_1734524985581_NewProject(11).jpg" alt="Banner Slider 4" className='w-full' /></SwiperSlide>
        <SwiperSlide><img src="https://api.spicezgold.com/download/file_1734524971122_NewProject(8).jpg" alt="Banner Slider 5" className='w-full' /></SwiperSlide>
        <SwiperSlide><img src="https://api.spicezgold.com/download/file_1734524958576_NewProject(10).jpg" alt="Banner Slider 6" className='w-full' /></SwiperSlide>
        <SwiperSlide><img src="https://api.spicezgold.com/download/file_1734524930884_NewProject(6).jpg" alt="Banner Slider 7" className='w-full' /></SwiperSlide>
        <SwiperSlide><img src="https://api.spicezgold.com/download/file_1734524893797_NewProject(13).jpg" alt="Banner Slider 8" className='w-full' /></SwiperSlide>
      </Swiper>
    </>
  )
}

export default HomeSlider;
