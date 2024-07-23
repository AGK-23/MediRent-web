/* eslint-disable react/no-unescaped-entities */
// import React from 'react'


import Home from '../../assets/contemporary-residential.png'
import CroppedHome from "../../assets/cropped-residential.png"
import SearchTab from '../Search/SearchTab'
import { Fade } from 'react-reveal';

// bg-[#A4ABAC]

// eslint-disable-next-line react/prop-types
const TopPage = ({allSiteListings, setAllSiteListings}) => {
    return (
        <div className='flex w-full flex-col bg-[#C6D8E4] items-center justify-end mt-0 relative'>
            <div className='grid xs:grid-cols-1 md:grid-cols-2 md:w-full md:gap-3 xs:gap-0 xs:w-full items-center mt-0 xs:pb-2 md:pb-0 relative'>
                <Fade left delay={500}>
                    <div className='  w-full flex justify-end px-0 md:mt-20 xs:mt-0 md:pl-0 xs:pl-0 z-10 '>
                        {/* <div className='md:px-0 xs:px-2 flex md:justify-end xs:justify-center flex-col lg:w-[80%] md:w-[95%] xs:w-fit'>
                            <div className='text-black lg:text-[50px] md:text-[45px] xs:text-[50px] flex leading-12 font-semibold'>
                                Global Housing for the Medical Community
                            </div>
                            <div className='text-black text-[20px] flex'>
                                Find or list housing tailored for healthcare professionals worldwide. Medirent connects you with trusted options for seamless living and renting.
                            </div>
                        </div> */}
                        <div className=' md:px-0 xs:px-2 flex md:justify-end xs:justify-center flex-col lg:w-[80%] md:w-[95%] xs:w-fit absolute md:-top-40 xs:top-12 xs:left-0 md:left-20'>
                            <div className=' text-black lg:text-[50px] md:text-[45px] xs:text-[21px] flex leading-12 font-semibold md:w-fit xs:w-[252.2px] '>
                                Global Housing for the Medical Community
                            </div>
                            <div className='text-black md:text-[20px] xs:text-[12px] font-[400] flex md:w-fit xs:w-[200px]'>
                                Find or list housing tailored for healthcare professionals worldwide. Medirent connects you with trusted options for seamless living and renting.
                            </div>
                        </div>
                    </div>
                </Fade>
                <Fade right delay={500}>
                    <div className='md:mt-20 xs:mt-0 w-full md:flex xs:hidden justify-end '>
                        <img
                            alt=""
                            src={Home}
                            className="cursor-pointer w-[698px] h-[479.77px] "
                        />
                    </div>

                    <div className='md:mt-20  xs:mt-0 w-full md:hidden xs:flex justify-end z-0'>
                        <img
                            alt=""
                            src={CroppedHome}
                            className="cursor-pointer w-[239px] h-[288px]"
                        />
                    </div>
                </Fade>                
            </div>

            <div className='absolute lg:-bottom-[6rem] md:-bottom-[6.5rem] xs:-bottom-[13rem]'>
                <SearchTab
                    allSiteListings={allSiteListings}
                    setAllSiteListings={setAllSiteListings} 
                />
            </div>
        </div>
    )
}

export default TopPage