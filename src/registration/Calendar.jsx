// // src/components/Calendar.js
// import React, { useState } from 'react';
// import './Calendar.css';

// const Calendar = () => {
//   const [selectedDate, setSelectedDate] = useState(null);

//   const handleDateClick = (date) => {
//     setSelectedDate(date);
//   };

//   const getDaysInMonth = (year, month) => {
//     const date = new Date(year, month, 1);
//     const days = [];
//     while (date.getMonth() === month) {
//       days.push(new Date(date));
//       date.setDate(date.getDate() + 1);
//     }
//     return days;
//   };

//   const generateCalendar = (year, month) => {
//     const months = [
//       'January', 'February', 'March', 'April', 'May', 'June',
//       'July', 'August', 'September', 'October', 'November', 'December'
//     ];

//     const daysInMonth = getDaysInMonth(year, month);
//     const calendar = [];

//     while (daysInMonth.length > 0) {
//       calendar.push(daysInMonth.splice(0, 7));
//     }

//     return (
//       <div key={`${months[month]}-${year}`} className="month-container  w-1/4">
//         <h2 className="month-header bg-blue-500 text-white p-2 mb">{months[month]} {year}</h2>
//         <div className="grid grid-cols-7 text-center  bg-blue-100">
//           <div>S</div>
//           <div>M</div>
//           <div>T</div>
//           <div>W</div>
//           <div>T</div>
//           <div>F</div>
//           <div>S</div>
//         </div>
//         {calendar.map((week, index) => (
//           <div key={index} className="grid grid-cols-7">
//             {week.map((day) => (
//               <div
//                 key={day.getDate()}
//                 className={`day ${day.getMonth() === month ? 'current-month' : 'other-month' }
//                             ${selectedDate && day.toDateString() === selectedDate.toDateString() ? 'selected' : ''}`}
//                 onClick={() => handleDateClick(day)}
//               >
//                 {day.getDate()}
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className='grid-cols-4'>
//       {generateCalendar(2024, 0)} {/* January 2024 */}
//       {generateCalendar(2024, 1)} {/* February 2024 */}
//       {generateCalendar(2024, 2)} {/* March 2024 */}
//       {generateCalendar(2024, 3)} {/* March 2024 */}
//       {generateCalendar(2024, 4)} {/* March 2024 */}
//       {generateCalendar(2024, 5)} {/* March 2024 */}
//       {generateCalendar(2024, 6)} {/* March 2024 */}
//       {generateCalendar(2024, 7)} {/* March 2024 */}
//       {generateCalendar(2024, 8)} {/* March 2024 */}
//       {generateCalendar(2024, 9)} {/* March 2024 */}
//       {generateCalendar(2024, 10)} {/* March 2024 */}
//       {generateCalendar(2024, 11)} {/* March 2024 */}
//       {generateCalendar(2025, 0)} {/* January 2025 */}
//       {generateCalendar(2025, 1)} {/* February 2025 */}
//       {generateCalendar(2025, 2)} {/* February 2025 */}
//       {generateCalendar(2025, 3)} {/* February 2025 */}
//       {generateCalendar(2025, 4)} {/* February 2025 */}
//       {generateCalendar(2025, 5)} {/* February 2025 */}
//       {generateCalendar(2025, 6)} {/* February 2025 */}
//       {generateCalendar(2025, 7)} {/* February 2025 */}
//       {generateCalendar(2025, 8)} {/* February 2025 */}
//       {generateCalendar(2025, 9)} {/* February 2025 */}
//       {generateCalendar(2025, 10)} {/* February 2025 */}
//       {generateCalendar(2025, 11)} {/* February 2025 */}
//     </div>
//   );
// };

// export default Calendar;
// src/components/Calendar.js
import React, { useState } from 'react';
// import './Calendar.css';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const getDaysInMonth = (year, month) => {
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  };

  const generateCalendar = (year, month) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const daysInMonth = getDaysInMonth(year, month);
    const calendar = [];

    while (daysInMonth.length > 0) {
      calendar.push(daysInMonth.splice(0, 7));
    }

    return (
      <div key={`${months[month]}-${year}`} className="month-container  ">
        <h2 className=" text-white p-2 bg-third text-center font-semibold">{months[month]} {year}</h2>
        <div className="grid grid-cols-7 text-center  border-black border-1 bg-blue-200 ">
          <div className='border-gray-400 border-[1px] bg-sky-300 font-semibold p-1 text-center'>SU</div>
          <div className='border-gray-400 border-[1px] bg-sky-300 font-semibold p-1 text-center'>MO</div>
          <div className='border-gray-400 border-[1px] bg-sky-300 font-semibold p-1 text-center'>TU</div>
          <div className='border-gray-400 border-[1px] bg-sky-300 font-semibold p-1 text-center'>WE</div>
          <div className='border-gray-400 border-[1px] bg-sky-300 font-semibold p-1 text-center'>TH</div>
          <div className='border-gray-400 border-[1px] bg-sky-300 font-semibold p-1 text-center'>FR</div>
          <div className='border-gray-400 border-[1px] bg-sky-300 font-semibold p-1 text-center'>SA</div>
        </div>
        {calendar.map((week, index) => (
          <div key={index} className="grid grid-cols-7">
            {week.map((day) => (
              <div
                key={day.getDate()}
                className={`bg-white border-gray-300 border-[1px] p-1 text-center cursor-pointer ${day.getMonth() === month ? 'current-month' : 'other-month'}
                ${selectedDate && day.toDateString() === selectedDate.toDateString() ? 'bg-[#3498db] text-white' : ''}`}
                onClick={() => handleDateClick(day)}
              >
                {day.getDate()}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-wrap md:flex-row xs:flex-col  gap-2 justify-center">
      {generateCalendar(2024, 0)} {/* January 2024 */}
      {generateCalendar(2024, 1)} {/* February 2024 */}
      {generateCalendar(2024, 2)} {/* March 2024 */}
      {generateCalendar(2024, 3)} {/* March 2024 */}
      {generateCalendar(2024, 4)} {/* March 2024 */}
      {generateCalendar(2024, 5)} {/* March 2024 */}
      {generateCalendar(2024, 6)} {/* March 2024 */}
      {generateCalendar(2024, 7)} {/* March 2024 */}
      {generateCalendar(2024, 8)} {/* March 2024 */}
      {generateCalendar(2024, 9)} {/* March 2024 */}
      {generateCalendar(2024, 10)} {/* March 2024 */}
      {generateCalendar(2024, 11)} {/* March 2024 */}
      {generateCalendar(2025, 0)} {/* January 2025 */}
      {generateCalendar(2025, 1)} {/* February 2025 */}
      {generateCalendar(2025, 2)} {/* February 2025 */}
      {generateCalendar(2025, 3)} {/* February 2025 */}
      {generateCalendar(2025, 4)} {/* February 2025 */}
      {generateCalendar(2025, 5)} {/* February 2025 */}
      {generateCalendar(2025, 6)} {/* February 2025 */}
      {generateCalendar(2025, 7)} {/* February 2025 */}
      {generateCalendar(2025, 8)} {/* February 2025 */}
      {generateCalendar(2025, 9)} {/* February 2025 */}
      {generateCalendar(2025, 10)} {/* February 2025 */}
      {generateCalendar(2025, 11)} {/* February 2025 */}
    </div>
  );
};

export default Calendar;

