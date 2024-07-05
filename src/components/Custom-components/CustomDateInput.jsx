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
        <div ref={inputRef} className={`form-group relative flex w-[100%] h-[58px] text-[1rem] ${className} ${wrapperClass} `}>
            <input
                type="text"
                value={value ? value.toLocaleDateString() : ''}
                onClick={handleInputClick}
                
                
            />
            {calendar && <img
                src={Calendar}
                alt="calendar"
                width={20}
                height={20}
                className={`transition-all ease-in-out duration-300 absolute top-5 right-2 cursor-pointer`}
            />}
            {showCalendar && (
                <div className="absolute z-10 mt-2 bg-white border rounded-md shadow-lg">
                    <DatePicker
                        selected={value}
                        onChange={handleDateChange}
                        dateFormat="MM/dd/yyyy"
                        className="p-4"
                    />
                </div>
            )}
        </div>
    );
};

export default CustomDateInput;
