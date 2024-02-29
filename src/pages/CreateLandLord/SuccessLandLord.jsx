import React from 'react'
import Verified from "../../assets/images/verified-icon.gif"
import { useState } from "react";
import { Link } from "react-router-dom";

import { ToastContainer} from "react-toastify";

const SuccessLandLord = () => {
  return (
    <div className="py-0 mt-48 flex font-medium items-center justify-center max-w-screen-md mx-auto ">
            <ToastContainer/>
            <div className="flex flex-col mx-3">
                <div className="flex flex-col items-center  p-4  mb-4 rounded-xl">
                    <h1 className="flex justify-center w-full">
                    {/* <img src="/images/logoPic.png" alt="Instagram" className="mt-2 w-6/12 mb-4" /> */}
                    </h1>

                    <h1 className="animate-bounce mb-6">
                        <img src={Verified} alt="approve" width="100px" height="100px" /> 
                    </h1>

                    <div className="flex justify-center items-center flex-col w-full  p-2 rounded ">
                        <div className="text-sm text-slate-900">
                            <div className="flex justify-center items-center p-3 font-bold md:text-lg xs:text-md">  Congratulations on Creating Your Landlord Account with Medirent!</div>
                            
                            <div className="flex justify-start my-3">
                            I am thrilled to congratulate you on successfully creating your landlord account with Medirent! 🎉
                            </div>

                            <div className="flex justify-start my-3">
                            By joining our platform as a landlord, you have taken the first step towards managing your properties efficiently and connecting with potential tenants seamlessly. We are excited to have you on board and look forward to supporting you in your journey as a landlord with Medirent
                            </div>

                            <div className="flex justify-start my-3">
                            Should you have any questions or need assistance navigating our platform, please do not hesitate to reach out to our support team. We are here to help you every step of the way.
                            </div>
                            <div className="flex justify-start my-3">
                            Once again, congratulations on this significant milestone, and we wish you great success in renting out your properties through Medirent!
                            </div>
                            

                            <div className="flex justify-start my-3">
                                Thank you for choosing our platform.
                            </div>

                            <div className="flex justify-start my-3">
                            Medirent Team
                            </div>


                            {/* <div class="rounded-full h-8 w-8 flex justify-center items-center uppercase text-white font-medium text-xl" style={{backgroundColor: "mediumturquoise"}}>{username[0]}</div> */}
                        </div>
                        <Link to="/auth/login"   className="flex justify-center items-center z-10 relative bg-third text-white md:text-sm rounded-lg md:py-3 md:px-16 xs:text-[10px] xs:py-3 xs:px-10">
                            Log in into your account
                        </Link>

                        {/* <Link to={`/login/${userEmail}`} style={{ color: "rgb(37 99 235)" }} className=" font-medium text-blue-600">
                            Proceed
                        </Link> */}
                        {/* <div className="d-none">{{setUserName}}</div> */}
                    </div>
                </div>
            </div>
        </div>
  )
}

export default SuccessLandLord