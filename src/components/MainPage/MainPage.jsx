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
        <div className='md:mt-0 xs:mt-[6rem]'>
            <div className="bg-[#A4ABAC]">
                <TopPage />
            </div>
            <div>
                <SecondPage />
            </div>
            <div>
                <ServicePage/>
            </div>
            <div>
                <HomeListing />
            </div>

            <div>
                <FaqsPage />
            </div>

            {/* MainPage */}
        </div>
    )
}

export default MainPage