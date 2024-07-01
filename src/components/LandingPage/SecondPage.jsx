
import { newComersData } from "../../data/Mylinks";


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

const modalFour = {
    hidden: { y: "100vh", opacity: 0 },
    visible: {
      y: "0px",
      opacity: 1,
      transition: { delay: 1, duration: 2, type: 'spring', stiffness: 100 }
    },
}

// const modalFive = {
//     hidden: { y: "100vh", opacity: 0 },
//     visible: { y: "0px", opacity: 1, transition: { delay: 1, duration: 2, type: 'spring', stiffness: 100 } }
// };

const staggerDelay = 1.5;

const SecondPage = () => {
    return (
        <div className='md:mt-[13rem] xs:mt-[20rem]'>
            <div className=' '>

                <section
                    className=" 
                    flex justify-center items-center md:px-[120px] xs:px-2 md:mt-10 xs:mt-12"
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
                                            Process for Newcomers
                                        </span>

                                        <div className="text-[32px] leading-[40.32px] font-semibold md:w-[315px] xs:w-fit">
                                            Few easy steps to get Started
                                        </div>

                                    </div>

                                </motion.div>

                                {/* <motion.div 
                                    variants={modalFour}
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    className="flex justify-center flex-col items-center w-full"
                                >
                                    <div className="h-full flex justify-center items-center flex-col md:w-[65%] xs:w-full ">
                                        <div className="text-center font-light text-[#7C7070] lg:text-[17px] md:text-[12px] xs:text-[10px] md:leading-[2rem] xs:leading-[1.5rem] flex justify-center items-center mx-3">
                                            As a collective giving back and helping those in need is one of our core values and pinnacle of our existence. Take a dive into some of the charity projects we have completed
                                        </div>

                                    </div>
                                    

                                </motion.div> */}

                            </div>




                            <motion.div
                                initial='hidden' 
                                animate='visible'
                                className="grid md:grid-cols-3 xs:grid-cols-1 gap-10 xs:px-2 mt-10 md:mx-10 xs:mx-0 justify-center items-center"
                            >
                                {newComersData.map((newComer, newComerIndex) => {
                                    return (
                                        <motion.div 
                                            // initial={{ y: -400, opacity: 0 }} // Initial position off-screen and hidden
                                            // animate={{ y: 0, opacity: 1 }}
                                            // transition={{ duration: 1, ease: [0.6, 0.01, -0.05, 0.9], delay: (newComerIndex * staggerDelay) }}

                                            
                                            variants={modalFour}
                                            initial="hidden"
                                            animate="visible"
                                            transition={{ duration: 1, ease: [0.6, 0.01, -0.05, 0.9], delay: (newComerIndex * staggerDelay) }}
                                            
                                            key={newComerIndex} 
                                            className={`text-center w-full ${newComerIndex >= 8 ? 'lg:col md:col' : ''}`}
                                        >
                                            {/* lg:col-span-2 */}
                                            <div className=' flex flex-col justify-between items-center '>

                                                <div className="">
                                                    <div className="bg-[#FFA49966] p-[13px] rounded-full w-fit">
                                                        <img
                                                            alt=""
                                                            src={newComer.image}
                                                            className="w-[23px] h-[23px] "
                                                        />

                                                    </div>
                                                    <div className="my-3">
                                                        <h3 className="font-semibold text-start text-black text-[20px] leading-[25.2px] ">
                                                            {newComer.name}
                                                        </h3>

                                                        <h3 className="font-normal text-start mt-[10px] text-[#717171] text-[16px] leading-[20.16px] md:w-[100%] xs:w-full">
                                                            {newComer.description}
                                                        </h3>
                                                        
                                                    </div>

                                                </div>

                                            </div>

                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </div>
                    </div>
                </section>

            </div>

        </div>
    )
}

export default SecondPage