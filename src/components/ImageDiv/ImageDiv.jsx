
import { FaSearch, FaArrowDown } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import Carousel from "../Carousel/Carousel.jsx";



const ImageDiv = () => {
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




  return (
    <div className='md:mt-32 xs:mt-0 h-screen bg-gray-500'>
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

              <div
                className="flex md:flex-row xs:flex-col xs:gap-5 w-full items-center justify-center"
              >
                <div className="relative">
                  <div
                    className="h-9vw w-52 mr-3.5 flex items-center bg-gray-100 py-2 px-4 rounded-md border shadow-xl border-gray-300 cursor-pointer relative"
                    onClick={toggleOptions}
                  >
                    <div className="w-full flex items-center justify-between flex-row">
                      <span className="text-gray-500 text-[15px]">
                        {selectedOption ? selectedOption : "Where?"}
                      </span>
                      <span><FaArrowDown className="text-gray-500" /></span>
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
                <div className="relative ">
                  <div
                    className="h-9vw w-52 mr-3.5 flex items-center bg-gray-100 py-2 px-4 rounded-md border shadow-xl border-gray-300 cursor-pointer relative"
                  >
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
                <Link
                  to="/Listing"
                  className="bg-[#008080] tetx-white rounded-lg py-[0.80rem] px-3"
                >
                  {" "}
                  <div className="text-white"><IoArrowForward className=" rounded-sm text-center" /></div>

                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>

      
    </div>
  )
}

export default ImageDiv