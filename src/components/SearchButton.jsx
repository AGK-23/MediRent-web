import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";


const SearchButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className=" flex w-full justify-end">
      {" "}
      {/* Added flex container with justify-end */}
      <div className="w-full">
        {!isExpanded && (
          <div className=" flex  w-full justify-end">
            <button className="flex text-[#008080]" onClick={handleButtonClick}>
              <AiOutlineSearch style={{ fontSize: "30px" }} />
            </button>
          </div>
        )}
        {isExpanded && (
          <div className=" flex  w-full">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none border-b border-gray-500 w-full"
            />
            <button className="flex text-[#0c527b] " onClick={handleButtonClick}>
              <AiOutlineSearch style={{ fontSize: "30px" }} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchButton;
