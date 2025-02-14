import React, { useState } from "react";
import "./style.css";
import Button from "@mui/material/Button";
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";
import CategoryDrawer from "./CategoryDrawer";

const Nav = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

  const openCategoryPanel = () => {
    setIsOpenCatPanel(true);
  };

  const closeCategoryPanel = () => {
    setIsOpenCatPanel(false);
  };

  return (
    <nav className="py-2">
      <div className="container flex items-center justify-end gap-8">
        <div className="col_1 w-[20%]">
          <Button
            onClick={openCategoryPanel}
            className="!text-black gap-2 w-full"
          >
            <RiMenu2Fill className="text-[18px]" /> Shop By Categories
            <LiaAngleDownSolid className="text-[13px] ml-auto font-bold" />
          </Button>
        </div>
        <div className="col_2 w-[60%]">
          <ul className="flex items-center gap-4 nav">
            <li className="list-none">
              <Link to={"/"} className="link transition text-[14px] font-[500]">
                <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                  Home
                </Button>
              </Link>
            </li>

            <li className="list-none relative">
              <Link to={"/"} className="link transition text-[14px] font-[500]">
                <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                  Fashion
                </Button>
              </Link>
              <div className="submenu absolute top-[120%] left-0 min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                <ul>
                  <li className="list-none w-full relative">
                    <Link to={"/"}>
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start rounded-none">
                        Men
                      </Button>
                      <li className="list-none">
                        <div className="submenu absolute top-[0px] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                          <ul>
                            <li className="list-none w-full ">
                              <Link to={"/"}>
                                <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start rounded-none">
                                  Shirt
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full ">
                              <Link to={"/"}>
                                <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start rounded-none">
                                  T-Shirt
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full ">
                              <Link to={"/"}>
                                <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start rounded-none">
                                  Jeans
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full ">
                              <Link to={"/"}>
                                <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start rounded-none">
                                  Pants
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </Link>
                  </li>
                  <li className="list-none w-full relative">
                    <Link to={"/"}>
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start rounded-none">
                        Women
                      </Button>
                      <li className="list-none">
                        <div className="submenu absolute top-[0px] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                          <ul>
                            <li className="list-none w-full ">
                              <Link to={"/"}>
                                <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start rounded-none">
                                  Dress
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full ">
                              <Link to={"/"}>
                                <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start rounded-none">
                                  T-Shirt
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full ">
                              <Link to={"/"}>
                                <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start rounded-none">
                                  Jeans
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full ">
                              <Link to={"/"}>
                                <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start rounded-none">
                                  Shorts
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </Link>
                  </li>
                  <li className="list-none w-full relative">
                  <Link to={"/"}>
                    <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start rounded-none">Kids</Button>
                    <li className="list-none">
              <div className="submenu absolute top-[0px] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                <ul>
                  <li className="list-none w-full ">
                  <Link to={"/"}>
                    <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start rounded-none">Shirt</Button>
                    </Link>
                  </li>

                  <li className="list-none w-full ">
                  <Link to={"/"}>
                    <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start rounded-none">T-Shirt</Button>
                    </Link>
                  </li>
                  <li className="list-none w-full ">
                  <Link to={"/"}>
                    <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start rounded-none">Jeans</Button>
                    </Link>
                  </li>
                  <li className="list-none w-full ">
                  <Link to={"/"}>
                    <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start rounded-none">Pants</Button>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="list-none relative">
              <Link to={"/"} className="link transition text-[14px] font-[500]">
                <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                  Electronics
                </Button>
              </Link>
              <div className="submenu absolute top-[120%] left-0 min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                <ul>
                  <li className="list-none w-full relative">
                    <Link to={"/"}>
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start rounded-none">
                        Mobile
                      </Button>
                    </Link>
                  </li>
                  <li className="list-none w-full relative">
                    <Link to={"/"}>
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start rounded-none">
                        Laptops
                      </Button>
                    </Link>
                  </li>
                  <li className="list-none w-full relative">
                  <Link to={"/"}>
                    <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start rounded-none">Smart Accessories</Button>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="list-none relative">
              <Link to={"/"} className="link transition text-[14px] font-[500]">
                <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                  Bags
                </Button>
              </Link>
              <div className="submenu absolute top-[120%] left-0 min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                <ul>
                  <li className="list-none w-full relative">
                    <Link to={"/"}>
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start rounded-none">
                        Men Bags
                      </Button>
                    </Link>
                  </li>
                  <li className="list-none w-full relative">
                    <Link to={"/"}>
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start rounded-none">
                        Women Bags
                      </Button>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="list-none relative">
              <Link to={"/"} className="link transition text-[14px] font-[500]">
                <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                  Footwear
                </Button>
              </Link>
              <div className="submenu absolute top-[120%] left-0 min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                <ul>
                  <li className="list-none w-full relative">
                    <Link to={"/"}>
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start rounded-none">
                        Men Footwear
                      </Button>
                    </Link>
                  </li>
                  <li className="list-none w-full relative">
                    <Link to={"/"}>
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start rounded-none">
                        Women Footwear
                      </Button>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="list-none">
              <Link to={"/"} className="link transition text-[14px] font-[500]">
                <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                  Groceries
                </Button>
              </Link>
            </li>
            <li className="list-none">
              <Link to={"/"} className="link transition text-[14px] font-[500]">
                <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                  Beauty
                </Button>
              </Link>
            </li>
            <li className="list-none">
              <Link to={"/"} className="link transition text-[14px] font-[500]">
                <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                  Wellness
                </Button>
              </Link>
            </li>
            <li className="list-none">
              <Link to={"/"} className="link transition text-[14px] font-[500]">
                <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                  Jewellery
                </Button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col_2 w-[20%]">
          <p className="flex items-center text-[14px] font-[500] gap-3 mb-0 mt-0">
            <GoRocket className="text-[18px]" />
            Free International Delivery
          </p>
        </div>
      </div>
      <CategoryDrawer isOpen={isOpenCatPanel} onClose={closeCategoryPanel} />
    </nav>
  );
};

export default Nav;
