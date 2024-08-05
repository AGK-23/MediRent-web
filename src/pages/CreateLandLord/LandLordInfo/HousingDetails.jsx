/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from 'axios';
import { toast } from "react-toastify";
import Spinner from "../../../assets/svg/Spinner.svg"
import CustomInputs from "../../../components/Custom-components/CustomInputs";
import CustomSelect from "../../../components/Custom-components/Custom-Select";


const HousingDetails = ({ active, setActive, detailsData, setDetailsData, handleRentUser, housingLoading, setHousingLoading }) => {


    var {
        numberOfBedRoom,
        numberOfBathRoom,
        numberOfKitchens,
        price,
        buildYear,
        propertySize,
        area,
        starRating,
        propertyType,
        description,
        amenitiesOption
    } = detailsData;

    const handleCheckHousingDetails = async () => {
        if (
            
            !numberOfBedRoom ||
            !numberOfBathRoom ||
            !numberOfKitchens ||
            !price ||
            !buildYear ||
            !propertySize ||
            !area ||
            !propertyType ||
            !description ||
            amenitiesOption.length === 0
        ) {
            toast.warning('Please fill in all required fields.');
            return;
        }

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

    const [currencies, setCurrencies] = useState([]);
    // eslint-disable-next-line no-unused-vars
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
                console.error('Error fetching currencies:', error.message);
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

    const handlePropertyType = (value) => {
        // console.log("value", value);
        setDetailsData(prevState => ({
            ...prevState,
            propertyType: value,
        }));
    };

    const renderPreviousForm = () => {
        console.log("all the prevoius data...", detailsData);
        setActive(active - 1);
    };

    const handleBedRoomUser = (value) => {
        setDetailsData({
            ...detailsData,
            numberOfBedRoom: parseInt(value)
        });
    };

    const handleBathUser = (value) => {
        setDetailsData({
            ...detailsData,
            numberOfBathRoom: parseInt(value)
        });
    };

    const handleKitchenUser = (value) => {

        // console.log("kitchen..", typeof parseInt(value))
        setDetailsData({
            ...detailsData,
            numberOfKitchens: parseInt(value)
        });
    };

    const handlePriceUser = (value) => {
        setDetailsData({
            ...detailsData,
            price: value
        });
    };

    const handleBuildYearUser = (value) => {
        setDetailsData({
            ...detailsData,
            buildYear: value
        });
    };

    const handlePropertySizeUser = (value) => {
        setDetailsData({
            ...detailsData,
            propertySize: value
        });
    };

    const handleAreaUser = (value) => {
        setDetailsData({
            ...detailsData,
            area: value
        });
    };

    const handleDescriptionUser = (value) => {
        // console.log("description..", value);
        setDetailsData({
            ...detailsData,
            description: value
        });
    };

    return (
        <div>
            <div className="my-0">
                <div className="mt-0 text-start">
                    <h1 className="md:text-[24px] xs:text-[20px] text-start text-black font-semibold">
                        Add Property Features
                    </h1>

                    <div className="mt-1 font-normal">
                        <p className="text-[#717171] text-start text-[12px]">
                            Enter all the essential details and amenities of your property to attract potential tenants.
                        </p>
                    </div>
                </div>

                {/* <div className="grid md:grid-cols-2 xs:grid-cols-1 md:gap-16 xs:gap-5 md:w-fit xs:full my-10">
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
                </div> */}

                {/* <select
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
                </select> */}

                <div className="flex md:flex-row xs:flex-col gap-5 my-5">
                    <div className={`form-group flex w-[100%] text-[.8rem] my-0 font-semibold`}>
                        Housing Details
                    </div>

                    <div className={`form-group flex w-[100%] text-[.8rem] my-0 text-[#717171] text-end md:justify-end xs:justify-start`}>
                        <span className="text-red-500 mr-1">*</span> indicates required field
                    </div>
                </div>

                <div className="flex md:flex-row xs:flex-col gap-10 my-10">
                    <div className={`form-group flex w-[100%] text-[1rem] my-0`}>
                        <CustomSelect
                            wrapperClass=' !h-[58px] !w-full !px-[12px]'
                            labelClass=' text-black w-full text-gray-500'
                            optionsClass='!text-[0.875rem] !h-[48px] !w-[100%] !text-black'
                            optionWrapperClass=' w-[100%] !w-full border-[1px] shadow-lg border-gray-200 xl:left-[0px] !left-[0px] !h-[400px] !bottom-[-410px] overflow-y-auto '
                            // otherOptions={true}
                            label='Property Type'
                            setSelected={handlePropertyType}
                            selected={propertyType}
                            options={[
                                {
                                    label: 'House',
                                    value: 'House'
                                },
                                {
                                    label: 'Commercial',
                                    value: 'Commercial'
                                },
                                {
                                    label: 'Apartment',
                                    value: 'Apartment'
                                },
                                {
                                    label: 'Duplex',
                                    value: 'Duplex'
                                }
                            ]}
                        />
                    </div>
                    <div className={`form-group flex w-[100%] text-[1rem] my-0`}>
                        <CustomInputs
                            id="bedRoom"
                            type='number'
                            required
                            // setValue={setFormData}
                            value={parseInt(numberOfBedRoom)}
                            showRequirement={true}
                            onChange={handleBedRoomUser}
                            label={'Bed room'}
                            className='px-0 mb-[5px] md:w-full xs:w-full text-[16px]'
                        />
                    </div>

                </div>

                <div className="flex md:flex-row xs:flex-col gap-10 my-10">
                    <div className={`form-group flex w-[100%] text-[1rem] my-0`}>
                        <CustomInputs
                            id="bedRoom"
                            type='number'
                            required
                            // setValue={setFormData}
                            value={numberOfBathRoom}
                            showRequirement={true}
                            onChange={handleBathUser}
                            label={'Bath room'}
                            className='px-0 mb-[5px] md:w-full xs:w-full text-[16px]'
                        />
                    </div>
                    <div className={`form-group flex w-[100%] text-[1rem] my-0`}>
                        <CustomInputs
                            id="Kitchen"
                            type='number'
                            required
                            // setValue={setFormData}
                            value={numberOfKitchens}
                            showRequirement={true}
                            onChange={handleKitchenUser}
                            label={'Kitchen'}
                            className='px-0 mb-[5px] md:w-full xs:w-full text-[16px]'
                        />
                    </div>

                </div>

                <div className="flex md:flex-row xs:flex-col gap-10 my-10">
                    <div className={`form-group flex w-[100%] text-[1rem] my-0`}>
                        <CustomInputs
                            id="price"
                            type='number'
                            required
                            // setValue={setFormData}
                            value={price}
                            showRequirement={true}
                            onChange={handlePriceUser}
                            label={'Price'}
                            className='px-0 mb-[5px] md:w-full xs:w-full text-[16px]'
                        />
                    </div>
                    <div className={`form-group flex w-[100%] text-[1rem] my-0`}>
                        <CustomInputs
                            id="buildYear"
                            type='number'
                            required
                            // setValue={setFormData}
                            value={buildYear}
                            showRequirement={true}
                            onChange={handleBuildYearUser}
                            label={'Build Year'}
                            className='px-0 mb-[5px] md:w-full xs:w-full text-[16px]'
                        />
                    </div>

                </div>

                <div className="flex md:flex-row xs:flex-col gap-10 my-10">
                    <div className={`form-group flex w-[100%] text-[1rem] my-0`}>

                        <CustomInputs
                            id="propertySize"
                            type='number'
                            required
                            // setValue={setFormData}
                            value={propertySize}
                            showRequirement={true}
                            onChange={handlePropertySizeUser}
                            label={'Property Size'}
                            className='px-0 mb-[5px] md:w-full xs:w-full text-[16px]'
                        />
                    </div>
                    <div className={`form-group flex w-[100%] text-[1rem] my-0`}>
                        <CustomInputs
                            id="area"
                            type='number'
                            required
                            value={area}
                            showRequirement={true}
                            onChange={handleAreaUser}
                            label={'Area'}
                            className='px-0 mb-[5px] md:w-full xs:w-full text-[16px]'
                        />
                    </div>

                </div>

                <div className="flex md:flex-row xs:flex-col gap-10 my-10">
                    <div className={`form-group flex w-[100%] text-[1rem] my-0`}>

                        <CustomInputs
                            id="description"
                            type='text'
                            required
                            inputType="textarea"
                            showRequirement={true}
                            onChange={handleDescriptionUser}
                            label={'Description'}
                            className='px-0 mb-[5px] md:w-full xs:w-full text-[16px] !h-[200px]'
                            value={description}                           
                        />
                    </div>
                    

                </div>               

                <div className="text-start my-6 font-semibold md:text-[16px] xs:text-[13px]">Features and Amenities</div>


                <div className="w-fit">
                    <div className="grid md:grid-cols-3 xs:grid-cols-1 md:gap-10 xs:gap-0">
                        <div className="flex items-center my-3">
                            <input
                                type="checkbox"
                                id="Fully Furnished"
                                name="Fully Furnished"
                                className="outline-none h-6 w-6"
                                value="Fully Furnished"
                                checked={amenitiesOption && amenitiesOption?.includes("Fully Furnished")}
                                onChange={handleAmenitiesChange}
                            />
                            <label htmlFor="Fully Furnished" className="text-[#717171] ml-4 md:text-base xs:text-xs w-full">Fully Furnished</label>
                        </div>

                        <div className="flex items-center my-3">
                            <input
                                type="checkbox"
                                id="Treated Water Supply"
                                name="Treated Water Supply"
                                className="outline-none h-6 w-6"
                                value="Treated Water Supply"
                                checked={amenitiesOption && amenitiesOption?.includes("Treated Water Supply")}
                                onChange={handleAmenitiesChange}
                            />
                            <label htmlFor="Treated Water Supply" className="text-[#717171] ml-4 md:text-base xs:text-xs w-full">Treated Water Supply</label>
                        </div>

                        <div className="flex items-center my-3">
                            <input
                                type="checkbox"
                                id="Garden"
                                name="Garden"
                                className="outline-none h-6 w-6"
                                value="Garden"
                                checked={amenitiesOption && amenitiesOption?.includes("Garden")}
                                onChange={handleAmenitiesChange}
                            />
                            <label htmlFor="Garden" className="text-[#717171] ml-4 md:text-base xs:text-xs w-full">Garden</label>
                        </div>

                    </div>

                    <div className="grid md:grid-cols-3 xs:grid-cols-1 md:gap-10 xs:gap-0">
                        <div className="flex items-center my-3">
                            <input
                                type="checkbox"
                                id="24/7 Power Supply"
                                name="24/7 Power Supply"
                                className="outline-none h-6 w-6"
                                value="24/7 Power Supply"
                                checked={amenitiesOption && amenitiesOption?.includes("24/7 Power Supply")}
                                onChange={handleAmenitiesChange}
                            />
                            <label htmlFor="24/7 Power Supply" className="text-[#717171] ml-4 md:text-base xs:text-xs w-full">24/7 Power Supply</label>
                        </div>

                        <div className="flex items-center my-3">
                            <input
                                type="checkbox"
                                id="Secure Parking"
                                name="Secure Parking"
                                className="outline-none h-6 w-6"
                                value="Secure Parking"
                                checked={amenitiesOption && amenitiesOption?.includes("Secure Parking")}
                                onChange={handleAmenitiesChange}
                            />
                            <label htmlFor="Secure Parking" className="text-[#717171] ml-4 md:text-base xs:text-xs w-full">Secure Parking</label>
                        </div>

                        <div className="flex items-center my-3">
                            <input
                                type="checkbox"
                                id="Proximity to Medical Facilities"
                                name="Proximity to Medical Facilities"
                                className="outline-none h-6 w-6"
                                value="Proximity to Medical Facilities"
                                checked={amenitiesOption && amenitiesOption?.includes("Proximity to Medical Facilities")}
                                onChange={handleAmenitiesChange}
                            />
                            <label htmlFor="Proximity to Medical Facilities" className="text-[#717171] ml-4 md:text-base xs:text-xs w-full">Proximity to Medical Facilities</label>
                        </div>

                    </div>

                    <div className="grid md:grid-cols-3 xs:grid-cols-1 md:gap-10 xs:gap-0">
                        <div className="flex items-center my-3">
                            <input
                                type="checkbox"
                                id="High-Speed Internet"
                                name="High-Speed Internet"
                                className="outline-none h-6 w-6"
                                value="High-Speed Internet"
                                checked={amenitiesOption && amenitiesOption?.includes("High-Speed Internet")}
                                onChange={handleAmenitiesChange}
                            />
                            <label htmlFor="High-Speed Internet" className="text-[#717171] ml-4 md:text-base xs:text-xs w-full">High-Speed Internet</label>
                        </div>

                        <div className="flex items-center my-3">
                            <input
                                type="checkbox"
                                id="Community Spaces"
                                name="Community Spaces"
                                className="outline-none h-6 w-6"
                                value="Community Spaces"
                                checked={amenitiesOption && amenitiesOption?.includes("Community Spaces")}
                                onChange={handleAmenitiesChange}
                            />
                            <label htmlFor="Community Spaces" className="text-[#717171] ml-4 md:text-base xs:text-xs w-full">Community Spaces</label>
                        </div>
                    </div>                
                </div>
            
                <div className="flex justify-end pb-10 w-full gap-2">
                    {/* <div className="flex justify-end z-10 relative mt-4 ">
                        <button
                            onClick={renderPreviousForm}
                            className="flex justify-end z-10 relative bg-white border-[1px] border-gray-400 text-gray-400 md:text-sm rounded-full md:py-3 md:px-8 xs:text-[15px] xs:py-1 xs:px-8"
                        >
                            <span className="">Previous</span>
                        </button>
                    </div> */}
                    <div className="flex justify-end z-10 relative mt-4">
                        <button
                            onClick={handleProviderThree}
                            className="flex justify-end items-center z-10 relative bg-[#F97262] text-white md:text-sm rounded-full md:py-3 md:px-12 xs:text-[15px] xs:py-1 xs:px-8"
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
                </div>

                
            </div>
        </div>
    )
}

export default HousingDetails