import React from "react";
import axios from "axios";
import { useState, useRef, useEffect } from "react";
// import waitinRoom from "../../assets/images/waitinRoom.jpg";
import { Link } from "react-router-dom";
import { IoLogInOutline } from "react-icons/io5";
import './login.css'

const Login = () => {
    const emailInput = useRef();
    const passwordInput = useRef();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    var {
        email,
        password,  
    } = formData;

    const handleInputUser = (e) => setFormData(
        {
          ...formData,
          [e.target.name]: e.target.value
        }
    );






    const [isToggle, setIsToggle] = useState(true);
    const changeToggle = () => setIsToggle(!isToggle);



    const handleLoginUser = async (e) => {
        e.preventDefault();


        // setCurrentFormKey(currentFormKey + 1);
    };

    const [error, setError] = useState("");
    const handleLogin = async () => {
        try {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/posts/1"
            );

            if (response.status === 200) {
                console.log("Login successful!", response.data);
                setError("");
            } else {
                console.error("Login failed.");
                setError("Invalid email or password.");
            }
        } catch (error) {
            console.error("Error during login:", error);
            setError("An error occurred. Please try again.");
        }
    };
    const handleForgotPassword = async () => {
        try {
            // Your "Forgot Password" logic here...
            if (!forgotPasswordEmail) {
                setForgotPasswordSuccess("Please enter your email.");
                return;
            }

            // Simulate a successful request for the example
            const response = await axios.post(
                "https://jsonplaceholder.typicode.com/posts",
                {
                    email: forgotPasswordEmail,
                }
            );

            if (response.status === 201) {
                console.log("Password reset email sent successfully.");
                setForgotPasswordSuccess("Password reset email sent successfully.");
            } else {
                console.error("Failed to send password reset email.");
                setForgotPasswordSuccess("Failed to send password reset email.");
            }
        } catch (error) {
            console.error("Error during password reset:", error);
            setForgotPasswordSuccess("An error occurred. Please try again.");
        }
    };

    return (
        <div className="py-0 mt-32 bg-white">
            <div className="flex font-medium justify-between max-w-screen-xl mx-auto">
                <div
                    className="bg-white w-full h-screen bg-HomeImage bg-cover
                        bg-center flex justify-center lg:h-[50vh] md:h-[70vh] sm:h-[80vh] xs:h-[70vh]"
                >
                    <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-white text-4xl font-medium text-center">LOGIN</p>
                    </div>
                </div>
            </div>


            <div className=" bg-[#f2f2f2] md:flex-1 flex-col w-full  items-center relative z-10 flex font-medium justify-between max-w-screen-xl mx-auto">
                <div className="flex items-center justify-center lg:w-full md:w-full">
                    <div className="w-full flex flex-col p-0 max-w-4xl px-2">

                        <div className="w-full flex-1 mt-4">


                            <div className="my-10 text-center">
                                <div className="text-2xl text-black font-normal text-center">
                                    Log in to your <span className="font-bold">account</span>
                                </div>
                            </div>

                            <div className="">
                                <div className="">
                                    <div className="relative ">
                                        <input
                                            id="email"
                                            className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                                            type="email"
                                            ref={emailInput}
                                            name="email"
                                            value={email}
                                            onChange={handleInputUser}
                                            placeholder=""
                                        />
                                        <label
                                            htmlFor="email"
                                            className="label absolute md:mt-2 xs:mt-0 ml-3 leading-tighter text-gray-600 text-base cursor-text bg-transparent"
                                        >
                                            E-mail
                                        </label>
                                    </div>
                                    <div className="group relative md:mt-10 xs:mt-5">
                                        <input
                                            id="password"
                                            className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                                            type={`${isToggle ? "password" : "text"}`}
                                            ref={passwordInput}
                                            name="password"
                                            value={password}
                                            onChange={handleInputUser}
                                            placeholder=""
                                        />
                                        <label
                                            htmlFor="email"
                                            className="label absolute md:mt-2 xs:mt-0 ml-3 leading-tighter text-gray-600 text-base cursor-text bg-transparent"
                                        >
                                            Password
                                        </label>

                                        <div
                                            className="flex mt-3 flex-col h-6 "
                                            onClick={changeToggle}
                                            style={{
                                                position: "absolute",
                                                width: "30px",
                                                right: "5px",
                                                bottom: "12px",
                                                lineHeight: "20px",
                                            }}
                                        >
                                            {isToggle ? (
                                                <div className="cursor-pointer">
                                                    <svg
                                                        aria-hidden="true"
                                                        focusable="false"
                                                        data-prefix="fas"
                                                        data-icon="eye-slash"
                                                        className="w-6 h-6 text-gray-600"
                                                        role="img"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 576 512"
                                                    >
                                                        <path
                                                            fill="currentColor"
                                                            d="M286.693 391.984l32.579 46.542A333.958 333.958 0 0 1 288 440C168.19 440 63.031 376.051 6.646 280.369a47.999 47.999 0 0 1 0-48.739c24.023-40.766 56.913-75.775 96.024-102.537l57.077 81.539C154.736 224.82 152 240.087 152 256c0 74.736 60.135 135.282 134.693 135.984zm282.661-111.615c-31.667 53.737-78.747 97.46-135.175 125.475l.011.015 41.47 59.2c7.6 10.86 4.96 25.82-5.9 33.42l-13.11 9.18c-10.86 7.6-25.82 4.96-33.42-5.9L100.34 46.94c-7.6-10.86-4.96-25.82 5.9-33.42l13.11-9.18c10.86-7.6 25.82-4.96 33.42 5.9l51.038 72.617C230.68 75.776 258.905 72 288 72c119.81 0 224.969 63.949 281.354 159.631a48.002 48.002 0 0 1 0 48.738zM424 256c0-75.174-60.838-136-136-136-17.939 0-35.056 3.473-50.729 9.772l19.299 27.058c25.869-8.171 55.044-6.163 80.4 7.41h-.03c-23.65 0-42.82 19.17-42.82 42.82 0 23.626 19.147 42.82 42.82 42.82 23.65 0 42.82-19.17 42.82-42.82v-.03c18.462 34.49 16.312 77.914-8.25 110.95v.01l19.314 27.061C411.496 321.2 424 290.074 424 256zM262.014 356.727l-77.53-110.757c-5.014 52.387 29.314 98.354 77.53 110.757z"
                                                        />
                                                    </svg>
                                                </div>
                                            ) : (
                                                <div
                                                    className="cursor-pointer"
                                                    style={{
                                                        position: "absolute",
                                                        width: "40px",
                                                        height: "40px",

                                                        lineHeight: "20px",
                                                    }}
                                                >
                                                    <svg
                                                        aria-hidden="true"
                                                        focusable="false"
                                                        data-prefix="fas"
                                                        data-icon="eye"
                                                        className="w-6 h-6 text-gray-600"
                                                        role="img"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 576 512"
                                                    >
                                                        <path
                                                            fill="currentColor"
                                                            d="M569.354 231.631C512.969 135.949 407.81 72 288 72 168.14 72 63.004 135.994 6.646 231.631a47.999 47.999 0 0 0 0 48.739C63.031 376.051 168.19 440 288 440c119.86 0 224.996-63.994 281.354-159.631a47.997 47.997 0 0 0 0-48.738zM288 392c-75.162 0-136-60.827-136-136 0-75.162 60.826-136 136-136 75.162 0 136 60.826 136 136 0 75.162-60.826 136-136 136zm104-136c0 57.438-46.562 104-104 104s-104-46.562-104-104c0-17.708 4.431-34.379 12.236-48.973l-.001.032c0 23.651 19.173 42.823 42.824 42.823s42.824-19.173 42.824-42.823c0-23.651-19.173-42.824-42.824-42.824l-.032.001C253.621 156.431 270.292 152 288 152c57.438 0 104 46.562 104 104z"
                                                        />
                                                    </svg>

                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex justify-between border-b border-gray-600 pb-10">
                                        <div className="flex justify-end z-10 relative mt-4 ">
                                            <Link
                                                to="/"
                                                className="flex justify-end z-10 relative bg-third text-white md:text-sm rounded-lg md:py-3 md:px-10 xs:text-[10px] xs:py-2 xs:px-5"
                                            >
                                                <span className="">Go</span>
                                            </Link>
                                        </div>




                                        <div className="flex justify-end z-10 relative mt-4 ">
                                            <Link
                                                to="/auth/forgotpassword"
                                                className="flex justify-end z-10 relative bg-rose-500 text-white md:text-sm rounded-lg md:py-3 md:px-10 xs:text-[10px] xs:py-2 xs:px-5"
                                            >
                                                <span className="">Lost Password?</span>
                                            </Link>
                                        </div>

                                    </div>


                                    <div className="flex justify-between pb-10 gap-5">
                                        <div className="flex justify-end z-10 relative mt-4 ">
                                            <Link
                                                to="/auth/housing-subscription"
                                                className="flex justify-end z-10 relative bg-third text-white md:text-sm rounded-lg md:py-3 md:px-10 xs:text-[10px] xs:py-2 xs:px-4"
                                            >
                                                <span className="">Create a Landlord account</span>
                                            </Link>
                                        </div>

                                        <div className="flex justify-end z-10 relative mt-4 ">
                                            <Link
                                                to="/auth/registration-page"
                                                className="flex justify-end z-10 relative bg-third text-white md:text-sm rounded-lg md:py-3 md:px-10 xs:text-[10px] xs:py-2 xs:px-4"
                                            >
                                                <span className="">Create a Tenant account</span>
                                            </Link>
                                        </div>

                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;
