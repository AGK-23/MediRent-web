// import React from 'react'
// import MinimalLayout from "../MinimalLayout"

import { useState, useEffect } from "react";


// eslint-disable-next-line react/prop-types
const Appheader = ({ OpenScreen }) => {
  // Retrieve the stringified object from local storage
  const storedToken = localStorage.getItem('token');

  const [userName, setUserName] = useState("")


  // Parse the stringified object back to its original form
  const userDetails = JSON.parse(storedToken);

  // console.log("token image", userDetails?.firstName);

  

  useEffect(() => {
    setUserName(userDetails?.firstName)
    // console.log('Updated housingData:', userName);
  }, [userName]); // Log housingData whenever it changes




  return (
    <div className="left-0 top-0 z-0">
      
      <div>
        <div className="bg-white z-10 fixed w-full top-0 left-0 flex-1 justify-between items-center text-2xl font-semibold p-2 flex border-b-[1px] border-gray-300 drop-shadow-md">
          <h1 className="text-3xl  font-semibold flex">
            <div
              className="flex items-center lg:hidden rounded p-2 mr-2 text-third text-lg"
              onClick={OpenScreen}
            >
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="menu-unfold"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 000-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0014.4 7z"></path>
              </svg>
            </div>
            <div className="text-[10px] ml-0 max-w-[14rem] text-third">
              Welcome Back, {userName}
            </div>
          </h1>
          {/* <div className="">
            <MinimalLayout />
          </div> */}
        </div>
        
      </div>
    </div>
  );
};

export default Appheader;


