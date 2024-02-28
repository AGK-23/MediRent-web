import waitinRoom from "../assets/slider_1.jpg";
import FaqPaththd from "./FaqPaththd";
const FaqTenant = () => {
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
        <div className="absolute inset-0 flex items-center justify-center mb-10">
          <p className="text-white text-4xl ">FAQ for tenants</p>
        </div>
      </div>
      <FaqPaththd />
    </div>
  );
};

export default FaqTenant;
