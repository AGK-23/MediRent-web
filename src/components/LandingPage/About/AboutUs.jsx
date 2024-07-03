/* eslint-disable react/no-unescaped-entities */

import Apartment from "../../../assets/About/apartment.png";
import { motion } from "framer-motion";
import { housingSolutionData } from "../../../data/Mylinks";
import GroupPeople from "../../../assets/About/group-people.svg";
import Building from "../../../assets/About/building.svg"
import CartoonBuilding from "../../../assets/About/cartoon-house.svg"


const modalFour = {
    hidden: { y: "100vh", opacity: 0 },
    visible: {
        y: "0px",
        opacity: 1,
        transition: { delay: 1, duration: 2, type: 'spring', stiffness: 100 }
    },
}

const modalTwo = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
        y: "0px",
        opacity: 1,
        transition: { delay: 1, duration: 2, type: 'spring', stiffness: 100 }
    },
}

const staggerDelay = 1.5;

const AboutUs = () => {
    return (
        <div className='md:mt-[10rem] xs:mt-[5rem] '>
            <div className='md:px-[120px] xs:px-2 '>

                <section
                    className=" 
                    flex justify-center items-center md:mt-10 xs:mt-12 "
                >
                    <div className="flex flex-col justify-center items-center ">
                        <div className="relative z-10 grid md:grid-cols-2 xs:grid-cols-1 gap-10">
                            <div className="flex justify-center items-center flex-col ">
                                <div
                                    className=" w-full h-full flex items-center justify-center "
                                >
                                    <div className=" mb-3 md:px-4 xs:px-0 text-black flex-col font-normal md:mb-7 xs:mb-3 flex ">
                                        <span className="md:text-[20px] xs:text-[14px] leading-[25.2px] text-[#DB877D]">
                                            About Us
                                        </span>

                                        <div className="md:text-[32px] xs:text-[21px] md:leading-[40.32px] xs:leading-[26.46px] font-semibold md:w-full xs:w-fit">
                                            Your Trusted Partner in Housing for the Medical Community
                                        </div>

                                        <div className="text-[#717171] mb-2 flex text-[16px] text-start pt-5">
                                            Our platform connects medical professionals with a curated selection of verified properties, ensuring safe, reliable, and comfortable living environments. Whether you're relocating for a new job, fellowship, or just need a fresh start, Medirent is here to make your move as smooth as possible.
                                        </div>

                                        <div className="text-[#717171] mb-2 flex text-[16px] text-start pt-2">
                                            With flexible rental options, comprehensive support services, and a focus on community, we aim to revolutionize the rental process, making it easier and more efficient. At Medirent, we believe that finding the right home should be a stress-free experience, allowing you to focus on what truly matters—your work and well-being.
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className=" mb-3 md:px-4 xs:px-0 text-black flex-col font-normal md:mb-7 xs:mb-3 flex flex-wrap justify-center items-center text-center mt-[0px]">

                                <div className=" w-fit ">
                                    <div className="flex justify-center items-center w-fit">
                                        <img alt="" src={Apartment} className=" cursor-pointer" />


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="relative z-10 mt-32">
                    <div className="flex justify-center items-center flex-col ">
                        <motion.div
                            variants={modalTwo}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className=" w-full h-full"
                        >
                            <div className=" mb-3 text-black flex-col font-normal md:mb-7 xs:mb-3 flex flex-wrap justify-center items-center text-center">
                                <span className="md:text-[20px] xs:text-[14px] leading-[25.2px] text-[#DB877D]">
                                    Why Choose Medirent
                                </span>

                                <div className="md:text-[32px] xs:text-[21px] md:leading-[40.32px] xs:leading-[26.46px] font-semibold md:w-[540px] xs:w-fit">
                                    Exceptional Housing Solutions for Healthcare Professionals
                                </div>

                            </div>

                        </motion.div>
                    </div>

                    <motion.div
                        initial='hidden'
                        animate='visible'
                        className="grid md:grid-cols-3 xs:grid-cols-1 gap-10 mt-10 justify-center items-center"
                    >
                        {housingSolutionData.map((housingSolution, housingSolutionIndex) => {
                            return (
                                <motion.div
                                    variants={modalFour}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ duration: 1, ease: [0.6, 0.01, -0.05, 0.9], delay: (housingSolutionIndex * staggerDelay) }}

                                    key={housingSolutionIndex}
                                    className={`text-center w-full ${housingSolutionIndex >= 8 ? 'lg:col md:col' : ''}`}
                                >
                                    {/* lg:col-span-2 */}
                                    <div className=' flex flex-col justify-between items-center '>

                                        <div className="">
                                            <div className="w-full flex md:justify-start xs:justify-center items-center">

                                                <div className="bg-[#FFA49966] p-[13px] rounded-full w-fit justify-center">
                                                    <img
                                                        alt=""
                                                        src={housingSolution.image}
                                                        className="w-[23px] h-[23px] "
                                                    />

                                                </div>
                                            </div>
                                            <div className="my-3">
                                                <h3 className="font-semibold md:text-start xs:text-center text-black text-[20px] leading-[25.2px] ">
                                                    {housingSolution.name}
                                                </h3>

                                                <h3 className="font-normal text-start mt-[10px] text-[#717171] text-[16px] leading-[20.16px] md:w-[100%] xs:w-full">
                                                    {housingSolution.description}
                                                </h3>

                                            </div>

                                        </div>

                                    </div>

                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>

                <div className="relative z-10 mt-32">
                    <div className=" w-full flex justify-center items-center ">
                        <div className="flex justify-center items-center w-fit">
                            <img alt="" src={GroupPeople} className=" cursor-pointer" />
                        </div>
                    </div>


                    <div className="flex justify-center items-center flex-col mt-10">
                        <motion.div
                            variants={modalTwo}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className=" w-full h-full"
                        >
                            <div className=" mb-3 text-black flex-col font-normal md:mb-7 xs:mb-3 flex flex-wrap justify-center items-center text-center">
                                <span className="md:text-[20px] xs:text-[14px] leading-[25.2px] text-[#DB877D]">
                                    Our Purpose
                                </span>

                                <div className="md:text-[32px] xs:text-[21px] md:leading-[40.32px] xs:leading-[26.46px] font-semibold md:w-[740px] xs:w-fit">
                                    Offering healthcare professionals good housing options.
                                </div>

                                <div className=" w-full flex justify-center items-center ">
                                    <div className="flex justify-center items-center md:w-[740px] xs:w-fit">
                                        <div className="text-[#717171] mb-2 flex text-[16px] text-center pt-2">
                                            We believe finding your next home is more than just a transaction—it's a crucial step in your journey. Whether you're relocating for a new job or seeking a comfortable space near your workplace, you deserve a place that feels like home.
                                        </div>
                                    </div>
                                </div>

                                <div className=" w-full flex justify-center items-center ">
                                    <div className="flex justify-center items-center md:w-[740px] xs:w-fit">
                                        <div className="text-[#717171] mb-2 flex text-[16px] text-center pt-2">
                                            Our mission is to simplify, streamline, and humanize the rental process for the medical community. By turning this vision into reality, we aim to provide every healthcare professional with a seamless transition to a new home, enhancing their quality of life from one move to the next.
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </motion.div>
                    </div>
                </div>

                <div className="relative z-10 mt-32">
                    <div className=" w-full flex justify-center items-center ">
                        <div className="flex justify-center items-center w-fit">
                            <img alt="" src={Building} className=" cursor-pointer" />
                        </div>
                    </div>
                </div>

                <div className="relative z-10 mt-32 bg-[#FCD3CD] rounded-lg px-6 pt-6 mb-20">
                    <div className="flex justify-center items-center flex-col mt-10">
                        <motion.div
                            variants={modalTwo}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className=" w-full h-full"
                        >
                            <div className=" mb-3 text-black flex-col font-normal md:mb-7 xs:mb-3 flex flex-wrap justify-center items-center text-center">


                                <div className="text-[#0E0C3D] md:text-[32px] xs:text-[21px] md:leading-[40.32px] xs:leading-[26.46px] font-semibold md:w-[740px] xs:w-fit">
                                    Start listing or renting a space with Medirent
                                </div>

                                <div className=" w-full flex justify-center items-center ">
                                    <div className="flex justify-center items-center md:w-[740px] xs:w-fit">
                                        <div className="text-black mb-2 flex text-[16px] text-center pt-2">
                                            Start listing or renting a space with Medirent and discover a seamless experience. Find your ideal space or earn by sharing your own with our vibrant community
                                        </div>
                                    </div>
                                </div>

                                <button

                                    // onClick={() => handleLinkClick('/all-listings')}
                                    className={`bg-[#F97262] mt-4 font-semibold text-white w-fit rounded-full opacity-70 px-[57px] py-[10px] text-center flex justify-between items-center group`}

                                >Get Started</button>

                            </div>

                        </motion.div>
                    </div>

                    <div className=" w-full flex justify-center items-center ">
                        <div className="flex justify-center items-center w-fit">
                            <img alt="" src={CartoonBuilding} className=" cursor-pointer" />
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default AboutUs