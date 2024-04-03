// import styles from "./Spinner.module.scss";
import './Spinner.css';
import Logo from "../../assets/logo.jpeg";

export default function Spinner() {
  return (
    <div className='h-screen flex justify-center items-center flex-col z-10'>
      <div className=" text-start flex justify-start  mx-auto text-primary cursor-pointer z-50">
        <div className="link">
          <span className="text-primary text-3xl font-semibold capitalize">
            <img
              alt=""
              src={Logo}
              className="text-[1px] w-32 h-16 cursor-pointer"
            />
          </span>
        </div>
        <span className="dot font-bold text-primary w-5 text-3xl">
          .
        </span>
      </div>
      <div className="spinner"></div>
    </div>
  );
}
