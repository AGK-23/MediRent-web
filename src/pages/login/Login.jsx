// import React from "react";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";


// import axios from "axios";
import { toast } from "react-toastify";
import './login.css';
import { useNavigate } from "react-router-dom";
import Spinner from "../../assets/svg/Spinner.svg"

// import { encryptAes, deCryptedData } from "../../components/EndPoints/Encrypted";

import { axiosPrivate } from "../../api/axios";
import PhotoLogin from "../../assets/svg/photo-tenants.svg";
// import Google from "../../assets/svg/google.svg"
import CustomInputs from "../../components/Custom-components/CustomInputs";
// import Line from "../../assets/svg/line.svg";

// import { GoogleLogin, GoogleLogout } from '@react-oauth/google';
// import axios from 'axios';


import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';



const Login = () => {
    const navigate = useNavigate();
    // const emailInput = useRef();
    // const passwordInput = useRef();

    const [isLoading, setIsLoading] = useState(false);

    const [userGoogle, setUserGoogle] = useState(null);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [formDataGoogle, setFormDataGoogle] = useState({
        // firstName: '',
        // lastName: '',
        // email: '',

        aud: "",
        azp: "",
        email: "",
        email_verified: false,
        exp: null,
        family_name: "",
        given_name: "",
        iat: null,
        iss: "",
        jti: "",
        name: "",
        nbf: null,
        picture: "",
        sub: "",

    });

    var {
        email,
        // password,
    } = formData;

    // const handleInputUser = (e) => setFormData(
    //     {
    //         ...formData,
    //         [e.target.name]: e.target.value
    //     }
    // );

    const handlePasswordChange = (value) => {
        // console.log("object", value);
        setFormData({ ...formData, password: value })
    }

    const [isToggle, setIsToggle] = useState(true);
    const changeToggle = () => setIsToggle(!isToggle);

    const handleLoginUser = async (e) => {
        e.preventDefault();

        try {
            setIsLoading(true)


            console.log("first email...", formData);

            const response = await axiosPrivate.post("/account/signin", formData);

            console.log("response in the code..", response)

            setIsLoading(false)

            console.log("tenant account..", response, "Loading..", isLoading);

            localStorage.setItem("token", JSON.stringify(response?.data));

            localStorage.setItem("accessToken", JSON.stringify(response.data?.Data?.AccessToken));

            // Retrieve the stringified object from local storage
            const storedToken = localStorage.getItem('token');


            // Parse the stringified object back to its original form
            const userDetails = JSON.parse(storedToken);

            console.log("account item..", storedToken, userDetails);



            if (response.data.success === true) {
                toast.success("Account Login Successfully");
            }

            if (userDetails?.Data?.AccountType === "Tenant") {
                navigate('/admin/renter/tenant')
            }

            if (userDetails?.Data?.AccountType === "Landlord") {
                navigate('/admin/dashboard/landlord')
            }

            // navigate('/success/tenant/1')

            return response.data;
        } catch (error) {
            const message =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();
            toast.error(message);
            setIsLoading(false)

            console.log("user profile..", message, error);
        }
    };

    // const [formDataGoogle, setFormDataGoogle] = useState({});

const handleGoogleLogin = (credentialResponse) => {
  // Decode the JWT token to get the user's profile information
  const userProfile = JSON.parse(atob(credentialResponse.credential.split('.')[1]));

  console.log("set google..", userProfile);

  setUserGoogle(userProfile);

  // Update formDataGoogle state
  setFormDataGoogle({
    aud: userProfile.aud,
    azp: userProfile.azp,
    email: userProfile.email,
    email_verified: userProfile.email_verified,
    exp: userProfile.exp,
    family_name: userProfile.family_name,
    given_name: userProfile.given_name,
    iat: userProfile.iat,
    iss: userProfile.iss,
    jti: userProfile.jti,
    name: userProfile.name,
    nbf: userProfile.nbf,
    picture: userProfile.picture,
    sub: userProfile.sub,
  });
};

// Use useEffect to make the API call when userGoogle changes
useEffect(() => {
  if (userGoogle) {
    console.log("correct", userGoogle);

    const makeApiCall = async () => {
      try {
        const idToken = JSON.stringify(formDataGoogle);
        const finalData = { idToken };
        const jsonformat = { idToken };

        console.log("object", idToken, finalData, "the thing", jsonformat, userGoogle);

        const response = await axiosPrivate.post("/account/signin-google", formDataGoogle);
        console.log("API response:", response.data, finalData);

        console.log("response in the code..", response);

        setIsLoading(false);

        localStorage.setItem("token", JSON.stringify(response?.data));
        localStorage.setItem("accessToken", JSON.stringify(response.data?.Data?.AccessToken));

        // Retrieve the stringified object from local storage
        const storedToken = localStorage.getItem('token');
        const userDetails = JSON.parse(storedToken);

        console.log("account item..", storedToken, userDetails);

        if (response.data.success === true) {
          toast.success("Account Login Successfully");
        }

        if (userDetails?.Data?.AccountType === "Tenant") {
          navigate('/admin/renter/tenant');
        }

        if (userDetails?.Data?.AccountType === "Landlord") {
          navigate('/admin/dashboard/landlord');
        }
      } catch (error) {
        console.error("API error:", error);
        toast.error(error.message);
      }
    };

    makeApiCall();
  }
}, [userGoogle, formDataGoogle, navigate]);





    return (
        <div className="py-0 md:mt-16 xs:mt-[4rem] bg-white grid md:grid-cols-5 xs:grid-cols-1">
            {/* <div className="flex font-medium justify-between max-w-screen-xl mx-auto">
                <div
                    className="bg-white w-full h-screen bg-HomeImage bg-cover
                        bg-center flex justify-center lg:h-[50vh] md:h-[70vh] sm:h-[80vh] xs:h-[70vh]"
                >
                    <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-white text-4xl font-medium text-center">LOGIN</p>
                    </div>
                </div>
            </div> */}

            <div className="md:col-span-2 xs:col bg-[#FCD3CD] md:flex xs:hidden flex-col ">

                <div className="my-20 px-5">
                    <div className="text-[#0E0C3D] font-semibold text-[24px] mb-5">SignIn to Your Account</div>
                    <div className="text-black font-normal text-[16px]">Sign In to discover a variety of verified properties tailored for healthcare professionals. Provide your details below to start your journey towards finding a comfortable and convenient home that meets your unique needs.</div>
                </div>

                <div className="px-10">
                    <div>
                        <img alt="" src={PhotoLogin} className="text-[1px] text-white w-full h-full" />
                    </div>
                </div>

            </div>


            <div className=" md:col-span-3 xs:col bg-white  md:mt-10 xs:mt-10 flex-col w-full items-center relative z-10 flex font-medium justify-between max-w-screen-xl mx-auto lg:px-40 md:px-20 xs:px-0">
                <div className="flex items-center justify-center lg:w-full md:w-full">
                    <div className="w-full justify-center items-center flex flex-col p-0 max-w-4xl px-2">

                        <div className="w-full flex-1 mt-0">
                            {/* <div className="my-10 text-center">
                                <div className="text-2xl text-black font-normal text-center">
                                    Log in to your <span className="font-bold">account</span>
                                </div>
                            </div> */}
                            <div className="mt-0 text-start">
                                <h1 className="md:text-[24px] xs:text-[20px] text-start text-black font-semibold">
                                    Sign in to your account
                                </h1>

                                <div className="mt-1 font-normal">
                                    <p className="text-[#717171] text-start text-[12px]">
                                        To get started, fill in your information or log in with google
                                    </p>
                                </div>
                                {/* <div className="text-start my-6 font-semibold md:text-[16px] xs:text-[13px]">Let’s start with your plan and details</div> */}
                            </div>

                            <div className="">
                                <div className="">


                                    <div className="px-0 mt-0 cursor-pointer">
                                        {/* <div className=" px-2 py-2 w-full bg-gray-100 flex justify-center items-center">

                                            <div className="mr-3">
                                                <img alt=""  src={Google} width={16} height={16} className="text-[1px] text-white" />
                                            </div>
                                            <div className="text-[15px]">Sign In with Google</div>
                                        </div> */}
                                        <GoogleOAuthProvider clientId="1061797876618-qshcq6n3nd057kv6586f859g8mj5cp6a.apps.googleusercontent.com">

                                            <button className="px-0 mt-10 cursor-pointer w-full " >
                                                <div className=" px-2 py-2 w-full bg-gray-100 flex justify-center items-center">
                                                    {/* onClick={() => setSignInState(2)} */}

                                                    {/* <div className="mr-3">
                                                                <img alt="" src={Google} width={16} height={16} className="text-[1px] text-white" />
                                                            </div>
                                                            <div className="text-[15px]">Sign up with Google</div> */}

                                                    {/* <GoogleLogin
                                                                onSuccess={handleGoogleLogin}
                                                                onError={(err) => console.error('Google login error:', err)}
                                                            /> */}
                                                    <GoogleLogin
                                                        className="border-none hidden"
                                                        onSuccess={handleGoogleLogin}
                                                        onError={(err) => console.error('Google sign-in error:', err)}
                                                    />
                                                </div>
                                            </button>
                                        </GoogleOAuthProvider>
                                    </div>

                                    <div className='flex justify-center items-center h-[1px] my-10 w-full bg-[#d5d1d1] text-center font-[500] '>
                                        <span className='bg-white px-5 py-5 text-black'>Or</span>
                                    </div>

                                    <div className="flex md:flex-col xs:flex-col gap-5 my-5">
                                        <div className={`form-group flex w-[100%] text-[1rem] my-0`}>
                                            <CustomInputs
                                                id="email"
                                                type='email'
                                                required
                                                // setValue={setFormData}
                                                value={email}
                                                showRequirement={true}
                                                onChange={(value) => setFormData(prevFormData => ({
                                                    ...prevFormData,
                                                    email: value
                                                }))}
                                                label={'Email Adddress'}
                                                className='px-0 mb-[5px] md:w-full xs:w-full text-[16px]'
                                            />
                                        </div>
                                        <div className={`form-group flex w-[100%] text-[1rem] my-0`}>
                                            <CustomInputs
                                                changeToggle={changeToggle}
                                                showToggle={true}
                                                isToggle={isToggle}
                                                id='password'
                                                type={`${isToggle ? 'text' : 'password'}`}
                                                label='Password'
                                                className='mb-[0px]'
                                                onChange={handlePasswordChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex justify-between border-b border-gray-600 pb-5">
                                        <div className="flex justify-end z-10 relative mt-4 ">
                                            <button
                                                onClick={handleLoginUser}
                                                className="flex justify-end items-center z-10 relative bg-[#F97262] text-white md:text-sm rounded-full md:py-3 md:px-12 xs:text-[15px] xs:py-1 xs:px-8"
                                                disabled={isLoading} // Disable the button when isLoading is true
                                            >
                                                {isLoading ? ( // Display spinner if userLoading is true
                                                    <div className="flex items-center px-6">
                                                        <div>
                                                            <img alt="" src={Spinner} className="text-[1px] text-white" />

                                                        </div>

                                                    </div>
                                                ) : (
                                                    <span className="">Go</span> // Show the "Submit" text when isLoading is false
                                                )}
                                            </button>
                                        </div>




                                        <div className="flex justify-end z-10 relative mt-4 ">
                                            <Link
                                                to="/auth/forgotpassword"
                                                className="flex justify-end z-10 relative bg-white border-[1px] border-gray-400 text-gray-400 md:text-sm rounded-full md:py-3 md:px-8 xs:text-[15px] xs:py-1 xs:px-8"
                                            >
                                                <span className="">Lost Password?</span>
                                            </Link>
                                        </div>

                                    </div>


                                    <div className="flex justify-between pb-10 gap-5">
                                        <div className="flex justify-end z-10 relative mt-4 ">
                                            <Link
                                                to="/auth/housing-subscription"
                                                className="flex justify-end items-center z-10 relative bg-third text-white md:text-sm rounded-full md:py-3 md:px-12 xs:text-[12px] xs:py-2 xs:px-5"
                                            >
                                                <span className="">Landlord account</span>
                                            </Link>
                                        </div>

                                        <div className="flex justify-end z-10 relative mt-4 ">
                                            <Link
                                                to="/auth/registration-page"
                                                className="flex justify-end items-center z-10 relative bg-third text-white md:text-sm rounded-full md:py-3 md:px-12 xs:text-[12px] xs:py-2 xs:px-5"
                                            >
                                                <span className="">Tenant account</span>
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
