import React from 'react'
import axios from "axios";

import { useState, useRef, useEffect } from "react";
import { FaCircleInfo } from "react-icons/fa6";
import { toast } from "react-toastify";



const AddressLandlord = ({ active, setActive, housingData, setHousingData }) => {


    const listingTitleInput = useRef();
    const addressInput = useRef();
    const cityInput = useRef();
    const postalCodeInput = useRef();
    const phoneInput = useRef();
    // const countryInput = useRef();
    // const provinceInput = useRef();
    const promotionCodeInput = useRef();


    var {
        listingTitle,
        address,
        city,
        postalCode,
        phone,
        country,
        province,
        promotionCode,
    } = housingData;

    const handleCheckAddress = () => {
        if (
            !listingTitle ||
            !address ||
            !city ||
            !country ||
            !postalCode ||
            !phone ||
            !province
        ) {
            toast.warning('Please fill in all required fields.');
            return;
        }
        setActive(2)

    };

    const handleProviderTwo = () => {
        handleCheckAddress()
        console.log("all the hosing data...", housingData);
        // setActive(3);
    };

    const renderPreviousForm = () => {
        console.log("all the prevoius data...", housingData);
        setActive(active - 1);
    };



    const [selectedCity, setSelectedCity] = useState("");
    // const [selectedStates, setSelectedStates] = useState("");
    const [selectedCountry, setSelectedCountry] = useState(''); // State to store the selected country
    // eslint-disable-next-line no-unused-vars
    const [selectedCities, setSelectedCities] = useState(''); // State to store the selected city
    const [isLoading, setIsLoading] = useState(true);





    const handleHousingUser = (e) => setHousingData(
        {
            ...housingData,
            [e.target.name]: e.target.value
        }
    );


    const handleCityHousingChange = (event) => {
        setSelectedCities(event.target.value);
        let selectedValue = event.target.value === "Select a city" ? null : event.target.value;
        setHousingData(prevHousingData => ({
            ...prevHousingData,
            province: selectedValue
        }));
    };

    const handleCountryHousingChange = (event) => {
        // setSelectedCities(event.target.value);
        setSelectedCountry(event.target.value);
        setSelectedCities(''); // Clear the selected city when the country changes
        let selectedValue = event.target.value === "Select a country" ? null : event.target.value;
        setHousingData(prevHousingData => ({
            ...prevHousingData,
            country: selectedValue
        }));
    };

    const [chosenBox, setChosenBox] = useState(2);

    const handleChoose = (boxNumber) => {
        setChosenBox(boxNumber);
        // Do not call onNextboX here
    };

    const isBoxChosen = (boxNumber) => {
        return chosenBox === boxNumber;
    };

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
                console.log("state is Loading..", response.data?.data, isLoading);

            } catch (error) {
                console.error(error);
            }
        }
        fetchStateLogData();
    }, [isLoading]);





    return (
        <div>
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
                                    // onClick={() => onNextBox()}
                                    disabled
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
                                    // onClick={() => onNextBox()}
                                    disabled
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
                                    // onClick={() => onNextBox()}
                                    disabled
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
                            id="listingTitle"
                            className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                            type="text"
                            ref={listingTitleInput}
                            name="listingTitle"
                            value={listingTitle}
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
                            id="address"
                            className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                            type="text"
                            ref={addressInput}
                            name="address"
                            value={address}
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
                                        onChange={handleCityHousingChange}
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

                    <div className="relative my-10 md:mx-0 xs:mx-3">
                        <input
                            id="city"
                            className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                            type="text"
                            ref={cityInput}
                            name="city"
                            value={city}
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
                            id="postalCode"
                            className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                            type="text"
                            ref={postalCodeInput}
                            name="postalCode"
                            value={postalCode}
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
                            id="phone"
                            className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                            type="text"

                            ref={phoneInput}
                            name="phone"
                            value={phone}
                            onChange={handleHousingUser}
                            placeholder=" "
                        />
                        <label
                            htmlFor="text"
                            className="label absolute md:mt-2 xs:mt-0 ml-3 leading-tighter text-gray-600 text-base cursor-text bg-transparent"
                        >
                            Phone Number
                        </label>
                    </div>

                    <div className="my-5 md:text-base xs:text-xs md:mx-0 xs:mx-3">Don't miss any tenant request! Add your cell number here to receive text messages when a tenant reaches out!</div>

                    <div className="px-10 py-3 bg-third rounded-lg w-fit text-white md:text-base xs:text-xs md:mx-0 xs:mx-3">Upgrade to Medirent Gold to access this feature</div>

                    <div className="my-5 md:text-base xs:text-xs md:mx-0 xs:mx-3">Enter your promo code below: </div>

                    <div className="relative my-5 md:mx-0 xs:mx-3">
                        <input
                            id="promotionCode"
                            className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                            type="text"
                            ref={promotionCodeInput}
                            name="promotionCode"
                            value={promotionCode}
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
        </div>
    )
}

export default AddressLandlord;