/* eslint-disable react/prop-types */
// import React from 'react'
import { useState } from "react";
import { toast } from "react-toastify";
import Spinner from "../../../assets/svg/Spinner.svg";



const Photo = ({ active, setActive, avatars, setAvatars, fileList, setFileList, handleFilesUpload, imageLoading }) => {

    // const [avatars, setAvatars] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [text, setText] = useState("")
    // eslint-disable-next-line no-unused-vars
    const [indexCounter, setIndexCounter] = useState(0);
    // const [fileList, setFileList] = useState([])

    const handleFileInputChange = (e) => {
        const files = e.target.files;
        const maxPhotos = 5;
        const maxSize = 2 * 1024 * 1024; // 2MB in bytes

        if (files) {
            Array.from(files).forEach((file) => {
                // console.log(
                //     "all the photos in..", avatars.length, 
                //     "file in the bag..", maxPhotos, 
                //     "all the index..", indexCounter, 
                //     "files in the building..", files,
                //     "hello..", URL.createObjectURL(file),
                //     "football..", file

                // )

                if (avatars.length < maxPhotos) {
                    console.log("the thing..", avatars.length , maxPhotos);
                    if (file.size > maxSize) {
                        alert(`File ${file.name} is too large. Please select a file smaller than 2MB.`);
                        setText(`File ${file.name} is too large. Please select a file smaller than 2MB.`);
                    } else {
                        const newAvatar = URL.createObjectURL(file);
                        const newFileList = file;
                        setFileList((prevFileList) => [...prevFileList, newFileList]);
                        setAvatars((prevAvatars) => [...prevAvatars, newAvatar]);
                        setIndexCounter((prevCounter) => prevCounter + 1); // Increment indexCounter
                    }
                } else {
                    alert(`You can only upload a maximum of 5 photos.`);
                }
            });
        }
    };

    const handleCheckPhotos = async () => {
        if (
            avatars.length === 0  && 
            fileList.length === 0  
        ) {
            toast.warning('Please fill in all required fields.');
            return;
        }

        if (
            avatars.length < 5  
        ) {
            toast.warning('You have to upload 5 photos.');
            return;
        }
        // setActive(5)

        console.log("all the image details..", imageLoading)
        try {
            // Call handleRentUser function from props
            await handleFilesUpload(fileList);

            // housingLoading will be updated in the parent component after the request is completed
        } catch (error) {
            // Handle errors if needed
        }
        
    };

    const handleProviderFour = () => {
        handleCheckPhotos()
        console.log("all the avatars..", avatars, "all the files..", fileList);
        // setActive(5);
    };

    const renderPreviousForm = () => {
        setActive(active - 1);
    };

    return (
        <div>
            <div className="my-0">
                <div className="mt-0 text-start">
                    <h1 className="md:text-[24px] xs:text-[20px] text-start text-black font-semibold">
                        Showcase Your Space
                    </h1>

                    <div className="mt-1 font-normal">
                        <p className="text-[#717171] text-start text-[12px]">
                            Upload high-quality photos to give tenants a clear view of your property.
                        </p>
                    </div>
                </div>

                <div className="mt-10 text-start">
                    <h1 className="md:text-[20px] xs:text-[16px] text-start text-black font-semibold">
                        Photos
                    </h1>

                    <div className="mt-1 font-normal">
                        <p className="text-[#717171] text-start text-[12px]">
                            Your current package allows you to upload up to 5 pictures.
                        </p>
                    </div>
                </div>

                <div className="grid justify-between items-center py-2 md:grid-cols-1 xs:grid-cols-1 xs:gap-5 lg:gap-5">
                    <div className="">
                        <label htmlFor="avatar" className="block text-sm font-medium text-gray-700"></label>
                        <label
                            htmlFor="file-input"
                            className="border-[2px] border-dashed rounded-lg px-10 py-10 mt-8 flex justify-center items-center border-secondary"
                        >
                            <div className="flex flex-col">
                                <div className="my-4 text-lg text-black font-semibold text-center">Drag & Drop Files here</div>
                                <span className="px-0 py-2 text-white rounded-full bg-secondary cursor-pointer">
                                    <div className="text-center text-white md:text-[13px] xs:text-xs" >
                                        Select from folder
                                    </div>
                                </span>
                            </div>

                            <span className="">
                                <input
                                    type="file"
                                    name="avatar"
                                    id="file-input"
                                    accept=".jpg,.jpeg,.png"
                                    onChange={handleFileInputChange}
                                    className="sr-only"
                                    multiple
                                />
                            </span>
                        </label>
                    </div>

                    <div className="grid md:grid-cols-5 xs:grid-cols-1 gap-2">
                        {avatars.map((avatar, index) => (
                            <div key={index} className="flex items-center h-full bg-white rounded overflow-hidden p-2 border-dashed border-2  border-gray-300">
                                <div className="flex flex-row">
                                    <span className="inline-block h-full w-full rounded overflow-hidden p-2">
                                        <img
                                            src={avatar}
                                            alt={`avatar-${index}`}
                                            className="h-full w-full object-cover rounded"
                                        />
                                    </span>
                                </div>
                            </div>
                        ))}
                        {/* <div className='text-rose-500 text-md'>{text}</div> */}
                    </div>

                </div>


                <div className="flex justify-end pb-10 w-full  gap-2">
                    <div className="flex justify-end z-10 relative mt-4 ">
                        <button
                            onClick={renderPreviousForm}
                            className="flex justify-end z-10 relative bg-white border-[1px] border-gray-400 text-gray-400 md:text-sm rounded-full md:py-3 md:px-8 xs:text-[15px] xs:py-1 xs:px-8"
                        >
                            <span className="">Previous</span>
                        </button>
                    </div>
                    <div className="flex justify-end z-10 relative mt-4">
                        <button
                            onClick={handleProviderFour}
                            className="flex justify-end items-center z-10 relative bg-[#F97262] text-white md:text-sm rounded-full md:py-3 md:px-12 xs:text-[15px] xs:py-1 xs:px-8"
                            disabled={imageLoading} // Disable the button when userLoading is true
                        >
                            {imageLoading ? ( // Display spinner if userLoading is true
                                <div className="flex items-center px-6">
                                    <div>
                                        <img alt="" src={Spinner} className="text-[1px] text-white" />
                                    </div>

                                </div>
                            ) : (
                                <span className="">Next</span> // Show the "Submit" text when isLoading is false
                            )}
                        </button>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Photo