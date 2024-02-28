// import styles from "./Spinner.module.scss";
import './Spinner.css'

export default function Spinner() {
  return (
    <div className='h-screen flex justify-center items-center flex-col z-10'>
      <div className=" text-start flex justify-start  mx-auto text-primary cursor-pointer z-50">
        <div className="link">
          <span className="text-secondary text-3xl font-semibold capitalize">
            Cart<span className="text-orange-500">Tel</span>
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
