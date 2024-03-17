import { FaSearch, FaArrowDown } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import Carousel from "../Carousel/Carousel.jsx";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Spinner from "../../assets/svg/Spinner.svg";

const ImageDiv = () => {
  const navigate = useNavigate();
  // const [avatar, setAvatar] = useState(null);
  const [userLoading, setUserLoading] = useState(false);

  const [selectedDate, setSelectedDate] = useState(null);

  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const options = [
    "New York",
    "Los Angeles",
    "Chicago",
    "San Francisco",
    "Miami",
    "Seattle",
    "Boston",
    "Houston",
    "Atlanta",
    "Denver",
  ];
  const scrollContainerRef = useRef(null);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // WORKING ON THE SEARCH BAR
  const [formData, setFormData] = useState({
    country: "",
    province: "",
  });

  const [selectedCity, setSelectedCity] = useState("");
  const [selectedStates, setSelectedStates] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(""); // State to store the selected country
  // eslint-disable-next-line no-unused-vars
  const [selectedCities, setSelectedCities] = useState(""); // State to store the selected city
  const [isLoading, setIsLoading] = useState(true);

  var { country, province } = formData;

  const [listings, setListings] = useState([]);
  const [emptyLoading, setEmptyLoading] = useState(true)

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
      url: "https://countriesnow.space/api/v0.1/countries",
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

//   useEffect(() => {
//     console.log('Updated housingData:', listings);
// }, [listings]); 

useEffect(() => {
  if (listings.length > 0) {
    console.log('Updated housingData:', listings);
      // Navigate to /listings only if listings array is not empty
      navigate('/listings', { state: { result: listings, emptyLoading } });
  }
}, [listings]); // Run the effect whenever listings state changes

  const handleListing = async () => {
    // e.preventDefault();
    try {
      // console.log(formData, "help me");
      if (!country || !province) {
        toast.warning("Please fill in all required fields.");
        return;
      }

      setUserLoading(true);

      console.log("user form for landlord...", formData);

      const response = await axios.post('https://medirent-api.onrender.com/housing/get-all-listings',
        {
          pageIndex: 1,
          pageSize: 10,
          filter: "country",
          keyword: country
        },

      );

      if (response?.data?.code === null) {
        setEmptyLoading(false)
        console.log("empty Loading...", emptyLoading);
      }

      setUserLoading(false);

      console.log("Landlord is rent..", response.data.data.items);
      setListings(response?.data?.data?.items);

      console.log("all the user..", listings);

      if (response.data.success === true) {
        // toast.success("Landlord's account Created");
        // navigate('/listings', { state: { result: listings, emptyLoading } });
      }
    } catch (error) {
      setUserLoading(false);
      console.log("error in the landlord..", error);

      console.log("all the promise in the code..", error?.response?.data);
      if (error?.response?.data?.data === null) {
        setEmptyLoading(false)
        console.log("empty Loading...", emptyLoading);
        navigate('/listings', { state: { result: listings, emptyLoading } });
      }

      console.log("the current image..", emptyLoading)
    }

    // setActive(2)
  };

  return (
    <div className="md:mt-32 xs:mt-0 h-screen bg-gray-500">
      {/* max-w-screen-xl mx-auto */}
      <div className="relative flex font-medium items-center justify-center w-full ">
        <Carousel />
        <div className="mt-40 absolute top-10 z-10 bg-transparent w-full">
          <div className="mx-auto">
            <div className="flex justify-center items-center flex-col w-full">
              <div className="text-center mb-0 w-full px-2">
                <div className="mb-0 font-medium text-white md:text-6xl xs:text-2xl uppercase">
                  Global Housing
                </div>
                <div className="mb-6 font-medium text-white md:text-6xl xs:text-2xl uppercase">
                  FOR THE MEDICAL COMMUNITY
                </div>
              </div>

              <div className="flex md:flex-row xs:flex-col xs:gap-5 w-full items-center justify-center">
                <div className="relative hidden">
                  <div
                    className="h-9vw w-52 mr-3.5 flex items-center bg-gray-100 py-2 px-4 rounded-md border shadow-xl border-gray-300 cursor-pointer relative"
                    onClick={toggleOptions}
                  >
                    <div className="w-full flex items-center justify-between flex-row">
                      <span className="text-gray-500 text-[15px]">
                        {selectedOption ? selectedOption : "Where?"}
                      </span>
                      <span>
                        <FaArrowDown className="text-gray-500" />
                      </span>
                    </div>
                  </div>
                  {showOptions && (
                    <div
                      className="absolute mt-1 bg-white rounded-md border border-gray-300 w-full max-h-[20rem] overflow-y-auto "
                      ref={scrollContainerRef}
                    >
                      <div className="flex items-center border-b border-gray-300 p-2 sticky top-0 bg-white z-10 overflow-hidden">
                        <input
                          type="text"
                          placeholder="Where?"
                          className=" border border-gray-300 p-2 w-full outline-none"
                          value={searchTerm}
                          onChange={handleSearchChange}
                        />
                        <FaSearch className="ml-2 text-gray-500" />
                      </div>
                      <div className="overflow-y-auto py-3">
                        {filteredOptions.map((option, index) => (
                          <div
                            key={index}
                            className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                            onClick={() => handleOptionClick(option)}
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                {/* date picker */}
                <div className="relative hidden">
                  <div className="flex h-9vw w-52 mr-3.5 items-center bg-gray-100 py-2 px-4 rounded-md border shadow-xl border-gray-300 cursor-pointer relative">
                    <FaCalendarAlt
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                      style={{ zIndex: "10" }}
                    />
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      placeholderText="When?"
                      dateFormat="MMMM d, yyyy"
                      // className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
                      className="focus:outline-none bg-transparent"
                      popperPlacement="top-end"
                    />
                    {/* {selectedDate && (
                        <div className="absolute mt-1 bg-white rounded-md border border-gray-300 px-4 py-2">
                          {selectedDate.toLocaleDateString()}
                        </div>
                      )} */}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 xs:grid-cols-1 gap-10 justify-center items-center  md:max-w-[40rem] xs:max-w-full md:px-0 xs:px-3">
                  <div>
                    <div className="relative">
                      {selectedCity ? (
                        <select
                          onChange={handleCountryChange}
                          value={country}
                          className="w-full px-6 rounded-md border border-gray-300 md:py-3 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
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
                  <div className="relative">
                    {selectedCountry ? (
                      <div>
                        <select
                          onChange={handleCityChange}
                          value={province}
                          className="w-full px-6 rounded-md border border-gray-300 md:py-3 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                        >
                          <option value="">Select a state</option>
                          {selectedCity
                            .find((country) => country.name === selectedCountry)
                            .states.map((state, index) => (
                              <option key={index} value={state.name}>
                                {state.name}
                              </option>
                            ))}
                        </select>
                      </div>
                    ) : (
                      <select className="w-full px-6 rounded-md border border-gray-300 md:py-3 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md">
                        <option value="">Select a state</option>
                      </select>
                    )}
                  </div>
                </div>

                <button
                  onClick={handleListing}
                  className="bg-[#008080] tetx-white rounded-lg py-[0.80rem] px-3"
                  disabled={userLoading}
                >
                  

                  {userLoading ? ( // Display spinner if userLoading is true
                                <div className="flex items-center px-6">
                                    <div>
                                        <img alt="" src={Spinner} className="text-[1px] text-white" />
                                    </div>

                                </div>
                            ) : (
                              
                              <div className="text-white">
                                {" "}
                                <IoArrowForward className=" rounded-sm text-center" />
                              </div>
                            )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageDiv;
