/* eslint-disable react/prop-types */


// import { Link } from 'react-router-dom';


import Cancel from "../../assets/svg/cancel.svg"
import { useState } from 'react';

import CustomInputs from "../Custom-components/CustomInputs";

const AvailabilityModal = ({ availability, onClose }) => {

    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        phone: "",
        address: `I am interested in ${availability.location}`
    });
    

    let { fullname, email, phone, address } = formData;

    return (
        <div className="fixed z-30 inset-0 flex items-center justify-center bg-opacity-40 bg-[rgba(9,9,23,0.319)] overflow-hidden backdrop-blur-[10px]">
            <div className="max-h-[95vh] overflow-y-auto relative flex items-center justify-center w-full px-2 my-6 mx-0 ">
                <div className="md:w-fit xs:w-full bg-white rounded-lg shadow-none p-[1rem] max-w-4xl">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-[500]">Check Availability</h3>

                        <button
                            className=" ml-auto border-0 float-right leading-none font-semibold outline-none focus:outline-none rounded-full p-2 hover:bg-gray-200"
                            onClick={onClose}
                        >
                            <span className="text-2xl text-primary block outline-none focus:outline-none hover:text-slate-800">
                                <div className=' w-full flex justify-end '>
                                    <img
                                        alt=""
                                        src={Cancel}
                                        className="cursor-pointer w-6 h-6 "
                                    />
                                </div>
                            </span>
                        </button>
                    </div>

                    <div className="flex justify-between flex-col gap-4">
                        <div className='flex w-full flex-col justify-between gap-3'>
                            <div className={`form-group flex w-[100%] text-[1rem]`}>
                                <CustomInputs
                                    id="fullname"
                                    type='text'
                                    required
                                    setValue={setFormData}
                                    value={fullname}

                                    label={'FullName'}
                                    className='px-0 mb-[14px] md:w-[400px] xs:w-full text-[16px]'
                                />
                            </div>
                            <div className={`form-group flex w-[100%] text-[1rem]`}>

                                <CustomInputs
                                    id="email"
                                    type='email'
                                    required
                                    setValue={setFormData}
                                    value={email}

                                    label={'Email Address'}
                                    className='px-0 mb-[14px] md:w-[400px] xs:w-full text-[16px]'
                                />
                            </div>

                            <div className={`form-group flex w-[100%] text-[1rem]`}>

                                <CustomInputs
                                    id="phone"
                                    type='text'
                                    required
                                    setValue={setFormData}
                                    value={phone}

                                    label={'Phone Number'}
                                    className='px-0 mb-[14px] md:w-[400px] xs:w-full text-[16px]'
                                />
                            </div>

                            <div className={`form-group flex w-[100%] text-[1rem]`}>

                                <CustomInputs
                                    id="address"
                                    type='text'
                                    required
                                    inputType="textarea"
                                    setValue={setFormData}
                                    value={address}
                                    disabled={true}

                                    label={''}
                                    className='px-0 mb-[14px] md:w-[400px] xs:w-full text-[16px] !h-[100px] text-gray-500'
                                />
                            </div>

                        </div>

                    </div>

                    <button className="mt-5 w-full rounded-lg bg-primary px-10 py-[15px] text-center text-white opacity-70">Check Availability</button>
                </div>
            </div>
        </div>
    );
};

export default AvailabilityModal;



