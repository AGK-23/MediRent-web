import React from "react";
import Currency from './Currency'
const Component = () => {


    return (
        <div>
            <h1 className='text-center text-3xl mb-10 mt-20 font-normal'>Housing Details</h1>
            <p className="bg-orange-50  px-4 py-5 text-center ">Minimum short term stay is determined by landlord and local regulations.</p>
            <form action="" className="mt-4">
                <input className=" outline-none  mb-8 " type="checkbox" id="doctor" name="renting" value="" />
                <label className="ml-4 mr-4" for="doctor">Short term rental</label>
                <input className=" outline-none  mb-8" type="checkbox" id="doctor" name="renting" value="" />
                <label className="ml-4" for="doctor"> Long term rental</label>

                <select className="outline-none mt-1 p-4 w-full border border-gray-300 rounded mb-8 ">
                    <option value="us" className="">Property type</option>
                    <option value="ca">Apartment</option>
                    <option value="uk">Basement</option>
                    <option value="uk">Real Estate Agent</option>
                    <option value="uk">Bed and Breakfast</option>
                    <option value="uk">Condo</option>
                    <option value="uk">Duplex</option>
                    <option value="uk">For sale</option>
                    <option value="uk">House</option>
                    <option value="uk">Maisonette (self contained seperate entrance)</option>
                    <option value="uk">Room to rent shared communal </option>
                </select>

                <div className="mb-8">
                    <input type="text" className="outline-none mt-1 p-4 w-full border border-gray-300 rounded" placeholder=" Daily rent" />
                </div>



                <div className="mb-8">
                    <input type="text" className=" outline-none mt-1 p-4 w-full border border-gray-300 rounded" defaultValue="0.00" onChange={(e) => e.target.value} placeholder="Weekly rent" />
                </div>
                <div className="mb-8">
                    <input type="text" className=" outline-none mt-1 p-4 w-full border border-gray-300 rounded" defaultValue="0.00" onChange={(e) => e.target.value} placeholder="Monthly rent" />
                </div>


                <Currency />

                <div className="mb-8 mt-8">
                    <input type="text" className="outline-none mt-1 p-4 w-full border border-gray-300 rounded" placeholder=" Number of bedrooms" />
                </div>

                <div className="mb-8">
                    <input type="text" className="outline-none mt-1 p-4 w-full border border-gray-300 rounded" placeholder=" Number of bathrooms" />
                </div>

                <input className=" outline-none  mb-8 " type="radio" id="doctor" name="renting" value="" />
                <label className="ml-4 mr-4" for="doctor">Furnished</label>
                <input className=" outline-none  mb-8 " type="radio" id="doctor" name="renting" value="" />
                <label className="ml-4" for="doctor">Unfurnished</label>

                <h1 className="font-normal text-2xl">Amenities</h1>
                <input className=" outline-none   " type="checkbox" id="doctor" name="renting" value="" />
                <label className="ml-4 " for="doctor">Near Med School/Hospital (within 20 minutes by car)</label><br />
                <input className=" outline-none " type="checkbox" id="doctor" name="renting" value="" />
                <label className="ml-4" for="doctor"> Walkable to Public Transit/Shopping/Amenities</label><br />
                <input className=" outline-none  " type="checkbox" id="doctor" name="renting" value="" />
                <label className="ml-4" for="doctor"> Video Virtual Tour Available</label><br />
                <input className=" outline-none  " type="checkbox" id="doctor" name="renting" value="" />
                <label className="ml-4" for="doctor"> All Utilities included</label><br />
                <input className=" outline-none  " type="checkbox" id="doctor" name="renting" value="" />
                <label className="ml-4" for="doctor"> Some utilities included</label><br />
                <input className=" outline-none  " type="checkbox" id="doctor" name="renting" value="" />
                <label className="ml-4" for="doctor"> Gym/Fitness room</label><br />
                <input className=" outline-none  " type="checkbox" id="doctor" name="renting" value="" />
                <label className="ml-4" for="doctor"> Pool</label><br />
                <input className=" outline-none  " type="checkbox" id="doctor" name="renting" value="" />
                <label className="ml-4" for="doctor"> Pet friendly</label><br />
                <input className=" outline-none  " type="checkbox" id="doctor" name="renting" value="" />
                <label className="ml-4" for="doctor"> No pets allowed</label><br />
                <input className=" outline-none  " type="checkbox" id="doctor" name="renting" value="" />
                <label className="ml-4" for="doctor"> Available Parking (may or may not be included in rent)</label><br />
                <input className=" outline-none  " type="checkbox" id="doctor" name="renting" value="" />
                <label className="ml-4" for="doctor"> Indoor Parking (may or may not be included in rent)</label><br />
                <input className=" outline-none  " type="checkbox" id="doctor" name="renting" value="" />
                <label className="ml-4" for="doctor">In-unit Laundry</label><br />
                <input className=" outline-none  " type="checkbox" id="doctor" name="renting" value="" />
                <label className="ml-4" for="doctor"> A/C</label><br />
                <input className=" outline-none  " type="checkbox" id="doctor" name="renting" value="" />
                <label className="ml-4" for="doctor"> Child friendly</label><br />
                <input className=" outline-none  " type="checkbox" id="doctor" name="renting" value="" />
                <label className="ml-4" for="doctor"> Dishwasher</label><br />
                <input className=" outline-none  " type="checkbox" id="doctor" name="renting" value="" />
                <label className="ml-4" for="doctor"> On Site Concierge 24 hours</label><br />
                <input className=" outline-none  " type="checkbox" id="doctor" name="renting" value="" />
                <label className="ml-4" for="doctor">EV Charger on premises or nearby</label><br />
                <input className=" outline-none  " type="checkbox" id="doctor" name="renting" value="" />
                <label className="ml-4" for="doctor"> Landlord is a member of the medical community</label><br />
                <input className=" outline-none  " type="checkbox" id="doctor" name="renting" value="" />
                <label className="ml-4" for="doctor"> No smoking/vaping/cannabis</label><br />
                <input className=" outline-none  " type="checkbox" id="doctor" name="renting" value="" />
                <label className="ml-4" for="doctor"> Outdoor space/Balcony/Backyard</label><br />
                <input className=" outline-none  " type="checkbox" id="doctor" name="renting" value="" />
                <label className="ml-4" for="doctor"> Private Bath</label><br />
                <input className=" outline-none  " type="checkbox" id="doctor" name="renting" value="" />
                <label className="ml-4" for="doctor"> Shared Living Space</label><br />
                <input className=" outline-none  " type="checkbox" id="doctor" name="renting" value="" />
                <label className="ml-4" for="doctor"> Wheelchair accessible</label><br />
                <input className=" outline-none  " type="checkbox" id="doctor" name="renting" value="" />
                <label className="ml-4" for="doctor"> Housing for Healthcare project</label><br />

                <div className="mb-8">
                    <input type="text" className="outline-none mt-8  p-4 w-full border border-gray-300 rounded" placeholder="License Number" />
                    <p className="text-1xl">Many cities require landlord licensing. Check your local laws. We provide this field to post registration number.</p>
                </div>
                <p className="bg-orange-50  px-4 py-5 mb-8 ">Medirent will automatically select the nearest medical school and hospital to your location, but you can always change it later in your dashboard.</p>
                <p className="bg-orange-50  px-4 py-5 mb-8 ">Do not post any links to outside web sites, phone numbers or email address for your own security and privacy. They will be removed.</p>
                <textarea name="" id="" cols="30" rows="10" className="p-4 w-full " placeholder="Description"></textarea>

            </form>
        </div>

    )

};
export default Component;
