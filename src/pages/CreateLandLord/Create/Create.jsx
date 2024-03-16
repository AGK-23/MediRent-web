import React from 'react'
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { BsCheckLg } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { validateEmail } from "../../../components/EndPoints/url.jsx";


import '../../login/login.css';

import AddressLandlord from './Details/AddressLandlord.jsx';
// import HousingDetails from "./LandLordInfo/HousingDetails.jsx";
import HousingDetails from "../../CreateLandLord/LandLordInfo/HousingDetails.jsx";
import Photo from "../../CreateLandLord/LandLordInfo/Photo.jsx";
import AvailabilityLandlord from "../../CreateLandLord/LandLordInfo/AvailabilityLandlord.jsx";
import Spinner from "../../../assets/svg/Spinner.svg"



const Create = () => {
    const navigate = useNavigate();
    // const [avatar, setAvatar] = useState(null);
    const [userLoading, setUserLoading] = useState(false);

    const [landLoading, setLandLoading] = useState(false);

    const [loginLoading, setLoginLoading] = useState(false);

    const [housingLoading, setHousingLoading] = useState(false);

    const [imageLoading, setImageLoading] = useState(false);



   

    

    //NUMBER TWO THIS IS THE STATE FOR THE HOUSING DETAILS
    const [housingData, setHousingData] = useState({
        listingTitle: "",
        address: "",
        city: "",
        postalCode: "",
        phone: "",
        country: "",
        province: "",
        promotionCode: "",
    });

    //NUMBER THREE THIS IS THE STATE FOR THE HOUSING DETAILS
    const [detailsData, setDetailsData] = useState({
        termOption: "",
        designOption: "",
        dailyRent: "",
        weeklyRent: "",
        monthlyRent: "",
        numberOfBedRoom: "",
        numberOfBathRoom: "",
        licenseNumber: "",
        description: "",
        propertyType: "",
        currency: "",
        amenitiesOption: [],
    });

    // const [housing, setHousing] = useState(null);

    const [housing, setHousing] = useState("7b057fdb-255d-4d37-b8b9-e9de3addd458");


    useEffect(() => {
        console.log('Updated housingData:', housing);
    }, [housing]); // Log housingData whenever it changes


    //NUMBER FOUR THIS IS THE STATE FOR THE PHOTO
    const [avatars, setAvatars] = useState([]);
    const [fileList, setFileList] = useState([])

    // NUMBER FIVE THIS IS THE STATE FOR THE DATES
    const [selectedDates, setSelectedDates] = useState([]);

    // FINAL CREATE LISTING 
    const [createListing, setCreateListing] = useState({
        listingTitle: housingData?.listingTitle,
        address: housingData?.address,
        city: housingData?.city,
        postalCode: housingData?.postalCode,
        phone: housingData?.phone,
        country: housingData?.country,
        province: housingData?.province,
        promotionCode: housingData?.promotionCode,

        termOption: detailsData?.termOption,
        designOption: detailsData?.designOption,
        dailyRent: detailsData?.dailyRent,
        weeklyRent: detailsData?.weeklyRent,
        monthlyRent: detailsData?.monthlyRent,
        numberOfBedRoom: detailsData?.numberOfBedRoom,
        numberOfBathRoom: detailsData?.numberOfBathRoom,
        licenseNumber: detailsData?.licenseNumber,
        description: detailsData?.description,
        propertyType: detailsData?.propertyType,
        currency: detailsData?.currency,
        amenitiesOption: detailsData?.amenitiesOption,

        avatars: fileList,
        propertyDates: selectedDates,
    })

    // Update createListing whenever any of the dependent states change
    useEffect(() => {
        setCreateListing({
            ...createListing,
            listingTitle: housingData?.listingTitle,
            address: housingData?.address,
            city: housingData?.city,
            postalCode: housingData?.postalCode,
            phone: housingData?.phone,
            country: housingData?.country,
            province: housingData?.province,
            promotionCode: housingData?.promotionCode,

            termOption: detailsData?.termOption,
            designOption: detailsData?.designOption,
            dailyRent: detailsData?.dailyRent,
            weeklyRent: detailsData?.weeklyRent,
            monthlyRent: detailsData?.monthlyRent,
            numberOfBedRoom: detailsData?.numberOfBedRoom,
            numberOfBathRoom: detailsData?.numberOfBathRoom,
            licenseNumber: detailsData?.licenseNumber,
            description: detailsData?.description,
            propertyType: detailsData?.propertyType,
            currency: detailsData?.currency,
            amenitiesOption: detailsData?.amenitiesOption,

            // avatars: fileList,
            // propertyDates: selectedDates
        });

        

    }, [detailsData, fileList, selectedDates, housingData]);


    const [active, setActive] = useState(1)
    const [selectedCity, setSelectedCity] = useState("");
    const [selectedStates, setSelectedStates] = useState("");
    const [selectedCountry, setSelectedCountry] = useState(''); // State to store the selected country
    // eslint-disable-next-line no-unused-vars
    const [selectedCities, setSelectedCities] = useState(''); // State to store the selected city
    const [isLoading, setIsLoading] = useState(true);






    


    const renderPreviousForm = () => {
        setActive(active - 1);
    };
    // const [selectedFunction, setSelectedFunction] = useState("");

    // FUNCTION TO GET THE COUNTRY AND THE STATE
    function fetchData() {
        const options = {
            method: "GET",
            // url: 'http://states-and-cities.com/api/v1/states',
            url: "https://countriesnow.space/api/v0.1/countries/states",
        };
        return axios.request(options);
    }

    function fetchStateData() {
        const options = {
            method: "GET",
            url: 'https://countriesnow.space/api/v0.1/countries',
            // url: "https://countriesnow.space/api/v0.1/countries",
        };
        return axios.request(options);
    }

    useEffect(() => {
        async function fetchAndLogData() {
            setIsLoading(true);
            try {
                const response = await fetchData();
                setSelectedCity(response.data?.data);
                setIsLoading(false);
                // console.log(response.data?.data);
                // console.log(selectedStates);
            } catch (error) {
                console.error(error);
            }
        }
        fetchAndLogData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        async function fetchStateLogData() {
            setIsLoading(true);
            try {
                const response = await fetchStateData();
                // setSelectedStates(response?.data?.data);
                setIsLoading(false);
                // console.log("state is Loading..", response.data?.data);

            } catch (error) {
                console.error(error);
            }
        }
        fetchStateLogData();
    }, []);

    

    


    // CREATE LISTING FOR THE LANDLORD
    const handleSubmitCreateListing = async () => {

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


            setUserLoading(true)

            const convertedDates = [];

            selectedDates.forEach(dateString => {
                const date = new Date(dateString);
                const utcDate = date.toISOString();
                convertedDates.push(utcDate);
            });

            console.log("all the year in the bank..", convertedDates);

            const requestBody = {
                listingId: housing?.id,
                propertyDates: convertedDates
            };



            console.log("the create Listing  ...", housing, requestBody);

            const response = await axios.put(`https://medirent-api.onrender.com/housing/add-availability-period`,
                {
                    listingId: housing?.id,
                    propertyDates: convertedDates
                }, 
                { headers }
            );

            setUserLoading(false);

            if (response.data.success === true) {
                toast.success("Property Dates Created");
                // setActive(1);
                navigate('/admin/dashboard/listing')

            }

            // console.log("all the Listing..", response.data);
            

        } catch (error) {
            setUserLoading(false);
            toast.error("Listing creation Failed");
            console.error('Error creating Listing:', error);
        }
    };

    const handleRentUser = async () => {
        try {
            // Retrieve accessToken from localStorage
            const accessToken = JSON.parse(localStorage.getItem('accessToken'));

            // setLandLoading(true);
            setHousingLoading(true)


            console.log("landlord..", housingLoading)

            console.log("all the data for housing..", createListing);

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

            // Make the POST request to create a listing
            const response = await axios.post(`https://medirent-api.onrender.com/housing/add-listing`,
                createListing,
                { headers }
            );

            setHousingLoading(false);

            setHousing(response?.data?.data)

            // Handle the response as needed
            console.log('Listing created:', response.data, "all the housing...", housing);

            if (response.data.success === true) {
                toast.success("Listing Created");

                setActive(3)
            }

            return response.data; // Return the response data if needed

        } catch (error) {
            // Handle errors
            console.error('Error creating listing:', error);
            setHousingLoading(false);
            throw error; // Throw the error for further handling if needed
        }
    }

    const handleFilesUpload = async (files) => {
        // housing
        // fileList
        // "7b057fdb-255d-4d37-b8b9-e9de3addd458"
        try {
            const accessToken = JSON.parse(localStorage.getItem('accessToken'));

            if (!accessToken) {
                console.error('Access Token not found in localStorage');
                return;
            }

            console.log("all the zone image...", housing?.id, "store images...", fileList);

            setImageLoading(true)

            const headers = {
                'Authorization': `Bearer ${accessToken}`,
                // 'Content-Type': 'multipart/form-data', // Set the content type to send files
                // 'Content-Type': 'application/json'
            };

            const formData = new FormData();

            fileList.forEach((file, index) => {
                console.log("all the file..", file, index);
                formData.append(`files`, file);
                console.log("alll the format in the data..", formData);
            });

            // Extract the housingId from the housing object
            // const housingId = housing;

            // formData.append('listingId', housing?.id); // Append the housingId string

            // for (var key of formData.entries()) {
            //     console.log(key[0] + ", " + key[1]);
            // }

            for (var [key, value] of formData.entries()) {
                console.log("al the key..", key, value);
            }


            // formData.append('housingId', housing);

            console.log("format data..", formData, housing, fileList);

            const response = await axios.post(`https://medirent-api.onrender.com/File/upload?listingId=${housing?.id}`, formData, { headers });

            setImageLoading(false)

            console.log('Files uploaded:', response.data);

            if (response.data.success === true) {
                toast.success("Images Successfully Uploaded");

                setActive(4)
            }

            return response.data;
        } catch (error) {
            setImageLoading(false)
            console.error('Error uploading files:', error);
            throw error;
        }
    };




    const [isToggle, setIsToggle] = useState(true);
    const changeToggle = () => setIsToggle(!isToggle);
    const [error, setError] = useState("");




    return (
        <div>
            <div className=' flex flex-row items-center bg-gray-200 w-fit px-4 py-1 rounded-lg border-none md:mt-10 xs:mt-20 ml-5 '>
                <div className='flex flex-row items-center bg-gray-200 w-fit border-none'>
                    <Link to="/admin/dashboard/landlord" className='hover:text-slate-400 text-slate-700 font-medium  md:text-sm xs:text-xs'>
                        Dashboard
                    </Link>
                    <span className="text-[20px]">
                        <RiArrowRightSLine />
                    </span>
                    <span className='text-slate-700 font-medium  md:text-sm xs:text-xs'>
                        Create Listing
                    </span>

                </div>

            </div>

            <div className="py-0 mt-10 mb-10 bg-white flex font-medium justify-between max-w-screen-xl mx-auto">
                {/* <div className="flex font-medium justify-between max-w-screen-xl mx-auto">
                    <div
                        className="bg-white w-full h-screen bg-HomeImage bg-cover
                        bg-center flex justify-center lg:h-[50vh] md:h-[70vh] sm:h-[80vh] xs:h-[70vh]"
                    >
                        <div className="absolute inset-0 flex items-center justify-center">
                            <p className="text-white text-4xl font-medium text-center">JOIN THE MEDIRENT COMMUNITY!</p>
                        </div>
                    </div>
                </div> */}


                <div className=" bg-gray-100 md:flex-1 flex-col w-full items-center relative flex font-medium justify-between max-w-screen-xl mx-auto">
                    <div className=" w-full mt-10">
                        <div className="w-full lg:flex xs:hidden md:hidden flex-row justify-center">
                            <div className="flex flex-col ">
                                <div className="flex flex-row">

                                    <div className={`${active > 1 ? "flex items-center justify-center rounded-full p-6 h-10 w-10 !bg-third text-white"
                                        : "flex items-center justify-center rounded-full p-6 h-10 w-10 !bg-white text-lime-700"
                                        }`}>
                                        {
                                            active > 1 ?
                                                <span className="font-semibold">
                                                    <BsCheckLg />
                                                </span>
                                                :
                                                <span className="font-bold text-black">
                                                    1
                                                </span>

                                        }
                                    </div>
                                    <div className="flex items-center h-full">
                                        <div
                                            className={`${active > 1 ? "h-2 w-40 !bg-third "
                                                : " h-2 w-40 !bg-white"
                                                }`}
                                        ></div>

                                    </div>
                                </div>
                                <span
                                    className={`${active > 1 ? " !text-third px-2  md:text-md  flex mt-1  "
                                        : " !text-black px-2 md:text-md flex mt-1 "
                                        }`}
                                >
                                    Address
                                </span>
                            </div>

                            <div className="flex flex-col ">
                                <div className="flex flex-row">

                                    <div className={`${active > 2 ? "flex items-center justify-center rounded-full p-6 h-10 w-10 !bg-third text-white"
                                        : "flex items-center justify-center rounded-full p-6 h-10 w-10 !bg-white text-lime-700"
                                        }`}>
                                        {
                                            active > 2 ?
                                                <span className="font-semibold">
                                                    <BsCheckLg />
                                                </span>
                                                :
                                                <span className="font-bold text-black">
                                                    2
                                                </span>

                                        }
                                    </div>
                                    <div className="flex items-center h-full">
                                        <div
                                            className={`${active > 2 ? "h-2 w-40 !bg-third "
                                                : " h-2 w-40 !bg-white"
                                                }`}
                                        ></div>

                                    </div>
                                </div>
                                <span
                                    className={`${active > 2 ? " !text-third px-2  md:text-md  flex mt-1  "
                                        : " !text-black px-2 md:text-md flex mt-1 "
                                        }`}
                                >
                                    Details
                                </span>
                            </div>

                            <div className="flex flex-col ">
                                <div className="flex flex-row">

                                    <div className={`${active > 3 ? "flex items-center justify-center rounded-full p-6 h-10 w-10 !bg-third text-white"
                                        : "flex items-center justify-center rounded-full p-6 h-10 w-10 !bg-white text-lime-700"
                                        }`}>
                                        {
                                            active > 3 ?
                                                <span className="font-semibold">
                                                    <BsCheckLg />
                                                </span>
                                                :
                                                <span className="font-bold text-black">
                                                    3
                                                </span>

                                        }
                                    </div>
                                    <div className="flex items-center h-full">
                                        <div
                                            className={`${active > 3 ? "h-2 w-40 !bg-third "
                                                : " h-2 w-40 !bg-white"
                                                }`}
                                        ></div>

                                    </div>
                                </div>
                                <span
                                    className={`${active > 3 ? " !text-third px-2  md:text-md  flex mt-1  "
                                        : " !text-black px-2 md:text-md flex mt-1 "
                                        }`}
                                >
                                    Photos
                                </span>
                            </div>



                            <div className="flex flex-col ">
                                <div className="flex flex-row">

                                    <div className={`${active > 4 ? "flex items-center justify-center rounded-full p-6 h-10 w-10 !bg-third text-white"
                                        : "flex items-center justify-center rounded-full p-6 h-10 w-10 !bg-white text-lime-700"
                                        }`}>
                                        {
                                            active > 4 ?
                                                <span className="font-semibold">
                                                    <BsCheckLg />
                                                </span>
                                                :
                                                <span className="font-bold text-black">
                                                    4
                                                </span>

                                        }
                                    </div>
                                    {/* <div className="flex items-center h-full">
                                    <div
                                        className={`${active > 5 ? "h-2 w-40 !bg-third "
                                            : " h-2 w-40 !bg-white"
                                            }`}
                                    ></div>

                                </div> */}
                                </div>
                                <span
                                    className={`${active > 4 ? " !text-third px-2  md:text-md  flex mt-1  "
                                        : " !text-black px-2 md:text-md flex mt-1 "
                                        }`}
                                >
                                    Availiability
                                </span>
                            </div>
                        </div>

                        <div className="w-full md:flex xs:flex lg:hidden flex-row justify-center">
                            <div className="bg-third rounded-full px-10 py-10 text-white text-2xl font-bold">
                                {active}/4

                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center lg:w-full md:w-full">
                        <div className="w-full flex flex-col p-0 max-w-4xl px-2">
                            <div className="w-full flex-1 mt-4">
                                <div className="">
                                    {(active === 0 || active <= 1) && (
                                        <AddressLandlord
                                            active={active}
                                            setActive={setActive}
                                            housingData={housingData}
                                            setHousingData={setHousingData}
                                        />
                                    )}

                                    {(active > 1 && active <= 2) && (
                                        <HousingDetails
                                            active={active}
                                            setActive={setActive}
                                            detailsData={detailsData}
                                            setDetailsData={setDetailsData}
                                            handleRentUser={handleRentUser}
                                            housingLoading={housingLoading}
                                            setHousingLoading={setHousingLoading} // Pass setHousingLoading here
                                        // updateHousingLoading={(loading) => setHousingLoading(loading)} // Pass a callback function to update housingLoading
                                        />
                                    )}

                                    {(active > 2 && active <= 3) && (
                                        <Photo
                                            active={active}
                                            setActive={setActive}
                                            avatars={avatars}
                                            setAvatars={setAvatars}
                                            fileList={fileList}
                                            setFileList={setFileList}
                                            handleFilesUpload={handleFilesUpload}
                                            imageLoading={imageLoading}
                                        />
                                    )}

                                    {(active > 3 && active <= 4) && (
                                        <AvailabilityLandlord
                                            active={active}
                                            setActive={setActive}
                                            selectedDates={selectedDates}
                                            setSelectedDates={setSelectedDates}
                                            // formData={formData}
                                            createListing={createListing}
                                            userLoading={userLoading}
                                            setUserLoading={setUserLoading}
                                            handleSubmitCreateListing={handleSubmitCreateListing}

                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create