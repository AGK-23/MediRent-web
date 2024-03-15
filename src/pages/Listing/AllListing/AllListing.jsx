import React from 'react'

import { listData } from '../../../data/Mylinks';
import Map from './Map.jsx';
import Card from './Card.jsx';







const AllListing = () => {

    const data = listData;
    return (
        <div className="flex h-full md:mt-10 xs:mt-20 px-5">
          <div className=" h-full flex justify-center items-center">
            <div className="h-full grid md:grid-cols-2 xs:grid-cols-1 gap-10 overflow-y-auto justify-center items-center pb-12">
              {/* <Filter /> */}
              {data.map(item => (
                <Card key={item.id} item={item} />
              ))}
            </div>
          </div>
          {/* <div className="h-fit flex-3 md:flex w-full bg-third xs:hidden">
            <Map items={data} />

          </div> */}
        </div>
      );
}

export default AllListing