// import "./land.css";
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { FaUserDoctor } from "react-icons/fa6";
import { MdEventBusy } from "react-icons/md";

import { Link } from "react-router-dom";
const Signing = () => {
  return (
    <div className="Signing">
      <div style={{ marginTop: "50px" }}>
        <h5 className="hr" style={{ color: "black" }}></h5>
      </div>
      <div className="Sign">
        <div className="ml-5">
          <h2 style={{ fontSize: "20px", color: "black", lineHeight: "1" }}>
            <strong>Sign up now</strong> for our newsletter <br /> and be the
            first to receive the <br /> latest news from Medirent
          </h2>
          <form action="#" style={{ marginTop: "15PX" }}>
            <input
              type="email"
              required
              placeholder="E-mail"
              style={{
                border: "1px solid",
                borderColor: "#0C527B",
                width: "80%",
              }}
            />
            <input type="submit" hidden />
            <button
              type="submit"
              style={{
                backgroundColor: "#0C527B",
                padding: "13px",
                width: "17%",
                marginTop: "9px",
                borderRadius: "5px",
                paddingTop: "10px",
                fontWeight: "500",
              }}
            >
              {" "}
              <Link to="#">
                <BsArrowRight
                  style={{
                    color: "wheat",
                    marginLeft: "7px",
                  }}
                />
              </Link>
            </button>
          </form>
        </div>
        <div className="doc">
          <FaUserDoctor style={{ fontSize: "80px" }} />
        </div>
        <div>
          <h2 style={{ fontSize: "20px", color: "black", lineHeight: "1" }}>
            Have a great property{" "}
            <strong>
              near <br /> medical schools or hospitals?
            </strong>{" "}
            <br /> Add your Property Listing!
          </h2>
          <Link
            to="/signup"
            type="submit"
            style={{
              backgroundColor: "#0C527B",
              color: "white",
              borderRadius: "5px",
              paddingLeft: "35px",
              paddingRight: "35px",
              paddingTop: "4px",
              paddingBottom: "6px",
              position: "relative",
              top: "5vh",
            }}
            className="btn bg-#0C527B"
          >
            Sign Up
          </Link>
        </div>
        <MdEventBusy style={{ fontSize: "80px" }} />
        <div>
          <h2 style={{ fontSize: "20px", color: "black", lineHeight: "1" }}>
            When life is too busy, <br />
            <strong>post a want ad</strong> and <br /> let landlords find you!
          </h2>
          <Link
            to="#"
            className="btn"
            type="submit"
            style={{
              backgroundColor: "#0C527B",
              color: "white",
              borderRadius: "5px",
              paddingLeft: "20px",
              paddingRight: "15px",
              paddingTop: "10px",
              paddingBottom: "10px",
              position: "relative",
              top: "5vh",
            }}
          >
            Post a want ad now!
          </Link>
        </div>
        <div>
          <div>
            <strong>medirent.com</strong>
            <br />

            <Link to="mailto:info@medirent.com">info@medirent.com</Link>
            <br />
            <h5 className="med">
              <Link
                to="https://www.facebook.com/MedsHousing/"
                className="fab fa-facebook"
                target="blank"
              >
                {" "}
                <FaFacebook />
              </Link>
              <Link
                to="https://twitter.com/MedsHousing"
                className="fab fa-twitter"
                target="blank"
              >
                <FaTwitter />
              </Link>
              <Link
                to="https://www.pinterest.ca/medshousing/_created/"
                className="fab fa-pinterest-p"
                target="blank"
              >
                <FaPinterest />
              </Link>
              <Link
                to="https://www.instagram.com/medshousing/"
                className="fab fa-instagram"
                target="blank"
              >
                <FaInstagram />
              </Link>
              <Link
                to="https://www.linkedin.com/company/medshousing/?viewAsMember=true"
                target="blank"
              >
                <FaLinkedin />
              </Link>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signing;
