import React from 'react'
import { Link } from 'react-router-dom';
import Card14 from "../../assets/card_14.jpg";
import Card13 from "../../assets/card_13.jpeg";







const HomeBlog = () => {
    return (
        <div className='mt-4 '>
            <div>
                <div className=" flex font-medium justify-between max-w-screen-xl mx-auto ">

                    <div className=" w-full flex justify-center ">
                        <div className="mt-28 relative z-0 bg-transparent">
                            <div className="mx-auto">
                                <div className="flex justify-center items-center flex-col">

                                    <div>
                                        <div className='relative px-2'>
                                            <Link className="text-1.302vw absolute right-4 text-[#0c527b] font-serif transition-colors duration-150 top-6" href="/">See all →</Link>
                                            <h2 className=" font-medium text-black md:text-3xl xs:text-xl text-center  mb-10"><strong>Blog</strong></h2>
                                        </div>
                                        <div className=' grid md:grid-cols-3 xs:grid-cols-1 gap-5 px-4 md:pb-20 xs:pb-4 border-b-[1px] border-gray-500'>
                                            <div className="popular">
                                                <Link href="/">
                                                    <div className=' text-[#0c527b] hover:text-black '>
                                                        <img 
                                                            className="hover:grayscale md:w-[80%] xs:w-[100%]" 
                                                            src={Card13} 
                                                            alt="Announcing partnership with"
                                                        />
                                                        <div className=' w-full text-start py-7'>
                                                            <div className="text-md"><strong>Announcing partnership with</strong></div>
                                                            <div className="text-md"><strong>NOVA SCOTIA, IPOANS and</strong></div>
                                                            <div className="text-md"><strong>MediRent.com</strong></div>
                                                            <div className="text-sm font-[poppins]"><strong>Read more</strong></div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="popular">
                                                <Link href="/">
                                                    <div className=' text-[#0c527b] hover:text-black '>
                                                        <img 
                                                            className="hover:grayscale md:w-[80%] xs:w-[100%]" 
                                                            src={Card14} 
                                                            alt="University of Toronto"
                                                        />
                                                        <div className=' w-full text-start py-7'>
                                                            <div className="text-md"><strong>Housing For Healthcare</strong></div>
                                                            <div className="text-md"><strong>partnerships</strong></div>
                                                            <div className="text-sm font-[poppins]"><strong>Read more</strong></div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="popular">
                                                <Link href="/">
                                                    <div className=' text-[#0c527b] hover:text-black text-start h-full '>
                                                        <div className='w-full  py-7 px-1 pt-20 text-start'>
                                                            <span className="text-lg"><strong>What is MediRent?</strong></span>
                                                            <div className="text-md text-black">Short clip to show the</div>
                                                            <div className="text-md text-black">
                                                                <span>MediRent.com advantage</span>
                                                            </div>
                                                            
                                                            <div className=''>Read more</div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
               
                                        </div>

                                        

                                    </div>
                                




                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <div className="bg-slate-900 opacity-30 absolute z-20 lg:h-screen md:h-[70vh] sm:h-screen xs:h-screen w-full"></div> */}

            </div>
        </div>
    )
}

export default HomeBlog