// import React from 'react'
import { useState } from "react";
import Appheader from "./Appheader";
import SideNav from "./SideNav";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { Outlet } from "react-router-dom";
// import MainPage from "../../../pages/dashboard/MainPage.jsx";

const Layout = () => {
  const [open, setOpen] = useState(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1024px)");

  const OpenScreen = () => {
    setOpen(!open);
    console.log("open screen...", open);
  };

  return (
    <div className="">
    <SideNav OpenScreen={OpenScreen} open={open} />

    {isAboveMediumScreens ? (
      <div className="flex">
        <div
          className={`${
            open ? "ml-[13.2rem]" : "ml-[4.2rem]"
          } relative flex flex-col w-full duration-200`}
        >
          {/* <MainPage /> */}
          <Outlet/>
          {/* <div className="bg-[#fafafb] h-screen text-lg font-semibold text-lime-600 w-full z-0 relative px-6 ">
                        <div className="top-[6rem] relative text-secondary font-semibold ">
                            Welcome Back to Carttel
                        </div>
                    </div>
                    <div className="bg-lime-400 h-screen text-lg font-semibold text-lime-600 w-full z-0 px-6 ">
                        <div className="top-[6rem] relative text-secondary font-semibold ">
                            Welcome Back to Carttel
                        </div>
                    </div> */}
        </div>
      </div>
    ) : (
      <div className="flex ">
        <div className={`relative flex flex-col w-full duration-200`}>
          {/* <MainPage /> */}
          <Outlet/>
          {/* <div className="bg-[#fafafb] h-screen text-lg font-semibold text-lime-600 w-full z-0 relative px-6 ">
                  <div className="top-[6rem] relative text-secondary font-semibold ">
                      Welcome Back to Carttel
                  </div>
              </div>
              <div className="bg-lime-400 h-screen text-lg font-semibold text-lime-600 w-full z-0 px-6 ">
                  <div className="top-[6rem] relative text-secondary font-semibold ">
                      Welcome Back to Carttel
                  </div>
              </div> */}
        </div>
      </div>
    )}
  </div>
  );
};

export default Layout;
