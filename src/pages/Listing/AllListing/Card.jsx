/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
// import { FaBed, FaBath } from "react-icons/fa6";

import Star from "../../../assets/Listing/star.svg";
import Area from "../../../assets/Listing/area.svg";
import BathTub from "../../../assets/Listing/bath-tub.svg";
import Bed from "../../../assets/Listing/bed.svg";






// import "./card.scss";

function Card({ item }) {


  const formatValue = (value) => {
    return value?.toLocaleString('en-US');
  };


  return (

    <div className="flex md:flex-row xs:flex-col gap-[10px] bg-gray-100 justify-between">
      <div className="flex w-full h-[200px] ">
        <Link to={`/admin/dashboard/listing/${item.id}`} className="flex w-full h-[200px]">
          {/* <img src={item.img} alt="" className="w-full h-full object-cover rounded-lg" /> */}
          <img
            src={item.avatars[0]}
            className={`cursor-pointer w-full h-full object-cover rounded-lg`}
          />
        </Link>
      </div>
      <div className="flex flex-col gap-5 w-full px-4">

        <h2 className="md:text-lg xs:text-md font-semibold text-gray-700 transition-all duration-400 hover:text-black mt-4">
          <Link to={`/admin/dashboard/listing/${item.id}`} >{item.listingTitle}</Link>
        </h2>

        <p className="flex items-center text-gray-600 text-sm ">
          <div className="text-xl text-primary">
            <FaLocationDot />
          </div>
          <span className="ml-2">{item.address}</span>
        </p>

        <div className="flex justify-start items-center border-none ">
          <div className=''>
            <div className='font-[400] text-slate-400 text-[10px]'>
              <span className="text-slate-700 font-semibold text-[16px]">${formatValue(item?.housingDetails?.price)}</span> <span className="text-gray-500">/month</span>
            </div>
          </div>

        </div>


        <div className="grid grid-cols-4 gap-5 mt-[2px] w-full">
          <div className=" flex items-center justify-center gap-5 bg-whitesmoke py-1">
    
            <div className="flex justify-center items-center border-none w-full">
              <div className='flex justify-center items-center flex-col'>
                <img alt="" src={Bed} className="cursor-pointer w-6 h-6" />
                <div className='font-[400] text-slate-400 text-[10px]'>
                  {item?.housingDetails?.numberOfBathRoom} Beds
                </div>
              </div>

            </div>
          </div>

          <div className=" flex items-center justify-center gap-5 bg-whitesmoke py-1">
    
            <div className="flex justify-center items-center border-none w-full">
              <div className='flex justify-center items-center flex-col'>
                <img alt="" src={BathTub} className="cursor-pointer w-6 h-6" />
                <div className='font-[400] text-slate-400 text-[10px]'>
                  {item?.housingDetails?.numberOfBedRoom} Bath
                </div>
              </div>

            </div>
          </div>

          <div className=" flex items-center justify-center gap-5 bg-whitesmoke py-1">
    
            <div className="flex justify-center items-center border-none w-full">
              <div className='flex justify-center items-center flex-col'>
                <img alt="" src={Area} className="cursor-pointer w-6 h-6" />
                <div className='font-[400] text-slate-400 text-[10px]'>
                  {item?.housingDetails?.area}
                </div>
              </div>

            </div>
          </div>

          <div className=" flex items-center justify-center gap-5 bg-whitesmoke py-1">
    
            <div className="flex justify-center items-center border-none w-full">
              <div className='flex justify-center items-center flex-col'>
                <img alt="" src={Star} className="cursor-pointer w-6 h-6" />
                <div className='font-[400] text-slate-400 text-[10px]'>
                  {item?.housingDetails?.starRating || 0} Star
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Card;

