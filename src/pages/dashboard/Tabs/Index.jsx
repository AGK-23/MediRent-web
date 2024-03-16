// import React from 'react'
import { AiOutlinePieChart, AiOutlineClockCircle } from "react-icons/ai";
import { HiArrowSmUp, HiArrowSmDown } from "react-icons/hi";
import { BsBoxSeam } from "react-icons/bs";
import { MdOutlineLocalShipping } from "react-icons/md";
import ReactApexChart from "react-apexcharts";
import { FiPlusCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, Link } from "react-router-dom";
// import { getUser } from "../../../features/auth/authSlice";

const state = {
  series: [
    {
      name: "Shipment",
      data: [18, 7, 15, 29, 18, 12, 9, -17],
    },
    {
      name: "Delivery",
      data: [-13, 18, -9, 14, -5, -17, -15, 9],
    },
  ],
  plotOptions: {
    chart: {
      height: 250,
      stacked: true,
      type: "bar",
      toolbar: { show: false },
    },
    bar: {
      horizontal: true,
      columnWidth: "33%",
      borderRadius: 10,
      startingShape: "rounded",
      endingShape: "rounded",
    },
    colors: ["#7F83FF", "#4CCCEF"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 1,
      lineCap: "round",
      colors: ["#7F83FF", "#4CCCEF"],
    },
    legend: {
      show: true,
      horizontalAlign: "left",
      position: "top",
      markers: {
        height: 8,
        width: 8,
        radius: 12,
        offsetX: -3,
      },
      labels: {
        colors: ["#7F83FF", "#4CCCEF"],
      },
      itemMargin: {
        horizontal: 24,
      },
    },

    grid: {
      yaxis: {
        lines: {
          show: true,
        },
      },
      borderColor: "#F1F1F1",
      padding: {
        top: 0,
        bottom: -8,
        left: 10,
        right: 30,
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      labels: {
        style: {
          title: "Total Income",
          fontSize: "10px",
          colors: "#b8c3d2",
        },
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: "10px",
          colors: "#b8c3d2",
        },
      },
    },
    responsive: [
      {
        breakpoint: 1700,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 0,
              columnWidth: "22%",
            },
          },
        },
      },
      {
        breakpoint: 1580,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 0,
              columnWidth: "35%",
            },
          },
        },
      },
      {
        breakpoint: 1440,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 0,
              columnWidth: "42%",
            },
          },
        },
      },
      {
        breakpoint: 1300,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 0,
              columnWidth: "48%",
            },
          },
        },
      },
      {
        breakpoint: 1200,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 0,
              columnWidth: "40%",
            },
          },
        },
      },
      {
        breakpoint: 1040,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 0,
              columnWidth: "48%",
            },
          },
        },
      },
      {
        breakpoint: 991,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 0,
              columnWidth: "30%",
            },
          },
        },
      },
      {
        breakpoint: 840,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 0,
              columnWidth: "35%",
            },
          },
        },
      },
      {
        breakpoint: 768,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 0,
              columnWidth: "28%",
            },
          },
        },
      },
      {
        breakpoint: 640,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 0,
              columnWidth: "32%",
            },
          },
        },
      },
      {
        breakpoint: 576,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 0,
              columnWidth: "37%",
            },
          },
        },
      },
      {
        breakpoint: 480,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 0,
              columnWidth: "45%",
            },
          },
        },
      },
      {
        breakpoint: 420,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 0,
              columnWidth: "52%",
            },
          },
        },
      },
      {
        breakpoint: 380,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 0,
              columnWidth: "60%",
            },
          },
        },
      },
    ],
    states: {
      hover: {
        filter: {
          type: "none",
        },
      },
      active: {
        filter: {
          type: "none",
        },
      },
    },
  },
};

const Index = () => {
  const storedToken = localStorage.getItem('token');

  const [userName, setUserName] = useState("")


  // Parse the stringified object back to its original form
  const userDetails = JSON.parse(storedToken);

  // console.log("token image", userDetails?.firstName);

  

  useEffect(() => {
    setUserName(userDetails?.firstName)
    // console.log('Updated housingData:', userName);
  }, [userName]); // Log housingData whenever it changes





  return (
    <div className="md:mt-0 xs:mt-10">
      <div>
        <div className="text-slate-700 text-lg">Hello 👋, {userName}</div>
        <div className="text-gray-500 md:text-xs xs:text-[10px]">
          Welcome to your Landlord's Dashboard
        </div>
      </div>
      {/* <div className="text-slate-700 text-md">User Overview</div> */}
      <div className="mt-5 pb-5">
        <div className="grid flex-row gap-0 md:grid-cols-4 xs:grid-cols-1 shadow-md ">
          <div className=" md:border-t md:border-b md:border-l xs:border">
            <div className="p-5">
              <div className="card-body">
                <Link
                  to="/admin/dashboard/create/new"
                  className="font-base block mb-2 text-slate-500 text-sm text-center"
                >
                  <div className="flex justify-center items-center">
                    <div className="">
                      <div className="mb-5 md:text-[2rem] xs:text-[1.5rem] cursor-pointer rounded-full p-1 bg-gray-100  border-[1px] text-amber-600 flex justify-center items-center">
                        <FiPlusCircle />
                      </div>
                    </div>
                  </div>
                  {/* <span className="">CREATE LISTING</span> */}
                </Link>
                <span className="font-base block mb-2 text-slate-500 text-sm text-center">
                  CREATE LISTING
                </span>
              </div>
            </div>
          </div>

          <div className="md:border-t md:border-b md:border-l xs:border">
            <div className="p-5">
              <div className="card-body">
                <div className="flex justify-center items-center">
                  <div className="">
                    <div className="mb-5 md:text-[2rem] xs:text-[1.5rem] cursor-pointer p-1 text-green-600 flex justify-center items-center">
                      &#36; 765,780
                    </div>
                  </div>
                </div>
                <span className="font-base block mb-2 text-slate-500 text-sm text-center">
                  TOTAL RENT
                </span>
              </div>
            </div>
          </div>

          <div className="md:border-t md:border-b md:border-l xs:border">
            <div className="p-5">
              <div className="card-body">
                <div className="flex justify-center items-center">
                  <div className="">
                    <div className="mb-5 md:text-[2rem] xs:text-[1.5rem] cursor-pointer p-1 text-purple-600 flex justify-center items-center">
                      14
                    </div>
                  </div>
                </div>
                <span className="font-base block mb-2 text-slate-500 text-sm text-center">
                  PROPERTIES
                </span>
              </div>
            </div>
          </div>

          <div className=" md:border-t md:border-b md:border-l xs:border">
            <div className="p-5">
              <div className="card-body">
                <div className="flex justify-center items-center">
                  <div className="">
                    <div className="mb-5 md:text-[2rem] xs:text-[1.5rem] cursor-pointer p-1 text-sky-600 flex justify-center items-center">
                      9
                    </div>
                  </div>
                </div>
                <span className="font-base block mb-2 text-slate-500 text-sm text-center">
                  TENANTS
                </span>


              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Index;
