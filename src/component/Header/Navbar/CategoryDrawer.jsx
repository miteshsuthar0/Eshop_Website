import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IoCloseSharp } from "react-icons/io5";
import Button from "@mui/material/Button";
import { FaRegPlusSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaRegMinusSquare } from "react-icons/fa";

const CategoryDrawer = ({ isOpen, onClose }) => {
  const [subMenuIndex, setSubMenuIndex] = useState(null);
  const [innerSubMenuIndex, setInnerSubMenuIndex] = useState(null);

  const openSubmenu = (index) => {
    if (subMenuIndex === index) {
      setSubMenuIndex(null);
    } else {
      setSubMenuIndex(index);
    }
  };

  const openInnerSubmenu = (index) => {
    if (innerSubMenuIndex === index) {
      setInnerSubMenuIndex(null);
    } else {
      setInnerSubMenuIndex(index);
    }
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
      <h3 className="p-3 text-[16px] font-[500] flex items-center justify-between">
        Shop By Category{" "}
        <IoCloseSharp
          className="text-[20px] cursor-pointer"
          onClick={onClose}
        />
      </h3>
      <div className="scroll">
        <ul className="w-full">
          <li className="list-none flex-col items-center relative">
            <Link to={"/"} className="w-full">
              <Button className="w-full !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                Fashion
              </Button>
            </Link>
            {subMenuIndex === 0 ? (
              <FaRegMinusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(0)}
              />
            ) : (
              <FaRegPlusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(0)}
              />
            )}

            {subMenuIndex === 0 && (
              <ul className="submenu w-full pl-3">
                <li className="list-none relative ">
                  <Link to={"/"} className="w-full">
                    <Button className="w-full !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                      Mens
                    </Button>
                  </Link>
                  {innerSubMenuIndex === 0 ? (
                    <FaRegMinusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  ) : (
                    <FaRegPlusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  )}
                  {innerSubMenuIndex === 0 && (
                    <ul className="inner_submenu w-full pl-3">
                      <li className="list-none relative mb-1">
                        <Link
                          to={"/"}
                          className="link w-full !justify-start !px-3 transition text-[14px]"
                        >
                          Shirt
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to={"/"}
                          className="link w-full !justify-start !px-3 transition text-[14px]"
                        >
                          T-Shirt
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to={"/"}
                          className="link w-full !justify-start !px-3 transition text-[14px]"
                        >
                          Jeans
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to={"/"}
                          className="link w-full !justify-start !px-3 transition text-[14px]"
                        >
                          Pants
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li className="list-none relative ">
                  <Link to={"/"} className="w-full">
                    <Button className="w-full !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                      Women
                    </Button>
                  </Link>
                  {innerSubMenuIndex === 1 ? (
                    <FaRegMinusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(1)}
                    />
                  ) : (
                    <FaRegPlusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(1)}
                    />
                  )}
                  {innerSubMenuIndex === 1 && (
                    <ul className="inner_submenu w-full pl-3">
                      <li className="list-none relative mb-1">
                        <Link
                          to={"/"}
                          className="link w-full !justify-start !px-3 transition text-[14px]"
                        >
                          Dress
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to={"/"}
                          className="link w-full !justify-start !px-3 transition text-[14px]"
                        >
                          T-Shirt
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to={"/"}
                          className="link w-full !justify-start !px-3 transition text-[14px]"
                        >
                          Jeans
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to={"/"}
                          className="link w-full !justify-start !px-3 transition text-[14px]"
                        >
                          Shorts
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li className="list-none relative ">
                  <Link to={"/"} className="w-full">
                    <Button className="w-full !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                      Kids
                    </Button>
                  </Link>
                  {innerSubMenuIndex === 2 ? (
                    <FaRegMinusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(2)}
                    />
                  ) : (
                    <FaRegPlusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(2)}
                    />
                  )}
                  {innerSubMenuIndex === 2 && (
                    <ul className="inner_submenu w-full pl-3">
                      <li className="list-none relative mb-1">
                        <Link
                          to={"/"}
                          className="link w-full !justify-start !px-3 transition text-[14px]"
                        >
                          Shirt
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to={"/"}
                          className="link w-full !justify-start !px-3 transition text-[14px]"
                        >
                          T-Shirt
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to={"/"}
                          className="link w-full !justify-start !px-3 transition text-[14px]"
                        >
                          Jeans
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to={"/"}
                          className="link w-full !justify-start !px-3 transition text-[14px]"
                        >
                          Pants
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
          <li className="list-none flex-col items-center relative">
            <Link to={"/"} className="w-full">
              <Button className="w-full !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                Electronics
              </Button>
            </Link>
            {subMenuIndex === 1 ? (
              <FaRegMinusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(1)}
              />
            ) : (
              <FaRegPlusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(1)}
              />
            )}

            {subMenuIndex === 1 && (
              <ul className="inner_submenu w-full pl-3">
                <li className="list-none relative mb-1">
                  <Link
                    to={"/"}
                    className="link w-full !justify-start !px-3 transition text-[14px]"
                  >
                    Mobile
                  </Link>
                </li>
                <li className="list-none relative mb-1">
                  <Link
                    to={"/"}
                    className="link w-full !justify-start !px-3 transition text-[14px]"
                  >
                    Laptop
                  </Link>
                </li>
                <li className="list-none relative mb-1">
                  <Link
                    to={"/"}
                    className="link w-full !justify-start !px-3 transition text-[14px]"
                  >
                    Smart Accessories
                  </Link>
                </li>
                <li className="list-none relative mb-1">
                  <Link
                    to={"/"}
                    className="link w-full !justify-start !px-3 transition text-[14px]"
                  >
                    Camera
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="list-none flex-col items-center relative">
            <Link to={"/"} className="w-full">
              <Button className="w-full !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                Bags
              </Button>
            </Link>
            {subMenuIndex === 2 ? (
              <FaRegMinusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(2)}
              />
            ) : (
              <FaRegPlusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(2)}
              />
            )}

            {subMenuIndex === 2 && (
              <ul className="inner_submenu w-full pl-3">
                <li className="list-none relative mb-1">
                  <Link
                    to={"/"}
                    className="link w-full !justify-start !px-3 transition text-[14px]"
                  >
                    Men Bags
                  </Link>
                </li>
                <li className="list-none relative mb-1">
                  <Link
                    to={"/"}
                    className="link w-full !justify-start !px-3 transition text-[14px]"
                  >
                    Women Bags
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="list-none flex-col items-center relative">
            <Link to={"/"} className="w-full">
              <Button className="w-full !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                Footwear
              </Button>
            </Link>
            {subMenuIndex === 3 ? (
              <FaRegMinusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(3)}
              />
            ) : (
              <FaRegPlusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(3)}
              />
            )}

            {subMenuIndex === 3 && (
              <ul className="inner_submenu w-full pl-3">
                <li className="list-none relative mb-1">
                  <Link
                    to={"/"}
                    className="link w-full !justify-start !px-3 transition text-[14px]"
                  >
                    Men Footwear
                  </Link>
                </li>
                <li className="list-none relative mb-1">
                  <Link
                    to={"/"}
                    className="link w-full !justify-start !px-3 transition text-[14px]"
                  >
                    Women Footwear
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="list-none flex-col items-center relative">
            <Link to={"/"} className="w-full">
              <Button className="w-full !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                Groceries
              </Button>
            </Link>
          </li>
          <li className="list-none flex-col items-center relative">
            <Link to={"/"} className="w-full">
              <Button className="w-full !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                Beauty
              </Button>
            </Link>
          </li>
          <li className="list-none flex-col items-center relative">
            <Link to={"/"} className="w-full">
              <Button className="w-full !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                Wellness
              </Button>
            </Link>
          </li>
          <li className="list-none flex-col items-center relative">
            <Link to={"/"} className="w-full">
              <Button className="w-full !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                Jewellery
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </Box>
  );

  return (
    <div>
      <Drawer anchor="left" open={isOpen} onClose={onClose}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default CategoryDrawer;
