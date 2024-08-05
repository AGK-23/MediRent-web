// import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { BsCheckLg, BsChevronRight } from "react-icons/bs";
// BsChevronLeft, BsShopWindow
// import Currency from "../../registration/Currency.jsx"

import PhotoLandlord from "../../assets/svg/photo-landlord.svg"


import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { validateEmail } from "../../components/EndPoints/url.jsx";


import '../login/login.css';

import Address from "./LandLordInfo/Address.jsx";
// import HousingDetails from "./LandLordInfo/HousingDetails.jsx";
import HousingDetails from "./LandLordInfo/HousingDetails.jsx";
import Photo from "./LandLordInfo/Photo.jsx";
import AvailabilityLandlord from "./LandLordInfo/AvailabilityLandlord.jsx";
import Spinner from "../../assets/svg/Spinner.svg"

import { axiosPrivate } from "../../api/axios.jsx";

import CustomInputs from "../../components/Custom-components/CustomInputs.jsx";
import CustomSelect from "../../components/Custom-components/Custom-Select.jsx";
import Mail from "../../assets/svg/mail.svg";


import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';


const states = [
    { "name": "Alberta", "abbreviation": "AB", "country_id": "1039" },
    { "name": "British Columbia", "abbreviation": "BC", "country_id": "1039" },
    { "name": "Manitoba", "abbreviation": "MB", "country_id": "1039" },
    { "name": "New Brunswick", "abbreviation": "NB", "country_id": "1039" },
    { "name": "Newfoundland and Labrador", "abbreviation": "NL", "country_id": "1039" },
    { "name": "Northwest Territories", "abbreviation": "NT", "country_id": "1039" },
    { "name": "Nova Scotia", "abbreviation": "NS", "country_id": "1039" },
    { "name": "Nunavut", "abbreviation": "NU", "country_id": "1039" },
    { "name": "Ontario", "abbreviation": "ON", "country_id": "1039" },
    { "name": "Prince Edward Island", "abbreviation": "PE", "country_id": "1039" },
    { "name": "Quebec", "abbreviation": "QC", "country_id": "1039" },
    { "name": "Saskatchewan", "abbreviation": "SK", "country_id": "1039" },
    { "name": "Yukon Territory", "abbreviation": "YT", "country_id": "1039" }
];


const CreateLandLord = () => {
    const navigate = useNavigate();

    const [signInState, setSignInState] = useState(1);

    const [userGoogle, setUserGoogle] = useState(null);


    // const [avatar, setAvatar] = useState(null);
    const [userLoading, setUserLoading] = useState(false);

    const [landLoading, setLandLoading] = useState(false);

    // eslint-disable-next-line no-unused-vars
    const [loginLoading, setLoginLoading] = useState(false);

    const [housingLoading, setHousingLoading] = useState(false);

    const [imageLoading, setImageLoading] = useState(false);

    // NUMBER ONE THIS IS THE STATE FOR THE LANDLORD DETAILS
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        postalCode: "",
        phone: "",
        email: "",
        emailConfirmation: "",
        password: "",
        confirmPassword: "",
        functionOption: "",
        // yearsActive: "",
        country: "",
        province: "",
        discoveryMethod: "",
        receiveNewsletter: false,
    });

    const [loginData, setLoginData] = useState({
        email: formData?.email,
        password: formData?.password,
    });

    //NUMBER TWO THIS IS THE STATE FOR THE HOUSING DETAILS
    const [housingData, setHousingData] = useState({
        listingTitle: "",
        address: "",
        city: "",
        postalCode: "",
        country: "Canada",
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
    // useEffect(() => {
    //     setCreateListing({
    //         ...createListing,
    //         listingTitle: housingData?.listingTitle,
    //         address: housingData?.address,
    //         city: housingData?.city,
    //         postalCode: housingData?.postalCode,
    //         phone: housingData?.phone,
    //         country: housingData?.country,
    //         province: housingData?.province,
    //         promotionCode: housingData?.promotionCode,

    //         termOption: detailsData?.termOption,
    //         designOption: detailsData?.designOption,
    //         dailyRent: detailsData?.dailyRent,
    //         weeklyRent: detailsData?.weeklyRent,
    //         monthlyRent: detailsData?.monthlyRent,
    //         numberOfBedRoom: detailsData?.numberOfBedRoom,
    //         numberOfBathRoom: detailsData?.numberOfBathRoom,
    //         licenseNumber: detailsData?.licenseNumber,
    //         description: detailsData?.description,
    //         propertyType: detailsData?.propertyType,
    //         currency: detailsData?.currency,
    //         amenitiesOption: detailsData?.amenitiesOption,

    //         // avatars: fileList,
    //         // propertyDates: selectedDates
    //     });

    //     setLoginData({
    //         ...loginData,
    //         email: formData?.email,
    //         password: formData?.password,
    //     });

    // }, [detailsData, housingData, formData, loginData, createListing]);

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

        setLoginData(prevState => ({
            ...prevState,
            email: formData?.email,
            password: formData?.password
        }));
    }, [detailsData, housingData, formData]);


    const [active, setActive] = useState(2)
    // eslint-disable-next-line no-unused-vars
    const [selectedCity, setSelectedCity] = useState("");
    // eslint-disable-next-line no-unused-vars
    const [selectedStates, setSelectedStates] = useState("");
    // eslint-disable-next-line no-unused-vars
    const [selectedCountry, setSelectedCountry] = useState(''); // State to store the selected country
    // eslint-disable-next-line no-unused-vars
    const [selectedCities, setSelectedCities] = useState(''); // State to store the selected city
    // eslint-disable-next-line no-unused-vars
    const [isLoading, setIsLoading] = useState(true);
    // const [allCities, setAllCities] = useState([]);


    var {
        firstName,
        lastName,
        address,
        city,
        postalCode,
        phone,
        country,
        province,
        email,
        emailConfirmation,
        password,
        confirmPassword,
        functionOption,
        discoveryMethod,
        receiveNewsletter,
        // yearsActive,
    } = formData;

    // PASSWORD CHECKER 
    const [text, setText] = useState('');
    const [testOne, setTestOne] = useState(false);
    const [testTwo, setTestTwo] = useState(false);
    const [testThree, setTestThree] = useState(false);
    const [testFour, setTestFour] = useState(false);
    const [textValue, setTextValue] = useState(false);

    const handlePasswordChange = (value) => {
        // console.log("object", value);
        setFormData({ ...formData, password: value })
        checkForTextOne(value)
        checkForTextTwo(value)
        checkForTextThree(value)
        checkForTextFour(value)
    }

    const checkForTextOne = (userValue) => {
        // CHARACTER MUST BE MORE THAN 8 CHARACTER
        if (userValue.length > 5) {
            setText("Too Weak")
            setTextValue("At least 6 characters long, with one uppercase letter, one number and one symbol")
            setTestOne(true)
        } else {
            setText("")
            setTextValue("")
            setTestOne(false)
        }
    }

    const checkForTextTwo = (userValue) => {
        //UPPERCASE
        if (userValue.length > 5 && /[A-Z]/.test(userValue)) {
            setText("Could be Stronger")
            setTextValue("")
            setTestTwo(true)
        } else {
            setTestTwo(false)
        }
    }

    const checkForTextThree = (userValue) => {
        //DIGIT
        if (userValue.length > 5 && /[A-Z]/.test(userValue) && /\d/.test(userValue)) {
            setText("Strong Password")
            setTestThree(true)
        } else {
            setTestThree(false)
        }
    }

    const checkForTextFour = (userValue) => {
        //SPECIAL CHARACTER
        if (userValue.length > 5 && /[A-Z]/.test(userValue) && /\d/.test(userValue) && /[!@#$%^&*]/.test(userValue)) {
            setText("Very Strong Password")
            setTestFour(true)
        } else {
            setTestFour(false)
        }
    }

    const handleCheckLandLord = async () => {
        // setFormData(prevFormData => ({
        //     ...prevFormData,
        //     country: "Canada"
        // }));
        console.log("drink in the code", formData);
        try {
            if (
                !firstName ||
                !lastName ||
                !email ||
                !address ||
                !city ||
                !country ||
                !province ||
                !postalCode ||
                !phone ||
                !functionOption ||
                !emailConfirmation ||
                !discoveryMethod
            ) {
                toast.warning('Please fill in all required fields.');
                return;
            }

            if (password !== confirmPassword) {
                return toast.error("password does not match with confirmPassword");
            }

            // VALIDATE EMAIL ADDRESS 
            if (!validateEmail(email)) {
                return toast.error("Please enter a valid email");
            }

            // TESTING STRENGTH OF PASSWORD
            if (!testOne) {
                toast.error('Password is too weak');
                return;
            }

            if (!testTwo) {
                toast.error('Password could be stronger');
                return;
            }

            if (!testFour) {
                toast.error('Password not strong enough');
                return;
            }

            setLandLoading(true);

            // const response = await axios.post(`https://medirent-api-3gwy.onrender.com/account/landlord-registration`,
            //     formData,
            // );

            console.log("first..", formData)

            const response = await axiosPrivate.post("/account/landlord-registration", formData);

            console.log("safe..", response)

            setLandLoading(false);


            if (response?.data?.Success === true) {
                console.log("safe in the code..", response?.data?.Success)
                toast.success("Landlord's account Created");

                // setLoginData(prevState => ({
                //     ...prevState,
                //     email: formData?.email,
                //     password: formData?.password
                // }));

                await handleLoginUser()
            }


        } catch (error) {
            setLandLoading(false);
            console.log("error in the landlord..", error, error?.response?.data?.Message)
            toast.error(error?.response?.data?.Message)
        }
    };

    const handleLoginUser = async () => {
        // e.preventDefault();

        try {
            setLoginLoading(true)


            console.log("lOGIN DATA...", loginData);

            // const response = await axios.post(`https://medirent-api-3gwy.onrender.com/account/signin`,
            //     loginData,
            // );

            const response = await axiosPrivate.post("/account/signin", loginData);

            setLoginLoading(false)

            console.log("all the pricing..", response)

            localStorage.setItem("token", JSON.stringify(response?.data));

            localStorage.setItem("accessToken", JSON.stringify(response.data?.Data?.AccessToken));

            // Retrieve the stringified object from local storage
            // const storedToken = localStorage.getItem('token');


            // Parse the stringified object back to its original form
            // const userDetails = JSON.parse(storedToken);

            // console.log("account item..", storedToken, userDetails);



            if (response.data.Success === true) {
                toast.success("Login Successfully");

                setActive(3)
                console.log("active", active)
            }
            return response.data;
        } catch (error) {
            const message =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();
            toast.error(message);
            setLoginLoading(false)
        }
    }

    // TOGGLE THROUGH THE PAGE FUNCTION 
    const handleProviderOne = () => {
        handleCheckLandLord()

    };

    const handleGoogleSignup = (credentialResponse) => {
        // Decode the JWT token to get the user's profile information
        const userProfile = JSON.parse(atob(credentialResponse.credential.split('.')[1]));
        // Implement your Google sign-up logic here
        console.log('Google sign-up response:', userProfile);

        setUserGoogle(userProfile);

        if (userProfile) {
            setFormData((prevFormData) => {
                console.log("prevFormData:", prevFormData);
                return {
                    ...prevFormData,
                    firstName: userProfile.given_name,
                    lastName: userProfile.family_name,
                    email: userProfile.email,
                    emailConfirmation: userProfile.email,
                };
            });

            console.log("set the form..", formData, userGoogle)
            setSignInState(2)
        }
    };

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
                console.log("country..", response.data?.data);
                setIsLoading(false);
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
                setSelectedStates(response?.data?.data);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
            }
        }
        fetchStateLogData();
    }, []);

    const handleCheckboxChange = (e) => {
        const { id, checked } = e.target;
        setFormData({
            ...formData,
            [id]: checked,
        });
    };

    const handleReferenceChange = (value) => {
        setFormData(prevState => ({
            ...prevState,
            discoveryMethod: value,
        }));
    };

    const handleRadioChange = (e) => {
        setFormData(prevState => ({
            ...prevState,
            functionOption: e.target.nextSibling.textContent.trim(),
        }));
    };

    // const handleCityChange = (value) => {
    //     setSelectedCities(value);
    //     let selectedValue = value === "Select a city" ? null : value;
    //     setFormData(prevFormData => ({
    //         ...prevFormData,
    //         province: selectedValue
    //     }));
    // };

    // const handleCountryChange = (value) => {
    //     setSelectedCountry(value);
    //     setSelectedCities(''); // Clear the selected city when the country changes
    //     let selectedValue = value === "Select a country" ? null : value;
    //     setFormData(prevFormData => ({
    //         ...prevFormData,
    //         country: "Canada"
    //     }));

    //     const selectedCountryObj = selectedCity?.find((country) => country.name === value);

    //     if (selectedCountryObj) {
    //         setAllCities(selectedCountryObj.states);
    //     } else {
    //         setAllCities([]);
    //     }
    // };

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
                setActive(1);
                navigate('/success/landlord/1')

            }
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

            setHousingLoading(true)


            console.log("landlord..", housingLoading)

            console.log("all the data for housing..", createListing);

            if (!accessToken) {
                // Handle case where accessToken is not available
                // console.error('Access Token not found in localStorage');
                return;
            }

            // Set the headers with the accessToken
            const headers = {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            };

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
            // toast.error(error.);
            toast.error(error?.response?.data?.Message)
            toast.error("Listing creation Failed");
            setHousingLoading(false);
            throw error; // Throw the error for further handling if needed
        }
    }

    const handleFilesUpload = async () => {
        try {
            const accessToken = JSON.parse(localStorage.getItem('accessToken'));

            if (!accessToken) {
                console.error('Access Token not found in localStorage');
                return;
            }

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
            });

            const response = await axios.post(`https://medirent-api-3gwy.onrender.com/File/upload?listingId=${housing?.id}`, formData, { headers });

            setImageLoading(false)
            if (response.data.success === true) {
                toast.success("Images Successfully Uploaded");

                setActive(6)
            }

            return response.data;
        } catch (error) {
            setImageLoading(false)
            throw error;
        }
    };

    // const [province, setProvince] = useState('');

    // Map the states to the format expected by CustomSelect
    // const allProvince = states.map(state => ({
    //     value: state.abbreviation,
    //     label: state.name
    // }));

    const handleProvinceChange = (selectedValue) => {
        // console.log("all province..", allProvince, selectedValue);
        // setProvince(selectedValue);

        setFormData(prevFormData => ({
            ...prevFormData,
            province: selectedValue,
            country: "Canada"
        }));


    };





    const [isToggle, setIsToggle] = useState(true);
    const changeToggle = () => setIsToggle(!isToggle);
    const [confirmPasswordToggle, setConfirmPasswordToggle] = useState(true);
    const changeConfirmPasswordToggle = () => setConfirmPasswordToggle(!confirmPasswordToggle);

    return (
        <div className="py-0 md:mt-16 xs:mt-[4rem] bg-white grid md:grid-cols-4 xs:grid-cols-1">
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

            <div className="md:col-1 xs:col bg-[#FCD3CD] md:flex xs:hidden flex-col ">

                <div className="my-20 px-5">
                    <div className="text-[#0E0C3D] font-semibold text-[24px] mb-5">Join Our Trusted Community of Landlords</div>
                    <div className="text-black font-normal text-[16px]">Unlock the full potential of your property by listing with Medirent. By providing complete and accurate details, you will ensure your space is showcased to the right tenants</div>
                </div>

                <div className="px-10">
                    <div>
                        <img alt="" src={PhotoLandlord} className="text-[1px] text-white w-full h-full" />
                    </div>
                </div>

            </div>

            {/* bg-[#dfdfdf] */}
            <div className="md:col-span-3 xs:col bg-white  flex-col w-fit items-center relative z-10 flex font-medium justify-between max-w-screen-xl mx-auto md:px-2 xs:px-0">
                <div className=" w-fit mt-20 ">
                    <div className="w-fit lg:flex xs:hidden md:hidden flex-row justify-center">
                        <div className="flex flex-col pr-2">
                            <div className="flex flex-row">

                                <div className={`${active > 1 ? "flex items-center justify-center rounded-full p-1 h-8 w-8 !bg-secondary text-white"
                                    : "flex items-center justify-center rounded-full p-1 h-8 w-8  border-[1px] border-gray-400 !text-[#717171]"
                                    }`}>
                                    {
                                        active > 1 ?
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
                                    className={`${active > 1 ? " !text-black px-0  md:text-[14px]  flex mt-1  "
                                        : " !text-[#717171] md:text-[14px] "
                                        } flex justify-center items-center px-5`}
                                >
                                    Registration
                                </span>
                                <span
                                    className={`${active > 1 ? " !text-black px-0  md:text-xs  flex mt-1  "
                                        : " !text-[#717171] md:text-md "
                                        } flex justify-center items-center px-0`}
                                >
                                    <BsChevronRight />
                                </span>


                            </div>

                        </div>

                        <div className="flex flex-col pr-2">
                            <div className="flex flex-row">

                                <div className={`${active > 2 ? "flex items-center justify-center rounded-full p-1 h-8 w-8 !bg-secondary text-white"
                                    : "flex items-center justify-center rounded-full p-1 h-8 w-8  border-[1px] border-gray-400 !text-[#717171]"
                                    }`}>
                                    {
                                        active > 2 ?
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
                                                3
                                            </span>
                                            :
                                            <span className="font-bold">
                                                3
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
                                                4
                                            </span>
                                            :
                                            <span className="font-bold">
                                                4
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
                                                5
                                            </span>
                                            :
                                            <span className="font-bold">
                                                5
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
                            {active - 1}/5

                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center lg:w-full md:w-full">
                    <div className="w-full flex flex-col p-0 max-w-4xl px-2">
                        <div className="w-full flex mt-10">
                            <div className="text-[#717171] text-[16px] font-[400] my-5">
                                Step {active - 1}/5

                            </div>
                        </div>
                        <div className="w-full flex-1 mt-0">
                            <div className="">
                                {(active === 1 || active <= 2) && (
                                    <div className="">
                                        {/* <div className="my-10 text-center">
                                            <h1 className="md:text-3xl xs:text-2xl text-center text-black font-medium">
                                                Create your <b>landlord account</b> here
                                            </h1>

                                            <div className="mt-7 font-normal">
                                                <p className="text-gray-800 text-center">
                                                    Medirent.com is the premier website dedicated to helping landlords reach out to five-star
                                                </p>
                                                <p className="text-gray-800 text-center">
                                                    tenants from the academic medical community. Complete the landlord form below and start
                                                </p>
                                                <p className="text-gray-800 text-center">
                                                    finding your tenants!
                                                </p>

                                            </div>

                                            <div className="text-center my-6 font-base md:text-3xl xs:text-xl"> Contact information</div>
                                        </div> */}

                                        <div className="mt-0 text-start">

                                            <h1 className="md:text-[24px] xs:text-[20px] text-start text-black font-semibold">
                                                Let’s start with your plan and details
                                            </h1>

                                            <div className="mt-1 font-normal">

                                                <p className="text-[#717171] text-start text-[12px]">
                                                    Please select the plan and fill the details below along with your contact details
                                                </p>


                                            </div>

                                            <div className="text-start my-6 font-semibold md:text-[16px] xs:text-[13px]">Let’s start with your plan and details</div>
                                        </div>

                                        {
                                            signInState == 1 && (
                                                <div className="mb-10 ">

                                                    <GoogleOAuthProvider clientId="1061797876618-qshcq6n3nd057kv6586f859g8mj5cp6a.apps.googleusercontent.com">
                                                        {/* <div>
                                                        <div>
                                                            <GoogleLogin
                                                                onSuccess={handleGoogleLogin}
                                                                onError={(err) => console.error('Google login error:', err)}
                                                            />
                                                            <GoogleLogin
                                                                onSuccess={handleGoogleSignup}
                                                                onError={(err) => console.error('Google sign-up error:', err)}
                                                            />
                                                        </div>
                                                        
                                                    </div> */}
                                                        <button className="px-0 mt-10 cursor-pointer w-full " >
                                                            <div className=" px-2 py-2 w-full bg-gray-100 flex justify-center items-center">
                                                                {/* onClick={() => setSignInState(2)} */}

                                                                {/* <div className="mr-3">
                                                                <img alt="" src={Google} width={16} height={16} className="text-[1px] text-white" />
                                                            </div>
                                                            <div className="text-[15px]">Sign up with Google</div> */}

                                                                {/* <GoogleLogin
                                                                onSuccess={handleGoogleLogin}
                                                                onError={(err) => console.error('Google login error:', err)}
                                                            /> */}
                                                                <GoogleLogin
                                                                    className="border-none hidden"
                                                                    onSuccess={handleGoogleSignup}
                                                                    onError={(err) => console.error('Google sign-up error:', err)}
                                                                />
                                                            </div>
                                                        </button>
                                                    </GoogleOAuthProvider>

                                                    <div className='flex justify-center items-center h-[1px] my-10 w-full bg-[#d5d1d1] text-center font-[500] '>
                                                        <span className='bg-white px-5 py-5 text-black'>Or</span>
                                                    </div>

                                                    <button className="px-0 mt-0 cursor-pointer w-full" onClick={() => setSignInState(3)}>
                                                        <div className=" px-2 py-4 w-full bg-gray-100 flex justify-center items-center">

                                                            <div className="mr-3">
                                                                <img alt="" src={Mail} className="text-[1px] text-white w-full h-full" />
                                                            </div>
                                                            <div className="text-[15px]">Sign up with Mail</div>
                                                        </div>
                                                    </button>

                                                </div>
                                            )
                                        }

                                        {
                                            (signInState == 3) && (

                                                <div>
                                                    <div className="flex md:flex-row xs:flex-col gap-10 my-10">
                                                        <div className={`form-group flex w-[100%] text-[1rem] my-0`}>
                                                            <CustomInputs
                                                                id="firstname"
                                                                type='text'
                                                                required
                                                                // setValue={setFormData}
                                                                value={firstName}
                                                                showRequirement={true}
                                                                onChange={(value) => setFormData(prevFormData => ({
                                                                    ...prevFormData,
                                                                    firstName: value,
                                                                    country: "Canada"
                                                                }))}
                                                                label={'First Name'}
                                                                className='px-0 mb-[5px] md:w-full xs:w-full text-[16px]'
                                                            />
                                                        </div>
                                                        <div className={`form-group flex w-[100%] text-[1rem] my-0`}>
                                                            <CustomInputs
                                                                id="lastname"
                                                                type='text'
                                                                required
                                                                // setValue={setFormData}
                                                                value={lastName}
                                                                showRequirement={true}
                                                                onChange={(value) => setFormData(prevFormData => ({
                                                                    ...prevFormData,
                                                                    lastName: value,
                                                                    country: "Canada"
                                                                }))}

                                                                label={'Last Name'}
                                                                className='px-0 mb-[5px] md:w-full xs:w-full text-[16px]'
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="flex md:flex-row xs:flex-col gap-10 my-10">
                                                        <div className={`form-group flex w-[100%] text-[1rem] my-0`}>
                                                            <CustomInputs
                                                                id="email"
                                                                type='email'
                                                                required
                                                                // setValue={setFormData}
                                                                value={email}
                                                                showRequirement={true}
                                                                onChange={(value) => setFormData(prevFormData => ({
                                                                    ...prevFormData,
                                                                    email: value,
                                                                    country: "Canada"
                                                                }))}

                                                                label={'Email'}
                                                                className='px-0 mb-[5px] md:w-full xs:w-full text-[16px]'
                                                            />
                                                        </div>
                                                        <div className={`form-group flex w-[100%] text-[1rem] my-0`}>
                                                            <CustomInputs
                                                                id="emailConfirmation"
                                                                type='text'
                                                                required
                                                                // setValue={setFormData}
                                                                value={emailConfirmation}
                                                                showRequirement={true}
                                                                onChange={(value) => setFormData(prevFormData => ({
                                                                    ...prevFormData,
                                                                    emailConfirmation: value
                                                                }))}

                                                                label={'Re-enter Email Address'}
                                                                className='px-0 mb-[5px] md:w-full xs:w-full text-[16px]'
                                                            />
                                                        </div>
                                                    </div>

                                                </div>

                                            )
                                        }

                                        {
                                            (signInState == 2 || signInState == 3) && (
                                                <div>
                                                    <div className="flex md:flex-row xs:flex-col gap-10 my-10">
                                                        <div className={`form-group flex w-[100%] text-[1rem] my-0`}>
                                                            <CustomInputs
                                                                id="phone"
                                                                type='text'
                                                                required
                                                                setValue={setFormData}
                                                                value={phone}
                                                                label={'Phone Number'}
                                                                onChange={(value) => setFormData(prevFormData => ({
                                                                    ...prevFormData,
                                                                    phone: value
                                                                }))}
                                                                className='px-0 mb-[5px] md:w-full xs:w-full text-[16px]'
                                                            />
                                                        </div>
                                                        <div className={`form-group flex w-[100%] text-[1rem] my-0`}>
                                                            {/* <CustomInputs
                                                                id="yearsActive"
                                                                type='number'
                                                                required
                                                                // setValue={setFormData}
                                                                value={yearsActive}
                                                                onChange={(value) => setFormData(prevFormData => ({
                                                                    ...prevFormData,
                                                                    yearsActive: value

                                                                }))}
                                                                label={'Years Of Active Experience'}
                                                                className='px-0 mb-[5px] md:w-full xs:w-full text-[16px]'
                                                            /> */}
                                                            <CustomInputs
                                                                id="address"
                                                                type='text'
                                                                required
                                                                // setValue={setFormData}
                                                                value={address}
                                                                showRequirement={true}
                                                                onChange={(value) => setFormData(prevFormData => ({
                                                                    ...prevFormData,
                                                                    address: value
                                                                }))}
                                                                label={'Address'}
                                                                className='px-0 mb-[5px] md:w-[370px] xs:w-full text-[16px]'
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="flex md:flex-row xs:flex-col gap-10 my-10">
                                                        {/* <div className={`form-group flex w-[100%] text-[1rem] my-0`}>

                                                            <CustomSelect
                                                                wrapperClass=' !h-[58px] !w-full !px-[12px]'
                                                                labelClass=' text-black w-full text-gray-500'
                                                                optionsClass='!text-[0.875rem] !h-[48px] !w-[100%] !text-black'
                                                                optionWrapperClass=' w-[100%] !w-full border-[1px] shadow-lg border-gray-200 xl:left-[0px] !left-[0px] !h-[400px] !bottom-[-410px] overflow-y-auto '
                                                                required={false}
                                                                label='Select a Country'
                                                                setSelected={handleCountryChange}
                                                                selected={country}
                                                                options={selectedCity}
                                                                otherOptions={true}
                                                            />
                                                        </div> */}
                                                        <div className={`form-group flex w-[100%] text-[1rem] my-0`}>
                                                            <CustomInputs
                                                                id="country"
                                                                type='text'
                                                                required
                                                                disabled={true}
                                                                showRequirement={true}
                                                                // setValue={setFormData}
                                                                value={'Canada'}
                                                                // onChange={(value) => setFormData(prevFormData => ({
                                                                //     ...prevFormData,
                                                                //     yearsActive: value

                                                                // }))}
                                                                label={'Country'}
                                                                className='px-0 mb-[5px] md:w-full xs:w-full text-[16px]'
                                                            />
                                                        </div>
                                                        {/* <div className={`form-group flex w-[100%] text-[1rem] my-0`}>
                                                            <CustomSelect
                                                                wrapperClass=' !h-[58px] !w-full !px-[12px]'
                                                                labelClass=' text-black w-full text-gray-500'
                                                                optionsClass='!text-[0.875rem] !h-[48px] !w-[100%] !text-black'
                                                                optionWrapperClass=' w-[100%] !w-full border-[1px] shadow-lg border-gray-200 xl:left-[0px] !left-[0px] !h-[400px] !bottom-[-410px] overflow-y-auto '
                                                                required={false}
                                                                label='Select a state'
                                                                setSelected={handleCityChange}
                                                                selected={province}
                                                                options={allCities}
                                                                otherOptions={true}
                                                            />
                                                        </div> */}
                                                        <div className={`form-group flex w-[100%] text-[1rem] my-0`}>
                                                            <CustomSelect
                                                                wrapperClass='!h-[58px] !w-full !px-[12px]'
                                                                labelClass='text-black w-full text-gray-500'
                                                                optionsClass='!text-[0.875rem] !h-[48px] !w-[100%] !text-black'
                                                                optionWrapperClass='w-[100%] !w-full border-[1px] shadow-lg border-gray-200 xl:left-[0px] !left-[0px] !h-[400px] !bottom-[-410px] overflow-y-auto'
                                                                required={true}
                                                                label='Select a state'
                                                                setSelected={handleProvinceChange}
                                                                selected={province}
                                                                options={states}

                                                                // setSelected={handleCityPro}
                                                                // selected={provinceSet}
                                                                // options={states}
                                                                otherOptions={true}
                                                            />
                                                        </div>

                                                    </div>

                                                    <div className="flex md:flex-row xs:flex-col gap-10 my-10">
                                                        <div className={`form-group flex w-[100%] text-[1rem] my-0`}>
                                                            <CustomInputs
                                                                id="postalCode"
                                                                type='text'
                                                                required
                                                                // setValue={setFormData}
                                                                value={postalCode}
                                                                onChange={(value) => setFormData(prevFormData => ({
                                                                    ...prevFormData,
                                                                    postalCode: value
                                                                }))}
                                                                label={'Postal Code'}
                                                                className='px-0 mb-[5px] md:w-full xs:w-full text-[16px]'
                                                            />
                                                        </div>
                                                        <div className={`form-group flex w-[100%] text-[1rem] my-0`}>
                                                            <CustomInputs
                                                                id="city"
                                                                type='text'
                                                                required
                                                                // setValue={setFormData}
                                                                value={city}
                                                                onChange={(value) => setFormData(prevFormData => ({
                                                                    ...prevFormData,
                                                                    city: value
                                                                }))}
                                                                label={'City'}
                                                                className='px-0 mb-[5px] md:w-full xs:w-full text-[16px]'
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="flex md:flex-row xs:flex-col gap-10 my-10">
                                                        <div className={`form-group flex w-[100%] text-[1rem] my-0 flex-col`}>
                                                            <CustomInputs
                                                                changeToggle={changeToggle}
                                                                showToggle={true}
                                                                isToggle={isToggle}
                                                                id='password'
                                                                type={`${isToggle ? 'text' : 'password'}`}
                                                                label='Password'
                                                                className='mb-[0px]'
                                                                // onChange={(value) => setFormData(prevFormData => ({
                                                                //     ...prevFormData,
                                                                //     password: value
                                                                // }))}
                                                                onChange={handlePasswordChange}
                                                            />
                                                            <div className="flex justify-between flex-wrap mt-2">
                                                                <div className="ml-auto mt-2 w-min">
                                                                    <div className="password-strength">
                                                                        <div className="strength-bars flex items-center justify-center gap-1">
                                                                            <div className={`${testOne ? "bg-[#dc6969]" : "bg-[#b6a7a7]"} bar bar--weak filled h-[4px] w-6 rounded-l block`}>
                                                                            </div>

                                                                            <div className={`${testTwo ? "bg-[#ffe48c]" : "bg-[#b6a7a7]"} bar bar--normal filled h-[4px] w-6 rounded-l block`}>
                                                                            </div>

                                                                            <div className={`${testThree ? "bg-[#46c28e]" : "bg-[#b6a7a7]"} bar bar--strong filled h-[4px] w-6 rounded-l block`}>
                                                                            </div>

                                                                            <div className={`${testFour ? "bg-[#208058]" : "bg-[#b6a7a7]"} bar bar--stronger filled h-[4px] w-6 rounded-l block`}>
                                                                            </div>
                                                                            {/* <div className="bar bar--stronger bg-[#e0e0e0] h-[4px] w-6 rounded-l block"></div> */}

                                                                        </div>
                                                                        <p className="strength-text text-gray-600 text-xs whitespace-nowrap">
                                                                            {text}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className={`form-group flex w-[100%] text-[1rem] my-0`}>
                                                            <CustomInputs
                                                                changeToggle={changeConfirmPasswordToggle}
                                                                showToggle={true}
                                                                isToggle={confirmPasswordToggle}
                                                                id='password'
                                                                type={`${confirmPasswordToggle ? 'text' : 'password'}`}
                                                                label='Confirm Password'
                                                                onChange={(value) => setFormData(prevFormData => ({
                                                                    ...prevFormData,
                                                                    confirmPassword: value
                                                                }))}
                                                                className='mb-[32px]'
                                                            />
                                                        </div>
                                                    </div>

                                                    {/* <div className="flex md:flex-row xs:flex-col gap-10 my-10">
                                                        <div className={`form-group flex w-[100%] text-[1rem] my-0`}>
                                                            <CustomInputs
                                                                id="address"
                                                                type='text'
                                                                required
                                                                // setValue={setFormData}
                                                                value={address}
                                                                showRequirement={true}
                                                                onChange={(value) => setFormData(prevFormData => ({
                                                                    ...prevFormData,
                                                                    address: value
                                                                }))}
                                                                label={'Address'}
                                                                className='px-0 mb-[5px] md:w-[370px] xs:w-full text-[16px]'
                                                            />
                                                        </div>

                                                    </div> */}

                                                    <div className="text-left text-gray-700">
                                                        <h1 className="mb-0 p-0 text-xl text-black">Listing Type</h1>

                                                        <div className="flex items-center my-7">
                                                            <input
                                                                type="radio"
                                                                id="radioButton"
                                                                name="radioButton"
                                                                className="h-6 w-6  text-third border-gray-500 focus:ring-sky-600"
                                                                onClick={handleRadioChange}
                                                            />
                                                            <label htmlFor="radioButton" className="ml-4 md:text-base xs:text-xs w-full">
                                                                Medical Doctor with property/room for rent
                                                            </label>
                                                        </div>

                                                        <div className="flex items-center my-7">
                                                            <input
                                                                type="radio"
                                                                id="radioButton"
                                                                name="radioButton"
                                                                className="h-6 w-6 text-third border-gray-500 focus:ring-sky-600"
                                                                onClick={handleRadioChange}
                                                            />
                                                            <label htmlFor="radioButton" className="ml-4 md:text-base xs:text-xs w-full">
                                                                Medical Trainee renting my property/room
                                                            </label>
                                                        </div>

                                                        <div className="flex items-center my-7">
                                                            <input
                                                                type="radio"
                                                                id="radioButton"
                                                                name="radioButton"
                                                                className="h-6 w-6 text-third border-gray-500 focus:ring-sky-600"
                                                                onClick={handleRadioChange}
                                                            />
                                                            <label htmlFor="radioButton" className="ml-4 md:text-base xs:text-xs w-full">
                                                                Private Community Landlord
                                                            </label>
                                                        </div>

                                                        <div className="flex items-center my-7">
                                                            <input
                                                                type="radio"
                                                                id="radioButton"
                                                                name="radioButton"
                                                                className="h-6 w-6 text-third border-gray-500 focus:ring-sky-600"
                                                                onClick={handleRadioChange}
                                                            />
                                                            <label htmlFor="radioButton" className="ml-4 md:text-base xs:text-xs w-full">
                                                                Property Manager
                                                            </label>
                                                        </div>

                                                        <div className="flex items-center my-7">
                                                            <input
                                                                type="radio"
                                                                id="radioButton"
                                                                name="radioButton"
                                                                className="h-6 w-6 text-third border-gray-500 focus:ring-sky-600"
                                                                onClick={handleRadioChange}
                                                            />
                                                            <label htmlFor="radioButton" className="ml-4 md:text-base xs:text-xs w-full">
                                                                Other Health Care person with a property/room for rent
                                                            </label>
                                                        </div>

                                                    </div>

                                                    <div className="mb-8 text-left">
                                                        <h1 className="mb-3 text-sm">How did you discover Medirent?</h1>

                                                        <CustomSelect
                                                            wrapperClass='!border-[0.5px] !border-gray !h-[58px] md:w-[400px] xs:w-full'
                                                            labelClass='!text-[0.875rem] text-black'
                                                            optionsClass='!text-[0.875rem] !h-[48px] !w-[100%]'
                                                            optionWrapperClass=' border-[1px] border-gray-400 w-[100%] !w-[300px] xl:left-[0px] !left-[0px] !h-[400px] !bottom-[-410px] overflow-y-auto'

                                                            label='Set Discovery Method'
                                                            setSelected={handleReferenceChange}
                                                            selected={discoveryMethod}
                                                            options={[
                                                                {
                                                                    label: 'Facebook/socialmedia',
                                                                    value: 'Facebook/socialmedia'
                                                                },
                                                                {
                                                                    label: 'Medical school admin recommended',
                                                                    value: 'Medical school admin recommended'
                                                                },
                                                                {
                                                                    label: 'Friend/colleague',
                                                                    value: 'Friend/colleague'
                                                                },
                                                                {
                                                                    label: 'Real Estate Agent',
                                                                    value: 'Real Estate Agent'
                                                                },
                                                                {
                                                                    label: 'Internet browsing',
                                                                    value: 'Internet browsing'
                                                                },
                                                                {
                                                                    label: 'Journal/medical affiliated website',
                                                                    value: 'Journal/medical affiliated website'
                                                                },
                                                                {
                                                                    label: 'Others',
                                                                    value: 'Others'
                                                                }
                                                            ]}
                                                        />
                                                    </div>

                                                    <div className="mb-8 text-left text-md">
                                                        <input
                                                            type="checkbox"
                                                            id="receiveNewsletter"
                                                            className="mr-2 border-black-500"
                                                            checked={receiveNewsletter}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="receiveNewsletter" className="text-gray-700">
                                                            I would like to receive newsletters
                                                        </label>
                                                    </div>

                                                    <div className="md:text-base xs:text-xs w-fit mt-2 text-rose-600">
                                                        {textValue}
                                                    </div>

                                                    <div className="flex justify-end w-full pb-10">
                                                        <div className="flex justify-end z-10 relative mt-4 ">

                                                            <button
                                                                onClick={handleProviderOne}
                                                                className="flex justify-end items-center z-10 relative bg-[#F97262] text-white md:text-sm rounded-full md:py-3 md:px-12 xs:text-[15px] xs:py-1 xs:px-8"
                                                                disabled={landLoading} // Disable the button when userLoading is true
                                                            >
                                                                {landLoading ? ( // Display spinner if userLoading is true
                                                                    <div className="flex items-center px-6">
                                                                        <div>
                                                                            <img alt="" src={Spinner} className="text-[1px] text-white" />
                                                                        </div>

                                                                    </div>
                                                                ) : (
                                                                    <span className="">Next</span> // Show the "Submit" text when isLoading is false
                                                                )}
                                                            </button>
                                                        </div>
                                                    </div>


                                                </div>
                                            )
                                        }


                                    </div>
                                )}

                                {(active > 2 && active <= 3) && (
                                    <Address
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
                                        formData={formData}
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
    );
};
export default CreateLandLord;






