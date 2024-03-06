import { useState } from "react";

import { RiDashboardLine, RiPantoneLine } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";
// import { IoMdNotificationsOutline } from "react-icons/io";
import { FiPackage } from "react-icons/fi";
import { AiOutlineTag } from "react-icons/ai";
import { BiStoreAlt } from "react-icons/bi";
import send from "../../../assets/images/send.png";
import arrowRight from "../../../assets/images/arrow-right.png";
import { Link } from "react-router-dom";

import { MdOutlineMoveToInbox, MdOutlinePayment } from "react-icons/md";
import useMediaQuery from "../../../hooks/useMediaQuery.jsx";
import MinimalLayout from "../MinimalLayout";
import { HiOutlineChevronUp, HiOutlineChevronDown } from "react-icons/hi";

const MainLayout = () => {
    const [open, setOpen] = useState(true);
    const [heading, setHeading] = useState("Business Overview");
    const isAboveMediumScreens = useMediaQuery("(min-width: 1024px)");

    const OpenScreen = () => {
        setOpen(!open);
    };

    const Menus = [
        { id: 0, title: "Business Overview", src: <RiDashboardLine /> },
        { id: 2, title: "Task", src: <FiPackage />,  },
        { id: 9, title: "Sales", src: <BiStoreAlt />, gap: true, arrow: true},
        { id: 3, title: "Reports", src: <MdOutlineMoveToInbox /> },
        { id: 10, title: "Supply Chain", src: <BiStoreAlt />, arrow: true },
        { id: 4, title: "Manage", src: <AiOutlineTag />, gap: true, arrow: true },
        { id: 1, title: "Wallet", src: <IoWalletOutline /> },
        { id: 6, title: "Cash Flow", src: <RiPantoneLine />, arrow: true },
        { id: 7, title: "Utility Bills", src: <BiStoreAlt />, gap: true,},
        { id: 8, title: "Expenses", src: <BiStoreAlt />, arrow: true},
        { id: 5, title: "Transactions", src: <MdOutlinePayment /> },
    ];

    return (
        <div>
            {isAboveMediumScreens && (
                <div>
                    <div className="flex">
                        <div
                            className={` ${open ? "w-68" : "w-16"
                            }  fixed h-screen py-6 px-3 border-r-[1px] border-gray-400  duration-300 z-40 bg-white `}
                        >
                            <div>
                                <div>
                                    <img
                                        src={arrowRight}
                                        className={`absolute cursor-pointer -right-3 top-16 w-7 bg-white
                                            border-2 border-secondary rounded-full  ${!open && "rotate-180"
                                            }`}
                                        onClick={() => setOpen(!open)}
                                    />
                                    <div className="flex gap-x-4 items-center">
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
                                    </div>
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
                                                                            {/* {Menu.title} */}
                                                                        </span>
                                                                    </span>
                                                                    <span
                                                                        className={` ${open ? "flex" : "hidden"
                                                                        } ml-4 flex justify-center items-center`}
                                                                    >{Menu.arrow ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}</span>
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
                    <div className="mt-40 flex w-full">hello dear</div>
                </div>
            )}
            {!isAboveMediumScreens && (
                <div className="block ">
                    <div className="relative z-50">
                        <div
                            onClick={OpenScreen}
                            className={`${open ? "left-0" : "left-[-100%]"
                                } absolute left-0 top-0 bg-slate-800 bg-opacity-75 md:bg-opacity-50 w-full h-screen `}
                        ></div>
                        <div>
                            <div className="flex justify-between flex-col bg-white relative">
                                <div className="block">
                                    {/* <img
                                            src={arrowRight}
                                            style={{ zIndex: '999px'}}
                                            className={`absolute cursor-pointer -right-[11px] z-50 top-16 w-9 bg-white opacity-100
                                                border-2 border-secondary rounded-full duration-500 rotate-180 ${open ? "right-4" : "-right-[-100%]"}`}
                                            onClick={() => setOpen(!open)}
                                        /> */}
                                    <ul
                                        className={`
                                            bg-white fixed h-fit top-[0px] overflow-y-auto bottom-0 py-10 px-4 md:w-[450px] w-[90%]
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
                                        <div className="flex items-center mb-10">
                                            <img
                                                src={send}
                                                className={`w-8 h-8 cursor-pointer duration-500 mr-5  ${open && "rotate-[360deg]"
                                                    }`}
                                            />
                                            <h1 className="text-slate-600 origin-left font-medium text-xl duration-200">
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
                                        </div>
                                        {Menus.map((Menu, index) => (
                                            <li
                                                key={index}
                                                onClick={() => {
                                                    heading !== Menu.title
                                                        ? setHeading(Menu.title)
                                                        : setHeading("");
                                                }}
                                                className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-secondary text-sm items-center gap-x-4 max-w-sm 
                                                    ${Menu.gap ? "mt-4" : "mt-2"
                                                    } ${heading === Menu.title && "bg-[#fbc41d]"
                                                    } `}
                                            >
                                                <div className="text-lg">{Menu.src}</div>
                                                <span
                                                    className={`${!open && "hidden"
                                                        } origin-left duration-200`}
                                                >
                                                    {Menu.title}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div>
                <div className="bg-white fixed w-full top-0 left-0 z-20 flex-1 justify-between items-center text-2xl font-semibold p-2 flex border-b-[1px] border-gray-300 drop-shadow-md">
                    <h1 className="text-3xl shadow-2xl font-semibold  flex">
                        <div
                            className="flex items-center lg:hidden rounded p-2 mr-2 text-secondary text-lg"
                            onClick={() => setOpen(!open)}
                        >
                            <svg
                                viewBox="64 64 896 896"
                                focusable="false"
                                data-icon="menu-unfold"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 000-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0014.4 7z"></path>
                            </svg>
                        </div>
                            <div className="text-[10px] ml-0 max-w-[14rem] text-secondary">
                                Welcome Back, Folajimi
                            </div>
                    </h1>
                    <div className="">
                        <MinimalLayout />
                    </div>
                </div>
                <div className="bg-[#f3f3f3] h-screen text-lg font-semibold text-lime-600 w-full">
                    <div className="top-[6rem] relative text-secondary font-semibold">
                        Welcome Back to Carttel
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MainLayout;
