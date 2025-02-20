import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../../App.css";
import { Navigation,Autoplay } from "swiper/modules";
import BannerBox from "../BannerBox";

const adsBannerSlider = (props) => {
  return (
    <div className="py-5 w-full adsBannnerSlider">
      <Swiper 
        slidesPerView={props.items}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Navigation,Autoplay]}
        className=""
      >
        <SwiperSlide>
          <BannerBox img="/images/banner1.webp" link="/"/>
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img="/images/banner2.webp" link="/"/>
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img="/images/banner3.webp" link="/"/>
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img="/images/banner4.webp" link="/"/>
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img="/images/banner5.webp" link="/"/>
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img="/images/banner6.jpg" link="/"/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default adsBannerSlider;

