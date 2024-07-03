/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";
import { questionData } from "../../../data/Mylinks";
import FaqArrow from "../../../assets/svg/faq-arrow.svg"

const Faqs = () => {
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
                    flex justify-center items-center md:mt-[5rem] xs:mt-12  w-full"
                >
                    <div className="flex flex-col justify-center items-center w-full">
                        <div className="relative z-10 grid md:grid-cols-1 xs:grid-cols-1 gap-10 w-full md:mt-20 xs:mt-5">
                            <div className="flex justify-center items-center flex-col w-full">
                                <div

                                    className=" w-full h-full flex  "
                                >
                                    <div className=" mb-3 md:px-4 xs:px-0 text-black flex-col font-normal md:mb-7 xs:mb-3 flex justify-center items-center w-full">

                                        <div className="md:text-[32px] xs:text-[21px] md:leading-[40.32px] xs:leading-[26.46px] font-semibold md:w-full xs:w-fit flex justify-center items-center">
                                            Frequently asked Questions
                                        </div>

                                        <div className="text-black mb-0 text-[16px] text-start py-5 md:w-full md:pr-10 xs:pr-0 xs:w-fit flex justify-center items-center">
                                            <span className="px-2">
                                                If your question isn't listed here, please don't hesitate to<span className="underline px-1">contact us</span>directly. We're here to help!
                                            </span>

                                        </div>

                                        
                                    </div>

                                </div>
                            </div>

                            <div className=" w-full mb-3 md:px-20 xs:px-2 text-black flex-col font-normal md:mb-7 xs:mb-3 flex justify-center items-center text-center mt-[0px]">
                                <div className=" md:w-full xs:w-full flex justify-center items-center flex-col xs:px-0 question-container border-line">
                                    {questionData.map((question, questionIndex) => {
                                        return (
                                            <div className=" w-full flex justify-center items-center question-container border-line text-start" key={questionIndex}>
                                                <div className={`w-full cursor-pointer py-5 md:px-0 xs:px-0 mb-8 ${selectedItem === questionIndex ? 'open-bar' : ''}`} onClick={() => toggle(questionIndex)}>
                                                    <div className="w-full flex justify-between items-center ">
                                                        <h3 className="text-start font-[400] text-black lg:text-lg lg:text-md xs:text-[13px] capitalize w-full ">{question.question}</h3>
                                                        <span className="">
                                                            <div className="">
                                                                <div className={`icon ${selectedItem === questionIndex ? 'rotate-180 ' : 'rotate-360'} -bottom-[0px] relative`}>
                                                                    <img alt="" src={FaqArrow} className=" w-full h-full " />
                                                                </div>
                                                            </div>
                                                        </span>
                                                    </div>
                                                    {selectedItem === questionIndex ? (
                                                        <div className="text-gray-500 w-full md:text-base xs:text-xs p-2 my-2 drop-line ">{question.answer}</div>
                                                    ) : (
                                                        <div className="hidden w-full ">{question.answer}</div>
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

export default Faqs