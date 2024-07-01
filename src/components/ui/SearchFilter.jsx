/* eslint-disable react/prop-types */
import { useState } from 'react';
// import { Link } from 'react-router-dom';


import Cancel from "../../assets/svg/cancel.svg"

// import Box from '@mui/material/Box';
// import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

import { Box, Slider, Typography } from '@mui/material';

import House from "../../assets/Search/house.svg";
import Commercial from "../../assets/Search/commercial.svg";
import Building from "../../assets/Search/building.svg";
import Duplex from "../../assets/Search/duplex.svg";


const CustomSlider = styled(Slider)({
    color: '#5A6770',
    '& .MuiSlider-thumb': {
        color: '#D0DAE3',
        boxShadow:
            '0px 0px 1px 0px rgba(0,0,0,0.2), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 1px 0px rgba(0,0,0,0.12)',
    },
    // '& .MuiSlider-rail': {
    //     color: '#ccc'
    // },
    // '& .MuiSlider-track': {
    //     color: '#ccc'
    // }
});




const SearchFilter = ({ isOpen, closeModal }) => {
    const [naming, setNaming] = useState("House");
    const [selectTransaction, setSelectTransaction] = useState("Buy");
    const [selectedBathroom, setSelectedBathroom] = useState("");
    const [selectedBedroom, setSelectedBedroom] = useState("");

    const [selectedYear, setSelectedYear] = useState("");
    const [selectedPlotSize, setSelectedPlotSize] = useState("");
    const [value1, setValue1] = useState([50000, 200000]);
    //   const [value2, setValue2] = useState([20, 37]);
    const [checkedItems, setCheckedItems] = useState(new Array(8).fill(false));
    const [selectedItems, setSelectedItems] = useState([]);

    const [community, setCommunity] = useState(new Array(8).fill(false));
    const [selectedCommunity, setSelectedCommunity] = useState([]);

    const handleChange1 = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue1([
                Math.max(newValue[0], 0),
                Math.min(newValue[1], 500000)
            ]);
        } else {
            setValue1([
                Math.max(newValue[0], 0),
                Math.min(newValue[1], 500000)
            ]);
        }
    };

    const valuetext = (value) => {
        return `$${value.toLocaleString()}`;
    };

    const handleCheckboxChange = (index) => {
        setCheckedItems((prevCheckedItems) => {
            const updatedCheckedItems = [...prevCheckedItems];
            updatedCheckedItems[index] = !updatedCheckedItems[index];
            // const checkedCount = updatedCheckedItems.filter(Boolean).length;
            

            // Update the selectedItems array
            const selectedItem = ['Swimming Pool', 'Heating System', 'Garden', 'Garage', 'Backyard', 'Finished Basement', 'Fireplace', 'Balcony'][index];
            if (updatedCheckedItems[index]) {
                if (!selectedItems.includes(selectedItem)) {
                    setSelectedItems((prevSelectedItems) => [...new Set([...prevSelectedItems, selectedItem])]);
                    // console.log("object", selectedItems, selectedItem);
                }
            } else {
                setSelectedItems((prevSelectedItems) => [...new Set([...prevSelectedItems.filter((item) => item !== selectedItem)])]);
            }
            return updatedCheckedItems;
        });
    };

    const handleChangeCommunity = (index) => {
        setCommunity((prevCommunities) => {
            const updatedCommunities = [...prevCommunities];
            updatedCommunities[index] = !updatedCommunities[index];
            // const checkedCount = updatedCommunities.filter(Boolean).length;
            

            // Update the selectedItems array
            const selectedItem = ['Gated Community', 'Clubhouse', 'School & College', 'Gym/Fitness Center', 'Tennis Courts', 'Playground', 'Airport'][index];
            if (updatedCommunities[index]) {
                if (!selectedCommunity.includes(selectedItem)) {
                    setSelectedCommunity((prevSelectedItems) => [...new Set([...prevSelectedItems, selectedItem])]);
                    // console.log("object", selectedItems, selectedItem);
                }
            } else {
                setSelectedCommunity((prevSelectedItems) => [...new Set([...prevSelectedItems.filter((item) => item !== selectedItem)])]);
            }
            return updatedCommunities;
        });
    };


    // eslint-disable-next-line no-unused-vars
    const [linkName, setLinkName] = useState({
        nameOne: "House",
        nameTwo: "Apartment",
        nameThree: "Commercial",
        nameFour: "Duplex",
    });

    // eslint-disable-next-line no-unused-vars
    const [transactionType, setTransactionType] = useState({
        nameOne: "Buy",
        nameTwo: "Sell",
        nameThree: "Rent",
    });

    const numberOfPlaces = [
        // { label: "Voter ID", value: "Voter ID", disabled: true, index: 0 },
        { label: "1", value: "1", index: 0 },
        { label: "2", value: "2", index: 1 },
        { label: "3", value: "3", index: 3 },

    ];

    const handleBathroom = (event) => {
        setSelectedBathroom(event.target.value);
    };

    const handleBedroom = (event) => {
        setSelectedBedroom(event.target.value);
    };

    const handleChangeYear = (event) => {
        setSelectedYear(event.target.value);
    };

    const handleChangePlotSize = (event) => {
        setSelectedPlotSize(event.target.value);
    };



    return (
        <div className="relative z-30"> {/* Ensure the modal has a higher z-index */}
            {isOpen && (
                <div className="fixed w-[100vw] h-[100vh] top-0 left-0 z-30 inset-0 flex items-center justify-center bg-opacity-40 bg-[rgba(9,9,23,0.319)] overflow-hidden backdrop-blur-[10px]">
                    <div className="max-h-[95vh] overflow-y-auto relative w-auto my-6 max-w-3xl mx-0 ">

                        <div className="md:px-6 pb-0 xs:px-2 border-0 rounded-2xl shadow-lg relative flex flex-col bg-white md:mx-10 xs:mx-2 outline-none focus:outline-none">
                            <div className="flex py-2 border-b border-solid border-slate-200 w-full">
                                <div
                                    className="md:text-lg xs:text-[12px] text-secondary w-full flex justify-center items-center font-[600] "
                                >
                                    Advanced Filters
                                </div>
                                <button
                                    className=" ml-auto border-0 float-right leading-none font-semibold outline-none focus:outline-none rounded-full p-2 hover:bg-gray-200"
                                    onClick={closeModal}
                                >
                                    <span className="text-2xl text-primary block outline-none focus:outline-none hover:text-slate-800">
                                        <div className=' w-full flex justify-end '>
                                            <img
                                                alt=""
                                                src={Cancel}
                                                className="cursor-pointer w-6 h-6 "
                                            />
                                        </div>
                                    </span>
                                </button>
                            </div>
                            <div className="relative flex-auto mt-6">

                                <div>
                                    <div className="md:text-[15px] xs:text-[12px] text-secondary  w-full flex justify-start items-center font-[600] ">Transaction Type</div>

                                    <div className='flex justify-start items-center my-3'>

                                        {/* <div className='flex md:gap-5 xs:gap-4 font-light'>
                                            <div className='md:text-lg xs:text-xs rounded-full md:px-6 xs:px-4 lg:px-10 py-0 bg-[#5A6770] text-white flex justify-center items-center'>
                                                Buy
                                            </div>
                                            <div className='md:text-lg xs:text-xs rounded-full md:px-6 xs:px-4 lg:px-10 py-0 bg-transparent border-[1px] border-[#c3c7cb] text-black flex justify-center items-center'>
                                                Sell
                                            </div>
                                            <div className='md:text-lg xs:text-xs rounded-full md:px-6 xs:px-4 lg:px-10 py-0 bg-transparent border-[1px] border-[#c3c7cb] text-black flex justify-center items-center'>
                                                Rent
                                            </div>

                                        </div> */}

                                        <div className='flex justify-start items-center my-3'>

                                        <div className="mt-0 ">
                                            <div className=" w-full">
                                                <div
                                                    className={`${selectTransaction === transactionType.nameOne ||
                                                        transactionType.nameTwo ||
                                                        transactionType.nameThree
                                                        ? ""
                                                        : ""
                                                        } border-none`}
                                                >
                                                    <div className="w-full justify-center items-center  ">
                                                        <div className="flex md:gap-5 xs:gap-4 font-light ">
                                                            <div
                                                                className={`${selectTransaction === transactionType.nameOne ? "bg-[#5A6770] text-white" : "border-[1px] border-[#c3c7cb] text-black"
                                                                    } cursor-pointer md:text-lg xs:text-xs rounded-full md:px-6 xs:px-4 lg:px-10 py-0 flex justify-center items-center`}
                                                                onClick={() => {
                                                                    selectTransaction !== transactionType.nameOne
                                                                        ? setSelectTransaction(transactionType.nameOne)
                                                                        : setSelectTransaction(transactionType.nameOne);

                                                                }}
                                                            >
                                                                <div className="flex justify-center flex-col items-center w-ful ">
                                                                    

                                                                    {transactionType.nameOne}
                                                                    

                                                                </div>
                                                            </div>

                                                            <div
                                                                className={`${selectTransaction === transactionType.nameTwo ? "bg-[#5A6770] text-white" : "border-[1px] border-[#c3c7cb] text-black"
                                                                    } cursor-pointer md:text-lg xs:text-xs rounded-full md:px-6 xs:px-4 lg:px-10 py-0 flex justify-center items-center`}
                                                                onClick={() => {
                                                                    selectTransaction !== transactionType.nameTwo
                                                                        ? setSelectTransaction(transactionType.nameTwo)
                                                                        : setSelectTransaction(transactionType.nameTwo);
                                                                }}
                                                            >
                                                                <div className="flex justify-center flex-col items-center w-ful ">
                                                                    {transactionType.nameTwo}
                                                                </div>
                                                            </div>


                                                            <div
                                                                className={`${selectTransaction === transactionType.nameThree ? "bg-[#5A6770] text-white" : "border-[1px] border-[#c3c7cb] text-black"
                                                                    } cursor-pointer md:text-lg xs:text-xs rounded-full md:px-6 xs:px-4 lg:px-10 py-0 flex justify-center items-center`}
                                                                onClick={() => {
                                                                    selectTransaction !== transactionType.nameThree
                                                                        ? setSelectTransaction(transactionType.nameThree)
                                                                        : setSelectTransaction(transactionType.nameThree);
                                                                }}
                                                            >
                                                                <div className="flex justify-center flex-col items-center w-ful ">
                                                                    {transactionType.nameThree}
                                                                </div>
                                                            </div>


                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    </div>
                                </div>

                                <div className="mt-10 ">
                                    <div className="md:text-[15px] xs:text-[12px] text-secondary w-full flex justify-start items-center font-[600] ">Property Type</div>

                                    <div className='flex justify-start items-center my-3'>

                                        <div className="mt-0 ">
                                            <div className=" w-full">
                                                <div
                                                    className={`${naming === linkName.nameOne ||
                                                        linkName.nameTwo ||
                                                        linkName.nameThree
                                                        ? ""
                                                        : ""
                                                        } w-full px-0 md:cursor-pointer group py-0  border-none`}
                                                >
                                                    <div className="w-full justify-center items-center  ">
                                                        <div className="text-center grid md:grid-cols-4 xs:grid-cols-2 md:gap-10 xs:gap-4 md:w-full xs:w-full text-sm border-none outline-none">
                                                            <div
                                                                className={`${naming === linkName.nameOne ? "border-secondary" : "border-[#c3c7cb]"
                                                                    } py-4 flex items-center justify-center group w-full  px-10 text-center  border-[2px] rounded-lg`}
                                                                onClick={() => {
                                                                    naming !== linkName.nameOne
                                                                        ? setNaming(linkName.nameOne)
                                                                        : setNaming(linkName.nameOne);

                                                                }}
                                                            >
                                                                <div className="flex justify-center flex-col items-center w-full text-xs ">
                                                                    <div className=' w-full flex justify-center items-center'>
                                                                        <img
                                                                            alt=""
                                                                            src={House}
                                                                            className="cursor-pointer w-6 h-6 "
                                                                        />
                                                                    </div>

                                                                    <div
                                                                        className={`${naming === linkName.nameOne ? "text-black" : "text-[#c3c7cb]"
                                                                            } flex mt-2 justify-center items-center text-center text-gray-600 w-full whitespace-nowrap`}

                                                                    >
                                                                        {linkName.nameOne}
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div
                                                                className={`${naming === linkName.nameTwo ? "border-secondary" : "border-[#c3c7cb]"
                                                                    } py-4 flex items-center justify-center group w-full  px-10 text-center  border-[2px] rounded-lg`}
                                                                onClick={() => {
                                                                    naming !== linkName.nameTwo
                                                                        ? setNaming(linkName.nameTwo)
                                                                        : setNaming(linkName.nameTwo);

                                                                }}
                                                            >
                                                                <div className="flex justify-center flex-col items-center w-full text-xs ">
                                                                    <div className=' w-full flex justify-center items-center'>
                                                                        <img
                                                                            alt=""
                                                                            src={Building}
                                                                            className="cursor-pointer w-6 h-6 "
                                                                        />
                                                                    </div>

                                                                    <div
                                                                        className={`${naming === linkName.nameTwo ? "text-black" : "text-[#c3c7cb]"
                                                                            } flex mt-2 justify-center items-center text-center text-gray-600 w-full whitespace-nowrap`}

                                                                    >
                                                                        {linkName.nameTwo}
                                                                    </div>

                                                                </div>
                                                            </div>


                                                            <div
                                                                className={`${naming === linkName.nameThree ? "border-secondary" : "border-[#c3c7cb]"
                                                                    } py-4 flex items-center justify-center group w-full  px-10 text-center  border-[2px] rounded-lg`}
                                                                onClick={() => {
                                                                    naming !== linkName.nameThree
                                                                        ? setNaming(linkName.nameThree)
                                                                        : setNaming(linkName.nameThree);

                                                                }}
                                                            >
                                                                <div className="flex justify-center flex-col items-center w-full text-xs ">
                                                                    <div className=' w-full flex justify-center items-center'>
                                                                        <img
                                                                            alt=""
                                                                            src={Commercial}
                                                                            className="cursor-pointer w-6 h-6 "
                                                                        />
                                                                    </div>

                                                                    <div
                                                                        className={`${naming === linkName.nameThree ? "text-black" : "text-[#c3c7cb]"
                                                                            } flex mt-2 justify-center items-center text-center text-gray-600 w-full whitespace-nowrap`}

                                                                    >
                                                                        {linkName.nameThree}
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div
                                                                className={`${naming === linkName.nameFour ? "border-secondary" : "border-[#c3c7cb]"
                                                                    } py-4 flex items-center justify-center group w-full  px-10 text-center  border-[2px] rounded-lg`}
                                                                onClick={() => {
                                                                    naming !== linkName.nameFour
                                                                        ? setNaming(linkName.nameFour)
                                                                        : setNaming(linkName.nameFour);

                                                                }}
                                                            >
                                                                <div className="flex justify-center flex-col items-center w-full text-xs ">
                                                                    <div className=' w-full flex justify-center items-center'>
                                                                        <img
                                                                            alt=""
                                                                            src={Duplex}
                                                                            className="cursor-pointer w-6 h-6 "
                                                                        />
                                                                    </div>

                                                                    <div
                                                                        className={`${naming === linkName.nameFour ? "text-black" : "text-[#c3c7cb]"
                                                                            } flex mt-2 justify-center items-center text-center text-gray-600 w-full whitespace-nowrap`}

                                                                    >
                                                                        {linkName.nameFour}
                                                                    </div>

                                                                </div>
                                                            </div>

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className=' flex justify-between md:flex-row xs:flex-col gap-5 my-5 items-center '>
                                    <div className='flex justify-start w-full flex-col'>
                                        <div className="md:text-[15px] xs:text-[12px] text-secondary  w-full flex justify-start items-center font-[600] ">Location</div>

                                        <input
                                            className="relative mt-3 h-12 w-full text-[1rem] outline-none border-[1px] px-2 rounded-[4px] bg-[#f7f7f7]"
                                            type="text"
                                            name=""
                                            id=""
                                            placeholder="Address"
                                        />


                                    </div>

                                    <div className='flex justify-start w-full flex-col '>
                                        <div className="md:text-[15px] xs:text-[12px] text-secondary  w-full flex justify-start items-center font-[600]">Rooms</div>

                                        <div className='flex mt-3 gap-5'>
                                            <div className='flex w-full'>
                                                <select
                                                    value={selectedBedroom}
                                                    onChange={handleBedroom}
                                                    className="text-[14px] h-12 peer px-4 py-2 w-full rounded-md border border-gray-200 bg-[#f7f7f7] outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white "
                                                >
                                                    <option value="null">Bedrooms</option>
                                                    {numberOfPlaces.map((numberOfPlace) => (
                                                        <option
                                                            key={numberOfPlace.index}
                                                            value={numberOfPlace.value}
                                                        >
                                                            {numberOfPlace.label}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div className='flex w-full'>
                                                <select
                                                    value={selectedBathroom}
                                                    onChange={handleBathroom}
                                                    className="text-[14px] h-12 peer px-4 py-2 w-full rounded-md border border-gray-200 bg-[#f7f7f7] outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white "
                                                >
                                                    <option value="null">Bathrooms</option>
                                                    {numberOfPlaces.map((numberOfPlace) => (
                                                        <option
                                                            key={numberOfPlace.index}
                                                            value={numberOfPlace.value}
                                                        >
                                                            {numberOfPlace.label}
                                                        </option>
                                                    ))}
                                                </select>


                                            </div>

                                        </div>



                                    </div>
                                </div>

                                <div className='my-5'>
                                    <div className="md:text-[15px] xs:text-[12px] text-secondary  w-full flex justify-start items-center font-[600] ">Range</div>

                                    <div className='flex my-3'>

                                        <div className=' w-full flex flex-col'>
                                            {/* <label htmlFor="range-input">Select a range:</label> */}

                                            <div className=' w-full'>
                                                <div>
                                                    <Box
                                                        sx={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            alignItems: 'center',
                                                            mt: 2
                                                        }}
                                                    >
                                                        <CustomSlider
                                                            getAriaLabel={() => 'Minimum distance'}
                                                            value={value1}
                                                            onChange={handleChange1}
                                                            valueLabelDisplay="auto"
                                                            getAriaValueText={valuetext}
                                                            disableSwap
                                                            min={0}
                                                            max={500000}
                                                            step={1000}
                                                        />
                                                        <Box
                                                            sx={{
                                                                display: 'flex',
                                                                justifyContent: 'space-between',
                                                                width: '100%',
                                                                mt: 1,
                                                                color: '#768188' // set the text color to #D0DAE3
                                                            }}
                                                        >
                                                            <Typography variant="body2">{`Minimum: ${valuetext(value1[0])}`}</Typography>
                                                            <Typography variant="body2">{`Maximum: ${valuetext(value1[1])}`}</Typography>
                                                        </Box>
                                                    </Box>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='grid md:grid-cols-3 xs:grid-cols-2 gap-5 my-5 items-center '>
                                    <div className='flex mt-3 gap-5 flex-col'>
                                        <div className="md:text-[15px] xs:text-[12px] text-secondary  w-full flex justify-start items-center font-[600]">Build Year</div>
                                        <div className='flex w-full'>
                                            <select
                                                value={selectedYear}
                                                onChange={handleChangeYear}
                                                className="text-[14px] h-12 peer px-4 py-2 w-full rounded-md border border-gray-200 bg-[#f7f7f7] outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white "
                                            >
                                                <option value="null">Year</option>
                                                {numberOfPlaces.map((numberOfPlace) => (
                                                    <option
                                                        key={numberOfPlace.index}
                                                        value={numberOfPlace.value}
                                                    >
                                                        {numberOfPlace.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className='flex mt-3 gap-5 flex-col'>
                                        <div className="md:text-[15px] xs:text-[12px] text-secondary  w-full flex justify-start items-center font-[600]">Plot Size</div>
                                        <div className='flex w-full'>
                                            <select
                                                value={selectedPlotSize}
                                                onChange={handleChangePlotSize}
                                                className="text-[14px] h-12 peer px-4 py-2 w-full rounded-md border border-gray-200 bg-[#f7f7f7] outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white "
                                            >
                                                <option value="null">Size</option>
                                                {numberOfPlaces.map((numberOfPlace) => (
                                                    <option
                                                        key={numberOfPlace.index}
                                                        value={numberOfPlace.value}
                                                    >
                                                        {numberOfPlace.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    
                                </div>

                                <div className='my-10'>
                                    <div className="md:text-[15px] xs:text-[12px] text-secondary  w-full flex justify-start items-center font-[600] ">Features and Amenities</div>

                                    <div className='w-full grid md:grid-cols-3 xs:grid-cols-2'>
                                            {['Swimming Pool', 'Heating System', 'Garden', 'Garage', 'Backyard', 'Finished Basement', 'Fireplace', 'Balcony'].map((item, index) => (
                                                <div key={index} className="mr-3 relative my-3 w-full">
                                                    <input
                                                        type="checkbox"
                                                        id={`checkbox-${index}`}
                                                        name="renting"
                                                        className="absolute opacity-0 h-6 w-6 cursor-pointer"
                                                        value={item}
                                                        checked={checkedItems[index]}
                                                        onChange={() => handleCheckboxChange(index)}
                                                    />
                                                    <label
                                                        htmlFor={`checkbox-${index}`}
                                                        className="flex items-center cursor-pointer text-primary"
                                                    >
                                                        <div
                                                            className={`w-4 h-4 border-[1px] ${checkedItems[index] ? 'border-secondary bg-secondary' : 'border-secondary bg-white'} rounded-[3px] flex justify-center items-center mr-2`}
                                                        >
                                                            {checkedItems[index] && (
                                                                <svg
                                                                    className="fill-white w-5 h-5 p-0 pointer-events-none flex justify-center items-center mb-[0px]"
                                                                    viewBox="0 0 20 20"
                                                                >
                                                                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                                                                </svg>
                                                            )}
                                                        </div>
                                                        <span className="select-none text-secondary whitespace-nowrap md:text-[15px] xs:text-[12px]">{item}</span>
                                                    </label>
                                                </div>
                                            ))}
                                        </div>

                                    
                                </div>

                                <div className='mt-10 mb-14'>
                                    <div className="md:text-[15px] xs:text-[12px] text-secondary  w-full flex justify-start items-center font-[600] ">Community Amenities</div>

                                    <div className='w-full grid md:grid-cols-3 xs:grid-cols-2'>
                                            {['Gated Community', 'Clubhouse', 'School & College', 'Gym/Fitness Center', 'Tennis Courts', 'Playground', 'Airport'].map((item, index) => (
                                                <div key={index} className="mr-3 relative my-3 w-full">
                                                    <input
                                                        type="checkbox"
                                                        id={`checkbox-${index}`}
                                                        name="renting"
                                                        className="absolute opacity-0 h-6 w-6 cursor-pointer"
                                                        value={item}
                                                        checked={community[index]}
                                                        onChange={() => handleChangeCommunity(index)}
                                                    />
                                                    <label
                                                        htmlFor={`checkbox-${index}`}
                                                        className="flex items-center cursor-pointer text-primary"
                                                    >
                                                        <div
                                                            className={`w-4 h-4 border-[1px] ${community[index] ? 'border-secondary bg-secondary' : 'border-secondary bg-white'} rounded-[3px] flex justify-center items-center mr-2`}
                                                        >
                                                            {community[index] && (
                                                                <svg
                                                                    className="fill-white w-5 h-5 p-0 pointer-events-none flex justify-center items-center mb-[0px]"
                                                                    viewBox="0 0 20 20"
                                                                >
                                                                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                                                                </svg>
                                                            )}
                                                        </div>
                                                        <span className="select-none text-secondary whitespace-nowrap md:text-[15px] xs:text-[12px]">{item}</span>
                                                    </label>
                                                </div>
                                            ))}
                                        </div>

                                    
                                </div>                                
                            </div>

                            <div className="flex py-2 border-t border-solid border-slate-200 w-full">
                                <div
                                    className="md:text-lg xs:text-[12px] text-secondary w-full flex justify-end items-center gap-5"
                                >
                                    
                                    <button className='text-[12px] rounded-lg md:px-6 xs:px-4 lg:px-6 py-1 bg-transparent border-[1px] border-[#c3c7cb] text-black flex justify-center items-center'>Clear All</button>
                                    <button className='text-[12px] rounded-lg md:px-6 xs:px-4 lg:px-6 py-1 border-[1px] bg-black text-white flex justify-center items-center'>Apply</button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SearchFilter