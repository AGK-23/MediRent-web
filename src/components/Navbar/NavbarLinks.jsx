/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
// import { links } from "./Mylinks";
// import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { HiOutlineChevronUp, HiOutlineChevronDown } from "react-icons/hi";

// eslint-disable-next-line react/prop-types
function NavbarLinks({ OpenScreen }) {
  // const [heading, setHeading] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [subHeading, setSubHeading] = useState("");

  const [naming, setNaming] = useState("");

  // eslint-disable-next-line no-unused-vars
  const [linkName, setLinkName] = useState({
    nameOne: "LandLord",
    nameTwo: "Tenants",
  });

  return (
    <>
      <div className="overflow-x-auto md:w-full sm:w-full">
        <div
          className={`${naming === linkName.nameOne ||
              linkName.nameTwo ||
              linkName.nameThree
              ? ""
              : ""
            } px-1 text-left md:cursor-pointer group py-0`}
        >
          <div>
            <h1
              className={`${naming === linkName.nameOne ? "text-primary" : "text-primary"
                } py-4 flex justify-between items-center md:pr-0 pr-5 group`}
              onClick={() => {
                naming !== linkName.nameOne
                  ? setNaming(linkName.nameOne)
                  : setNaming("");
                setSubHeading("");
              }}
            >
              {linkName.nameOne}
              <span className="text-sm inline">
                {naming === linkName.nameOne ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
              </span>
            </h1>
            <div className=" top-0 left-0 w-full bg-white overflow-x-auto">
              {naming === "LandLord" && (
                <>
                  <div
                    className={`bg-white w-full left-0  flex flex-col px-1 justify-center py-1`}
                  >
                    <div className="py-1 flex flex-col xl:max-w-[30rem] lg:max-w-[15rem] lg:pr-[0rem] justify-center">
                      <div className="mt-1 mb-1 text-start text-[15px] leading-6 font-semibold">
                        Rent Now, Pay Later
                      </div>
                      <div className="text-gray-600 mb-2 flex text-[0.675rem] leading-5">
                        Secure your rental property now and manage payments over time.
                      </div>
                    </div>

                    <div className="py-4 xl:pr-[7rem] lg:pr-[0rem] flex flex-col max-w-[30rem] justify-center ">
                      <div className="mt-2 mb-2 text-start text-[15px] leading-6 font-semibold">
                        <div>Get Tenant Insurance</div>
                      </div>
                      <div className="text-gray-600 mb-2 flex text-[0.675rem] leading-5">
                        Protect your belongings with comprehensive tenant insurance coverage.
                      </div> 
                    </div>
                    
                  </div>
                </>
              )}
            </div>

            <h1
              className={`${naming === linkName.nameTwo ? "text-primary" : "text-primary"
                } py-4 flex justify-between items-center md:pr-0 pr-5 group`}
              onClick={() => {
                naming !== linkName.nameTwo
                  ? setNaming(linkName.nameTwo)
                  : setNaming("");
                setSubHeading("");
              }}
            >
              {linkName.nameTwo}
              <span className="text-sm inline">
                {naming === linkName.nameTwo ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}

              </span>
            </h1>
            <div className=" top-0 left-0 w-full bg-white overflow-x-auto">
              {naming === "Tenants" && (
                <>
                  <div
                    className={`bg-white w-full left-0  flex flex-col px-1 justify-center py-1`}
                  >
                    <div className="py-2 flex flex-col max-w-[30rem]">
                      <div className="mt-2 mb-2 text-start text-[15px] leading-6 font-semibold">
                        Verify a Tenant's Identity
                      </div>
                      <div className="text-gray-600 mb-2 flex text-[0.675rem] leading-5">
                        Confirm tenant authenticity with our reliable identity verification service.
                      </div>
                      
                    </div>
                    <div className="py-2 flex flex-col max-w-[30rem]">
                      <div className="mt-2 mb-2 text-start text-[15px] leading-6 font-semibold">
                        <div>Complete a Background Check</div>
                      </div>
                      <div className="text-gray-600 mb-2 flex text-[0.65rem] leading-5">
                        Conduct detailed background checks for informed and secure rental decisions
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div>
              <button onClick={OpenScreen} className="py-4 px-1 inline-block capitalize relative border-0 leading-1vw text-[#008080] hover:text-black font-[500]  transition-colors duration-150 ease-linear">
                <Link to="/all-listings">Listings</Link>
              </button>
            </div>

            <div>
              <button onClick={OpenScreen} className="py-4 px-1 inline-block capitalize relative border-0 leading-1vw text-[#008080] hover:text-black font-[500]  transition-colors duration-150 ease-linear">
                <Link to="/faqs">FAQ</Link>
              </button>
            </div>

            <div>
              <button onClick={OpenScreen} className="py-4 px-1 inline-block capitalize relative border-0 leading-1vw text-[#008080] hover:text-black font-[500]  transition-colors duration-150 ease-linear">
                <Link to="/about-us">About Us</Link>
              </button>
            </div>

          </div>
        </div>
      </div>


    </>
  );
}

export default NavbarLinks;
