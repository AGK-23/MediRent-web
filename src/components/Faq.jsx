import { useState } from "react";
import arrow from "../assets/submenu-arrow.gif";
import { Link } from "react-router-dom";
const FAQ = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-container">
      <div
        className="faq-question"
        onMouseEnter={toggleDropdown}
        onMouseLeave={toggleDropdown}
      >

        <div className="text-med relative border-0 leading-1vw text-[#0c527b] hover:text-black font-[500]  transition-colors duration-150 ease-linear">
          <Link to="/faqpath">
            FAQ
          </Link>
        </div>

        {isOpen && (
          <div
            style={{
              display: "block",
              position: "absolute",
              minWidth: "200px",
            }}
          >
            <img
              src={arrow}
              alt="arrow"
              style={{
                width: "22px",
                height: "10px",
                marginTop: "4vh",
              }}
            />
            <div className="bg-black opacity-60 text-white w-100 relative right-20">
              <ul className="p-5">
                <li>
                  <Link
                    to="/FaqPathsec"
                    className="hover:text-blue-500"
                    style={{ fontSize: "15px" }}
                  >
                    Faq for landlord
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faqtenant"
                    className="hover:text-blue-500"
                    style={{ fontSize: "15px" }}
                  >
                    Faq for tenants
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQ;
