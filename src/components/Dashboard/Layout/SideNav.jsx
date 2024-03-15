/* eslint-disable react/prop-types */
import { useState } from "react";

import { RiDashboardLine, RiPantoneLine } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlineMoveToInbox, MdOutlinePayment } from "react-icons/md";
// import { IoMdNotificationsOutline } from "react-icons/io";
import { FiPackage } from "react-icons/fi";
import { AiOutlineTag } from "react-icons/ai";
import { BiStoreAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

// import { RiArrowRightSLine } from "react-icons/ri";

// import send from "../../../assets/images/send.png";
import useMediaQuery from "../../../hooks/useMediaQuery";
import arrowRight from "../../../assets/images/arrow-right.png";
// import MinimalLayout from '../MinimalLayout';
import Appheader from "../Layout/Appheader.jsx";
import { HiOutlineChevronRight, HiOutlineChevronDown } from "react-icons/hi";

import Logo from "../../../assets/logo.png";

import { PiHouseDuotone } from "react-icons/pi";
import { LuUser2 } from "react-icons/lu";
import { AiTwotoneFileText } from "react-icons/ai";










const SideNav = ({ OpenScreen, open }) => {
    const [heading, setHeading] = useState("Dashboard");
    const isAboveMediumScreens = useMediaQuery("(min-width: 1024px)");

    // eslint-disable-next-line no-unused-vars
    const [subHeading, setSubHeading] = useState("");
    // const [open, setOpen] = useState(false);
    const [naming, setNaming] = useState("Dashboard");

    // eslint-disable-next-line no-unused-vars
    const [linkName, setLinkName] = useState({
        // nameOne: "Sales",
        // nameTwo: "Supply Chain",
        // nameThree: "Manage",
        nameFour: "Dashboard",
        nameFive: "Tenants",
        nameSix: "My Listings",
        // nameSeven: "Expenses",
        nameEight: "Wallet",
        // nameNine: "Cash Flow",
        nameTen: "Lease",
        // nameZero: "Payments",
    });

    const Menus = [
        {
            id: 0,
            title: "Dashboard",
            src: <RiDashboardLine />,
            to: "/admin/dashboard/landlord",
        },
        { 
            id: 2, 
            title: "My Listings", 
            src: <PiHouseDuotone />, 
            to: "/admin/dashboard/listing" 
        },
        // {
        //     id: 5,
        //     title: "Sales",
        //     src: <BiStoreAlt />,
        //     gap: true,
        //     to: "/admin/sales",
        //     arrow: true,
        // },
        {
            id: 3,
            title: "Tenants",
            src: <LuUser2 />,
            to: "/admin/dashboard/landlord",
        },
        // {
        //     id: 10,
        //     title: "Supply Chain",
        //     src: <BiStoreAlt />,
        //     to: "/admin/supply-chain",
        //     arrow: true,
        // },
        // {
        //     id: 4,
        //     title: "Manage",
        //     src: <AiOutlineTag />,
        //     gap: true,
        //     to: "/admin/pickups",
        //     arrow: true,
        // },
        { 
            id: 1, 
            title: "Wallet", 
            src: <IoWalletOutline />, 
            to: "/admin/dashboard/landlord" 
        },
        // {
        //     id: 6,
        //     title: "Cash Flow",
        //     src: <RiPantoneLine />,
        //     to: "/admin/cash-flow",
        //     arrow: true,
        // },
        {
            id: 7,
            title: "Lease",
            src: <AiTwotoneFileText />,
            gap: true,
            to: "/admin/dashboard/landlord",
        },
        // {
        //     id: 8,
        //     title: "Expenses",
        //     src: <AiTwotoneFileText />,
        //     to: "/admin/expenses",
        //     arrow: true,
        // },
        // {
        //     id: 9,
        //     title: "Payments",
        //     src: <MdOutlinePayment />,
        //     to: "/admin/dashboard/landlord",
        // },
    ];

    return (
        <div className="">
            {isAboveMediumScreens && (
                <div>
                    {/* <Appheader OpenScreen={OpenScreen} /> */}
                    <div className="flex relative">
                        <div className="flex relative">
                            <div className="fixed  z-10">
                                <div
                                    className={` ${open ? "w-full" : "w-[4rem]"
                                        } flex flex-col justify-between relative h-screen py-4 px-2 border-r-[1px] border-gray-200 duration-300 z-20 bg-white`}
                                >
                                    <div className="">
                                        <div>
                                            <img
                                                src={arrowRight}
                                                className={`absolute cursor-pointer -right-3 top-14 w-7 bg-white
                                                border-[1px] border-gray-300 z-20 rounded-full  ${!open && "rotate-180"
                                                    }`}
                                                onClick={OpenScreen}
                                            />
                                            <Link
                                                to="/admin/dashboard/landlord"
                                                className="flex gap-x-4 items-center"
                                            >
                                                {/* <img
                                                    src={send}
                                                    className={`w-8 h-8 cursor-pointer duration-500 ${open && "rotate-[360deg]"
                                                        }`}
                                                /> */}
                                                <h1
                                                    className={`text-slate-600 origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                                                        }`}
                                                >
                                                    <div className=" text-start flex justify-start mx-auto text-primary cursor-pointer">
                                                        

                                                        <Link to="/" className="">
                                                            <img
                                                                alt=""
                                                                src={Logo}
                                                                className="text-[1px] w-32 h-16 cursor-pointer"
                                                            />
                                                        </Link>
                                                    </div>
                                                </h1>
                                            </Link>
                                        </div>
                                        <div className="flex justify-between flex-col">
                                            <ul className="pt-6">
                                                {Menus.map((Menu, index) => (
                                                    <Link key={index} className="" to={Menu.to}>
                                                        <div
                                                            onMouseOver={() => {
                                                                heading !== Menu.title
                                                                    ? setHeading(Menu.title)
                                                                    : setHeading(Menu.title);
                                                            }}
                                                            className={`flex rounded-md p-2 cursor-pointer hover:bg-third text-slate-700 text-sm items-center gap-x-4 
                                                            ${Menu.gap
                                                                    ? "mt-4"
                                                                    : "mt-2"
                                                                } 
                                                            ${heading ===
                                                                Menu.title &&
                                                                "bg-third"
                                                                } `}
                                                        >
                                                            <li key={index} className="flex flex-row w-full">
                                                                <span className="flex justify-between w-full">
                                                                    <span className="flex flex-row">
                                                                        <span className="text-lg">{Menu.src}</span>

                                                                        <span
                                                                            className={`${!open && "hidden"
                                                                                } ml-2 origin-left duration-200 font-medium`}
                                                                        >
                                                                            {Menu.title}
                                                                        </span>
                                                                    </span>
                                                                    <span
                                                                        className={` ${open ? "flex" : "hidden"
                                                                            } ml-4 flex justify-center items-center`}
                                                                    >
                                                                        {Menu.arrow ? (
                                                                            <HiOutlineChevronRight />
                                                                        ) : (
                                                                            ""
                                                                        )}
                                                                    </span>
                                                                </span>
                                                            </li>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </ul>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {!isAboveMediumScreens && (
                <div className="block">
                    <Appheader OpenScreen={OpenScreen} />

                    <div className="flex ">
                        <div className="relative z-40 ">
                            <div
                                onClick={OpenScreen}
                                className={`
                                fixed left-0 top-0 bg-slate-800 bg-opacity-75 md:bg-opacity-50 w-full min-h-screen
                                ${open ? "left-0" : "left-[-100%]"}
                            `}
                            ></div>

                            <div className="relative">
                                <div className=" justify-between flex-col bg-white relative flex">
                                    <div className="block relative">
                                        <div
                                            className={`
                                            bg-white fixed h-fit top-[0px] overflow-y-auto bottom-0 py-10 px-4 md:w-[450px] w-fit
                                                duration-500 ${open
                                                    ? "left-0"
                                                    : "left-[-100%]"
                                                }
                                            `}
                                            style={{
                                                height: "100%",
                                                flex: "1",
                                                padding: "1rem 1.1rem 1rem 1rem",
                                                overflowY: "auto",
                                                overflowX: "hidden",
                                            }}
                                        >
                                            <Link
                                                to="/admin/dashboard/landlord"
                                                className="flex gap-x-4 items-center"
                                            >
                                                
                                                <h1
                                                    className={`text-slate-600 origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                                                        }`}
                                                >
                                                    <div className=" text-start flex justify-start mx-auto text-primary cursor-pointer">
                                                        

                                                        <Link to="/" className="">
                                                            <img
                                                                alt=""
                                                                src={Logo}
                                                                className="text-[1px] w-32 h-16 cursor-pointer"
                                                            />
                                                        </Link>
                                                    </div>
                                                </h1>
                                            </Link>

                                            <div className="flex justify-between flex-col mt-10">
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
                                                            {/* <div className="text-rose-800">{naming}</div> */}
                                                            <div>
                                                                <Link to="/admin/dashboard/landlord">
                                                                    <div
                                                                        onClick={() => {
                                                                            naming !== linkName.nameFour
                                                                                ? setNaming(linkName.nameFour)
                                                                                : setNaming("");
                                                                            setSubHeading("");
                                                                        }}
                                                                        className={`${naming === linkName.nameFour
                                                                                ? " bg-third"
                                                                                : ""
                                                                            } mr-4 flex rounded-md p-2 cursor-pointer hover:bg-third text-slate-700 text-sm items-center gap-x-4 w-full`}
                                                                    >
                                                                        <span className="flex justify-between w-full ">
                                                                            <span className="flex flex-row">
                                                                                <span className="text-lg">
                                                                                    <RiDashboardLine />
                                                                                </span>

                                                                                <span
                                                                                    className={`${!open && "hidden"
                                                                                        } ml-2 origin-left duration-200 font-medium`}
                                                                                >
                                                                                    {linkName.nameFour}
                                                                                    {/* {naming} */}
                                                                                </span>
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </Link>

                                                                <Link to="/admin/dashboard/landlord">
                                                                    <div
                                                                        onClick={() => {
                                                                            naming !== linkName.nameSix
                                                                                ? setNaming(linkName.nameSix)
                                                                                : setNaming("");
                                                                            setSubHeading("");
                                                                        }}
                                                                        className={`${naming === linkName.nameSix
                                                                                ? "bg-third"
                                                                                : ""
                                                                            } mt-3 mr-4 flex rounded-md p-2 cursor-pointer hover:bg-third text-slate-700 text-sm items-center gap-x-4 w-full`}
                                                                    >
                                                                        <span className="flex justify-between w-full ">
                                                                            <span className="flex flex-row">
                                                                                <span className="text-lg">
                                                                                    <PiHouseDuotone />
                                                                                </span>

                                                                                <span
                                                                                    className={`${!open && "hidden"
                                                                                        } ml-2 origin-left duration-200 font-medium`}
                                                                                >
                                                                                    {linkName.nameSix}
                                                                                </span>
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </Link>

                                                                

                                                                <Link to="/admin/dashboard/landlord">
                                                                    <div
                                                                        onClick={() => {
                                                                            naming !== linkName.nameFive
                                                                                ? setNaming(linkName.nameFive)
                                                                                : setNaming("");
                                                                            setSubHeading("");
                                                                        }}
                                                                        className={`${naming === linkName.nameFive
                                                                                ? "bg-third"
                                                                                : ""
                                                                            } mt-3 mr-4 flex rounded-md p-2 cursor-pointer hover:bg-third text-slate-700 text-sm items-center gap-x-4  w-full`}
                                                                    >
                                                                        <span className="flex justify-between w-full ">
                                                                            <span className="flex flex-row">
                                                                                <span className="text-lg">
                                                                                    <LuUser2 />
                                                                                </span>

                                                                                <span
                                                                                    className={`${!open && "hidden"
                                                                                        } ml-2 origin-left duration-200 font-medium`}
                                                                                >
                                                                                    {linkName.nameFive}
                                                                                </span>
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </Link>

                                                                

                                                                

                                                                <Link to="/admin/dashboard/landlord">
                                                                    <div
                                                                        onClick={() => {
                                                                            naming !== linkName.nameEight
                                                                                ? setNaming(linkName.nameEight)
                                                                                : setNaming("");
                                                                            setSubHeading("");
                                                                        }}
                                                                        className={`${naming === linkName.nameEight
                                                                                ? "bg-third"
                                                                                : ""
                                                                            } mt-3 mr-4 flex rounded-md p-2 cursor-pointer hover:bg-third text-slate-700 text-sm items-center gap-x-4 w-full`}
                                                                    >
                                                                        <span className="flex justify-between w-full ">
                                                                            <span className="flex flex-row">
                                                                                <span className="text-lg">
                                                                                    <IoWalletOutline />
                                                                                </span>

                                                                                <span
                                                                                    className={`${!open && "hidden"
                                                                                        } ml-2 origin-left duration-200 font-medium`}
                                                                                >
                                                                                    {linkName.nameEight}
                                                                                </span>
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </Link>

                                                                

                                                                <Link to="/admin/dashboard/landlord">
                                                                    <div
                                                                        onClick={() => {
                                                                            naming !== linkName.nameTen
                                                                                ? setNaming(linkName.nameTen)
                                                                                : setNaming("");
                                                                            setSubHeading("");
                                                                        }}
                                                                        className={`${naming === linkName.nameTen
                                                                                ? "bg-third"
                                                                                : ""
                                                                            } mt-3 mr-4 flex rounded-md p-2 cursor-pointer hover:bg-third text-slate-700 text-sm items-center gap-x-4 w-full`}
                                                                    >
                                                                        <span className="flex justify-between w-full ">
                                                                            <span className="flex flex-row">
                                                                                <span className="text-lg">
                                                                                    <AiTwotoneFileText />
                                                                                </span>

                                                                                <span
                                                                                    className={`${!open && "hidden"
                                                                                        } ml-2 origin-left duration-200 font-medium`}
                                                                                >
                                                                                    {linkName.nameTen}
                                                                                </span>
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </Link>

                                                                

                                                                {/* <Link to="/admin/dashboard/landlord">
                                                                    <div
                                                                        onClick={() => {
                                                                            naming !== linkName.nameZero
                                                                                ? setNaming(linkName.nameZero)
                                                                                : setNaming("");
                                                                            setSubHeading("");
                                                                        }}
                                                                        className={`${naming === linkName.nameZero
                                                                                ? "bg-third"
                                                                                : ""
                                                                            } mt-3 mr-4 flex rounded-md p-2 cursor-pointer hover:bg-third text-slate-700 text-sm items-center gap-x-4 w-full`}
                                                                    >
                                                                        <span className="flex justify-between w-full ">
                                                                            <span className="flex flex-row">
                                                                                <span className="text-lg">
                                                                                <MdOutlinePayment />
                                                                                </span>

                                                                                <span
                                                                                    className={`${!open && "hidden"
                                                                                        } ml-2 origin-left duration-200 font-medium`}
                                                                                >
                                                                                    {linkName.nameZero}
                                                                                </span>
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </Link> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="hidden">
                            <div className={`relative flex flex-col w-full `}>
                                <div className="bg-[#dd1313] h-screen text-lg font-semibold text-lime-600 w-full z-0 relative">
                                    <div className="top-[6rem] relative text-secondary font-semibold ">
                                        Welcome Back to Carttel
                                    </div>
                                </div>
                                <div className="bg-[#f3f3f3] h-screen text-lg font-semibold text-lime-600 w-full z-0">
                                    <div className="top-[6rem] relative text-secondary font-semibold ">
                                        Welcome Back to Carttel
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default SideNav;
