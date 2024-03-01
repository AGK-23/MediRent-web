import { useState, useEffect } from "react";
// import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
// import { RxDotFilled } from 'react-icons/rx';

import { MdOutlineWarehouse } from "react-icons/md";
import { IoBoatOutline } from "react-icons/io5";
import { SiYourtraveldottv } from "react-icons/si";
import { TbTruckDelivery, TbDrone } from "react-icons/tb";
// import { TbDrone } from "react-icons/tb";
// import PrimaryButton from "../../Buttons/primaryButton";
// import { HiArrowSmRight, HiOutlineArrowNarrowRight } from "react-icons/hi";
import './Carousel.css'


import Product from "../../assets/imageDiv/productImage.jpg";
import Product1 from "../../assets/imageDiv/productImage6.jpg";
import Product2 from "../../assets/imageDiv/productImage3.jpg";
// import Product3 from "../../assets/imageDiv/productImage4.jpg";
import Product4 from "../../assets/imageDiv/productImage4.jpg"
import Product5 from "../../assets/imageDiv/productImage5.jpg"

import Image from "../../assets/imageDiv/product.jpg"
import Image1 from "../../assets/imageDiv/product1.jpg"
import Image2 from "../../assets/imageDiv/product2.jpg"
import Image3 from "../../assets/imageDiv/product3.jpg"
import Image4 from "../../assets/imageDiv/product4.jpg"









const Carousel = () => {
    const slides = [
        {
            id: 1,
            imageUrl: Image,
            data: 'Create and send invoices directly to client, Manage invoices directly from your account.',
            title: 'Create instant Invoices',
            icon: <MdOutlineWarehouse />

        },
        {
            id: 2,
            imageUrl: Image1,
            data: 'Create your team, assign role to employees, Track employees day-to-day activities',
            title: 'Team Creation & Assign task to employees',
            icon: <IoBoatOutline />
        },
        {
            id: 3,
            imageUrl: Image2,
            data: 'Track your inventory, know how much inventory is currently located in your store. Outsource vendors to re-stock your store.',
            title: 'Inventory Management',
            icon: <SiYourtraveldottv />
        },
        {
            id: 4,
            imageUrl: Image3,
            data: 'Helping procure and shipping from foreign online store like ebay, Amazon etc.',
            title: 'Supply Chain Manangement',
            icon: <TbTruckDelivery />
        },
        {
            id: 5,
            imageUrl: Image4,
            data: 'Know your store activities, How good your store is performing, Get Insight into your store Health.',
            title: 'Store Management',
            icon: <TbDrone />
        },
        // {
        //     id: 6,
        //     imageUrl: Image5,
        //     data: 'Know your store activities, How good your store is performing, Get Insight into your store Health.',
        //     title: 'Store Management',
        //     icon: <TbDrone />
        // },
    ];

    var [currentIndex, setCurrentIndex] = useState(0);
    // eslint-disable-next-line no-unused-vars
    const [direction, setDirection] = useState(true);
    const [autoPlay, setAutoPlay] = useState(true);
    let timeOut = null;


    // const goToPrevious = () => {
    //     const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    //     setCurrentIndex(newIndex);
    //     setDirection(true);
    //     //   console.log("the prev index..", newIndex)
    //     //   console.log("this is the Previous Index..", currentIndex, direction);
    // };


    const goToNext = () => {
        const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        setDirection(false);
        // console.log(direction)
        // console.log("the next index..", newIndex)
        // console.log("this is the Next Index..", currentIndex, direction);
    };


    // const goToSlide = (slideIndex) => {
    //     // console.log("the time is now..", slideIndex);
    //     if (currentIndex <= slideIndex) {
    //         setDirection(false)
    //     } else {
    //         setDirection(true)
    //     }
    //     setCurrentIndex(slideIndex);
    // };

    // const formSlide = () => {
    //   console.log("same here");
    // }



    useEffect(() => {
        timeOut =
            // eslint-disable-next-line react-hooks/exhaustive-deps
            autoPlay &&
            setTimeout(() => {
                goToNext();
            }, 3000);
    });

    return (

        <div className='w-full relative min-h-screen bg-slate-100 '>
            <div
                className=""
                onMouseEnter={() => {
                    setAutoPlay(true);
                    clearTimeout(timeOut);
                }}
                onMouseLeave={() => {
                    setAutoPlay(true);
                }}
            >
                <div className='flex flex-col justify-center items-center w-full bg-slate-100 border-white'>
                {/* mt-1 xsl:w-40 lg:w-40 xs:w-40 flex justify-evenly items-center mb-1 relative text-4xl bg-black/20 px-7 rounded-full */}


                    {/* <div className='mt-1 xsl:w-40 lg:w-40 xs:w-40 flex justify-evenly items-center mb-1 relative text-4xl '>
                        {slides.map((slide, slideIndex) => (
                            <div
                                key={slideIndex}
                                // onClick={() => goToSlide(slideIndex)}

                                className=' w-32 xsl:text-3xl md:text-lg xs:text-sm  xs:ml-0 cursor-pointer flex justify-center items-center flex-col'
                            >
                                <div
                                    className={
                                        slideIndex === currentIndex
                                            ? "pagination_dot pagination_dot-active"
                                            : "pagination_dot"
                                    }
                                >
                                </div>
                            </div>
                        ))}
                    </div> */}

                    {/* <div className="text-third font-semibold text-lg">
                        {slides[currentIndex].title}
                    </div>
                    <div className="text-primary font-light text-center text-sm">
                        {slides[currentIndex].data}
                    </div> */}


                    {/* Left Arrow */}
                    {/* <div className=" flex w-44 justify-between">
                    <button onClick={goToPrevious} className='md:text-xl xs:text-sm rounded-full p-2 bg-black/20 text-white cursor-pointer z-40'>
                        <BsChevronCompactLeft />
                    </button>
                
                    <div className=' right-5 xsl:text-3xl md:text-xl xs:text-sm rounded-full p-2 bg-black/20 text-white cursor-pointer z-30'>
                        <BsChevronCompactRight onClick={goToNext} />
                    </div>

                </div> */}
                </div>

                {/* <div
                    style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                    className='w-full h-fit bg-center bg-cover bg-no-repeat duration-500 '

                ></div> */}
                <div className="">


                    <img src={slides[currentIndex].imageUrl} alt="logistics" className='w-full h-screen bg-cover
            bg-center flex justify-center lg:h-screen md:h-[70vh] sm:h-[80vh] xs:h-[80vh]' />
                </div>
            </div>

        </div>
    );
}

export default Carousel