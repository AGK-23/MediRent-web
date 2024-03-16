import React from "react";
import axios from "axios";
import { useState, useRef, useEffect } from "react";
// import waitinRoom from "../../assets/images/waitinRoom.jpg";
import { Link } from "react-router-dom";
import { IoLogInOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import '../login/login.css';
import { TenantUser } from "../../components/EndPoints/url.jsx";
import { validateEmail } from "../../components/EndPoints/url.jsx";
import Spinner from "../../assets/svg/Spinner.svg"











const CreateTenant = () => {
    const navigate = useNavigate();
    const [selectedCity, setSelectedCity] = useState("");
    const [selectedStates, setSelectedStates] = useState("");
    const [selectedCountry, setSelectedCountry] = useState(''); // State to store the selected country
    // eslint-disable-next-line no-unused-vars
    const [selectedCities, setSelectedCities] = useState(''); // State to store the selected city
    const [isLoading, setIsLoading] = useState(true);

    const [userLoading, setUserLoading] = useState(false)

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



    const firstNameInput = useRef();
    const lastNameInput = useRef();
    const addressInput = useRef();
    const cityInput = useRef();
    const postalCodeInput = useRef();
    const phoneInput = useRef();
    const mobileNumberInput = useRef();
    const linkedInInput = useRef();
    const emailInput = useRef();
    const emailConfirmationInput = useRef();
    const passwordInput = useRef();
    const confirmPasswordInput = useRef();


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
        mobileNumber: "",
        linkedIn: "",
        functionOption: "",
        emailConfirmation: "",
        // rentingtype: "",
        // confirmEmail: "",
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
        mobileNumber,
        linkedIn,
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

        console.log("set form...", functionOption, "hair..", e.target.nextSibling.textContent.trim());
    };

    const handleReferenceChange = (e) => {
        setFormData(prevState => ({
            ...prevState,
            discoveryMethod: e.target.value,
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

    const [isToggle, setIsToggle] = useState(true);
    const [toToggle, setToToggle] = useState(true);
    const changeToggle = () => setIsToggle(!isToggle);
    const handleToggle = () => setToToggle(!toToggle);


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
                !mobileNumber ||
                !linkedIn ||
                !functionOption ||
                !emailConfirmation ||
                !discoveryMethod ||
                !functionOption
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

            // if (testFour === true && testThree === true && testTwo === true && testOne === true &&) {

            // }

            setUserLoading(true)

            console.log("all the user ...", formData);

            const response = await axios.post(`https://medirent-api.onrender.com/account/tenant-registration`,
                formData,
            );

            setUserLoading(false)

            console.log("tenant is rent..", response.data.data, "Loading..", isLoading);

            if (response.data.success === true) {
                toast.success("Tenant's account Created");
            }

            console.log("tenants account..", response.data.data);

            localStorage.setItem("token", JSON.stringify(response.data.data));

            localStorage.setItem("accessToken", JSON.stringify(response.data.data?.accessToken));

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

            console.log("test four...", testFour, "test Three...", testThree, "test two...", testTwo, "test one...", testOne)

        } catch (error) {
            toast.error("User creation Failed");
            console.log("Apparently the Message..", error);
            setUserLoading(false)
            // errRef.current.focus();
        }


        // navigate('/success/tenant/1')
        // toast.success("Tenant's account Successfully")
    };

    const [error, setError] = useState("");


    return (
        <div className="py-0 mt-32  bg-white">
            <div className="flex font-medium justify-between max-w-screen-xl mx-auto">
                <div
                    className="bg-white w-full h-screen bg-HomeImage bg-cover
                        bg-center flex justify-center lg:h-[50vh] md:h-[70vh] sm:h-[80vh] xs:h-[70vh]"
                >
                    <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-white text-4xl font-medium text-center">REGISTRATION PAGE</p>
                    </div>
                </div>
            </div>


            <div className=" bg-[#f2f2f2] md:flex-1 flex-col w-full  items-center relative z-10 flex font-medium justify-between max-w-screen-xl mx-auto">
                <div className="flex items-center justify-center lg:w-full md:w-full">
                    <div className="w-full flex flex-col p-0 max-w-4xl px-2">

                        <div className="w-full flex-1 mt-4">


                            <div className="my-10 text-center">
                                <h1 className="md:text-3xl xs:text-2xl text-center text-black font-medium">
                                    Create your tenant account and start contacting
                                </h1>
                                <h1 className="md:text-3xl xs:text-2xl mb-6 text-center text-black font-medium">
                                    Medirent landlords
                                </h1>

                                <div className="mt-7 font-normal">
                                    <p className="text-gray-800 text-center">
                                        Medirent.com is the premier website dedicated to helping the travelling medical professional
                                    </p>
                                    <p className="text-gray-800 text-center">
                                        find suitable accommodations during medical school, clerkship, internship, residency, fellowship,
                                    </p>
                                    <p className="text-gray-800 text-center">
                                        locums and work placements.
                                    </p>

                                </div>
                            </div>

                            <div className="">
                                <div className="">

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
                                                        value={province}
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
                                            className="label absolute md:mt-2 xs:mt-0 ml-3 leading-tighter text-gray-600 text-base cursor-text bg-transparent"
                                        >
                                            Phone
                                        </label>
                                    </div>

                                    <div className="bg-black py-4 px-4 text-center text-white w-full h-full justify-center items-center flex md:flex-row xs:flex-col gap-5">
                                        <div className="w-full h-full justify-center items-center flex md:flex-row xs:flex-col gap-5">
                                            <div className="h-full justify-center items-center flex m-top-0.3vw m-bottom-9vw m-right-3vw bg-cover bg-center bg-no-repeat w-22vw h-25vw">
                                                <IoIosNotificationsOutline className="w-20 h-20" />
                                            </div>
                                            <div>
                                                <div className="md:text-2xl xs:text-lg font-bold">Looking for something in particular?</div>
                                                <div className="flex">
                                                    <div className=" border-[3px] rounded border-sky-500 p-2 h-4 w-4 mr-5"></div>
                                                    <div className="md:text-base xs:text-xs">
                                                        Check this box to create a want ad and get notifications when a new listing fits what you're looking for!
                                                    </div>
                                                </div>

                                            </div>
                                        </div>


                                    </div>


                                    <div className="relative my-10">
                                        <input
                                            id="mobileNumber"
                                            className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                                            type="text"
                                            ref={mobileNumberInput}
                                            name="mobileNumber"
                                            value={mobileNumber}
                                            onChange={handleInputUser}
                                            placeholder=" "

                                        />
                                        <label
                                            htmlFor="text"
                                            className="label absolute mt-2 ml-3 leading-tighter text-gray-600 text-base cursor-text"

                                        >Mobile Number</label>
                                    </div>

                                    <div className="bg-black py-4 px-4 text-center text-white md:text-base xs:text-xs">
                                        Please fill in medical school and/or hospital (as applicable to your situation) in order to activate your account.

                                    </div>

                                    <div className="relative my-10">
                                        <input
                                            id="linkedIn"
                                            className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                                            type="text"
                                            ref={linkedInInput}
                                            name="linkedIn"
                                            value={linkedIn}
                                            onChange={handleInputUser}
                                            placeholder=" "

                                        />
                                        <label
                                            htmlFor="text"
                                            className="label absolute mt-2 ml-3 leading-tighter text-gray-600 text-base cursor-text"

                                        >LinkedIn Account</label>
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

                                    <div className="text-left text-gray-700">
                                        <h1 className="mb-0 p-0 text-2xl text-black">Functions</h1>


                                        {/* <div className="rounded-full border-[2px] border-black p-2 h-4 w-4"></div> */}
                                        {/* <div className="flex items-center my-7">

                                            <div className="flex items-center">
                                                <input
                                                    type="radio"
                                                    id="radioButton"
                                                    name="radioButton"
                                                    className="h-5 w-5 text-third border-gray-500 focus:ring-sky-600"
                                                />
                                                <label htmlFor="radioButton" className="ml-4">
                                                    Medical Doctor with property/room for rent
                                                </label>
                                            </div>
                                        </div> */}

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
                                            <label htmlFor="radioButton" className="ml-4 md:text-base xs:text-xs w-full">
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
                                            <label htmlFor="radioButton" className="ml-4 md:text-base xs:text-xs w-full">
                                                Medical Community landlord
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
                                            <label htmlFor="radioButton" className="ml-4 md:text-base xs:text-xs w-full">
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
                                            <label htmlFor="radioButton" className="ml-4 md:text-base xs:text-xs w-full">
                                                Others
                                            </label>
                                        </div>

                                    </div>


                                    <div className="group relative my-0">
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

                                    <div className="flex justify-between flex-wrap">
                                        <div className="ml-auto mt-2 w-min">
                                            <div className="password-strength">
                                                <div className="strength-bars flex items-center justify-center gap-1">
                                                    <div className={`${testOne ? "bg-[#dc6969]" : "bg-[#e0e0e0]"} bar bar--weak filled h-[4px] w-6 rounded-l block`}>
                                                    </div>

                                                    <div className={`${testTwo ? "bg-[#ffe48c]" : "bg-[#e0e0e0]"} bar bar--normal filled h-[4px] w-6 rounded-l block`}>
                                                    </div>

                                                    <div className={`${testThree ? "bg-[#46c28e]" : "bg-[#e0e0e0]"} bar bar--strong filled h-[4px] w-6 rounded-l block`}>
                                                    </div>

                                                    <div className={`${testFour ? "bg-[#208058]" : "bg-[#e0e0e0]"} bar bar--stronger filled h-[4px] w-6 rounded-l block`}>
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
                                            type={`${toToggle ? "password" : "text"}`}
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
                                            onClick={handleToggle}
                                            style={{
                                                position: "absolute",
                                                width: "30px",
                                                right: "5px",
                                                bottom: "12px",
                                                lineHeight: "20px",
                                            }}
                                        >
                                            {toToggle ? (
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
                                            className="outline-none mt-1 p-4 w-full border border-gray-300 rounded "
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
                                            {/* <button
                                                onClick={handleCreateTenantUser}
                                                className="flex justify-end items-center z-10 relative bg-third text-white md:text-sm rounded-lg md:py-3 md:px-16 xs:text-[15px] xs:py-3 xs:px-10"
                                            >
                                                <span className="">Go</span>
                                            </button> */}
                                            <button
                                                onClick={handleCreateTenantUser}
                                                className="flex justify-end items-center z-10 relative bg-third text-white md:text-sm rounded-lg md:py-3 md:px-16 xs:text-[15px] xs:py-3 xs:px-6"
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CreateTenant;
