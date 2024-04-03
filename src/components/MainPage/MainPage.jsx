import React from 'react'
import ImageDiv from '../ImageDiv/ImageDiv';
import MiddlePage from '../MiddlePage/MiddlePage';
import HomeBlog from '../HomeBlog/HomeBlog';

const MainPage = () => {
    return (
        <div className='md:mt-40 xs:mt-0'>
            <div>
                <ImageDiv />
            </div>
            <div>
                <MiddlePage/>
            </div>
            <div>
                <HomeBlog />
            </div>

            {/* MainPage */}
        </div>
    )
}

export default MainPage