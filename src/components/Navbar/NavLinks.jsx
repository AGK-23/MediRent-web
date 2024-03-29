import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { links } from "../../data/Mylinks";
// import { linkData } from "./data";
import { RiArrowRightSLine } from "react-icons/ri";

import {
  FcPuzzle,
  FcRegisteredTrademark,
  FcUnlock,
  FcOnlineSupport,
  FcInTransit,
} from "react-icons/fc";


import { HiOutlineChevronUp, HiOutlineChevronDown } from "react-icons/hi";

import { AiOutlineBank, AiOutlineUngroup } from "react-icons/ai";

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
          <div  key={link.name} className="">
            <div
              className={`${heading === link.name ? "border-b-[3px] border-primary" : ""
                } px-3 text-left md:cursor-pointer group py-4 `}
            >
              {/* { link.name} */}
              {/* {heading} */}
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
                  {heading === link.name ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}

                  {/* <ion-icon
                    name={`${
                      heading === link.name ? "chevron-up" : "chevron-down"
                    }`}
                  ></ion-icon> */}
                </span>
                <span className="text-sm md:mt-1 md:ml-2  md:block hidden ">
                  {heading === link.name ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
                  {/* <ion-icon
                    name={`${
                      heading === link.name ? "chevron-up" : "chevron-down"
                    }`}
                  ></ion-icon> */}
                </span>
              </h1>
            </div>
            {/* Mobile menus */}
          </div>
        ))}

        <div className=" absolute top-10 left-0 w-full bg-white">
          {heading === "Solutions" && (
            <>
              <div
                className={`absolute bg-white w-full left-0 top-[1.15rem] border-t-[1px] flex gap-10 px-20 justify-center py-1 border-b-[1px] border-gray-200`}
              >
                <div className="py-5 flex flex-col max-w-[20rem] border-r-[1px] pr-8 border-gray-400 justify-center ">
                  <div className="xl:text-4xl lg:text-2xl justify-start flex text-primary">
                    <AiOutlineUngroup />
                  </div>
                  <div className="mt-2 mb-2 text-start text-lg leading-6 font-semibold">
                    Personal Shipping
                  </div>
                  <div className="text-gray-600 mb-2 flex text-[0.775rem] leading-8">
                    Receive packages in your name and we’ll ship it to your
                    doorstep
                  </div>
                  <div className="py-0 text-primary underline">
                    <span className="flex">
                      <Link to="/personal-shipping" className="flex">
                        Learn More
                        <span className="text-sm mt-1">
                          <RiArrowRightSLine />
                        </span>
                      </Link>
                    </span>
                    {/* <div className="w-[5.5rem] h-[1px] bg-primary"></div>r */}
                    {/* <ion-icon name="chevron-left" className="rotate-6"></ion-icon> */}
                  </div>
                </div>

                {/* <div className="h-48 w-[1px] bg-primary"></div> */}

                <div className="py-5 flex flex-col max-w-[20rem]  pr-8  justify-center">
                  <div className="xl:text-4xl lg:text-2xl justify-start flex text-primary">
                    <AiOutlineBank />
                  </div>
                  <div className="mt-2 mb-2 text-start text-lg leading-6 font-semibold">
                    <div>Small Business</div>
                  </div>
                  <div className="text-gray-600 mb-2 flex text-[0.775rem] leading-8">
                    Shipping from various stores? Manage, pay and choose delivery
                    all in one place
                  </div>
                  <div className="py-0 text-primary underline">
                    <span className="flex">
                      <Link to="/small-business" className="flex">
                        Learn More
                        <span className="text-sm mt-1">
                          <RiArrowRightSLine />
                        </span>
                      </Link>
                    </span>
                    {/* <div className="w-[5.5rem] h-[1px] bg-primary"></div> */}
                    {/* <ion-icon name="chevron-left" className="rotate-6"></ion-icon> */}
                  </div>
                </div>
                <div className=" bg-lime-400 p-2 flex flex-col max-w-[20rem] justify-center py-6 px-4">
                  <div>
                    <div className="mt-2 mb-2 text-start text-lg leading-6 font-semibold">
                      Calculate your shipping Price
                    </div>
                  </div>
                  <div className="text-gray-600 mb-2 flex text-[0.775rem] leading-8">
                    We help thousands of people move shipments everyday. Here’s
                    what more than 100 of them have to say about CartTel.
                  </div>
                  <div className="py-0 text-primary underline">
                    <span className="">
                      <Link to="/" className="flex">
                        Check Price
                        <span className="text-sm mt-1">
                          <RiArrowRightSLine />
                        </span>
                      </Link>
                    </span>
                    {/* <div className="w-[10rem] h-[1px] bg-primary"></div> */}
                    {/* <ion-icon name="chevron-left" className="rotate-6"></ion-icon> */}
                  </div>
                </div>
              </div>
            </>
          )}
          {heading === "Products" && (
            <>
              <div
                className={`absolute bg-white w-full left-0 top-[1.15rem] border-t-[1px] flex gap-10 px-20 justify-center py-1 border-b-[1px] border-gray-200`}
              >
                <div className="p-4 flex flex-col max-w-[20rem] border-r-[1px] pr-8 border-gray-400">
                  <div className="xl:text-4xl lg:text-2xl justify-start flex">
                    <FcUnlock />
                  </div>
                  <div className="mt-2 mb-2 text-start text-lg leading-6 font-semibold">
                    Procurement
                  </div>
                  <div className="text-gray-600 mb-2 flex xl:text-[0.775rem] lg:text-[0.65rem] xl:leading-6 lg:leading-5">
                    Receive packages in your name and we’ll ship it to your
                    doorstep Receive packages in your name and we’ll ship it to
                    your doorstep
                  </div>
                  <div className="py-0 text-primary underline">
                    <span className="flex">
                      <Link to="/procurement" className="flex">
                        Learn More
                        <span className="text-sm mt-1">
                          <RiArrowRightSLine />
                        </span>
                      </Link>
                    </span>
                    {/* <div className="w-[5.5rem] h-[1px] bg-primary"></div> */}
                    {/* <ion-icon name="chevron-left" className="rotate-6"></ion-icon> */}
                  </div>
                </div>

                {/* <div className="h-48 w-[1px] bg-primary"></div> */}

                <div className="p-4 flex flex-col max-w-[20rem] border-r-[1px] pr-8 border-gray-400">
                  <div className="xl:text-4xl lg:text-2xl justify-start flex">
                    <FcRegisteredTrademark />
                  </div>
                  <div className="mt-2 mb-2 text-start text-lg leading-6 font-semibold">
                    <div>Logistics</div>
                  </div>
                  <div className="text-gray-600 mb-2 flex xl:text-[0.775rem] lg:text-[0.65rem] xl:leading-6 lg:leading-5">
                    Shipping from various stores? Manage, pay and choose delivery
                    all in one place Receive packages in your name and we’ll ship
                    it to your doorstep
                  </div>
                  <div className="py-0 text-primary underline">
                    <span className="flex">
                      <Link to="/logistics" className="flex">
                        Learn More
                        <span className="text-sm mt-1">
                          <RiArrowRightSLine />
                        </span>
                      </Link>
                    </span>
                    {/* <div className="w-[5.5rem] h-[1px] bg-primary"></div> */}
                    {/* <ion-icon name="chevron-left" className="rotate-6"></ion-icon> */}
                  </div>
                </div>

                {/* <div className="h-48 w-[1px] bg-primary"></div> */}

                <div className="p-4 flex flex-col max-w-[20rem] border-r-[1px] pr-8 border-gray-400">
                  <div className="xl:text-4xl lg:text-2xl justify-start flex">
                    <FcInTransit />
                  </div>
                  <div className="mt-2 mb-2 text-start text-lg leading-6 font-semibold">
                    <div>International Shipping</div>
                  </div>
                  <div className="text-gray-600 mb-2 flex xl:text-[0.775rem] lg:text-[0.65rem] xl:leading-6 lg:leading-5">
                    Shipping from various stores? Manage, pay and choose delivery
                    all in one place Receive packages in your name and we’ll ship
                    it to your doorstep
                  </div>
                  <div className="py-0 text-primary underline">
                    <span className="flex">
                      <Link to="/shipping" className="flex">
                        Learn More
                        <span className="text-sm mt-1">
                          <RiArrowRightSLine />
                        </span>
                      </Link>
                    </span>
                    {/* <div className="w-[5.5rem] h-[1px] bg-primary"></div> */}
                    {/* <ion-icon name="chevron-left" className="rotate-6"></ion-icon> */}
                  </div>
                </div>

                <div className="p-4 flex flex-col max-w-[25rem]">
                  <div className="xl:text-4xl lg:text-2xl justify-start flex">
                    <FcPuzzle />
                  </div>
                  <div>
                    <div className="mt-2 mb-2 text-start text-lg leading-6 font-semibold">
                      Warehousing
                    </div>
                  </div>
                  <div className="text-gray-600 mb-2 flex xl:text-[0.775rem] lg:text-[0.65rem] xl:leading-6 lg:leading-5">
                    We help thousands of people move shipments everyday. choose
                    delivery all in one place Receive packages in your name and
                    we’ll ship it to your doorstep
                  </div>
                  <div className="py-0 text-primary underline">
                    <span className="flex">
                      <Link to="/warehousing" className="flex">
                        Learn More
                        <span className="text-sm mt-1">
                          <RiArrowRightSLine />
                        </span>
                      </Link>
                    </span>
                    {/* <div className="w-[5.5rem] h-[1px] bg-primary"></div> */}
                    {/* <ion-icon name="chevron-left" className="rotate-6"></ion-icon> */}
                  </div>
                </div>
              </div>
            </>
          )}
          {heading === "Resources" && (
            <>
              <div
                className={`absolute bg-white w-full left-0 top-[1.15rem] border-t-[1px] flex gap-10 px-20 justify-center py-1 border-b-[1px] border-gray-200`}
              >
                <div className="py-5 flex flex-col xl:max-w-[20rem] lg:max-w-[15rem] border-r-[1px] xl:pr-8 lg:pr-[0rem] border-gray-400 justify-center">
                  <div className="xl:text-4xl lg:text-2xl justify-start flex">
                    <FcOnlineSupport />
                  </div>
                  <div className="mt-2 mb-2 text-start text-lg leading-6 font-semibold">
                    Contact Us
                  </div>
                  <div className="text-gray-600 mb-2 flex text-[0.775rem] leading-8">
                    Receive packages in your name and we’ll ship it to your
                    doorstep
                  </div>
                  <div className="py-0 text-primary underline">
                    <span className="flex">
                      <Link to="/" className="flex">
                        Learn More
                        <span className="text-sm mt-1">
                          <RiArrowRightSLine />
                        </span>
                      </Link>
                    </span>
                    {/* <div className="w-[5.5rem] h-[1px] bg-primary"></div> */}
                    {/* <ion-icon name="chevron-left" className="rotate-6"></ion-icon> */}
                  </div>
                </div>

                {/* <div className="h-48 w-[1px] bg-primary"></div> */}

                <div className="py-5 xl:pr-[7rem] lg:pr-[0rem] flex flex-col max-w-[20rem] justify-center ">
                  {/* <div className="xl:text-4xl lg:text-2xl justify-start flex">
                    <FcRegisteredTrademark />
                  </div> */}
                  <div className="mt-2 mb-2 text-start text-lg leading-6 font-semibold">
                    <div>Help Center</div>
                  </div>
                  <ul className="text-gray-600 mt-2 mb-2 flex flex-col text-[.80rem] leading-9 w-full ">
                    <li>
                      <Link to="/" className="flex">
                        Getting Started
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="flex">
                        Pricing & Payments
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="flex">
                        Shipping & Delivery
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="flex">
                        Create your Marketplace
                      </Link>
                    </li>
                  </ul>
                  <div className="py-0 text-primary underline">
                    <span className="flex">
                      <Link to="/" className="flex">
                        contact center
                        <span className="text-sm mt-1">
                          <RiArrowRightSLine />
                        </span>
                      </Link>
                    </span>
                    {/* <div className="w-[8.5rem] h-[1px] bg-primary"></div> */}
                    {/* <ion-icon name="chevron-left" className="rotate-6"></ion-icon> */}
                  </div>
                </div>

                {/* <div className="h-48 w-[1px] bg-primary"></div> */}

                <div className=" flex flex-col max-w-[20rem] justify-center bg-purple-400 py-6 px-4">
                  {/* <div className="xl:text-4xl lg:text-2xl justify-start flex">
                    <FcPuzzle />
                  </div> */}
                  <div>
                    <div className="mt-2 mb-2 text-start text-lg leading-6 font-semibold">
                      Frequently asked questions
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-600 mb-2 flex text-[0.775rem] leading-2">
                      What are your shipping rates?
                    </div>
                    <div className="text-gray-600 mb-2 flex text-[0.775rem] leading-2">
                      How long does it take to get my package delivered to
                      Nigeria?
                    </div>
                    <div className="text-gray-600 mb-2 flex text-[0.775rem] leading-2">
                      Do you ship from Nigeria to the US and from other countries
                      apart from the US to Nigeria?
                    </div>
                  </div>
                  <div className="py-0 text-primary underline">
                    <span className="flex">
                      <Link to="/" className="flex">
                        See More
                        <span className="text-sm mt-1">
                          <RiArrowRightSLine />
                        </span>
                      </Link>
                    </span>
                    {/* <div className="w-[4.5rem] h-[1px] bg-primary"></div> */}
                    {/* <ion-icon name="chevron-left" className="rotate-6"></ion-icon> */}
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
