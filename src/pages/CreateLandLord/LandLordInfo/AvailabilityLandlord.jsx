/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useRef } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from "react-toastify";
import Spinner from "../../../assets/svg/Spinner.svg"



const AvailabilityLandlord = ({ active, setActive, selectedDates, setSelectedDates, formData, createListing, userLoading, setUserLoading, handleSubmitCreateListing }) => {

    const [propertyPictures, setPropertyPictures] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // const [selectedDates, setSelectedDates] = useState([]);

    const handleDateChange = (date) => {
        console.log("all the date..", date, "all value...", selectedDates)

        console.log("DATE ..", date[0] instanceof Date)

        if (date[0] instanceof Date && !selectedDates.some(selectedDate => selectedDate.toDateString() === date[0].toDateString())) {
            setSelectedDates([...selectedDates, date[0]]);
        }
    };

    const handleRemoveDate = (dateToRemove) => {
        const updatedDates = selectedDates.filter((date) => date.getTime() !== dateToRemove.getTime());
        setSelectedDates(updatedDates);
    };

    const handleCheckAvailable = () => {

        if (
            selectedDates.length === 0
        ) {
            toast.warning('Please fill in all required fields.');
            return;
        }
    };

    const handleFormSubmit = async () => {
        await handleSubmitCreateListing();
    };

    const onSavePostClicked = async () => {
        handleCheckAvailable()
        console.log("done");

        await handleFormSubmit()
        console.log("completed");
    }

    const handleProviderFive = () => {
        handleCheckAvailable()
        console.log("all the calendar..", selectedDates)

    };

    const renderPreviousForm = () => {
        setActive(active - 1);
    };

    const handleFileChange = (e) => {
        const files = e.target.files;
        // Handle the selected files here
        setPropertyPictures(files)
        console.log(files);
    };

    return (
        <div>
            <div className="my-0">
                <div className="mt-0 text-start">
                    <h1 className="md:text-[24px] xs:text-[20px] text-start text-black font-semibold">
                        Set Your Rental Schedule
                    </h1>

                    <div className="mt-1 font-normal">
                        <p className="text-[#717171] text-start text-[12px]">
                        Specify the availability dates and rental terms to ensure accurate bookings.
                        </p>
                    </div>
                </div>

                <div className="bg-[#C5D8E4] rounded-lg py-4 px-4 text-start text-[#0E0C3D] md:text-base xs:text-xs my-5">
                    Note : Keep this calendar up to date to increase your contacts. (click a month to block a full month)
                </div>

                <div className="my-10">
                    <div className="flex items-center my-3">
                        <div className=" border-[1px] border-gray-700 p-2 h-4 w-4 bg-white"></div>

                        <div className="ml-4 text-gray-700 w-full" >
                            Dates not Selected
                        </div>
                    </div>

                    <div className="flex items-center my-3">
                        <div className=" border-[1px] border-gray-700 p-2 h-4 w-4 bg-sky-700"></div>

                        <div className="ml-4 text-gray-700 w-full" >
                            Dates Selected
                        </div>
                    </div>

                </div>
                <div className="flex md:flex-row xs:flex-col w-full justify-between items-center  gap-10">
                    <DatePicker
                        // selected={null} // Pass null to show the calendar without pre-selected date
                        onChange={handleDateChange}
                        inline
                        selectsRange
                        startDate={selectedDates[0]}
                        endDate={selectedDates[selectedDates.length - 1]}
                        calendarClassName="custom-calendar"
                        dateFormat="MMMM d, yyyy"
                        placeholderText="Select dates"
                        shouldCloseOnSelect={false}

                        showYearDropdown
                        scrollableYearDropdown
                        yearDropdownItemNumber={15}

                        showMonthDropdown
                        dropdownMode="select"
                    />

                    {selectedDates.length > 0 && (
                        <div>
                            <h2>Available Dates:</h2>
                            <ul>
                                {selectedDates.map((date, index) => (
                                    <li key={index} className="my-8 flex justify-between items-center w-full ">
                                        <span className="w-full  whitespace-nowrap">{date?.toDateString()}</span>
                                        <span className="w-full ">
                                            <button className="rounded-lg text-white bg-rose-600 px-4 py-1 ml-10 text-sm" onClick={() => handleRemoveDate(date)}>Remove</button>

                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>





                <div className="flex justify-end pb-10 w-full gap-2">
                    {/* <div className="flex justify-end z-10 relative mt-4 ">
                        <button
                            onClick={renderPreviousForm}
                            className="flex justify-end z-10 relative bg-white border-[1px] border-gray-400 text-gray-400 md:text-sm rounded-full md:py-3 md:px-8 xs:text-[15px] xs:py-1 xs:px-8"
                        >
                            <span className="">Previous</span>
                        </button>
                    </div> */}
                    
                    <div className="flex justify-end z-10 relative mt-4  mr-3">
                        <button
                            onClick={onSavePostClicked}
                            className="flex justify-end items-center z-10 relative bg-[#F97262] text-white md:text-sm rounded-full md:py-3 md:px-12 xs:text-[15px] xs:py-1 xs:px-8"
                            disabled={userLoading} // Disable the button when userLoading is true
                        >
                            {userLoading ? ( // Display spinner if userLoading is true
                                <div className="flex items-center px-6">
                                    <div>
                                        <img alt="" src={Spinner} className="text-[1px] text-white" />
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24"><path fill="currentColor" d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" /></path></svg> */}
                                    </div>

                                </div>
                            ) : (
                                <span className="">Submit</span> // Show the "Submit" text when isLoading is false
                            )}
                        </button>

                    </div>
                </div>



            </div>
        </div>
    )
}

export default AvailabilityLandlord