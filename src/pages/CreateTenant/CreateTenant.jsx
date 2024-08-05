// import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

// import { IoIosNotificationsOutline } from "react-icons/io";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import '../login/login.css';

import { validateEmail } from "../../components/EndPoints/url.jsx";

import Spinner from "../../assets/svg/Spinner.svg"

import { axiosPrivate } from "../../api/axios.jsx";

import PhotoTenants from "../../assets/svg/photo-tenants.svg";
import CustomInputs from "../../components/Custom-components/CustomInputs.jsx";
import CustomSelect from "../../components/Custom-components/Custom-Select.jsx";
// import Google from "../../assets/svg/google.svg";
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

const CreateTenant = () => {
    const navigate = useNavigate();

    const [signInState, setSignInState] = useState(1);

    const [userGoogle, setUserGoogle] = useState(null);

    const [selectedCity, setSelectedCity] = useState("");
    // eslint-disable-next-line no-unused-vars
    const [selectedStates, setSelectedStates] = useState("");
    // eslint-disable-next-line no-unused-vars
    const [selectedCountry, setSelectedCountry] = useState(''); // State to store the selected country
    // eslint-disable-next-line no-unused-vars
    const [selectedCities, setSelectedCities] = useState(''); // State to store the selected city
    const [isLoading, setIsLoading] = useState(true);
    // eslint-disable-next-line no-unused-vars
    const [allCities, setAllCities] = useState([]);

    const [userLoading, setUserLoading] = useState(false)

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

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        address: "",
        city: "",
        country: "",
        province: "",
        postalCode: "",
        phone: "",
        functionOption: "",
        emailConfirmation: "",
        medicalInstitution: "University of Alberta Faculty of Medicine and Dentistry (15) University of Calgary Cumming School of Medicine (22)",
        hospital: "Downstate Medical College of Medicine",
        discoveryMethod: "",
        receiveNewsletter: false,
        role: "tenants",
    });

    var {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        address,
        city,
        country,
        province,
        postalCode,
        phone,
        functionOption,
        emailConfirmation,
        discoveryMethod,
        receiveNewsletter,
    } = formData;

    const handleCheckboxChange = (e) => {
        const { id, checked } = e.target;
        setFormData({
            ...formData,
            [id]: checked,
        });
    };

    const handleRadioChange = (e) => {
        setFormData(prevState => ({
            ...prevState,
            functionOption: e.target.nextSibling.textContent.trim(),
        }));

        // console.log("set form...", functionOption, "hair..", e.target.nextSibling.textContent.trim());
    };

    const handleReferenceChange = (value) => {
        setFormData(prevState => ({
            ...prevState,
            discoveryMethod: value,
        }));
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
                setSelectedStates(response?.data?.data);
                setIsLoading(false);
                // console.log("state is Loading..", response.data?.data);

            } catch (error) {
                console.error(error);
            }
        }
        fetchStateLogData();
    }, []);

    const handleCityChange = (value) => {
        setSelectedCities(value);
        let selectedValue = value === "Select a city" ? null : value;
        setFormData(prevFormData => ({
            ...prevFormData,
            province: selectedValue,
            country: "Canada"
        }));
    };

    // eslint-disable-next-line no-unused-vars
    const handleCountryChange = (value) => {
        setSelectedCountry(value);

        // setallCities(selectedCity.find((country) => country.name === selectedCountry)
        setSelectedCities(''); // Clear the selected city when the country changes
        let selectedValue = value === "Select a country" ? null : value;
        setFormData(prevFormData => ({
            ...prevFormData,
            country: selectedValue
        }));

        const selectedCountryObj = selectedCity?.find((country) => country.name === value);

        // console.log("first code...", selectedCity, selectedCountry, value)
        if (selectedCountryObj) {
            setAllCities(selectedCountryObj.states);
            // console.log("second code...", selectedCountryObj.states, allCities)
        } else {
            setAllCities([]);
        }
    };

    // const handleInputUser = (e) => setFormData(
    //     {
    //         ...formData,
    //         [e.target.name]: e.target.value
    //     }
    // );

    // const handleGoogleLogin = (credentialResponse) => {
    //     // Decode the JWT token to get the user's profile information
    //     const userProfile = JSON.parse(atob(credentialResponse.credential.split('.')[1]));


    //     setUserGoogle(userProfile)
    // };

    // const handleGoogleLogout = () => {
    //     setUserGoogle(null);
    // };

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

    const [isToggle, setIsToggle] = useState(true);
    const changeToggle = () => setIsToggle(!isToggle);

    // const [passwordToggle, setPasswordToggle] = useState(true);
    const [confirmPasswordToggle, setConfirmPasswordToggle] = useState(true);
    // const changePasswordToggle = () => setPasswordToggle(!passwordToggle);
    const changeConfirmPasswordToggle = () => setConfirmPasswordToggle(!confirmPasswordToggle);

    const handleCreateTenantUser = async (e) => {
        e.preventDefault();
        try {
            // TESTING FOR EMPTY STRING
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

            // TESTING FOR PASSWORD MATCHING WITH CONFIRMPASSWORD
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

            setUserLoading(true)

            console.log("all the user ...", formData);

            // const response = await axios.post(`https://medirent-api.onrender.com/account/tenant-registration`,
            //     formData,
            // );

            const response = await axiosPrivate.post("/account/tenant-registration", formData);

            setUserLoading(false)

            console.log("tenant is rent..", response.data, "Loading..", isLoading);

            if (response?.data?.Success === true) {
                toast.success("Tenant's account Created");
            }

            console.log("tenants account..", response.data);

            localStorage.setItem("token", JSON.stringify(response?.data));

            localStorage.setItem("accessToken", JSON.stringify(response.data?.Data?.AccessToken));

            // Retrieve the stringified object from local storage
            const storedToken = localStorage.getItem('token');


            // Parse the stringified object back to its original form
            const userDetails = JSON.parse(storedToken);

            console.log("account item data..", storedToken, userDetails);

            if (userLoading === false) {
                navigate('/success/tenant/1')
            }

            // await TenantUser(formData);

            // console.log("all this navigate..", formData)

            // console.log("test four...", testFour, "test Three...", testThree, "test two...", testTwo, "test one...", testOne)

        } catch (error) {
            toast.error("User creation Failed");
            // console.log("Apparently the Message..", error);
            setUserLoading(false)
            // errRef.current.focus();
        }


        // navigate('/success/tenant/1')
        // toast.success("Tenant's account Successfully")
    };

    // const [error, setError] = useState("");

    return (
        <div className="py-0 md:mt-16 xs:mt-[4rem] bg-white grid md:grid-cols-4 xs:grid-cols-1">
            {/* <div className="flex font-medium justify-between max-w-screen-xl mx-auto">
                <div
                    className="bg-white w-full h-screen bg-HomeImage bg-cover
                        bg-center flex justify-center lg:h-[50vh] md:h-[70vh] sm:h-[80vh] xs:h-[70vh]"
                >
                    <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-white text-4xl font-medium text-center">REGISTRATION PAGE</p>
                    </div>
                </div>
            </div> */}

            <div className="md:col-1 xs:col bg-[#FCD3CD] md:flex xs:hidden flex-col ">

                <div className="my-20 px-5">
                    <div className="text-[#0E0C3D] font-semibold text-[24px] mb-5">Create your tenant account and start contacting Medirent landlords</div>
                    <div className="text-black font-normal text-[16px]">Sign up to discover a variety of verified properties tailored for healthcare professionals. Provide your details below to start your journey towards finding a comfortable and convenient home that meets your unique needs.</div>
                </div>

                <div className="px-10">
                    <div>
                        <img alt="" src={PhotoTenants} className="text-[1px] text-white w-full h-full" />
                    </div>
                </div>

            </div>


            <div className="md:col-span-3 xs:col bg-white  md:mt-20 xs:mt-10 flex-col w-full items-center relative z-10 flex font-medium justify-between max-w-screen-xl mx-auto md:px-2 xs:px-0">


                <div className="flex items-center justify-center lg:w-full md:w-full">
                    <div className="w-full flex flex-col p-0 max-w-4xl px-2">

                        <div className="w-full flex-1 mt-0">
                            <div className="">
                                <div className="">
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

                                    {/* <div className="text-center my-6 font-base md:text-3xl xs:text-xl"> Contact information</div> */}

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
                                                                firstName: value
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
                                                                lastName: value
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
                                                                email: value
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
                                                        <CustomInputs
                                                            id="address"
                                                            type='text'
                                                            required
                                                            // setValue={setFormData}
                                                            value={address}
                                                            showRequirement={true}
                                                            onChange={(value) => setFormData(prevFormData => ({
                                                                ...prevFormData,
                                                                address: value,
                                                                country: "Canada"
                                                            }))}
                                                            label={'Address'}
                                                            className='px-0 mb-[5px] md:w-full xs:w-full text-[16px]'
                                                        />
                                                    </div>
                                                </div>

                                                <div className="flex md:flex-row xs:flex-col gap-10 my-10">
                                                    <div className={`form-group flex w-[100%] text-[1rem] my-0`}>

                                                        {/* <CustomSelect
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
                                                        /> */}
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
                                                    <div className={`form-group flex w-[100%] text-[1rem] my-0`}>
                                                        <CustomSelect
                                                            wrapperClass=' !h-[58px] !w-full !px-[12px]'
                                                            labelClass=' text-black w-full text-gray-500'
                                                            optionsClass='!text-[0.875rem] !h-[48px] !w-[100%] !text-black'
                                                            optionWrapperClass=' w-[100%] !w-full border-[1px] shadow-lg border-gray-200 xl:left-[0px] !left-[0px] !h-[400px] !bottom-[-410px] overflow-y-auto '
                                                            required={false}
                                                            label='Select a state'
                                                            setSelected={handleCityChange}
                                                            selected={province}
                                                            options={states}
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

                                                <div className="text-left text-gray-700">
                                                    <h1 className="mb-0 p-0 text-2xl text-black">Functions</h1>

                                                    <div className="flex md:flex-row xs:flex-col md:gap-10 xs:gap-0 md:my-10 xs:my-0">
                                                        <div>
                                                            <div className="flex items-center my-7">
                                                                <input
                                                                    type="radio"
                                                                    id="radioButton"
                                                                    name="radioButton"
                                                                    className="h-6 w-6  text-third border-gray-500 focus:ring-sky-600"
                                                                    onClick={handleRadioChange}
                                                                />
                                                                <label htmlFor="radioButton" className="ml-4 md:text-base xs:text-xs w-full text-[#717171]">
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
                                                                <label htmlFor="radioButton" className="text-[#717171] ml-4 md:text-base xs:text-xs w-full">
                                                                    Nurse, Physician Assistant or Nurse Practitioner
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
                                                                <label htmlFor="radioButton" className="text-[#717171] ml-4 md:text-base xs:text-xs w-full">
                                                                    Allied Healthcare Professional
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
                                                                <label htmlFor="radioButton" className="text-[#717171] ml-4 md:text-base xs:text-xs w-full">
                                                                    Medical Community landlord
                                                                </label>
                                                            </div>

                                                        </div>

                                                        <div>
                                                            <div className="flex items-center md:my-7 xs:my-0">
                                                                <input
                                                                    type="radio"
                                                                    id="radioButton"
                                                                    name="radioButton"
                                                                    className="h-6 w-6 text-third border-gray-500 focus:ring-sky-600"
                                                                    onClick={handleRadioChange}
                                                                />
                                                                <label htmlFor="radioButton" className="text-[#717171] ml-4 md:text-base xs:text-xs w-full">
                                                                    Traveling Nurse
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
                                                                <label htmlFor="radioButton" className="text-[#717171] ml-4 md:text-base xs:text-xs w-full">
                                                                    Housing for Healthcare program
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
                                                                <label htmlFor="radioButton" className="text-[#717171] ml-4 md:text-base xs:text-xs w-full">
                                                                    Others
                                                                </label>
                                                            </div>

                                                        </div>
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

                                                <div className="flex justify-between  pb-10">
                                                    <div className="flex justify-end z-10 relative mt-4 ">

                                                        <button
                                                            onClick={handleCreateTenantUser}
                                                            className="flex justify-end items-center z-10 relative bg-[#F97262] text-white md:text-sm rounded-full md:py-3 md:px-12 xs:text-[15px] xs:py-1 xs:px-8"
                                                            disabled={userLoading} // Disable the button when userLoading is true
                                                        >
                                                            {userLoading ? ( // Display spinner if userLoading is true
                                                                <div className="flex items-center px-6">
                                                                    <div>
                                                                        <img alt="" src={Spinner} className="text-[1px] text-white" />
                                                                    </div>

                                                                </div>
                                                            ) : (
                                                                <span className="">Go</span> // Show the "Submit" text when isLoading is false
                                                            )}
                                                        </button>
                                                    </div>

                                                </div>

                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CreateTenant;
