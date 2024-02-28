import React from 'react';

const Payment = ({ closeModal }) => {
    const handlePayment = () => {
        // Handle payment logic here
        // For example, you may want to make an API call for payment processing
        // After successful payment, you can close the modal
        closeModal(); // Close the modal after payment
    };

    return (
        <div className="h-72 flex items-center justify-center text-center   ">
            <div className="bg-gray-100 p-8 rounded-lg ">
                <h2 className="text-black text-xl text-center mt-4">Medhousing.com</h2>
                <p className='text-center'>SES@gmail.com</p>

                <hr className="border-t mt-4 mb-4 border-gray-300" />

                {/* Payment Form */}
                <form>
                    {/* Card Number */}
                    <div className="border">

                        <input
                            type="text"
                            id="cardNumber"
                            className="w-full p-2 border-0 border-solid border-gray-200 rounded"
                            placeholder="Card number"
                        />
                    </div>

                    {/* Card Expiry */}
                    <div className="flex mb-4">
                        <div className="w-1/2 mr-2">

                            <input
                                type="text"
                                id="expiryMonth"
                                className="w-full p-2 border  border-solid border-gray-200 rounded"
                                placeholder="MM/YY"
                            />
                        </div>
                        <div className="mb-4">

                            <input
                                type="text"
                                id="cvc"
                                className="w-full p-2 border border-gray-300 rounded"
                                placeholder="123"
                            />
                        </div>
                    </div>

                    {/* CVC */}


                    {/* Grand Total Display */}
                    {/* <div className="mb-4 text-center text-lg font-semibold"> */}
                    {/* Grand Total: $100.57 Replace with your actual grand total */}
                    {/* </div> */}

                    {/* Pay Button */}
                    <button
                        type="button"
                        onClick={handlePayment}
                        className="bg-gradient-to-b from-blue-500 to-blue-600 text-1xl text-white py-2 px-4 rounded text-xl"

                    >
                        Pay CAD $100.57
                    </button>
                </form>

                {/* Cancel Button */}
                <button
                    type="button"
                    onClick={closeModal}
                    className="absolute top-0  rounded-full w-8 h-8 right-0 mr-4 bg-gray-300 text-white hover:text-white"
                >
                    &#10006;
                </button>
            </div>
        </div>
    );
};

export default Payment;
