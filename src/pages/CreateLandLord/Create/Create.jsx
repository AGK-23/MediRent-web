// import { lazy} from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import axios from "axios";
import { useState, useEffect } from "react";
import { BsCheckLg } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import { BsChevronRight } from "react-icons/bs";

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import '../../login/login.css';
// import AddressLandlord from './Details/AddressLandlord.jsx';
import AddressLandlord from "../../CreateLandLord/LandLordInfo/Address.jsx"
// import HousingDetails from "./LandLordInfo/HousingDetails.jsx";
import HousingDetails from "../../CreateLandLord/LandLordInfo/HousingDetails.jsx";
import Photo from "../../CreateLandLord/LandLordInfo/Photo.jsx";
import AvailabilityLandlord from "../../CreateLandLord/LandLordInfo/AvailabilityLandlord.jsx";




const Create = () => {
    const navigate = useNavigate();
    // const [avatar, setAvatar] = useState(null);
    const [userLoading, setUserLoading] = useState(false);

    // eslint-disable-next-line no-unused-vars

    const [housingLoading, setHousingLoading] = useState(false);

    const [imageLoading, setImageLoading] = useState(false);

    //NUMBER TWO THIS IS THE STATE FOR THE HOUSING DETAILS
    const [housingData, setHousingData] = useState({
        listingTitle: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
        province: "",
    });

    //NUMBER THREE THIS IS THE STATE FOR THE HOUSING DETAILS
    const [detailsData, setDetailsData] = useState({
        numberOfBedRoom: null,
        numberOfBathRoom: null,
        numberOfKitchens: null,
        price: "",
        buildYear: "",
        propertySize: "",
        area: "",
        starRating: "",
        description: "",
        propertyType: "",
        amenitiesOption: [],
    });

    const [housing, setHousing] = useState(null);

    // const [housing, setHousing] = useState("7b057fdb-255d-4d37-b8b9-e9de3addd458");


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
        country: housingData?.country,
        province: housingData?.province,
        numberOfBedRoom: detailsData?.numberOfBedRoom,
        numberOfBathRoom: detailsData?.numberOfBathRoom,
        numberOfKitchens: detailsData?.numberOfKitchens,
        price: detailsData?.price,
        buildYear: detailsData?.buildYear,
        propertySize: detailsData?.propertySize,
        propertyType: detailsData?.propertyType,
        area: detailsData?.area,
        starRating: detailsData?.starRating,
        description: detailsData?.description,
        amenitiesOption: detailsData?.amenitiesOption,
        avatars: fileList,
        propertyDates: selectedDates,
    })

    // Update createListing whenever any of the dependent states change
    useEffect(() => {
        setCreateListing(prevState => ({
            ...prevState,
            listingTitle: housingData?.listingTitle,
            address: housingData?.address,
            city: housingData?.city,
            postalCode: housingData?.postalCode,
            country: housingData?.country,
            province: housingData?.province,
            numberOfBedRoom: detailsData?.numberOfBedRoom,
            numberOfBathRoom: detailsData?.numberOfBathRoom,
            numberOfKitchens: detailsData?.numberOfKitchens,
            price: detailsData?.price,
            buildYear: detailsData?.buildYear,
            propertySize: detailsData?.propertySize,
            area: detailsData?.area,
            starRating: detailsData?.starRating,
            description: detailsData?.description,
            propertyType: detailsData?.propertyType,
            amenitiesOption: detailsData?.amenitiesOption
        }));

    }, [detailsData, housingData]);


    const [active, setActive] = useState(3)

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

            const response = await axios.put(`https://medirent-api-3gwy.onrender.com/housing/add-availability-period`,
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

            console.log("first listing..", accessToken, headers, createListing )

            // Make the POST request to create a listing
            const response = await axios.post(`https://medirent-api-3gwy.onrender.com/housing/add-listing`,
                createListing,
                { headers }
            );

            setHousingLoading(false);

            setHousing(response?.data?.data)

            // Handle the response as needed
            console.log('Listing created:', response.data, "all the housing...", housing);

            if (response.data.success === true) {
                toast.success("Listing Created");

                setActive(5)
            }

            return response.data; // Return the response data if needed

        } catch (error) {
            // Handle errors
            console.error('Error creating listing:', error);
            setHousingLoading(false);
            toast.error(error?.response?.data?.Message)
            throw error; // Throw the error for further handling if needed
        }
    }

    const handleFilesUpload = async () => {
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

            fileList.forEach((file) => {
                // console.log("all the file..", file, index);
                formData.append(`files`, file);
                // console.log("alll the format in the data..", formData);
            });

            console.log("format data..", formData, housing, fileList);

            const response = await axios.post(`https://medirent-api-3gwy.onrender.com/File/upload?listingId=${housing?.id}`, formData, { headers });

            setImageLoading(false)

            console.log('Files uploaded:', response.data);

            if (response.data.success === true) {
                toast.success("Images Successfully Uploaded");

                setActive(6)
            }

            return response.data;
        } catch (error) {
            setImageLoading(false)
            console.error('Error uploading files:', error);
            throw error;
        }
    };


    const [isToggle, setIsToggle] = useState(true);
    // eslint-disable-next-line no-unused-vars
    const changeToggle = () => setIsToggle(!isToggle);
    // const [error, setError] = useState("");

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
                <div className=" bg-gray-50 md:flex-1 flex-col w-full items-center relative flex font-medium justify-between max-w-screen-xl mx-auto">
                    <div className=" w-full mt-10">
                        <div className=" w-full mt-10 flex justify-center items-center mb-10">
                            <div className="w-full lg:flex xs:hidden md:hidden flex-row justify-center">
                                <div className="flex flex-col pr-2">
                                    <div className="flex flex-row">

                                        <div className={`${active > 2 ? "flex items-center justify-center rounded-full p-1 h-8 w-8 !bg-secondary text-white"
                                            : "flex items-center justify-center rounded-full p-1 h-8 w-8  border-[1px] border-gray-400 !text-[#717171]"
                                            }`}>
                                            {
                                                active > 2 ?
                                                    <span className="font-semibold">
                                                        1
                                                    </span>
                                                    :
                                                    <span className="font-bold">
                                                        <BsCheckLg />
                                                    </span>

                                            }
                                        </div>
                                        <span
                                            className={`${active > 2 ? " !text-black px-0  md:text-[14px]  flex mt-1  "
                                                : " !text-[#717171] md:text-[14px] "
                                                } flex justify-center items-center px-5`}
                                        >
                                            Address
                                        </span>
                                        <span
                                            className={`${active > 2 ? " !text-black px-0  md:text-xs  flex mt-1  "
                                                : " !text-[#717171] md:text-md "
                                                } flex justify-center items-center px-0`}
                                        >
                                            <BsChevronRight />
                                        </span>


                                    </div>

                                </div>

                                <div className="flex flex-col pr-2">
                                    <div className="flex flex-row">

                                        <div className={`${active > 3 ? "flex items-center justify-center rounded-full p-1 h-8 w-8 !bg-secondary text-white"
                                            : "flex items-center justify-center rounded-full p-1 h-8 w-8  border-[1px] border-gray-400 !text-[#717171]"
                                            }`}>
                                            {
                                                active > 3 ?
                                                    <span className="font-semibold">
                                                        2
                                                    </span>
                                                    :
                                                    <span className="font-bold">
                                                        2
                                                    </span>

                                            }
                                        </div>
                                        <span
                                            className={`${active > 3 ? " !text-black px-0  md:text-[14px]  flex mt-1  "
                                                : " !text-[#717171] md:text-[14px] "
                                                } flex justify-center items-center px-5`}
                                        >
                                            Details
                                        </span>
                                        <span
                                            className={`${active > 3 ? " !text-black px-0  md:text-xs  flex mt-1  "
                                                : " !text-[#717171] md:text-md "
                                                } flex justify-center items-center px-0`}
                                        >
                                            <BsChevronRight />
                                        </span>


                                    </div>

                                </div>

                                <div className="flex flex-col pr-2">
                                    <div className="flex flex-row">

                                        <div className={`${active > 4 ? "flex items-center justify-center rounded-full p-1 h-8 w-8 !bg-secondary text-white"
                                            : "flex items-center justify-center rounded-full p-1 h-8 w-8  border-[1px] border-gray-400 !text-[#717171]"
                                            }`}>
                                            {
                                                active > 4 ?
                                                    <span className="font-semibold">
                                                        3
                                                    </span>
                                                    :
                                                    <span className="font-bold">
                                                        3
                                                    </span>

                                            }
                                        </div>
                                        <span
                                            className={`${active > 4 ? " !text-black px-0  md:text-[14px]  flex mt-1  "
                                                : " !text-[#717171] md:text-[14px] "
                                                } flex justify-center items-center px-5`}
                                        >
                                            Photos
                                        </span>
                                        <span
                                            className={`${active > 4 ? " !text-black px-0  md:text-xs  flex mt-1  "
                                                : " !text-[#717171] md:text-md "
                                                } flex justify-center items-center px-0`}
                                        >
                                            <BsChevronRight />
                                        </span>


                                    </div>

                                </div>

                                <div className="flex flex-col pr-2">
                                    <div className="flex flex-row">

                                        <div className={`${active > 5 ? "flex items-center justify-center rounded-full p-1 h-8 w-8 !bg-secondary text-white"
                                            : "flex items-center justify-center rounded-full p-1 h-8 w-8  border-[1px] border-gray-400 !text-[#717171]"
                                            }`}>
                                            {
                                                active > 5 ?
                                                    <span className="font-semibold">
                                                        4
                                                    </span>
                                                    :
                                                    <span className="font-bold">
                                                        4
                                                    </span>

                                            }
                                        </div>
                                        <span
                                            className={`${active > 5 ? " !text-black px-0  md:text-[14px]  flex mt-1  "
                                                : " !text-[#717171] md:text-[14px] "
                                                } flex justify-center items-center px-5`}
                                        >
                                            Availability
                                        </span>
                                    </div>

                                </div>
                            </div>

                            <div className="w-full md:flex xs:flex lg:hidden flex-row justify-center">
                                <div className="bg-secondary rounded-full px-10 py-10 text-white text-2xl font-bold">
                                    {active - 2}/4

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center lg:w-full md:w-full">
                        <div className="w-full flex flex-col p-0 max-w-4xl px-2">
                            <div className="w-full flex-1 mt-4">
                                <div className="">
                                    {(active > 2 && active <= 3) && (
                                        <AddressLandlord
                                            active={active}
                                            setActive={setActive}
                                            housingData={housingData}
                                            setHousingData={setHousingData}
                                        />
                                    )}

                                    {(active > 3 && active <= 4) && (
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

                                    {(active > 4 && active <= 5) && (
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

                                    {(active > 5 && active <= 6) && (
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