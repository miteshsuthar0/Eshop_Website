import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../App.css";
import { Navigation } from "swiper/modules";
import ProductItem from "../ProductItem";

const ProductSlider = (props) => {
  return (
    <div className="ProductSlider py-5">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={10}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="sliderHome"
      >
        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductSlider;
