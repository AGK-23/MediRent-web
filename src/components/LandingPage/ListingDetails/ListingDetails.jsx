/* eslint-disable no-unused-vars */
// import React from 'react'

import { useState } from "react";
import ApartmentResidential from "../../../assets/Listing/apartment-residential.png";
import CozyStudio from "../../../assets/Listing/cozy-studio-apartment-with-bedroom-living-space.png";
import ModernBathroom from "../../../assets/Listing/modern-bathroom.png";
import RenderingWhite from "../../../assets/Listing/rendering-white-minimal-kitchen-with-wood-decoration.png";
import RoadCity from "../../../assets/Listing/Apartment-city.png"

import Star from "../../../assets/Listing/star.svg";
import Area from "../../../assets/Listing/area.svg";
import BathTub from "../../../assets/Listing/bath-tub.svg";
import Home from "../../../assets/Listing/home.svg";
import Cancel from "../../../assets/svg/cancel.svg"


import CustomInputs from "../../Custom-components/CustomInputs";
import CustomSelect from "../../Custom-components/Custom-Select";
import CustomDateInput from "../../Custom-components/CustomDateInput";


const initialState = {
    avatars: [RoadCity, ModernBathroom, CozyStudio, RenderingWhite, ApartmentResidential]
}


const ListingDetails = () => {
    const [listings, setListings] = useState(initialState);
    // const [showCalendar, setShowCalendar] = useState(false);

    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        phone: "",
        address: `I am interested in 505 Thurlow St, Vancouver, BC V6E 4J6, Canada`
    });


    const [selectedUnit, setSelectedUnit] = useState('')


    let { fullname, email, phone, address } = formData;

    const onFilter = (level) => {
        setSelectedUnit(level)
    }

    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };


    return (
        <div className='flex w-full flex-col md:mt-[5rem]  md:px-[0px] xs:px-2 xs:mt-[3rem] py-0 relative'>
            <div className=' md:w-full gap-3 xs:w-full mt-0 xs:pb-2 md:pb-0 md:mt-10 xs:mt-12 relative'>

                <div className="flex flex-col">
                    <div className=" mb-3 xs:px-0 text-black flex-col font-normal md:px-[170px] md:mb-7 xs:mb-3 flex ">
                        <div className="grid md:grid-cols-4 gap-2 flex-row xs:grid-cols-1 w-full justify-center ">

                            <div className="md:col-span-2 xs:col cursor-pointer flex w-full h-full">
                                {listings.avatars?.length > 0 && (
                                    <img src={listings.avatars[0]} alt="" className="cursor-pointer w-full h-full object-cover" />
                                )}
                            </div>
                            <div className="md:col xs:col flex-col justify-between items-center gap-2 flex w-full ">
                                {listings.avatars?.slice(1, 3).map((image, index) => (
                                    <img src={image} alt="" key={index} className="cursor-pointer w-full object-cover h-[200px]" />
                                ))}
                            </div>
                            <div className="md:col xs:col flex-col justify-between items-center gap-2 flex w-full ">
                                {listings.avatars?.slice(3, 5).map((image, index) => (
                                    <img src={image} alt="" key={index} className="cursor-pointer w-full object-cover h-[200px]" />
                                ))}
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <div className=" flex justify-center items-center lg:px-28 md:px-0 xs:px-0 py-10">
                <div className="grid md:w-full xs:w-full  md:grid-cols-3 xs:grid-cols-1 gap-5 xs:px-0 mt-10 md:mx-10 xs:mx-0 justify-center ">
                    <div className="md:col-span-2 xs:col w-full ">

                        <div className="flex w-full justify-between">
                            <div className="text-[#1F3249] font-semibold md:text-[30px] xs:text-[16px]">505 Thurlow St</div>
                            <div className='font-[400] text-slate-400 text-[10px]'>
                                <span className="text-[#1F3249] font-semibold md:text-[30px] xs:text-[16px]">$800</span> <span className="text-gray-500 md:text-[16px] xs:text-[10px]">/month</span>
                            </div>
                        </div>

                        <div className="flex xs:w-full md:w-[55%] leading-[30.24px] justify-between mt-4">
                            <div className="text-[#1F3249] font-[400] md:text-[24px] xs:text-[16px]">505 Thurlow St, Vancouver, BC V6E 4J6, Canada</div>
                        </div>

                        <div className='w-full flex items-center h-fit mt-10'>
                            <img alt="" src={Home} className="cursor-pointer w-6 h-6" />
                            <div className='font-[400] text-[#1F3249] md:text-[16px] xs:text-[10px] md:ml-2 xs:ml-1 flex items-center justify-center h-full'>

                                <span className="md:px-3 xs:px-2">• 2 Bedrooms</span>
                                <span className="md:px-5 xs:px-2">• 1 Bathroom</span>
                                <span className="md:px-5 xs:px-2">• 1 Kitchen</span>
                            </div>
                        </div>

                        <div className='w-full flex items-center  h-fit mt-5'>
                            <img alt="" src={Area} className="cursor-pointer w-6 h-6" />



                            <div className='font-[400] text-[#1F3249] md:text-[16px] xs:text-[10px] md:ml-2 xs:ml-1 flex items-center justify-center h-full'>

                                <span className="md:px-3 xs:px-2">• 400 sqfts</span>

                            </div>
                        </div>

                        <div className='w-full flex items-center  h-fit mt-5'>
                            <img alt="" src={Star} className="cursor-pointer w-6 h-6 text-[#1F3249]" />
                            <div className='font-[400] text-[#1F3249] md:text-[16px] xs:text-[10px] md:ml-2 xs:ml-1 flex items-center justify-center h-full'>

                                <span className="md:px-3 xs:px-2">• 3 Star</span>

                            </div>
                        </div>

                        <div className="flex xs:w-full flex-col md:w-full leading-[30.24px] justify-between mt-4 py-10 border-t-[1px] border-b-[1px] border-gray-300">
                            <div className="text-[#1F3249] font-[600] md:text-[24px] xs:text-[16px]">Description</div>
                            <div className="text-[#5A6770] font-[400] leading-[20.8px] md:text-[16px] xs:text-[10px] mt-3">Welcome to 505 Thurlow St, Vancouver, BC V6E 4J6, Canada This exquisite 2-bedroom, 1-bathroom home features a modern kitchen and spacious living areas. Located in a vibrant neighborhood, enjoy easy access to top-rated schools, diverse shopping centers, and beautiful parks. With excellent public transportation options and close proximity to major highways, this home offers the perfect blend of luxury and convenience.</div>
                        </div>


                    </div>


                    <div className="md:col-span-1 xs:col w-full">
                        <div className=" relative flex w-full px-0 my-6 mx-0 ">
                            <div className="md:w-full xs:w-full bg-white border-[1px] rounded-lg shadow-lg p-[1rem] mx-1">
                                <div className="flex  mb-4">
                                    <h3 className="text-lg font-[500]">Request a Tour</h3>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <div className='flex w-full flex-col  gap-3'>
                                        <div className={`form-group flex w-[100%] text-[1rem]`}>
                                            <CustomInputs
                                                id="fullname"
                                                type='text'
                                                required
                                                setValue={setFormData}
                                                value={fullname}

                                                label={'FullName'}
                                                className='px-0 mb-[14px]  text-[16px]'
                                            />
                                        </div>

                                        <div className={`form-group flex w-[100%] text-[1rem]`}>

                                            <CustomInputs
                                                id="email"
                                                type='email'
                                                required
                                                setValue={setFormData}
                                                value={email}

                                                label={'Email Address'}
                                                className='px-0 mb-[14px]  text-[16px]'
                                            />
                                        </div>

                                        <div className={`form-group flex w-[100%] text-[1rem]`}>

                                            <CustomInputs
                                                id="phone"
                                                type='text'
                                                required
                                                setValue={setFormData}
                                                value={phone}

                                                label={'Phone Number'}
                                                className='px-0 mb-[14px]  text-[16px]'
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-2">
                                            <div>
                                                <CustomDateInput calendar={true} value={selectedDate} onChange={handleDateChange} />
                                            </div>

                                            <CustomSelect
                                                wrapperClass='!border-[0.5px] !border-gray !h-[58px] !w-full'
                                                labelClass='!text-[0.875rem] text-black'
                                                optionsClass='!text-[0.875rem] !h-[48px] !w-[100%]'
                                                optionWrapperClass=' w-[100%] !w-[300px] xl:left-[-120px] !left-[-150px] !h-[400px] !bottom-[-410px] overflow-y-auto'

                                                label='Set Time'
                                                setSelected={onFilter}
                                                selected={selectedUnit}
                                                options={[
                                                    {
                                                        label: '11:00AM',
                                                        value: '1'
                                                    },
                                                    {
                                                        label: '12:00AM',
                                                        value: '2'
                                                    },
                                                    {
                                                        label: '1:00PM',
                                                        value: '3'
                                                    },
                                                    {
                                                        label: '2:00PM',
                                                        value: '4'
                                                    },
                                                    {
                                                        label: '3:00PM',
                                                        value: '5'
                                                    },
                                                    {
                                                        label: '4:00PM',
                                                        value: '6'
                                                    },
                                                    {
                                                        label: '5:00PM',
                                                        value: '7'
                                                    },
                                                    {
                                                        label: '6:00PM',
                                                        value: '8'
                                                    },
                                                    {
                                                        label: '7:00PM',
                                                        value: '9'
                                                    },

                                                ]}
                                            />
                                        </div>

                                        <div className={`form-group flex w-[100%] text-[1rem] `}>

                                            <CustomInputs
                                                id="address"
                                                type='text'
                                                required
                                                inputType="textarea"
                                                setValue={setFormData}
                                                value={address}
                                                disabled={true}

                                                label={''}
                                                className='px-0 mb-[14px]  text-[16px] !h-[100px] text-gray-500'
                                            />
                                        </div>

                                    </div>

                                </div>

                                <button className="mt-5 w-full rounded-lg bg-primary px-10 py-[15px] text-center text-white opacity-70">Request a Tour</button>
                            </div>
                        </div>
                    </div>

                </div>


            </div>




        </div>
    )
}

export default ListingDetails