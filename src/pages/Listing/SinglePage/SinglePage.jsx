

import Slider from './Slider/Slider';
import { userData } from '../../../data/Mylinks';
import { useState, useEffect } from 'react';
import { singlePostData } from '../../../data/Mylinks';
// import singlePostData from './singlePostData';
import { Link, useNavigate, useParams } from "react-router-dom";

import { FaLocationDot } from "react-icons/fa6";
import { FaBed, FaBath, FaBookmark, FaPhone } from "react-icons/fa6";
import { RiArrowRightSLine } from "react-icons/ri";


import axios from 'axios';

import Map from '../AllListing/Map';

function SinglePage() {
    const [listings, setListings] = useState([]);
    const { id } = useParams(); // Use useParams to get the addressId from the URL




    useEffect(() => {

        console.log("data life..", id)
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

                const response = await axios.get(`https://medirent-api.onrender.com/housing/get-listing/${id}`, { headers });

                console.log("all the individual person..", response?.data);
                setListings(response?.data?.data);

            } catch (error) {
                console.error('Error fetching listings:', error);
            }
        };

        fetchListings();
    }, []);








    return (
        <div className="flex flex-col h-full mt-10">
            <div>
            <div className='my-10 flex flex-row items-center bg-gray-200 w-fit px-4 py-1 rounded-lg border-none md:mt-10 xs:mt-20 ml-5 '>
                <div className='flex flex-row items-center bg-gray-200 w-fit border-none'>
                    <Link to="/admin/dashboard/listing" className='hover:text-slate-400 text-slate-700 font-medium  md:text-sm xs:text-xs'>
                        All Listing
                    </Link>
                    <span className="text-[20px]">
                        <RiArrowRightSLine />
                    </span>
                    <span className='text-slate-700 font-medium  md:text-sm xs:text-xs'>
                        Create Listing
                    </span>

                </div>

            </div>
                <div className="flex h-full">
                    <div className="px-8">
                        <div>
                            <Slider avatars={listings?.avatars} />
                        </div>

                        <div className="mt-10  py-10">
                            <div className="flex justify-between sm:flex-col sm:gap-4">
                                <div className="flex flex-col gap-4">
                                    <h1 className="md:text-xl xs:text-md font-semibold text-gray-700 transition-all duration-400 hover:text-black mt-4">
                                        {listings.title}
                                    </h1>
                                    <div className="flex items-center gap-1 text-gray-600 text-sm">
                                        {/* <img src="/pin.png" alt="" className="w-4 h-4" /> */}
                                        <div className="text-xl text-primary">
                                            <FaLocationDot />
                                        </div>
                                        <span className='ml-2'>{listings.address}</span>
                                    </div>
                                    <div className='grid md:grid-cols-2 xs:grid-cols-1 gap-5'>
                                        <span className="md:text-md xs:text-sm  text-third flex">

                                            <div className="text-black">Country:</div>
                                            <div className="ml-2">{listings?.country}</div>

                                        </span>
                                        <span className="md:text-md xs:text-sm  text-third flex">

                                            <div className="text-black">Province:</div>
                                            <div className="ml-2">{listings?.province}</div>

                                        </span>
                                    </div>
                                    <div className='grid md:grid-cols-3 xs:grid-cols-1 gap-5'>
                                        <span className="md:text-md xs:text-sm  text-third flex">

                                            <div className="text-black">City:</div>
                                            <div className="ml-2">{listings?.city}</div>

                                        </span>
                                        <span className="md:text-md xs:text-sm  text-third flex">

                                            <div className="text-black">Postal Code:</div>
                                            <div className="ml-2">{listings?.postalCode}</div>

                                        </span>
                                        <span className="md:text-md xs:text-sm  text-third flex">



                                            <div className="flex items-center gap-1 text-gray-600 text-sm">
                                                {/* <img src="/pin.png" alt="" className="w-4 h-4" /> */}
                                                <div className="text-xl text-primary">
                                                    <FaPhone />
                                                </div>
                                                <div className="text-black ml-2">Mobile Number:</div>
                                            </div>

                                            <div className="ml-2">{listings?.mobileNumber}</div>

                                        </span>
                                    </div>


                                    <span className="md:text-xl xs:text-lg  text-third ">&#36; {listings?.housingDetails?.dailyRent}</span>
                                </div>


                                {/* <div className="user flex flex-col items-center justify-center gap-4 p-8 rounded-md bg-yellow-200 font-semibold sm:p-4">
                                    <img src={userData.img} alt="" className="w-12 h-12 rounded-full" />
                                    <span>{userData.name}</span>
                                </div> */}
                            </div>
                            <div className='md:text-xl xs:text-md text-pink-600 font-semibold mt-10'>Apartment Details </div>

                            <div className='mt-5'>
                                <div className='grid md:grid-cols-3 xs:grid-cols-1 gap-5 my-5 items-center justify-center '>
                                    <span className="md:text-md xs:text-sm  text-third flex">

                                        <div className="text-black">Design Options:</div>
                                        <div className="ml-2">{listings?.housingDetails?.designOption}</div>

                                    </span>
                                    <span className="md:text-md xs:text-sm  text-third flex">

                                        <div className="text-black">Term Options:</div>
                                        <div className="ml-2">{listings?.housingDetails?.termOption}</div>

                                    </span>
                                    <span className="md:text-md xs:text-sm  text-third flex">

                                        <div className="text-black">PropertyType:</div>
                                        <div className="ml-2">{listings?.housingDetails?.propertyType}</div>

                                    </span>
                                </div>
                                <div className='grid md:grid-cols-2 xs:grid-cols-1 gap-5 my-5 items-center justify-center '>
                                    <div className="feature flex items-center justify-center gap-5 bg-whitesmoke py-1">
                                        <div className="text-xl text-primary">
                                            <FaBed />
                                        </div>
                                        <span className="text-xs flex w-full ">
                                            <div>
                                                {listings?.housingDetails?.noOfBedrooms}
                                            </div>
                                            <div className="ml-2">
                                                bedroom
                                            </div>
                                        </span>
                                    </div>

                                    <div className="feature flex items-center justify-center gap-5 bg-whitesmoke py-1">
                                        {/* <img src="/bath.png" alt="" className="w-4 h-4" /> */}
                                        <div className="text-xl text-primary">
                                            <FaBath />
                                        </div>
                                        <span className="text-xs flex w-full">
                                            <div>
                                                {listings?.housingDetails?.noOfBathrooms}
                                            </div>
                                            <div className="ml-2">
                                                bathroom
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div className='grid md:grid-cols-3 xs:grid-cols-1 gap-5 my-5 items-center justify-center '>
                                    <span className="md:text-md xs:text-sm  text-third flex">

                                        <div className="text-black">Daily Rent:</div>
                                        <div className="ml-2">&#36; {listings?.housingDetails?.dailyRent}</div>

                                    </span>
                                    <span className="md:text-md xs:text-sm  text-third flex">

                                        <div className="text-black">Weekly Rent:</div>
                                        <div className="ml-2">&#36; {listings?.housingDetails?.weeklyRent}</div>

                                    </span>
                                    <span className="md:text-md xs:text-sm  text-third flex">

                                        <div className="text-black">Monthly Rent:</div>
                                        <div className="ml-2">&#36; {listings?.housingDetails?.monthlyRent}</div>

                                    </span>
                                </div>

                                <div className='grid md:grid-cols-3 xs:grid-cols-1 gap-5 my-5 items-center justify-center '>
                                    <span className="md:text-md xs:text-sm  text-third flex">

                                        <div className="text-black">Currency:</div>
                                        <div className="ml-2">{listings?.housingDetails?.currency}</div>

                                    </span>
                                    <span className="md:text-md xs:text-sm  text-third flex">

                                        <div className="text-black">License Number:</div>
                                        <div className="ml-2">{listings?.housingDetails?.licenseNumber}</div>

                                    </span>

                                </div>

                                <div className='text-black font-normal text-lg'>
                                    Amenities
                                </div>

                                <div className="grid md:grid-cols-5 xs:grid-cols-1 gap-2">
                                    {listings?.housingDetails?.amenities.map((amenity, index) => (
                                        <div key={amenity?.id} className="flex items-center h-full bg-white rounded overflow-hidden  border-dashed border-2 border-gray-200">
                                            <div className="flex flex-row justify-center items-center w-full">
                                                <span className="inline-block h-full w-full rounded overflow-hidden px-2 py-2 text-center text-third md:text-md xs:text-xs">
                                                    {amenity?.description}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                    
                                </div>


                                <div className="bottom mt-8 text-gray-700">
                                    <span className="md:text-md xs:text-sm flex flex-col">

                                        <div className="text-black text-lg">Description:</div>
                                        <div className="ml-0">{listings?.housingDetails?.description}</div>
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="features flex-2 bg-pink-100 h-full overflow-y-scroll hidden">
                    <div className="wrapper p-8 md:p-20 flex flex-col gap-20">
                        <p className="title font-bold text-lg md:text-xl">General</p>
                        <div className="listVertical bg-white rounded-lg p-4">
                            <div className="feature flex items-center gap-4">
                                <img src="/utility.png" alt="" className="w-6 h-6" />
                                <div className="featureText">
                                    <span className="font-semibold">Utilities</span>
                                    <p>Renter is responsible</p>
                                </div>
                            </div>
                            <div className="feature flex items-center gap-4">
                                <img src="/pet.png" alt="" className="w-6 h-6" />
                                <div className="featureText">
                                    <span className="font-semibold">Pet Policy</span>
                                    <p>Pets Allowed</p>
                                </div>
                            </div>
                            <div className="feature flex items-center gap-4">
                                <img src="/fee.png" alt="" className="w-6 h-6" />
                                <div className="featureText">
                                    <span className="font-semibold">Property Fees</span>
                                    <p>Must have 3x the rent in total household income</p>
                                </div>
                            </div>
                        </div>
                        <p className="title font-bold text-lg md:text-xl">Sizes</p>
                        <div className="sizes flex justify-between">
                            <div className="size bg-white p-4 rounded-lg flex items-center gap-4">
                                <img src="/size.png" alt="" className="w-6 h-6" />
                                <span>80 sqft</span>
                            </div>
                            <div className="size bg-white p-4 rounded-lg flex items-center gap-4">
                                <img src="/bed.png" alt="" className="w-6 h-6" />
                                <span>2 beds</span>
                            </div>
                            <div className="size bg-white p-4 rounded-lg flex items-center gap-4">
                                <img src="/bath.png" alt="" className="w-6 h-6" />
                                <span>1 bathroom</span>
                            </div>
                        </div>
                        <p className="title font-bold text-lg md:text-xl">Nearby Places</p>
                        <div className="listHorizontal bg-white rounded-lg p-4 flex justify-between">
                            <div className="feature flex items-center gap-4">
                                <img src="/school.png" alt="" className="w-6 h-6" />
                                <div className="featureText">
                                    <span>School</span>
                                    <p>250m away</p>
                                </div>
                            </div>
                            <div className="feature flex items-center gap-4">
                                <img src="/pet.png" alt="" className="w-6 h-6" />
                                <div className="featureText">
                                    <span>Bus Stop</span>
                                    <p>100m away</p>
                                </div>
                            </div>
                            <div className="feature flex items-center gap-4">
                                <img src="/fee.png" alt="" className="w-6 h-6" />
                                <div className="featureText">
                                    <span>Restaurant</span>
                                    <p>200m away</p>
                                </div>
                            </div>
                        </div>
                        <p className="title font-bold text-lg md:text-xl">Location</p>
                        <div className="mapContainer w-full h-80"></div>
                        <div className="buttons flex justify-between">
                            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-yellow-400 rounded-md cursor-pointer">
                                <img src="/chat.png" alt="" className="w-4 h-4" />
                                Send a Message
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-yellow-400 rounded-md cursor-pointer">
                                <img src="/save.png" alt="" className="w-4 h-4" />
                                Save the Place
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default SinglePage;
