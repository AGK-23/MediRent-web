import { useState, useRef } from "react";
import { FaSearch, FaArrowDown } from "react-icons/fa";

const Addingsec = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const options = [
    "Medical school",
    "University of Alberta Faculty of Medicine and Dentistry (15) University of Calgary Cumming School of Medicine (22)",
    "(SUNY)State University of New York,  Brooklyn New York (United States)",
    "Abia State University Faculty of Medical Services",
    "Downstate Medical College of Medicine",
    "Academy of Military Medical Science Faculty of Medicine Beijing (China)",
    "Accra College of Medicine Accra (Ghana)",
  ];
  const scrollContainerRef = useRef(null);

  const toggleOptionsForHospital = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionClickForHospital = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
  };

  const handleSearchChangeForHospital = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <div className="relative inline-block" style={{}}>
        <div
          className="flex items-center border border-black cursor-pointer relative"
          onClick={toggleOptionsForHospital}
        >
          <span className="" style={{ position: "relative" }}>
            {selectedOption ? selectedOption : "Hospital"}
          </span>
          <FaArrowDown
            className="text-black-500"
            style={{ marginLeft: "9.3vw" }}
          />
        </div>
        {showOptions && (
          <div
            style={{ zIndex: "10" }}
            className="absolute mt-1 bg-white rounded-md border border-black-300 w-full max-h-40 overflow-y-auto"
            ref={scrollContainerRef}
          >
            <div className="flex items-center border-b border-black-300 p-2 sticky top-0 bg-white z-10">
              <input
                type="text"
                placeholder="Search..."
                className="border border-black-300 p-2 w-full"
                value={searchTerm}
                onChange={handleSearchChangeForHospital}
              />
              <FaSearch className="ml-2 text-black-500" />
            </div>
            <div className="overflow-y-auto max-h-40">
              {filteredOptions.map((option, index) => (
                <div
                  key={index}
                  className="py-2 px-4 cursor-pointer hover:text-white hover:bg-blur "
                  onClick={() => handleOptionClickForHospital(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Addingsec;
