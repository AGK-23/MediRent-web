import React from 'react'
import { Link } from 'react-router-dom';
import Medicine from "../../assets/medicine_16.jpg";
import Medicine9 from "../../assets/medicine_9.jpg";
import Medicine14 from "../../assets/medicine_14.jpg";
import Medicine10 from "../../assets/medicine_10.jpg";
import Medicine8 from "../../assets/medicine_8.jpg";
import Medicine5 from "../../assets/medicine_5.jpeg";
import Medicine3 from "../../assets/medicine_3.jpg";
import Medicine2 from "../../assets/medicine_2.jpg";
import Medicine1 from "../../assets/medicine_1.jpg";
import Medicine12 from "../../assets/medicine_12.jpg";
import Medicine7 from "../../assets/medicine_7.jpg";
import Medicine4 from "../../assets/medicine_4.jpg";

import { Fade } from 'react-reveal';



const MiddlePage = () => {
    return (
        <div className='md:mt-4 mt-0'>

            <div>
                <div className=" flex font-medium justify-between max-w-screen-xl mx-auto ">

                    <div className=" w-full flex justify-center ">
                        <div className="mt-28 relative z-0 bg-transparent">
                            <div className="mx-auto">
                                <div className="flex justify-center items-center flex-col">

                                <>
                                    <div>
                                        <div className='relative px-2'>
                                            <Link className="text-1.302vw absolute right-4 text-[#0c527b] font-serif transition-colors duration-150 top-6" href="/">See all →</Link>
                                            <h2 className=" font-medium text-black md:text-3xl xs:text-xl text-center  mb-10">Popular Medical <strong>Schools</strong></h2>
                                        </div>


                                        <div className='grid md:grid-cols-4 xs:grid-cols-1 gap-5 px-4'>
                                            <div className="popular">
                                                <Link href="/">
                                                    <div className='hover:bg-black text-[#0c527b] hover:text-white hover:border-[1px] hover:border-gray-400'>
                                                        <img 
                                                            className="hover:grayscale w-full" 
                                                            src={Medicine} 
                                                            alt="University of Toronto"
                                                        />
                                                        <div className=' w-full text-center py-7 px-7'>
                                                            <span className="text-md"><strong>University of Toronto</strong></span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="popular">
                                                <Link href="/">
                                                    <div className='hover:bg-black text-[#0c527b] hover:text-white hover:border-[1px] hover:border-gray-400'>
                                                        <img 
                                                            className="hover:grayscale w-full" 
                                                            src={Medicine9} 
                                                            alt="University of Toronto"
                                                        />
                                                        <div className='w-full text-center py-7 px-5'>
                                                            <span className="text-md"><strong>University of British Columbia</strong></span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="popular">
                                                <Link href="/">
                                                    <div className='hover:bg-black text-[#0c527b] hover:text-white hover:border-[1px] hover:border-gray-400'>
                                                        <img 
                                                            className="hover:grayscale w-full" 
                                                            src={Medicine7} 
                                                            alt="University of Toronto"
                                                        />
                                                        <div className='w-full text-center py-7 px-1'>
                                                            <span className="text-md"><strong>Western University Schulich School of Medicine</strong></span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="popular">
                                                <Link href="/">
                                                    <div className='hover:bg-black text-[#0c527b] hover:text-white hover:border-[1px] hover:border-gray-400'>
                                                        <img 
                                                            className="hover:grayscale w-full" 
                                                            src={Medicine3} 
                                                            alt="University of Toronto"
                                                        />
                                                        <div className='w-full text-center py-7 px-1'>
                                                            <span className="text-md"><strong>McMaster University</strong></span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className='grid md:grid-cols-4 xs:grid-cols-1 gap-5 px-4'>
                                            <div className="popular">
                                                <Link href="/">
                                                    <div className='hover:bg-black text-[#0c527b] hover:text-white hover:border-[1px] hover:border-gray-400'>
                                                        <img 
                                                            className="hover:grayscale w-full" 
                                                            src={Medicine14} 
                                                            alt="University of Ottawa"
                                                        />
                                                        <div className=' w-full text-center py-7 px-7'>
                                                            <span className="text-md"><strong>University of Ottawa</strong></span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="popular">
                                                <Link href="/">
                                                    <div className='hover:bg-black text-[#0c527b] hover:text-white hover:border-[1px] hover:border-gray-400'>
                                                        <img 
                                                            className="hover:grayscale w-full" 
                                                            src={Medicine10} 
                                                            alt="University of Calgary"
                                                        />
                                                        <div className='w-full text-center py-7 px-5'>
                                                            <span className="text-md"><strong>University of Calgary</strong></span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="popular">
                                                <Link href="/">
                                                    <div className='hover:bg-black text-[#0c527b] hover:text-white hover:border-[1px] hover:border-gray-400'>
                                                        <img 
                                                            className="hover:grayscale w-full" 
                                                            src={Medicine2} 
                                                            alt="McGill University"
                                                        />
                                                        <div className='w-full text-center py-7 px-1'>
                                                            <span className="text-md"><strong>McGill University</strong></span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="popular">
                                                <Link href="/">
                                                    <div className='hover:bg-black text-[#0c527b] hover:text-white hover:border-[1px] hover:border-gray-400'>
                                                        <img 
                                                            className="hover:grayscale w-full" 
                                                            src={Medicine8} 
                                                            alt="University of Alberta"
                                                        />
                                                        <div className='w-full text-center py-7 px-1'>
                                                            <span className="text-md"><strong>University of Alberta</strong></span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className='grid md:grid-cols-4 xs:grid-cols-1 gap-5 px-4'>
                                            <div className="popular">
                                                <Link href="/">
                                                    <div className='hover:bg-black text-[#0c527b] hover:text-white hover:border-[1px] hover:border-gray-400'>
                                                        <img 
                                                            className="hover:grayscale w-full" 
                                                            src={Medicine12} 
                                                            alt="University of Manitoba"
                                                        />
                                                        <div className=' w-full text-center py-7 px-7'>
                                                            <span className="text-md"><strong>University of Manitoba</strong></span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="popular">
                                                <Link href="/">
                                                    <div className='hover:bg-black text-[#0c527b] hover:text-white hover:border-[1px] hover:border-gray-400'>
                                                        <img 
                                                            className="hover:grayscale w-full" 
                                                            src={Medicine4} 
                                                            alt="SUNY State University of New York Downstate Medical Center College of Medicine"
                                                        />
                                                        <div className='w-full text-center py-7 px-5'>
                                                            <span className="text-md"><strong>SUNY State University of New York Downstate Medical Center College of Medicine</strong></span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="popular">
                                                <Link href="/">
                                                    <div className='hover:bg-black text-[#0c527b] hover:text-white hover:border-[1px] hover:border-gray-400'>
                                                        <img 
                                                            className="hover:grayscale w-full" 
                                                            src={Medicine5} 
                                                            alt="NOSM University (Northern Ontario School of Medicine)"
                                                        />
                                                        <div className='w-full text-center py-7 px-1'>
                                                            <span className="text-md"><strong>NOSM University (Northern Ontario School of Medicine)</strong></span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="popular">
                                                <Link href="/">
                                                    <div className='hover:bg-black text-[#0c527b] hover:text-white hover:border-[1px] hover:border-gray-400'>
                                                        <img 
                                                            className="hover:grayscale w-full" 
                                                            src={Medicine1} 
                                                            alt="Dalhousie Medical School-Halifax and New Brunswick Campus"
                                                        />
                                                        <div className='w-full text-center py-7 px-1'>
                                                            <span className="text-md"><strong>Dalhousie Medical School-Halifax and New Brunswick Campus</strong></span>
                                                        </div>
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
                {/* <div className="bg-slate-900 opacity-30 absolute z-20 lg:h-screen md:h-[70vh] sm:h-screen xs:h-screen w-full"></div> */}

            </div>
        </div>
    )
}

export default MiddlePage