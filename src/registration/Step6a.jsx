import React from "react";
import Popup from "reactjs-popup";
import "./reg.css";
const Payment = () => {
  return (
    <div className="mt-12 px-16   ">
      <p className="mb-12">
        Thank you for your registration. After you pay this invoice, you will be
        able to continue and complete your listing in the next step.
      </p>
      <div className="flex gap-8   ">
        <div className="w-full ">
          <table className="table-auto  border border-solid border-black w-full h-32">
            <tr className="bg-black text-white text-xs  ">
              <th className="border border-solid border-white py-2 ">
                Description
              </th>
              <th className="border border-solid border-white ">Quantity</th>
              <th className="border border-solid border-white">Unit Price</th>
              <th className="border border-solid border-white">Item Total </th>
            </tr>
            <tr className="text-center ">
              <td className="border border-solid border-black px-4 text-left">
                Housing registration -MedsBasicYearly - Listing <br />{" "}
                <button className=" text-white text-xs bg-blue-700 px-2 rounded">
                  Change package
                </button>
              </td>
              <td className="border border-solid border-black">1</td>
              <td className="border border-solid border-black">$89.00</td>
              <td className="border border-solid border-black">$89.00</td>
            </tr>
          </table>
          <input
            type="tel"
            className=" mt-4 mb-4 p-4 w-96 border-solid border border-gray-300 rounded"
            placeholder="promotion code"
          />
          <br />
          <button className="bg-blue-800 text-white px-9 py-2 rounded  mt-3">
            Apply
          </button>
        </div>
        <div className="bg-gray-200 px-4 h-72">
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
          </label>{" "}
          <br />
          <Popup
            trigger={
              <button className="bg-blue-900 text-white py-4 px-8 mt-4 w-full rounded text-xl">
                Pay
              </button>
            }
          >
            <p className=" paba bg-blue-500 w-full">sara</p>
          </Popup>
        </div>
      </div>
    </div>
  );
};
export default Payment;

// import React, { useState } from "react";
// import Modal from "react-modal";

// const Payment = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const openModal = () => {
//         setIsModalOpen(true);
//     };

//     const closeModal = () => {
//         setIsModalOpen(false);
//     };

//     const handlePayment = () => {
//         // Handle payment logic here
//         closeModal(); // Close the modal after payment
//     };

//     return (
//         <div className="mt-12 px-16">
//             {/* ... (existing content) */}
//             <p className="mb-12">Thank you for your registration. After you pay this invoice, you will be able to continue and complete your listing in the next step.</p>
//             <div className="flex gap-8   ">
//                 <div className="w-full ">
//                     <table className="table-auto  border border-solid border-black w-full h-32">
//                         <tr className="bg-black text-white text-xs  ">
//                             <th className="border border-solid border-white py-2 ">Description</th>
//                             <th className="border border-solid border-white ">Quantity</th>
//                             <th className="border border-solid border-white">Unit Price</th>
//                             <th className="border border-solid border-white">Item Total  </th>
//                         </tr>
//                         <tr className="text-center ">
//                             <td className="border border-solid border-black px-4 text-left">Housing registration -MedsBasicYearly - Listing <br /> <button className=" text-white text-xs bg-blue-700 px-2 rounded">Change package</button></td>
//                             <td className="border border-solid border-black">1</td>
//                             <td className="border border-solid border-black">$89.00</td>
//                             <td className="border border-solid border-black">$89.00</td>
//                         </tr>

//                     </table>
//                     <input type="tel" className=" mt-4 mb-4 p-4 w-96 border-solid border border-gray-300 rounded" placeholder="promotion code" /><br />
//                     <button className='bg-blue-800 text-white px-9 py-2 rounded  mt-3'>Apply</button>
//                 </div>
//                 <div className="bg-gray-200 px-4 h-72">
//                     <h2 className="text-black text-xl text-center mt-4 ">Summary</h2>
//                     <hr className="border-t mt-4 mb-4 border-gray-300" />
//                     <div className="flex gap-20 text-center text-xs mb-4">
//                         <div className="">
//                             <p>Subtotal:</p>
//                             <p>HST:</p>
//                             <p className="text-bold">Grand Total:</p>
//                         </div>
//                         <div>
//                             <p>$89.00</p>
//                             <p>$11.57</p>
//                             <p>$100.57</p>
//                         </div>
//                     </div>
//                     <label htmlFor="check" className="text-xs text-red-500  ">
//                         <input type="checkbox" name="" id="check" />
//                         Automatically pay my invoices in the future click here
//                     </label> <br />
//                     <button className="bg-blue-900 text-white py-4 px-8 mt-4 w-full rounded text-xl">Pay</button>
//                 </div>
//             </div>
//             {/* Payment Button */}
//             <button
//                 onClick={openModal}
//                 className="bg-blue-900 text-white py-4 px-8 mt-4 w-full rounded text-xl"
//             >
//                 Pay
//             </button>

//             {/* Payment Modal */}
//             <Modal
//                 isOpen={isModalOpen}
//                 onRequestClose={closeModal}
//                 contentLabel="Payment Modal"
//                 className="modal"
//                 overlayClassName="overlay"
//             >
//                 <div className="relative">
//                     {/* Close button (top-right corner) */}
//                     <button
//                         onClick={closeModal}
//                         className="absolute top-0 right-0 m-4 text-lg cursor-pointer"
//                     >
//                         &#10006;
//                     </button>

//                     {/* Modal content */}
//                     <div className="p-6">
//                         <h2 className="text-2xl font-bold mb-4">medshousing.com Payment</h2>

//                         {/* User Gmail (you may replace this with the actual user's Gmail) */}
//                         <p className="mb-4">User's Gmail: user@gmail.com</p>

//                         {/* Payment Form */}
//                         <form>
//                             {/* Card Number */}
//                             <div className="mb-4">
//                                 <label htmlFor="cardNumber" className="block text-sm font-bold">
//                                     Card Number
//                                 </label>
//                                 <input
//                                     type="text"
//                                     id="cardNumber"
//                                     className="form-input"
//                                     placeholder="Enter card number"
//                                 />
//                             </div>

//                             {/* Card Month/Year */}
//                             <div className="mb-4">
//                                 <label htmlFor="cardExpiry" className="block text-sm font-bold">
//                                     Card Expiry (MM/YY)
//                                 </label>
//                                 <input
//                                     type="text"
//                                     id="cardExpiry"
//                                     className="form-input"
//                                     placeholder="MM/YY"
//                                 />
//                             </div>

//                             {/* CVC */}
//                             <div className="mb-4">
//                                 <label htmlFor="cvc" className="block text-sm font-bold">
//                                     CVC
//                                 </label>
//                                 <input
//                                     type="text"
//                                     id="cvc"
//                                     className="form-input"
//                                     placeholder="Enter CVC"
//                                 />
//                             </div>

//                             {/* Pay Button */}
//                             <button
//                                 onClick={handlePayment}
//                                 className="bg-blue-800 text-white px-8 py-3 rounded mr-4"
//                             >
//                                 Pay ${100.57}
//                             </button>

//                             {/* Cancel Button */}
//                             <button
//                                 onClick={closeModal}
//                                 className="bg-red-600 text-white px-8 py-3 rounded"
//                             >
//                                 Cancel
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             </Modal>
//         </div>
//     );
// };

// export default Payment;
