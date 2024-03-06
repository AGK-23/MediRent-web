/* eslint-disable react/prop-types */
import { useState, } from "react";

import { RiDashboardLine, RiPantoneLine } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlineMoveToInbox, MdOutlinePayment } from "react-icons/md";
// import { IoMdNotificationsOutline } from "react-icons/io";
import { FiPackage } from "react-icons/fi";
import { AiOutlineTag } from "react-icons/ai";
import { BiStoreAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

// import { RiArrowRightSLine } from "react-icons/ri";

import send from "../../../assets/images/send.png";
import useMediaQuery from "../../../hooks/useMediaQuery";
import arrowRight from "../../../assets/images/arrow-right.png";
// import MinimalLayout from '../MinimalLayout';
import Appheader from "../Layout/Appheader.jsx";
import { HiOutlineChevronRight, HiOutlineChevronDown } from "react-icons/hi";



const SideNav = ({ OpenScreen, open }) => {
    const [heading, setHeading] = useState("Business Overview");
    const isAboveMediumScreens = useMediaQuery("(min-width: 1024px)");

    // eslint-disable-next-line no-unused-vars
    const [subHeading, setSubHeading] = useState("");
    // const [open, setOpen] = useState(false);
    const [naming, setNaming] = useState("Business Overview");

    // eslint-disable-next-line no-unused-vars
    const [linkName, setLinkName] = useState({
        nameOne: "Sales",
        nameTwo: "Supply Chain",
        nameThree: "Manage",
        nameFour: "Business Overview",
        nameFive: "Reports",
        nameSix: "Task",
        nameSeven: "Expenses",
        nameEight: "Wallet",
        nameNine: "Cash Flow",
        nameTen: "Utiliity Bills",
        nameZero: "Transactions",
    });



    const Menus = [
        { id: 0, title: "Business Overview", src: <RiDashboardLine />, to: '/admin/dashboard' },
        { id: 2, title: "Task", src: <FiPackage />, to: '/admin/task' },
        { id: 5, title: "Sales", src: <BiStoreAlt />, gap: true, to: '/admin/sales', arrow: true },
        { id: 3, title: "Reports", src: <MdOutlineMoveToInbox />, to: '/admin/reports' },
        { id: 10, title: "Supply Chain", src: <BiStoreAlt />, to: '/admin/supply-chain', arrow: true },
        { id: 4, title: "Manage", src: <AiOutlineTag />, gap: true, to: '/admin/pickups', arrow: true },
        { id: 1, title: "Wallet", src: <IoWalletOutline />, to: '/admin/wallet' },
        { id: 6, title: "Cash Flow", src: <RiPantoneLine />, to: '/admin/cash-flow', arrow: true },
        { id: 7, title: "Utility Bills", src: <BiStoreAlt />, gap: true, to: '/admin/utility-bill' },
        { id: 8, title: "Expenses", src: <BiStoreAlt />, to: '/admin/expenses', arrow: true },
        { id: 9, title: "Transactions", src: <MdOutlinePayment />, to: '/admin/transactions' },
    ];


    return (
        <div className="">
            {isAboveMediumScreens && (
                <div>
                    <div className="flex relative">
                        <Appheader OpenScreen={OpenScreen} />
                        <div className="flex relative">
                            <div className="fixed top-[3.3rem] z-30">
                                <div
                                    className={` ${open ? "w-[13rem]" : "w-[4rem]"
                                        } flex flex-col justify-between relative h-screen py-4 px-2 border-r-[1px] border-gray-200  duration-300 z-20 bg-white `}
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
                                            <Link to="/admin/dashboard" className="flex gap-x-4 items-center">
                                                <img
                                                    src={send}
                                                    className={`w-8 h-8 cursor-pointer duration-500 ${open && "rotate-[360deg]"
                                                        }`}
                                                />
                                                <h1
                                                    className={`text-slate-600 origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                                                        }`}
                                                >
                                                    <div className=" text-start flex justify-start mx-auto text-primary cursor-pointer">
                                                        <div className="link">
                                                            <span className="text-secondary text-3xl font-semibold capitalize">
                                                                Cart<span className="text-[#fbc41d]">Tel</span>
                                                            </span>
                                                        </div>
                                                        <span className="dot font-bold text-primary w-5 text-3xl">
                                                            .
                                                        </span>
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
                                                                    : setHeading(Menu.title)
                                                            }}
                                                            className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-secondary text-sm items-center gap-x-4 
                                                            ${Menu.gap ? "mt-4" : "mt-2"} 
                                                            ${heading === Menu.title && "bg-[#fbc41d]"} `}
                                                        >
                                                            <li
                                                                key={index}
                                                                className="flex flex-row w-full"
                                                            >
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
                                                                    >{Menu.arrow ? <HiOutlineChevronRight /> : ""}</span>
                                                                </span>

                                                            </li>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </ul>
                                            <div className="">
                                                {heading === "Manage" && (
                                                    <div
                                                        className={`${open ? "w-40 left-52" : "w-[11rem] left-16"
                                                            } border z-10 absolute bottom-[0rem] h-screen bg-secondary border-secondary  flex flex-col px-2 py-2`}
                                                    >
                                                        <div
                                                        >
                                                            <Link className="" to="/admin/sales-receipt">
                                                                <div className=" flex flex-row max-w-[20rem] items-center hover:bg-[#fbc41d] text-white hover:text-secondary rounded-lg w-full">
                                                                    {/* <div className="xl:text-xl lg:text-xl justify-start flex text-primary">
                                                                        <AiOutlineTag />
                                                                    </div> */}
                                                                    <div className="ml-6 mt-2 mb-2 text-start text-xs leading-6 font-medium ">
                                                                        Store
                                                                    </div>

                                                                </div>
                                                            </Link>

                                                            <Link className="" to="/admin/invoices">
                                                                <div className="mt-2 flex flex-row max-w-[20rem] items-center hover:bg-[#fbc41d] text-white hover:text-secondary rounded-lg w-full">
                                                                    {/* <div className="xl:text-xl lg:text-xl justify-start flex text-primary">
                                                                        <AiOutlineTag />
                                                                    </div> */}
                                                                    <div className="ml-6 mt-2 mb-2 text-start text-xs leading-6 font-medium  ">
                                                                        Inventory
                                                                    </div>

                                                                </div>
                                                            </Link>
                                                            <Link className="" to="/admin/invoices">
                                                                <div className="mt-2 flex flex-row max-w-[20rem] items-center hover:bg-[#fbc41d] text-white hover:text-secondary rounded-lg w-full">
                                                                    {/* <div className="xl:text-xl lg:text-xl justify-start flex text-primary">
                                                                        <AiOutlineTag />
                                                                    </div> */}
                                                                    <div className="ml-6 mt-2 mb-2 text-start text-xs leading-6 font-medium  ">
                                                                        Customers
                                                                    </div>

                                                                </div>
                                                            </Link>
                                                            <Link className="" to="/admin/invoices">
                                                                <div className="mt-2 flex flex-row max-w-[20rem] items-center hover:bg-[#fbc41d] text-white hover:text-secondary rounded-lg w-full">
                                                                    {/* <div className="xl:text-xl lg:text-xl justify-start flex text-primary">
                                                                        <AiOutlineTag />
                                                                    </div> */}
                                                                    <div className="ml-6 mt-2 mb-2 text-start text-xs leading-6 font-medium  ">
                                                                        Team
                                                                    </div>

                                                                </div>
                                                            </Link>
                                                            <Link className="" to="/admin/invoices">
                                                                <div className="mt-2 flex flex-row max-w-[20rem] items-center hover:bg-[#fbc41d] text-white hover:text-secondary rounded-lg w-full">
                                                                    {/* <div className="xl:text-xl lg:text-xl justify-start flex text-primary">
                                                                        <AiOutlineTag />
                                                                    </div> */}
                                                                    <div className="ml-6 mt-2 mb-2 text-start text-xs leading-6 font-medium  ">
                                                                        Business Network
                                                                    </div>

                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                )}

                                            </div>

                                            <div className="">
                                                {heading === "Supply Chain" && (
                                                    <div
                                                        className={`${open ? "w-40 left-52" : "w-[11rem] left-16"
                                                            } border h-screen z-10 absolute bottom-[0rem] bg-secondary border-secondary  flex flex-col px-2 py-2`}
                                                    >
                                                        <div
                                                        >
                                                            <Link className="" to="/admin/sales-receipt">
                                                                <div className=" flex flex-row max-w-[20rem] items-center hover:bg-[#fbc41d] text-white hover:text-secondary rounded-lg ">
                                                                    {/* <div className="xl:text-xl lg:text-xl justify-start flex text-primary">
                                                                        <AiOutlineTag />
                                                                    </div> */}
                                                                    <div className="ml-6 mt-2 mb-2 text-start text-xs leading-6 font-medium ">
                                                                        Shipping
                                                                    </div>

                                                                </div>
                                                            </Link>

                                                            <Link className="" to="/admin/invoices">
                                                                <div className="mt-2 flex flex-row max-w-[20rem] items-center hover:bg-[#fbc41d] text-white hover:text-secondary rounded-lg w-full">
                                                                    {/* <div className="xl:text-xl lg:text-xl justify-start flex text-primary">
                                                                        <AiOutlineTag />
                                                                    </div> */}
                                                                    <div className="ml-6 mt-2 mb-2 text-start text-xs leading-6 font-medium  ">
                                                                        Procurement
                                                                    </div>

                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="">
                                                {heading === "Cash Flow" && (
                                                    <div
                                                        className={`${open ? "w-40 left-52" : "w-[11rem] left-16"
                                                            } border z-10 absolute bottom-[0rem] h-screen bg-secondary border-secondary  flex flex-col px-2 py-2`}
                                                    >
                                                        <div
                                                        >
                                                            <Link className="" to="/admin/sales-receipt">
                                                                <div className=" flex flex-row max-w-[20rem] items-center hover:bg-[#fbc41d] text-white hover:text-secondary rounded-lg w-full">
                                                                    {/* <div className="xl:text-xl lg:text-xl justify-start flex text-primary">
                                                                        <AiOutlineTag />
                                                                    </div> */}
                                                                    <div className="ml-6 mt-2 mb-2 text-start text-xs leading-6 font-medium ">
                                                                        Overview
                                                                    </div>

                                                                </div>
                                                            </Link>

                                                            <Link className="" to="/admin/invoices">
                                                                <div className="mt-2 flex flex-row max-w-[20rem] items-center hover:bg-[#fbc41d] text-white hover:text-secondary rounded-lg w-full">
                                                                    {/* <div className="xl:text-xl lg:text-xl justify-start flex text-primary">
                                                                        <AiOutlineTag />
                                                                    </div> */}
                                                                    <div className="ml-6 mt-2 mb-2 text-start text-xs leading-6 font-medium  ">
                                                                        Planner
                                                                    </div>

                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="">
                                                {heading === "Sales" && (
                                                    <div
                                                        className={`${open ? "w-40 left-52" : "w-[11rem] left-16"
                                                            } border h-screen z-10 absolute bottom-[0rem] bg-secondary border-secondary  flex flex-col px-2 py-2`}
                                                    >
                                                        <div
                                                        >
                                                            <Link className="" to="/admin/sales-receipt">
                                                                <div className=" flex flex-row max-w-[20rem] items-center hover:bg-[#fbc41d] text-white hover:text-secondary rounded-lg w-full">
                                                                    {/* <div className="xl:text-xl lg:text-xl justify-start flex text-primary">
                                                                        <AiOutlineTag />
                                                                    </div> */}
                                                                    <div className="ml-6 mt-2 mb-2 text-start text-xs leading-6 font-medium ">
                                                                        Sales Receipt
                                                                    </div>

                                                                </div>
                                                            </Link>

                                                            <Link className="" to="/admin/invoices">
                                                                <div className="mt-2 flex flex-row max-w-[20rem] items-center hover:bg-[#fbc41d] text-white hover:text-secondary rounded-lg w-full">
                                                                    {/* <div className="xl:text-xl lg:text-xl justify-start flex text-primary">
                                                                        <AiOutlineTag />
                                                                    </div> */}
                                                                    <div className="ml-6 mt-2 mb-2 text-start text-xs leading-6 font-medium  ">
                                                                        Invoices
                                                                    </div>

                                                                </div>
                                                            </Link>

                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="">
                                                {heading === "Expenses" && (
                                                    <div
                                                        className={`${open ? "w-40 left-52" : "w-[11rem] left-16"
                                                            } border h-screen z-10 absolute bottom-[0rem] bg-secondary border-secondary flex flex-col px-2 py-2`}
                                                    >
                                                        <div
                                                        >
                                                            <Link className="" to="/admin/sales-receipt">
                                                                <div className=" flex flex-row max-w-[20rem] items-center hover:bg-[#fbc41d] text-white hover:text-secondary rounded-lg w-full">
                                                                    {/* <div className="xl:text-xl lg:text-xl justify-start flex text-primary">
                                                                        <AiOutlineTag />
                                                                    </div> */}
                                                                    <div className="ml-6 mt-2 mb-2 text-start text-xs leading-6 font-medium ">
                                                                        Expenses
                                                                    </div>

                                                                </div>
                                                            </Link>

                                                            <Link className="" to="/admin/invoices">
                                                                <div className="mt-2 flex flex-row max-w-[20rem] items-center hover:bg-[#fbc41d] text-white hover:text-secondary rounded-lg w-full">
                                                                    {/* <div className="xl:text-xl lg:text-xl justify-start flex text-primary">
                                                                        <AiOutlineTag />
                                                                    </div> */}
                                                                    <div className="ml-6 mt-2 mb-2 text-start text-xs leading-6 font-medium  ">
                                                                        Bill
                                                                    </div>

                                                                </div>
                                                            </Link>
                                                            <Link className="" to="/admin/invoices">
                                                                <div className="mt-2 flex flex-row max-w-[20rem] items-center hover:bg-[#fbc41d] text-white hover:text-secondary rounded-lg w-full">
                                                                    {/* <div className="xl:text-xl lg:text-xl justify-start flex text-primary">
                                                                        <AiOutlineTag />
                                                                    </div> */}
                                                                    <div className="ml-6 mt-2 mb-2 text-start text-xs leading-6 font-medium  ">
                                                                        Vendors
                                                                    </div>

                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="bg-slate-800 w-fit text-white ">
                                    
                                    <div className="">
                                        <h5>Rizwan Khan</h5>
                                        <p>rizwankhan@gmail.com</p>
                                    </div>
                                </div> */}
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* <div className="hidden">
                        <div
                            className={`${open ? "ml-[13.2rem]" : "ml-[4.2rem]"
                                } relative flex flex-col w-full`}
                        >
                            <div className="">
                                <div className="bg-[#dd1313] h-screen text-lg font-semibold text-lime-600 w-full z-0 relative px-6">
                                    <div className="top-[6rem] relative text-secondary font-semibold ">
                                        Welcome Back to Carttel
                                    </div>
                                </div>
                                <div className="bg-[#f3f3f3] h-screen text-lg font-semibold text-lime-600 w-full z-0 px-6">
                                    <div className="top-[6rem] relative text-secondary font-semibold ">
                                        Welcome Back to Carttel
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div> */}
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
                                            bg-white fixed h-fit top-[0px] overflow-y-auto bottom-0 py-10 px-4 md:w-[450px] w-[70%]
                                                duration-500 ${open ? "left-0" : "left-[-100%]"
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
                                            <Link to="/admin/dashboard" className="flex gap-x-4 items-center">
                                                <img
                                                    src={send}
                                                    className={`w-8 h-8 cursor-pointer duration-500 ${open && "rotate-[360deg]"
                                                        }`}
                                                />
                                                <h1
                                                    className={`text-slate-600 origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                                                        }`}
                                                >
                                                    <div className=" text-start flex justify-start mx-auto text-primary cursor-pointer">
                                                        <div className="link">
                                                            <span className="text-secondary text-3xl font-semibold capitalize">
                                                                Cart<span className="text-[#fbc41d]">Tel</span>
                                                            </span>
                                                        </div>
                                                        <span className="dot font-bold text-primary w-5 text-3xl">
                                                            .
                                                        </span>
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
                                                                <Link to="/admin/dashboard">
                                                                    <div

                                                                        onClick={() => {
                                                                            naming !== linkName.nameFour
                                                                                ? setNaming(linkName.nameFour)
                                                                                : setNaming("");
                                                                            setSubHeading("");
                                                                        }}

                                                                        className={`${naming === linkName.nameFour ? " bg-[#fbc41d]" : ""
                                                                            } mr-4 flex rounded-md p-2 cursor-pointer hover:bg-light-white text-secondary text-sm items-center gap-x-4  w-full`}
                                                                    >

                                                                        <span className="flex justify-between w-full ">
                                                                            <span className="flex flex-row">
                                                                                <span className="text-lg"><RiDashboardLine /></span>

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

                                                                <Link to="/admin/task">
                                                                    <div

                                                                        onClick={() => {
                                                                            naming !== linkName.nameSix
                                                                                ? setNaming(linkName.nameSix)
                                                                                : setNaming("");
                                                                            setSubHeading("");
                                                                        }}

                                                                        className={`${naming === linkName.nameSix ? "bg-[#fbc41d]" : ""
                                                                        } mt-3 mr-4 flex rounded-md p-2 cursor-pointer hover:bg-light-white text-secondary text-sm items-center gap-x-4 w-full`}
                                                                    >

                                                                        <span className="flex justify-between w-full ">
                                                                            <span className="flex flex-row">
                                                                                <span className="text-lg"><FiPackage /></span>

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

                                                                <Link to="/admin/sales">
                                                                    <div
                                                                        className={`${naming === linkName.nameOne ? "bg-[#fbc41d]" : ""
                                                                            } mt-3 mr-4 flex rounded-md p-2 cursor-pointer hover:bg-light-white text-secondary text-sm items-center gap-x-4  w-full`}
                                                                        onClick={() => {
                                                                            naming !== linkName.nameOne
                                                                                ? setNaming(linkName.nameOne)
                                                                                : setNaming("");
                                                                            setSubHeading("");
                                                                        }}
                                                                    >
                                                                        <span className="flex justify-between w-full ">
                                                                            <span className="flex flex-row">
                                                                                <span className="text-lg"><BiStoreAlt /></span>

                                                                                <span
                                                                                    className={`${!open && "hidden"
                                                                                        } ml-2 origin-left duration-200 font-medium`}
                                                                                >
                                                                                    {linkName.nameOne}
                                                                                </span>
                                                                            </span>
                                                                            <span className="text-sm ml-4 flex justify-center items-center">
                                                                                {naming === linkName.nameOne ? <HiOutlineChevronDown /> : <HiOutlineChevronRight />}
                                                                            </span>

                                                                        </span>

                                                                    </div>
                                                                </Link>
                                                                <div className=" top-0 left-0 w-full bg-white overflow-x-auto">
                                                                    {naming === "Sales" && (
                                                                        <>
                                                                            <div
                                                                                className={`bg-white w-full left-0  flex flex-col px-1 justify-center py-1`}
                                                                            >
                                                                                <Link className="" to="/admin/invoices">
                                                                                    <div className="mt-2 flex flex-row max-w-[20rem] items-center hover:bg-[#fbc41d] text-secondary hover:text-secondary rounded-lg w-full">
                                                                                        
                                                                                        <div className="ml-6 mt-2 mb-2 text-start text-xs leading-6 font-medium  ">
                                                                                            Sales Receipt
                                                                                        </div>

                                                                                    </div>
                                                                                </Link>
                                                                                <Link className="" to="/admin/invoices">
                                                                                    <div className="mt-2 flex flex-row max-w-[20rem] items-center hover:bg-[#fbc41d] text-secondary hover:text-secondary rounded-lg w-full">
                                                                                        
                                                                                        <div className="ml-6 mt-2 mb-2 text-start text-xs leading-6 font-medium  ">
                                                                                            Invoices
                                                                                        </div>

                                                                                    </div>
                                                                                </Link>
                                                                                

                                                                            </div>
                                                                        </>
                                                                    )}
                                                                </div>

                                                                <Link to="/admin/reports">
                                                                    <div

                                                                        onClick={() => {
                                                                            naming !== linkName.nameFive
                                                                                ? setNaming(linkName.nameFive)
                                                                                : setNaming("");
                                                                            setSubHeading("");
                                                                        }}

                                                                        className={`${naming === linkName.nameFive ? "bg-[#fbc41d]" : ""
                                                                            } mt-3 mr-4 flex rounded-md p-2 cursor-pointer hover:bg-light-white text-secondary text-sm items-center gap-x-4  w-full`}
                                                                    >

                                                                        <span className="flex justify-between w-full ">
                                                                            <span className="flex flex-row">
                                                                                <span className="text-lg"><MdOutlineMoveToInbox /></span>

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

                                                                <Link to="/admin/supply-chain">
                                                                    <div
                                                                        className={`${naming === linkName.nameTwo ? "bg-[#fbc41d]" : ""
                                                                            } mt-3 mr-4 flex rounded-md p-2 cursor-pointer hover:bg-light-white text-secondary text-sm items-center gap-x-4 w-full`}
                                                                        onClick={() => {
                                                                            naming !== linkName.nameTwo
                                                                                ? setNaming(linkName.nameTwo)
                                                                                : setNaming("");
                                                                            setSubHeading("");
                                                                        }}
                                                                    >
                                                                        <span className="flex justify-between w-full ">
                                                                            <span className="flex flex-row">
                                                                                <span className="text-lg"><BiStoreAlt /></span>

                                                                                <span
                                                                                    className={`${!open && "hidden"
                                                                                        } ml-2 origin-left duration-200 font-medium`}
                                                                                >
                                                                                    {linkName.nameTwo}
                                                                                </span>
                                                                            </span>
                                                                            <span className="text-sm ml-4 flex justify-center items-center">
                                                                                {naming === linkName.nameTwo ? <HiOutlineChevronDown /> : <HiOutlineChevronRight />}
                                                                            </span>

                                                                        </span>

                                                                    </div>
                                                                </Link>
                                                                <div className=" top-0 left-0 w-full bg-white overflow-x-auto">
                                                                    {naming === "Supply Chain" && (
                                                                        <>
                                                                            <div
                                                                                className={`bg-white w-full left-0  flex flex-col px-1 justify-center py-1`}
                                                                            >
                                                                                <Link className="" to="/admin/invoices">
                                                                                    <div className="mt-2 flex flex-row max-w-[20rem] items-center hover:bg-[#fbc41d] text-secondary hover:text-secondary rounded-lg w-full">
                                                                                        
                                                                                        <div className="ml-6 mt-2 mb-2 text-start text-xs leading-6 font-medium  ">
                                                                                            Shipping
                                                                                        </div>

                                                                                    </div>
                                                                                </Link>
                                                                                <Link className="" to="/admin/invoices">
                                                                                    <div className="mt-2 flex flex-row max-w-[20rem] items-center hover:bg-[#fbc41d] text-secondary hover:text-secondary rounded-lg w-full">
                                                                                        
                                                                                        <div className="ml-6 mt-2 mb-2 text-start text-xs leading-6 font-medium  ">
                                                                                            Procurement
                                                                                        </div>

                                                                                    </div>
                                                                                </Link>
                                                                                

                                                                            </div>
                                                                        </>
                                                                    )}
                                                                </div>

                                                                <Link to="/admin/supply-chain">
                                                                    <div
                                                                        className={`${naming === linkName.nameThree ? "bg-[#fbc41d]" : ""
                                                                            } mt-3 mr-4 flex rounded-md p-2 cursor-pointer hover:bg-light-white text-secondary text-sm items-center gap-x-4 w-full`}
                                                                        onClick={() => {
                                                                            naming !== linkName.nameThree
                                                                                ? setNaming(linkName.nameThree)
                                                                                : setNaming("");
                                                                            setSubHeading("");
                                                                        }}
                                                                    >
                                                                        <span className="flex justify-between w-full ">
                                                                            <span className="flex flex-row">
                                                                                <span className="text-lg"><AiOutlineTag /></span>

                                                                                <span
                                                                                    className={`${!open && "hidden"
                                                                                        } ml-2 origin-left duration-200 font-medium`}
                                                                                >
                                                                                    {linkName.nameThree}
                                                                                </span>
                                                                            </span>
                                                                            <span className="text-sm ml-4 flex justify-center items-center">
                                                                                {naming === linkName.nameThree ? <HiOutlineChevronDown /> : <HiOutlineChevronRight />}
                                                                            </span>

                                                                        </span>

                                                                    </div>
                                                                </Link>
                                                                <div className=" top-0 left-0 w-full bg-white overflow-x-auto">
                                                                    {naming === "Manage" && (
                                                                        <>
                                                                            <div
                                                                                className={`bg-white w-full left-0  flex flex-col px-1 justify-center py-1`}
                                                                            >
                                                                                <Link className="" to="/admin/sales-receipt">
                                                                                    <div className=" flex flex-row max-w-[20rem] items-center hover:bg-[#fbc41d] text-secondary hover:text-secondary rounded-lg w-full">
                                                                                        
                                                                                        <div className="ml-6 mt-2 mb-2 text-start text-xs leading-6 font-medium ">
                                                                                            Store
                                                                                        </div>

                                                                                    </div>
                                                                                </Link>

                                                                                <Link className="" to="/admin/invoices">
                                                                                    <div className="mt-2 flex flex-row max-w-[20rem] items-center hover:bg-[#fbc41d] text-secondary hover:text-secondary rounded-lg w-full">
                                                                                        
                                                                                        <div className="ml-6 mt-2 mb-2 text-start text-xs leading-6 font-medium  ">
                                                                                            Inventory
                                                                                        </div>

                                                                                    </div>
                                                                                </Link>
                                                                                <Link className="" to="/admin/invoices">
                                                                                    <div className="mt-2 flex flex-row max-w-[20rem] items-center hover:bg-[#fbc41d] text-secondary hover:text-secondary rounded-lg w-full">
                                                                                        
                                                                                        <div className="ml-6 mt-2 mb-2 text-start text-xs leading-6 font-medium  ">
                                                                                            Customers
                                                                                        </div>

                                                                                    </div>
                                                                                </Link>
                                                                                <Link className="" to="/admin/invoices">
                                                                                    <div className="mt-2 flex flex-row max-w-[20rem] items-center hover:bg-[#fbc41d] text-secondary hover:text-secondary rounded-lg w-full">
                                                                                        
                                                                                        <div className="ml-6 mt-2 mb-2 text-start text-xs leading-6 font-medium  ">
                                                                                            Team
                                                                                        </div>

                                                                                    </div>
                                                                                </Link>
                                                                                <Link className="" to="/admin/invoices">
                                                                                    <div className="mt-2 flex flex-row max-w-[20rem] items-center hover:bg-[#fbc41d] text-secondary hover:text-secondary rounded-lg w-full">
                                                                                        
                                                                                        <div className="ml-6 mt-2 mb-2 text-start text-xs leading-6 font-medium  ">
                                                                                            Business Network
                                                                                        </div>

                                                                                    </div>
                                                                                </Link>

                                                                            </div>
                                                                        </>
                                                                    )}
                                                                </div>

                                                                <Link to="/admin/dashboard">
                                                                    <div
                                                                        onClick={() => {
                                                                            naming !== linkName.nameEight
                                                                                ? setNaming(linkName.nameEight)
                                                                                : setNaming("");
                                                                            setSubHeading("");
                                                                        }}
                                                                        className={`${naming === linkName.nameEight ? "bg-[#fbc41d]" : ""
                                                                        } mt-3 mr-4 flex rounded-md p-2 cursor-pointer hover:bg-light-white text-secondary text-sm items-center gap-x-4 w-full`}
                                                                    >

                                                                        <span className="flex justify-between w-full ">
                                                                            <span className="flex flex-row">
                                                                                <span className="text-lg"><IoWalletOutline /></span>

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

                                                                <Link to="/admin/supply-chain">
                                                                    <div
                                                                        className={`${naming === linkName.nameNine ? "bg-[#fbc41d]" : ""
                                                                            } mt-3 mr-4 flex rounded-md p-2 cursor-pointer hover:bg-light-white text-secondary text-sm items-center gap-x-4 w-full`}
                                                                        onClick={() => {
                                                                            naming !== linkName.nameNine
                                                                                ? setNaming(linkName.nameNine)
                                                                                : setNaming("");
                                                                            setSubHeading("");
                                                                        }}
                                                                    >
                                                                        <span className="flex justify-between w-full ">
                                                                            <span className="flex flex-row">
                                                                                <span className="text-lg"><AiOutlineTag /></span>

                                                                                <span
                                                                                    className={`${!open && "hidden"
                                                                                        } ml-2 origin-left duration-200 font-medium`}
                                                                                >
                                                                                    {linkName.nameNine}
                                                                                </span>
                                                                            </span>
                                                                            <span className="text-sm ml-4 flex justify-center items-center">
                                                                                {naming === linkName.nameNine ? <HiOutlineChevronDown /> : <HiOutlineChevronRight />}
                                                                            </span>

                                                                        </span>

                                                                    </div>
                                                                </Link>
                                                                <div className=" top-0 left-0 w-full bg-white overflow-x-auto">
                                                                    {naming === "Cash Flow" && (
                                                                        <>
                                                                            <div
                                                                                className={`bg-white w-full left-0  flex flex-col px-1 justify-center py-1`}
                                                                            >
                                                                                <Link className="" to="/admin/sales-receipt">
                                                                                    <div className=" flex flex-row max-w-[20rem] items-center hover:bg-[#fbc41d] text-secondary hover:text-secondary rounded-lg w-full">
                                                                                        
                                                                                        <div className="ml-6 mt-2 mb-2 text-start text-xs leading-6 font-medium ">
                                                                                            Overview
                                                                                        </div>

                                                                                    </div>
                                                                                </Link>

                                                                                <Link className="" to="/admin/invoices">
                                                                                    <div className="mt-2 flex flex-row max-w-[20rem] items-center hover:bg-[#fbc41d] text-secondary hover:text-secondary rounded-lg w-full">
                                                                                        
                                                                                        <div className="ml-6 mt-2 mb-2 text-start text-xs leading-6 font-medium  ">
                                                                                            Planner
                                                                                        </div>

                                                                                    </div>
                                                                                </Link>
                                                                                

                                                                            </div>
                                                                        </>
                                                                    )}
                                                                </div>

                                                                <Link to="/admin/supply-chain">
                                                                    <div
                                                                        onClick={() => {
                                                                            naming !== linkName.nameTen
                                                                                ? setNaming(linkName.nameTen)
                                                                                : setNaming("");
                                                                            setSubHeading("");
                                                                        }}
                                                                        className={`${naming === linkName.nameTen ? "bg-[#fbc41d]" : ""
                                                                        } mt-3 mr-4 flex rounded-md p-2 cursor-pointer hover:bg-light-white text-secondary text-sm items-center gap-x-4 w-full`}
                                                                    >

                                                                        <span className="flex justify-between w-full ">
                                                                            <span className="flex flex-row">
                                                                                <span className="text-lg"><BiStoreAlt /></span>

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

                                                                <Link to="/admin/dashboard">
                                                                    <div
                                                                        className={`${naming === linkName.nameSeven ? "bg-[#fbc41d]" : ""
                                                                            } mt-3 mr-4 flex rounded-md p-2 cursor-pointer hover:bg-light-white text-secondary text-sm items-center gap-x-4  w-full`}
                                                                        onClick={() => {
                                                                            naming !== linkName.nameSeven
                                                                                ? setNaming(linkName.nameSeven)
                                                                                : setNaming("");
                                                                            setSubHeading("");
                                                                        }}
                                                                    >
                                                                        <span className="flex justify-between w-full ">
                                                                            <span className="flex flex-row">
                                                                                <span className="text-lg"><BiStoreAlt /></span>

                                                                                <span
                                                                                    className={`${!open && "hidden"
                                                                                        } ml-2 origin-left duration-200 font-medium`}
                                                                                >
                                                                                    {linkName.nameSeven}
                                                                                </span>
                                                                            </span>
                                                                            <span className="text-sm ml-4 flex justify-center items-center">
                                                                                {naming === linkName.nameSeven ? <HiOutlineChevronDown /> : <HiOutlineChevronRight />}
                                                                            </span>

                                                                        </span>

                                                                    </div>
                                                                </Link>

                                                                <div className=" top-0 left-0 w-full bg-white overflow-x-auto">
                                                                    {naming === "Expenses" && (
                                                                        <>
                                                                            <div
                                                                                className={`bg-white w-full left-0  flex flex-col px-1 justify-center py-1`}
                                                                            >
                                                                                <Link className="" to="/admin/sales-receipt">
                                                                                    <div className=" flex flex-row max-w-[20rem] items-center hover:bg-[#fbc41d] text-secondary hover:text-secondary rounded-lg w-full">
                                                                                        
                                                                                        <div className="ml-6 mt-2 mb-2 text-start text-xs leading-6 font-medium ">
                                                                                            Expenses
                                                                                        </div>

                                                                                    </div>
                                                                                </Link>

                                                                                <Link className="" to="/admin/invoices">
                                                                                    <div className="mt-2 flex flex-row max-w-[20rem] items-center hover:bg-[#fbc41d] text-secondary hover:text-secondary rounded-lg w-full">
                                                                                        
                                                                                        <div className="ml-6 mt-2 mb-2 text-start text-xs leading-6 font-medium  ">
                                                                                            Bill 
                                                                                        </div>

                                                                                    </div>
                                                                                </Link>

                                                                                <Link className="" to="/admin/invoices">
                                                                                    <div className="mt-2 flex flex-row max-w-[20rem] items-center hover:bg-[#fbc41d] text-secondary hover:text-secondary rounded-lg w-full">
                                                                                        
                                                                                        <div className="ml-6 mt-2 mb-2 text-start text-xs leading-6 font-medium  ">
                                                                                            Vendors
                                                                                        </div>

                                                                                    </div>
                                                                                </Link>
                                                                                

                                                                            </div>
                                                                        </>
                                                                    )}
                                                                </div>

                                                                <Link to="/admin/dashboard">
                                                                    <div

                                                                        onClick={() => {
                                                                            naming !== linkName.nameZero
                                                                                ? setNaming(linkName.nameZero)
                                                                                : setNaming("");
                                                                            setSubHeading("");
                                                                        }}

                                                                        className={`${naming === linkName.nameZero ? "bg-[#fbc41d]" : ""
                                                                            } mt-3 mr-4 flex rounded-md p-2 cursor-pointer hover:bg-light-white text-secondary text-sm items-center gap-x-4 w-full`}
                                                                    >

                                                                        <span className="flex justify-between w-full ">
                                                                            <span className="flex flex-row">
                                                                                <span className="text-lg"><BiStoreAlt /></span>

                                                                                <span
                                                                                    className={`${!open && "hidden"
                                                                                        } ml-2 origin-left duration-200 font-medium`}
                                                                                >
                                                                                    {linkName.nameZero}
                                                                                </span>
                                                                            </span>

                                                                        </span>

                                                                    </div>
                                                                </Link>
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