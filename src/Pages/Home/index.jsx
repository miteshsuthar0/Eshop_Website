import React from "react";
import HomeSlider from "../../component/HomeSlider";
import CatSlider from "../../component/CatSlider";
import AdsBannerSlider from "../../component/AdsBannerSlider";
import { FaTruckFast } from "react-icons/fa6";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ProductSlider from "../../component/ProductSlider";

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return <>
    <HomeSlider/>
    <CatSlider/>

    <section className="py-8 bg-white">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="leftSec">
          <h3 className="text-[20px] font-[600]">Popular Products</h3>
          <p className="text-[14px] font-[400]">Do not miss the current offers until the end of march</p>
          </div>
          <div className="rightSec w-[59%]">
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Fashion" />
        <Tab label="Electronics" />
        <Tab label="Bags" />
        <Tab label="Footwear" />
        <Tab label="Groceries" />
        <Tab label="Beauty" />
        <Tab label="Wellness" />
        <Tab label="Jewellery" />
      </Tabs>
          </div>
        </div>
        <ProductSlider items={6}/>
      </div>
    </section>

    <section className="py-16 bg-white">
        <div className="container">
          <div className="freeshipping w-[85%] m-auto p-4 border-2 rounded-md border-[#ff5252] flex items-center justify-between mb-5">
            <div className="col1 flex items-center gap-4">
            <FaTruckFast className="text-[50px]" />
            <span className="text-[20px] font-[600]">FAST DELIVERY</span>
            </div>
            <span className="text-[30px] text-[rgba(0,0,0,0.8)]">|</span>
            <div className="col2">
            <p className="text-[14px] font-[500] mb-0 ">Free Delivery Now On Your First Order and over $200</p>
            </div>
            <span className="text-[30px] text-[rgba(0,0,0,0.8)]">|</span>
            <div className="col3">
            <span className="text-[25px] font-bold">- Only $200*</span>
            </div>
          </div>
          <AdsBannerSlider items={4}/>
        </div>
    </section>
    <br /><br />
    <br /><br />
  </>;
};

export default Home;
