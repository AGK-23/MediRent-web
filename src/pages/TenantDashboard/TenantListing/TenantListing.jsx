import React from 'react'


import { useState, useEffect } from 'react';
import axios from 'axios';
import TenantCard from './TenantCard';


const TenantListing = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };
    

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

                const response = await axios.post('https://medirent-api.onrender.com/housing/get-all-listings',
                    {
                        pageIndex: 1,
                        pageSize: 10,
                        filter: "",
                        keyword: ""
                    },
                    { headers }
                );

                // console.log("all main page..", response?.data?.data);
                setListings(response?.data?.data?.items);

                // console.log("all the top..", listings)

                // console.log("made from Africa ..", response?.data?.data?.items);

                setIsLoading(false)

            } catch (error) {
                console.error('Error fetching listings:', error);
                setIsLoading(false)
            }
        };

        fetchListings();
    }, []);

    const filteredListing = listings.filter(item => {
        return item?.title?.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div className="flex flex-col h-full md:mt-0 xs:mt-20 px-5">
            <div>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="p-2 border border-gray-300 rounded-md my-10 xs:w-full md:w-3/12 outline-gray-200"
                />
            </div>
            <div className=" h-full flex-col justify-center items-center">
                <div className="h-full grid md:grid-cols-2 xs:grid-cols-1 gap-10 overflow-y-auto justify-center items-center pb-12">
                    {/* <Filter /> */}

                    {/* {filteredListing.map(item => (
              <Card key={item.id} item={item} />
            ))} */}

                    {!isLoading ? (
                        filteredListing.map(item => (
                            <TenantCard key={item.id} item={item} />
                        ))
                    ) : (
                        <div className='w-screen flex justify-center items-center h-screen '>
                            <div className="loader"></div>
                        </div>
                    )}
                </div>
            </div>
            {/* <div className="h-fit flex-3 md:flex w-full bg-third xs:hidden">
              <Map items={data} />
  
            </div> */}
        </div>
    );
}

export default TenantListing