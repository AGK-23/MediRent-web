
import React from 'react'
import { Link } from 'react-router-dom';
import Canadian from "../../assets/b.jpg";
import {
    FaFacebook,
    FaTwitter,
    FaPinterest,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { FaUserDoctor } from "react-icons/fa6";
import { MdEventBusy } from "react-icons/md";




function Footer() {
    return (
        <div id="footer">
            <div className='mt-10'>
                <div>
                    <div className=" flex font-medium justify-between max-w-screen-2xl px-5 mx-auto ">
                        <div className=" w-full flex justify-center ">
                            <div className=" relative z-0 bg-transparent">
                                <div className="mx-auto">
                                    <div className="flex justify-center items-center flex-col ">
                                        <div>
                                            <div className='relative px-2'>
                                                <h2 className=" font-semibold text-black md:text-xl xs:text-lg text-center mb-2">MediRent.com</h2>
                                                <h2 className=" font-light text-black md:text-sm xs:text-sm text-center mb-5">Is the Proud partner of: </h2>
                                            </div>

                                            <div className='grid md:grid-cols-4 xs:grid-cols-1 gap-20 px-4 justify-center items-center w-full md:pb-10 xs:pb-10 border-b-[1px] border-gray-500'>
                                                <div className="popular">
                                                    <Link href="/">
                                                        <div className=' text-[#0c527b] hover:text-white '>
                                                            <img
                                                                className="w-full"
                                                                src="https://www.medshousing.com/fichiersUploadOpt/400-0-0-0-304-112-84151bd0d96a186864a65621a8f5340ee3536822f8a701af3/20240206132947-novascotia.png"
                                                                alt="University of Toronto"
                                                            />

                                                        </div>
                                                    </Link>
                                                </div>

                                                <div className="popular">
                                                    <Link href="/">
                                                        <div className=' text-[#0c527b] hover:text-white '>
                                                            <img
                                                                className="w-full"
                                                                src="https://www.medshousing.com/fichiersUploadOpt/600-0-0-0-2892-840-168b1a610e6b35865c932c532ad57b1913be459dc8c675820/20240206122319-logoipoans.png"
                                                                alt="University of Toronto"
                                                            />
                                                        </div>
                                                    </Link>
                                                </div>

                                                <div className="popular">
                                                    <Link href="/">
                                                        <div className=' text-[#0c527b] hover:text-white'>
                                                            <img
                                                                className="w-full"
                                                                src="https://www.medshousing.com/fichiersUploadOpt/600-0-0-0-2922-526-ed5a2ad4ca7256d020f1adcb4bc7ce87a701b4a74c429f70c/20230920153545-mahc-logo-vector.png"
                                                                alt="University of Toronto"
                                                            />
                                                        </div>
                                                    </Link>
                                                </div>

                                                <div className="popular">
                                                    <Link href="/">
                                                        <div className=' text-[#0c527b] hover:text-white flex justify-center '>
                                                            <img
                                                                className="w-40 h-40"
                                                                src={Canadian}
                                                                alt="University of Toronto"
                                                            />
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className="grid lg:grid-cols-4 md:grid-cols-2 xs:grid-cols-1 md:gap-5 xs:gap-10 md:px-4 xs:px-0 justify-center items-center w-full md:pt-10 xs:pt-10 pb-6">
                                                <div className="">
                                                    <div>
                                                        <div className='md:text-lg xs:text-sm'>
                                                            <span ><strong>Sign up now</strong> for our newsletter</span>
                                                            <div>and be the first to receive the</div>
                                                            <div>latest news from Medirent</div>
                                                        </div>

                                                        <div className="flex mt-5">
                                                            <div className='w-full'>
                                                                <input type="email" className="border border-lightgray rounded-md py-2 px-2 outline-none w-full " placeholder="Enter your email" />
                                                            </div>
                                                            <div className='ml-3'>
                                                                <div className="aspect-square rounded-md text-white py-3 px-3 transition-all duration-300 bg-third">
                                                                    <BsArrowRight color='white' />
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>


                                                <div className='w-full h-full justify-center items-center flex md:flex-row xs:flex-col gap-5'>
                                                    <div className="h-full  justify-center items-center flex m-top-0.3vw m-bottom-9vw m-right-3vw bg-cover bg-center bg-no-repeat w-22vw h-25vw">
                                                        <FaUserDoctor className='w-20 h-20' />
                                                    </div>
                                                    <div>
                                                        <div className='md:text-[16px] xs:text-sm'>
                                                            <div>Have a great property<strong> near</strong></div>
                                                            <strong>medical schools or hospitals?</strong>
                                                            <div>Add your Property Listing!</div>
                                                        </div>
                                                        <button
                                                            className='text-sm px-10 py-3 mt-3 text-white font-medium rounded-md bg-third'
                                                        >
                                                            Sign Up
                                                        </button>
                                                    </div>

                                                </div>

                                                <div className='w-full h-full justify-center items-center flex md:flex-row xs:flex-col gap-5'>
                                                    <div className="h-full justify-center items-center flex m-top-0.3vw m-bottom-9vw m-right-3vw bg-cover bg-center bg-no-repeat w-22vw h-25vw">
                                                        <MdEventBusy className='w-20 h-20' />
                                                    </div>
                                                    <div>
                                                        <div className='md:text-[18px] xs:text-sm'>
                                                            <div>When life is too busy,</div>
                                                            <div><strong>post a want ad</strong> and</div>
                                                            <div>let landlords find you!</div>
                                                        </div>
                                                        <button
                                                            className='text-sm px-5 py-3 mt-3 text-white font-medium rounded-md bg-third'
                                                        >
                                                            Post a want ad now!
                                                        </button>
                                                    </div>

                                                </div>

                                                <div className='w-full h-full justify-center items-center flex flex-col gap-2'>

                                                    <div className='text-start'>MediRent.com</div>
                                                    <div className='text-start text-third'>info@medirent.com</div>
                                                    <div className="flex gap-4 text-gray-400 ">
                                                        <Link
                                                            to="/"
                                                            className="fab text-lg"
                                                        >
                                                            <FaFacebook />
                                                        </Link>
                                                        <Link
                                                            to="/"
                                                            className="fab text-lg"
                                                        >
                                                            <FaTwitter />
                                                        </Link>

                                                        <Link
                                                            to="/"
                                                            className="fab text-lg"
                                                        >
                                                            <FaPinterest />
                                                        </Link>
                                                        <Link
                                                            to="/"
                                                            className="fab text-lg"
                                                        >
                                                            <FaInstagram />
                                                        </Link>
                                                        <Link
                                                            to="/"
                                                            className="fab text-lg"
                                                        >
                                                            <FaLinkedin />
                                                        </Link>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className='flex md:flex-row xs:flex-col gap-5 my-10 float-right'>
                                                <div className="  ">
                                                    <Link className="text-xs transition-all duration-150 ease-linear ml-0.85vw inline-block text-third mr-3" href="/">Mission</Link>
                                                    <Link className="text-xs transition-all duration-150 ease-linear ml-0.85vw inline-block text-third mr-3" href="/">Pricing</Link>
                                                    <Link className="text-xs transition-all duration-150 ease-linear ml-0.85vw inline-block text-third mr-3" href="/">Add your property</Link>
                                                    <Link className="text-xs transition-all duration-150 ease-linear ml-0.85vw inline-block text-third mr-3" href="/">FAQ</Link>
                                                    <Link className="text-xs transition-all duration-150 ease-linear ml-0.85vw inline-block text-third mr-3" href="/">Blog</Link>
                                                    <Link className="text-xs transition-all duration-150 ease-linear ml-0.85vw inline-block text-third mr-3" href="/">Privacy / GDPR</Link>
                                                    <Link className="text-xs transition-all duration-150 ease-linear ml-0.85vw inline-block text-third mr-3" href="/">Site Map</Link>
                                                </div>

                                                <span className="   font-[400] text-sm  leading-1.3vw ">
                                                    © 2024 MediRent.com
                                                    <div>
                                                    Built by <Link href="/" className="text-xs transition-all duration-150 ease-linear inline-block text-third ">Numérique.ca</Link>
                                                    </div> 
                                                </span>
                                            </div>







                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* <div className="bg-slate-900 opacity-30 absolute z-20 lg:h-screen md:h-[70vh] sm:h-screen xs:h-screen w-full"></div> */}

                </div>
            </div>

        </div>
    )
}

export default Footer