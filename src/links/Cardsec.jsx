import waitinRoom from "../assets/slider_1.jpg";
import { Link } from "react-router-dom";
import card_1 from "../assets/card_1.jpg";
import card_2 from "../assets/card_2.jpg";
import card_3 from "../assets/card_3.jpg";
import card_4 from "../assets/card_4.jpg";
import card_5 from "../assets/card_5.jpg";
import card_6 from "../assets/card_6.png";
import card_7 from "../assets/card_7.png";
import card_8 from "../assets/card_8.png";
import card_9 from "../assets/card_9.png";
import card_10 from "../assets/card_10.png";
import card_11 from "../assets/card_11.png";
import card_12 from "../assets/card_12.png";
const BlogPath = () => {
  return (
    <div className="blogpath">
      <div className="">
        <img
          src={waitinRoom}
          alt="firstImage"
          className="w-full h-80 object-cover mt-40"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-4xl ">BLOG</p>
        </div>
      </div>
      <div>
        <div className="flex flex-wrap justify-center mt-5 gap-10">
          <div className="border border-black bg-black">
            <img src={card_1} alt="card" className="max-w-screen-md w-80" />
            <p className="text-center p-2 text-white">Friday, Febuary 9, 2024</p>
          </div>
          <div className="border border-black bg-black">
            <img src={card_2} alt="card" className="max-w-screen-md w-80" />
            <p className="p-2 text-center text-white">Thursday, Febuary , 2024</p>
          </div>
          <div className="border border-black bg-black">
            <img src={card_3} alt="card" className="max-w-screen-md w-80" />
            <p className="p-2 text-center text-white">Thursday, January 25, 2024</p>
          </div>
          <div className="border border-black bg-black">
            <img src={card_4} alt="card" className="max-w-screen-md w-80" />
            <p className="text-center p-2 text-white">Monday, July 24, 2023</p>
          </div>
          <div className="border border-black bg-black">
            <img src={card_5} alt="card" className="max-w-screen-md w-80" />
            <p className="text-center p-2 text-white">Thursday, June 1, 2023</p>
          </div>
          <div className="border border-black bg-black">
            <img src={card_6} alt="card" className="max-w-screen-md w-80" />
            <p className="p-2 text-center text-white">Thursday, Match 16, 2023</p>
          </div>
          <div className="border border-black bg-black">
            <img src={card_7} alt="card" className="max-w-screen-md w-80" />
            <p className="text-center p-2 text-white">Saturday, Match 11, 2023</p>
          </div>
          <div className="border border-black bg-black">
            <img src={card_8} alt="card" className="max-w-screen-md w-80" />
            <p className="text-center p-2 text-white">Sunday, Match 5, 2023</p>
          </div>
          <div className="border border-black bg-black">
            <img src={card_9} alt="card" className="max-w-screen-md w-80" />
            <p className="text-center p-2 text-white">Tuesday, February 14, 2023</p>
          </div>
          <div className="border border-black bg-black">
            {" "}
            <img src={card_10} alt="card" className="max-w-screen-md w-80" />
            <p className="text-center p-2 text-white">Tuesday, February 14, 2023</p>
          </div>
          <div className="border border-black bg-black">
            <img src={card_11} alt="card" className="max-w-screen-md w-80" />
            <p className="text-center p-2 text-white">Tuesday, January 24, 2023</p>
          </div>
          <div className="border border-black bg-black">
            <img src={card_12} alt="card" className="max-w-screen-md w-80" />
            <p className="text-center p-2 text-white">Thursday, January 12, 2023</p>
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
          <Link to="/blogpath">«</Link>

          <Link to="/blogpath" className=" ">
            1
          </Link>
          <Link
            to="/card/2"
            className="bg-gry rounded pl-2 pr-2 text-white font-semibold"
          >
            2
          </Link>
          <Link to="/card/3">3</Link>
          <Link to="/card/3">»</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPath;
