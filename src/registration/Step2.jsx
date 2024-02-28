// Step2.jsx
import React, { useState } from 'react';
import './reg.css'
import CountrySelect from './CountrySelect';


const Step2 = ({ onNextBox, onPrevBox }) => {
    const [chosenBox, setChosenBox] = useState(null);

    const handleChoose = (boxNumber) => {
        setChosenBox(boxNumber);
        // Do not call onNextboX here
    };

    const isBoxChosen = (boxNumber) => {
        return chosenBox === boxNumber;
    };
    const [setButton, setButtonVisible] = useState(true);
    const handleButtonClick = () => {
        setButtonVisible(false);
    };
    const [formData, setFormData] = useState({
        listingTitle: "",
        address: "",
        city: "",
        country: "",
        province: "",
        postalCode: "",
        phoneNumber: "",
    });
    const [selectedFunction, setSelectedFunction] = useState("");
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
        }));
    };
    return (
        <div className="registration-page " >
            <h1 className='text-center text-3xl mb-10 mt-20 font-normal'>Select your package</h1>
            <div className="flex justify-between">
                {/* Square 1 */}
                <div
                    className={`square border-4 border-gray-500 rounded-lg p-0 text-center h-10 ${isBoxChosen(1) ? 'chosen' : ''
                        }`}
                    onClick={() => handleChoose(1)}
                >
                    {/* <div className="flex items-center mb-2"> */}
                    <div className="info-icon">i</div>
                    <div className=" para info-text text-blue-500 text-1xl ml-2 font-bold">MedsGold</div>
                    {/* </div> */}
                    {/* Remaining content for Square 1 */}
                    <div className=" para text-blue-500 text-1xl mb-2 text-center font-bold">Yearly</div>
                    <div className="text-gray-700 text-lg mb-2 font-semibold">$129.00 <sub>/Year</sub></div>
                    <div className="text-gray-500 text-xs"></div>
                    {/* <button
                        className={`choose-btn bg-gray-300 border-3 border-gray-300 rounded p-2 mt-4`}
                        onClick={() => onNextBox()}
                    >
                        {chosenBox ? 'Choose' : 'selected'}
                    </button> */}
                    <button
                        className={`choose-btn bg-gray-300 border-3 border-gray-300 rounded p-2 mt-4`}
                        onClick={() => onNextBox()}
                    >
                        {isBoxChosen(1) ? 'Selected' : 'Choose'}
                    </button>
                </div>

                {/* Square 2 */}
                <div
                    className={`square border-4 border-gray-500 rounded-lg p-0 text-center ${isBoxChosen(2) ? 'chosen' : ''
                        }`}
                    onClick={() => handleChoose(2)}
                >
                    {/* <div className="flex items-center mb-2"> */}
                    <div className="info-icon">i</div>
                    <div className=" para info-text text-blue-500 text-1xl ml-2 font-bold">MedsBasic</div>
                    {/* </div> */}
                    {/* Remaining content for Square 1 */}
                    <div className=" para text-blue-500 text-1xl mb-2 text-center font-bold">Yearly</div>
                    <div className="text-gray-700 text-lg mb-2 font-semibold">$89.00 <sub>/Year</sub></div>
                    <div className="text-gray-500 text-xs"></div>
                    <button
                        className={`choose-btn bg-gray-300 border-3 border-gray-300 rounded p-2 mt-4`}
                        onClick={() => onNextBox()}
                    >
                        {isBoxChosen(2) ? 'Selected' : 'Choose'}
                    </button>
                </div>

                <div
                    className={`square border-4 border-gray-500 rounded-lg p-0 text-center ${isBoxChosen(3) ? 'chosen' : ''
                        }`}
                    onClick={() => handleChoose(3)}
                >
                    <div className="info-icon">i</div>
                    <div className=" para info-text text-blue-500 text-1xl ml-2 font-bold">MedsBasic</div>
                    <div className=" para text-blue-500 text-1xl mb-2 text-center font-bold">Monthly</div>
                    <div className="text-gray-700 text-lg mb-2 font-semibold">$19.00 <sub>/MONTH</sub></div>
                    <div className="text-gray-500 text-xs"></div>
                    <button
                        className={`choose-btn bg-gray-300 border-3 border-gray-300 rounded p-2 mt-4`}
                        onClick={() => onNextBox()}
                    >
                        {isBoxChosen(3) ? 'Selected' : 'Choose'}
                    </button>
                </div>
            </div>
            <h1 className='text-3xl text-center mb-10 mt-10 font-normal'>Housing information</h1>
            <form action="">
                <div className="">
                    <input
                        type="text"
                        name="lastName"
                        value={formData.email}
                        onChange={handleChange}
                        className="outline-none mt-1 p-4 w-full border border-gray-300  rounded"
                        placeholder="Listing Title"
                        required

                    />
                </div>
                <p className='mb-8'>For listing, make it short and eye catching
                </p>
                <div className="mb-8">
                    <input
                        type="text"
                        name="lastName"
                        value={formData.confirmEmail}
                        onChange={handleChange}
                        className="outline-none mt-1 p-4 w-full border border-gray-300  rounded"
                        placeholder="Address"
                        required
                    />
                </div>
                <div className="mb-8">
                    <input
                        type="text"
                        name="lastName"
                        value={formData.address}
                        onChange={handleChange}
                        className="outline-none mt-1 p-4 w-full border border-gray-300  rounded"
                        placeholder="City"
                        required
                    />
                </div>
                <CountrySelect />
                <div className="mb-8">
                    <input
                        type="text"
                        name="lastName"
                        value={formData.city}
                        onChange={handleChange}
                        className="outline-none mt-1 p-4 w-full border border-gray-300  rounded"
                        placeholder="Province/State"
                        required
                    />
                </div>
                <div className="mb-8">
                    <input
                        type="text"
                        name="lastName"
                        value={formData.city}
                        onChange={handleChange}
                        className="outline-none mt-1 p-4 w-full border border-gray-300  rounded"
                        placeholder="Postal code"
                        required
                    />
                </div>
                <div className="mb-8">
                    <input
                        type="text"
                        name="lastName"
                        value={formData.city}
                        onChange={handleChange}
                        className="outline-none mt-1 p-4 w-full border border-gray-300  rounded"
                        placeholder="cell phonr number"
                        required
                    />
                </div>

                {setButton && <button onClick={() => setButtonVisible(false)} className='bg-blue-800 w-1/2 px-10 text-white rounded py-2 ' >Upgrade to MedsGold to access the feature</button>}
                <h2 className='mt-8 text-2xl'>Enter your promo code below:</h2>
                <input type="tel" className="outline-none mt-1 p-4 w-full border border-gray-300 rounded" placeholder="promotion code" />
                <button className='bg-blue-800 text-white px-9 py-2 rounded p mt-3'>Apply</button>

            </form>




        </div >
    );
};

export default Step2;
