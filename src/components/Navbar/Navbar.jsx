import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery.jsx";

import NavbarLinks from "./NavbarLinks";
import Logo from "../../assets/logo.png";
import { BiSolidDownArrow } from "react-icons/bi";
import { FaGoogle } from "react-icons/fa";
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import SearchButton from "../SearchButton.jsx";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeLinecap="round"
    strokeWidth="3"
    {...props}
  />
);

const transition = { duration: 0.3 };

// eslint-disable-next-line react/prop-types
const Navbar = ({ isTopOfPage }) => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);




  const [open, setOpen] = useState(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1024px)");
  const navbarBackground = isTopOfPage ? "bg-white" : "bg-[#f2f7ff]";
  // const [heading, setHeading] = useState("")

  const OpenScreen = () => {
    setOpen(!open);
  };

  return (
    <nav className={`${navbarBackground} fixed w-full top-0 left-0 z-50 `}>

      {isAboveMediumScreens && (
        <div className=" px-10">
          <div className=" flex font-medium justify-between max-w-screen-xl mx-auto ">
            <div className="z-50 py-2 md:w-auto w-full flex justify-between ">
              <div className="">
                {/* <img src={Logo} alt="logo" className=" md:cursor-pointer h-7" /> */}
                <Link to="/" className="">
                  <img alt="" src={Logo} className="text-[1px] w-32 h-16 cursor-pointer" />
                </Link>

                {/* <div className="text-xl md:hidden" onClick={() => setOpen(!open)}>
                  <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>

                </div> */}
              </div>
            </div>
            <ul className="md:flex hidden md:mt-12 my-1 xs:mt-0 capitalize items-center gap-4 xl:text-sm lg:text-xs">

              <div className="hidden gap-4 text-gray-400 mr-10">
                <Link
                  to="/"
                  className="fab text-lg"
                >
                  <FaFacebook />
                </Link>
                <Link
                  to="/"
                  className="fab text-lg"
                >
                  <FaTwitter />
                </Link>

                <Link
                  to="/"
                  className="fab text-lg"
                >
                  <FaPinterest />
                </Link>
                <Link
                  to="/"
                  className="fab text-lg"
                >
                  <FaInstagram />
                </Link>
                <Link
                  to="/"
                  className="fab text-lg"
                >
                  <FaLinkedin />
                </Link>
              </div>

              {/* <NavLinks /> */}
              <div className="flex w-auto justify-between gap-2">
                {/* <div className="md:block hidden">
                  <Link className="link flex items-center justify-between mr-5 px-0 rounded-lg bg-[#0c527b] text-white" to="/auth/register">
                    <div className="flex justify-between items-center w-full">
                      <div className="px-2 bg-[#103f69] py-2 rounded-tl-lg rounded-bl-lg  text-[10px]"><FaGoogle /></div>
                      <div className=" font-[500] text-white px-1 py-0 text-xs">Select Language</div>
                      <div className="text-white px-2 bg-[#103f69] py-2 rounded-tr-lg rounded-br-lg text-[10px]"><BiSolidDownArrow /></div>
                    </div>
                  </Link>
                </div> */}
                <div className="md:block hidden">
                  <Link className="link flex items-center justify-center h-full mr-5" to="/auth/login">
                    <div className="text-gray-500 font-semibold hover:text-gray-700 text-[13px]">LOGIN</div>
                  </Link>
                </div>
                <div className="md:block hidden">

                  <div className="link flex items-center relative">
                    <button
                      className=" font-[500] px-5 py-1 rounded-lg bg-[#103f69] text-white text-[13px]"
                      onClick={() => setShowPopup(true)}
                    // onMouseEnter={() => setShowPopup(true)}
                    // onMouseLeave={() => setShowPopup(false)}
                    >
                      CREATE ACCOUNT
                    </button>
                    {showPopup && (
                      <div ref={popupRef} className="absolute right-0 top-6 bg-gray-200 border border-gray-300 mt-2">
                        <div className="flex flex-col">
                          <Link to="/auth/registration-page" className="px-4 py-1 border border-gray-300 cursor-pointer hover:bg-gray-100  whitespace-nowrap text-third" >
                            I'm a Tenant
                          </Link>
                          <Link to="/auth/housing-subscription" className="px-4 py-1 border border-gray-300 cursor-pointer hover:bg-gray-100  whitespace-nowrap text-third">
                            I'm a Landlord
                          </Link>

                        </div>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            </ul>
          </div>

          <div className="md:pb-8 xs:pb-0 flex font-medium justify-between max-w-screen-xl mx-auto mt-2 ">
            <div className="">
              <div className="mt-3 flex justify-between w-full ">
                <div className="flex flex-row justify-between w-full">

                  <div className="mr-10 w-fit text-sm text-start flex items-center justify-start whitespace-nowrap">
                    <div className=" relative border-0 leading-1vw text-[#0c527b] hover:text-black font-[500]  transition-colors duration-150 ease-linear">
                      <Link to="/">LandLord</Link>
                    </div>

                  </div>

                  <div className="mr-10 w-fit text-sm text-start flex items-center justify-start px-4 whitespace-nowrap">
                    <div className="text-med relative border-0 leading-1vw text-[#0c527b] hover:text-black font-[500]  transition-colors duration-150 ease-linear">
                      <Link to="/">Tenants</Link>
                    </div>

                  </div>
                  {/* <div className="mr-4 w-fit  text-sm text-start flex items-center justify-start pr-1 whitespace-nowrap">
                    <div className="text-med relative border-0 leading-1vw text-[#0c527b] hover:text-black font-[500]  transition-colors duration-150 ease-linear">
                      <Link to="/">Medical Housing </Link>
                    </div>
                  </div> */}
                  {/* <div className="mr-4 w-fit  text-sm text-start flex items-center justify-start px-4 whitespace-nowrap">
                    <div className="text-med relative border-0 leading-1vw text-[#0c527b] hover:text-black font-[500]  transition-colors duration-150 ease-linear">
                      <Link to="/">Pricing</Link>
                    </div>
                  </div> */}
                  <div className="mr-10 px-4 w-fit  text-sm text-start flex items-center justify-start whitespace-nowrap">
                    <div className="text-med relative border-0 leading-1vw text-[#0c527b] hover:text-black font-[500]  transition-colors duration-150 ease-linear">
                      <Link to="/">FAQ</Link>
                    </div>

                  </div>
                  {/* <div className="mr-4 px-4 w-fit  text-sm text-start flex items-center justify-start whitespace-nowrap">
                    <div className="text-med relative border-0 leading-1vw text-[#0c527b] hover:text-black font-[500]  transition-colors duration-150 ease-linear">
                      <Link to="/">Blog</Link>
                    </div>
                  </div> */}
                  <div className="mr-10 px-4 w-fit  text-sm text-start flex items-center justify-start whitespace-nowrap">
                    <div className="text-med relative border-0 leading-1vw text-[#0c527b] hover:text-black font-[500]  transition-colors duration-150 ease-linear">
                      <Link to="/">About Us</Link>
                    </div>
                  </div>
                  {/* <div className="mr-4 px-4 w-fit  text-sm text-start flex items-center justify-start whitespace-nowrap">
                    <div className="text-med relative border-0 leading-1vw text-[#0c527b] hover:text-black font-[500]  transition-colors duration-150 ease-linear">
                      <Link to="/">Tenants Want Ads</Link>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="">
              <SearchButton />
            </div>
          </div>
        </div>
      )}
      {!isAboveMediumScreens && (
        <div className=" flex items-center flex-col font-medium justify-between ">
          <div
            className="z-50  w-full flex justify-around"
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <div className="flex items-center flex-col w-full border-b-[1px] border-gray-400">

              {/* FIRST NAVBAR  */}
              <div className="p-2 flex justify-between items-center  w-full">
                <Link to="/" className="">
                  <img alt="" src={Logo} className="text-[1px] w-24 h-12 cursor-pointer" />
                </Link>
                <button
                  className="text-third text-3xl "
                  onClick={() => setOpen(!open)}
                >
                  <svg width="23" height="23" viewBox="0 0 23 23">
                    <Path
                      animate={open ? "open" : "closed"}
                      initial={false}
                      variants={{
                        closed: {
                          d: "M 2 2.5 L 20 2.5",
                          stroke: "rgb(16,63,105)",
                        },
                        open: {
                          d: "M 3 16.5 L 17 2.5",
                          stroke: "rgb(16,63,105)",
                        },
                      }}
                      transition={transition}
                    />
                    <Path
                      d="M 2 9.423 L 20 9.423"
                      stroke="#103f69"
                      animate={open ? "open" : "closed"}
                      initial={false}
                      variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 },
                      }}
                      transition={transition}
                    />
                    <Path
                      animate={open ? "open" : "closed"}
                      initial={false}
                      variants={{
                        closed: {
                          d: "M 2 16.346 L 20 16.346",
                          stroke: "rgb(16,63,105)",
                        },
                        open: {
                          d: "M 3 2.5 L 17 16.346",
                          stroke: "rgb(16,63,105)",
                        },
                      }}
                      transition={transition}
                    />
                  </svg>
                </button>
              </div>

              {/* SECOND NAVBAR */}
              <div className="w-full py-1 px-1 flex justify-between">
                <div className="block">
                  <Link className="link flex items-center justify-center h-full mr-5" to="/auth/login">
                    <div className="text-gray-500 font-semibold hover:text-gray-700 text-[13px]">LOGIN</div>
                  </Link>
                </div>
                <div className="block">

                  <div className="link flex items-center relative">
                    <button
                      className=" font-[500] px-5 py-1 rounded-lg bg-[#103f69] text-white text-[10px]"
                      onClick={() => setShowPopup(true)}
                    >
                      CREATE ACCCOUNT
                    </button>
                    {showPopup && (
                      <div ref={popupRef} className="z-20 absolute -left-10 top-6 bg-gray-200 border border-gray-300 mt-2">
                        <div className="flex flex-col">
                          <Link to="/auth/registration-page" className="text-xs px-4 py-1 border border-gray-300 cursor-pointer hover:bg-gray-100  whitespace-nowrap text-third" >
                            I'm a Tenant
                          </Link>
                          <Link to="/auth/housing-subscription" className="text-xs px-4 py-1 border border-gray-300 cursor-pointer hover:bg-gray-100  whitespace-nowrap text-third">
                            I'm a Landlord
                          </Link>

                        </div>
                      </div>
                    )}
                  </div>

                </div>
              </div>

              {/* THIRD NAVBAR  */}
              <div className="w-full bg-gray-100  relative left-0 pt-1">
                <SearchButton />
              </div>

            </div>
          </div>
          <div>
            <div
              onClick={OpenScreen}
              className={`${open ? "left-0" : "left-[-100%]"
                } absolute left-0 top-32 bg-slate-800 bg-opacity-75 md:bg-opacity-50 w-full h-screen`}
            ></div>

            <ul
              className={`
              bg-white fixed h-fit top-32 overflow-y-auto bottom-0 py-10 px-4 md:w-[450px] w-full
              duration-500 ${open ? "left-0" : "left-[-100%]"}
              `}
              style={{
                height: "100%",
                // width: '100%',
                flex: "1",
                padding: "1rem 1.1rem 1rem 1rem",
                overflowY: "auto",
                overflowX: "hidden",
              }}
            >
              <li>
                <div className="py-4 px-1 inline-block capitalize relative border-0 leading-1vw text-[#0c527b] hover:text-black font-[500]  transition-colors duration-150 ease-linear">
                  <Link to="/">LandLord</Link>
                </div>
              </li>
              <li>
                <div className="py-4 px-1 inline-block capitalize relative border-0 leading-1vw text-[#0c527b] hover:text-black font-[500]  transition-colors duration-150 ease-linear">
                  <Link to="/">Tenants</Link>
                </div>
              </li>
              <li>
                <div className="py-4 px-1 inline-block capitalize relative border-0 leading-1vw text-[#0c527b] hover:text-black font-[500]  transition-colors duration-150 ease-linear">
                  <Link to="/">FAQ</Link>
                </div>
              </li>
              {/* <li>
                <div className="py-4 px-1 inline-block capitalize relative border-0 leading-1vw text-[#0c527b] hover:text-black font-[500]  transition-colors duration-150 ease-linear">
                  <Link to="/">Pricing</Link>
                </div>
              </li> */}
              {/* <li>
                <div className="py-4 px-1 inline-block capitalize relative border-0 leading-1vw text-[#0c527b] hover:text-black font-[500]  transition-colors duration-150 ease-linear">
                  <Link to="/">FAQ</Link>
                </div>
              </li> */}
              {/* <li>
                <div className="py-4 px-1 inline-block capitalize relative border-0 leading-1vw text-[#0c527b] hover:text-black font-[500]  transition-colors duration-150 ease-linear">
                  <Link to="/">Blog</Link>
                </div>
              </li> */}
              <li>
                <div className="py-4 px-1 inline-block capitalize relative border-0 leading-1vw text-[#0c527b] hover:text-black font-[500]  transition-colors duration-150 ease-linear">
                  <Link to="/">About Us</Link>
                </div>
              </li>
              {/* <li>
                <div className="py-4 px-1 inline-block capitalize relative border-0 leading-1vw text-[#0c527b] hover:text-black font-[500]  transition-colors duration-150 ease-linear">
                  <Link to="/">Tenants Want Ads</Link>
                </div>
              </li> */}
              {/* <NavbarLinks OpenScreen={OpenScreen} /> */}
              {/* <div className="mb-10 py-6 flex justify-center flex-col  sm:w-full">
                <Link className="link flex items-center" to="/auth/register">
                  <button className=" w-full rounded-sm p-2 px-1 text-sm bg-orange-500 text-white">
                    Open an Account
                  </button>
                </Link>

                <Link className="link flex items-center" to="/auth/register">
                  <button className="my-4 w-full rounded-sm p-2 px-1 text-sm bg-white text-primary border-2">
                    Sign In
                  </button>
                </Link>
              </div> */}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
