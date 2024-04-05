/* eslint-disable no-unused-vars */
import { useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from "react-toastify";
// import axios from "axios";
import Spinner from "../../../assets/svg/Spinner.svg"



const AvailabilityLandlordDetails = ({ active, setActive, selectedDates, setSelectedDates, createListing, userLoading, setUserLoading, handleSubmitCreateListing }) => {

    // const navigate = useNavigate();
    const [propertyPictures, setPropertyPictures] = useState(null);

    // const [isLoading, setIsLoading] = useState(false);


    // const [selectedDates, setSelectedDates] = useState([]);

    const handleDateChange = (date) => {
        console.log("all the date..", date, "all value...", selectedDates)

        console.log("DATE ..", date[0] instanceof Date)

        // console.log("first...", selectedDates[0], date.getTime())
        // Check if the selected date already exists in the array
        // if (!selectedDates.find((selectedDate) => selectedDate.getTime() === date.getTime())) {
        //     setSelectedDates([...selectedDates, date]);
        // }

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
        // Any necessary logic before submitting the form

        // Call the function to submit the createListing form
        await handleSubmitCreateListing();
    };





    const onSavePostClicked = async () => {
        handleCheckAvailable()

        

        console.log("done");

        await handleFormSubmit()
        // console.log("completed");
    }




    const [linkUrl, setLinkUrl] = useState("");
    const linkUrlInput = useRef();

    const handleLinkUser = (e) => setLinkUrl(
        setLinkUrl(e.target.value)
    );

    const handleProviderFive = () => {
        handleCheckAvailable()
        console.log("all the calendar..", selectedDates)

        // setActive(1);
        // navigate('/success/landlord/1')

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
            <div className="my-10">
                <div className="flex flex-col">
                    <div className="text-center my-10 font-base md:text-3xl xs:text-xl"> AVAILABILITY FORM</div>
                </div>

                <div className="bg-[#fff9e2] py-4 px-4 text-start text-[#c29c4b] md:text-base xs:text-xs my-5">
                    Hint: keep this calendar up to date to increase your contacts. (click a month to block a full month)
                </div>

                <div className="text-black py-4 px-4 text-start  md:text-base xs:text-xs my-2">
                    You can synchronize the calendar of availability of your ad with one from another website (Airbnb, Home Away, Google Calendar, etc.).
                </div>

                <div className="text-black py-4 px-4 text-start  md:text-base xs:text-xs my-2">
                    To do so, you must copy/paste the link of the calendar below. Once done, your calendar will be updated every night.
                </div>

                <div className="relative my-10">
                    <input
                        id="linkUrl"
                        className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                        type="text"
                        ref={linkUrlInput}
                        name="linkUrl"
                        value={linkUrl}
                        onChange={handleLinkUser}
                        placeholder="Link with external calendar (URL)"
                    />

                </div>

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

                {/* <div className="mt-700">
                    <Calendar />

                </div> */}
                <div className="flex w-full justify-center items-center flex-col gap-10">
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





                <div className="flex justify-between pb-10">
                    <div className="flex justify-end z-10 relative mt-4  mr-3">
                        {/* <button
                            // onClick={handleProviderFive}
                            onClick={onSavePostClicked}
                            className="flex justify-end items-center z-10 relative bg-third text-white md:text-sm rounded-lg md:py-3 md:px-16 xs:text-[15px] xs:py-3 xs:px-6"
                        >
                            <span className="">Submit</span>
                        </button> */}

                        <button
                            onClick={onSavePostClicked}
                            className="flex justify-end items-center z-10 relative bg-third text-white md:text-sm rounded-lg md:py-3 md:px-16 xs:text-[15px] xs:py-3 xs:px-6"
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
                    <div className="flex justify-end z-10 relative mt-4 ">
                        <button
                            onClick={renderPreviousForm}
                            className="flex justify-end z-10 relative bg-rose-500 text-white md:text-sm rounded-lg md:py-3 md:px-16 xs:text-[15px] xs:py-3 xs:px-10"
                        >
                            <span className="">Previous</span>
                        </button>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default AvailabilityLandlordDetails