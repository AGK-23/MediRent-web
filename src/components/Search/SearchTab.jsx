// import React from 'react'
import { useState } from "react";
import Filter from "../../assets/Search/filter.svg";
import Search from "../../assets/Search/search.svg";

import SearchFilter from "../ui/SearchFilter";

const SearchTab = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => {
        setIsOpen(false);
    };

    const openModal = () => {
        setIsOpen(true);
    };


    return (
        <div className="md:px-0 xs:px-2">
            <div className="grid md:grid-cols-5 xs:grid-cols-2 lg:gap-16 md:gap-0 xs:gap-6 rounded-lg shadow-lg border-[1px] md:px-6 xs:px-5 py-6 md:w-full xs:w-full bg-white">
                <div className="flex flex-col col  w-full md:mr-0 xs:mr-[69px]">
                    <div className="text-[#5A6770] font-[400] lg:text-[17px] md:text-[14px] xs:text-[14px]" >
                        Location
                    </div>
                    <input type="text" placeholder="Select" className="text-[#A4ABAC] font-[400] lg:text-[17px] md:text-[14px] xs:text-[14px] outline-none border-none"/>
                </div>
                <div className="flex flex-col col w-full">
                    <div className="w-full md:text-start xs:text-end text-[#5A6770] font-[400] lg:text-[17px] md:text-[14px] xs:text-[14px]" >
                        Property Type
                    </div>
                    <input type="text" placeholder="Select" className="md:text-start xs:text-end text-[#A4ABAC] font-[400] lg:text-[17px] md:text-[14px] xs:text-[14px] outline-none border-none"/>
                </div>
                <div className="flex flex-col col">
                    <div className="text-[#5A6770] font-[400] lg:text-[17px] md:text-[14px] xs:text-[14px]" >
                        Price Range
                    </div>
                    <input type="text" placeholder="Select" className="text-[#A4ABAC] font-[400] lg:text-[17px] md:text-[14px] xs:text-[14px] outline-none border-none"/>
                </div>
                <div className="flex flex-col col">
                    <div className="md:text-start xs:text-end text-[#5A6770] font-[400] lg:text-[17px] md:text-[14px] xs:text-[14px]" >
                        Property Size
                    </div>
                    <input type="text" placeholder="Select" className="md:text-start xs:text-end text-[#A4ABAC] font-[400] lg:text-[17px] md:text-[14px] xs:text-[14px] outline-none border-none"/>
                </div>
                

                <div className="flex flex-row lg:gap-4 md:gap-4 xs:gap-0 md:col-span-1 xs:col-span-2 justify-between">
                    <div className="flex justify-center">
                        <button className="rounded-full bg-primary p-4">
                            <img
                                alt=""
                                src={Search}
                                className="cursor-pointer "
                            />

                        </button>
                    </div>
                    <div 
                        className="flex justify-center"
                        
                    >
                        <button 
                        onClick={() => openModal()}
                        className="rounded-lg bg-white p-2 border-[1px] border-[#A4ABAC] flex justify-center items-center flex-col">
                            <img
                                alt=""
                                src={Filter}
                                className="cursor-pointer"
                            />
                            <div className="mt-1 text-[10px]"> Advanced</div>

                        </button>
                    </div>
                </div>


            </div>

            <SearchFilter
                isOpen={isOpen}
                closeModal={closeModal}
            />
        </div>
    )
}

export default SearchTab