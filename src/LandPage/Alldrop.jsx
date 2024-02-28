import { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Alldrop = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="AllDrop">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <span style={{ display: "flex" }}>
          Alberta
          {isOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
        </span>
      </div>
      <div className="dropdown-header" onClick={toggleDropdown}>
        <span style={{ display: "flex", marginLeft: "25px" }}>
          Calgary
          {isOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
        </span>
      </div>
      {isOpen && (
        <div className="dropdown-content">
          <Link to="#">Calgary (19)</Link>

          <br />
          <Link to="#">Edmonton (19)</Link>

          <br />
          <Link to="#">Grande Prairie (19)</Link>
          <br />
        </div>
      )}
    </div>
  );
};
export default Alldrop;
