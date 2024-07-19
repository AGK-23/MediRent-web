/* eslint-disable no-unused-vars */
// import React from 'react'
// import { useState } from "react";
import SearchTab from "../../Search/SearchTab"
import RoadCity from "../../../assets/Listing/road-city.png";
import ApartmentalResidential from "../../../assets/Listing/apartment-residential.png";
import SmallFamily from "../../../assets/Listing/small-family.png";

import Star from "../../../assets/Listing/star.svg";
import Area from "../../../assets/Listing/area.svg";
import BathTub from "../../../assets/Listing/bath-tub.svg";
import Bed from "../../../assets/Listing/bed.svg";
import AvailabilityModal from "../../ui/AvailabilityModal";
import { Link } from "react-router-dom";

import { useState, useEffect } from 'react';
import axios from 'axios';



const initialState = [
    {
        image: RoadCity,
        address: "505 Thurlow St, Vancouver, BC V6E 4J6, Canada",
        bedRooms: "2",
        bathRooms: "1",
        area: "400sq fts",
        rating: "2",
        unitType: "4BHK",
        amount: "$800",
    },
    {
        image: ApartmentalResidential,
        address: "1826 Tchesinkut Lake Rd Smithers, Canada",
        bedRooms: "2",
        bathRooms: "4",
        area: "5600sq fts",
        rating: "5",
        unitType: "4BHK",
        amount: "$1200",
    },
    {
        image: SmallFamily,
        address: "4616 St. Paul Street St Catharines, Canada",
        bedRooms: "1",
        bathRooms: "2",
        area: "5600sq fts",
        rating: "3",
        unitType: "4BHK",
        amount: "$4800",
    },
    {
        image: ApartmentalResidential,
        address: "783 Bridgeport Rd Hamilton, Canada",
        bedRooms: "2",
        bathRooms: "4",
        area: "5600sq fts",
        rating: "4",
        unitType: "4BHK",
        amount: "$3200",
    },
    {
        image: SmallFamily,
        address: " 3928 Fourth Avenue Calgary, Canada",
        bedRooms: "3",
        bathRooms: "5",
        area: "5600sq fts",
        rating: "5",
        unitType: "4BHK",
        amount: "$1700",
    },
    {
        image: RoadCity,
        address: "4225 49th Avenue Fort Good Hope, Canada",
        bedRooms: "1",
        bathRooms: "2",
        area: "400sq fts",
        rating: "3",
        unitType: "4BHK",
        amount: "$2800",
    },

]

const TopSearch = () => {
    // const [listings, setListings] = useState(initialState);
    const [showModal, setShowModal] = useState(false);
    const [selectedAvailability, setSelectedAvailability] = useState(null);

    const [isLoading, setIsLoading] = useState(false)
    const [allSiteListings, setAllSiteListings] = useState([]);
    const [searchedListings, setSearchedListings] = useState([]);

    const [allListings, setAllListings] = useState({
        location: "",
        propertyType: "",
        minimumPriceRange: null,
        maximumPriceRange: null,
        propertySize: null,
        bedrooms: null,
        bathrooms: null,
        amenities: [], 
        buildYear: null
    });

    const [all, setAll] = useState({
        location: allListings.location,
        propertyType: allListings.propertyType,
        minimumPriceRange: allListings.minimumPriceRange,
        maximumPriceRange: allListings.maximumPriceRange,
        propertySize: allListings.propertySize,
        bedrooms: allListings.bedrooms,
        bathrooms: allListings.bathrooms,
        amenities: allListings.amenities, 
        buildYear: allListings.buildYear
    });

    useEffect(() => {
        setAll(prevState => ({
            ...prevState,
            location: allListings.location,
            propertyType: allListings.propertyType,
            minimumPriceRange: allListings.minimumPriceRange,
            maximumPriceRange: allListings.maximumPriceRange,
            propertySize: allListings.propertySize,
            bedrooms: allListings.bedrooms,
            bathrooms: allListings.bathrooms,
            amenities: allListings.amenities, 
            buildYear: allListings.buildYear
        }));

        
    }, [allListings]);

    var {
        location,
        propertyType,
        minimumPriceRange,
        maximumPriceRange,
        propertySize,
        bedrooms,
        bathrooms,
        amenities,
        buildYear,

    } = allListings

    useEffect(() => {
        console.log("Updated Bank:", allSiteListings);
    }, [allSiteListings, searchedListings, allListings, all]);

    useEffect(() => {
        const fetchListings = async () => {
            try {
                setIsLoading(true)

                console.log("first items", allListings, all)

                const response = await axios.post(
                    'https://medirent-api-3gwy.onrender.com/housing/get-all-listings?pageNumber=1&pageSize=10',
                    { }, // Sending an empty JSON object
                    {
                      headers: {
                        'accept': 'application/json',
                        'Content-Type': 'application/json',
                      },
                    }
                );

                setAllSiteListings(response?.data?.data?.items);
                
                console.log("all the response..", response?.data, allSiteListings);
                setIsLoading(false)

            } catch (error) {
                console.error('Error fetching listings:', error);
                setIsLoading(false)
            }
        };

        fetchListings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSearchListing = async (data) => {
        try {
            setIsLoading(true)

            console.log("first items", allListings, all, data)

            const response = await axios.post(
                'https://medirent-api-3gwy.onrender.com/housing/get-all-listings?pageNumber=1&pageSize=10',
                { data }, // Sending an empty JSON object
                {
                  headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',
                  },
                }
            );

            setAllSiteListings(data);
            
            console.log("all the response..", response?.data, allSiteListings);
            setIsLoading(false)

        } catch (error) {
            console.error('Error fetching listings:', error);
            setIsLoading(false)
        }
    };


    const handleCheckAvailability = (availability) => {
        console.log("first in the code", availability)
        setSelectedAvailability(availability);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedAvailability(null);
    };

    const [childData, setChildData] = useState(null);

    const handleDataFromChild = (data) => {
        setChildData(data);
        console.log("Data received from child:", data);
    };

    return (
        <div className='flex w-full flex-col md:mt-[10rem] xs:mt-[0rem] py-0 relative'>
            <div className=' md:w-full gap-3 xs:w-full mt-0 xs:pb-2 md:pb-0 md:mt-10 xs:mt-12 relative'>

                <div className="flex flex-col">
                    <div className=" mb-3 xs:px-2 text-black flex-col font-normal md:px-[170px] md:mb-7 xs:mb-3 flex ">
                        <div className="text-[32px] leading-[40.32px] font-semibold xs:w-full flex">
                            {/* Search space to Rent */}
                            Find Your Perfect Rental
                            {/* {childData} */}
                        </div>

                        <div className='mt-[33px] w-full'>
                            <SearchTab
                                allListings={allListings}
                                setAllListings={setAllListings}
                                searchedListings={searchedListings}
                                setSearchedListings={setSearchedListings}
                                sendDataToParent={handleDataFromChild}
                                getAllListing={handleSearchListing}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className=" flex justify-center items-center lg:px-28 md:px-0 xs:px-0 py-10">
                {
                    allListings ? (
                        <div className="grid md:w-full xs:w-full md:grid-cols-3 xs:grid-cols-1 gap-5 xs:px-3 mt-10 md:mx-10 xs:mx-0 justify-center items-center">
                            {allSiteListings && (
                                allSiteListings.map((listing, index) => (
                                    <div key={index} className="flex justify-center items-center  flex-col ">
                                        <div className="bg-white rounded-lg px-0 py-3 shadow-xl">
                                            <div className='w-full h-full'>
                                                <Link to="/listing-details/1"  className='flex items-center rounded-lg w-full h-full'>
                                                    <img alt="" src={listing.avatars[0]} className="cursor-pointer w-[500px] h-60 object-cover rounded-tl-lg rounded-tr-lg" />
                                                </Link>
                                            </div>
                                            <div className="flex flex-col gap-0 h-fit pt-6 md:px-3 xs:px-2">
                                                <div>
                                                    <div className="flex justify-start items-center border-none ">
                                                        <div className=''>

                                                            <div className='font-[400] text-slate-400 text-[10px]'>
                                                                <span className="text-primary font-semibold text-[16px]">{listing?.housingDetails?.propertyType}</span>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="flex justify-start items-center border-none ">
                                                        <div className=''>

                                                            <div className='font-[400] text-slate-400 text-[10px]'>
                                                                <span className="text-slate-700 font-semibold text-[16px]">${listing?.housingDetails?.price}</span> <span className="text-gray-500">/month</span>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className="flex justify-start items-center border-none ">
                                                        <div className=''>

                                                            <div className='text-slate-700 font-[400] text-[10px] w-[80%]'>
                                                                {listing.address}
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-4 gap-5 mt-[15px] w-full ">
                                                    <div className="flex justify-center items-center border-none w-full">
                                                        <div className='flex justify-center items-center flex-col'>
                                                            <img alt="" src={Bed} className="cursor-pointer w-6 h-6" />
                                                            <div className='font-[400] text-slate-400 text-[10px]'>
                                                                {listing?.housingDetails?.numberOfBathRoom} Beds
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className="flex justify-center items-center border-none w-full">
                                                        <div className='flex justify-center items-center flex-col w-full'>
                                                            <img alt="" src={BathTub} className="cursor-pointer w-6 h-6" />
                                                            <div className='font-[400] text-slate-400 text-[10px]'>
                                                                {listing?.housingDetails?.numberOfBedRoom} Bath
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className="flex justify-center items-center border-none w-full">
                                                        <div className='flex justify-center items-center flex-col w-full'>
                                                            <img alt="" src={Area} className="cursor-pointer w-6 h-6" />
                                                            <div className='font-[400] text-slate-400 text-[10px]'>
                                                                {listing?.housingDetails?.area}
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className="flex justify-center items-center border-none w-full">
                                                        <div className='flex justify-start items-center flex-col w-full'>
                                                            <img alt="" src={Star} className="cursor-pointer w-6 h-6" />
                                                            <div className='font-[400] text-slate-400 text-[10px]'>
                                                                {/* {listing.rating}  Star */}
                                                                4 Star
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                                <button
                                                onClick={() => handleCheckAvailability(listing)} 
                                                className="mt-5 rounded-lg bg-primary px-10 py-[15px] text-center text-white opacity-70">Check Availability</button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                    ) : (
                        <div className='w-screen flex justify-center items-center h-[50vh] '>
                            <div className="loader "></div>
                        </div>
                    )
                }

                {showModal && selectedAvailability && (
                    <AvailabilityModal availability={selectedAvailability} onClose={handleCloseModal} />
                )}
            </div>




        </div>
    )
}

export default TopSearch