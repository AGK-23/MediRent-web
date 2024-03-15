

import Slider from './Slider/Slider';
import { userData } from '../../../data/Mylinks';
import { singlePostData } from '../../../data/Mylinks';
// import singlePostData from './singlePostData';

import { FaLocationDot } from "react-icons/fa6";
import { FaBed, FaBath, FaBookmark } from "react-icons/fa6";

import Map from '../AllListing/Map';

function SinglePage() {
    return (
        <div className="flex h-full mt-10">
            <div className="flex h-full">
                <div className="px-8">
                    <div>
                        <Slider images={singlePostData.images} />
                    </div>

                    <div className="mt-10  py-10">
                        <div className="flex justify-between sm:flex-col sm:gap-4">
                            <div className="flex flex-col gap-4">
                                <h1 className="md:text-xl xs:text-md font-semibold text-gray-700 transition-all duration-400 hover:text-black mt-4">{singlePostData.title}</h1>
                                <div className="flex items-center gap-1 text-gray-600 text-sm">
                                    {/* <img src="/pin.png" alt="" className="w-4 h-4" /> */}
                                    <div className="text-xl text-primary">
                                        <FaLocationDot />
                                    </div>
                                    <span className='ml-2'>{singlePostData.address}</span>
                                </div>
                                {/* <div className=" py-1 px-3 rounded-md bg-yellow-200">
                                &#36; {singlePostData.price}
                                </div> */}
                                <span className="md:text-xl xs:text-lg  text-third ">&#36; {singlePostData.price}</span>
                            </div>
                            {/* <div className="user flex flex-col items-center justify-center gap-4 p-8 rounded-md bg-yellow-200 font-semibold sm:p-4">
                                <img src={userData.img} alt="" className="w-12 h-12 rounded-full" />
                                <span>{userData.name}</span>
                            </div> */}
                        </div>
                        <div className="bottom mt-8 text-gray-700">{singlePostData.description}</div>
                    </div>
                    {/* <div>Hello dear </div> */}
                </div>
            </div>
            <div className="features flex-2 bg-pink-100 h-full overflow-y-scroll hidden">
                <div className="wrapper p-8 md:p-20 flex flex-col gap-20">
                    <p className="title font-bold text-lg md:text-xl">General</p>
                    <div className="listVertical bg-white rounded-lg p-4">
                        <div className="feature flex items-center gap-4">
                            <img src="/utility.png" alt="" className="w-6 h-6" />
                            <div className="featureText">
                                <span className="font-semibold">Utilities</span>
                                <p>Renter is responsible</p>
                            </div>
                        </div>
                        <div className="feature flex items-center gap-4">
                            <img src="/pet.png" alt="" className="w-6 h-6" />
                            <div className="featureText">
                                <span className="font-semibold">Pet Policy</span>
                                <p>Pets Allowed</p>
                            </div>
                        </div>
                        <div className="feature flex items-center gap-4">
                            <img src="/fee.png" alt="" className="w-6 h-6" />
                            <div className="featureText">
                                <span className="font-semibold">Property Fees</span>
                                <p>Must have 3x the rent in total household income</p>
                            </div>
                        </div>
                    </div>
                    <p className="title font-bold text-lg md:text-xl">Sizes</p>
                    <div className="sizes flex justify-between">
                        <div className="size bg-white p-4 rounded-lg flex items-center gap-4">
                            <img src="/size.png" alt="" className="w-6 h-6" />
                            <span>80 sqft</span>
                        </div>
                        <div className="size bg-white p-4 rounded-lg flex items-center gap-4">
                            <img src="/bed.png" alt="" className="w-6 h-6" />
                            <span>2 beds</span>
                        </div>
                        <div className="size bg-white p-4 rounded-lg flex items-center gap-4">
                            <img src="/bath.png" alt="" className="w-6 h-6" />
                            <span>1 bathroom</span>
                        </div>
                    </div>
                    <p className="title font-bold text-lg md:text-xl">Nearby Places</p>
                    <div className="listHorizontal bg-white rounded-lg p-4 flex justify-between">
                        <div className="feature flex items-center gap-4">
                            <img src="/school.png" alt="" className="w-6 h-6" />
                            <div className="featureText">
                                <span>School</span>
                                <p>250m away</p>
                            </div>
                        </div>
                        <div className="feature flex items-center gap-4">
                            <img src="/pet.png" alt="" className="w-6 h-6" />
                            <div className="featureText">
                                <span>Bus Stop</span>
                                <p>100m away</p>
                            </div>
                        </div>
                        <div className="feature flex items-center gap-4">
                            <img src="/fee.png" alt="" className="w-6 h-6" />
                            <div className="featureText">
                                <span>Restaurant</span>
                                <p>200m away</p>
                            </div>
                        </div>
                    </div>
                    <p className="title font-bold text-lg md:text-xl">Location</p>
                    <div className="mapContainer w-full h-80"></div>
                    <div className="buttons flex justify-between">
                        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-yellow-400 rounded-md cursor-pointer">
                            <img src="/chat.png" alt="" className="w-4 h-4" />
                            Send a Message
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-yellow-400 rounded-md cursor-pointer">
                            <img src="/save.png" alt="" className="w-4 h-4" />
                            Save the Place
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SinglePage;
