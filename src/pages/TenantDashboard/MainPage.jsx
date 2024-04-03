
// import Tabs from './Tabs/Index.jsx';
// import Properties from './Properties/Index.jsx'
import React, { lazy, Suspense } from 'react';

const Tabs = lazy(() => import('./Tabs/Index.jsx'));
const Properties = lazy(() => import('./Properties/Index.jsx'));



const MainPage = () => {
    return (

        <Suspense fallback={<Spinner />}>
            <div className='h-screen text-lg font-semibold w-full z-0 relative px-6 top-[3rem]'>

                <div className=''>
                    <Tabs />
                </div>

                <div className=''>
                    <Properties />
                </div>
            </div>
        </Suspense>
    )
}

export default MainPage