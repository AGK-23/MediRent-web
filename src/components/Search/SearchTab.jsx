/* eslint-disable no-unused-vars */
// import React from 'react'
import { useState, useEffect } from "react";
import Filter from "../../assets/Search/filter.svg";
import Search from "../../assets/Search/search.svg";

import SearchFilter from "../ui/SearchFilter";
import CustomSelect from "../Custom-components/Custom-Select";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

import { useLocation, useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SearchTab = ({ getAllListing, searchedListings, setSearchedListings, sendDataToParent, allSiteListings, setAllSiteListings }) => {

    const locationCity = useLocation();
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);
    const [userLoading, setUserLoading] = useState(false);
    const [emptyLoading, setEmptyLoading] = useState(true);
    const [searchLoading, setSearchLoading] = useState(false);
    const [searchedAllListings, setSearchedAllListings] = useState([]);
    const [listingValue, setListingValue] = useState(false);


    const closeModal = () => {
        setIsOpen(false);
    };

    const openModal = () => {
        setIsOpen(true);
    };

    useEffect(() => {
        if(locationCity.pathname === "/all-listings"){
            setSearchLoading(true)
            // console.log("door", searchLoading)

        }
        console.log("window..", locationCity.pathname, "City..", locationCity.pathname, searchedAllListings, "shout", searchedListings)
    }, [locationCity.pathname, searchedAllListings, searchedListings, allSiteListings, searchLoading, listingValue]);

    const [allListings, setAllListings] = useState({
        location: "",
        propertyType: "",
        propertySize: null,
        buildYear: ""
    });

    var {
        location,
        propertyType,
        propertySize,
        buildYear,

    } = allListings;

    const validateForm = () => {
        const { location, propertyType, propertySize, buildYear } = allListings;

        if (!location) {
            return "location is required.";
        }
        if (!propertyType) {
            return "Property type is required.";
        }
        if (propertySize === null || propertySize <= 0) {
            return "Property size must be a positive number.";
        }
        if (buildYear && (isNaN(buildYear) || buildYear < 1900 || buildYear > new Date().getFullYear())) {
            return "Build year must be a valid year.";
        }
        return null; // No errors
    };

    const handleLocationChange = (event) => {
        const { value } = event.target;

        setAllListings(prevState => ({
            ...prevState,
            location: value
        }));
    };

    const handlePropertySizeChange = (event) => {
        const { value } = event.target;

        setAllListings(prevState => ({
            ...prevState,
            propertySize: parseInt(value)
        }));
    };

    const handleBuildYearChange = (event) => {
        const { value } = event.target;

        setAllListings(prevState => ({
            ...prevState,
            buildYear: value
        }));
    };

    const handlePropertyType = (value) => {
        // console.log("value", value);
        setAllListings(prevState => ({
            ...prevState,
            propertyType: value,
        }));
    };

    const handleListing = async () => {
        // console.log("goal")

        // console.log("listings..", searchedListings)
        // e.preventDefault();
        try {
            setUserLoading(true);
            // console.log("user form for landlord...", allListings);
            const response = await axios.post(
                'https://medirent-api-3gwy.onrender.com/housing/get-all-listings?pageNumber=1&pageSize=100',
                {
                    location,
                    propertyType,
                    propertySize,
                    buildYear,
        
                }, // Sending an empty JSON object
                {
                    headers: {
                        'accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                }
            );
            // console.log("pat")
            // console.log("all the way.", response?.data?.data?.items)
            setUserLoading(false);
            // console.log("pat 3", allSiteListings, searchedListings)

            if(locationCity.pathname !== "/"){
                // console.log("some path")
                setSearchedListings(response?.data?.data?.items);
                // console.log("pat 4")
    
                // console.log("all the user..", response, searchedListings);
                
        
                if (response.data.success === true) {
    
                    getAllListing(response?.data?.data?.items)
                    // console.log("hello in the building..")
                    closeModal();
                }
            }


            if(locationCity.pathname == "/"){
                setAllSiteListings(response?.data?.data?.items)
                // console.log("pathname")

                // console.log("all site..", allSiteListings, response?.data?.data?.items)
                const items = response?.data?.data?.items || [];

                setListingValue(true)

                // console.log("item in the code..", items, listingValue)
                navigate('/all-listings', { state: { items, listingValue: true }});
        
            }
        } catch (error) {
            setUserLoading(false);
            if (error?.response?.data?.data === null) {
                setEmptyLoading(false)
            }
        }
    };

    

    
    return (
        <div className="md:px-0 xs:px-2">
            <div className="grid md:grid-cols-5 xs:grid-cols-2 lg:gap-10 md:gap-0 xs:gap-6 rounded-lg shadow-lg border-[1px] md:px-6 xs:px-2 py-6 md:w-full xs:w-full bg-white">
                <div className="flex flex-col col  w-full md:mr-0 xs:mr-[69px] ">
                    <div className="text-[#5A6770] font-[400] lg:text-[17px] md:text-[14px] xs:text-[14px]" >
                        City
                    </div>
                    <input
                        type="text"
                        placeholder="Select"
                        className="text-[#A4ABAC] font-[400] lg:text-[17px] md:text-[14px] xs:text-[14px] outline-none border-none"
                        value={location}
                        onChange={handleLocationChange}
                    />
                </div>
                <div className="flex flex-col col w-full ">
                    <div className="w-full md:text-start xs:text-end text-[#5A6770] font-[400] lg:text-[17px] md:text-[14px] xs:text-[14px]" >
                        Property Type
                    </div>
                    <CustomSelect
                        wrapperClass=' !h-[38px] !w-full !px-[12px]'
                        labelClass=' text-black w-full text-gray-500'
                        optionsClass='!text-[0.875rem] !h-[48px] !w-[100%] !text-black'
                        optionWrapperClass=' w-[100%] !w-full border-[1px] shadow-lg border-gray-200 xl:left-[0px] !left-[0px] !h-fit !bottom-[-216px] overflow-y-auto '
                        // otherOptions={true}
                        label='Select type'
                        setSelected={handlePropertyType}
                        selected={propertyType}
                        options={[
                            {
                                label: 'House',
                                value: 'House'
                            },
                            {
                                label: 'Commercial',
                                value: 'Commercial'
                            },
                            {
                                label: 'Apartment',
                                value: 'Apartment'
                            },
                            {
                                label: 'Duplex',
                                value: 'Duplex'
                            }
                        ]}
                    />
                    {/* <input type="text" placeholder="Select" className="md:text-start xs:text-end text-[#A4ABAC] font-[400] lg:text-[17px] md:text-[14px] xs:text-[14px] outline-none border-none"/> */}
                </div>
                <div className="flex flex-col col ">
                    <div className="text-[#5A6770] font-[400] lg:text-[17px] md:text-[14px] xs:text-[14px]" >
                        Build Year
                    </div>
                    <input
                        type="number"
                        placeholder="Select"
                        value={buildYear}
                        onChange={handleBuildYearChange}
                        className="text-[#A4ABAC] font-[400] lg:text-[17px] md:text-[14px] xs:text-[14px] outline-none border-none"
                    />
                </div>
                <div className="flex flex-col col ">
                    <div className="md:text-start xs:text-end text-[#5A6770] font-[400] lg:text-[17px] md:text-[14px] xs:text-[14px]" >
                        Property Size
                    </div>
                    <input
                        type="number"
                        placeholder="Select"
                        value={propertySize}
                        onChange={handlePropertySizeChange}
                        className="md:text-start xs:text-end text-[#A4ABAC] font-[400] lg:text-[17px] md:text-[14px] xs:text-[14px] outline-none border-none"
                    />
                </div>

                <div className={`${locationCity.pathname !== "/" ? "md:col-span-1 xs:col-span-2 justify-between" : "md:col-span-1 xs:col-span-2 justify-center"}  flex flex-row lg:gap-4 md:gap-4 xs:gap-0 `}>
                    <div className="flex justify-center items-center">
                        <button
                            onClick={handleListing}
                            className="rounded-full bg-primary w-[60px] h-[60px] flex justify-center items-center">
                            <img
                                alt=""
                                src={Search}
                                className="cursor-pointer "
                            />
                        </button>
                    </div>
                    {
                        locationCity.pathname !== "/" && (
                            <div
                                className="flex justify-center"
                            >
                                <button
                                    onClick={() => openModal()}
                                    className="rounded-lg bg-white p-2 border-[1px] border-[#A4ABAC] flex justify-center items-center flex-col"
                                >
                                    <img
                                        alt=""
                                        src={Filter}
                                        className="cursor-pointer"
                                    />
                                    <div className="mt-1 text-[10px]"> Advanced</div>
                                </button>
                            </div>

                        )
                    }
                </div>
            </div>

            <SearchFilter
                isOpen={isOpen}
                closeModal={closeModal}
                searchedListings={searchedListings}
                setSearchedListings={setSearchedListings}
                sendDataToParent={sendDataToParent}
                getAllListing={getAllListing}
            />
        </div>
    )
}

export default SearchTab