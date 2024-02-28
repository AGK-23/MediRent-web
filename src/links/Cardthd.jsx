import waitinRoom from "../assets/slider_1.jpg";
import { Link } from "react-router-dom";
import card_24 from "../assets/card_24.jpg";
import card_25 from "../assets/card_25.png";
import card_26 from "../assets/card_26.png";
import card_27 from "../assets/card_27.png";
import card_28 from "../assets/card_28.png";
import card_29 from "../assets/card_29.png";
import card_30 from "../assets/card_30.png";
import card_31 from "../assets/card_31.png";
import card_32 from "../assets/card_32.jpg";
import card_33 from "../assets/card_33.png";
import card_34 from "../assets/card_34.png";

const Cardthd = () => {
  return (
    <div className="blogpath">
      <div className="">
        <img
          src={waitinRoom}
          alt="firstImage"
          className="w-full h-80 object-cover mt-40"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-4xl">BLOG</p>
        </div>
      </div>
      <div>
        <div className="flex flex-wrap justify-center mt-5 gap-10">
          <div className="border border-black bg-black">
            <img src={card_24} alt="card" className="max-w-screen-md w-80" />
            <p className="text-center p-2 text-white">
              Friday, Febuary 9, 2024
            </p>
          </div>
          <div className="border border-black bg-black">
            <img src={card_25} alt="card" className="max-w-screen-md w-80" />
            <p className="p-2 text-center text-white">
              Thursday, Febuary , 2024
            </p>
          </div>
          <div className="border border-black bg-black">
            <img src={card_26} alt="card" className="max-w-screen-md w-80" />
            <p className="p-2 text-center text-white">
              Thursday, January 25, 2024
            </p>
          </div>
          <div className="border border-black bg-black">
            <img src={card_27} alt="card" className="max-w-screen-md w-80" />
            <p className="text-center p-2 text-white">Monday, July 24, 2023</p>
          </div>
          <div className="border border-black bg-black">
            <img src={card_28} alt="card" className="max-w-screen-md w-80" />
            <p className="text-center p-2 text-white">Thursday, June 1, 2023</p>
          </div>
          <div className="border border-black bg-black">
            <img src={card_29} alt="card" className="max-w-screen-md w-80" />
            <p className="p-2 text-center text-white">
              Thursday, Match 16, 2023
            </p>
          </div>
          <div className="border border-black bg-black">
            <img src={card_30} alt="card" className="max-w-screen-md w-80" />
            <p className="text-center p-2 text-white">
              Saturday, Match 11, 2023
            </p>
          </div>
          <div className="border border-black bg-black">
            <img src={card_31} alt="card" className="max-w-screen-md w-80" />
            <p className="text-center p-2 text-white">Sunday, Match 5, 2023</p>
          </div>
          <div className="border border-black bg-black">
            <img src={card_32} alt="card" className="max-w-screen-md w-80" />
            <p className="text-center p-2 text-white">
              Tuesday, February 14, 2023
            </p>
          </div>
          <div className="border border-black bg-black">
            {" "}
            <img src={card_33} alt="card" className="max-w-screen-md w-80" />
            <p className="text-center p-2 text-white">
              Tuesday, February 14, 2023
            </p>
          </div>
          <div className="border border-black bg-black">
            <img src={card_34} alt="card" className="max-w-screen-md w-80" />
            <p className="text-center p-2 text-white">
              Tuesday, January 24, 2023
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "0.6em",
            cursor: "pointer",
            justifyContent: "center",
            marginTop: "100px",
          }}
        >
          <Link to="/card/2">«</Link>

          <Link to="/blogpath" className=" ">
            1
          </Link>
          <Link to="/card/2" className="">
            2
          </Link>
          <Link
            to="/card/3"
            className="bg-gry rounded pl-2 pr-2 text-white font-semibold"
          >
            3
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cardthd;
