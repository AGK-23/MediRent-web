import React from "react";
import axios from "axios";
import { useState, useRef, useEffect } from "react";
// import waitinRoom from "../../assets/images/waitinRoom.jpg";
import { Link } from "react-router-dom";
import { IoLogInOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";

import { BsCheckLg, BsChevronLeft, BsShopWindow } from "react-icons/bs";
import { FaCircleInfo } from "react-icons/fa6";
import Currency from "../../registration/Currency.jsx"

import { AiOutlineCloudUpload } from "react-icons/ai";
import Calendar from "../../registration/Calendar.jsx";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

import '../login/login.css';

const CreateLandLord = () => {
    // const [avatar, setAvatar] = useState(null);
    const navigate = useNavigate();
    


    const [chosenBox, setChosenBox] = useState(2);

    const [propertyPictures, setPropertyPictures] = useState(null);

    const [linkUrl, setLinkUrl] = useState("");
    const linkUrlInput = useRef();

    const handleLinkUser = (e) => setLinkUrl(
        setLinkUrl(e.target.value)
    );

    const handleChoose = (boxNumber) => {
        setChosenBox(boxNumber);
        // Do not call onNextboX here
    };

    const isBoxChosen = (boxNumber) => {
        return chosenBox === boxNumber;
    };
    const [setButton, setButtonVisible] = useState(true);
    const handleButtonClick = () => {
        setButtonVisible(false);
    };


    const [active, setActive] = useState(1)
    const [selectedCity, setSelectedCity] = useState("");
    const [selectedStates, setSelectedStates] = useState("");
    const [selectedCountry, setSelectedCountry] = useState(''); // State to store the selected country
    // eslint-disable-next-line no-unused-vars
    const [selectedCities, setSelectedCities] = useState(''); // State to store the selected city
    const [isLoading, setIsLoading] = useState(true);



    const firstNameInput = useRef();
    const lastNameInput = useRef();
    const addressInput = useRef();
    const cityInput = useRef();
    const postalcodeInput = useRef();
    const phoneInput = useRef();
    const cellnumberInput = useRef();
    const linkedinInput = useRef();
    const emailInput = useRef();
    const emailconfirmationInput = useRef();
    const passwordInput = useRef();
    const confirmpasswordInput = useRef();
    const rentedyearsInput = useRef();



    // FIRST STATE IN THE CODE 
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        address: "",
        city: "",
        postalcode: "",
        phone: "",
        cellnumber: "",
        linkedin: "",
        email: "",
        emailconfirmation: "",
        password: "",
        confirmpassword: "",
        rentedyears: "",
        // rentingtype: "",
        confirmEmail: "",
        country: "",
        province: "",
        discoveryMethod: "Facebook/socialmedia",
        receiveNewsletter: false,
    });

    // SECOND STATE IN THE CODE 
    const [housingData, setHousingData] = useState({
        listingtitle: "",
        housingaddress: "",
        housingcity: "",
        housingpostalcode: "",
        housingcellnumber: "",
        housingcountry: "",
        housingstate: "",
        promotioncode: "",
    });

    // THIRD STATE IN THE CODE 
    const [detailsData, setDetailsData] = useState({
        dailyrent: "",
        weeklyrent: "",
        monthlyrent: "",
        numberofbedroom: "",
        numberofbathroom: "",
        licensenumber: "",
    });

    const dailyrentInput = useRef();
    const weeklyrentInput = useRef();
    const monthlyrentInput = useRef();
    const numberofbedroomInput = useRef();
    const numberofbathroomInput = useRef();
    const licensenumberInput = useRef();

    var {
        dailyrent,
        weeklyrent,
        monthlyrent,
        numberofbedroom,
        numberofbathroom,
        licensenumber,
    } = detailsData;

    var {
        listingtitle,
        housingaddress,
        housingcity,
        housingpostalcode,
        housingcellnumber,
        housingcountry,
        housingstate,
        promotioncode,
    } = housingData;

    const listingtitleInput = useRef();
    const housingaddressInput = useRef();
    const housingcityInput = useRef();
    const housingpostalcodeInput = useRef();
    const housingcellnumberInput = useRef();
    const housingcountryInput = useRef();
    const housingstateInput = useRef();
    const promotioncodeInput = useRef();


    var {
        firstname,
        lastname,
        address,
        city,
        postalcode,
        phone,
        cellnumber,
        linkedin,
        email,
        emailconfirmation,
        password,
        confirmpassword,
        rentedyears
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

    // TOGGLE THROUGH THE PAGE FUNCTION 
    const handleProviderOne = () => {
        setActive(2);
    };

    const handleProviderTwo = () => {
        setActive(3);
    };

    const handleProviderThree = () => {
        setActive(4);
    };

    const handleProviderFour = () => {
        setActive(5);
    };

    const handleProviderFive = () => {

        setActive(1);
        navigate('/success/landlord/1')
        toast.success("LandLord's account Successfully")
    };

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
                console.log(response.data?.data);
                console.log(selectedStates);
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
                console.log("state is Loading..", response.data?.data);

            } catch (error) {
                console.error(error);
            }
        }
        fetchStateLogData();
    }, []);

    const handleCityChange = (event) => {
        setSelectedCities(event.target.value);
        let selectedValue = event.target.value === "Select a city" ? null : event.target.value;
        setFormData(prevFormData => ({
            ...prevFormData,
            state: selectedValue
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


    const handleCityHousingChange = (event) => {
        setSelectedCities(event.target.value);
        let selectedValue = event.target.value === "Select a city" ? null : event.target.value;
        setHousingData(prevHousingData => ({
            ...prevHousingData,
            housingcity: selectedValue
        }));
    };

    const handleCountryHousingChange = (event) => {
        // setSelectedCities(event.target.value);
        setSelectedCountry(event.target.value);
        setSelectedCities(''); // Clear the selected city when the country changes
        let selectedValue = event.target.value === "Select a country" ? null : event.target.value;
        setHousingData(prevHousingData => ({
            ...prevHousingData,
            housingcountry: selectedValue
        }));
    };



    const handleInputUser = (e) => setFormData(
        {
            ...formData,
            [e.target.name]: e.target.value
        }
    );

    const handleHousingUser = (e) => setHousingData(
        {
            ...housingData,
            [e.target.name]: e.target.value
        }
    );

    const handleDetailsUser = (e) => setDetailsData(
        {
            ...detailsData,
            [e.target.name]: e.target.value
        }
    );


    const [isToggle, setIsToggle] = useState(true);
    const changeToggle = () => setIsToggle(!isToggle);



    const handleFileChange = (e) => {
        const files = e.target.files;
        // Handle the selected files here
        setPropertyPictures(files)
        console.log(files);
    };

    const [avatars, setAvatars] = useState([]);

    const handleFileInputChange = (e) => {
        const files = e.target.files;

        if (files) {
            const newAvatars = Array.from(files).map((file) => URL.createObjectURL(file));
            setAvatars((prevAvatars) => [...prevAvatars, ...newAvatars]);
        }
    };

    const [error, setError] = useState("");


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
                                                id="firstname"
                                                className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                                                type="text"
                                                ref={firstNameInput}
                                                name="firstname"
                                                value={firstname}
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
                                                id="lastname"
                                                className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                                                type="text"
                                                ref={lastNameInput}
                                                name="lastname"
                                                value={lastname}
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

                                        <div className="text-left text-gray-700">
                                            <h1 className="mb-0 p-0 text-2xl text-black">Functions</h1>


                                            <div className="flex items-center my-7">
                                                <div className="rounded-full border-[2px] border-black p-2 h-4 w-4"></div>

                                                <div className="ml-4" >
                                                    Medical Doctor with property/room for rent
                                                </div>
                                            </div>

                                            <div className="flex items-center my-7">
                                                <div className="rounded-full border-[2px] border-black p-2 h-4 w-4"></div>

                                                <div className="ml-4" >
                                                    Medical Trainee renting my property/room
                                                </div>
                                            </div>

                                            <div className="flex items-center my-7">
                                                <div className="rounded-full border-[2px] border-black p-2 h-4 w-4"></div>

                                                <div className="ml-4" >
                                                    Private Community Landlord
                                                </div>
                                            </div>

                                            <div className="flex items-center my-7">
                                                <div className="rounded-full border-[2px] border-black p-2 h-4 w-4"></div>

                                                <div className="ml-4" >
                                                    Property Manager
                                                </div>
                                            </div>

                                            <div className="flex items-center my-7">
                                                <div className="rounded-full border-[2px] border-black p-2 h-4 w-4"></div>

                                                <div className="ml-4" >
                                                    Other Health Care person with a property/room for rent
                                                </div>
                                            </div>
                                        </div>


                                        <div className="relative my-10">
                                            <input
                                                id="rentedyears"
                                                className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                                                type="text"
                                                ref={rentedyearsInput}
                                                name="rentedyears"
                                                value={rentedyears}
                                                onChange={handleInputUser}
                                                placeholder=" "
                                            />
                                            <label
                                                htmlFor="text"
                                                className="label absolute md:mt-2 xs:mt-0 ml-3 leading-tighter text-gray-600 md:text-base xs:text-[8px] cursor-text bg-transparent"
                                            >
                                                I have rented to the medical community for X years
                                            </label>
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
                                                id="emailconfirmation"
                                                className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                                                type="email"
                                                ref={emailconfirmationInput}
                                                name="emailconfirmation"
                                                value={emailconfirmation}
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
                                                            value={selectedCountry}
                                                            className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
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
                                                            // value={selectedCities}
                                                            className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
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
                                                        className='w-full rounded px-3 border border-gray-300 py-4 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none'
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
                                                id="postalcode"
                                                className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                                                type="text"
                                                ref={postalcodeInput}
                                                name="postalcode"
                                                value={postalcode}
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
                                                id="confirmpassword"
                                                className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                                                type={`${isToggle ? "password" : "text"}`}
                                                ref={confirmpasswordInput}
                                                name="confirmpassword"
                                                value={confirmpassword}
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

                                            <select className="outline-none mt-1 p-4 w-full border border-gray-300 rounded ">
                                                <option value="face">Facebook/socialmedia</option>
                                                <option value="medSchool">
                                                    Medical school admin recommended
                                                </option>
                                                <option value="friend">Friend/colleague</option>
                                                <option value="estate">Real Estate Agent</option>
                                                <option value="internet">Internet browsing</option>
                                                <option value="journal">
                                                    Journal/medical affiliated website
                                                </option>
                                                <option value="other">other</option>
                                            </select>
                                        </div>

                                        <div className="mb-8 text-left text-1xl">
                                            <input
                                                type="checkbox"
                                                id="receiveNewsletter"
                                                className="mr-2 border-black-500"
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
                                                >
                                                    <span className="">Next Step</span>
                                                </button>
                                            </div>
                                        </div>



                                    </div>
                                )}

                                {(active > 1 && active <= 2) && (
                                    <div className="my-10">
                                        <div className="flex flex-col ">
                                            <div className="text-center my-6 font-base md:text-3xl xs:text-xl"> Select your Package</div>

                                            <div className="grid md:grid-cols-3 xs:grid-cols-1 gap-10  md:mx-10 xs:mx-3">
                                                {/* Square 1 */}
                                                <div
                                                    className={`py-5 border-[3px]  rounded-lg text-center bg-white ${isBoxChosen(1) ? 'border-third' : 'border-gray-300'
                                                        }`}
                                                    onClick={() => handleChoose(1)}
                                                >

                                                    <div className="flex justify-center items-center flex-col h-full mx-5">


                                                        <div className="text-2xl text-third w-full  float-left flex justify-end"><FaCircleInfo /></div>
                                                        <div className={`font-bold w-full  ${isBoxChosen(1) ? 'text-third' : 'text-gray-500'
                                                            }`}>MedsGold Yearly</div>
                                                        <div className="text-gray-700 text-2xl my-2 font-bold">$129.00 <sub>/Year</sub></div>

                                                        <button
                                                            className={`choose-btn border-3 rounded p-2 mt-4 ${isBoxChosen(1) ? 'bg-third text-white' : 'bg-green-500 text-white'
                                                                }`}
                                                            onClick={() => onNextBox()}
                                                        >
                                                            {isBoxChosen(1) ? 'Selected' : 'Choose'}
                                                        </button>

                                                    </div>
                                                </div>

                                                {/* Square 2 */}
                                                <div
                                                    className={`py-5 border-[3px]  rounded-lg text-center bg-white ${isBoxChosen(2) ? 'border-third' : 'border-gray-300'
                                                        }`}
                                                    onClick={() => handleChoose(2)}
                                                >
                                                    <div className="flex justify-center items-center flex-col h-full  relative">
                                                        <div className='w-full ml-auto bg-[#fbc421] text-third'>Recommended</div>
                                                        <div className="text-2xl text-third w-full  float-left flex justify-end"><FaCircleInfo /></div>
                                                        <div className={`font-bold w-full  ${isBoxChosen(2) ? 'text-third' : 'text-gray-500'
                                                            }`}>MedsBasic Yearly</div>
                                                        <div className="text-gray-700 text-2xl my-2 font-bold">$89.00 <sub>/Year</sub></div>

                                                        <button
                                                            className={`choose-btn border-3 rounded p-2 mt-4 ${isBoxChosen(2) ? 'bg-third text-white' : 'bg-green-500 text-white'
                                                                }`}
                                                            onClick={() => onNextBox()}
                                                        >
                                                            {isBoxChosen(2) ? 'Selected' : 'Choose'}
                                                        </button>

                                                    </div>
                                                </div>

                                                <div
                                                    className={`py-5 border-[3px]  rounded-lg text-center bg-white ${isBoxChosen(3) ? 'border-third' : 'border-gray-300'
                                                        }`}
                                                    onClick={() => handleChoose(3)}
                                                >
                                                    <div className="flex justify-center items-center flex-col h-full mx-5 relative">
                                                        {/* <div className='w-fit ml-auto bg-[#fbc421] px-3 right-16 absolute top-4 text-third'>Recommended</div> */}
                                                        <div className="text-2xl text-third w-full  float-left flex justify-end"><FaCircleInfo /></div>
                                                        <div className={`font-bold w-full  ${isBoxChosen(3) ? 'text-third' : 'text-gray-500'
                                                            }`}>MedsBasic Monthly</div>
                                                        <div className="text-gray-700 text-2xl my-2 font-bold">$19.00 <sub>/Month</sub></div>

                                                        <button
                                                            className={`choose-btn border-3 rounded p-2 mt-4 ${isBoxChosen(3) ? 'bg-third text-white' : 'bg-green-500 text-white'
                                                                }`}
                                                            onClick={() => onNextBox()}
                                                        >
                                                            {isBoxChosen(3) ? 'Selected' : 'Choose'}
                                                        </button>

                                                    </div>
                                                </div>

                                            </div>


                                        </div>

                                        <div className="text-center my-6 font-base md:text-3xl xs:text-xl">Housing information</div>

                                        <div className=" ">
                                            <div className="relative my-10 md:mx-0 xs:mx-3">
                                                <input
                                                    id="listingtitle"
                                                    className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                                                    type="text"
                                                    ref={listingtitleInput}
                                                    name="listingtitle"
                                                    value={listingtitle}
                                                    onChange={handleHousingUser}
                                                    placeholder=" "
                                                />
                                                <label
                                                    htmlFor="text"
                                                    className="label absolute md:mt-2 xs:mt-0 ml-3 leading-tighter text-gray-600 text-base cursor-text bg-transparent"
                                                >
                                                    Listing Title
                                                </label>
                                                <div className="mt-2 md:text-base xs:text-xs">For listing, make it short and eye catching</div>
                                            </div>

                                            <div className="relative my-10 md:mx-0 xs:mx-3">
                                                <input
                                                    id="housingaddress"
                                                    className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                                                    type="text"
                                                    ref={housingaddressInput}
                                                    name="housingaddress"
                                                    value={housingaddress}
                                                    onChange={handleHousingUser}
                                                    placeholder=" "
                                                />
                                                <label
                                                    htmlFor="text"
                                                    className="label absolute md:mt-2 xs:mt-0 ml-3 leading-tighter text-gray-600 text-base cursor-text bg-transparent"
                                                >
                                                    Address
                                                </label>

                                            </div>

                                            <div className=" md:mx-0 xs:mx-3">
                                                <div >


                                                    <div className="relative my-10">
                                                        {selectedCity ? (
                                                            <select
                                                                onChange={handleCountryHousingChange}
                                                                value={selectedCountry}
                                                                className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
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
                                                                onChange={handleCityHousingChange}
                                                                // value={selectedCities}
                                                                className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
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
                                                            className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                                                        >
                                                            <option value="">Select a state</option>
                                                        </select>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="relative my-10 md:mx-0 xs:mx-3">
                                                <input
                                                    id="housingcity"
                                                    className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                                                    type="text"
                                                    ref={housingcityInput}
                                                    name="housingcity"
                                                    value={housingcity}
                                                    onChange={handleHousingUser}
                                                    placeholder=" "
                                                />
                                                <label
                                                    htmlFor="text"
                                                    className="label absolute md:mt-2 xs:mt-0 ml-3 leading-tighter text-gray-600 text-base cursor-text bg-transparent"
                                                >
                                                    City
                                                </label>
                                            </div>

                                            <div className="relative my-10 md:mx-0 xs:mx-3">
                                                <input
                                                    id="housingpostalcode"
                                                    className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                                                    type="text"
                                                    ref={housingpostalcodeInput}
                                                    name="housingpostalcode"
                                                    value={housingpostalcode}
                                                    onChange={handleHousingUser}
                                                    placeholder=" "
                                                />
                                                <label
                                                    htmlFor="text"
                                                    className="label absolute md:mt-2 xs:mt-0 ml-3 leading-tighter text-gray-600 text-base cursor-text bg-transparent"
                                                >
                                                    Postal Code
                                                </label>
                                            </div>
                                            <div className="relative my-5 md:mx-0 xs:mx-3">
                                                <input
                                                    id="housingcellnumber"
                                                    className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                                                    type="text"

                                                    ref={housingcellnumberInput}
                                                    name="housingcellnumber"
                                                    value={housingcellnumber}
                                                    onChange={handleHousingUser}
                                                    placeholder=" "
                                                />
                                                <label
                                                    htmlFor="text"
                                                    className="label absolute md:mt-2 xs:mt-0 ml-3 leading-tighter text-gray-600 text-base cursor-text bg-transparent"
                                                >
                                                    Cell Number
                                                </label>
                                            </div>

                                            <div className="my-5 md:text-base xs:text-xs md:mx-0 xs:mx-3">Don't miss any tenant request! Add your cell number here to receive text messages when a tenant reaches out!</div>

                                            <div className="px-10 py-3 bg-third rounded-lg w-fit text-white md:text-base xs:text-xs md:mx-0 xs:mx-3">Upgrade to Medirent Gold to access this feature</div>

                                            <div className="my-5 md:text-base xs:text-xs md:mx-0 xs:mx-3">Enter your promo code below: </div>

                                            <div className="relative my-5 md:mx-0 xs:mx-3">
                                                <input
                                                    id="promotioncode"
                                                    className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                                                    type="text"
                                                    ref={promotioncodeInput}
                                                    name="promotioncode"
                                                    value={promotioncode}
                                                    onChange={handleHousingUser}
                                                    placeholder=" "
                                                />
                                                <label
                                                    htmlFor="text"
                                                    className="label absolute md:mt-2 xs:mt-0 ml-3 leading-tighter text-gray-600 text-base cursor-text bg-transparent"
                                                >
                                                    Promotion Code
                                                </label>
                                            </div>

                                            <div className="md:mx-0 xs:mx-3 px-10 py-3 mb-5 bg-third rounded-lg w-fit text-white md:text-base xs:text-xs">Apply</div>

                                            <div className="flex justify-between pb-10">
                                                <div className="flex justify-end z-10 relative mt-4  mr-3">
                                                    <button
                                                        onClick={handleProviderTwo}
                                                        className="flex justify-end items-center z-10 relative bg-third text-white md:text-sm rounded-lg md:py-3 md:px-16 xs:text-[15px] xs:py-3 xs:px-10"
                                                    >
                                                        <span className="">Next</span>
                                                    </button>
                                                </div>
                                                <div className="flex justify-end z-10 relative mt-4 ">
                                                    <button
                                                        onClick={renderPreviousForm}
                                                        className="flex justify-end z-10 relative bg-rose-500 text-white md:text-sm rounded-lg md:py-3 md:px-16 xs:text-[15px] xs:py-3 xs:px-10"
                                                    >
                                                        <span className="">Previous</span>
                                                    </button>
                                                </div>
                                            </div>

                                        </div>


                                    </div>
                                )}

                                {(active > 2 && active <= 3) && (
                                    <div className="my-10">
                                        <div className="flex flex-col">
                                            <div className="text-center my-10 font-base md:text-3xl xs:text-xl"> Housing details</div>
                                        </div>

                                        <div className="bg-[#fff9e2] py-4 px-4 text-start text-[#c29c4b] md:text-base xs:text-xs my-10">
                                            Minimum short term stay is determined by landlord and local regulations.
                                        </div>

                                        <div className=" grid md:grid-cols-2 xs:grid-cols-1 md:gap-16 xs:gap-5  md:w-fit xs:full my-10">
                                            <div className="flex justify-center items-center flex-row">
                                                <input className="outline-none h-5 w-5 " type="checkbox" id="doctor" name="renting" value="" />
                                                <label className="ml-2" for="doctor">Short term rental</label>
                                            </div>

                                            <div className="flex justify-center items-center flex-row">
                                                <input className="outline-none h-5 w-5 " type="checkbox" id="doctor" name="renting" value="" />
                                                <label className="ml-2" for="doctor"> Long term rental</label>
                                            </div>
                                        </div>

                                        <select className="outline-none mt-1 p-4 w-full border border-gray-300 rounded ">
                                            <option value="us" className="">Property type</option>
                                            <option value="ca">Apartment</option>
                                            <option value="uk">Basement</option>
                                            <option value="uk">Real Estate Agent</option>
                                            <option value="uk">Bed and Breakfast</option>
                                            <option value="uk">Condo</option>
                                            <option value="uk">Duplex</option>
                                            <option value="uk">For sale</option>
                                            <option value="uk">House</option>
                                            <option value="uk">Maisonette (self contained seperate entrance)</option>
                                            <option value="uk">Room to rent shared communal </option>
                                        </select>

                                        <div className="relative my-10">
                                            <input
                                                id="dailyrent"
                                                className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                                                type="number"
                                                ref={dailyrentInput}
                                                name="dailyrent"
                                                value={dailyrent}
                                                onChange={handleDetailsUser}
                                                placeholder=" "
                                            />
                                            <label
                                                htmlFor="number"
                                                className="label absolute md:mt-2 xs:mt-0 ml-3 leading-tighter text-gray-600 text-base cursor-text bg-transparent"
                                            >
                                                Daily Rent
                                            </label>
                                        </div>

                                        <div className="relative my-10">
                                            <input
                                                id="weeklyrent"
                                                className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                                                type="number"
                                                ref={weeklyrentInput}
                                                name="weeklyrent"
                                                value={weeklyrent}
                                                onChange={handleDetailsUser}
                                                placeholder=" "
                                            />
                                            <label
                                                htmlFor="number"
                                                className="label absolute md:mt-2 xs:mt-0 ml-3 leading-tighter text-gray-600 text-base cursor-text bg-transparent"
                                            >
                                                Weekly Rent
                                            </label>
                                        </div>

                                        <div className="relative my-10">
                                            <input
                                                id="monthlyrent"
                                                className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                                                type="number"
                                                ref={monthlyrentInput}
                                                name="monthlyrent"
                                                value={monthlyrent}
                                                onChange={handleDetailsUser}
                                                placeholder=" "
                                            />
                                            <label
                                                htmlFor="number"
                                                className="label absolute md:mt-2 xs:mt-0 ml-3 leading-tighter text-gray-600 text-base cursor-text bg-transparent"
                                            >
                                                Monthly Rent
                                            </label>
                                        </div>

                                        <div>
                                            <Currency />
                                        </div>

                                        <div className="relative my-10">
                                            <input
                                                id="numberofbedroom"
                                                className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                                                type="number"
                                                ref={numberofbedroomInput}
                                                name="numberofbedroom"
                                                value={numberofbedroom}
                                                onChange={handleDetailsUser}
                                                placeholder=" "
                                            />
                                            <label
                                                htmlFor="number"
                                                className="label absolute md:mt-2 xs:mt-0 ml-3 leading-tighter text-gray-600 text-base cursor-text bg-transparent"
                                            >
                                                Number of Bedrooms
                                            </label>
                                        </div>

                                        <div className="relative my-10">
                                            <input
                                                id="numberofbathroom"
                                                className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                                                type="number"
                                                ref={numberofbathroomInput}
                                                name="numberofbathroom"
                                                value={numberofbathroom}
                                                onChange={handleDetailsUser}
                                                placeholder=" "
                                            />
                                            <label
                                                htmlFor="number"
                                                className="label absolute md:mt-2 xs:mt-0 ml-3 leading-tighter text-gray-600 text-base cursor-text bg-transparent"
                                            >
                                                Number of Bathrooms
                                            </label>
                                        </div>

                                        <div className=" grid md:grid-cols-2 xs:grid-cols-1 md:gap-16 xs:gap-5  md:w-fit xs:full my-10">
                                            <div className="flex justify-center items-center flex-row">
                                                <input className="outline-none h-5 w-5 " type="radio" id="doctor" name="renting" value="" />
                                                <label className="ml-2" for="doctor">Furnished</label>
                                            </div>

                                            <div className="flex justify-center items-center flex-row">
                                                <input className="outline-none h-5 w-5 " type="radio" id="doctor" name="renting" value="" />
                                                <label className="ml-2" for="doctor">Unfurnished</label>
                                            </div>
                                        </div>

                                        <h1 className="font-normal text-2xl">Amenities</h1>
                                        <div className="flex items-center my-3">
                                            <input className="outline-none h-4 w-4 " type="checkbox" id="doctor" name="renting" value="" />
                                            <label className="ml-4 md:text-base xs:text-xs" for="doctor">Near Med School/Hospital (within 20 minutes by car)</label>
                                        </div>
                                        <div className="flex items-center my-3">
                                            <input className="outline-none h-4 w-4 " type="checkbox" id="doctor" name="renting" value="" />
                                            <label className="ml-4 md:text-base xs:text-xs" for="doctor"> Walkable to Public Transit/Shopping/Amenities</label>
                                        </div>
                                        <div className="flex items-center my-3">
                                            <input className="outline-none h-4 w-4 " type="checkbox" id="doctor" name="renting" value="" />
                                            <label className="ml-4 md:text-base xs:text-xs" for="doctor"> Video Virtual Tour Available</label>
                                        </div>
                                        <div className="flex items-center my-3">
                                            <input className="outline-none h-4 w-4 " type="checkbox" id="doctor" name="renting" value="" />
                                            <label className="ml-4 md:text-base xs:text-xs" for="doctor"> All Utilities included</label>
                                        </div>
                                        <div className="flex items-center my-3">
                                            <input className="outline-none h-4 w-4 " type="checkbox" id="doctor" name="renting" value="" />
                                            <label className="ml-4 md:text-base xs:text-xs" for="doctor">Some utilities included</label>
                                        </div>
                                        <div className="flex items-center my-3">
                                            <input className="outline-none h-4 w-4 " type="checkbox" id="doctor" name="renting" value="" />
                                            <label className="ml-4 md:text-base xs:text-xs" for="doctor">Gym/Fitness room</label>
                                        </div>
                                        <div className="flex items-center my-3">
                                            <input className="outline-none h-4 w-4 " type="checkbox" id="doctor" name="renting" value="" />
                                            <label className="ml-4 md:text-base xs:text-xs" for="doctor">Pool</label>
                                        </div>
                                        <div className="flex items-center my-3">
                                            <input className="outline-none h-4 w-4 " type="checkbox" id="doctor" name="renting" value="" />
                                            <label className="ml-4 md:text-base xs:text-xs" for="doctor">Pet friendly</label>
                                        </div>
                                        <div className="flex items-center my-3">
                                            <input className="outline-none h-4 w-4 " type="checkbox" id="doctor" name="renting" value="" />
                                            <label className="ml-4 md:text-base xs:text-xs" for="doctor">No pets allowed</label>
                                        </div>
                                        <div className="flex items-center my-3">
                                            <input className="outline-none h-4 w-4 " type="checkbox" id="doctor" name="renting" value="" />
                                            <label className="ml-4 md:text-base xs:text-xs" for="doctor">Available Parking (may or may not be included in rent)</label>
                                        </div>
                                        <div className="flex items-center my-3">
                                            <input className="outline-none h-4 w-4 " type="checkbox" id="doctor" name="renting" value="" />
                                            <label className="ml-4 md:text-base xs:text-xs" for="doctor">Indoor Parking (may or may not be included in rent)</label>
                                        </div>
                                        <div className="flex items-center my-3">
                                            <input className="outline-none h-4 w-4 " type="checkbox" id="doctor" name="renting" value="" />
                                            <label className="ml-4 md:text-base xs:text-xs" for="doctor">In-unit Laundry</label>
                                        </div>
                                        <div className="flex items-center my-3">
                                            <input className="outline-none h-4 w-4 " type="checkbox" id="doctor" name="renting" value="" />
                                            <label className="ml-4 md:text-base xs:text-xs" for="doctor">A/C</label>
                                        </div>
                                        <div className="flex items-center my-3">
                                            <input className="outline-none h-4 w-4 " type="checkbox" id="doctor" name="renting" value="" />
                                            <label className="ml-4 md:text-base xs:text-xs" for="doctor">Child friendly</label>
                                        </div>
                                        <div className="flex items-center my-3">
                                            <input className="outline-none h-4 w-4 " type="checkbox" id="doctor" name="renting" value="" />
                                            <label className="ml-4 md:text-base xs:text-xs" for="doctor">Dishwasher</label>
                                        </div>
                                        <div className="flex items-center my-3">
                                            <input className="outline-none h-4 w-4 " type="checkbox" id="doctor" name="renting" value="" />
                                            <label className="ml-4 md:text-base xs:text-xs" for="doctor">On Site Concierge 24 hours</label>
                                        </div>
                                        <div className="flex items-center my-3">
                                            <input className="outline-none h-4 w-4 " type="checkbox" id="doctor" name="renting" value="" />
                                            <label className="ml-4 md:text-base xs:text-xs" for="doctor">EV Charger on premises or nearby</label>
                                        </div>
                                        <div className="flex items-center my-3">
                                            <input className="outline-none h-4 w-4 " type="checkbox" id="doctor" name="renting" value="" />
                                            <label className="ml-4 md:text-base xs:text-xs" for="doctor">Landlord is a member of the medical community</label>
                                        </div>
                                        <div className="flex items-center my-3">
                                            <input className="outline-none h-4 w-4 " type="checkbox" id="doctor" name="renting" value="" />
                                            <label className="ml-4 md:text-base xs:text-xs" for="doctor">No smoking/vaping/cannabis</label>
                                        </div>
                                        <div className="flex items-center my-3">
                                            <input className="outline-none h-4 w-4 " type="checkbox" id="doctor" name="renting" value="" />
                                            <label className="ml-4 md:text-base xs:text-xs" for="doctor">Outdoor space/Balcony/Backyard</label>
                                        </div>
                                        <div className="flex items-center my-3">
                                            <input className="outline-none h-4 w-4 " type="checkbox" id="doctor" name="renting" value="" />
                                            <label className="ml-4 md:text-base xs:text-xs" for="doctor">Private Bath</label>
                                        </div>
                                        <div className="flex items-center my-3">
                                            <input className="outline-none h-4 w-4 " type="checkbox" id="doctor" name="renting" value="" />
                                            <label className="ml-4 md:text-base xs:text-xs" for="doctor">Shared Living Space</label>
                                        </div>
                                        <div className="flex items-center my-3">
                                            <input className="outline-none h-4 w-4 " type="checkbox" id="doctor" name="renting" value="" />
                                            <label className="ml-4 md:text-base xs:text-xs" for="doctor">Wheelchair accessible</label>
                                        </div>
                                        <div className="flex items-center my-3 mb-10">
                                            <input className="outline-none h-4 w-4 " type="checkbox" id="doctor" name="renting" value="" />
                                            <label className="ml-4 md:text-base xs:text-xs" for="doctor">Housing for Healthcare project</label>
                                        </div>

                                        <div className="relative my-0">
                                            <input
                                                id="licensenumber"
                                                className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                                                type="text"
                                                ref={licensenumberInput}
                                                name="licensenumber"
                                                value={licensenumber}
                                                onChange={handleDetailsUser}
                                                placeholder=" "
                                            />
                                            <label
                                                htmlFor="text"
                                                className="label absolute md:mt-2 xs:mt-0 ml-3 leading-tighter text-gray-600 text-base cursor-text bg-transparent"
                                            >
                                                Lincense Number
                                            </label>
                                        </div>
                                        <div className="mt-2 md:text-xs xs:text-[10px]">Many cities require landlord licensing. Check your local laws. We provide this field to post registration number.</div>


                                        <div className="bg-[#fff9e2] py-4 px-4 text-start text-[#c29c4b] md:text-base xs:text-xs my-10">
                                            MedsHousing will automatically select the nearest medical school and hospital to your location, but you can always change it later in your dashboard.
                                        </div>

                                        <div className="bg-[#fff9e2] py-4 px-4 text-start text-[#c29c4b] md:text-base xs:text-xs my-10">
                                            Do not post any links to outside web sites, phone numbers or email address for your own security and privacy. They will be removed.
                                        </div>

                                        <div
                                            className="md:mt-2 xs:mt-0 leading-tighter text-gray-900 text-base cursor-text bg-transparent my-3"
                                        >
                                            Description:
                                        </div>

                                        <div className="relative my-0">
                                            <textarea rows="8" cols="8" className="w-full px-6 border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"></textarea>
                                        </div>

                                        <div className="flex justify-between pb-10">
                                            <div className="flex justify-end z-10 relative mt-4  mr-3">
                                                <button
                                                    onClick={handleProviderThree}
                                                    className="flex justify-end items-center z-10 relative bg-third text-white md:text-sm rounded-lg md:py-3 md:px-16 xs:text-[15px] xs:py-3 xs:px-10"
                                                >
                                                    <span className="">Next</span>
                                                </button>
                                            </div>
                                            <div className="flex justify-end z-10 relative mt-4 ">
                                                <button
                                                    onClick={renderPreviousForm}
                                                    className="flex justify-end z-10 relative bg-rose-500 text-white md:text-sm rounded-lg md:py-3 md:px-16 xs:text-[15px] xs:py-3 xs:px-10"
                                                >
                                                    <span className="">Previous</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {(active > 3 && active <= 4) && (
                                    <div className="my-10">
                                        <div className="flex flex-col">
                                            <div className="text-center my-10 font-base md:text-3xl xs:text-xl"> PHOTOS</div>
                                        </div>

                                        <h1 className="md:text-base xs:text-sm text-center text-black font-mormal">
                                            Your current package allows you to upload up to  <b className="font-bold">5 pictures.</b>
                                        </h1>

                                        <div className="grid justify-between items-center py-2 md:grid-cols-1 xs:grid-cols-1 xs:gap-5 lg:gap-5">
                                            <div className="">
                                                <label htmlFor="avatar" className="block text-sm font-medium text-gray-700"></label>
                                                <label
                                                    htmlFor="file-input"
                                                    className="border-[2px] border-dashed px-10 py-10 mt-8 flex justify-center items-center border-third"
                                                >
                                                    <div className="flex flex-col">
                                                        <div className="my-4 text-2xl text-black font-semibold text-center">Drag & Drop Files here</div>
                                                        <span className="px-5 py-3 bg-blue-900 text-white rounded-lg bg-third cursor-pointer">

                                                            <div className="text-center text-white md:text-base xs:text-xs" >
                                                                Open the file browser
                                                            </div>
                                                        </span>

                                                    </div>


                                                    <span className="">
                                                        <input
                                                            type="file"
                                                            name="avatar"
                                                            id="file-input"
                                                            accept=".jpg,.jpeg,.png"
                                                            onChange={handleFileInputChange}
                                                            className="sr-only"
                                                            multiple
                                                        />
                                                    </span>
                                                </label>
                                            </div>

                                            <div className="grid md:grid-cols-5 xs:grid-cols-1 gap-2">
                                                {avatars.map((avatar, index) => (
                                                    <div key={index} className="flex items-center h-full bg-white rounded overflow-hidden p-2 border-dashed border-2 border-gray-300">
                                                        <div className="flex flex-row">
                                                            <span className="inline-block h-full w-full rounded overflow-hidden p-2">
                                                                <img
                                                                    src={avatar}
                                                                    alt={`avatar-${index}`}
                                                                    className="h-full w-full object-cover rounded"
                                                                />
                                                            </span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                        </div>


                                        <div className="flex justify-between pb-10">
                                            <div className="flex justify-end z-10 relative mt-4  mr-3">
                                                <button
                                                    onClick={handleProviderFour}
                                                    className="flex justify-end items-center z-10 relative bg-third text-white md:text-sm rounded-lg md:py-3 md:px-16 xs:text-[15px] xs:py-3 xs:px-10"
                                                >
                                                    <span className="">Next</span>
                                                </button>
                                            </div>
                                            <div className="flex justify-end z-10 relative mt-4 ">
                                                <button
                                                    onClick={renderPreviousForm}
                                                    className="flex justify-end z-10 relative bg-rose-500 text-white md:text-sm rounded-lg md:py-3 md:px-16 xs:text-[15px] xs:py-3 xs:px-10"
                                                >
                                                    <span className="">Previous</span>
                                                </button>
                                            </div>
                                        </div>



                                    </div>
                                )}

                                {(active > 4 && active <= 5) && (
                                    <div className="my-10">
                                        <div className="flex flex-col">
                                            <div className="text-center my-10 font-base md:text-3xl xs:text-xl"> AVAILABILITY FORM</div>
                                        </div>

                                        <div className="bg-[#fff9e2] py-4 px-4 text-start text-[#c29c4b] md:text-base xs:text-xs my-5">
                                            Hint: keep this calendar up to date to increase your contacts. (click a month to block a full month)
                                        </div>

                                        <div className="text-black py-4 px-4 text-start  md:text-base xs:text-xs my-2">
                                            You can synchronize the calendar of availability of your ad with one from another website (Airbnb, Home Away, Google Calendar, etc.).
                                        </div>

                                        <div className="text-black py-4 px-4 text-start  md:text-base xs:text-xs my-2">
                                            To do so, you must copy/paste the link of the calendar below. Once done, your calendar will be updated every night.
                                        </div>

                                        <div className="relative my-10">
                                            <input
                                                id="linkUrl"
                                                className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                                                type="text"
                                                ref={linkUrlInput}
                                                name="linkUrl"
                                                value={linkUrl}
                                                onChange={handleLinkUser}
                                                placeholder="Link with external calendar (URL)"
                                            />

                                        </div>

                                        <div className="flex items-center my-3">
                                            <div className=" border-[1px] border-gray-700 p-2 h-4 w-4 bg-white"></div>

                                            <div className="ml-4 text-gray-700" >
                                                Dates available
                                            </div>
                                        </div>

                                        <div className="flex items-center my-3">
                                            <div className=" border-[1px] border-gray-700 p-2 h-4 w-4 bg-sky-700"></div>

                                            <div className="ml-4 text-gray-700" >
                                                Dates NOT available
                                            </div>
                                        </div>

                                        <div className="mt-700">
                                            <Calendar />

                                        </div>





                                        <div className="flex justify-between pb-10">
                                            <div className="flex justify-end z-10 relative mt-4  mr-3">
                                                <button
                                                    onClick={handleProviderFive}
                                                    className="flex justify-end items-center z-10 relative bg-third text-white md:text-sm rounded-lg md:py-3 md:px-16 xs:text-[15px] xs:py-3 xs:px-10"
                                                >
                                                    <span className="">Next</span>
                                                </button>
                                            </div>
                                            <div className="flex justify-end z-10 relative mt-4 ">
                                                <button
                                                    onClick={renderPreviousForm}
                                                    className="flex justify-end z-10 relative bg-rose-500 text-white md:text-sm rounded-lg md:py-3 md:px-16 xs:text-[15px] xs:py-3 xs:px-10"
                                                >
                                                    <span className="">Previous</span>
                                                </button>
                                            </div>
                                        </div>



                                    </div>
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
