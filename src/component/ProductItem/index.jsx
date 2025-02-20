import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import Button from "@mui/material/Button";
import { IoGitCompareOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineZoomOutMap } from "react-icons/md";

const ProductItem = () => {
  return (
    <div className="productItem shadow-md rounded-md overflow-hidden border border-[rgba(0,0,0,0.1)]">
      <div className="group imageWrapper w-[100%] h-[220px] overflow-hidden  rounded-md relative">
        <Link to={"/"}>
        <div className="img">
        <img
          src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781297/1736781294242_montrez-men-light-blue-solid-jacket-product-images-rvwmdqy2dw-0-202311201747.jpg"
          alt=""
          className="w-full"
        />
        <img
          src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781298/1736781294264_montrez-men-light-blue-solid-jacket-product-images-rvwmdqy2dw-1-202311201747.jpg"
          alt=""
          className="w-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 hover:scale-105 transition-all duration-700"
        />
        </div>
        </Link>
        <span className="discount flex items-center absolute top-[10px] left-[10px] bg-primary text-white rounded-lg text-[12px] font-[500] z-50 p-1">18%</span>
      <div className="actions absolute top-[-200px] right-[5px] z-50 flex flex-col items-center gap-2 w-[50px] group-hover:top-[10px] transition-all duration-300 opacity-0 group-hover:opacity-100"> 
        <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white !text-black hover:!bg-primary hover:!text-white transition-all "><MdOutlineZoomOutMap className="text-[18px]"/></Button>
        <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white !text-black hover:!bg-primary hover:!text-white transition-all "><IoGitCompareOutline className="text-[18px]"/></Button>
        <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white !text-black hover:!bg-primary hover:!text-white transition-all "><FaRegHeart className="text-[18px]"/></Button>
      </div>
      </div>
      <div className="info p-3 py-5 bg-[#f1f1f1]">
        <h6 className="text-[13px] text-[rgba(0,0,0,0.5)]"><Link to={"/"} className="link transition-all">RARE RABBIT</Link></h6>
        <h3 className="text-[13px] title mt-1 font-[500] text-[rgba(0,0,0,1)] mb-1 "><Link to={"/"} className="link transition-all">Men Layerr Regular Fit Spread Collar Cotton Shirt</Link></h3>
        <Rating name="read-only" value={4} readOnly size="small" />
        <div className="flex items-center gap-4">
            <span className="oldPrice text-[15px] line-through text-[rgba(0,0,0,0.5)] font-[500]">&#8377; 580</span>
            <span className="newPrice text-[15px] text-primary font-[600]">&#8377; 480</span>
        </div>
        </div>
      </div>
  );
};

export default ProductItem;
