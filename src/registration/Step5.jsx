import React from "react";
import Calendar from "./Calendar";
const Componen = () => {


    return (
        <div>
            <h1 className='text-center text-3xl mb-10 mt-20 font-normal'>Availability Form</h1>
            <p className="bg-orange-50  px-4 py-5 text-center ">Hint: keep this calendar up to date to increase your contacts. (click a month to block a full month)</p>
            <p className="mb-8 mt-8">You can synchronize the calendar of availability of your ad with one from another website (Airbnb, Home Away, Google Calendar, etc.).</p>
            <p>To do so, you must copy/paste the link of the calendar below. Once done, your calendar will be updated every night.

            </p>
            <div className="mb-8">
                <input type="text" className="outline-none mt-8 p-4 w-full border border-gray-300 rounded" placeholder="Link with external calendar (URL)" />
            </div>
            <input className=" outline-none  " type="checkbox" id="doctor" name="renting" value="" />
            <label className="ml-4 mr-4" for="doctor">Dates available</label><br />
            <input className=" outline-none  mb-8" type="checkbox" id="doctor" name="renting" value="" />
            <label className="ml-4" for="doctor"> Dates not available</label>
            <div className="mt-700">
                <Calendar />

            </div>
        </div>
    )
}
export default Componen;