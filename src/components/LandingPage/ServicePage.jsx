/* eslint-disable react/no-unescaped-entities */


import { useState } from "react";

import ArrowHead from "../../assets/images/arrow.svg"

import { motion } from "framer-motion";
// import { useInView } from 'react-intersection-observer';
// import { useEffect } from "react";

const modalTwo = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
        y: "0px",
        opacity: 1,
        transition: { delay: 1, duration: 2, type: 'spring', stiffness: 100 }
    },
}

// const modalFour = {
//     hidden: { y: "100vh", opacity: 0 },
//     visible: {
//         y: "0px",
//         opacity: 1,
//         transition: { delay: 1, duration: 2, type: 'spring', stiffness: 100 }
//     },
// }

// const modalFive = {
//     hidden: { y: "100vh", opacity: 0 },
//     visible: { y: "0px", opacity: 1, transition: { delay: 1, duration: 2, type: 'spring', stiffness: 100 } }
// };

// const staggerDelay = 1.5;

const ServicePage = () => {
    const [heading, setHeading] = useState("For Tenants");





    return (
        <div className='md:mt-[30px] xs:mt-[87px]'>
            <div className=' '>

                <section
                    className="md:py-24 xs:py-16 
                    flex justify-center items-center md:px-0 xs:px-2 md:mt-10 xs:mt-12"
                >
                    <div className="flex flex-col justify-center items-center ">
                        <div className="relative z-10">
                            <div className="flex justify-center items-center flex-col ">
                                <motion.div
                                    variants={modalTwo}
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    className=" w-full h-full"
                                >
                                    <div className=" mb-3 md:px-4 xs:px-0 text-black flex-col font-normal md:mb-7 xs:mb-3 flex flex-wrap justify-center items-center text-center">
                                        <span className="text-[20px] leading-[25.2px] text-[#DB877D]">
                                            Our Services
                                        </span>

                                        <div className="text-[32px] leading-[40.32px] font-semibold md:w-[540px] xs:w-fit">
                                            Looking to rent or lease a space? We’ve got you covered.
                                        </div>

                                    </div>

                                </motion.div>
                            </div>

                            <div className="mb-3 md:px-4 xs:px-0 text-black flex-col font-normal md:mb-7 xs:mb-3 flex flex-wrap justify-center items-center text-center mt-[50px]">

                                <div className=" w-fit ">
                                    <div className="rounded-full border-[1px] p-1 gap-3 border-gray-500 flex justify-center items-center w-fit">
                                        <button
                                            onClick={() => setHeading("For Tenants")}

                                            className={`${heading === "For Tenants" ? "bg-[#FFA499] text-white rounded-full px-[21px] py-[5px] text-center" : ""
                                                } flex justify-between items-center px-[21px] group`}

                                        >For Tenants</button>


                                        <button
                                            className={`${heading === "For LandLords" ? "bg-[#FFA499] text-white rounded-full px-[21px] py-[5px] text-center" : ""
                                                } flex justify-between items-center px-[21px] group`}

                                            onClick={() => setHeading("For LandLords")}
                                        >For LandLords</button>

                                    </div>
                                </div>
                            </div>





                            <motion.div
                                initial='hidden'
                                animate='visible'
                                className=""
                            >
                                {heading === "For Tenants" && (
                                    <>
                                        <div className="mb-3 md:px-4 xs:px-0 text-black flex-col font-normal md:mb-7  xs:mb-3 flex flex-wrap justify-center items-center text-center mt-[50px]">

                                            <div className=" w-full ">
                                                <div className="flex md:flex-row xs:flex-col justify-center items-center w-full gap-10 px-2">
                                                    <div className="py-2 flex md:w-[450px] xs:w-fit justify-center bg-[#fefefe] rounded-lg shadow-lg">

                                                        <div className="px-[25px]">
                                                            <div className="mt-0 text-start text-[24px] leading-6 py-[20px] font-semibold text-black ">
                                                                Rent Now, Pay Later
                                                            </div>
                                                            <div className="text-[#717171] mb-2 flex text-[12px] text-start ">
                                                                Secure your desired rental property without the immediate financial burden. Our flexible payment options allow you to move in now and manage the rent payments over time, making your move smoother and more affordable.
                                                            </div>

                                                            <div className="flex items-center text-primary mt-6">
                                                                <span className="md:text-[15px] xs:text-xs mr-2 font-normal py-1">
                                                                    Learn More
                                                                </span>

                                                                <img
                                                                    alt=""
                                                                    src={ArrowHead}
                                                                    className="text-[1px] w-3 h-3 text-primary"
                                                                />

                                                            </div>

                                                        </div>

                                                    </div>
                                                    <div className="py-2 flex md:w-[450px] xs:w-fit justify-center bg-[#fefefe] rounded-lg shadow-lg">


                                                        <div className="px-[25px]">
                                                            <div className="mt-0 text-start text-[24px] leading-6 py-[20px] font-semibold text-black ">
                                                                Get Tenant Insurance
                                                            </div>
                                                            <div className="text-[#717171] mb-2 flex text-[12px] text-start ">
                                                                Protect your belongings and enjoy peace of mind with our tenant insurance plans. Cover unexpected events such as theft, damage, or natural disasters, ensuring you're safeguarded during your rental period.
                                                            </div>

                                                            <div className="flex items-center text-primary mt-6">
                                                                <span className="md:text-[15px] xs:text-xs mr-2 font-normal py-1">
                                                                    Learn More
                                                                </span>

                                                                <img
                                                                    alt=""
                                                                    src={ArrowHead}
                                                                    className="text-[1px] w-3 h-3 text-primary"
                                                                />

                                                            </div>

                                                        </div>

                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}

                                {heading === "For LandLords" && (
                                    <>
                                        <div className="mb-3 md:px-4 xs:px-0 text-black flex-col font-normal md:mb-7  xs:mb-3 flex flex-wrap justify-center items-center text-center mt-[50px]">

                                            <div className=" w-full ">
                                                <div className="flex md:flex-row xs:flex-col justify-center items-center w-full gap-10 px-2">
                                                    <div className="py-2 flex md:w-[450px] xs:w-fit justify-center bg-[#fefefe] rounded-lg shadow-lg">

                                                        <div className="px-[25px]">
                                                            <div className="mt-0 text-start text-[24px] leading-6 py-[20px] font-semibold text-black ">
                                                                Verify a Tenant's Identity
                                                            </div>
                                                            <div className="text-[#717171] mb-2 flex text-[12px] text-start ">
                                                                Secure your desired rental property without the immediate financial burden. Our flexible payment options allow you to move in now and manage the rent payments over time, making your move smoother and more affordable.
                                                            </div>

                                                            <div className="flex items-center text-primary mt-6">
                                                                <span className="md:text-[15px] xs:text-xs mr-2 font-normal py-1">
                                                                    Learn More
                                                                </span>

                                                                <img
                                                                    alt=""
                                                                    src={ArrowHead}
                                                                    className="text-[1px] w-3 h-3 text-primary"
                                                                />

                                                            </div>

                                                        </div>

                                                    </div>
                                                    <div className="py-2 flex md:w-[450px] xs:w-fit justify-center bg-[#fefefe] rounded-lg shadow-lg">


                                                        <div className="px-[25px]">
                                                            <div className="mt-0 text-start text-[24px] leading-6 py-[20px] font-semibold text-black ">
                                                                Complete a Background Check
                                                            </div>
                                                            <div className="text-[#717171] mb-2 flex text-[12px] text-start ">
                                                            Protect your belongings and enjoy peace of mind with our tenant insurance plans. Cover unexpected events such as theft, damage, or natural disasters, ensuring you're safeguarded during your rental period.
                                                            </div>

                                                            <div className="flex items-center text-primary mt-6">
                                                                <span className="md:text-[15px] xs:text-xs mr-2 font-normal py-1">
                                                                    Learn More
                                                                </span>

                                                                <img
                                                                    alt=""
                                                                    src={ArrowHead}
                                                                    className="text-[1px] w-3 h-3 text-primary"
                                                                />

                                                            </div>

                                                        </div>

                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}

                            </motion.div>
                        </div>
                    </div>
                </section>

            </div>

        </div>
    )
}

export default ServicePage