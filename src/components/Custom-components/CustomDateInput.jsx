import { useState, useRef, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Calendar from "../../assets/Listing/calendar.svg"

const CustomDateInput = ({ calendar, value, onChange, className, wrapperClass }) => {
    const [showCalendar, setShowCalendar] = useState(false);
    const inputRef = useRef(null);

    const handleDateChange = (date) => {
        onChange(date);
        setShowCalendar(false);
    };

    const handleInputClick = () => {
        console.log("first", showCalendar)
        setShowCalendar(!showCalendar);
    };

    const handleClickOutside = (event) => {
        if (inputRef.current && !inputRef.current.contains(event.target)) {
            setShowCalendar(false);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            if (typeof window !== 'undefined') {
                document.removeEventListener('mousedown', handleClickOutside);
            }
        };
    }, []);

    return (
        <div ref={inputRef} className={`form-group relative flex w-[100%] h-[58px] text-[1rem]`}>
      {
        <div className="absolute z-10 mt-0 top-0 bg-[#f6f6f6] border rounded-md shadow-none py-[3px]">
          <DatePicker
            selected={value}
            onChange={handleDateChange}
            dateFormat="MM/dd/yyyy"
            className="p-0"
          />
        </div>
      }
      {/* <input
        type="text"
        value={value ? value.toLocaleDateString() : ''}
        readOnly
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={handleInputClick}
      /> */}
      <button onClick={handleInputClick}>
        <img
          src={Calendar}
          alt="calendar"
          width={20}
          height={20}
          className={`transition-all ease-in-out duration-300 absolute z-20 top-5 right-2 cursor-pointer`}
        />
      </button>
    </div>
    );
};

export default CustomDateInput;
