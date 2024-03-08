// import React from 'react'
import Tabs from './Tabs/Index.jsx';
import Properties from './Properties/Index.jsx'
// import Charts from './Charts/index.jsx';
// import Tables from './Tables/Index.jsx';
// import ButtonChart from './Charts/ButtonChart.jsx';

// import Orders from './Orders/index.jsx';

const MainPage = () => {
  return (
    <div className='h-screen text-lg font-semibold w-full z-0 relative px-6 top-[3rem]'>
        
        <div className=''>
            <Tabs />
        </div>

        <div className=''>
            <Properties />
        </div>

        {/* <div className='pb-10'>
            <Orders /> 
        </div> */}

        {/* <div>
            <ButtonChart/>
        </div>
        
        <div>
            <Tables/> 
        </div> */}
    </div>
  )
}

export default MainPage