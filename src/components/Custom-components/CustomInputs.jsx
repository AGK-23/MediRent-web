/* eslint-disable react/prop-types */
// import React from 'react'

import Calendar from "../../assets/Listing/calendar.svg"
import eye from "../../assets/svg/eye.svg"
import eyeSlash from "../../assets/svg/eye-slash.svg"


import { useEffect, useRef } from 'react';

const CustomInputs = ({ value, onChange, wrapperClass, className, label, type, id, showToggle,
  isToggle, changeToggle, showLabel = true, inputType = "input", calendar = false, showRequirement = false, required = false, disabled = false }) => {


    const inputRef = useRef(null);

    const handleChange = (e) => {
      if (onChange) {
        onChange(e.target.value);
      }
    };

  useEffect(() => {
    const input = inputRef.current;
    if (input) {
      if (input.value) {
        input.classList.add('has-value')
      } else {
        input.classList.remove('has-value');

      }
      const handleInput = () => {
        if (input.value) {
          input.classList.add('has-value');
        } else {
          input.classList.remove('has-value');
        }
      };

      input.addEventListener('input', handleInput);

      return () => {
        input.removeEventListener('input', handleInput);
      };
    }
  }, []);




  return (
    <div className={`form-group relative flex w-[100%] h-[58px] text-[1rem] ${className} ${wrapperClass} ${showLabel ? '' : 'unlabeled'}`}>
      {inputType === 'input' ?
        <input
          disabled={disabled}
          defaultValue={''}
          placeholder={showLabel ? '' : label}
          value={value} 
          // onChange={(e) => {
          //   if (setValue)
          //     setValue(e.target.value)
          // }}
          onChange={handleChange}
          id={id}
          type={type}
          required={required}
          ref={inputRef} />
        : <textarea
          id={id}
          disabled={disabled}
          defaultValue={''}
          value={value} 
          placeholder={showLabel ? '' : label}
          // onChange={(e) => {
          //   if (setValue)
          //     setValue(e.target.value)
          // }}
          onChange={handleChange}
          type={type}
          required={required} 
          ref={inputRef}
          ></textarea>
      }
      {showLabel && <label htmlFor={id}>{label} {showRequirement && <span className="text-red-600 text-[10px]">*</span>}</label>}


      {calendar && <img
        src={Calendar}
        alt="calendar"
        width={20}
        height={20}
        className={`transition-all ease-in-out duration-300 absolute top-5 right-2 cursor-pointer`}
      />}

      {
        showToggle && (
          <div
            className="flex mt-3 flex-col h-6 "
            onClick={changeToggle}
            style={{
              position: "absolute",
              width: "30px",
              right: "5px",
              bottom: "3px",
              lineHeight: "20px",
            }}
          >

            {isToggle ? (
              <div className="cursor-pointer">
                <img
                  src={eye}
                  alt="logo"
                  width={20}
                  height={20}

                  className=""
                />
              </div>
            ) : (
              <div
                className="cursor-pointer"
                style={{
                  position: "absolute",
                  width: "40px",
                  height: "40px",
                  lineHeight: "20px",
                }}
              >
                <img
                  src={eyeSlash}
                  alt="logo"
                  width={20}
                  height={20}

                  className=""
                />
              </div>
            )}
          </div>

        )
      }
    </div>
  )
}

export default CustomInputs