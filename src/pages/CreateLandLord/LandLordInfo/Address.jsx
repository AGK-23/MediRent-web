/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from 'react'
import axios from "axios";

import { useState, useEffect } from "react";
// import { FaCircleInfo } from "react-icons/fa6";
import { toast } from "react-toastify";
import CustomInputs from "../../../components/Custom-components/CustomInputs";
import CustomSelect from "../../../components/Custom-components/Custom-Select";



const Address = ({ active, setActive, housingData, setHousingData }) => {


    // const listingTitleInput = useRef();
    // const addressInput = useRef();
    // const cityInput = useRef();
    // const postalCodeInput = useRef();
    // const phoneInput = useRef();
    // const countryInput = useRef();
    // const provinceInput = useRef();
    // const promotionCodeInput = useRef();


    var {
        listingTitle,
        address,
        city,
        postalCode,
        // phone,
        country,
        province,
       
    } = housingData;

    const handleCheckAddress = () => {
        if (
            !listingTitle ||
            !address ||
            !city ||
            !country ||
            !postalCode ||
            !province
        ) {
            toast.warning('Please fill in all required fields.');
            return;
        }
        setActive(4)

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
    const [selectedStates, setSelectedStates] = useState("");
    const [selectedCountry, setSelectedCountry] = useState(''); // State to store the selected country
    // eslint-disable-next-line no-unused-vars
    const [selectedCities, setSelectedCities] = useState(''); // State to store the selected city
    const [isLoading, setIsLoading] = useState(true);
    const [allCities, setAllCities] = useState([]);

    // const handleHousingUser = (e) => setHousingData(
    //     {
    //         ...housingData,
    //         [e.target.name]: e.target.value
    //     }
    // );

    const handleCityChange = (value) => {
        setSelectedCities(value);
        let selectedValue = value === "Select a city" ? null : value;
        setHousingData(prevHousingData => ({
            ...prevHousingData,
            province: selectedValue
        }));
    };

    const handleCountryChange = (value) => {
        setSelectedCountry(value);

        // setallCities(selectedCity.find((country) => country.name === selectedCountry)
        setSelectedCities(''); // Clear the selected city when the country changes
        let selectedValue = value === "Select a country" ? null : value;
        setHousingData(prevHousingData => ({
            ...prevHousingData,
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

    // const [chosenBox, setChosenBox] = useState(2);

    // const handleChoose = (boxNumber) => {
    //     setChosenBox(boxNumber);
    //     // Do not call onNextboX here
    // };

    // const isBoxChosen = (boxNumber) => {
    //     return chosenBox === boxNumber;
    // };

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





    return (
        <div>
            <div className="my-0">
                {/* <div className="flex flex-col ">
                    <div className="text-center my-6 font-base md:text-3xl xs:text-xl"> Select your Package</div>

                    <div className="grid md:grid-cols-3 xs:grid-cols-1 gap-10  md:mx-10 xs:mx-3">
                        
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
                                    disabled
                                >
                                    {isBoxChosen(1) ? 'Selected' : 'Choose'}
                                </button>

                            </div>
                        </div>

                        
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
                                
                                <div className="text-2xl text-third w-full  float-left flex justify-end"><FaCircleInfo /></div>
                                <div className={`font-bold w-full  ${isBoxChosen(3) ? 'text-third' : 'text-gray-500'
                                    }`}>MedsBasic Monthly</div>
                                <div className="text-gray-700 text-2xl my-2 font-bold">$19.00 <sub>/Month</sub></div>

                                <button
                                    className={`choose-btn border-3 rounded p-2 mt-4 ${isBoxChosen(3) ? 'bg-third text-white' : 'bg-green-500 text-white'
                                        }`}
                                    onClick={() => onNextBox()}
                                    disabled
                                >
                                    {isBoxChosen(3) ? 'Selected' : 'Choose'}
                                </button>

                            </div>
                        </div>

                    </div>
                </div> */}

                <div className="mt-0 text-start">
                    <h1 className="md:text-[24px] xs:text-[20px] text-start text-black font-semibold">
                        Confirm Your Property Location
                    </h1>

                    <div className="mt-1 font-normal">
                        <p className="text-[#717171] text-start text-[12px]">
                            Please provide the exact address of your property to help tenants find it easily.
                        </p>
                    </div>
                </div>

                <div className="flex md:flex-row xs:flex-col gap-5 my-5">
                    <div className={`form-group flex w-[100%] text-[.8rem] my-0 font-semibold`}>
                        Property address
                    </div>

                    <div className={`form-group flex w-[100%] text-[.8rem] my-0 text-[#717171] text-end md:justify-end xs:justify-start`}>
                        <span className="text-red-500 mr-1">*</span> indicates required field
                    </div>
                </div>

                <div className="flex md:flex-row xs:flex-col gap-10 my-5">
                    <div className={`form-group flex w-[100%] text-[1rem] my-0`}>
                        <CustomInputs
                            id="listingTitle"
                            type='text'
                            required
                            // setValue={setFormData}
                            value={listingTitle}
                            showRequirement={true}
                            onChange={(value) => setHousingData(prevHousingData => ({
                                ...prevHousingData,
                                listingTitle: value
                            }))}
                            label={'Listing Title'}
                            className='px-0 mb-[5px] md:w-full xs:w-full text-[16px]'
                        />
                    </div>

                    <div className={`form-group flex w-[100%] text-[1rem] my-0`}>
                        <CustomSelect
                            wrapperClass=' !h-[58px] !w-full !px-[12px]'
                            labelClass='w-full text-[#b0afb0]'
                            optionsClass='!text-[0.875rem] !h-[58px] !w-[100%] !text-black'
                            optionWrapperClass=' w-[100%] !w-full border-[1px] shadow-lg border-gray-200 xl:left-[0px] !left-[0px] !h-[400px] !bottom-[-410px] overflow-y-auto '
                            required={false}
                            label='Select a Country'
                            setSelected={handleCountryChange}
                            selected={country}
                            options={selectedCity}
                            otherOptions={true}
                        />
                    </div>
                </div>

                <div className="flex md:flex-row xs:flex-col gap-10 my-10">
                    <div className={`form-group flex w-[100%] text-[1rem] my-0`}>
                        <CustomSelect
                            wrapperClass='!h-[58px] !w-full !px-[12px]'
                            labelClass='w-full text-[#b0afb0]'
                            optionsClass='!text-[0.875rem] !h-[48px] !w-[100%] !text-black'
                            optionWrapperClass=' w-[100%] !w-full border-[1px] shadow-lg border-gray-200 xl:left-[0px] !left-[0px] !h-[400px] !bottom-[-410px] overflow-y-auto '
                            required={false}
                            label='Select a state'
                            setSelected={handleCityChange}
                            selected={province}
                            options={allCities}
                            otherOptions={true}
                        />
                    </div>
                    <div className={`form-group flex w-[100%] text-[1rem] my-0`}>
                        <CustomInputs
                            id="city"
                            type='text'
                            required
                            showRequirement={true}
                            // setValue={setFormData}
                            value={city}
                            onChange={(value) => setHousingData(prevHousingData => ({
                                ...prevHousingData,
                                city: value
                            }))}
                            label={'City'}
                            className='px-0 mb-[5px] md:w-full xs:w-full text-[16px]'
                        />
                    </div>

                </div>

                <div className="flex md:flex-row xs:flex-col gap-10 my-10">
                    <div className={`form-group flex w-[100%] text-[1rem] my-0`}>
                        <CustomInputs
                            id="postalCode"
                            type='text'
                            required
                            showRequirement={true}
                            // setValue={setFormData}
                            value={postalCode}
                            onChange={(value) => setHousingData(prevHousingData => ({
                                ...prevHousingData,
                                postalCode: value
                            }))}
                            label={'Postal Code'}
                            className='px-0 mb-[5px] md:w-full xs:w-full text-[16px]'
                        />
                    </div>
                    <div className={`form-group flex w-[100%] text-[1rem] my-0`}>
                        <CustomInputs
                            id="address"
                            type='text'
                            required
                            showRequirement={true}
                            // setValue={setFormData}
                            value={address}
                            onChange={(value) => setHousingData(prevHousingData => ({
                                ...prevHousingData,
                                address: value
                            }))}
                            label={'Address'}
                            className='px-0 mb-[5px] md:w-full xs:w-full text-[16px]'
                        />
                    </div>
                </div>

                {/* <div className="flex md:flex-row xs:flex-col gap-10 my-10">
                    <div className={`form-group flex w-[100%] text-[1rem] my-0`}>
                        <CustomInputs
                            id="phone"
                            type='text'
                            required
                            showRequirement={true}
                            
                            value={phone}
                            onChange={(value) => setHousingData(prevHousingData => ({
                                ...prevHousingData,
                                phone: value
                            }))}
                            label={'Phone'}
                            className='px-0 mb-[5px] md:w-[370px] xs:w-full text-[16px]'
                        />
                    </div>
                    
                </div> */}

                <div className="flex justify-end pb-10 w-full  gap-2">
                    <div className="flex justify-end z-10 relative mt-4">
                        <button
                            onClick={renderPreviousForm}
                            className="flex justify-end z-10 relative bg-white border-[1px] border-gray-400 text-gray-400 md:text-sm rounded-full md:py-3 md:px-8 xs:text-[15px] xs:py-1 xs:px-8"
                        >
                            <span className="">Previous</span>
                        </button>
                    </div>
                    <div className="flex justify-end z-10 relative mt-4 ">
                        <button
                            onClick={handleProviderTwo}
                            className="flex justify-end items-center z-10 relative bg-[#F97262] text-white md:text-sm rounded-full md:py-3 md:px-12 xs:text-[15px] xs:py-1 xs:px-8"
                        >
                            <span className="">Next</span>
                        </button>
                    </div>
                </div>
                


            </div>
        </div>
    )
}

export default Address