/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useEffect } from "react";
// import CurrencySelect from '../../../registration/Currency.jsx';
import axios from 'axios';
import { toast } from "react-toastify";
import Spinner from "../../../assets/svg/Spinner.svg"

const HousingDetails = ({  active, setActive, detailsData, setDetailsData, handleRentUser, housingLoading, setHousingLoading }) => {

    const dailyRentInput = useRef();
    const weeklyRentInput = useRef();
    const monthlyRentInput = useRef();
    const numberOfBedRoomInput = useRef();
    const numberOfBathRoomInput = useRef();
    const licenseNumberInput = useRef();

    // THIRD STATE IN THE CODE 
    // const [detailsData, setDetailsData] = useState({
    //     termOption: "",
    //     designOption: "",
    //     dailyRent: "",
    //     weeklyRent: "",
    //     monthlyRent: "",
    //     numberOfBedRoom: "",
    //     numberOfBathRoom: "",
    //     licenseNumber: "",
    //     description: "",
    //     propertyType: "",
    //     currency: "",
    //     amenitiesOption: [],
    // });

    var {
        termOption,
        designOption,
        dailyRent,
        weeklyRent,
        monthlyRent,
        numberOfBedRoom,
        numberOfBathRoom,
        licenseNumber,
        propertyType,
        description,
        currency,
        amenitiesOption
    } = detailsData;

    const handleCheckHousingDetails = async () => {
        if (
            !termOption ||
            !designOption ||
            !dailyRent ||
            !weeklyRent ||
            !monthlyRent ||
            !numberOfBedRoom ||
            !numberOfBathRoom ||
            !licenseNumber ||
            !propertyType ||
            !description ||
            !currency ||
            amenitiesOption.length === 0
        ) {
            toast.warning('Please fill in all required fields.');
            return;
        }
        // setActive(4)

        
        
        // setHousingLoading(true);
        
        console.log("all the details..", housingLoading)
        try {
            // Call handleRentUser function from props
            await handleRentUser();

            // housingLoading will be updated in the parent component after the request is completed
        } catch (error) {
            // Handle errors if needed
        }

    };


    const handleProviderThree = () => {
        handleCheckHousingDetails()


        console.log("all the hosing data...", detailsData);
        // setActive(4);
    };

    // const [selectedOption, setSelectedOption] = useState(null);

    const [currencies, setCurrencies] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [selectedCurrency, setSelectedCurrency] = useState(null);

    useEffect(() => {
        const fetchCurrencies = async () => {
            try {
                const response = await axios.get('https://currencyapi.net/api/v1/currencies', {
                    params: {
                        key: 'Ln14rvlskIx2nFKwB2JUYU80j08JUTRrqiLa',
                        output: 'JSON',
                    },
                });

                const currencyList = Object.entries(response.data.currencies).map(([code, name]) => ({
                    value: code,
                    label: `${name} (${code})`,
                }));

                setCurrencies(currencyList);
                // console.log("currency..", currencies)
                setLoading(false);
            } catch (error) {
                console.error('Error fetching currencies:', error.message, "isLoading..", loading);
            }
        };

        fetchCurrencies();
    }, []);


    const handleAmenitiesChange = (event) => {
        const { value } = event.target;

        setDetailsData(prevState => {
            let updatedAmenities = [...prevState.amenitiesOption];

            if (updatedAmenities.includes(value)) {
                updatedAmenities = updatedAmenities.filter(item => item !== value);
            } else {
                updatedAmenities.push(value);
            }

            return {
                ...prevState,
                amenitiesOption: updatedAmenities
            };
        });
    };

    const handleCurrencyChange = (e) => {
        setDetailsData(prevState => ({
            ...prevState,
            currency: e.target.value,
        }));
    };

    const handleOptionChange = (option) => {
        // setSelectedOption(option);

        setDetailsData(prevState => ({
            ...prevState,
            termOption: option,
        }));
    };

    const handleRadioChange = (option) => {
        // setSelectedOption(option);

        setDetailsData(prevState => ({
            ...prevState,
            designOption: option,
        }));
    };




    const renderPreviousForm = () => {
        console.log("all the prevoius data...", detailsData);
        setActive(active - 1);
    };



    const handleReferenceChange = (e) => {
        setDetailsData(prevState => ({
            ...prevState,
            propertyType: e.target.value,
        }));
    };

    const handleDetailsUser = (e) => setDetailsData(
        {
            ...detailsData,
            [e.target.name]: e.target.value
        }
    );

    const handleTextareaChange = (e) => setDetailsData(
        {
            ...detailsData,
            description: e.target.value
        }
    );

    const handleDailyUser = (event) => {
        const { value } = event.target;
        // console.log("all the value..", value );

        setDetailsData(prevState => ({
            ...prevState,
            dailyRent: value
        }));
    };

    const handleWeeklyUser = (event) => {
        const { value } = event.target;
        // console.log("value..", value );

        setDetailsData(prevState => ({
            ...prevState,
            weeklyRent: value
        }));
    };

    const handleMonthlyUser = (event) => {
        const { value } = event.target;
        // console.log("the value..", value );

        setDetailsData(prevState => ({
            ...prevState,
            monthlyRent: value
        }));
    };

    const handleBedRoomUser = (event) => {
        const { value } = event.target;
        // console.log("weekly..", value );

        setDetailsData({
            ...detailsData,
            numberOfBedRoom: value
        });
        // setDetailsData(prevState => ({
        //     ...prevState,
        //     [name]: value
        // }));
    };

    const handleBathUser = (event) => {
        const { value } = event.target;
        // console.log("weekly..", value );

        setDetailsData({
            ...detailsData,
            numberOfBathRoom: value
        });
        // setDetailsData(prevState => ({
        //     ...prevState,
        //     [name]: value
        // }));
    };











    return (
        <div>
            <div className="my-10">
                <div className="flex flex-col">
                    <div className="text-center my-10 font-base md:text-3xl xs:text-xl"> Housing details</div>
                </div>

                <div className="bg-[#fff9e2] py-4 px-4 text-start text-[#c29c4b] md:text-base xs:text-xs my-10">
                    Minimum short term stay is determined by landlord and local regulations.
                </div>

                <div className="grid md:grid-cols-2 xs:grid-cols-1 md:gap-16 xs:gap-5 md:w-fit xs:full my-10">
                    <div className="flex justify-center items-center flex-row">
                        <input
                            type="checkbox"
                            id="short-term"
                            name="renting"
                            className="outline-none h-5 w-5 "
                            checked={termOption === 'short-term'}
                            onChange={() => handleOptionChange('short-term')}
                        />
                        <label className="ml-2 w-full" htmlFor="short-term">Short term rental</label>
                    </div>

                    <div className="flex justify-center items-center flex-row">
                        <input
                            type="checkbox"
                            id="long-term"
                            name="renting"
                            className="outline-none h-5 w-5 "
                            checked={termOption === 'long-term'}
                            onChange={() => handleOptionChange('long-term')}
                        />
                        <label className="ml-2 w-full" htmlFor="long-term">Long term rental</label>
                    </div>
                </div>

                <select
                    onChange={handleReferenceChange}
                    value={propertyType}

                    className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md "

                >
                    <option value="Property type" className="">Property type</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Basement">Basement</option>
                    <option value="Real Estate Agent">Real Estate Agent</option>
                    <option value="Bed and Breakfast">Bed and Breakfast</option>
                    <option value="Condo">Condo</option>
                    <option value="Duplex">Duplex</option>
                    <option value="For sale">For sale</option>
                    <option value="House">House</option>
                    <option value="Maisonett">Maisonette (self contained seperate entrance)</option>
                    <option value="Room to rent">Room to rent shared communal </option>
                </select>

                <div className="relative my-10">
                    <input
                        id="dailyRent"
                        className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                        type="number"
                        ref={dailyRentInput}
                        name="dailyRent"
                        value={dailyRent}
                        onChange={handleDailyUser}
                        placeholder=" "
                    />
                    <label
                        htmlFor="dailyRent"
                        className="label absolute md:mt-2 xs:mt-0 ml-3 leading-tighter text-gray-600 text-base cursor-text bg-transparent"
                    >
                        Daily Rent
                    </label>
                </div>

                <div className="relative my-10">
                    <input
                        id="weeklyRent"
                        className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                        type="number"
                        ref={weeklyRentInput}
                        name="weeklyRent"
                        value={weeklyRent}
                        onChange={handleWeeklyUser}
                        placeholder=" "
                    />
                    <label
                        htmlFor="weeklyRent"
                        className="label absolute md:mt-2 xs:mt-0 ml-3 leading-tighter text-gray-600 text-base cursor-text bg-transparent"
                    >
                        Weekly Rent
                    </label>
                </div>

                <div className="relative my-10">
                    <input
                        id="monthlyRent"
                        className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                        type="number"
                        ref={monthlyRentInput}
                        name="monthlyRent"
                        value={monthlyRent}
                        onChange={handleMonthlyUser}
                        placeholder=" "
                    />
                    <label
                        htmlFor="monthlyRent"
                        className="label absolute md:mt-2 xs:mt-0 ml-3 leading-tighter text-gray-600 text-base cursor-text bg-transparent"
                    >
                        Monthly Rent
                    </label>
                </div>

                <div>
                    {/* <CurrencySelect /> */}
                    <div className="">


                        {currencies ? (
                            <select
                                onChange={handleCurrencyChange}
                                value={currency}
                                className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                            >
                                <option value="">Select a Currency</option>
                                {currencies?.map((currency, index) => (
                                    <option key={index} value={currency.value}>
                                        {currency.label}
                                    </option>
                                ))}
                            </select>

                        ) : (
                            <div>loading</div>
                        )}
                    </div>
                </div>

                <div className="relative my-10">
                    <input
                        id="numberOfBedRoom"
                        className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                        type="number"
                        ref={numberOfBedRoomInput}
                        name="numberOfBedRoom"
                        value={numberOfBedRoom}
                        onChange={handleBedRoomUser}
                        placeholder=" "
                    />
                    <label
                        htmlFor="numberOfRoom"
                        className="label absolute md:mt-2 xs:mt-0 ml-3 leading-tighter text-gray-600 text-base cursor-text bg-transparent"
                    >
                        Number of Bedrooms
                    </label>
                </div>

                <div className="relative my-10">
                    <input
                        id="numberOfBathRoom"
                        className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                        type="number"
                        ref={numberOfBathRoomInput}
                        name="numberOfBathRoom"
                        value={numberOfBathRoom}
                        onChange={handleBathUser}
                        placeholder=" "
                    />
                    <label
                        htmlFor="numberOfBathRoom"
                        className="label absolute md:mt-2 xs:mt-0 ml-3 leading-tighter text-gray-600 text-base cursor-text bg-transparent"
                    >
                        Number of Bathrooms
                    </label>
                </div>

                <div className=" grid md:grid-cols-2 xs:grid-cols-1 md:gap-16 xs:gap-5  md:w-fit xs:full my-10">


                    <div className="flex justify-center items-center flex-row">
                        <input
                            type="radio"
                            id="furnished"
                            name="renting"
                            value="furnished"
                            className="outline-none h-5 w-5 "
                            // checked={designOption === 'furnished'}
                            onChange={() => handleRadioChange('furnished')}
                        />
                        <label htmlFor="furnished" className="ml-2 w-full">Furnished</label>
                    </div>

                    <div className="flex justify-center items-center flex-row">
                        <input
                            type="radio"
                            id="unfurnished"
                            name="renting"
                            value="unfurnished"
                            className="outline-none h-5 w-5 "
                            // checked={designOption === 'unfurnished'}
                            onChange={() => handleRadioChange('unfurnished')}
                        />
                        <label htmlFor="unfurnished" className="ml-2 w-full">Unfurnished</label>
                    </div>
                </div>

                <h1 className="font-normal md:text-2xl xs:text-lg">Amenities</h1>



                <div className="flex items-center my-3">
                    <input
                        type="checkbox"
                        id="nearMedSchool"
                        name="renting"
                        className="outline-none h-4 w-4"
                        value="Near Med School/Hospital (within 20 minutes by car)"
                        checked={amenitiesOption && amenitiesOption?.includes("Near Med School/Hospital (within 20 minutes by car)")}
                        onChange={handleAmenitiesChange}
                    />
                    <label htmlFor="nearMedSchool" className="ml-4 md:text-base xs:text-xs w-full">Near Med School/Hospital (within 20 minutes by car)</label>
                </div>

                <div className="flex items-center my-3">
                    <input
                        type="checkbox"
                        id="walkable"
                        name="renting"
                        className="outline-none h-4 w-4"
                        value="Walkable to Public Transit/Shopping/Amenities"
                        checked={amenitiesOption && amenitiesOption?.includes("Walkable to Public Transit/Shopping/Amenities")}
                        onChange={handleAmenitiesChange}
                    />
                    <label htmlFor="walkable" className="ml-4 md:text-base xs:text-xs w-full">Walkable to Public Transit/Shopping/Amenities</label>
                </div>

                <div className="flex items-center my-3">
                    <input
                        type="checkbox"
                        id="public"
                        name="renting"
                        className="outline-none h-4 w-4"
                        value="Video Virtual Tour Available"
                        checked={amenitiesOption && amenitiesOption?.includes("Video Virtual Tour Available")}
                        onChange={handleAmenitiesChange}
                    />
                    <label htmlFor="public" className="ml-4 md:text-base xs:text-xs w-full">Video Virtual Tour Available</label>
                </div>

                <div className="flex items-center my-3">
                    <input
                        type="checkbox"
                        id="utilities"
                        name="renting"
                        className="outline-none h-4 w-4"
                        value="All Utilities included"
                        checked={amenitiesOption && amenitiesOption?.includes("All Utilities included")}
                        onChange={handleAmenitiesChange}
                    />
                    <label htmlFor="utilities" className="ml-4 md:text-base xs:text-xs w-full">All Utilities included</label>
                </div>

                <div className="flex items-center my-3">
                    <input
                        type="checkbox"
                        id="someutilities"
                        name="renting"
                        className="outline-none h-4 w-4"
                        value="Some utilities included"
                        checked={amenitiesOption && amenitiesOption?.includes("Some utilities included")}
                        onChange={handleAmenitiesChange}
                    />
                    <label htmlFor="someutilities" className="ml-4 md:text-base xs:text-xs w-full">Some utilities included</label>
                </div>

                <div className="flex items-center my-3">
                    <input
                        type="checkbox"
                        id="gym"
                        name="renting"
                        className="outline-none h-4 w-4"
                        value="Gym/Fitness room"
                        checked={amenitiesOption && amenitiesOption?.includes("Gym/Fitness room")}
                        onChange={handleAmenitiesChange}
                    />
                    <label htmlFor="gym" className="ml-4 md:text-base xs:text-xs w-full">Gym/Fitness room</label>
                </div>

                <div className="flex items-center my-3">
                    <input
                        type="checkbox"
                        id="pool"
                        name="renting"
                        className="outline-none h-4 w-4"
                        value="Pool"
                        checked={amenitiesOption && amenitiesOption?.includes("Pool")}
                        onChange={handleAmenitiesChange}
                    />
                    <label htmlFor="pool" className="ml-4 md:text-base xs:text-xs w-full">Pool</label>
                </div>

                <div className="flex items-center my-3">
                    <input
                        type="checkbox"
                        id="pet"
                        name="renting"
                        className="outline-none h-4 w-4"
                        value="Pet friendly"
                        checked={amenitiesOption && amenitiesOption?.includes("Pet friendly")}
                        onChange={handleAmenitiesChange}
                    />
                    <label htmlFor="Pet" className="ml-4 md:text-base xs:text-xs w-full">Pet friendly</label>
                </div>

                <div className="flex items-center my-3">
                    <input
                        type="checkbox"
                        id="petallowed"
                        name="renting"
                        className="outline-none h-4 w-4"
                        value="No pets allowed"
                        checked={amenitiesOption && amenitiesOption?.includes("No pets allowed")}
                        onChange={handleAmenitiesChange}
                    />
                    <label htmlFor="petallowed" className="ml-4 md:text-base xs:text-xs w-full">No pets allowed</label>
                </div>

                <div className="flex items-center my-3">
                    <input
                        type="checkbox"
                        id="parking"
                        name="renting"
                        className="outline-none h-4 w-4"
                        value="Available Parking (may or may not be included in rent)"
                        checked={amenitiesOption && amenitiesOption?.includes("Available Parking (may or may not be included in rent)")}
                        onChange={handleAmenitiesChange}
                    />
                    <label htmlFor="parking" className="ml-4 md:text-base xs:text-xs w-full">Available Parking (may or may not be included in rent)</label>
                </div>

                <div className="flex items-center my-3">
                    <input
                        type="checkbox"
                        id="indoorparking"
                        name="renting"
                        className="outline-none h-4 w-4"
                        value="Indoor Parking (may or may not be included in rent)"
                        checked={amenitiesOption && amenitiesOption?.includes("Indoor Parking (may or may not be included in rent)")}
                        onChange={handleAmenitiesChange}
                    />
                    <label htmlFor="indoorparking" className="ml-4 md:text-base xs:text-xs w-full">Indoor Parking (may or may not be included in rent)</label>
                </div>

                <div className="flex items-center my-3">
                    <input
                        type="checkbox"
                        id="laundry"
                        name="renting"
                        className="outline-none h-4 w-4"
                        value="In-unit Laundry"
                        checked={amenitiesOption && amenitiesOption?.includes("In-unit Laundry")}
                        onChange={handleAmenitiesChange}
                    />
                    <label htmlFor="laundry" className="ml-4 md:text-base xs:text-xs w-full">In-unit Laundry</label>
                </div>

                <div className="flex items-center my-3">
                    <input
                        type="checkbox"
                        id="a/c"
                        name="renting"
                        className="outline-none h-4 w-4"
                        value="A/C"
                        checked={amenitiesOption && amenitiesOption?.includes("A/C")}
                        onChange={handleAmenitiesChange}
                    />
                    <label htmlFor="a/c" className="ml-4 md:text-base xs:text-xs w-full">A/C</label>
                </div>

                <div className="flex items-center my-3">
                    <input
                        type="checkbox"
                        id="child"
                        name="renting"
                        className="outline-none h-4 w-4"
                        value="Child friendly"
                        checked={amenitiesOption && amenitiesOption?.includes("Child friendly")}
                        onChange={handleAmenitiesChange}
                    />
                    <label htmlFor="child" className="ml-4 md:text-base xs:text-xs w-full">Child friendly</label>
                </div>

                <div className="flex items-center my-3">
                    <input
                        type="checkbox"
                        id="dishwasher"
                        name="renting"
                        className="outline-none h-4 w-4"
                        value="Dishwasher"
                        checked={amenitiesOption && amenitiesOption?.includes("Dishwasher")}
                        onChange={handleAmenitiesChange}
                    />
                    <label htmlFor="dishwasher" className="ml-4 md:text-base xs:text-xs w-full">Dishwasher</label>
                </div>

                <div className="flex items-center my-3">
                    <input
                        type="checkbox"
                        id="site"
                        name="renting"
                        className="outline-none h-4 w-4"
                        value="On Site Concierge 24 hours"
                        checked={amenitiesOption && amenitiesOption?.includes("On Site Concierge 24 hours")}
                        onChange={handleAmenitiesChange}
                    />
                    <label htmlFor="site" className="ml-4 md:text-base xs:text-xs w-full">On Site Concierge 24 hours</label>
                </div>

                <div className="flex items-center my-3">
                    <input
                        type="checkbox"
                        id="charger"
                        name="renting"
                        className="outline-none h-4 w-4"
                        value="EV Charger on premises or nearby"
                        checked={amenitiesOption && amenitiesOption?.includes("EV Charger on premises or nearby")}
                        onChange={handleAmenitiesChange}
                    />
                    <label htmlFor="charger" className="ml-4 md:text-base xs:text-xs w-full">EV Charger on premises or nearby</label>
                </div>

                <div className="flex items-center my-3">
                    <input
                        type="checkbox"
                        id="landlord"
                        name="renting"
                        className="outline-none h-4 w-4"
                        value="Landlord is a member of the medical community"
                        checked={amenitiesOption && amenitiesOption?.includes("Landlord is a member of the medical community")}
                        onChange={handleAmenitiesChange}
                    />
                    <label htmlFor="landlord" className="ml-4 md:text-base xs:text-xs w-full">Landlord is a member of the medical community</label>
                </div>

                <div className="flex items-center my-3">
                    <input
                        type="checkbox"
                        id="smoking"
                        name="renting"
                        className="outline-none h-4 w-4"
                        value="No smoking/vaping/cannabis"
                        checked={amenitiesOption && amenitiesOption?.includes("No smoking/vaping/cannabis")}
                        onChange={handleAmenitiesChange}
                    />
                    <label htmlFor="smoking" className="ml-4 md:text-base xs:text-xs w-full">No smoking/vaping/cannabis</label>
                </div>

                <div className="flex items-center my-3">
                    <input
                        type="checkbox"
                        id="balcony"
                        name="renting"
                        className="outline-none h-4 w-4"
                        value="Outdoor space/Balcony/Backyard"
                        checked={amenitiesOption && amenitiesOption?.includes("Outdoor space/Balcony/Backyard")}
                        onChange={handleAmenitiesChange}
                    />
                    <label htmlFor="balcony" className="ml-4 md:text-base xs:text-xs w-full">Outdoor space/Balcony/Backyard</label>
                </div>

                <div className="flex items-center my-3">
                    <input
                        type="checkbox"
                        id="bath"
                        name="renting"
                        className="outline-none h-4 w-4"
                        value="Private Bath"
                        checked={amenitiesOption && amenitiesOption?.includes("Private Bath")}
                        onChange={handleAmenitiesChange}
                    />
                    <label htmlFor="bath" className="ml-4 md:text-base xs:text-xs w-full">Private Bath</label>
                </div>

                <div className="flex items-center my-3">
                    <input
                        type="checkbox"
                        id="living"
                        name="renting"
                        className="outline-none h-4 w-4"
                        value="Shared Living Space"
                        checked={amenitiesOption && amenitiesOption?.includes("Shared Living Space")}
                        onChange={handleAmenitiesChange}
                    />
                    <label htmlFor="living" className="ml-4 md:text-base xs:text-xs w-full">Shared Living Space</label>
                </div>

                <div className="flex items-center my-3">
                    <input
                        type="checkbox"
                        id="wheelchair"
                        name="renting"
                        className="outline-none h-4 w-4"
                        value="Wheelchair accessible"
                        checked={amenitiesOption && amenitiesOption?.includes("Wheelchair accessible")}
                        onChange={handleAmenitiesChange}
                    />
                    <label htmlFor="wheelchair" className="ml-4 md:text-base xs:text-xs w-full">Wheelchair accessible</label>
                </div>

                <div className="flex items-center my-3">
                    <input
                        type="checkbox"
                        id="housing"
                        name="renting"
                        className="outline-none h-4 w-4"
                        value="Housing for Healthcare project"
                        checked={amenitiesOption && amenitiesOption?.includes("Housing for Healthcare project")}
                        onChange={handleAmenitiesChange}
                    />
                    <label htmlFor="housing" className="ml-4 md:text-base xs:text-xs w-full">Housing for Healthcare project</label>
                </div>

                <div className="relative my-0">
                    <input
                        id="licenseNumber"
                        className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                        type="text"
                        ref={licenseNumberInput}
                        name="licenseNumber"
                        value={licenseNumber}
                        onChange={handleDetailsUser}
                        placeholder=" "
                    />
                    <label
                        htmlFor="text"
                        className="label absolute md:mt-2 xs:mt-0 ml-3 leading-tighter text-gray-600 text-base cursor-text bg-transparent"
                    >
                        Lincense Number
                    </label>
                </div>
                <div className="mt-2 md:text-xs xs:text-[10px]">Many cities require landlord licensing. Check your local laws. We provide this field to post registration number.</div>


                <div className="bg-[#fff9e2] py-4 px-4 text-start text-[#c29c4b] md:text-base xs:text-xs my-10">
                    MediRent will automatically select the nearest medical school and hospital to your location, but you can always change it later in your dashboard.
                </div>

                <div className="bg-[#fff9e2] py-4 px-4 text-start text-[#c29c4b] md:text-base xs:text-xs my-10">
                    Do not post any links to outside web sites, phone numbers or email address for your own security and privacy. They will be removed.
                </div>

                <div
                    className="md:mt-2 xs:mt-0 leading-tighter text-gray-900 text-base cursor-text bg-transparent my-3"
                >
                    Description:
                </div>

                <div className="relative my-0">
                    <textarea
                        value={description}
                        onChange={handleTextareaChange}
                        rows="8"
                        cols="8"
                        className="w-full px-6 border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
                    ></textarea>
                </div>

                <div className="flex justify-between pb-10">
                    <div className="flex justify-end z-10 relative mt-4  mr-3">
                        

                        <button
                            onClick={handleProviderThree}
                            className="flex justify-end items-center z-10 relative bg-third text-white md:text-sm rounded-lg md:py-3 md:px-16 xs:text-[15px] xs:py-3 xs:px-4"
                            disabled={housingLoading} // Disable the button when userLoading is true
                        >
                            {housingLoading ? ( // Display spinner if userLoading is true
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

export default HousingDetails