import { useState } from "react";
import { HiOutlineChevronRight, HiOutlineChevronDown, HiOutlineChevronLeft } from "react-icons/hi";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

function Slider({ images }) {
    const [imageIndex, setImageIndex] = useState(null);

    const changeSlide = (direction) => {
        if (direction === "left") {
            if (imageIndex === 0) {
                setImageIndex(images.length - 1);
            } else {
                setImageIndex(imageIndex - 1);
            }
        } else {
            if (imageIndex === images.length - 1) {
                setImageIndex(0);
            } else {
                setImageIndex(imageIndex + 1);
            }
        }
    };

    return (
        <div className="slider">
            {imageIndex !== null && (
                <div className="fullSlider fixed inset-0 flex justify-between items-center bg-black z-50">
                    <div className="arrow flex items-center justify-center flex-1" onClick={() => changeSlide("left")}>
                        {/* <img src="/arrow.png" alt="" className="w-8 md:w-6 sm:w-4" /> */}
                        <div className="text-4xl font-bold text-white cursor-pointer">
                            <BsChevronCompactLeft />
                        </div>
                    </div>
                    <div className="imgContainer flex-10">
                        <img src={images[imageIndex]} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="arrow flex items-center justify-center flex-1" onClick={() => changeSlide("right")}>
                        {/* <img src="/arrow.png" alt="" className="w-8 md:w-6 sm:w-4 transform rotate-180" /> */}
                        <div className="text-4xl font-bold text-white cursor-pointer">
                            <BsChevronCompactRight />
                        </div>
                    </div>
                    <div className="close absolute top-0 right-0 text-white text-3xl font-bold py-5 px-10 cursor-pointer" onClick={() => setImageIndex(null)}>X</div>
                </div>
            )}
            <div className="grid md:grid-cols-3 gap-4 flex-row xs:grid-cols-1 w-full justify-center ">
                <div className="md:col-span-2 xs:col cursor-pointer flex w-full h-full">
                    <img src={images[0]} alt="" onClick={() => setImageIndex(0)} className="cursor-pointer w-full h- object-cover rounded-lg " />
                </div>
                <div className="md:col xs:col flex-col justify-between items-center gap-4 flex w-full ">
                    {images.slice(1).map((image, index) => (
                        <img src={image} alt="" key={index} onClick={() => setImageIndex(index + 1)} className="cursor-pointer w-full object-cover rounded-lg h-[200px]" />
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Slider;
