
import { Link } from "react-router-dom";
// import CartTel from "../../assets/Home/CARTEL.png"

import Twitter from "../../assets/svg/twitter.svg";
import LinkedIn from "../../assets/svg/linkedIn.svg";
import WhatsApp from "../../assets/svg/whatsapp.svg";
import Instagram from "../../assets/svg/instagram.svg"

import Logo from "../../assets/logo.png";

// md:w-[1053px] 

function Footer() {
    return (
        <footer id='footer'>
            <div
                //  className=" bg-Footer "
                className="bg-[#C5D8E4] bg-cover flex-col bg-center flex justify-center items-center px-0 border-y border-lightgray pt-10 "
            >
                <div className="md:w-full grid md:grid-cols-4 xs:grid-cols-1 items-center font-medium justify-between mx-2 xs:w-full lg:px-40 md:px-10 xs:px-2">
                    <div className="flex md:pl-0 xs:pl-0 md:justify-end xs:justify-start h-full  md:mt-[88px] xs:mt-0 xs:mb-10 md:mb-0">

                        <div className="flex mb-4 text-start">

                            <div className="">
                                <Link className=" w-full  flex flex-row " to="/">
                                    <div className=" text-start justify-start mx-auto text-black cursor-pointer w-full flex">
                                        <div className="">
                                            <Link to="/" className="">
                                                <img alt="" src={Logo} className="text-[1px] w-32 h-16 cursor-pointer" />
                                            </Link>
                                        </div>
                                    </div>
                                </Link>

                                <div className='mt-8 text-start leading-8 text-[16px] font-light'>
                                    Our mission is to provide seamless, personalized housing solutions for the medical community, making the rental process easier and faster.
                                </div>

                                <div className='text-gray-800 w-full gap-5 flex mt-5'>
                                    <div>
                                        <img
                                            alt=""
                                            src={Twitter}
                                            className="text-[1px] w-6 h-6"
                                        />
                                    </div>
                                    <div>
                                        <img
                                            alt=""
                                            src={LinkedIn}
                                            className="text-[1px] w-6 h-6"
                                        />
                                    </div>
                                    <div>
                                        <img
                                            alt=""
                                            src={WhatsApp}
                                            className="text-[1px] w-6 h-6"
                                        />
                                    </div>
                                    <div>
                                        <img
                                            alt=""
                                            src={Instagram}
                                            className="text-[1px] w-6 h-6"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center flex md:justify-center xs:justify-start w-full h-full md:mt-[125px] xs:mt-0 xs:mb-10 md:mb-0">
                        <div className=''>
                            <h2 className='text-start font-semibold mb-6 text-xl text-slate-900'>Why Medirent</h2>

                            <div className='mb-4 text-start text-[16px] font-[400] text-gray-400'>
                                <span className=' text-[#1B2126] hover:text-primary cursor-pointer'>Rent a space</span>
                            </div>
                            <div className='mb-4 text-start text-[16px] font-[400] text-gray-400'>
                                <span className=' text-[#1B2126] hover:text-primary cursor-pointer'>Get Tenant Insurance</span>
                            </div>
                            <div className='mb-4 text-start text-[16px] font-[400] text-gray-400'>
                                <span className=' text-[#1B2126] hover:text-primary cursor-pointer'>Rent Now, Pay Later</span>
                            </div>
                            <div className='mb-4 text-start text-[16px] font-[400] text-gray-400'>
                                <span className=' text-[#1B2126] hover:text-primary cursor-pointer'>List Your Space For Free</span>
                            </div>

                        </div>
                    </div>
                    <div className="text-center flex md:justify-center xs:justify-start w-full h-full  md:mt-[125px] xs:mt-0 xs:mb-10 md:mb-0">
                        <div className=''>
                            <h2 className='text-start font-semibold mb-6 text-xl text-slate-900'>Company</h2>

                            <div className='mb-4 text-start text-[16px] font-[400] text-gray-400'>
                                <span className=' text-[#1B2126] hover:text-primary cursor-pointer'>About</span>
                            </div>
                            <div className='mb-4 text-start text-[16px] font-[400] text-gray-400'>
                                <span className=' text-[#1B2126] hover:text-primary cursor-pointer'>FAQs</span>
                            </div>
                            <div className='mb-4 text-start text-[16px] font-[400] text-gray-400'>
                                <span className=' text-[#1B2126] hover:text-primary cursor-pointer'>Support</span>
                            </div>
                        </div>
                    </div>

                    <div className="text-center flex md:justify-center xs:justify-start w-full h-full  md:mt-[125px] xs:mt-0 xs:mb-10 md:mb-0">
                        <div className=''>
                            <h2 className='text-start font-semibold mb-6 text-xl text-slate-900'>Get In Touch</h2>

                            <div className='mb-4 text-start text-[16px] font-[400] text-gray-400'>
                                <span className=' text-[#1B2126] hover:text-primary cursor-pointer'>info@medirent.com</span>
                            </div>
                            <div className='mb-4 text-start text-[16px] font-[400] text-gray-400'>
                                <span className=' text-[#1B2126] hover:text-primary cursor-pointer'>+1 9876543567</span>
                            </div>
                            <div className='mb-4 text-start text-[16px] font-[400] text-gray-400'>
                                <span className=' text-[#1B2126] hover:text-primary cursor-pointer'>123 Maple Street Toronto, ON M5H 2N2 Canada</span>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="md:w-full xs:w-full text-center py-3 flex md:flex-row justify-around xs:flex-col border-t border-[#DDDDDD] lg:px-40 md:px-10 xs:px-2">
                    <div className="w-full flex md:flex-row xs:flex-row md:justify-start xs:justify-start md:items-start xs:items-start">
                        <div className="text-gray-800 flex text-sm">© {new Date().getFullYear()} Medirent</div>

                        <ul className="flex xs:gap-0 md:gap-5 ml-5">
                            <li className='mb-4 text-start text-sm font-[400] text-gray-400 flex flex-row'>
                                <span className=' text-gray-800 hover:text-primary cursor-pointer flex'>• Privacy</span>
                            </li>
                            <li className='mb-4 text-start text-sm font-[400] text-gray-400 ml-2'>
                                <span className=' text-gray-800 hover:text-primary cursor-pointer'>• Terms</span>
                            </li>
                        </ul>

                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer