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
        <Link to="/faqpath">Faq</Link>

        {isOpen && (
          <div
            style={{
              display: "block",
              position: "absolute",
              minWidth: "200px",
            }}
          >
            <div className="bg-black opacity-60 text-white w-100 relative">
              <ul className="p-5 mt-4" style={{ width: "120vw" }}>
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
