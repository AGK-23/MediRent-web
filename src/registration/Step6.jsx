import React, { useState } from 'react';
import Modal from 'react-modal';
import Payment from './Payment';

import "./reg.css"
const Step6 = ({ onNextStep, onPrevStep }) => {
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

    const openPaymentModal = () => {
        setIsPaymentModalOpen(true);
    };

    const closePaymentModal = () => {
        setIsPaymentModalOpen(false);
    };

    return (
        <div className="registration-page">
            {/* ... (existing content for Step6) */}
            <div className="mt-12 px-16   ">
                <p className="mb-12">Thank you for your registration. After you pay this invoice, you will be able to continue and complete your listing in the next step.</p>
                <div className="flex gap-8   ">
                    <div className="w-full ">
                        <table className="table-auto  border border-solid border-black w-full h-32">
                            <thead>
                                <tr className="bg-black text-white text-xs">
                                    <th className="border border-solid border-white py-2">Description</th>
                                    <th className="border border-solid border-white">Quantity</th>
                                    <th className="border border-solid border-white">Unit Price</th>
                                    <th className="border border-solid border-white">Item Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-center">
                                    <td className="border border-solid border-black px-4 text-left">Housing registration -MedsBasicYearly - Listing <br /> <button className=" text-white text-xs bg-blue-700 px-2 rounded">Change package</button></td>
                                    <td className="border border-solid border-black">1</td>
                                    <td className="border border-solid border-black">$89.00</td>
                                    <td className="border border-solid border-black">$89.00</td>
                                </tr>
                            </tbody>
                        </table>
                        <input type="tel" className=" mt-4 mb-4 p-4 w-96 border-solid border border-gray-300 rounded" placeholder="promotion code" /><br />
                        <button className='bg-blue-800 text-white px-9 py-2 rounded  mt-3'>Apply</button>
                    </div>

                    <div className="bg-gray-200 px-4 h-76 p-4 mb-8">
                        <h2 className="text-black text-xl text-center mt-4 ">Summary</h2>
                        <hr className="border-t mt-4 mb-4 border-gray-300" />
                        <div className="flex gap-20 text-center text-xs mb-4">
                            <div className="">
                                <p>Subtotal:</p>
                                <p>HST:</p>
                                <p className="text-bold">Grand Total:</p>
                            </div>
                            <div>
                                <p>$89.00</p>
                                <p>$11.57</p>
                                <p>$100.57</p>
                            </div>
                        </div>
                        <label htmlFor="check" className="text-xs text-red-500  ">
                            <input type="checkbox" name="" id="check" />
                            Automatically pay my invoices in the future click here
                        </label> <br />
                        <button
                            onClick={openPaymentModal}
                            className="mt-20 bg-blue-900 text-white py-4 px-8 w-full rounded text-xl"
                        >
                            Pay
                        </button>
                        {/* <button className="bg-blue-900 text-white py-4 px-8 mt-4 w-full rounded text-xl">Pay</button> */}
                    </div>
                </div>
            </div >
            {/* Payment Button */}
            {/* <button
                onClick={openPaymentModal}
                className="mt-20 bg-blue-900 text-white py-4 px-8 w-full rounded text-xl"
            >
                Pay
            </button> */}

            {/* Payment Modal */}
            <Modal
                isOpen={isPaymentModalOpen}
                onRequestClose={closePaymentModal}
                contentLabel="Payment Modal"
                className="modal"
                overlayClassName="overlay"
                shouldCloseOnOverlayClick={true}
            >
                {/* Include the Payment component */}
                <Payment closeModal={closePaymentModal} />
            </Modal>
        </div>
    );
};

export default Step6;
