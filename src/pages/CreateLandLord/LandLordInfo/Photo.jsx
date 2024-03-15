import React from 'react'
import { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";
import Spinner from "../../../assets/svg/Spinner.svg";



const Photo = ({ active, setActive, avatars, setAvatars, fileList, setFileList, handleFilesUpload, imageLoading }) => {

    // const [avatars, setAvatars] = useState([]);
    const [text, setText] = useState("")
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
            <div className="my-10">
                <div className="flex flex-col">
                    <div className="text-center my-10 font-base md:text-3xl xs:text-xl"> PHOTOS</div>
                </div>

                <h1 className="md:text-base xs:text-sm text-center text-black font-mormal">
                    Your current package allows you to upload up to  <b className="font-bold">5 pictures.</b>
                </h1>

                <div className="grid justify-between items-center py-2 md:grid-cols-1 xs:grid-cols-1 xs:gap-5 lg:gap-5">
                    <div className="">
                        <label htmlFor="avatar" className="block text-sm font-medium text-gray-700"></label>
                        <label
                            htmlFor="file-input"
                            className="border-[2px] border-dashed px-10 py-10 mt-8 flex justify-center items-center border-third"
                        >
                            <div className="flex flex-col">
                                <div className="my-4 text-2xl text-black font-semibold text-center">Drag & Drop Files here</div>
                                <span className="px-5 py-3 bg-blue-900 text-white rounded-lg bg-third cursor-pointer">

                                    <div className="text-center text-white md:text-base xs:text-xs" >
                                        Open the file browser
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
                            <div key={index} className="flex items-center h-full bg-white rounded overflow-hidden p-2 border-dashed border-2 border-gray-300">
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


                <div className="flex justify-between pb-10">
                    <div className="flex justify-end z-10 relative mt-4  mr-3">
                        

                        <button
                            onClick={handleProviderFour}
                            className="flex justify-end items-center z-10 relative bg-third text-white md:text-sm rounded-lg md:py-3 md:px-16 xs:text-[15px] xs:py-3 xs:px-4"
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

export default Photo