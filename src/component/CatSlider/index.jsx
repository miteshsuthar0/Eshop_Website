import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../../App.css";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const HomeSlider = () => {
  return (
    <>
      <div className="catSlider pt-4 py-8">
        <div className="container">
          <Swiper
            slidesPerView={8}
            spaceBetween={10}
            loop={true}
            // navigation={true}
            modules={[Navigation]}
            className="sliderHome"
          >
            <SwiperSlide>
              <Link to="/">
                <div className="border border-[rgba(0,0,0,0.1)] h-40 w-40 py-7 px-3 bg-white  flex flex-col justify-center items-center text-center">
                  <img
                    src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1737107557/1737107555729_fash.png"
                    alt=""
                    className="w-[60px] hover:scale-110 transition-all"
                  />
                  <h3 className="text-[15px] font-[500] mt-5">Fashion</h3>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
            <Link to="/">
              <div className="border shadow-sm border-[rgba(0,0,0,0.1)] itemh-40 w-40 py-7 px-3 bg-white  flex flex-col justify-center items-center text-center">
                <img
                  src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1737107649/1737107647134_ele.png"
                  alt=""
                  className="w-[60px] hover:scale-110 transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-5">Electronics</h3>
              </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
            <Link to="/">
              <div className="border border-[rgba(0,0,0,0.1)] itemh-40 w-40 py-7 px-3 bg-white  flex flex-col justify-center items-center text-center">
                <img
                  src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1737107665/1737107663085_bag.png"
                  alt=""
                  className="w-[60px] hover:scale-110 transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-5">Bags</h3>
              </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
            <Link to="/">
              <div className="border border-[rgba(0,0,0,0.1)] itemh-40 w-40 py-7 px-3 bg-white  flex flex-col justify-center items-center text-center">
                <img
                  src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1737107678/1737107676260_foot.png"
                  alt=""
                  className="w-[60px] hover:scale-110 transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-5">Footwear</h3>
              </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
            <Link to="/">
              <div className="border border-[rgba(0,0,0,0.1)] itemh-40 w-40 py-7 px-3 bg-white  flex flex-col justify-center items-center text-center">
                <img
                  src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1737107691/1737107689261_gro.png"
                  alt=""
                  className="w-[60px] hover:scale-110 transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-5">Groceries</h3>
              </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
            <Link to="/">
              <div className="border border-[rgba(0,0,0,0.1)] itemh-40 w-40 py-7 px-3 bg-white  flex flex-col justify-center items-center text-center">
                <img
                  src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1737107705/1737107702876_beauty.png"
                  alt=""
                  className="w-[60px] hover:scale-110 transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-5">Beauty</h3>
              </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
            <Link to="/">
              <div className="border border-[rgba(0,0,0,0.1)] itemh-40 w-40 py-7 px-3 bg-white  flex flex-col justify-center items-center text-center">
                <img
                  src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1737107718/1737107715395_well.png"
                  alt=""
                  className="w-[60px] hover:scale-110 transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-5">Wellness</h3>
              </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
            <Link to="/">
              <div className="border border-[rgba(0,0,0,0.1)] itemh-40 w-40 py-7 px-3 bg-white  flex flex-col justify-center items-center text-center">
                <img
                  src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1739065363/1739065363328_jw.png"
                  alt=""
                  className="w-[60px] hover:scale-110 transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-5">Jewellery</h3>
              </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HomeSlider;
