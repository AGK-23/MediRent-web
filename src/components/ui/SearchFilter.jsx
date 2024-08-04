/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';


import Cancel from "../../assets/svg/cancel.svg"

// import Box from '@mui/material/Box';
// import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import axios from "axios";
import { Box, Slider, Typography } from '@mui/material';

import House from "../../assets/Search/house.svg";
import Commercial from "../../assets/Search/commercial.svg";
import Building from "../../assets/Search/building.svg";
import Duplex from "../../assets/Search/duplex.svg";
// import AllListing from '../../pages/Listing/AllListing/AllListing';




const CustomSlider = styled(Slider)({
    color: '#5A6770',
    '& .MuiSlider-thumb': {
        color: '#FFA499',
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




const SearchFilter = ({ getAllListing, sendDataToParent, isOpen, closeModal, searchedListings, setSearchedListings }) => {
    const [userLoading, setUserLoading] = useState(false);
    const [emptyLoading, setEmptyLoading] = useState(true)
    // const [searchedListings, setSearchedListings] = useState([]);
    const [amenitiesList, setAmenitiesList] = useState([]);

    const [naming, setNaming] = useState("House");
    const [selectedBathroom, setSelectedBathroom] = useState("");
    const [selectedBedroom, setSelectedBedroom] = useState("");

    const [selectedYear, setSelectedYear] = useState("");
    // const [selectedPlotSize, setSelectedPlotSize] = useState("");
    const [value1, setValue1] = useState([50000, 200000]);
    //   const [value2, setValue2] = useState([20, 37]);
    const [checkedItems, setCheckedItems] = useState(new Array(8).fill(false));
    const [selectedItems, setSelectedItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    const [allListings, setAllListings] = useState({
        location: "",
        propertyType: "",
        minimumPriceRange: null,
        maximumPriceRange: null,
        propertySize: null,
        bedrooms: null,
        bathrooms: null,
        amenities: [],
        buildYear: null
    });

    var {
        location,
        propertyType,
        minimumPriceRange,
        maximumPriceRange,
        propertySize,
        bedrooms,
        bathrooms,
        amenities,
        buildYear,

    } = allListings

    // useEffect(() => {
    //     setAllListings(prevState => ({
    //         ...prevState,
    //         location: "",
    //         propertyType: "",
    //         minimumPriceRange: 0,
    //         maximumPriceRange: 0,
    //         propertySize: "",
    //         bedrooms: "",
    //         bathrooms: "",
    //         amenities: []
    //     }));
    // }, [allListings]);

    const handleAddressChange = (event) => {
        const { value } = event.target;
        // console.log("all the value..", value );

        setAllListings(prevState => ({
            ...prevState,
            location: value
        }));

        // console.log("object", allListings);
    };

    const handlePropertySizeChange = (event) => {
        const { value } = event.target;
        // console.log("all the value..", value );

        setAllListings(prevState => ({
            ...prevState,
            propertySize: parseInt(value)
        }));

        // console.log("object", allListings, typeof value, value);
    };

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

        setAllListings(prevState => ({
            ...prevState,
            minimumPriceRange: newValue[0],
            maximumPriceRange: newValue[1],
        }));

        // console.log("number..", allListings)
    };

    const valuetext = (value) => {
        return `$${value.toLocaleString()}`;
    };

    const handleCheckboxChange = (index) => {
        setCheckedItems((prevCheckedItems) => {
            const updatedCheckedItems = [...prevCheckedItems];
            updatedCheckedItems[index] = !updatedCheckedItems[index];
    
            // Get the selected item based on the index
            const selectedItem = ['Fully Furnished', 'Treated Water Supply', 'Garden', '24/7 Power Supply', 'Secure Parking', 'Community Spaces', 'High-Speed Internet', 'Proximity to Medical Facilities'][index];
    
            if (updatedCheckedItems[index]) {
                // console.log("thing ..", updatedCheckedItems[index], selectedItem);
                // If the checkbox is checked and the item is not already in selectedItems
                setSelectedItems((prevSelectedItems) => {
                    if (!prevSelectedItems.includes(selectedItem)) {
                        // console.log("Adding item:", selectedItem);
                        return [...new Set([...prevSelectedItems, selectedItem])];
                    }
                    // console.log("Already included:", prevSelectedItems, selectedItem);
                    return prevSelectedItems; // No change if already included
                });
            } else {
                // If the checkbox is unchecked
                
                setSelectedItems((prevSelectedItems) => {
                    return [...new Set(prevSelectedItems.filter((item) => item !== selectedItem))];
                });
            }
    
            setAllListings(prevState => ({
                ...prevState,
                amenities: [...new Set(updatedCheckedItems.map((checked, i) => checked ? selectedItems[i] : null).filter(Boolean))] // Update amenities based on checked items
            }));
    
            // console.log("all check..", updatedCheckedItems, selectedItems, selectedItem, allListings);
            return updatedCheckedItems;
        });
    };

    
    // eslint-disable-next-line no-unused-vars
    const [linkName, setLinkName] = useState({
        nameOne: "House",
        nameTwo: "Apartment",
        nameThree: "Commercial",
        nameFour: "Duplex",
    });

    const handlePropertyType = (name) => {
        if (naming !== name) {
            setNaming(name);
            setAllListings((prevState) => ({
                ...prevState,
                propertyType: name,
            }));
        } else {
            setNaming(name);
            setAllListings((prevState) => ({
                ...prevState,
                propertyType: name,
            }));
        }

        // console.log("property size..", allListings)
    };

    const numberOfPlaces = [
        // { label: "Voter ID", value: "Voter ID", disabled: true, index: 0 },
        { label: "1", value: "1", index: 0 },
        { label: "2", value: "2", index: 1 },
        { label: "3", value: "3", index: 3 },
        { label: "4", value: "4", index: 4 },
        { label: "5", value: "5", index: 5 },
        { label: "6", value: "6", index: 6 },
        { label: "7", value: "7", index: 7 },
        { label: "8", value: "8", index: 8 },
        { label: "9", value: "9", index: 9 },
        { label: "10", value: "10", index: 10 },

    ];

    const handleBathroom = (event) => {
        setSelectedBathroom(event.target.value);
        const { value } = event.target;

        setAllListings((prevState) => ({
            ...prevState,
            bathrooms: parseInt(value),
        }));
    };

    const handleBedroom = (event) => {
        setSelectedBedroom(event.target.value);
        const { value } = event.target;

        setAllListings((prevState) => ({
            ...prevState,
            bedrooms: parseInt(value),
        }));
    };

    const handleBuildYearChange = () => {

        // setSelectedBedroom(event.target.value);
        const { value } = event.target;

        setAllListings((prevState) => ({
            ...prevState,
            buildYear: value,
        }));
    }

    // const handleChangeYear = (event) => {
    //     setSelectedYear(event.target.value);
    // };

    useEffect(() => {
        console.log("Updated searched listings:", searchedListings, amenitiesList, amenities);
    }, [searchedListings, amenitiesList, amenities]);



    useEffect(() => {
        const fetchAmenities = async () => {
            try {
                setIsLoading(true)

                // console.log("first items", allListings)

                const response = await axios.get('https://medirent-api-3gwy.onrender.com/Amenity/get-all-amenities');

                setAmenitiesList(response?.data.Data);
                // setAllListings(response?.data?.data?.items);

                // console.log("object", amenitiesList, response?.data);
                setIsLoading(false)

            } catch (error) {
                console.error('Error fetching listings:', error);
                setIsLoading(false)
            }
        };

        fetchAmenities();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleListing = async () => {
        // e.preventDefault();
        try {


            setUserLoading(true);

            // console.log("user form for landlord...", allListings, amenities, amenitiesList, selectedItems);


            const resultArray = [];

            selectedItems.forEach(feature => {
                const foundItem = amenitiesList.find(item => item.Description === feature);
                if (foundItem) {
                    resultArray.push(foundItem.Id);
                }
            });

            // console.log("same array..", resultArray);

            const response = await axios.post(
                'https://medirent-api-3gwy.onrender.com/housing/get-all-listings?pageNumber=1&pageSize=10',
                {
                    // pageNumber: 1,
                    // pageSize: 10
                    propertyType,
                    minimumPriceRange,
                    maximumPriceRange,
                    buildYear,
                    propertySize,
                    bedrooms,
                    bathrooms,
                    location,
                    amenities: resultArray

                }, // Sending an empty JSON object
                {
                    headers: {
                        'accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                }
            );


            setUserLoading(false);

            // // console.log("Landlord is rent..", response.data.data.items);
            setSearchedListings(response?.data?.data?.items);

            // console.log("all the user..", response, searchedListings);

            if (response.data.success === true) {

                getAllListing(response?.data?.data?.items)

                // console.log("hello in the building..")
                closeModal();

                // navigate('/listings', { state: { result: listings, emptyLoading } });
            }
        } catch (error) {
            setUserLoading(false);
            // console.log("error in the landlord..", error);

            // console.log("all the promise in the code..", error?.response?.data);
            if (error?.response?.data?.data === null) {
                setEmptyLoading(false)
                // console.log("empty Loading...", emptyLoading);
                // navigate('/listings', { state: { result: listings, emptyLoading } });
            }

            // console.log("the current image..", emptyLoading)
        }

        // setActive(2)
    };

    const clearAllListing = async () => {
        try {
            setUserLoading(true);

            setAllListings((prevState) => ({
                ...prevState,
                location: "",
                propertyType: "",
                minimumPriceRange: null,
                maximumPriceRange: null,
                propertySize: null,
                bedrooms: null,
                bathrooms: null,
                amenities: [],
                buildYear: null
            }));

            const response = await axios.post(
                'https://medirent-api-3gwy.onrender.com/housing/get-all-listings?pageNumber=1&pageSize=100',
                {}, // Sending an empty JSON object
                {
                    headers: {
                        'accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                }
            );
            setUserLoading(false);
            setSearchedListings(response?.data?.data?.items);

            // console.log("all the user..", response, searchedListings);

            if (response.data.success === true) {
                getAllListing(response?.data?.data?.items)
                closeModal();
            }
        } catch (error) {
            setUserLoading(false);
            if (error?.response?.data?.data === null) {
                setEmptyLoading(false)
            }
        }

    };

    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send the input value to the parent component
        sendDataToParent(inputValue);
        setInputValue(''); // Clear the input after sending
    };



    return (
        <div className="relative z-30"> {/* Ensure the modal has a higher z-index */}
            {isOpen && (
                <div className="fixed w-[100vw] h-[100vh] top-0 left-0 z-30 inset-0 flex items-center justify-center bg-opacity-40 bg-[rgba(9,9,23,0.319)] overflow-hidden backdrop-blur-[10px]">
                    <div className="max-h-[95vh] overflow-y-auto relative w-auto my-6 max-w-3xl mx-0 ">

                        <div className="md:px-6 pb-0 xs:px-2 border-0 rounded-2xl shadow-lg relative flex flex-col bg-white md:mx-10 xs:mx-2 outline-none focus:outline-none">
                            <div className="flex py-2 border-b border-solid border-slate-200 w-full">
                                <div
                                    className="md:text-lg xs:text-[12px] text-black w-full flex justify-center items-center font-[600] "
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


                                <div className="mt-0 ">
                                    <div className="md:text-[15px] xs:text-[12px] text-black w-full flex justify-start items-center font-[600] ">Property Type</div>

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
                                                                className={`${naming === linkName.nameOne ? "border-secondary text-black" : "border-[#c3c7cb]"
                                                                    } py-4 flex items-center justify-center group w-full  px-10 text-center  border-[2px] rounded-lg`}
                                                                // onClick={() => {
                                                                //     naming !== linkName.nameOne
                                                                //         ? setNaming(linkName.nameOne)
                                                                //         : setNaming(linkName.nameOne);

                                                                // }}
                                                                onClick={() => handlePropertyType(linkName.nameOne)}
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
                                                                        className={`${naming === linkName.nameOne ? "text-slate-900 font-semibold" : "text-[#c3c7cb]"
                                                                            } flex mt-2 justify-center items-center text-center text-gray-600 w-full whitespace-nowrap`}

                                                                    >
                                                                        {linkName.nameOne}
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div
                                                                className={`${naming === linkName.nameTwo ? "border-secondary" : "border-[#c3c7cb]"
                                                                    } py-4 flex items-center justify-center group w-full  px-10 text-center  border-[2px] rounded-lg`}
                                                                // onClick={() => {
                                                                //     naming !== linkName.nameTwo
                                                                //         ? setNaming(linkName.nameTwo)
                                                                //         : setNaming(linkName.nameTwo);

                                                                // }}
                                                                onClick={() => handlePropertyType(linkName.nameTwo)}
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
                                                                        className={`${naming === linkName.nameTwo ? "text-slate-900 font-semibold" : "text-[#c3c7cb]"
                                                                            } flex mt-2 justify-center items-center text-center text-gray-600 w-full whitespace-nowrap`}

                                                                    >
                                                                        {linkName.nameTwo}
                                                                    </div>

                                                                </div>
                                                            </div>


                                                            <div
                                                                className={`${naming === linkName.nameThree ? "border-secondary" : "border-[#c3c7cb]"
                                                                    } py-4 flex items-center justify-center group w-full  px-10 text-center  border-[2px] rounded-lg`}
                                                                // onClick={() => {
                                                                //     naming !== linkName.nameThree
                                                                //         ? setNaming(linkName.nameThree)
                                                                //         : setNaming(linkName.nameThree);

                                                                // }}
                                                                onClick={() => handlePropertyType(linkName.nameThree)}
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
                                                                        className={`${naming === linkName.nameThree ? "text-slate-900 font-semibold" : "text-[#c3c7cb]"
                                                                            } flex mt-2 justify-center items-center text-center text-gray-600 w-full whitespace-nowrap`}

                                                                    >
                                                                        {linkName.nameThree}
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div
                                                                className={`${naming === linkName.nameFour ? "border-secondary" : "border-[#c3c7cb]"
                                                                    } py-4 flex items-center justify-center group w-full  px-10 text-center  border-[2px] rounded-lg`}
                                                                // onClick={() => {
                                                                //     naming !== linkName.nameFour
                                                                //         ? setNaming(linkName.nameFour)
                                                                //         : setNaming(linkName.nameFour);

                                                                // }}
                                                                onClick={() => handlePropertyType(linkName.nameFour)}
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
                                                                        className={`${naming === linkName.nameFour ? "text-slate-900 font-semibold" : "text-[#c3c7cb]"
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
                                        <div className="md:text-[15px] xs:text-[12px] text-black  w-full flex justify-start items-center font-[600] ">Location</div>

                                        <input
                                            className="relative mt-3 h-12 w-full text-[1rem] outline-none border-[1px] px-2 rounded-[4px] bg-[#f7f7f7]"
                                            type="text"
                                            name=""
                                            id=""
                                            placeholder="City"
                                            onChange={handleAddressChange}
                                        />
                                    </div>

                                    <div className='flex justify-start w-full flex-col '>
                                        <div className="md:text-[15px] xs:text-[12px] text-black  w-full flex justify-start items-center font-[600]">Rooms</div>

                                        <div className='flex mt-3 gap-5'>
                                            <div className='flex w-full'>
                                                {/* <select
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
                                                </select> */}

                                                <input
                                                    className="relative mt-3 h-12 w-full text-[1rem] outline-none border-[1px] px-2 rounded-[4px] bg-[#f7f7f7]"
                                                    type="number"
                                                    name=""
                                                    id=""
                                                    placeholder="Bedrooms"
                                                    onChange={handleBedroom}
                                                />
                                            </div>

                                            <div className='flex w-full'>
                                                {/* <select
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
                                                </select> */}

                                                <input
                                                    className="relative mt-3 h-12 w-full text-[1rem] outline-none border-[1px] px-2 rounded-[4px] bg-[#f7f7f7]"
                                                    type="number"
                                                    name=""
                                                    id=""
                                                    placeholder="Bathrooms"
                                                    onChange={handleBathroom}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='my-5'>
                                    <div className="md:text-[15px] xs:text-[12px] text-black  w-full flex justify-start items-center font-[600] ">Price Range</div>

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
                                        <div className="md:text-[15px] xs:text-[12px] text-black  w-full flex justify-start items-center font-[600]">Build Year</div>
                                        <div className='flex w-full'>
                                            {/* <select
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
                                            </select> */}
                                            <input
                                                className="relative mt-3 h-12 w-full text-[1rem] outline-none border-[1px] px-2 rounded-[4px] bg-[#f7f7f7]"
                                                type="number"
                                                name=""
                                                id=""
                                                placeholder="Year"
                                                onChange={handleBuildYearChange}
                                            />
                                        </div>
                                    </div>

                                    <div className='flex mt-3 gap-5 flex-col'>
                                        <div className="md:text-[15px] xs:text-[12px] text-black  w-full flex justify-start items-center font-[600]">Property Size</div>
                                        <div className='flex w-full'>
                                            {/* <select
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
                                            </select> */}

                                            <input
                                                className="relative mt-3 h-12 w-full text-[1rem] outline-none border-[1px] px-2 rounded-[4px] bg-[#f7f7f7]"
                                                type="number"
                                                name=""
                                                id=""
                                                placeholder="Property Size"
                                                onChange={handlePropertySizeChange}
                                            />
                                        </div>
                                    </div>

                                </div>

                                <div className='my-10'>
                                    <div className="md:text-[15px] xs:text-[12px] text-black  w-full flex justify-start items-center font-[600] ">Features and Amenities</div>

                                    <div className='w-full grid md:grid-cols-2 xs:grid-cols-1 '>
                                        {['Fully Furnished', 'Treated Water Supply', 'Garden', '24/7 Power Supply', 'Secure Parking', 'Community Spaces', 'High-Speed Internet side', 'Proximity to Medical Facilities'].map((item, index) => (
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
                                                    className="flex items-center cursor-pointer "
                                                >
                                                    <div
                                                        className={`w-4 h-4 border-[1px] ${checkedItems[index] ? 'border-gray-500 bg-gray-500' : 'border-gray-500 bg-white'} rounded-[3px] flex justify-center items-center mr-2`}
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
                                                    <span className="select-none border-gray-500 whitespace-nowrap md:text-[15px] text-gray-500 xs:text-[12px]">{item}</span>
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

                                    <button className='text-[12px] rounded-full md:px-6 xs:px-4 lg:px-6 py-1 bg-transparent border-[2px] font-[600] border-[#c3c7cb] text-gray-500 flex justify-center items-center' onClick={clearAllListing}>Clear All</button>
                                    <button className='text-[12px] rounded-full md:px-8 xs:px-6 lg:px-8 py-1 border-[2px] border-transparent bg-[#5893A5] text-white flex justify-center items-center' onClick={handleListing}>Apply</button>
                                </div>

                            </div>

                            <div className='hidden'>
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Type something..."
                                />
                                <button onClick={handleSubmit} type="submit">Send to Parent</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SearchFilter