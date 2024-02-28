import waitinRoom from "../assets/slider_1.jpg";
import medicine_1 from "../assets/medicine_1.jpg";
import medicine_2 from "../assets/medicine_2.jpg";
import medicine_3 from "../assets/medicine_3.jpg";
import medicine_4 from "../assets/medicine_4.jpg";
import medicine_5 from "../assets/medicine_5.jpeg";
import medicine_6 from "../assets/medicine_6.jpg";
import medicine_7 from "../assets/medicine_7.jpg";
import medicine_8 from "../assets/medicine_8.jpg";
import medicine_9 from "../assets/medicine_9.jpg";
import medicine_10 from "../assets/medicine_10.jpg";
import medicine_11 from "../assets/medicine_11.jpg";
import medicine_12 from "../assets/medicine_12.jpg";
import medicine_13 from "../assets/medicine_13.jpg";
import medicine_14 from "../assets/medicine_14.jpg";
import medicine_15 from "../assets/medicine_15.jpg";
import medicine_16 from "../assets/medicine_16.jpg";
import logo_default from "../assets/logo_default.png";
import { Link } from "react-router-dom";
const Purpular = () => {
  return (
    <div className="purpular">
      <div className="">
        <img
          src={waitinRoom}
          alt="firstImage"
          className="w-full h-80 object-cover"
          style={{ marginTop: "8.8vw" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-4xl mb-20 mr-10">MEDICAL SCHOOLS</p>
        </div>
      </div>
      <div className="flex flex-wrap text-center text-customBlue mt-5 justify-between">
        <div>
          <img src={medicine_1} alt="medicine" />
          <div className="hover:bg-black hover:text-white">
            {" "}
            <span className="title ">
              <strong className="">
                Dalhousie Medical <br /> School-Halifax and <br /> New Brunswick
                <br /> Campus
              </strong>
            </span>
          </div>
        </div>
        <div>
          <img src={medicine_2} alt="medicine" />
          <div className="hover:bg-black hover:text-white">
            {" "}
            <span className="title">
              <strong>
                McGill Faculty of <br /> Medicine
              </strong>
            </span>
          </div>
        </div>
        <div>
          <img src={medicine_3} alt="medicine" />
          <div className="hover:bg-black hover:text-white">
            <span className="title">
              <strong>
                McMaster <br /> University: Michael <br /> G. DeGroote School{" "}
                <br /> of Medicine
              </strong>
            </span>
          </div>
        </div>
        <div>
          <img src={medicine_4} alt="medicine" />
          <div className="hover:bg-black hover:text-white">
            <span className="title">
              <strong>
                Memorial University <br /> of Newfoundland <br />
                Faculty of Medicine
              </strong>
            </span>
          </div>
        </div>
        <div className="hover:bg-black hover:text-white">
          <img src={medicine_5} alt="medicine" />
          <div className="hover:bg-black hover:text-white">
            {" "}
            <span className="title">
              <strong>
                Memorial University <br /> of Newfoundland <br />
                Faculty of Medicine
              </strong>
            </span>
          </div>
        </div>
        <div>
          <img src={medicine_6} alt="medicine" />
          <div className="hover:bg-black hover:text-white">
            {" "}
            <span className="title">
              <strong>
                Queen's University <br /> School of <br /> Medicine
              </strong>
            </span>
          </div>
        </div>
        <div>
          <img src={medicine_7} alt="medicine" />
          <div className="hover:bg-black hover:text-white">
            {" "}
            <span className="title">
              <strong>
                Rural Ontario <br /> Medical Program
              </strong>
            </span>
          </div>
        </div>
        <div>
          <img src={medicine_8} alt="medicine" />
          <div className="hover:bg-black hover:text-white">
            <span className="title">
              <strong>
                University of <br /> Alberta Faculty of
                <br /> Medicine and Dentistry
              </strong>
            </span>
          </div>
        </div>
        <div>
          <img src={medicine_9} alt="medicine" />
          <div className="hover:bg-black hover:text-white">
            <span className="title">
              <strong>
                Universityof British <br /> Columbia - Okanagan
                <br />
                Campus-Southern <br /> Medical Program
              </strong>
            </span>
          </div>
        </div>
        <div>
          <img src={medicine_10} alt="medicine" />
          <div className="hover:bg-black hover:text-white">
            <span className="title">
              <strong>
                University <br /> of British Columbia
                <br /> Faculty of Medicine-UBC
                <br /> Main Vancouver Campus
              </strong>
            </span>
          </div>
        </div>
        <div>
          <img src={medicine_11} alt="medicine" />
          <div className="hover:bg-black hover:text-white">
            <span className="title">
              <strong>
                University <br />
                of British
                <br /> Columbia-University <br />
                of Northern <br />
                British Columbia-NMP
              </strong>
            </span>
          </div>
        </div>
        <div>
          <img src={medicine_12} alt="medicine" />
          <div className="hover:bg-black hover:text-white">
            {" "}
            <span className="title">
              <strong>
                University <br />
                of British <br />
                Columbia/University
                <br /> of Victoria Island-Medical
                <br /> Program- IMP
              </strong>
            </span>
          </div>
        </div>
        <div className="hover:bg-black hover:text-white">
          <img src={medicine_13} alt="medicine" />
          <div>
            <span className="title">
              <strong>
                University
                <br /> of Calgary Cumming School
                <br /> of Medicine
              </strong>
            </span>
          </div>
        </div>
        <div className="hover:bg-black hover:text-white">
          <img src={medicine_14} alt="medicine" />
          <div>
            <span className="title">
              <strong>
                University of Laval
                <br /> Medical School
              </strong>
            </span>
          </div>
        </div>
        <div>
          <img src={medicine_15} alt="medicine" />
          <div className="hover:bg-black hover:text-white">
            <span className="title">
              <strong>
                University <br />
                of Manitoba Max
                <br /> Rady College of Medicine
              </strong>
            </span>
          </div>
        </div>
        <div>
          <img src={medicine_16} alt="medicine" />
          <div className="hover:bg-black hover:text-white">
            <span className="title">
              <strong>
                University <br />
                of Montreal <br />
                Faculty of Medicine
              </strong>
            </span>
          </div>
        </div>
        <div>
          <img src={logo_default} alt="logo_default" className="w-40" />
          <div className="hover:bg-black hover:text-white">
            <span className="title">
              <Link to="">
                <strong>
                  University <br />
                  of Ottawa Faculty
                  <br /> of Medicine
                </strong>
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className="flex text-center text-customBlue mt-10 justify-between gap-10 flex-wrap ml-20">
        <div>
          <img
            src={logo_default}
            alt="logo_default"
            style={{ width: "15vw" }}
          />
          <div className="hover:bg-black hover:text-white">
            <span className="title">
              <Link to="">
                <strong>
                  University <br />
                  of Ottawa Faculty
                  <br /> of Medicine
                </strong>
              </Link>
            </span>
          </div>
        </div>
        <div>
          <img
            src={logo_default}
            alt="logo_default"
            style={{ width: "15vw" }}
          />
          <div className="hover:bg-black hover:text-white">
            <span className="title">
              <Link to="">
                <strong>
                  University <br />
                  of Ottawa Faculty
                  <br /> of Medicine
                </strong>
              </Link>
            </span>
          </div>
        </div>
        <div>
          <img
            src={logo_default}
            alt="logo_default"
            style={{ width: "15vw" }}
          />
          <div className="hover:bg-black hover:text-white">
            <span className="title">
              <Link to="">
                <strong>
                  University <br />
                  of Ottawa Faculty
                  <br /> of Medicine
                </strong>
              </Link>
            </span>
          </div>
        </div>
        <div>
          <img
            src={logo_default}
            alt="logo_default"
            style={{ width: "15vw" }}
          />
          <div className="hover:bg-black hover:text-white">
            <span className="title">
              <Link to="">
                <strong>
                  University <br />
                  of Ottawa Faculty
                  <br /> of Medicine
                </strong>
              </Link>
            </span>
          </div>
        </div>
        <div>
          <img
            src={logo_default}
            alt="logo_default"
            style={{ width: "15vw" }}
          />
          <div className="hover:bg-black hover:text-white">
            <span className="title">
              <Link to="">
                <strong>
                  University <br />
                  of Ottawa Faculty
                  <br /> of Medicine
                </strong>
              </Link>
            </span>
          </div>
        </div>
        <div>
          <img
            src={logo_default}
            alt="logo_default"
            style={{ width: "15vw" }}
          />
          <div className="hover:bg-black hover:text-white">
            <span className="title">
              <Link to="">
                <strong>
                  University <br />
                  of Ottawa Faculty
                  <br /> of Medicine
                </strong>
              </Link>
            </span>
          </div>
        </div>
        <div>
          <img
            src={logo_default}
            alt="logo_default"
            style={{ width: "15vw" }}
          />
          <div className="hover:bg-black hover:text-white">
            <span className="title">
              <Link to="">
                <strong>
                  University <br />
                  of Ottawa Faculty
                  <br /> of Medicine
                </strong>
              </Link>
            </span>
          </div>
        </div>
        <div>
          <img
            src={logo_default}
            alt="logo_default"
            style={{ width: "15vw" }}
          />
          <div className="hover:bg-black hover:text-white">
            <span className="title">
              <Link to="">
                <strong>
                  University <br />
                  of Ottawa Faculty
                  <br /> of Medicine
                </strong>
              </Link>
            </span>
          </div>
        </div>
        <div>
          <img
            src={logo_default}
            alt="logo_default"
            style={{ width: "15vw" }}
          />
          <div className="hover:bg-black hover:text-white">
            <span className="title">
              <Link to="">
                <strong>
                  University <br />
                  of Ottawa Faculty
                  <br /> of Medicine
                </strong>
              </Link>
            </span>
          </div>
        </div>
        <div>
          <img
            src={logo_default}
            alt="logo_default"
            style={{ width: "15vw" }}
          />
          <div className="hover:bg-black hover:text-white">
            <span className="title">
              <Link to="">
                <strong>
                  University <br />
                  of Ottawa Faculty
                  <br /> of Medicine
                </strong>
              </Link>
            </span>
          </div>
        </div>
        <div>
          <img
            src={logo_default}
            alt="logo_default"
            style={{ width: "15vw" }}
          />
          <div className="hover:bg-black hover:text-white">
            <span className="title">
              <Link to="">
                <strong>
                  University <br />
                  of Ottawa Faculty
                  <br /> of Medicine
                </strong>
              </Link>
            </span>
          </div>
        </div>
        <div>
          <img
            src={logo_default}
            alt="logo_default"
            style={{ width: "15vw" }}
          />
          <div className="hover:bg-black hover:text-white">
            <span className="title">
              <Link to="">
                <strong>
                  University <br />
                  of Ottawa Faculty
                  <br /> of Medicine
                </strong>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purpular;
