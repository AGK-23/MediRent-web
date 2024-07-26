// import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Star from "../../../assets/Listing/star.svg";
import Area from "../../../assets/Listing/area.svg";
import BathTub from "../../../assets/Listing/bath-tub.svg";
import Bed from "../../../assets/Listing/bed.svg";



const Index = () => {
    // const [searchTerm, setSearchTerm] = useState('');
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

                const response = await axios.get('https://medirent-api-3gwy.onrender.com/housing/get-all-user-listings', { headers });

                console.log("all the response..", response?.data);
                setListings(response?.data?.data.slice(0, 3));

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
            <div className="text-slate-700 text-lg py-7">Properties Overview</div>

            <div className=" ">
                {
                    !isLoading ? (
                        <div className="grid md:w-full xs:w-full md:grid-cols-3 xs:grid-cols-1 gap-5 xs:px-3 mt-10 md:mx-0 xs:mx-0 justify-center items-center">
                            {listings?.length > 0 ? (
                                listings.map((listing, index) => (
                                    <div key={index} className="flex justify-center items-center  flex-col ">
                                        <div className="bg-white rounded-lg px-0 py-3 shadow-xl">
                                            <div className='w-full h-full'>
                                                <Link to={`/listing-details/${listing.id}`} className='flex items-center rounded-lg w-full h-full'>
                                                    <img alt="" src={listing.avatars[0]} className="cursor-pointer w-[500px] h-60 object-cover rounded-tl-lg rounded-tr-lg" />
                                                </Link>
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
                                                    to="/admin/dashboard/listing"
                                                    className="mt-5 rounded-lg bg-primary font-normal px-10 py-[15px] text-center text-white opacity-70"
                                                >View all listing</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (

                                <div className='w-full flex justify-start font-semibold text-lg items-center h-full '>
                                    <div className="">No Listings Found</div>
                                </div>
                                // <div className='xs:w-full md:w-[80vw] flex justify-center items-center h-[50vh] '>
                                //     <div className="loader "></div>
                                // </div>
                            )}
                        </div>

                    ) : (
                        <div className='w-screen flex justify-center items-center h-[50vh] '>
                            <div className="loader "></div>
                        </div>
                    )
                }
            </div>
        </div>

    );
};

export default Index;
