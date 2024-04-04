/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from 'react';


import ListingItem from './ListingItem';
import { useLocation } from 'react-router-dom';
import NoFound from "../../assets/svg/NoHouse.svg"


const ListingHome = () => {
    const location = useLocation();
    // const history = useHistory();

    // Destructure result with a default empty object in case location.state is not available
    const { result } = location.state;

    const { listings = [], emptyLoading } = result;
    // const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        console.log('estate in the building:', result, emptyLoading);
    }, [result, emptyLoading]);





    return (
        <div className="flex flex-col h-full md:mt-20 xs:mt-20 ">

            <div className="h-full flex-col justify-center items-center md:mt-32 xs:mt-20 ">
                <div className="h-full grid md:grid-cols-2 xs:grid-cols-1 gap-10  justify-center items-center pb-12 md:px-10 xs:px-0 ">
                    {result?.length > 0  ? (
                        result?.map(item => (
                            <ListingItem key={item.id} item={item} />
                        ))
                    ) : (
                        <div className="flex justify-center items-center w-screen h-full ">
                            <div className='flex flex-col '>
                                
                                <img alt="" src={NoFound} className="text-7xl w-full  h-full" />
                                <div className='md:text-2xl xs:text-lg font-semibold text-center mt-5 text-gray-600'>No Location Found</div>
                            </div>

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