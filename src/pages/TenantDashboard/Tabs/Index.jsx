// import React from 'react'
import { AiOutlinePieChart, AiOutlineClockCircle } from "react-icons/ai";
import { HiArrowSmUp, HiArrowSmDown } from "react-icons/hi";
import { BsBoxSeam } from "react-icons/bs";
import { MdOutlineLocalShipping } from "react-icons/md";
import ReactApexChart from "react-apexcharts";
import { FiPlusCircle } from "react-icons/fi";

import { RiDashboardLine, RiPantoneLine } from "react-icons/ri";

import { PiHouseDuotone } from "react-icons/pi";

import { GoHome } from "react-icons/go";

// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, Link } from "react-router-dom";
// import { getUser } from "../../../features/auth/authSlice";

const Index = () => {
  return (
    <div className="xs:mt-10 md:mt-0">
      <div>
        <div className="text-slate-700 text-lg">Hello 👋, Kelvin</div>
        <div className="text-gray-500 md:text-xs xs:text-[10px]">
          Welcome to your Medirent Dashboard
        </div>
      </div>
      <div className="mt-5 pb-5">
        <div className="">
          <div className="grid md:grid-cols-3 xs:grid-cols-1 md:gap-6 xs:gap-0 mt-5 mb-6 px-0">
            <div className="col-span-2 rounded shadow-md border p-3 md:mb-0 xs:mb-6">
              <div className="my-4">
                <div className="text-slate-900 text-lg font-bold">Overview</div>
                <div className="text-gray-500 md:text-xs xs:text-[10px]">
                  Here's a quick overview of what's happening
                </div>
              </div>

              <div className="grid md:grid-cols-2 xs:grid-cols-1 gap-5 my-5">
                <div className="border-[1px] border-gray-300 px-5 py-5 rounded-lg  flex justify-between h-full flex-col ">
                  <div>
                    <div className="bg-[#14ab68] rounded-full py-4 px-4 border w-fit text-white text-2xl">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>

                    <div className="text-gray-500 md:text-[12px] xs:text-[10px] my-5">
                      SPACES BOOKED
                    </div>
                    <div className="text-black md:text-[30px] xs:text-[23px]  font-bold">
                      0
                    </div>
                  </div>

                  <div>
                    <div className="text-gray-500 md:text-[15px] xs:text-[10px] mt-10 text-[#324bd9]">
                      See All
                    </div>
                  </div>
                </div>

                <div className="border-[1px] border-gray-300  py-5 rounded-lg flex flex-col">
                  <div>
                    <div className="">
                      <div className="px-5 py-4">
                        <div className="text-slate-600 w-fit text-sm">
                          MAINTENANCE REQUEST
                        </div>

                        <div className="text-black md:text-[30px] xs:text-[23px] my-5  font-bold">
                          0
                        </div>

                        <div>
                          <div className="text-gray-500 md:text-[15px] xs:text-[10px] text-[#324bd9]">
                            See All
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="border-t-[1px] border-gray-300">
                      <div className="px-5 py-4">
                        <div className="text-slate-600 w-fit text-sm">
                          ACTIVE SUBSCRIPTION
                        </div>

                        <div className="text-black md:text-[30px] xs:text-[23px] my-5  font-bold">
                          0
                        </div>

                        <div>
                          <div className="text-gray-500 md:text-[15px] xs:text-[10px] text-[#324bd9]">
                            See All
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded shadow-md border p-3 md:text-lg xs:text-xs w-full">
              <div className="my-4">
                <div className="text-slate-900 text-lg font-bold">
                  Help Centre
                </div>
                <div className="text-gray-500 md:text-xs xs:text-[10px]">
                  Need help? Our support team has you covered
                </div>
              </div>

              <div className="grid grid-cols-1 md:gap-10 xs:gap-5">
                <div className="border-[1px] border-gray-300 px-5 md:py-5 xs:py-3 rounded-lg  flex justify-between items-center gap-5">
                  <div className="bg-pink-600 rounded-full md:py-4 md:px-4 xs:py-3 xs:px-3 border w-fit text-white text-2xl">
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 18 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.7281 19.9137C8.83884 19.9715 8.96266 20.0009 9.08649 20C9.21032 19.999 9.33314 19.9686 9.44489 19.9097L13.0128 18.0025C14.0245 17.4631 14.8168 16.8601 15.435 16.1579C16.779 14.6282 17.5129 12.6758 17.4998 10.6626L17.4575 4.02198C17.4535 3.25711 16.9511 2.57461 16.2082 2.32652L9.57073 0.0995642C9.17106 -0.0357592 8.73313 -0.0328174 8.3405 0.106428L1.72824 2.41281C0.989299 2.67071 0.495998 3.35811 0.500024 4.12397L0.542307 10.7597C0.555395 12.7758 1.31448 14.7194 2.68062 16.2335C3.3048 16.9258 4.10415 17.52 5.12699 18.0505L8.7281 19.9137ZM7.78357 12.1089C7.93257 12.2521 8.12586 12.3227 8.31916 12.3207C8.51245 12.3198 8.70474 12.2472 8.85172 12.1021L12.7508 8.2581C13.0438 7.96882 13.0408 7.50401 12.7448 7.21866C12.4478 6.9333 11.9696 6.93526 11.6766 7.22454L8.30808 10.5449L6.92885 9.21909C6.63186 8.93373 6.15467 8.93667 5.8607 9.22595C5.56774 9.51523 5.57076 9.98004 5.86775 10.2654L7.78357 12.1089Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>

                  <div className="text-slate-700 font-bold w-full md:text-[15px] xs:text-[8px]">Read our FAQS </div>
                </div>

                <div className="border-[1px] border-gray-300 px-5 md:py-5 xs:py-3 rounded-lg flex justify-between items-center md:gap-5 xs:gap-2">
                  <div className="bg-[#14ab68] rounded-full md:py-4 md:px-4 xs:py-3 xs:px-3 border w-fit text-white text-2xl">
                    <svg
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.9394 0C16.2804 0 17.5704 0.53 18.5194 1.481C19.4694 2.43 20.0004 3.71 20.0004 5.05V12.95C20.0004 15.74 17.7304 18 14.9394 18H5.0604C2.2694 18 0.000396729 15.74 0.000396729 12.95V5.05C0.000396729 2.26 2.2594 0 5.0604 0H14.9394ZM16.5304 6.54L16.6104 6.46C16.8494 6.17 16.8494 5.75 16.5994 5.46C16.4604 5.311 16.2694 5.22 16.0704 5.2C15.8604 5.189 15.6604 5.26 15.5094 5.4L11.0004 9C10.4204 9.481 9.5894 9.481 9.0004 9L4.5004 5.4C4.1894 5.17 3.7594 5.2 3.5004 5.47C3.2304 5.74 3.2004 6.17 3.4294 6.47L3.5604 6.6L8.1104 10.15C8.6704 10.59 9.3494 10.83 10.0604 10.83C10.7694 10.83 11.4604 10.59 12.0194 10.15L16.5304 6.54Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>

                  <div className="text-slate-700 font-bold w-full md:text-[15px] xs:text-[8px]">Contact Medirent Support  </div>

                </div>

                <div className="border-[1px] border-gray-300 px-5 md:py-5 xs:py-3 rounded-lg flex justify-between items-center md:gap-5 xs:gap-2 ">
                  <div className="bg-[#2e48d9] rounded-full md:py-4 md:px-4 xs:py-3 xs:px-3 border w-fit text-white text-2xl">
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 18 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.7071 6.79633C15.7071 8.05226 16.039 8.79253 16.7695 9.64559C17.3231 10.2741 17.5 11.0808 17.5 11.956C17.5 12.8302 17.2128 13.6601 16.6373 14.3339C15.884 15.1417 14.8215 15.6573 13.7372 15.747C12.1659 15.8809 10.5937 15.9937 9.0005 15.9937C7.40634 15.9937 5.83505 15.9263 4.26375 15.747C3.17846 15.6573 2.11602 15.1417 1.36367 14.3339C0.78822 13.6601 0.5 12.8302 0.5 11.956C0.5 11.0808 0.677901 10.2741 1.23049 9.64559C1.98384 8.79253 2.29392 8.05226 2.29392 6.79633V6.3703C2.29392 4.68834 2.71333 3.58852 3.577 2.51186C4.86106 0.941697 6.91935 0 8.95577 0H9.04522C11.1254 0 13.2502 0.987019 14.5125 2.62466C15.3314 3.67916 15.7071 4.73265 15.7071 6.3703V6.79633ZM6.07367 18.0608C6.07367 17.5573 6.53582 17.3266 6.96318 17.2279C7.46309 17.1222 10.5093 17.1222 11.0092 17.2279C11.4366 17.3266 11.8987 17.5573 11.8987 18.0608C11.8738 18.5402 11.5926 18.9653 11.204 19.2352C10.7001 19.628 10.1088 19.8767 9.49057 19.9664C9.14868 20.0107 8.81276 20.0117 8.48279 19.9664C7.86362 19.8767 7.27227 19.628 6.76938 19.2342C6.37978 18.9653 6.09852 18.5402 6.07367 18.0608Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>

                  <div className="text-slate-700 font-bold w-full md:text-[15px] xs:text-[8px]">Use Code to access 5% off relocation support from Medirent </div>

                </div>
              </div>

              {/* <div className="flex justify-center flex-col py-5 "></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
