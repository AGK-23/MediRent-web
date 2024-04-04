
import { useState } from 'react';
// import { HiArrowSmUp, HiArrowSmDown } from "react-icons/hi";
import { BiCaretDown, BiWallet, BiUser } from "react-icons/bi";
import { PiHouseDuotone } from "react-icons/pi";


// import DotsVertical from 'mdi-material-ui/DotsVertical'

import IncomeAreaChart from "./IncomeAreaChart";
import MonthlyBarChart from "./MonthlyBarChart";
// import MainCard from './MainCard';







function Index() {
  // const [value, setValue] = useState('today');
  const [slot, setSlot] = useState("week");


  return (
    <div className='mt-10'>
      <div className='text-slate-700 text-lg'>Property Revenues Overview</div>
      <div className="grid md:grid-cols-3 xs:grid-cols-1 md:gap-6 xs:gap-0 mt-5 mb-6 px-0">
        <div className="col-span-2 rounded shadow-md border p-3 md:mb-0 xs:mb-6">
          <div className="hidden text-sm text-gray-700 text-center mb-4 ">
            Income Generated Chart
          </div>
          <div className="flex justify-between w-full items-center text-base font-light mt-5">
            <div className='flex flex-col px-0'>
              <div className='flex items-center text-sm'>
                <div className='text-rose-600 ml-0 md:text-lg xs:text-sm'><BiCaretDown /></div>
                <h3 className="text-rose-600 mb-0 md:text-lg xs:text-sm">$1,12,900</h3>
                <div className="text-rose-600 flex items-center ml-1 md:text-lg xs:text-sm">

                  <div>
                    (45.67%)
                  </div>
                </div>

              </div>
              <div className='text-gray-400 text-sm xs:text-xs'>
                Compare to : 01 Dec 2021-08 Jan 2022
              </div>

            </div>
            <div className='flex md:flex-row xs:flex-col'>
              <button

                className={`border-[.1px] rounded-bl-[.2rem] rounded-tl-[.2rem] opacity-40
                ${slot === 'month' ? 'text-[#ffff]' : 'text-[#757575]'}
                ${slot === 'month' ? 'bg-[#757575]' : 'bg-[#ffff]'}
                ${slot === 'month' ? 'opacity-80' : 'opacity-100'}
                 py-1 text-[.8rem] px-[1.09rem]`}
                onClick={() => setSlot('month')}

              // variant={slot === 'month' ? 'outlined' : 'text'}
              >
                Month
              </button>
              <button

                onClick={() => setSlot('week')}
                className={`border-[.1px] rounded-br-[.2rem] rounded-tr-[.2rem]
                ${slot === 'week' ? 'text-[#ffff]' : 'text-[#757575]'}
                ${slot === 'week' ? 'bg-[#757575]' : 'bg-[#ffff]'}
                ${slot === 'week' ? 'opacity-80' : 'opacity-100'}
                 py-1 text-[.8rem] px-5`}
              >
                Week
              </button>
            </div>
          </div>
          <IncomeAreaChart slot={slot} />


        </div>
        <div className=" rounded shadow-md border p-3 md:text-lg xs:text-xs w-full">
          <div className='flex mt-5 items-center justify-center '>
            <MonthlyBarChart />
          </div>

          <div className="text-gray-500 text-center font-normal pt-0 mb-2">62% Properties Growth</div>

          <div className='flex justify-center flex-col py-5 '>
            <div className="flex flex-col md:ml-5 xs:ml-0 mt-5">
              <div className="text-gray-500 font-normal pt-0 mb-2 text-sm">Revenue Generated</div>
              <div className='flex justify-between md:w-4/5 xs:w-full'>
                <div className='bg-sky-200 text-sky-600 text-2xl rounded p-2'>
                  <BiWallet/>
                </div>
                <div className="flex text-sm ">
                  
                  <div className="flex flex-col text-gray-400">
                    <div>2024</div>
                    <h6 className="mb-0">$32.5k</h6>
                  </div>
                </div>
                <div className="flex text-sm ">
                  
                  <div className="flex flex-col text-gray-400">
                    <div>2023</div>
                    <h6 className="mb-0">$41.2k</h6>
                  </div>
                </div>

              </div>
            </div>
            
            <div className="flex flex-col md:ml-5 xs:ml-0 mt-5">
              <div className="text-gray-500 font-normal pt-0 mb-2 text-sm">Total Listing Created</div>
              <div className='flex justify-between md:w-4/5 xs:w-full'>
                <div className='bg-lime-300 text-lime-600 text-2xl rounded p-2'>
                  <PiHouseDuotone />
                </div>
                <div className="flex text-sm ">
                  
                  <div className="flex flex-col text-gray-400">
                    <div>2024</div>
                    <h6 className="mb-0">2.5k</h6>
                  </div>
                </div>
                <div className="flex text-sm ">
                  
                  <div className="flex flex-col text-gray-400">
                    <div>2023</div>
                    <h6 className="mb-0">1.2k</h6>
                  </div>
                </div>

              </div>
            </div>

            <div className="flex flex-col md:ml-5 xs:ml-0 mt-5">
              <div className="text-gray-500 font-normal pt-0 mb-2 text-sm">Number of Tenants added</div>
              <div className='flex justify-between md:w-4/5 xs:w-full'>
                <div className='bg-amber-300 text-amber-600 text-2xl rounded p-2'>
                  <BiUser/>
                </div>
                <div className="flex text-sm ">
                  
                  <div className="flex flex-col text-gray-400">
                    <div>2024</div>
                    <h6 className="mb-0">540</h6>
                  </div>
                </div>
                <div className="flex text-sm ">
                  
                  <div className="flex flex-col text-gray-400">
                    <div>2023</div>
                    <h6 className="mb-0">300</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index