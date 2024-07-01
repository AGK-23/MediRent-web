/* eslint-disable react/no-unescaped-entities */
import { useState, useRef, useEffect } from "react";
// import { Link } from "react-router-dom";
import { links } from "../../data/Mylinks";
// import { linkData } from "./data";


import Key from "../../assets/svg/key.svg";
import Sheild from "../../assets/svg/shield.svg";
import Checked from "../../assets/svg/checked.svg";
import SearchCheck from "../../assets/svg/search-check.svg"


import { HiOutlineChevronUp, HiOutlineChevronDown } from "react-icons/hi";

// import { AiOutlineBank, AiOutlineUngroup } from "react-icons/ai";

let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};



const NavLinks = () => {
  // let menuRef = useRef();
  const [heading, setHeading] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [subHeading, setSubHeading] = useState("");
  // const [open, setOpen] = useState(false);

  let domNode = useClickOutside(() => {
    setHeading("");
    // console.log(subHeading)
  });

  return (
    <>
      <div ref={domNode} className="flex ">
        {links.map((link) => (
          <div key={link.name} className="">
            <div
              className={`${heading === link.name ? "border-none" : ""
                } px-3 text-left md:cursor-pointer group py-4 `}
            >

              <h1
                className={`${heading === link.name ? " text-primary" : ""
                  } py-0 flex justify-between items-center md:pr-0 pr-5 group`}
                onClick={() => {
                  heading !== link.name ? setHeading(link.name) : setHeading("");
                  setSubHeading("");
                }}
              >
                {link.name}
                <span className="text-sm md:hidden inline">
                  {!link.submenu ? "" : heading === link.name && link.submenu ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}


                </span>
                <span className="text-sm md:mt-1 md:ml-2  md:block hidden ">
                  {!link.submenu ? "" : heading === link.name && link.submenu ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}

                </span>
              </h1>
            </div>
            {/* Mobile menus */}
          </div>
        ))}

        <div className=" absolute top-10 left-0 w-full bg-white">
          {heading === "Tenants" && (
            <>
              <div
                className={`absolute rounded-xl bg-white w-fit left-[491px] flex-col top-[4.15rem] border-t-[1px] flex gap-0 px-4 justify-center py-4 border-b-[1px] border-gray-200`}
              >
                <div className="py-2 flex max-w-[20rem] justify-center bg-[#fefefe] rounded-lg">
                  <div className="mr-5">
                    <div className=" justify-start flex ">
                      <img alt="" src={Key} className="text-[1px] w-[32px] h-[32px] cursor-pointer" />
                    </div>

                  </div>

                  <div className="">
                    <div className="mt-0 mb-2 text-start text-[14px] leading-6 font-semibold">
                      Rent Now, Pay Later
                    </div>
                    <div className="text-[#717171] mb-2 flex text-[12px]">
                      Secure your rental property now and manage payments over time.
                    </div>

                  </div>

                </div>
                <div className="py-2 flex max-w-[20rem] justify-center ">
                  <div className="mr-5">
                    <div className=" justify-start flex ">
                      <img alt="" src={Sheild} className="text-[1px] w-[32px] h-[32px] cursor-pointer" />
                    </div>

                  </div>

                  <div className="">
                    <div className="mt-0 mb-2 text-start text-[14px] leading-6 font-semibold">
                      Get Tenant Insurance
                    </div>
                    <div className="text-[#717171] mb-2 flex text-[12px]">
                      Protect your belongings with comprehensive tenant insurance coverage.
                    </div>

                  </div>

                </div>

              </div>
            </>
          )}
          {heading === "LandLord" && (
            <>
              <div
                className={`absolute rounded-xl bg-white w-fit left-[610px] flex-col top-[4.15rem] border-t-[1px] flex gap-0 px-4 justify-center py-4 border-b-[1px] border-gray-200`}
              >
                <div className="py-2 flex max-w-[20rem] justify-center bg-[#fefefe] rounded-lg">
                  <div className="mr-5">
                    <div className=" justify-start flex ">
                      <img alt="" src={Checked} className="text-[1px] w-[32px] h-[32px] cursor-pointer" />
                    </div>

                  </div>

                  <div className="">
                    <div className="mt-0 mb-2 text-start text-[14px] leading-6 font-semibold">
                      Verify a Tenant's Identity
                    </div>
                    <div className="text-[#717171] mb-2 flex text-[12px]">
                      Confirm tenant authenticity with our reliable identity verification service.
                    </div>

                  </div>

                </div>
                <div className="py-2 flex max-w-[20rem] justify-center ">
                  <div className="mr-5">
                    <div className=" justify-start flex ">
                      <img alt="" src={SearchCheck} className="text-[1px] w-[32px] h-[32px] cursor-pointer" />
                    </div>

                  </div>

                  <div className="">
                    <div className="mt-0 mb-2 text-start text-[14px] leading-6 font-semibold">
                      Complete a Background Check
                    </div>
                    <div className="text-[#717171] mb-2 flex text-[12px]">
                      Conduct detailed background checks for informed and secure rental decisions
                    </div>

                  </div>

                </div>

              </div>
            </>
          )}

        </div>

      </div>
    </>
  );
};

export default NavLinks;
