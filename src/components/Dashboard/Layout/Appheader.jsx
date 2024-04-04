import { useState, useEffect } from "react";

const Appheader = ({ OpenScreen }) => {
  const storedToken = localStorage.getItem('token');
  const userDetails = JSON.parse(storedToken);
  
  const [userName, setUserName] = useState(userDetails?.firstName || "");

  useEffect(() => {
    setUserName(userDetails?.firstName);
  }, [userDetails]); // Update userName when userDetails changes

  return (
    <div className="left-0 top-0 z-0">
      <div>
        <div className="bg-white z-10 fixed w-full top-0 left-0 flex-1 justify-between items-center text-2xl font-semibold p-2 flex border-b-[1px] border-gray-300 drop-shadow-md">
          <h1 className="text-3xl font-semibold flex">
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
                {/* SVG Path */}
              </svg>
            </div>
            <div className="text-[10px] ml-0 max-w-[14rem] text-third">
              Welcome Back, {userName}
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Appheader;
