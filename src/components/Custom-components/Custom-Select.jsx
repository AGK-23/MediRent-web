/* eslint-disable react/prop-types */

import { useEffect, useRef, useState } from "react";
import ArrowDown from "../../assets/Listing/arrow-down.svg"


const CustomSelect = ({
    options,
    label,
    setSelected,
    selected,
    selectedClass,
    wrapperClass,
    optionWrapperClass,
    optionsClass,
    labelClass,
    required,
}) => {
    const [showOptions, setShowOptions] = useState(false);

    const selectRef = useRef(null);

    const handleClickOutside = (event) => {
        if (selectRef.current && !selectRef.current.contains(event.target)) {
            setShowOptions(false);
        }
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            if (typeof window !== "undefined") {
                document.removeEventListener("mousedown", handleClickOutside);
            }
        };
    }, []);

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    return (
        <div
            ref={selectRef}
            onClick={toggleOptions}
            className={`${selected
                ? `border-[1.5px] border-primary !text-black ${selectedClass}`
                : ""
                } text-gray relative cursor-pointer flex items-center justify-between w-[100%] bg-[#F6F6F6] px-[18px] h-[58px] rounded-[10px] select ${wrapperClass}`}
        >
            <div className={`text-[1rem] ${labelClass} ${selected ? "!text-black" : ""}`}>
                {selected ? options.find((o) => o.value === selected)?.label : label}
            </div>

            <input
                required={required}
                value={selected}
                className="w-[1px] h-[1px]"
                defaultValue={""}
            />

            <img
                src={ArrowDown}
                alt="arrow-down"
                width={10}
                height={10}
                className={`transition-all ease-in-out duration-300 ${showOptions ? "rotate-[180deg]" : ""
                    }`}
            />

            {showOptions &&
                <div
                    className={`transition-all ease-in-out duration-300 pt-[10px] pb-[10px] z-[300] overflow-y-auto options absolute w-[100%] min-h-[60px] rounded-[10px] left-[0] 
                    ${options?.length > 2 ? 'bottom-[-230px] h-[230px]' 
                    : options?.length > 0 ? 'bottom-[-180px] h-[180px]' 
                    : 'bottom-[-70px] h-[70px]'}  
                    bg-white ${optionWrapperClass}`}
                >
                    <div className="relative">

                        {options?.length ? options.map(({ label, value }, index) => (
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    console.log("HERE AND HERE")
                                    setSelected(value)
                                    toggleOptions()
                                }}
                                key={index} className={`transition-all ease-in-out duration-300 hover:bg-primary hover:text-white h-[58px] w-[100%] truncate flex items-center px-[18px] text-[1rem] font-[500] text-[#292D32] ${selected === value ? 'bg-primary !text-white' : ''} ${optionsClass}`}>
                                <span className="!text-left w-[100%] truncate">{label}</span>
                            </button>
                        )) : <span className="px-[18px] text-[1rem] font-[500] text-[#292D32]">No Data</span>}
                    </div>
                </div>}
        </div>
    );
};

export default CustomSelect;
