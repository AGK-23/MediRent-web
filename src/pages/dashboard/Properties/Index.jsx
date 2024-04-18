// import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';



const Index = () => {
    // const [searchTerm, setSearchTerm] = useState('');
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

            <div className="grid gap-5 md:grid-cols-3 xs:grid-cols-1 ">
                
                

                {!isLoading ? (
                    listings?.map((Menu, index) => (
                        <div key={index} className="">
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
                                        <Link to='/admin/dashboard/listing' className="md:text-sm xs:text-xs text-gray-500 rounded-3xl px-3 py-2 border-[1px] border-gray-700 w-fit">
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
