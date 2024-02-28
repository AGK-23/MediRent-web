import waitinRoom from "../assets/slider_1.jpg";
import maker_1 from "../assets/marker_1.png";
import { FaArrowDown } from "react-icons/fa";
const Listing = () => {
  return (
    <div>
      {" "}
      <div className="">
        <img
          src={waitinRoom}
          alt="firstImage"
          className="w-full h-80 object-cover"
          style={{ marginTop: "8.8vw" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-4xl mb-20 ">MEDIRENT LISTING</p>
        </div>
      </div>
      <div>
        <div className="flex justify-between mt-10 p-5">
          <h3 className="text-3xl text-black ">
            <strong>614</strong> Medirent Listing
          </h3>
          <span className="text-customBlue ml-80 text-sm">
            <img
              src={maker_1}
              alt="marker"
              className="text-customBlue ml-8 w-4"
            />
            view on map
          </span>
          <div className="text-customBlue flex justify-between w-60 bg-customBlue text-white h-8 p-1">
            order now
            <FaArrowDown className="mt-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
