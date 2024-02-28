import waitinRoom from "../assets/slider_1.jpg";
import pricing_1 from "../assets/pricing_1.png";
import pricing_2 from "../assets/pricing_2.png";
import pricing_3 from "../assets/pricing_3.png";
import pricing_4 from "../assets/pricing_4.png";
import { Link } from "react-router-dom";
import { IoIosCheckmark } from "react-icons/io";

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="">
        <img
          src={waitinRoom}
          alt="firstImage"
          className="w-full h-80 object-cover"
          style={{ marginTop: "10vw" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-4xl">PRICING</p>
        </div>
      </div>
      <div>
        <div>
          <p className="text-center text-3xl mt-10 text-black">
            Welcome to our Pricing page!
          </p>
        </div>

        <ul className="mt-20 text-black ml-20 list-disc">
          <li>
            Choose from our <strong>MedsBasic</strong> or{" "}
            <strong>MedsGold</strong> plans to offer your property to this great
            pool of medical professional tenants
          </li>
          <li>
            Note that only <strong>MedsGold</strong> Landlords have exclusive
            access to
            <strong> Tenant Want Ads</strong>
          </li>
          <li>
            Look for our various options to <strong>MedsFeature</strong> or
            <strong>MedsBoost</strong> your listing for inceased visibility
          </li>
          <li>
            <strong>Best deal ever! </strong>Our pricing is in Canadian dollars
          </li>
        </ul>
        <div className="bg-customBlue text-center p-10 w-90 mt-10">
          <h3 className="text-white text-2xl">Have more than 1 property?</h3>
          <p className="text-red text-2xl mt-2">
            We offer 50% off additional listings in the same category!
          </p>
        </div>
        <div className="height mt-20 flex justify-between gap-8">
          <div className="bg-customBlue w-[70vw]">
            <div className="flex justify-center mt-10">
              <img
                src={pricing_1}
                alt="pricing image"
                className="max-w-full max-h-full"
              />
            </div>
            <h3 className="mt-3 text-center text-4xl text-white font-semibold">
              MedsBasic Monthly
            </h3>
            <p className="text-center text-white text-sm mt-3">
              Our basic listing option for a quick one-month posting. Feel lucky
              and you think your property will rent quickly? Or maybe you just
              want to try us out? Then choose this low-cost option.
            </p>
            {/* </div> */}
            <div>
              <p className="text-white text-center mt-20 pt-10">
                <strong className="font-semibold text-4xl">$19</strong>
                <strong className="relative bottom-4">/month</strong>
              </p>
              <ul className="text-white mt-4 ml-7 text-sm">
                <li className="flex">
                  <span className="pt-2">
                    {" "}
                    <IoIosCheckmark />
                  </span>
                  30-day listing
                </li>
                <li className="flex">
                  <span className="pt-2">
                    {" "}
                    <IoIosCheckmark />
                  </span>
                  5 images
                </li>
                <li className="flex">
                  <span className="pt-2">
                    {" "}
                    <IoIosCheckmark />
                  </span>
                  Availability Calendar
                </li>
              </ul>
            </div>
            <div className="mt-20 text-center pt-40">
              <Link
                to="/sighup"
                className="function text-black bg-white p-5 rounded-md hover:bg-black"
              >
                Choose MedsBasic Monthly
              </Link>
            </div>
          </div>
          <div className="bg-w w-[70vw]">
            <div className="flex justify-center mt-10">
              <img src={pricing_1} alt="pricing image" />
              <img src={pricing_2} alt="pricing image" />
            </div>
            <h3 className="mt-3 text-center text-4xl text-white font-semibold">
              MedsBasic Yearly
            </h3>
            <p className="text-center text-white text-sm mt-3">
              List for a year and save! When you go with{" "}
              <strong>MedsBasic</strong> Yearly, you know your property will be
              posted hassle-free for a year, at a great price. ({" "}
              <strong>Optional</strong>: Medical trainees often look for
              properties many months, or sometime years in advance. With our
              <strong> MedsBasic</strong> and <strong>MedsGold</strong> yearly
              plans, your property is listed year-round for medical trainee
              tenants who are looking well in advan)
            </p>
            <div>
              <p className="text-white text-center mt-3">
                <strong className="font-semibold text-4xl">$89</strong>
                <strong className="relative bottom-4">/year</strong>
              </p>
              <ul className="text-white mt-7 ml-7 text-sm">
                <li className="flex">
                  {" "}
                  <span className="pt-2">
                    {" "}
                    <IoIosCheckmark />
                  </span>
                  365-day listing
                </li>
                <li className="flex">
                  {" "}
                  <span className="pt-2">
                    {" "}
                    <IoIosCheckmark />
                  </span>
                  5 images
                </li>
                <li className="flex">
                  {" "}
                  <span className="pt-2">
                    {" "}
                    <IoIosCheckmark />
                  </span>
                  Availability Calendar
                </li>
                <li className="flex">
                  {" "}
                  <span className="pt-2">
                    {" "}
                    <IoIosCheckmark />
                  </span>
                  MedsFeature and MedsBoost options available
                </li>
              </ul>
            </div>
            <div>
              <div className="text-center pt-40 mt-10">
                <Link
                  to="/sighup"
                  className="function bg-white text-black p-5 rounded-md hover:bg-black"
                >
                  Choose MedsBasic Yearly
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-deepFade w-[70vw]" style={{ height: "150vh" }}>
            <div className="flex justify-center mt-10">
              <img src={pricing_1} alt="pricing image" />
              <img src={pricing_2} alt="pricing image" />
              <img src={pricing_3} alt="pricing image" />
            </div>
            <h3 className="mt-3 text-center text-4xl text-white font-semibold">
              MedsGold Yearly
            </h3>
            <p className="text-center text-white text-sm mt-3">
              Our gold standard. One year hassle-free, and your listing will
              appear above the <strong>MedsBasic</strong> listings, giving you
              more views. Also comes with one-month Home Page{" "}
              <strong>MedsFeature</strong> free of charge. More views, more
              tenants!
            </p>
            <div>
              <p className="text-center text-white mt-20 pt-4">
                <strong className="font-semibold text-4xl">$129</strong>
                <strong className="relative bottom-4">/year</strong>
              </p>
              <ul className="text-white mt-6 ml-7 text-sm">
                <li className="flex">
                  {" "}
                  <span className="pt-2">
                    {" "}
                    <IoIosCheckmark />
                  </span>
                  30-day listing365-day listing
                </li>
                <li className="flex">
                  {" "}
                  <span className="pt-2">
                    {" "}
                    <IoIosCheckmark />
                  </span>
                  30-day listing25 images
                </li>
                <li className="flex">
                  {" "}
                  <span className="pt-2">
                    {" "}
                    <IoIosCheckmark />
                  </span>
                  30-day listingAvailability Calendar
                </li>
                <li className="flex">
                  {" "}
                  <span className="pt-2">
                    {" "}
                    <IoIosCheckmark />
                  </span>
                  30-day listingListed above MedsBasic listings
                </li>
                <li className="flex">
                  <span className="pt-2">
                    {" "}
                    <IoIosCheckmark />
                  </span>
                  30-day listingHome Page MedsFeature for <br />
                  one month free (new listings only){" "}
                </li>
                <li className="flex">
                  {" "}
                  <span className="pt-2">
                    {" "}
                    <IoIosCheckmark />
                  </span>
                  30-day listing MedsFeature and MedsBoost <br />
                  options available
                </li>
                <li>
                  Exclusive access to tenant want <br /> ads
                  <li>
                    Get SMS/Text messages when <br /> you get a request
                  </li>
                </li>
              </ul>
            </div>
            <div className=" text-center">
              <Link
                to="/sighup"
                className="function text-black bg-white p-5 rounded-md hover:bg-black"
              >
                Choose MedsGold Yearly
              </Link>
            </div>
          </div>
          <div className="bg-blur w-[70vw]">
            <div className="flex justify-center mt-10">
              <img src={pricing_4} alt="pricing image" />
            </div>
            <h3 className="mt-3 text-center text-4xl text-white font-semibold">
              Urgent
            </h3>
            <p className="text-center text-white text-sm mt-3">
              Get tenants faster. Show an urgent tag on your listing attract
              tenants by showing urgency
            </p>
            <div>
              <p className="text-white text-center mt-40 pt-10">
                <strong className="font-semibold text-4xl">$15</strong>
                <strong className="relative bottom-4">for 7 days</strong>
              </p>
              <ul className="text-white mt-6 ml-7 text-sm">
                <li className="flex">
                  {" "}
                  <span className="pt-2">
                    {" "}
                    <IoIosCheckmark />
                  </span>
                  Top of all listings for 7 days
                </li>
                <li className="flex">
                  <span className="pt-2">
                    {" "}
                    <IoIosCheckmark />
                  </span>
                  Boosts your ad in every location (home page, medical schools,
                  listings)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="text-grey mt-10 text-black">
        <p>
          And try our various <strong className="text-black">options</strong> to
          increase the visibility of your listing :
        </p>
        <ul className="list-disc ml-5 mt-5">
          <li>
            <strong className="text-black"> MedsBoost</strong>: One-time boost
            of your listing to the top of your category for $1 + tax.
          </li>
          <li>
            Home Page <strong className="text-black"> MedsFeature</strong>:
            Increase your visibility! Display your listing on the Medirent
            Home Page for $15/month + tax.
          </li>
          <li>
            Urgent! <strong className="text-black"> MedsFeature</strong>: Get
            tenants faster. Show an Urgent! tag on your listing. Puts your ad to
            the top of all listings for 7 days for a low price of $15 + tax.
          </li>
          <li>
            Medschool <strong className="text-black"> MedsFeature</strong>: Move
            your ad to the top of the Medical School page, within your category
            (<strong className="text-black">MedsBasic</strong> or{" "}
            <strong className="text-black">MedsGold</strong> ). Another way to
            increase the visibility of your listing for a low $15/month + tax.
          </li>
        </ul>
        <h3 className="mt-7 ml-1">
          You own <strong className="text-black">multiple properties</strong>?
          We offer special pricing to landlords with 5+ listings. Please contact
          us at{" "}
          <Link
            to="mailto:info@medirent.com"
            className="text-blue-400 hover:underline text-black"
          >
            {" "}
            info@medirent.com.
          </Link>
        </h3>
      </div>
      <h3 className="text-center text-black text-3xl mt-20">
        Pay your package for 1 year, <strong>save money</strong> and access more
        features!
      </h3>
    </div>
  );
};

export default Pricing;
