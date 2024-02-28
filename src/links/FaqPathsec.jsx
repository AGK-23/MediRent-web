import waitinRoom from "../assets/slider_1.jpg";
import LandlordFaq from "./LandlordFaq";
const FaqPathsec = () => {
  return (
    <div>
      {" "}
      <div className="">
        <img
          src={waitinRoom}
          alt="firstImage"
          className="w-full h-80 object-cover"
          style={{ marginTop: "10vw" }}
        />
        <div className="mb-10 absolute inset-0 flex items-center justify-center">
          <p className="text-white text-4xl">FAQ for landlords</p>
        </div>
      </div>
      <LandlordFaq />
    </div>
  );
};

export default FaqPathsec;
