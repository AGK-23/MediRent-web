import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import FAQ from "./FaqMenu";
import Price from "./Price";
import BLog from "./BLog";
import AboutUs from "./AboutUs.jsx";
import Adds from "./Adds.jsx";
import SchoolMenu from "./SchoolMenu.jsx";
import HouseMenu from "./HouseMenu.jsx";
import TenantNenu from "./TenantMenu.jsx";

const MenuIcon = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setIsClicked(!isClicked);
  };
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="MenuIcon">
      <div className="">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            style={{ width: "54vw", height: "10vh" }}
          />
        </Link>{" "}
      </div>

      <div className="flex mt-5 justify-between">
        <div>
          <div className="dp">
            <Link
              to=""
              className=" bg-customBlue font-montserrat font-normal text-xs md:text-base rounded-md uppercase text-white p-2 pl-7 pr-7"
            >
              Join us
            </Link>
            <div className="dpc">
              <a href="SignUp">
                <li className="li">I am a landlord</li>
              </a>

              <Link to="tenant" style={{ cursor: "pointer" }}>
                <li className=""> I am a tenant</li>
              </Link>
            </div>
          </div>
          <span className="dropdown-account">
            <Link to="" className="gray index">
              {" "}
              Login
            </Link>
          </span>
        </div>
        <div className="absolute left-80">
          <div style={{ fontSize: "5vw", borderRadius: "5px" }}>
            <FaBars
              onClick={toggleMenu}
              // className="bg-or cursor-pointer outline-none border focus:bg-customBlue"
              className={`cursor-pointer ${
                isClicked ? "bg-customBlue" : "bg-gry-500"
              } outline-none border focus:bg-blue-500`}
            />
          </div>
          {menuOpen && (
            <div
              className="bg-w menu-overlay text-white flex flex-col pl-20 text-semibold pt-5"
              style={{
                width: "120vw",
                height: "70vh",
                maxWidth: "100%",
                position: "relative",
                right: "80vw",
                top: "5vh",
                fontSize: "3vh",
              }}
            >
              <SchoolMenu />
              <div className="border-t-2 border-gry w-full my-4"></div>
              <HouseMenu />
              <div className="border-t-2 border-gry w-full my-4"></div>
              <TenantNenu />
              <div className="border-t-2 border-gry w-full my-4"></div>
              <Price />
              <div className="border-t-2 border-gry w-full my-4"></div>
              <FAQ />
              <div className="border-t-2 border-gry w-full my-4"></div>
              <BLog />
              <div className="border-t-2 border-gry w-full my-4"></div>
              <AboutUs />
              <div className="border-t-2 border-gry w-full my-4"></div>
              <Adds />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuIcon;
