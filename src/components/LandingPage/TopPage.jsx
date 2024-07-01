/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import Home from '../../assets/contemporary-residential.png'
import SearchTab from '../Search/SearchTab'
import { Fade } from 'react-reveal';

// bg-[#A4ABAC]

const TopPage = () => {
    return (
        <div className='flex w-full flex-col bg-[#C6D8E4] items-center justify-end mt-0 relative'>
            <div className='flex md:w-full gap-3 xs:w-full items-center justify-between mt-0 xs:pb-2 md:pb-0 relative'>
                <Fade left delay={500}>
                    <div className=' w-full flex justify-end px-0 mt-20 md:pl-0 xs:pl-0 '>
                        <div className='md:px-0 xs:px-2 flex md:justify-end xs:justify-center flex-col lg:w-[80%] md:w-[95%] xs:w-fit'>
                            <div className='text-black lg:text-[50px] md:text-[45px] xs:text-[50px] flex leading-12 font-semibold'>
                                Global Housing for the Medical Community
                            </div>
                            <div className='text-black text-[20px] flex'>
                                Find or list housing tailored for healthcare professionals worldwide. Medirent connects you with trusted options for seamless living and renting.
                            </div>
                        </div>
                    </div>
                </Fade>
                <Fade right delay={500}>
                    <div className='mt-20 w-full md:flex xs:hidden justify-end '>
                        <img
                            alt=""
                            src={Home}
                            className="cursor-pointer w-[698px] h-[479.77px] "
                        />
                    </div>

                </Fade>
            </div>

            <div className='absolute lg:-bottom-[6rem] md:-bottom-[6.5rem] xs:-bottom-[17rem]'>
                <SearchTab />
            </div>


        </div>
    )
}

export default TopPage