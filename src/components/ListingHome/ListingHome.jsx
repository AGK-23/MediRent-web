

// import Card from '../../pages/Listing/AllListing/Card';
import { useState, useEffect } from 'react';
import axios from 'axios';

import ListingItem from './ListingItem';
import { useLocation } from 'react-router-dom';


const ListingHome = () => {
    const location = useLocation();
    // const history = useHistory();

    // Destructure result with a default empty object in case location.state is not available
    const { result } = location.state;

    const { listings = [], emptyLoading } = result;
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        console.log('estate in the building:', result, emptyLoading);
    }, [result]); 

    

    

    return (
        <div className="flex flex-col h-full md:mt-0 xs:mt-20 px-5 ">

            <div className=" h-screen flex-col justify-center items-center">
                <div className="h-full grid md:grid-cols-2 xs:grid-cols-1 gap-10 overflow-y-auto justify-center items-center pb-12">
                    {!emptyLoading ? (
                        result?.map(item => (
                            <ListingItem key={item.id} item={item} />
                        ))
                    ) : (
                        <div className='w-screen flex justify-center items-center h-screen '>
                            <div className="loader"></div>
                        </div>
                    )}
                </div>
            </div>
            {/* <div className="h-fit flex-3 md:flex w-full bg-third xs:hidden">
            <Map items={data} />

          </div> */}
        </div>
    );
}

export default ListingHome 