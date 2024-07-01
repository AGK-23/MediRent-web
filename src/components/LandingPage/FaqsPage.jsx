/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";




// import Listing from "../../assets/svg/homeListing.svg"
import { Link } from "react-router-dom";
import { questionData } from "../../data/Mylinks";
import FaqArrow from "../../assets/svg/faq-arrow.svg"


const FaqsPage = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const [isOpen, setIsOpen] = useState(false);

    const toggle = (questionIndex) => {
        if (selectedItem === questionIndex) {
            return setSelectedItem(null);
        }
        setSelectedItem(questionIndex);
        setIsOpen(!isOpen);
    };


    return (
        <div className='md:mt-[5rem] xs:mt-[5rem]'>
            <div className=' '>

                <section
                    className=" 
                    flex justify-center items-center md:px-[120px] xs:px-3 md:mt-10 xs:mt-12"
                >
                    <div className="flex flex-col justify-center items-center ">
                        <div className="relative z-10 grid md:grid-cols-2 xs:grid-cols-1 gap-10">
                            <div className="flex justify-center items-center flex-col ">
                                <div

                                    className=" w-full h-full flex "
                                >
                                    <div className=" mb-3 md:px-4 xs:px-0 text-black flex-col font-normal md:mb-7 xs:mb-3 flex ">

                                        <div className="text-[32px] leading-[40.32px] font-semibold md:w-[340px] xs:w-fit">
                                            Frequently asked Questions
                                        </div>

                                        <div className="text-black mb-0 flex text-[16px] text-start py-5 md:w-[440px] md:pr-10 xs:pr-0 xs:w-fit">
                                            <span className="">
                                                If your question isn't listed here, please don't hesitate to<span className="underline px-1">contact us</span>directly. We're here to help!
                                            </span>

                                        </div>

                                        <Link
                                            to="/"

                                            className={`bg-primary font-normal text-white w-fit rounded-full opacity-70 px-[30px] py-[5px] text-center
                                                flex justify-between items-center group`}

                                        >Visit all FAQs</Link>
                                    </div>

                                </div>
                            </div>

                            <div className="mb-3 md:px-0 xs:px-0 text-black flex-col font-normal md:mb-7 xs:mb-3 flex flex-wrap justify-center items-center text-center mt-[0px]">

                                <div
                                    className="flex justify-center items-center flex-col xs:px-0 question-container border-line"
                                >
                                    {questionData.map((question, questionIndex) => {
                                        return (
                                            <div className=" w-full flex justify-center items-center question-container border-line text-start" key={questionIndex}>
                                                <div
                                                    // className="w-full cursor-pointer py-5 md:px-5 xs:px-3 mb-8 border-[1px] border-primary rounded-xl bg-white "
                                                    className={`sm:max-h-[400px] w-full cursor-pointer py-5 md:px-0 xs:px-0 mb-8 ${selectedItem === questionIndex ? 'open-bar' : ''}`}
                                                    onClick={() => toggle(questionIndex)}

                                                >
                                                    <div className='w-full flex justify-between items-center'>

                                                        <h3 className="text-start font-semibold text-black lg:text-lg lg:text-md xs:text-[13px] capitalize w-full">
                                                            {question.question}
                                                        </h3>
                                                        <span className=''>


                                                            <div className="" >
                                                                <div className={`icon ${selectedItem === questionIndex ? 'rotate-180 ' : 'rotate-360'} -bottom-[0px] relative`}>

                                                                        <img
                                                                            alt=""
                                                                            src={FaqArrow}
                                                                            className=" w-full h-full "
                                                                        />
                                                                    
                                                                </div>
                                                            </div>
                                                        </span>
                                                    </div>
                                                    {selectedItem === questionIndex ? (
                                                        <div className="text-gray-500 w-full md:text-base xs:text-xs p-2 my-2  drop-line">{question.answer}</div>
                                                    ) : (
                                                        <div className="hidden ">{question.answer}</div>
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>






                        </div>
                    </div>
                </section>

            </div>

        </div>
    )
}

export default FaqsPage