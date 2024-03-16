import React from 'react'

import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaBed, FaBath, FaBookmark } from "react-icons/fa6";


const TenantCard = ({ item }) => {
    return (

        <div className="flex md:flex-row xs:flex-col gap-[10px] bg-gray-100 justify-between">
          <div className="flex w-full h-[200px] ">
            <Link to={`/admin/renter/tenant/listing/${item.id}`} className="flex w-full h-[200px]">
              {/* <img src={item.img} alt="" className="w-full h-full object-cover rounded-lg" /> */}
              <img
                src={item.avatars[0]}
                className={`cursor-pointer w-full h-full object-cover rounded-lg`}
              />
            </Link>
          </div>
          <div className="flex flex-col gap-5 w-full px-4">
            <h2 className="md:text-lg xs:text-md font-semibold text-gray-700 transition-all duration-400 hover:text-black mt-4">
              <Link to={`/admin/renter/tenant/listing/${item.id}`} >{item.title}</Link>
            </h2>
    
            <p className="flex items-center text-gray-600 text-sm ">
              {/* <img src="/pin.png" alt="" className="w-4 h-4" /> */}
              <div className="text-xl text-primary">
                <FaLocationDot />
              </div>
              <span className="ml-2">{item.address}</span>
            </p>
            {/* <p className="price text-20 font-light py-1 px-2 rounded bg-yellow-200">&#36; {item.price}</p> */}
            <span className="md:text-md xs:text-sm  text-third flex">
    
              <div className="text-black">Daily Rent:</div>
              <div className="ml-2">&#36; {item?.housingDetails?.dailyRent}</div>
    
            </span>
    
            <div className="features flex md:gap-10 xs:gap-2 text-sm md:flex-row xs:flex-col w-full">
              <div className="feature flex items-center justify-center gap-5 bg-whitesmoke py-1">
                <div className="text-xl text-primary">
                  <FaBed />
                </div>
    
    
                <span className="text-xs flex w-full">
    
                  <div>
                    {item?.housingDetails?.noOfBedrooms}
                  </div>
                  <div className="ml-2">
                    bedroom
                  </div>
                </span>
              </div>
    
              <div className="feature flex items-center justify-center gap-5 bg-whitesmoke py-1">
                {/* <img src="/bath.png" alt="" className="w-4 h-4" /> */}
                <div className="text-xl text-primary">
                  <FaBath />
                </div>
                <span className="text-xs flex w-full">
    
                  <div>
                    {item?.housingDetails?.noOfBathrooms}
                  </div>
                  <div className="ml-2">
                    bathroom
                  </div>
                </span>
              </div>
    
            </div>
    
          </div>
        </div>
      );
}

export default TenantCard