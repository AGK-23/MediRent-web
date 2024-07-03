/* eslint-disable react/no-unescaped-entities */

import { useEffect } from "react";
import Listing from "../../assets/svg/homeListing.svg"
import { useLocation, useNavigate} from "react-router-dom";


const HomeListing = () => {

    const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
 

    return (
        <div className='md:mt-[5rem] xs:mt-[5rem]'>
            <div className=' '>

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
                                            Listings
                                        </span>

                                        <div className="md:text-[32px] xs:text-[21px] md:leading-[40.32px] xs:leading-[26.46px] font-semibold md:w-full xs:w-fit">
                                            Discover Exceptional Spaces with Medirent
                                        </div>
                                        

                                        <div className="text-[#717171] mb-2 flex text-[16px] text-start py-5">
                                            Explore a curated selection of properties designed for the medical community and enjoy flexible monthly payments. Medirent-managed homes are move-in ready and include all essential services.
                                        </div>

                                        <button
                                            
                                            onClick={() => handleLinkClick('/all-listings')}
                                            className={`bg-primary font-normal text-white w-fit rounded-full opacity-70 px-[30px] py-[5px] text-center
                                                flex justify-between items-center group`}

                                        >View Listings</button>

                                        <div className="text-[#717171] mb-2 flex text-[16px] text-start py-5 xs:flex-col md:flex-row">
                                            <span>Looking to list your space instead?</span>
                                            <span className="text-primary underline underline-offset-4 ml-1 font-normal"> Sign up as a Host</span>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className=" mb-3 md:px-4 xs:px-0 text-black flex-col font-normal md:mb-7 xs:mb-3 flex flex-wrap justify-center items-center text-center mt-[0px]">
                                <div className=" w-fit ">
                                    <div className="flex justify-center items-center w-fit">
                                        <img alt="" src={Listing} className=" cursor-pointer" />


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

        </div>
    )
}

export default HomeListing