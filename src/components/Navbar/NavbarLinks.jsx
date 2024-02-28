import { useState } from "react";
// import { links } from "./Mylinks";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { HiOutlineChevronUp, HiOutlineChevronDown} from "react-icons/hi";

// eslint-disable-next-line react/prop-types
function NavbarLinks({OpenScreen}) {
  // const [heading, setHeading] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [subHeading, setSubHeading] = useState("");

  const [naming, setNaming] = useState("");

  // eslint-disable-next-line no-unused-vars
  const [linkName, setLinkName] = useState({
    nameOne: "Solutions",
    nameTwo: "Products",
    nameThree: "Resources",
  });

  return (
    <> 
      

      <div className="overflow-x-auto md:w-full sm:w-full">
        <div
          className={`${
            naming === linkName.nameOne ||
            linkName.nameTwo ||
            linkName.nameThree
              ? ""
              : ""
          } px-1 text-left md:cursor-pointer group py-0`}
        >
          {/* <div className="text-rose-800">{naming}</div> */}
          <div>
            <h1
              className={`${
                naming === linkName.nameOne ? "text-primary" : ""
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
                { naming === linkName.nameOne ? <HiOutlineChevronUp/> : <HiOutlineChevronDown/> }
              </span>
            </h1>
            <div className=" top-0 left-0 w-full bg-white overflow-x-auto">
              {naming === "Solutions" && (
                <>
                  <div
                    className={`bg-white w-full left-0  flex flex-col px-1 justify-center py-1`}
                  >
                    <div className="py-1 flex flex-col xl:max-w-[30rem] lg:max-w-[15rem] lg:pr-[0rem] justify-center">
                      <div className="mt-1 mb-1 text-start text-[15px] leading-6 font-semibold">
                        Personal Shipping
                      </div>
                      <div className="text-gray-600 mb-2 flex text-[0.675rem] leading-5">
                        Receive packages in your name and we’ll ship it to your
                        doorstep
                      </div>
                      <div className="py-0 text-primary underline text-[10px]">
                        <span className="flex" onClick={OpenScreen}>
                          <Link to="/personal-shipping" className="flex">
                            Learn More
                            <span className="text-[10px] mt-1">
                              <RiArrowRightSLine />
                            </span>
                          </Link>
                        </span>
                      </div>
                    </div>
                    <div className="py-4 xl:pr-[7rem] lg:pr-[0rem] flex flex-col max-w-[30rem] justify-center ">
                      <div className="mt-2 mb-2 text-start text-[15px] leading-6 font-semibold">
                        <div>Small Business</div>
                      </div>
                      <div className="text-gray-600 mb-2 flex text-[0.675rem] leading-5">
                        Shipping from various stores? Manage, pay and choose
                        delivery all in one place
                      </div>
                      <div className="py-0 text-primary underline text-[10px]">
                        <span className="flex" onClick={OpenScreen}>
                          <Link to="/small-business" className="flex">
                            Learn More
                            <span className="text-[10px] mt-1">
                              <RiArrowRightSLine />
                            </span>
                          </Link>
                        </span>
                      </div>
                    </div>
                    <div className=" flex flex-col max-w-[30rem] justify-center bg-lime-400 py-2 px-4 w-full">
                      <div>
                        <div className="mt-2 mb-2 text-start text-[15px] leading-6 font-semibold">
                          Calculate your shipping Price
                        </div>
                      </div>
                      <div className="text-gray-600 mb-2 flex text-[0.675rem] leading-5">
                        We help thousands of people move shipments everyday.
                        Here’s what more than 100 of them have to say about
                        CartTel.
                      </div>
                      <div className="py-0 text-primary underline text-[10px]">
                        <span className="flex" onClick={OpenScreen}>
                          <Link to="/" className="flex">
                            Check Price
                            <span className="text-[10px] mt-1">
                              <RiArrowRightSLine />
                            </span>
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            <h1
              className={`${
                naming === linkName.nameTwo ? "text-primary" : ""
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
              { naming === linkName.nameTwo ? <HiOutlineChevronUp/> : <HiOutlineChevronDown/> }
                
              </span>
            </h1>
            <div className=" top-0 left-0 w-full bg-white overflow-x-auto">
              {naming === "Products" && (
                <>
                  <div
                    className={`bg-white w-full left-0  flex flex-col px-1 justify-center py-1`}
                  >
                    <div className="py-2 flex flex-col max-w-[30rem]">
                      <div className="mt-2 mb-2 text-start text-[15px] leading-6 font-semibold">
                        Procurement
                      </div>
                      <div className="text-gray-600 mb-2 flex text-[0.675rem] leading-5">
                        Receive packages in your name and we’ll ship it to your
                        doorstep Receive packages in your name and we’ll ship it
                        to your doorstep
                      </div>
                      <div className="py-0 text-primary underline text-[10px]">
                        <span className="flex" onClick={OpenScreen}>
                          <Link to="/procurement" className="flex">
                            Learn More
                            <span className="text-[10px] mt-1">
                              <RiArrowRightSLine />
                            </span>
                          </Link>
                        </span>
                      </div>
                    </div>

                    {/* <div className="h-48 w-[1px] bg-primary"></div> */}

                    <div className="py-2 flex flex-col max-w-[30rem]">
                      <div className="mt-2 mb-2 text-start text-[15px] leading-6 font-semibold">
                        <div>Logistics</div>
                      </div>
                      <div className="text-gray-600 mb-2 flex text-[0.65rem] leading-5">
                        Shipping from various stores? Manage, pay and choose
                        delivery all in one place Receive packages in your name
                        and we’ll ship it to your doorstep
                      </div>
                      <div className="py-0 text-primary underline text-[10px]">
                        <span className="flex" onClick={OpenScreen}>
                          <Link to="/logistics" className="flex">
                            Learn More
                            <span className="text-[10px] mt-1">
                              <RiArrowRightSLine />
                            </span>
                          </Link>
                        </span>
                      </div>
                    </div>

                    <div className="py-2 flex flex-col max-w-[30rem]">
                      <div className="mt-2 mb-2 text-start text-[15px] leading-6 font-semibold">
                        <div>International Shipping</div>
                      </div>
                      <div className="text-gray-600 mb-2 flex text-[0.65rem] leading-5">
                        Shipping from various stores? Manage, pay and choose
                        delivery all in one place Receive packages in your name
                        and we’ll ship it to your doorstep
                      </div>
                      <div className="py-0 text-primary underline text-[10px]">
                        <span className="flex" onClick={OpenScreen}>
                          <Link to="/shipping" className="flex">
                            Learn More
                            <span className="text-[10px] mt-1">
                              <RiArrowRightSLine />
                            </span>
                          </Link>
                        </span>
                      </div>
                    </div>

                    <div className="py-2 flex flex-col max-w-[30rem]">
                      <div>
                        <div className="mt-2 mb-2 text-start text-[15px] leading-6 font-semibold">
                          Warehousing
                        </div>
                      </div>
                      <div className="text-gray-600 mb-2 flex text-[0.65rem] leading-5">
                        We help thousands of people move shipments everyday.
                        choose delivery all in one place Receive packages in
                        your name and we’ll ship it to your doorstep
                      </div>
                      <div className="py-0 text-primary underline text-[10px]">
                        <span className="flex" onClick={OpenScreen}>
                          <Link to="/warehousing" className="flex">
                            Learn More
                            <span className="text-[10px] mt-1">
                              <RiArrowRightSLine />
                            </span>
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            <h1
              className={`${
                naming === linkName.nameThree ? "text-primary" : ""
              } py-4 flex justify-between items-center md:pr-0 pr-5 group`}
              onClick={() => {
                naming !== linkName.nameThree
                  ? setNaming(linkName.nameThree)
                  : setNaming("");
                setSubHeading("");
              }}
            >
              {linkName.nameThree}
              <span className="text-sm inline">
              { naming === linkName.nameThree ? <HiOutlineChevronUp/> : <HiOutlineChevronDown/> }
              </span>
            </h1>
            <div className=" top-0 left-0 w-full bg-white overflow-x-auto">
              {naming === "Resources" && (
                <>
                  <div
                    className={` bg-white w-full left-0  flex flex-col px-1 justify-center py-1`}
                  >
                    <div className="py-1 flex flex-col xl:max-w-[30rem] lg:max-w-[15rem] lg:pr-[0rem] justify-center">
                      <div className="mt-1 mb-1 text-start text-[15px] leading-6 font-semibold">
                        Contact Us
                      </div>
                      <div className="text-gray-600 mb-2 flex text-[0.675rem] leading-5">
                        Receive packages in your name and we’ll ship it to your
                        doorstep
                      </div>
                      <div className="py-0 text-primary underline text-[10px]">
                        <span className="flex" onClick={OpenScreen}>
                          <Link to="/" className="flex">
                            Learn More
                            <span className="text-[10px] mt-1">
                              <RiArrowRightSLine />
                            </span>
                          </Link>
                        </span>
                      </div>
                    </div>

                    <div className="py-4 xl:pr-[7rem] lg:pr-[0rem] flex flex-col max-w-[30rem] justify-center ">
                      <div className="mt-2 mb-2 text-start text-[15px] leading-6 font-semibold">
                        <div>Help Center</div>
                      </div>
                      <div className="text-gray-600 mt-0 mb-0 flex flex-col text-[0.675rem] leading-8 w-full ">
                        <div className="" onClick={OpenScreen}>
                          <Link to="/" className="flex">
                            Getting Started
                          </Link>
                        </div>
                        <div className="" onClick={OpenScreen}>
                          <Link to="/" className="flex">
                            Pricing & Payments
                          </Link>
                        </div>
                        <div className="" onClick={OpenScreen}>
                          <Link to="/" className="flex">
                            Shipping & Delivery
                          </Link>
                        </div>
                        <div className="" onClick={OpenScreen}>
                          <Link to="/" className="flex">
                            Create your Marketplace
                          </Link>
                        </div>
                      </div>
                      <div className="py-0 text-primary underline text-[10px]">
                        <span className="flex" onClick={OpenScreen}>
                          <Link to="/" className="flex">
                            Contact Center
                            <span className="text-[10px] mt-1">
                              <RiArrowRightSLine />
                            </span>
                          </Link>
                        </span>
                      </div>
                    </div>
                    <div className=" flex flex-col max-w-[30rem] justify-center bg-purple-400 py-2 px-4">
                      <div>
                        <div className="mt-2 mb-2 text-start text-[15px] leading-6 font-semibold">
                          Frequently asked questions
                        </div>
                      </div>
                      <div>
                        <div className="text-gray-600 mb-2 flex text-[0.675rem] leading-2">
                          What are your shipping rates?
                        </div>
                        <div className="text-gray-600 mb-2 flex text-[0.675rem] leading-2">
                          How long does it take to get my package delivered to
                          Nigeria?
                        </div>
                        <div className="text-gray-600 mb-2 flex text-[0.675rem] leading-2">
                          Do you ship from Nigeria to the US and from other
                          countries apart from the US to Nigeria?
                        </div>
                      </div>
                      <div className="py-0 text-primary underline text-[10px]">
                        <span className="flex" onClick={OpenScreen}>
                          <Link to="/" className="flex">
                            See More
                            <span className="text-[10px] mt-1">
                              <RiArrowRightSLine />
                            </span>
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
}

export default NavbarLinks;
