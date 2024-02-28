import React, { useState, useRef, useEffect } from "react";
import StepIndicator from "./StepIndicator";
import CountrySelect from "./CountrySelect";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import waitinRoom from "../assets/images/waitinRoom.jpg";
import './SignUp.css'
import axios from "axios";

const SignUp = ({ currentStep, onNextStep, onPrevStep }) => {
  const [isFocused, setIsFocused] = useState(false);
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

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  }

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


    rentingtype: "",
    confirmEmail: "",
    country: "",
    province: "",
    discoveryMethod: "Facebook/socialmedia",
    receiveNewsletter: false,
  });

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


  } = formData;

  const [selectedFunction, setSelectedFunction] = useState("");

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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleInputUser = (e) => setFormData(
    {
      ...formData,
      [e.target.name]: e.target.value
    }
  );

  const handleFunctionChange = (event) => {
    setSelectedFunction(event.target.value);
  };

  const handleCountrySelect = (selectedCountry) => {
    setFormData((prevData) => ({
      ...prevData,
      country: selectedCountry.value,
    }));
  };

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

  return (
    <div className="">
      {currentStep !== 6 && (
        <div className="py-0 px-50 font-sans mt-56 bg-black ">
          <div className="">
            <div className="relative">
              <img
                src={waitinRoom}
                alt="firstImage"
                className="w-full h-80 object-cover mt-20"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black opacity-70">
                <p className="text-white text-4xl font-semibold">
                  JOIN THE MEDIRENT COMMUNITY!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="px-24 font-sans">
        {/* <StepIndicator
          currentStep={currentStep}
          onNext={onNextStep}
          onBack={onPrevStep}
        /> */}

        <div
          className={`registration-page ${currentStep === 1 ? "active" : ""} `}
          style={{ display: currentStep === 1 ? "block" : "none" }}
        >
          <div className="container mx-auto p-8 text-center">
            <h1 className="text-3xl text-center text-black font-medium">
              Create your tenant account and start contacting
            </h1>
            <h1 className="text-3xl mb-6 text-center text-black font-medium">
              Medirent landlords
            </h1>

            <div className="mt-7">
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


            {/* Step 1: Contact Information */}
            <div>
              <form action="">
                <div className="relative my-10">
                  <input
                    id="firstname"
                    className='w-full rounded px-10 border border-gray-300 py-4 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none'
                    type="text"
                    ref={firstNameInput}
                    name="firstname"
                    value={firstname}
                    onChange={handleInputUser}
                    placeholder=" "

                  />
                  <label
                    htmlFor="email"
                    className="label absolute mt-2 ml-3 leading-tighter text-gray-600 text-base cursor-text"

                  >First Name</label>
                </div>

                <div className="relative my-10">
                  <input
                    id="lastname"
                    className='w-full rounded px-5 border border-gray-300 py-4 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none'
                    type="text"
                    ref={lastNameInput}
                    name="lastname"
                    value={lastname}
                    onChange={handleInputUser}
                    placeholder=" "

                  />
                  <label
                    htmlFor="text"
                    className="label absolute mt-2 ml-3 leading-tighter text-gray-600 text-base cursor-text"

                  >Last Name</label>
                </div>

                <div className="relative my-10">
                  <input
                    id="address"
                    className='w-full rounded px-5 border border-gray-300 py-4 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none'
                    type="text"
                    ref={addressInput}
                    name="address"
                    value={address}
                    onChange={handleInputUser}
                    placeholder=" "

                  />
                  <label
                    htmlFor="text"
                    className="label absolute mt-2 ml-3 leading-tighter text-gray-600 text-base cursor-text"

                  >Address</label>
                </div>

                {/* <div className="relative my-10">
                  <input
                    id="city"
                    className='w-full rounded px-3 border border-gray-300 py-4 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none'
                    type="text"
                    ref={cityInput}
                    name="city"
                    value={city}
                    onChange={handleInputUser}
                    placeholder=" "

                  />
                  <label
                    htmlFor="text"
                    className="label absolute mt-2 ml-3 leading-tighter text-gray-600 text-base cursor-text"

                  >City</label>
                </div> */}

                <div className="">
                  <div >


                    <div className="relative my-10">
                      {selectedCity ? (
                        <select
                          onChange={handleCountryChange}
                          value={selectedCountry}
                          className='w-full rounded px-3 border border-gray-300 py-4 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none'
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
                          className='w-full rounded px-3 border border-gray-300 py-4 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none'
                        >
                          <option value="">Select a city</option>
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
                        <option value="">Select a city</option>
                      </select>
                    )}
                  </div>
                </div>

                {/* POSTAL CODE */}
                <div className="relative my-10">
                  <input
                    id="postalcode"
                    className='w-full rounded px-3 border border-gray-300 py-4 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none'
                    type="text"
                    ref={postalcodeInput}
                    name="postalcode"
                    value={postalcode}
                    onChange={handleInputUser}
                    placeholder=" "

                  />
                  <label
                    htmlFor="text"
                    className="label absolute mt-2 ml-3 leading-tighter text-gray-600 text-base cursor-text"

                  >Postal Code</label>
                </div>

                <div className="relative my-10">
                  <input
                    id="phone"
                    className='w-full rounded px-3 border border-gray-300 py-4 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none'
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

                <div className="relative my-10">
                  <input
                    id="cellnumber"
                    className='w-full rounded px-3 border border-gray-300 py-4 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none'
                    type="text"
                    ref={cellnumberInput}
                    name="cellnumber"
                    value={cellnumber}
                    onChange={handleInputUser}
                    placeholder=" "

                  />
                  <label
                    htmlFor="text"
                    className="label absolute mt-2 ml-3 leading-tighter text-gray-600 text-base cursor-text"

                  >Cell Number</label>
                </div>

                {/* LINKEDIN ACCOUNT  */}
                <div className="relative my-10">
                  <input
                    id="linkedin"
                    className='w-full rounded px-3 border border-gray-300 py-4 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none'
                    type="text"
                    ref={linkedinInput}
                    name="linkedin"
                    value={linkedin}
                    onChange={handleInputUser}
                    placeholder=" "

                  />
                  <label
                    htmlFor="text"
                    className="label absolute mt-2 ml-3 leading-tighter text-gray-600 text-base cursor-text"

                  >linkedIn account</label>
                </div>
                <div className="relative my-10">
                  <input
                    id="email"
                    className='w-full rounded px-3 border border-gray-300 py-4 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none'
                    type="text"
                    ref={emailInput}
                    name="email"
                    value={email}
                    onChange={handleInputUser}
                    placeholder=" "

                  />
                  <label
                    htmlFor="text"
                    className="label absolute mt-2 ml-3 leading-tighter text-gray-600 text-base cursor-text"

                  >E-mail </label>
                </div>


                <div className="relative my-10">
                  <input
                    id="emailconfirmation"
                    className='w-full rounded px-3 border border-gray-300 py-4 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none'
                    type="text"
                    ref={emailconfirmationInput}
                    name="emailconfirmation"
                    value={emailconfirmation}
                    onChange={handleInputUser}
                    placeholder=" "

                  />
                  <label
                    htmlFor="text"
                    className="label absolute mt-2 ml-3 leading-tighter text-gray-600 text-base cursor-text"

                  >Email Confirmation</label>
                </div>

                <div className="text-left text-gray-700">
                  <h1 className="mb-0 p-0 text-2xl text-black">Functions</h1>
                  <br />

                  <input
                    className="outline-none mb-8"
                    type="radio"
                    id="doctor"
                    name="renting"
                    value="Medical Doctor with property/room for rent"
                    checked={
                      selectedFunction ===
                      "Medical Doctor with property/room for rent"
                    }
                    onChange={handleFunctionChange}
                  />
                  <label className="ml-4" htmlFor="doctor">
                    Medical Doctor with property/room for rent
                  </label>
                  <br />

                  <input
                    className="outline-none mb-8"
                    type="radio"
                    id="trainee"
                    name="renting"
                    value="Medical Trainee renting my property/room"
                    checked={
                      selectedFunction ===
                      "Medical Trainee renting my property/room"
                    }
                    onChange={handleFunctionChange}
                  />
                  <label className="ml-4" htmlFor="trainee">
                    Medical Trainee renting my property/room
                  </label>
                  <br />

                  <input
                    className="outline-none mb-8"
                    type="radio"
                    id="community"
                    name="renting"
                    value="Private Community Landlord"
                    checked={selectedFunction === "Private Community Landlord"}
                    onChange={handleFunctionChange}
                  />
                  <label className="ml-4" htmlFor="community">
                    Private Community Landlord
                  </label>
                  <br />

                  <input
                    className="outline-none mb-8"
                    type="radio"
                    id="property"
                    name="renting"
                    value="Property Manager"
                    checked={selectedFunction === "Property Manager"}
                    onChange={handleFunctionChange}
                  />
                  <label className="ml-4" htmlFor="property">
                    Property Manager
                  </label>
                  <br />

                  <input
                    className="outline-none mb-8"
                    type="radio"
                    id="others"
                    name="renting"
                    value="Other Health Care person with a property/room for rent"
                    checked={
                      selectedFunction ===
                      "Other Health Care person with a property/room for rent"
                    }
                    onChange={handleFunctionChange}
                  />
                  <label className="ml-4" htmlFor="others">
                    Other Health Care person with a property/room for rent
                  </label>
                </div>

                {/* <CountrySelect
                  className='w-full rounded px-3 border border-gray-300 py-4 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none'
                  onSelectCountry={handleCountrySelect}
                /> */}




                <div className="relative my-10">
                  <input
                    id="text"
                    className='w-full rounded px-3 border border-gray-300 py-4 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none'
                    type="password"
                    ref={passwordInput}
                    name="password"
                    value={password}
                    onChange={handleInputUser}
                    placeholder=" "

                  />
                  <label
                    htmlFor="text"
                    className="label absolute mt-2 ml-3 leading-tighter text-gray-600 text-base cursor-text"

                  >Password </label>
                </div>

                <div className="relative my-10">
                  <input
                    id="confirmpassword"
                    className='w-full rounded px-5 border border-gray-300 py-4 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none'
                    type="password"
                    ref={confirmpasswordInput}
                    name="confirmpassword"
                    value={confirmpassword}
                    onChange={handleInputUser}
                    placeholder=" "

                  />
                  <label
                    htmlFor="text"
                    className="label absolute mt-2 ml-3 leading-tighter text-gray-600 text-base cursor-text"

                  >Confirm Password </label>
                </div>

                <div className="mb-8 text-left">
                  <h1>How did you discover Medirent?</h1>

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

                <button
                  onClick={onNextStep}
                  className="mt-8 bg-blue-800 text-white text-left align-left px-8 py-4 rounded"
                >
                  Go
                </button>
              </form>
            </div>
          </div>
        </div>

        {currentStep === 2 && (
          <>
            <Step2 onNextStep={onNextStep} onPrevStep={onPrevStep} />
            <button
              onClick={onNextStep}
              className="mt-20 bg-blue-800 text-white text-left align-left px-12 py-2 rounded"
            >
              Next
            </button>
          </>
        )}

        {currentStep === 3 && (
          <>
            <Step3
              onNextStep={onNextStep}
              onPrevStep={onPrevStep}
            // onNextStep={onNextStep}
            />
            <button
              onClick={onNextStep}
              className="mt-20 bg-blue-800 text-white text-left align-left px-12 py-2 rounded"
            >
              Next
            </button>
          </>
        )}

        {currentStep === 4 && (
          <>
            <Step4 onNextStep={onNextStep} onPrevStep={onPrevStep} />
            <button
              onClick={onNextStep}
              className="mt-20 bg-blue-800 text-white text-left align-left px-12 py-2 rounded"
            >
              Skip
            </button>
          </>
        )}

        {currentStep === 5 && (
          <>
            <Step5
              onNextStep={onNextStep}
              onPrevStep={onPrevStep}
            // onNextStep={onNextStep}
            />
            <button
              onClick={onNextStep}
              className="mt-20 bg-blue-800 text-white text-left align-left px-12 py-2 rounded"
            >
              Next
            </button>
          </>
        )}
        {/* <div className="mt-56"> */}
        {currentStep === 6 && (
          <>
            <Step6 />
            <button
              onClick={onNextStep}
              className="mt-20 bg-blue-800 text-white text-left align-left px-12 py-2 rounded"
            >
              Next
            </button>
          </>
        )}
      </div>
    </div>
    // </div>
  );
};

export default SignUp;
