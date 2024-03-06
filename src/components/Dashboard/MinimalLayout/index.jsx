// import React from 'react'
import { useState, useRef, useEffect } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineUser, HiOutlineCog } from "react-icons/hi";

import { FiLogOut, FiMail } from "react-icons/fi";

let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};



const MinimalLayout = () => {
  const [heading, setHeading] = useState(false);
  const [subHeading, setSubHeading] = useState(false);

  let domNode = useClickOutside(() => {
    setHeading("");
    setSubHeading("")
    // console.log(subHeading)
  });

  return (
    <div ref={domNode}>
      <div className="flex flex-row justify-center items-center">
        <div
          className="cursor-pointer text-2xl flex items-center justify-center h-full text-secondary"
          onClick={() => {
            heading !== true ? setHeading(true) : setHeading(false);
            setSubHeading(false);
          }}
        >
          <IoMdNotificationsOutline />
        </div>

        <div
          className="cursor-pointer text-secondary ml-3 w-7 h-7 rounded-full border-[2px] border-secondary text-xs flex justify-center items-center"
          onClick={() => {
            subHeading !== true ? setSubHeading(true) : setSubHeading(false);
            setHeading(false);
          }}
        >
          FH
        </div>
      </div>
      <div>
        {heading === true && (
          <div className="rounded-lg absolute top-10 right-3 max-w-[20rem] bg-white shadow-2xl border-[1px] z-30">
            <div className="py-3 flex justify-between items-center border-b-[1px] border-gray-400">
              <div className="mx-2 text-[14px] w-fit flex-wrap flex font-normal">
                Notifications
              </div>
              <div className="mx-2 text-xl text-gray-700">
                <FiMail />
              </div>
            </div>

            <div className="py-0 pb-2 h-[17rem] overflow-y-auto overflow-x-auto">
              <div className="mx-auto py-3 flex justify-start items-center  border-b-[1px] border-gray-400">
                <div className="mx-1 w-2 h-2 bg-green-800 rounded-full">
                </div>
                <div className="mx-2 text-[10px] w-fit flex-wrap flex font-normal leading-[13px]">
                  <div className="font-semibold text-[12px] mb-1">
                    Client Transferred
                  </div>
                  <div>
                    Were updating our terms and conditions to provide important information about shipping heat-sensitive and perishable items 
                  </div>
                  <div className="text-gray-700 mt-1">
                    9th June 2023 2:30pm
                  </div>
                </div>
              </div>

              <div className="mx-auto py-3 flex justify-start items-center  border-b-[1px] border-gray-400">
                <div className="mx-1 w-2 h-2 bg-green-800 rounded-full">
                </div>
                <div className="mx-2 text-[10px] w-fit flex-wrap flex font-normal leading-[13px]">
                  <div className="font-semibold text-[12px] mb-1">
                    Welcome Back
                  </div>
                  <div>
                  This update includes details on the sensitivity of these items, precautions we take, and the need to understand associated risks before shipping.
                  </div>
                  <div className="text-gray-700 mt-1">
                    18th July 2023 5:34pm
                  </div>
                </div>
              </div>

              

              <div className="mx-auto py-3 flex justify-start items-center  border-b-[1px] border-gray-400">
                <div className="mx-1 w-2 h-2 bg-green-800 rounded-full">
                </div>
                <div className="mx-2 text-[10px] w-fit flex-wrap flex font-normal leading-[13px]">
                  <div className="font-semibold text-[12px] mb-1">
                    Reset Password
                  </div>
                  <div>
                  If you have any questions or need assistance, our dedicated customer support team is here to help. 
                  </div>
                  <div className="text-gray-700 mt-1">
                    3rd August 2023 10:41pm
                  </div>
                </div>
              </div>

              <div className="mx-auto py-3 flex justify-start items-center ">
                <div className="mx-1 w-2 h-2 bg-green-800 rounded-full">
                </div>
                <div className="mx-2 text-[10px] w-fit flex-wrap flex font-normal leading-[13px]">
                  <div className="font-semibold text-[12px] mb-1">
                    Upgrade Your Account
                  </div>
                  <div>
                  We want to inform you that our Lagos office will be closed on Monday, 5/29/2023 to commemorate the inauguration of the elected President. 
                  </div>
                  <div className="text-gray-700 mt-1">
                    20th August 2023 2:30pm
                  </div>
                </div>
              </div>

              
            </div>
            <div className="text-slate-900 py-1 border-t-[1px] border-gray-400">
              <div className="mx-2 py-0 flex justify-center items-center">
                
                <div className="mx-2 text-[14px] w-fit flex-wrap flex font-normal">
                  View All Notifications
                </div>
              </div>
            </div>

            
          </div>
        )}

        {subHeading === true && (
          <div className="rounded-lg absolute top-10 right-2 max-w-[15rem] bg-white shadow-2xl border-[1px] z-30">
            <div className="text-start text-slate-7900 py-2 border-b-[1px] border-gray-400">
              <div className="mx-2 text-[10px] w-fit flex-wrap flex">
                Folajimi Henry
              </div>
              <div className="mx-2 text-[10px] w-fit flex-wrap flex">
                folajimishodipo1@gmail.com
              </div>
            </div>

            <div className="py-3">
              <div className="mx-2 py-0 flex justify-start items-center">
                <div className="text-lg text-gray-700">
                  <HiOutlineUser />
                </div>
                <div className="mx-2 text-[14px] w-fit flex-wrap flex font-normal">
                  Account Settings
                </div>
              </div>

              <div className="mx-2 py-0 flex justify-start items-center">
                <div className="text-lg text-gray-700">
                  <HiOutlineCog />
                </div>
                <div className="mx-2 text-[14px] w-fit flex-wrap flex font-normal">
                  Settings
                </div>
              </div>
            </div>

            <div className="text-slate-900 py-1 border-t-[1px] border-gray-400">
              <div className="mx-2 py-0 flex justify-center items-center">
                <div className="text-lg text-gray-700">
                  <FiLogOut />
                </div>
                <div className="mx-2 text-[14px] w-fit flex-wrap flex font-normal">
                  Logout
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MinimalLayout;
