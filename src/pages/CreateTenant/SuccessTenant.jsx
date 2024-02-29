import React from 'react'
import Verified from "../../assets/images/verified-icon.gif"
import { useState } from "react";
import { Link } from "react-router-dom";

import { ToastContainer} from "react-toastify";

const SuccessTenant = () => {
  return (
    <div className="py-0 mt-48 flex font-medium items-center justify-center max-w-screen-md mx-auto">
            <ToastContainer/>
            <div className="flex flex-col mx-3">
                <div className="flex flex-col items-center p-4 mb-4 rounded-xl">
                    <h1 className="flex justify-center w-full">
                    {/* <img src="/images/logoPic.png" alt="Instagram" className="mt-2 w-6/12 mb-4" /> */}
                    </h1>

                    <h1 className="animate-bounce mb-6">
                        <img src={Verified} alt="approve" width="100px" height="100px" /> 
                    </h1>

                    <div className="flex justify-center items-center flex-col w-full  p-2 rounded ">
                        <div className="text-sm text-slate-900">
                            <div className="flex justify-center items-center p-3 font-bold md:text-lg xs:text-md">
                                Congratulations on Creating Your Tenant Account with Medirent!
                            </div>
                            
                            <div className="flex justify-start my-3">
                                We are thrilled to inform you that your tenant account with Medirent has been successfully created! 🎉
                            </div>

                            <div className="flex justify-start my-3">
                                Congratulations on taking this important step towards managing your rental experience with us. Your account will provide you with access to a range of features and services designed to make your tenancy as smooth and convenient as possible.
                            </div>

                            <div className="flex justify-start my-3">
                                Should you have any questions or need assistance navigating your account or any of our services, please do not hesitate to reach out to our customer support team. We are here to help you every step of the way.
                            </div>

                            <div className="flex justify-start my-3">
                                Thank you for choosing Medirent as your rental partner. We look forward to serving you and ensuring your stay is comfortable and enjoyable.
                            </div>

                            <div className="flex justify-start my-3">
                                Thank you for choosing our platform.
                            </div>

                            <div className="flex justify-start my-3">
                                Medirent Team
                            </div>

                        </div>
                        <Link to="/auth/login"   className="flex justify-center items-center z-10 relative bg-third text-white md:text-sm rounded-lg md:py-3 md:px-16 xs:text-[10px] xs:py-3 xs:px-10">
                            Log in into your account
                        </Link>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default SuccessTenant;