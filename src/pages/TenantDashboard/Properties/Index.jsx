// import React from "react";



import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import NoFound from "../../../assets/svg/NoHouse.svg"


const Index = () => {
    


    const [isLoading, setIsLoading] = useState(false)

    const [listings, setListings] = useState([]);
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

                console.log("all the positive report..", listings)

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
            <div className="my-4 flex justify-between md:flex-row xs:flex-col gap-10">
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

            <div className="">
                {!isLoading ? (
                    !listings ?
                    <div className="flex justify-center items-center h-full ">
                            <div className='flex flex-col '>
                                
                                <img alt="" src={NoFound} className="text-7xl w-full  h-full" />
                                <div className='md:text-2xl xs:text-lg font-semibold text-center mt-5 text-gray-600'>No Listing Found</div>
                            </div>

                        </div>
                    :
                    listings?.map((Menu, index) => (
                        <div key={index} className="grid gap-5 md:grid-cols-3 xs:grid-cols-1 ">
                            <div
                                className={`flex rounded-md py-1 cursor-pointer hover:bg-light-white text-secondary text-sm items-center gap-x-4`}
                            >
                                <li key={index} className="flex flex-col w-full border shadow-md rounded-lg">

                                    {Menu?.avatars?.length > 0 && (
                                        <img src={Menu?.avatars[0]} alt="" className={`cursor-pointer rounded-t-lg w-full h-60`} />
                                    )}
                                    <span className="flex justify-between ">
                                        <span className="flex flex-row relative w-full">
                                            <span className=" absolute -top-16 px-3 text-white text-sm bg-third">{Menu.address}</span>
                                        </span>
                                        {/* <span
                                            className={`ml-4 flex justify-center items-center`}
                                            >
                                            {Menu.arrow ? <HiOutlineChevronRight /> : ""}
                                        </span> */}
                                    </span>
                                    <div className="flex py-4 px-5 flex-col ">
                                        <span className="md:text-lg xs:text-sm  text-third flex">

                                            <div className="text-black ">Daily Rent:</div>
                                            {/* <div className="ml-2">&#36; {item?.housingDetails?.dailyRent}</div> */}
                                            <span className=" text-third ml-3">&#36; {Menu?.housingDetails?.dailyRent}</span>

                                        </span>
                                        {/* <span className="md:text-3xl xs:text-lg px-3  text-third">&#36; {Menu?.housingDetails?.dailyRent}</span> */}

                                        <span
                                            className={`origin-left duration-200 font-medium py-2 md:text-lg xs:text-sm text-pink-600`}
                                        >
                                            {Menu.title}
                                        </span>

                                    </div>
                                    <div className="flex py-4 px-5 flex-col ">
                                        <Link to='/admin/renter/listing' className="md:text-sm xs:text-xs text-gray-500 rounded-3xl px-3 py-2 border-[1px] border-gray-700 w-fit">
                                            View All Listing
                                        </Link>

                                    </div>
                                </li>
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
