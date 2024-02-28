import waitinRoom from "../assets/slider_1.jpg";
import { Link } from "react-router-dom";
import card_13 from "../assets/card_13.jpeg";
import card_14 from "../assets/card_14.jpg";
import card_15 from "../assets/card_15.jpg";
import card_16 from "../assets/card_16.jpg";
import card_17 from "../assets/card_17.jpeg";
import card_18 from "../assets/card_18.jpg";
import card_19 from "../assets/card_19.jpg";
import card_20 from "../assets/card_20.png";
import card_21 from "../assets/card_21.jpg";
import card_22 from "../assets/card_22.jpg";
import card_23 from "../assets/card_23.jpg";
import card_24 from "../assets/card_24.jpg";
const BlogPath = () => {
  return (
    <div className="blogpath">
      <div className="">
        <img
          src={waitinRoom}
          alt="firstImage"
          className="w-full h-80 object-cover mt-40"
          style={{ marginTop: "10vw" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-4xl mb-20">BLOG</p>
        </div>
      </div>
      <div>
        <div className="flex flex-wrap justify-center mt-5 gap-10">
          <div className="border border-black bg-black">
            <img src={card_13} alt="card" className="max-w-screen-md w-80" />
            <p className="text-center p-2 text-white">
              Friday, Febuary 9, 2024
            </p>
          </div>
          <div className="border border-black bg-black">
            <img src={card_14} alt="card" className="max-w-screen-md w-80" />
            <p className="p-2 text-center text-white">
              Thursday, Febuary , 2024
            </p>
          </div>
          <div className="border border-black bg-black">
            <img src={card_15} alt="card" className="max-w-screen-md w-80" />
            <p className="p-2 text-center text-white">
              Thursday, January 25, 2024
            </p>
          </div>
          <div className="border border-black bg-black">
            <img src={card_16} alt="card" className="max-w-screen-md w-80" />
            <p className="text-center p-2 text-white">Monday, July 24, 2023</p>
          </div>
          <div className="border border-black bg-black">
            <img src={card_17} alt="card" className="max-w-screen-md w-80" />
            <p className="text-center p-2 text-white">Thursday, June 1, 2023</p>
          </div>
          <div className="border border-black bg-black">
            <img src={card_18} alt="card" className="max-w-screen-md w-80" />
            <p className="p-2 text-center text-white">
              Thursday, Match 16, 2023
            </p>
          </div>
          <div className="border border-black bg-black">
            <img src={card_19} alt="card" className="max-w-screen-md w-80" />
            <p className="text-center p-2 text-white">
              Saturday, Match 11, 2023
            </p>
          </div>
          <div className="border border-black bg-black">
            <img src={card_20} alt="card" className="max-w-screen-md w-80" />
            <p className="text-center p-2 text-white">Sunday, Match 5, 2023</p>
          </div>
          <div className="border border-black bg-black">
            <img src={card_21} alt="card" className="max-w-screen-md w-80" />
            <p className="text-center p-2 text-white">
              Tuesday, February 14, 2023
            </p>
          </div>
          <div className="border border-black bg-black">
            {" "}
            <img src={card_22} alt="card" className="max-w-screen-md w-80" />
            <p className="text-center p-2 text-white">
              Tuesday, February 14, 2023
            </p>
          </div>
          <div className="border border-black bg-black">
            <img src={card_23} alt="card" className="max-w-screen-md w-80" />
            <p className="text-center p-2 text-white">
              Tuesday, January 24, 2023
            </p>
          </div>
          <div className="border border-black bg-black">
            <img src={card_24} alt="card" className="max-w-screen-md w-80" />
            <p className="text-center p-2 text-white">
              Thursday, January 12, 2023
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
          <Link
            to="#"
            className="bg-gry rounded pl-2 pr-2 text-white font-semibold"
          >
            1
          </Link>
          <Link to="/card/2">2</Link>
          <Link to="/card/3">3</Link>
          <Link to="/card/2">»</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPath;
