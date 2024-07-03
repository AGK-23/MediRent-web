// import React from 'react'
// import ImageDiv from '../ImageDiv/ImageDiv';
// import MiddlePage from '../MiddlePage/MiddlePage';
// import HomeBlog from '../HomeBlog/HomeBlog';

import HomeListing from '../LandingPage/HomeListing';
import SecondPage from '../LandingPage/SecondPage';
import ServicePage from '../LandingPage/ServicePage';
import FaqsPage from '../LandingPage/FaqsPage';

import TopPage from "../LandingPage/TopPage";

const MainPage = () => {
    return (
        <div className='md:mt-0 xs:mt-[4rem]'>
            <div className="bg-[#A4ABAC]">
                <TopPage />
            </div>
            <div className='lg:px-[120px] md:px-3 xs:px-3'>
                <SecondPage />
            </div>
            <div className='lg:px-[120px] md:px-3 xs:px-0'>
                <ServicePage/>
            </div>
            <div className='lg:px-[120px] md:px-3 xs:px-3'>
                <HomeListing />
            </div>

            <div className='lg:px-[120px] md:px-3 xs:px-3'>
                <FaqsPage />
            </div>

            {/* MainPage */}
        </div>
    )
}

export default MainPage