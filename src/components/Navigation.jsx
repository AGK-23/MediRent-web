// Navigation.js
// Import the Logo component

import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import login from "../pages/login/Login";
import SignUp from "../registration/SignUp"

const Navigation = () => {
  return (
    <nav className="MEDS">
      <div className="MED">
        {" "}
        <Link to="/">
          <img
            className="img"
            src={logo}
            alt="Logo"
            style={{
              height: "70px",
              // width: "14vw",
              marginRight: "30vw",
              cursor: "pointer",
            }}
          />
        </Link>
        <div className="med">
          <div className="social-icons">
            <Link
              to="https://www.facebook.com/MedsHousing/"
              className="fab"
              target="blank"
            >
              <FaFacebook />
            </Link>
            <Link
              to="https://twitter.com/MedsHousing"
              className="fab"
              target="blank"
            >
              <FaTwitter />
            </Link>

            <Link
              to="https://www.pinterest.ca/medshousing/_created/"
              className="fab"
              target="blank"
            >
              <FaPinterest />
            </Link>
            <Link
              to="https://www.instagram.com/medshousing/"
              className="fab"
              target="blank"
            >
              <FaInstagram />
            </Link>
            <Link
              to="https://www.linkedin.com/company/medshousing/?viewAsMember=true"
              className="fab"
              target="blank"
            >
              <FaLinkedin />
            </Link>
          </div>
          <div className="button">
            <span className="dropdown-account ">
              <Link to="/login" className="gray index ml-20">
                {" "}
                Login
              </Link>
            </span>

            <div className="dp pl-5">
              <Link to="" className="btn-register">
                Join us
              </Link>
              <div className="dpc">
                <Link to="/SignUp">
                  <li className="li">I am a landlord</li>
                </Link>

                <Link to="/tenant" style={{ cursor: "pointer" }}>
                  <li className="li"> I am a tenant</li>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
