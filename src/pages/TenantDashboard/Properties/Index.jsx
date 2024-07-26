// import React from "react";



import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import NoFound from "../../../assets/svg/NoHouse.svg"
import Star from "../../../assets/Listing/star.svg";
import Area from "../../../assets/Listing/area.svg";
import BathTub from "../../../assets/Listing/bath-tub.svg";
import Bed from "../../../assets/Listing/bed.svg";


const Index = () => {
    


    const [isLoading, setIsLoading] = useState(false)

    const [listings, setListings] = useState([]);

    const formatValue = (value) => {
        return value?.toLocaleString('en-US');
    };


    useEffect(() => {
        const fetchListings = async () => {
            try {
                // Retrieve accessToken from localStorage
                const accessToken = JSON.parse(localStorage.getItem('accessToken'));


                if (!accessToken) {
                    // Handle case where accessToken is not available
                    console.error('Access Token not found in localStorage');
                    return;
                }

                // Set the headers with the accessToken
                const headers = {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                };

                setIsLoading(true)

                const response = await axios.post('https://medirent-api-3gwy.onrender.com/housing/get-all-listings',
                    {
                        pageIndex: 1,
                        pageSize: 10,
                        filter: "",
                        keyword: ""
                    },
                    { headers }
                );

                console.log("all the response..", response?.data?.data);
                setListings(response?.data?.data?.items.slice(0, 3));

                // console.log("all the positive report..", listings)

                console.log("made from ..", response?.data?.data?.items);

                setIsLoading(false)

            } catch (error) {
                console.error('Error fetching listings:', error);
                setIsLoading(false)
            }
        };

        fetchListings();
    }, []);

    return (

        <div>
            <div className="my-4 flex justify-between md:flex-row xs:flex-col gap-10 ">
                <div>
                    <div className="text-slate-900 text-lg font-bold">Explore Listings </div>
                    <div className="text-gray-500 md:text-xs xs:text-[10px]">
                        Search for properties and spaces you may like
                    </div>
                </div>

                {/* <div className="rounded-full border-[2px] border-third px-10 py-2 text-sm font-semibold text-center">
                    Browse
                </div> */}
                <Link to='/admin/renter/listing' className="rounded-full border-[2px] border-third px-10 py-2 text-sm font-semibold text-center">
                    Browse
                </Link>
            </div>

            <div className="grid gap-5 md:grid-cols-3 xs:grid-cols-1 ">
                {!isLoading ? (
                    !listings ?
                    <div className="flex justify-center items-center h-full ">
                            <div className='flex flex-col '>
                                
                                <img alt="" src={NoFound} className="text-7xl w-full  h-full" />
                                <div className='md:text-2xl xs:text-lg font-semibold text-center mt-5 text-gray-600'>No Listing Found</div>
                            </div>

                        </div>
                    :
                    listings.map((listing, index) => (
                        <div key={index} className="flex justify-center items-center  flex-col ">
                            <div className="bg-white rounded-lg px-0 py-3 shadow-xl">
                                <div className=''>
                                    <div  className='flex items-center w-full h-full'>
                                        <img alt="" src={listing.avatars[0]} className="cursor-pointer w-[500px] h-60 object-cover rounded-tl-lg rounded-tr-lg" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-0 h-fit pt-6 md:px-3 xs:px-2">
                                    <div>
                                        <div className="flex justify-between w-full">
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
                                                        <span className="text-slate-700 font-semibold text-[16px]">${formatValue(listing?.housingDetails?.price)}</span> <span className="text-gray-500">/month</span>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                        <div className="flex justify-start items-center border-none my-1">
                                            <div className=''>

                                                <div className='text-slate-700 font-[400] text-[10px] w-[100%]'>
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
                                                    {listing?.housingDetails?.starRating || 0} Star
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <Link 
                                        to="/admin/renter/listing"
                                        className="mt-5 rounded-lg bg-primary font-normal px-10 py-[15px] text-center text-white opacity-70"
                                    >View all listing</Link>
                                </div>
                            </div>
                        </div>
                    )) 
                    
                ) : (
                    <div className='w-screen flex justify-center items-center h-[50vh] '>
                        <div className="loader"></div>
                    </div>
                )}
            </div>
        </div>

    );
};

export default Index;
