/* eslint-disable no-unused-vars */
// import React from 'react'


import React, { useEffect, useRef, useState } from 'react';
import ApartmentResidential from "../../../assets/Listing/apartment-residential.png";
import CozyStudio from "../../../assets/Listing/cozy-studio-apartment-with-bedroom-living-space.png";
import ModernBathroom from "../../../assets/Listing/modern-bathroom.png";
import RenderingWhite from "../../../assets/Listing/rendering-white-minimal-kitchen-with-wood-decoration.png";
import RoadCity from "../../../assets/Listing/Apartment-city.png"

import Star from "../../../assets/Listing/star.svg";
import Area from "../../../assets/Listing/area.svg";
import BathTub from "../../../assets/Listing/bath-tub.svg";
import Bed from "../../../assets/Listing/bed.svg"
import Home from "../../../assets/Listing/home.svg";
import ImagePeople from "../../../assets/Listing/image-people.svg"
// import Cancel from "../../../assets/svg/cancel.svg"
import { Link, useParams } from "react-router-dom";
import axios from 'axios';


import CustomInputs from "../../Custom-components/CustomInputs";
import CustomSelect from "../../Custom-components/Custom-Select";
import CustomDateInput from "../../Custom-components/CustomDateInput";

import AvailabilityModal from '../../ui/AvailabilityModal';


const propertyState = [
    {
        image: RoadCity,
        location: "505 Thurlow St, Vancouver, BC V6E 4J6, Canada",
        bedRooms: "2",
        bathRooms: "1",
        area: "400sq fts",
        rating: "2",
        unitType: "4BHK",
        amount: "$800",
    },
    {
        image: RenderingWhite,
        location: "1826 Tchesinkut Lake Rd Smithers, Canada",
        bedRooms: "2",
        bathRooms: "4",
        area: "5600sq fts",
        rating: "5",
        unitType: "4BHK",
        amount: "$1200",
    },
    {
        image: CozyStudio,
        location: "4616 St. Paul Street St Catharines, Canada",
        bedRooms: "1",
        bathRooms: "2",
        area: "5600sq fts",
        rating: "3",
        unitType: "4BHK",
        amount: "$4800",
    }
]




const initialState = {
    avatars: [RoadCity, ModernBathroom, CozyStudio, RenderingWhite, ApartmentResidential]
}

// AIzaSyDGlJZdJHSJbAU0SXqH3raKKRu_4z1-hyc

const ListingDetails = () => {
    const [listings, setListings] = useState(initialState);
    const { id } = useParams();

    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        phone: "",
        address: `I am interested in 505 Thurlow St, Vancouver, BC V6E 4J6, Canada`,
    });

    const [selectedUnit, setSelectedUnit] = useState("");

    let { fullname, email, phone, address } = formData;

    const mapRef = useRef(null);
    const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });

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


    const [properties, setProperties] = useState(propertyState);
    const [showModal, setShowModal] = useState(false);

    const handleCheckAvailability = (availability) => {
        setSelectedAvailability(availability);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedAvailability(null);
    };

    const onFilter = (level) => {
        setSelectedUnit(level)
    }

    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const formatValue = (value) => {
        return value?.toLocaleString('en-US');
    };

    useEffect(() => {
        const fetchListings = async () => {
            try {
                setIsLoading(true)

                console.log("first items", allListings, id)

                const response = await axios.post(
                    'https://medirent-api-3gwy.onrender.com/housing/get-all-listings?pageNumber=1&pageSize=100',
                    {}, // Sending an empty JSON object
                    {
                        headers: {
                            'accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                    }
                );

                // setAllSiteListings(response?.data?.data?.items);

                console.log("all the response..", response?.data,);


                const filteredArray = response?.data?.data?.items.filter(item => item.id === id);

                setAllSiteListings(filteredArray[0]);

                setFormData(prevFormData => ({
                    ...prevFormData,
                    address: `I am interested in ${filteredArray[0].address}`
                }));
                console.log("the filtered item..", allSiteListings)

                setIsLoading(false)

            } catch (error) {
                console.error('Error fetching listings:', error);
                setIsLoading(false)
            }
        };

        fetchListings();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        console.log("Updated Bank:", allSiteListings, formData);
    }, [allSiteListings, formData]);

    useEffect(() => {
        // Initialize the Google Maps API
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCNLbVG4hWNL12CHRp9UdVPtQicQKn4Iao`;
        script.async = true;
        document.body.appendChild(script);

        // Get the coordinates for the location
        const getCoordinates = async () => {
            // const response = await fetch(
            //     `https://maps.googleapis.com/maps/api/geocode/json?address=505+Thurlow+St,+Vancouver,+BC+V6E+4J6,+Canada&key=AIzaSyCNLbVG4hWNL12CHRp9UdVPtQicQKn4Iao`
            // );
            const response = await fetch(
                `https://maps.googleapis.com/maps/api/geocode/json?address=${allSiteListings?.address},+${allSiteListings?.city},${allSiteListings?.country}&key=AIzaSyCNLbVG4hWNL12CHRp9UdVPtQicQKn4Iao`
            );
            const data = await response.json();

            console.log("map..", data, data.results[0].geometry.location)
            const { lat, lng } = data.results[0].geometry.location;
            setCoordinates({ lat, lng });

            console.log("location..", coordinates, allSiteListings)
        };

        // Create the map
        const initMap = () => {
            const map = new window.google.maps.Map(mapRef.current, {
                center: coordinates,
                zoom: 14,
            });

            // Add a marker for the location
            new window.google.maps.Marker({
                position: coordinates,
                map: map,
                // title: "505 Thurlow St, Vancouver, BC V6E 4J6, Canada",
                title: `${allSiteListings?.address}, ${allSiteListings?.city}, ${allSiteListings?.country}`,
            });
        };

        // Wait for the Google Maps API to load and the coordinates to be fetched before initializing the map
        Promise.all([
            new Promise((resolve) => (script.onload = resolve)),
            getCoordinates(),

        ]).then(initMap);

        return () => {
            // Clean up the script tag when the component is unmounted
            document.body.removeChild(script);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [coordinates.lat, coordinates.lng, allSiteListings]);


    return (
        <div className='flex w-full flex-col md:mt-[5rem]  md:px-[0px] xs:px-2 xs:mt-[3rem] py-0 relative'>
            {
                allSiteListings ? (
                    <div>
                        <div className=' md:w-full gap-3 xs:w-full mt-0 xs:pb-2 md:pb-0 md:mt-10 xs:mt-12 relative'>

                            <div className="flex flex-col">


                                <div className=" mb-3 xs:px-0 text-black flex-col font-normal md:px-[170px] md:mb-7 xs:mb-3 flex ">
                                    <div className="grid md:grid-cols-4 gap-2 flex-row xs:grid-cols-1 w-full justify-center ">

                                        <div className="md:col-span-2 xs:col cursor-pointer flex w-full h-full">
                                            {allSiteListings?.avatars?.length > 0 && (
                                                <img src={allSiteListings?.avatars[0]} alt="" className="cursor-pointer w-full h-full object-cover" />
                                            )}
                                        </div>
                                        <div className="md:col xs:col flex-col justify-between items-center gap-2 flex w-full ">
                                            {allSiteListings?.avatars?.slice(1, 3).map((image, index) => (
                                                <img src={image} alt="" key={index} className="cursor-pointer w-full object-cover h-[200px]" />
                                            ))}
                                        </div>
                                        <div className="md:col xs:col flex-col justify-between items-center gap-2 flex w-full ">
                                            {allSiteListings?.avatars?.slice(3, 5).map((image, index) => (
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
                                        <div className="text-[#1F3249] font-semibold md:text-[30px] xs:text-[16px]">{allSiteListings?.housingDetails?.propertyType}</div>
                                        <div className='font-[400] text-slate-400 text-[10px]'>
                                            <span className="text-[#1F3249] font-semibold md:text-[30px] xs:text-[16px]">${formatValue(allSiteListings?.housingDetails?.price)}</span> <span className="text-gray-500 md:text-[16px] xs:text-[10px]">/month</span>
                                        </div>
                                    </div>

                                    <div className="flex justify-start items-center border-none ">
                                        <div className=''>

                                            <div className='text-primary font-semibold md:text-[20px] xs:text-[13px]'>
                                                {allSiteListings?.listingTitle}
                                            </div>
                                        </div>

                                    </div>

                                    <div className="flex xs:w-full md:w-[55%] leading-[30.24px] justify-between mt-4">
                                        <div className="text-[#1F3249] font-[400] md:text-[24px] xs:text-[16px]">{allSiteListings?.address}, {allSiteListings?.city}, {allSiteListings?.country}</div>
                                    </div>

                                    <div className='w-full flex items-center h-fit mt-10'>
                                        <img alt="" src={Home} className="cursor-pointer w-6 h-6" />
                                        <div className='font-[400] text-[#1F3249] md:text-[16px] xs:text-[10px] md:ml-2 xs:ml-1 flex items-center justify-center h-full'>

                                            <span className="md:px-3 xs:px-2">• {allSiteListings?.housingDetails?.numberOfBedRoom} Bedrooms</span>
                                            <span className="md:px-5 xs:px-2">• {allSiteListings?.housingDetails?.numberOfBathRoom} Bathroom</span>
                                            <span className="md:px-5 xs:px-2">• {allSiteListings?.housingDetails?.numberOfKitchens} Kitchen</span>
                                        </div>
                                    </div>

                                    <div className='w-full flex items-center  h-fit mt-5'>
                                        <img alt="" src={Area} className="cursor-pointer w-6 h-6" />
                                        <div className='font-[400] text-[#1F3249] md:text-[16px] xs:text-[10px] md:ml-2 xs:ml-1 flex items-center justify-center h-full'>

                                            <span className="md:px-3 xs:px-2">• {allSiteListings?.housingDetails?.area} sqfts</span>

                                        </div>
                                    </div>

                                    <div className='w-full flex items-center  h-fit mt-5'>
                                        <img alt="" src={Star} className="cursor-pointer w-6 h-6 text-[#1F3249]" />
                                        <div className='font-[400] text-[#1F3249] md:text-[16px] xs:text-[10px] md:ml-2 xs:ml-1 flex items-center justify-center h-full'>

                                            <span className="md:px-3 xs:px-2">• {allSiteListings?.housingDetails?.starRating || 0} Star</span>

                                        </div>
                                    </div>

                                    <div className="flex xs:w-full flex-col md:w-full leading-[30.24px] justify-between mt-4 py-10 border-t-[1px] border-b-[1px] border-gray-300">
                                        <div className="text-[#1F3249] font-[600] md:text-[24px] xs:text-[16px]">Description</div>
                                        <div className="text-[#5A6770] font-[400] leading-[20.8px] md:text-[16px] xs:text-[10px] mt-3">{allSiteListings?.housingDetails?.description}</div>
                                    </div>

                                    <div className="flex xs:w-full flex-col md:w-full leading-[30.24px] justify-between mt-4 py-5 border-none">
                                        <div className="text-[#1F3249] font-[600] md:text-[24px] xs:text-[16px]">Location</div>
                                        <div ref={mapRef} className='mt-3' style={{ width: '100%', height: '500px' }} />
                                    </div>


                                </div>


                                <div className="md:col-span-1 xs:col w-full">
                                    <div className=" relative hidden w-full px-0 my-6 mx-0 ">
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
                                                            // setValue={setFormData}
                                                            value={fullname}
                                                            onChange={(value) => setFormData(prevFormData => ({
                                                                ...prevFormData,
                                                                fullname: value
                                                            }))}

                                                            label={'FullName'}
                                                            className='px-0 mb-[14px]  text-[16px]'
                                                        />
                                                    </div>

                                                    <div className={`form-group flex w-[100%] text-[1rem]`}>

                                                        <CustomInputs
                                                            id="email"
                                                            type='email'
                                                            required
                                                            // setValue={setFormData}
                                                            value={email}
                                                            onChange={(value) => setFormData(prevFormData => ({
                                                                ...prevFormData,
                                                                email: value
                                                            }))}

                                                            label={'Email Address'}
                                                            className='px-0 mb-[14px]  text-[16px]'
                                                        />
                                                    </div>

                                                    <div className={`form-group flex w-[100%] text-[1rem]`}>

                                                        <CustomInputs
                                                            id="phone"
                                                            type='text'
                                                            required
                                                            // setValue={setFormData}
                                                            value={phone}
                                                            onChange={(value) => setFormData(prevFormData => ({
                                                                ...prevFormData,
                                                                phone: value
                                                            }))}

                                                            label={'Phone Number'}
                                                            className='px-0 mb-[14px]  text-[16px]'
                                                        />
                                                    </div>

                                                    <div className="grid grid-cols-2 gap-2">
                                                        <div>
                                                            <CustomDateInput value={selectedDate} onChange={handleDateChange} />
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
                                                                    value: '11:00AM'
                                                                },
                                                                {
                                                                    label: '12:00AM',
                                                                    value: '12:00AM'
                                                                },
                                                                {
                                                                    label: '1:00PM',
                                                                    value: '1:00PM'
                                                                },
                                                                {
                                                                    label: '2:00PM',
                                                                    value: '2:00PM'
                                                                },
                                                                {
                                                                    label: '3:00PM',
                                                                    value: '3:00PM'
                                                                },
                                                                {
                                                                    label: '4:00PM',
                                                                    value: '4:00PM'
                                                                },
                                                                {
                                                                    label: '5:00PM',
                                                                    value: '5:00PM'
                                                                },
                                                                {
                                                                    label: '6:00PM',
                                                                    value: '6:00PM'
                                                                },
                                                                {
                                                                    label: '7:00PM',
                                                                    value: '7:00PM'
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

                                    <div className=" relative flex w-full px-0 my-6 mx-0 ">
                                        <div className="md:w-full xs:w-full bg-white border-[1px] rounded-lg shadow-lg p-[1rem] mx-1">
                                            <div className="flex flex-col gap-4">
                                                <div className='flex w-full flex-col  gap-3'>
                                                    <img src={ImagePeople} alt="" className="cursor-pointer w-[50px] object-cover h-[50px]" />

                                                    <div className='my-1 font-[400] text-[16px] text-black leading-[29.64px]'>
                                                        Managed by:
                                                    </div>

                                                    <div className='my-1 font-[600] text-[23px] text-black leading-[29.64px]'>
                                                        The Syndicate Org
                                                    </div>

                                                    <div className='my-1 font-[400] text-[23px] text-black leading-[29.64px]'>
                                                        +1 12345543567
                                                    </div>

                                                </div>
                                            </div>

                                            <button className="mt-5 w-full rounded-lg bg-white px-10 text-slate-900 py-[15px] text-center font-semibold border-[1px] border-gray-500">Request Info</button>
                                        </div>
                                    </div>
                                </div>

                            </div>



                        </div>

                    </div>

                ) : (
                    <div className='xs:w-full md:w-full  flex justify-center items-center h-[80vh] '>
                        <div className="loader "></div>
                    </div>
                )
            }

            <div className=" flex justify-center items-center  md:px-0 xs:px-0 py-10">
                <div className="grid md:w-full xs:w-full md:grid-cols-1 xs:grid-cols-1 gap-5 xs:px-0 mt-0 md:mx-0 xs:mx-0 justify-center ">
                    <div className="md:col-span-2 xs:col w-full ">

                        <div className="flex xs:w-full flex-col md:w-full leading-[30.24px] justify-between mt-4 py-10 ">
                            <div className=" flex justify-center flex-col items-center lg:mx-28 md:px-0 xs:px-0 py-10 border-t-[1px]  border-gray-300">
                                <div className="text-[#1F3249] font-[600] text-start md:text-[24px] xs:text-[16px] w-full">Similar properties nearby</div>
                                <div className="grid md:w-full xs:w-full md:grid-cols-3 xs:grid-cols-1 gap-5 xs:px-3 mt-10 md:mx-0 xs:mx-0 justify-center items-center">
                                    {properties && (
                                        properties.map((property, index) => (
                                            <div key={index} className="flex justify-start items-center  flex-col ">
                                                <div className="bg-white rounded-lg px-0 pb-3 shadow-xl">
                                                    <div className=''>
                                                        <div className='flex items-center rounded-lg'>
                                                            <img alt="" src={property.image} className="rounded-tl-lg rounded-tr-lg cursor-pointer w-[360px] h-[200px]" />
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col gap-0 h-fit pt-6 md:px-3 xs:px-2">
                                                        <div>
                                                            <div className="flex justify-start items-center border-none ">
                                                                <div className=''>

                                                                    <div className='font-[400] text-slate-400 text-[10px]'>
                                                                        <span className="text-slate-700 font-semibold text-[16px]">{property.amount}</span> <span className="text-gray-500">/month</span>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                            <div className="flex justify-start items-center border-none ">
                                                                <div className=''>

                                                                    <div className='text-slate-700 font-[400] text-[10px] w-[80%]'>
                                                                        {property.location}
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>

                                                        <div className="grid grid-cols-4 gap-5 mt-[15px] w-full ">
                                                            <div className="flex justify-center items-center border-none w-full">
                                                                <div className='flex justify-center items-center flex-col'>
                                                                    <img alt="" src={Bed} className="cursor-pointer w-6 h-6" />
                                                                    <div className='font-[400] text-slate-400 text-[10px]'>
                                                                        {property.bedRooms} Beds
                                                                    </div>
                                                                </div>

                                                            </div>

                                                            <div className="flex justify-center items-center border-none w-full">
                                                                <div className='flex justify-center items-center flex-col w-full'>
                                                                    <img alt="" src={BathTub} className="cursor-pointer w-6 h-6" />
                                                                    <div className='font-[400] text-slate-400 text-[10px]'>
                                                                        {property.bathRooms} Bath
                                                                    </div>
                                                                </div>

                                                            </div>

                                                            <div className="flex justify-center items-center border-none w-full">
                                                                <div className='flex justify-center items-center flex-col w-full'>
                                                                    <img alt="" src={Area} className="cursor-pointer w-6 h-6" />
                                                                    <div className='font-[400] text-slate-400 text-[10px]'>
                                                                        {property.area}
                                                                    </div>
                                                                </div>

                                                            </div>

                                                            <div className="flex justify-center items-center border-none w-full">
                                                                <div className='flex justify-start items-center flex-col w-full'>
                                                                    <img alt="" src={Star} className="cursor-pointer w-6 h-6" />
                                                                    <div className='font-[400] text-slate-400 text-[10px]'>
                                                                        {property.rating} Star
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>

                                                        <button
                                                            onClick={() => handleCheckAvailability(property)}
                                                            className="mt-5 rounded-lg bg-primary px-10 py-[15px] text-center text-white opacity-70">Check Availability</button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>

                                {showModal && selectedAvailability && (
                                    <AvailabilityModal availability={selectedAvailability} onClose={handleCloseModal} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default ListingDetails