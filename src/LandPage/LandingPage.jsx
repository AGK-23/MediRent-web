// import "./land.css";
import { FaSearch, FaArrowDown } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
const LandingPage = () => {
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
    <div className="land">
      <h1>
        GLOBAL HOUSING <br />
        FOR THE MEDICAL COMMUNITY
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <div className="relative inline-block">
          <div
            className="flex items-center bg-gray-200 py-2 px-4 rounded-md border border-gray-300 cursor-pointer relative"
            onClick={toggleOptions}
          >
            <span className="ml-2">
              {selectedOption ? selectedOption : "Where?"}
            </span>
            <FaArrowDown className="text-gray-500 ml-2" />
          </div>
          {showOptions && (
            <div
              className="absolute mt-1 bg-white rounded-md border border-gray-300 w-full max-h-40 overflow-y-auto"
              ref={scrollContainerRef}
            >
              <div className="flex items-center border-b border-gray-300 p-2 sticky top-0 bg-white z-10">
                <input
                  type="text"
                  placeholder="Where?"
                  className=" border border-gray-300 p-2 w-full"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <FaSearch className="ml-2 text-gray-500" />
              </div>
              <div className="overflow-y-auto max-h-40">
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
        <div className="relative inline-block w-60">
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
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
            popperPlacement="top-end"
          />
          {selectedDate && (
            <div className="absolute mt-1 bg-white rounded-md border border-gray-300 px-4 py-2">
              {selectedDate.toLocaleDateString()}
            </div>
          )}
        </div>
        <Link
          to="/Listing"
          className="onPh default-link bg-customBlue pt-3 pr-2"
        >
          {" "}
          <IoArrowForward className="ml-2.5" />
        </Link>
        {/* <button type="submit" className="default-link ml-1 mt-0.5">
         
        </button> */}
      </div>
    </div>
  );
};

export default LandingPage;
