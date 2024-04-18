// import React from "react";
import axios from "axios";
import { useState, useRef, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { BsCheckLg } from "react-icons/bs";
// BsChevronLeft, BsShopWindow
// import Currency from "../../registration/Currency.jsx"


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



const CreateLandLord = () => {
    const navigate = useNavigate();
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
        yearsActive: "",
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

    const [housing, setHousing] = useState(null);

    // const [housing, setHousing] = useState("7b057fdb-255d-4d37-b8b9-e9de3addd458");
    
    // const [housing, setHousing] = useState("3fa85f64-5717-4562-b3fc-2c963f66afa6");

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
            amenitiesOption: detailsData?.amenitiesOption
        }));
    
        setLoginData(prevState => ({
            ...prevState,
            email: formData?.email,
            password: formData?.password
        }));
    }, [detailsData, housingData, formData]);


    const [active, setActive] = useState(1)
    const [selectedCity, setSelectedCity] = useState("");
    // eslint-disable-next-line no-unused-vars
    const [selectedStates, setSelectedStates] = useState("");
    const [selectedCountry, setSelectedCountry] = useState(''); // State to store the selected country
    // eslint-disable-next-line no-unused-vars
    const [selectedCities, setSelectedCities] = useState(''); // State to store the selected city
    // eslint-disable-next-line no-unused-vars
    const [isLoading, setIsLoading] = useState(true);



    const firstNameInput = useRef();
    const lastNameInput = useRef();
    const addressInput = useRef();
    const cityInput = useRef();
    const postalCodeInput = useRef();
    const phoneInput = useRef();
    const emailInput = useRef();
    const emailConfirmationInput = useRef();
    const passwordInput = useRef();
    const confirmPasswordInput = useRef();
    const yearsActiveInput = useRef();


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
        yearsActive,
    } = formData;

    // PASSWORD CHECKER 
    const [text, setText] = useState('');
    const [testOne, setTestOne] = useState(false);
    const [testTwo, setTestTwo] = useState(false);
    const [testThree, setTestThree] = useState(false);
    const [testFour, setTestFour] = useState(false);
    const [textValue, setTextValue] = useState(false);

    const handlePasswordChange = (e) => {
        setFormData({ ...formData, password: e.target.value })
        checkForTextOne(e.target.value)
        checkForTextTwo(e.target.value)
        checkForTextThree(e.target.value)
        checkForTextFour(e.target.value)
    }

    const checkForTextOne = (userValue) => {
        // CHARACTER MUST BE MORE THAN 8 CHARACTER
        if (userValue.length > 5) {
            setText("Too Weak")
            setTextValue("At least 6 characters long, with one uppercase letter, one number and one symbol")
            // console.log("text in the input..", text);
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
            // setText("")
            setTestTwo(false)
        }
    }

    const checkForTextThree = (userValue) => {
        //DIGIT
        if (userValue.length > 5 && /[A-Z]/.test(userValue) && /\d/.test(userValue)) {
            setText("Strong Password")
            setTestThree(true)
        } else {
            // setText("")
            setTestThree(false)
        }
    }

    const checkForTextFour = (userValue) => {
        //SPECIAL CHARACTER
        if (userValue.length > 5 && /[A-Z]/.test(userValue) && /\d/.test(userValue) && /[!@#$%^&*]/.test(userValue)) {
            setText("Very Strong Password")
            setTestFour(true)
        } else {
            // setText("")
            setTestFour(false)
        }
    }

    const handleCheckLandLord = async () => {
        // e.preventDefault();
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
                !yearsActive ||
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

            // console.log("user form for landlord...", formData);

            // const response = await axios.post(`https://medirent-api-3gwy.onrender.com/account/landlord-registration`,
            //     formData,
            // );

            const response = await axiosPrivate.post("/account/landlord-registration", formData);

            setLandLoading(false);

            // console.log("Landlord is rent..", response.data.data, "Loading..", landLoading);

            if (response?.data?.Success === true) {
                toast.success("Landlord's account Created");

                await handleLoginUser()
            }


        } catch (error) {
            setLandLoading(false);
            // console.log("error in the landlord..", error)
        }

        // setActive(2)

    };

    const handleLoginUser = async () => {
        // e.preventDefault();

        try {
            setLoginLoading(true)


            // console.log("lOGIN DATA...", loginData);

            // const response = await axios.post(`https://medirent-api-3gwy.onrender.com/account/signin`,
            //     loginData,
            // );

            const response = await axiosPrivate.post("/account/signin", loginData);

            setLoginLoading(false)

            // console.log("landlord account..", response.data.data, "Loading..", loginLoading);

            localStorage.setItem("token", JSON.stringify(response?.data));

            localStorage.setItem("accessToken", JSON.stringify(response.data?.Data?.AccessToken));

            // Retrieve the stringified object from local storage
            // const storedToken = localStorage.getItem('token');


            // Parse the stringified object back to its original form
            // const userDetails = JSON.parse(storedToken);

            // console.log("account item..", storedToken, userDetails);



            if (response.data.Success === true) {
                toast.success("Login Successfully");

                setActive(2)
            }
            return response.data;
        } catch (error) {
            const message =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();
            toast.error(message);
            setLoginLoading(false)

            // console.log("user login..", error);
        }


    }

    // TOGGLE THROUGH THE PAGE FUNCTION 
    const handleProviderOne = () => {
        handleCheckLandLord()
        // console.log("all the data..", formData);

    };


    // const renderPreviousForm = () => {
    //     setActive(active - 1);
    // };
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
                setSelectedStates(response?.data?.data);
                setIsLoading(false);
                // console.log("state is Loading..", response.data?.data);

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

    const handleReferenceChange = (e) => {
        setFormData(prevState => ({
            ...prevState,
            discoveryMethod: e.target.value,
        }));
    };

    const handleRadioChange = (e) => {
        setFormData(prevState => ({
            ...prevState,
            functionOption: e.target.nextSibling.textContent.trim(),
        }));

        // console.log("king ...", functionOption, "hair..", e.target.nextSibling.textContent.trim());
    };

    const handleCityChange = (event) => {
        setSelectedCities(event.target.value);
        let selectedValue = event.target.value === "Select a city" ? null : event.target.value;
        setFormData(prevFormData => ({
            ...prevFormData,
            province: selectedValue
        }));
    };

    const handleCountryChange = (event) => {
        // setSelectedCities(event.target.value);
        setSelectedCountry(event.target.value);
        setSelectedCities(''); // Clear the selected city when the country changes
        let selectedValue = event.target.value === "Select a country" ? null : event.target.value;
        setFormData(prevFormData => ({
            ...prevFormData,
            country: selectedValue
        }));
    };

    const handleInputUser = (e) => setFormData(
        {
            ...formData,
            [e.target.name]: e.target.value
        }
    );

    const handleActiveUser = (event) => {
        const { value } = event.target;
        // console.log("all the value..", value );

        setFormData(prevState => ({
            ...prevState,
            yearsActive: value
        }));
    };


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

            // console.log("all the year in the bank..", convertedDates);

            // const requestBody = {
            //     listingId: housing?.id,
            //     propertyDates: convertedDates
            // };



            // console.log("the create Listing  ...", housing, requestBody);

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

            // console.log("all the Listing..", response.data);
            

        } catch (error) {
            setUserLoading(false);
            toast.error("Listing creation Failed");
            console.error('Error creating Listing:', error);
        }
    };

    const handleRentUser = async() => {
        try {
            // Retrieve accessToken from localStorage
            const accessToken = JSON.parse(localStorage.getItem('accessToken'));

            // setLandLoading(true);
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

                setActive(4)
            }

            return response.data; // Return the response data if needed

        } catch (error) {
            // Handle errors
            // console.error('Error creating listing:', error);
            setHousingLoading(false);
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

            // console.log("all the zone image...", housing?.id, "store images...",  fileList);

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

            // Extract the housingId from the housing object
            // const housingId = housing;

            // formData.append('listingId', housing?.id); // Append the housingId string

            // for (var key of formData.entries()) {
            //     console.log(key[0] + ", " + key[1]);
            // }

            // for (var [key, value] of formData.entries()) { 
            //     console.log("al the key..", key, value);
            // }


            // formData.append('housingId', housing);

            // console.log("format data..", formData, housing, fileList);

            const response = await axios.post(`https://medirent-api-3gwy.onrender.com/File/upload?listingId=${housing?.id}`, formData, { headers });

            setImageLoading(false)

            // console.log('Files uploaded:', response.data);

            if (response.data.success === true) {
                toast.success("Images Successfully Uploaded");

                setActive(5)
            }

            return response.data;
        } catch (error) {
            setImageLoading(false)
            // console.error('Error uploading files:', error);
            throw error;
        }
    };




    const [isToggle, setIsToggle] = useState(true);
    const changeToggle = () => setIsToggle(!isToggle);
    // const [error, setError] = useState("");


    return (
        <div className="py-0 mt-32 bg-white">
            <div className="flex font-medium justify-between max-w-screen-xl mx-auto">
                <div
                    className="bg-white w-full h-screen bg-HomeImage bg-cover
                        bg-center flex justify-center lg:h-[50vh] md:h-[70vh] sm:h-[80vh] xs:h-[70vh]"
                >
                    <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-white text-4xl font-medium text-center">JOIN THE MEDIRENT COMMUNITY!</p>
                    </div>
                </div>
            </div>


            <div className=" bg-[#dfdfdf] md:flex-1 flex-col w-full  items-center relative z-10 flex font-medium justify-between max-w-screen-xl mx-auto">
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
                                Registration
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
                                Address
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
                                Details
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
                                <div className="flex items-center h-full">
                                    <div
                                        className={`${active > 4 ? "h-2 w-40 !bg-third "
                                            : " h-2 w-40 !bg-white"
                                            }`}
                                    ></div>

                                </div>
                            </div>
                            <span
                                className={`${active > 4 ? " !text-third px-2  md:text-md  flex mt-1  "
                                    : " !text-black px-2 md:text-md flex mt-1 "
                                    }`}
                            >
                                Photos
                            </span>
                        </div>

                        <div className="flex flex-col ">
                            <div className="flex flex-row">

                                <div className={`${active > 5 ? "flex items-center justify-center rounded-full p-6 h-10 w-10 !bg-third text-white"
                                    : "flex items-center justify-center rounded-full p-6 h-10 w-10 !bg-white text-lime-700"
                                    }`}>
                                    {
                                        active > 5 ?
                                            <span className="font-semibold">
                                                <BsCheckLg />
                                            </span>
                                            :
                                            <span className="font-bold text-black">
                                                5
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
                                className={`${active > 5 ? " !text-third px-2  md:text-md  flex mt-1  "
                                    : " !text-black px-2 md:text-md flex mt-1 "
                                    }`}
                            >
                                Availiability
                            </span>
                        </div>
                    </div>

                    <div className="w-full md:flex xs:flex lg:hidden flex-row justify-center">
                        <div className="bg-third rounded-full px-10 py-10 text-white text-2xl font-bold">
                            {active}/5

                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center lg:w-full md:w-full">
                    <div className="w-full flex flex-col p-0 max-w-4xl px-2">
                        <div className="w-full flex-1 mt-4">
                            <div className="">
                                {(active === 0 || active <= 1) && (
                                    <div className="">
                                        <div className="my-10 text-center">
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
                                        </div>

                                        {/* <div className="text-center my-6 font-base md:text-3xl xs:text-xl"> Contact information</div> */}

                                        <div className="relative my-10">
                                            <input
                                                id="firstName"
                                                className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                                                type="text"
                                                ref={firstNameInput}
                                                name="firstName"
                                                value={firstName}
                                                onChange={handleInputUser}
                                                placeholder=" "
                                            />
                                            <label
                                                htmlFor="text"
                                                className="label absolute md:mt-2 xs:mt-0 ml-3 leading-tighter text-gray-600 text-base cursor-text bg-transparent"
                                            >
                                                First Name
                                            </label>
                                        </div>

                                        <div className="relative my-10">
                                            <input
                                                id="lastName"
                                                className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                                                type="text"
                                                ref={lastNameInput}
                                                name="lastName"
                                                value={lastName}
                                                onChange={handleInputUser}
                                                placeholder=" "
                                            />
                                            <label
                                                htmlFor="text"
                                                className="label absolute md:mt-2 xs:mt-0 ml-3 leading-tighter text-gray-600 text-base cursor-text bg-transparent"
                                            >
                                                Last Name
                                            </label>
                                        </div>

                                        <div className="relative my-10">
                                            <input
                                                id="yearsActive"
                                                className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                                                type="number"
                                                ref={yearsActiveInput}
                                                name="yearsActive"
                                                value={yearsActive}
                                                onChange={handleActiveUser}
                                                placeholder=" "
                                            />
                                            <label
                                                htmlFor="text"
                                                className="label absolute md:mt-2 xs:mt-0 ml-3 leading-tighter text-gray-600 text-base cursor-text bg-transparent"
                                            >
                                                Years Of Active Experience
                                            </label>
                                        </div>

                                        <div className="text-left text-gray-700">
                                            <h1 className="mb-0 p-0 text-2xl text-black">Functions</h1>




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

                                        <div className="relative my-10">
                                            <input
                                                id="email"
                                                className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                                                type="text"
                                                ref={emailInput}
                                                name="email"
                                                value={email}
                                                onChange={handleInputUser}
                                                placeholder=""
                                            />
                                            <label
                                                htmlFor="text "
                                                className="label absolute md:mt-2 xs:mt-0 ml-3 leading-tighter text-gray-600 text-base cursor-text bg-transparent"
                                            >
                                                E-mail
                                            </label>
                                        </div>

                                        <div className="relative my-10">
                                            <input
                                                id="emailConfirmation"
                                                className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                                                type="email"
                                                ref={emailConfirmationInput}
                                                name="emailConfirmation"
                                                value={emailConfirmation}
                                                onChange={handleInputUser}
                                                placeholder=""
                                            />
                                            <label
                                                htmlFor="email"
                                                className="label absolute md:mt-2 xs:mt-0 ml-3 leading-tighter text-gray-600 text-base cursor-text bg-transparent"
                                            >
                                                Email Confirmation
                                            </label>
                                        </div>

                                        <div className="relative my-10">
                                            <input
                                                id="address"
                                                className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                                                type="text"
                                                ref={addressInput}
                                                name="address"
                                                value={address}
                                                onChange={handleInputUser}
                                                placeholder=" "
                                            />
                                            <label
                                                htmlFor="text"
                                                className="label absolute md:mt-2 xs:mt-0 ml-3 leading-tighter text-gray-600 text-base cursor-text bg-transparent"
                                            >
                                                Address
                                            </label>
                                        </div>

                                        <div className="">
                                            <div >
                                                <div className="relative my-10">
                                                    {selectedCity ? (
                                                        <select
                                                            onChange={handleCountryChange}
                                                            value={country}
                                                            className="md:h-14 xs:h-10 w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                                                        >
                                                            <option value="">Select a country</option>
                                                            {selectedCity?.map((country, index) => (
                                                                <option key={index} value={country.name}>
                                                                    {country.name}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    ) : (
                                                        <div>loading</div>
                                                    )}

                                                </div>
                                            </div>
                                            <div className="relative my-10">


                                                {selectedCountry ? (
                                                    <div>
                                                        <select
                                                            onChange={handleCityChange}
                                                            value={province}
                                                            className="md:h-14 xs:h-10 w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                                                        >
                                                            <option value="">Select a state</option>
                                                            {selectedCity
                                                                .find((country) => country.name === selectedCountry)
                                                                .states.map((state, index) => (
                                                                    <option key={index} value={state.name}>
                                                                        {state.name}
                                                                    </option>
                                                                ))
                                                            }
                                                        </select>
                                                    </div>
                                                ) : (
                                                    <select
                                                        className='md:h-14 xs:h-10 w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md'
                                                    >
                                                        <option value="">Select a state</option>
                                                    </select>
                                                )}
                                            </div>
                                        </div>

                                        <div className="relative my-10">
                                            <input
                                                id="city"
                                                className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                                                type="text"
                                                ref={cityInput}
                                                name="city"
                                                value={city}
                                                onChange={handleInputUser}
                                                placeholder=" "
                                            />
                                            <label
                                                htmlFor="text"
                                                className="label absolute md:mt-2 xs:mt-0 ml-3 leading-tighter text-gray-600 text-base cursor-text bg-transparent"
                                            >
                                                City
                                            </label>
                                        </div>

                                        <div className="relative my-10">
                                            <input
                                                id="postalCode"
                                                className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                                                type="text"
                                                ref={postalCodeInput}
                                                name="postalCode"
                                                value={postalCode}
                                                onChange={handleInputUser}
                                                placeholder=" "
                                            />
                                            <label
                                                htmlFor="text"
                                                className="label absolute md:mt-2 xs:mt-0 ml-3 leading-tighter text-gray-600 text-base cursor-text bg-transparent"
                                            >
                                                Postal Code
                                            </label>
                                        </div>

                                        <div className="relative my-10">
                                            <input
                                                id="phone"
                                                className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                                                type="text"
                                                ref={phoneInput}
                                                name="phone"
                                                value={phone}
                                                onChange={handleInputUser}
                                                placeholder=" "

                                            />
                                            <label
                                                htmlFor="text"
                                                className="label absolute mt-2 ml-3 leading-tighter text-gray-600 text-base cursor-text"

                                            >Phone</label>
                                        </div>
                                        <div className="group relative">
                                            <input
                                                id="password"
                                                className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                                                type={`${isToggle ? "password" : "text"}`}
                                                ref={passwordInput}
                                                name="password"
                                                value={password}
                                                onChange={handlePasswordChange}
                                                placeholder=""
                                            />
                                            <label
                                                htmlFor="email"
                                                className="label absolute md:mt-2 xs:mt-0 ml-3 leading-tighter text-gray-600 text-base cursor-text bg-transparent"
                                            >
                                                Password
                                            </label>

                                            <div
                                                className="flex mt-3 flex-col h-6 "
                                                onClick={changeToggle}
                                                style={{
                                                    position: "absolute",
                                                    width: "30px",
                                                    right: "5px",
                                                    bottom: "12px",
                                                    lineHeight: "20px",
                                                }}
                                            >
                                                {isToggle ? (
                                                    <div className="cursor-pointer">
                                                        <svg
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            data-prefix="fas"
                                                            data-icon="eye-slash"
                                                            className="w-6 h-6 text-gray-600"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 576 512"
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M286.693 391.984l32.579 46.542A333.958 333.958 0 0 1 288 440C168.19 440 63.031 376.051 6.646 280.369a47.999 47.999 0 0 1 0-48.739c24.023-40.766 56.913-75.775 96.024-102.537l57.077 81.539C154.736 224.82 152 240.087 152 256c0 74.736 60.135 135.282 134.693 135.984zm282.661-111.615c-31.667 53.737-78.747 97.46-135.175 125.475l.011.015 41.47 59.2c7.6 10.86 4.96 25.82-5.9 33.42l-13.11 9.18c-10.86 7.6-25.82 4.96-33.42-5.9L100.34 46.94c-7.6-10.86-4.96-25.82 5.9-33.42l13.11-9.18c10.86-7.6 25.82-4.96 33.42 5.9l51.038 72.617C230.68 75.776 258.905 72 288 72c119.81 0 224.969 63.949 281.354 159.631a48.002 48.002 0 0 1 0 48.738zM424 256c0-75.174-60.838-136-136-136-17.939 0-35.056 3.473-50.729 9.772l19.299 27.058c25.869-8.171 55.044-6.163 80.4 7.41h-.03c-23.65 0-42.82 19.17-42.82 42.82 0 23.626 19.147 42.82 42.82 42.82 23.65 0 42.82-19.17 42.82-42.82v-.03c18.462 34.49 16.312 77.914-8.25 110.95v.01l19.314 27.061C411.496 321.2 424 290.074 424 256zM262.014 356.727l-77.53-110.757c-5.014 52.387 29.314 98.354 77.53 110.757z"
                                                            />
                                                        </svg>
                                                    </div>
                                                ) : (
                                                    <div
                                                        className="cursor-pointer"
                                                        style={{
                                                            position: "absolute",
                                                            width: "40px",
                                                            height: "40px",

                                                            lineHeight: "20px",
                                                        }}
                                                    >
                                                        <svg
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            data-prefix="fas"
                                                            data-icon="eye"
                                                            className="w-6 h-6 text-gray-600"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 576 512"
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M569.354 231.631C512.969 135.949 407.81 72 288 72 168.14 72 63.004 135.994 6.646 231.631a47.999 47.999 0 0 0 0 48.739C63.031 376.051 168.19 440 288 440c119.86 0 224.996-63.994 281.354-159.631a47.997 47.997 0 0 0 0-48.738zM288 392c-75.162 0-136-60.827-136-136 0-75.162 60.826-136 136-136 75.162 0 136 60.826 136 136 0 75.162-60.826 136-136 136zm104-136c0 57.438-46.562 104-104 104s-104-46.562-104-104c0-17.708 4.431-34.379 12.236-48.973l-.001.032c0 23.651 19.173 42.823 42.824 42.823s42.824-19.173 42.824-42.823c0-23.651-19.173-42.824-42.824-42.824l-.032.001C253.621 156.431 270.292 152 288 152c57.438 0 104 46.562 104 104z"
                                                            />
                                                        </svg>

                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="flex justify-between flex-wrap ">
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

                                        <div className="group relative my-10">
                                            <input
                                                id="confirmPassword"
                                                className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                                                type={`${isToggle ? "password" : "text"}`}
                                                ref={confirmPasswordInput}
                                                name="confirmPassword"
                                                value={confirmPassword}
                                                onChange={handleInputUser}
                                                placeholder=""
                                            />
                                            <label
                                                htmlFor="email"
                                                className="label absolute md:mt-2 xs:mt-0 ml-3 leading-tighter text-gray-600 text-base cursor-text bg-transparent"
                                            >
                                                Confirm Password
                                            </label>



                                            <div
                                                className="flex mt-3 flex-col h-6 "
                                                onClick={changeToggle}
                                                style={{
                                                    position: "absolute",
                                                    width: "30px",
                                                    right: "5px",
                                                    bottom: "12px",
                                                    lineHeight: "20px",
                                                }}
                                            >
                                                {isToggle ? (
                                                    <div className="cursor-pointer">
                                                        <svg
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            data-prefix="fas"
                                                            data-icon="eye-slash"
                                                            className="w-6 h-6 text-gray-600"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 576 512"
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M286.693 391.984l32.579 46.542A333.958 333.958 0 0 1 288 440C168.19 440 63.031 376.051 6.646 280.369a47.999 47.999 0 0 1 0-48.739c24.023-40.766 56.913-75.775 96.024-102.537l57.077 81.539C154.736 224.82 152 240.087 152 256c0 74.736 60.135 135.282 134.693 135.984zm282.661-111.615c-31.667 53.737-78.747 97.46-135.175 125.475l.011.015 41.47 59.2c7.6 10.86 4.96 25.82-5.9 33.42l-13.11 9.18c-10.86 7.6-25.82 4.96-33.42-5.9L100.34 46.94c-7.6-10.86-4.96-25.82 5.9-33.42l13.11-9.18c10.86-7.6 25.82-4.96 33.42 5.9l51.038 72.617C230.68 75.776 258.905 72 288 72c119.81 0 224.969 63.949 281.354 159.631a48.002 48.002 0 0 1 0 48.738zM424 256c0-75.174-60.838-136-136-136-17.939 0-35.056 3.473-50.729 9.772l19.299 27.058c25.869-8.171 55.044-6.163 80.4 7.41h-.03c-23.65 0-42.82 19.17-42.82 42.82 0 23.626 19.147 42.82 42.82 42.82 23.65 0 42.82-19.17 42.82-42.82v-.03c18.462 34.49 16.312 77.914-8.25 110.95v.01l19.314 27.061C411.496 321.2 424 290.074 424 256zM262.014 356.727l-77.53-110.757c-5.014 52.387 29.314 98.354 77.53 110.757z"
                                                            />
                                                        </svg>
                                                    </div>
                                                ) : (
                                                    <div
                                                        className="cursor-pointer"
                                                        style={{
                                                            position: "absolute",
                                                            width: "40px",
                                                            height: "40px",

                                                            lineHeight: "20px",
                                                        }}
                                                    >
                                                        <svg
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            data-prefix="fas"
                                                            data-icon="eye"
                                                            className="w-6 h-6 text-gray-600"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 576 512"
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M569.354 231.631C512.969 135.949 407.81 72 288 72 168.14 72 63.004 135.994 6.646 231.631a47.999 47.999 0 0 0 0 48.739C63.031 376.051 168.19 440 288 440c119.86 0 224.996-63.994 281.354-159.631a47.997 47.997 0 0 0 0-48.738zM288 392c-75.162 0-136-60.827-136-136 0-75.162 60.826-136 136-136 75.162 0 136 60.826 136 136 0 75.162-60.826 136-136 136zm104-136c0 57.438-46.562 104-104 104s-104-46.562-104-104c0-17.708 4.431-34.379 12.236-48.973l-.001.032c0 23.651 19.173 42.823 42.824 42.823s42.824-19.173 42.824-42.823c0-23.651-19.173-42.824-42.824-42.824l-.032.001C253.621 156.431 270.292 152 288 152c57.438 0 104 46.562 104 104z"
                                                            />
                                                        </svg>

                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="mb-8 text-left">
                                            <h1 className="mb-3 text-sm">How did you discover Medirent?</h1>

                                            <select
                                                onChange={handleReferenceChange}
                                                value={discoveryMethod}
                                                className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md "
                                            >
                                                <option value="Facebook/socialmedia">Facebook/socialmedia</option>
                                                <option value="Medical school admin recommended">
                                                    Medical school admin recommended
                                                </option>
                                                <option value="Friend/colleague">Friend/colleague</option>
                                                <option value="Real Estate Agent">Real Estate Agent</option>
                                                <option value="Internet browsing">Internet browsing</option>
                                                <option value="Journal/medical affiliated website">
                                                    Journal/medical affiliated website
                                                </option>
                                                <option value="other">other</option>
                                            </select>
                                        </div>

                                        <div className="mb-8 text-left text-xl">
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

                                        <div className="flex justify-between  pb-10">
                                            <div className="flex justify-end z-10 relative mt-4 ">
                                        
                                                <button
                                                    onClick={handleProviderOne}
                                                    className="flex justify-end z-10 relative bg-third text-white md:text-sm rounded-lg md:py-3 md:px-16 xs:text-[15px] xs:py-4 xs:px-10"
                                                    disabled={landLoading} // Disable the button when userLoading is true
                                                >
                                                    {landLoading ? ( // Display spinner if userLoading is true
                                                        <div className="flex items-center px-6">
                                                            <div>
                                                                <img alt="" src={Spinner} className="text-[1px] text-white" />
                                                            </div>

                                                        </div>
                                                    ) : (
                                                        <span className="">Next Step</span> // Show the "Submit" text when isLoading is false
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {(active > 1 && active <= 2) && (
                                    <Address
                                        active={active}
                                        setActive={setActive}
                                        housingData={housingData}
                                        setHousingData={setHousingData}
                                    />
                                )}

                                {(active > 2 && active <= 3) && (
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

                                {(active > 3 && active <= 4) && (
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

                                {(active > 4 && active <= 5) && (
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
