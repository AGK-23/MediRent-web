import waitinRoom from "../assets/slider_1.jpg";
import Faqfst from "./Faqfst";
const FaqPath = () => {
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
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-4xl mb-20">Faq</p>
        </div>
      </div>
      <Faqfst />
    </div>
  );
};

export default FaqPath;
