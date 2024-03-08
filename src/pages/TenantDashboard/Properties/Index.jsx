import React from "react";

import Image1 from "../../../assets/home/apartment1.jpg";
import Image2 from "../../../assets/home/apartment2.jpg";
import Image3 from "../../../assets/home/apartment3.jpg";

import { Link } from "react-router-dom";


const Index = () => {
    const Menus = [
        {
            id: 1,
            address: "21, Valley Heights Craighall Park",
            price: "54,700",
            apartment: "2bed 2bath 1park",
            images: Image1,
            to: "/admin/dashboard",
        },
        {
            id: 2,
            address: "16, The Vale Bryanston",
            price: "7,670,500",
            apartment: "4bed 2bath 2park",
            images: Image2,
            to: "/admin/dashboard",
        },
        {
            id: 3,
            address: "2, The Glen Bryandale New Subway",
            price: "174,750",
            apartment: "1bed 1bath 1park",
            images: Image3,
            to: "/admin/dashboard",
        },
    ];

    return (
        
        <div>
            <div className="text-slate-700 text-lg py-7">Properties Overview</div>

            <div className="grid gap-5 md:grid-cols-3 xs:grid-cols-1 ">
                {Menus.map((Menu, index) => (
                    <div key={index} className="">
                        <div
                            className={`flex rounded-md py-1 cursor-pointer hover:bg-light-white text-secondary text-sm items-center gap-x-4`}
                        >
                            <li key={index} className="flex flex-col w-full border shadow-md rounded-lg">
                                <img
                                    src={Menu.images}
                                    className={`cursor-pointer rounded-t-lg w-full h-60`}
                                />
                                <span className="flex justify-between ">
                                    <span className="flex flex-row relative w-full">
                                        <span className="text-lg absolute -top-16 px-3 text-white text-sm bg-third">{Menu.address}</span>
                                    </span>
                                    {/* <span
                                        className={`ml-4 flex justify-center items-center`}
                                        >
                                        {Menu.arrow ? <HiOutlineChevronRight /> : ""}
                                    </span> */}
                                </span>
                                <div className="flex py-4 px-5 flex-col ">
                                    <span className="md:text-3xl xs:text-lg px-3  text-third">&#36; {Menu.price}</span>

                                    <span
                                        className={`origin-left duration-200 font-medium py-2 md:text-lg xs:text-sm text-pink-600 px-3`}
                                    >
                                        {Menu.apartment}
                                    </span>

                                </div>
                                <div className="flex py-4 px-5 flex-col ">
                                    <Link to={Menu.to} className="md:text-sm xs:text-xs px-3 text-gray-500 rounded-3xl px-3 py-2 border-[1px] border-gray-700 w-fit">
                                        View Details
                                    </Link>

                                </div>
                            </li>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Index;
