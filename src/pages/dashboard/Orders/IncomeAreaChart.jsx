/* eslint-disable react/prop-types */

import { useState, useEffect } from 'react';

// material-ui
// import { useTheme } from '@mui/material/styles';

// third-party
import ReactApexChart from 'react-apexcharts';



// chart options
const areaChartOptions = {
    chart: {
        height: 350,
        type: 'area',
        toolbar: {
            show: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight',
        width: 2
    },
    grid: {
        strokeDashArray: 0
    },

};

// ==============================|| INCOME AREA CHART ||============================== //

const IncomeAreaChart = ({ slot }) => {
    // const theme = useTheme();



    const [options, setOptions] = useState(areaChartOptions);

    useEffect(() => {
        setOptions((prevState) => ({
            ...prevState,
            colors: ['#008080', '#eb6b82'],
            xaxis: {
                categories:
                    slot === 'month'
                        ? ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                        : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                labels: {
                    style: {
                        colors: [
                            '#b8c3d2',
                            '#b8c3d2',
                            '#b8c3d2',
                            '#b8c3d2',
                            '#b8c3d2',
                            '#b8c3d2',
                            '#b8c3d2',
                            '#b8c3d2',
                            '#b8c3d2',
                            '#b8c3d2',
                            '#b8c3d2',
                            '#b8c3d2'
                        ]
                    }
                },
                axisBorder: {
                    show: true,
                    color: '#b8c3d2',
                },
                // tickPlacement: "between", 
                tickAmount: slot === 'month' ? 10 : 7
            },
            yaxis: {
                labels: {
                    style: {
                        colors: '#b8c3d2',
                    }
                }
            },
            grid: {
                xaxis: {
                    lines: {
                        show: true
                    }
                },
                yaxis: {
                    lines: {
                        show: true
                    }
                },
                borderColor: '#F1F1F1',
                padding: {
                    top: 0,
                    bottom: -8,
                    left: 10,
                    right: 50
                }
            },
            responsive: [
                {
                    breakpoint: 1700,
                    options: {
                        grid: {

                            borderColor: '#F1F1F1',
                            padding: {
                                top: 0,
                                bottom: -8,
                                left: 10,
                                right: 5
                            }
                        },

                    }
                },
                {
                    breakpoint: 1580,
                    options: {
                        grid: {

                            borderColor: '#F1F1F1',
                            padding: {
                                top: 0,
                                bottom: -8,
                                left: 10,
                                right: 5
                            }
                        },

                    }
                },
                {
                    breakpoint: 1440,
                    options: {
                        grid: {

                            borderColor: '#F1F1F1',
                            padding: {
                                top: 0,
                                bottom: -8,
                                left: 10,
                                right: 5
                            }
                        },

                    }
                },
                {
                    breakpoint: 1300,
                    options: {
                        grid: {

                            borderColor: '#F1F1F1',
                            padding: {
                                top: 0,
                                bottom: -8,
                                left: 10,
                                right: 5
                            }
                        },

                    }
                },
                {
                    breakpoint: 1200,
                    options: {
                        grid: {

                            borderColor: '#F1F1F1',
                            padding: {
                                top: 0,
                                bottom: -8,
                                left: 10,
                                right: 5
                            }
                        },

                    }
                },
                {
                    breakpoint: 1040,
                    options: {
                        grid: {

                            borderColor: '#F1F1F1',
                            padding: {
                                top: 0,
                                bottom: -8,
                                left: 10,
                                right: 5
                            }
                        },

                    }
                },
                {
                    breakpoint: 991,
                    options: {
                        grid: {

                            borderColor: '#F1F1F1',
                            padding: {
                                top: 0,
                                bottom: -8,
                                left: 10,
                                right: 5
                            }
                        },

                    }
                },
                {
                    breakpoint: 840,
                    options: {
                        grid: {

                            borderColor: '#F1F1F1',
                            padding: {
                                top: 0,
                                // bottom: -8,
                                left: 10,
                                right: 5
                            }
                        },

                    }
                },
                {
                    breakpoint: 768,
                    options: {
                        grid: {

                            borderColor: '#F1F1F1',
                            padding: {
                                top: 0,
                                // bottom: -8,
                                left: 10,
                                right: 5
                            }
                        },

                    }
                },
                {
                    breakpoint: 640,
                    options: {
                        grid: {

                            borderColor: '#F1F1F1',
                            padding: {
                                top: 0,
                                // bottom: -8,
                                left: 10,
                                right: 5
                            }
                        },

                    }
                },
                {
                    breakpoint: 576,
                    options: {
                        grid: {

                            borderColor: '#F1F1F1',
                            padding: {
                                top: 0,
                                // bottom: -8,
                                left: 10,
                                right: 5
                            }
                        },

                    }
                },
                {
                    breakpoint: 480,
                    options: {
                        grid: {

                            borderColor: '#F1F1F1',
                            padding: {
                                top: 0,
                                // bottom: -8,
                                left: 10,
                                right: 5
                            }
                        },

                    }
                },
                {
                    breakpoint: 420,
                    options: {
                        grid: {

                            borderColor: '#F1F1F1',
                            padding: {
                                top: 0,
                                // bottom: -8,
                                left: 10,
                                right: 5
                            }
                        },


                    }
                },
                {
                    breakpoint: 380,
                    options: {
                        grid: {

                            borderColor: '#F1F1F1',
                            padding: {
                                top: 0,
                                // bottom: -8,
                                left: 10,
                                right: 5
                            }
                        },

                    }
                },
                {
                    breakpoint: 260,
                    options: {
                        grid: {

                            borderColor: '#F1F1F1',
                            padding: {
                                top: 0,
                                // bottom: -8,
                                left: 5,
                                right: 5
                            }
                        },

                    }
                }

            ],
            tooltip: {
                theme: 'light'
            }
        }));
    }, [slot]);

    const [series, setSeries] = useState([
        {
            name: 'Income',
            data: [0, 86, 28, 115, 48, 210, 136]
        },
        {
            name: 'Expense',
            data: [0, 43, 14, 56, 24, 105, 68]
        }
    ]);

    useEffect(() => {
        setSeries([
            {
                name: 'Income',
                data: slot === 'month' ? [76, 85, 101, 98, 87, 105, 91, 114, 94, 86, 115, 35] : [31, 40, 28, 51, 42, 109, 100]
            },
            {
                name: 'Expense',
                data: slot === 'month' ? [110, 60, 150, 35, 60, 36, 26, 45, 65, 52, 53, 41] : [11, 32, 45, 32, 34, 52, 41]
            }
        ]);
    }, [slot]);

    return <ReactApexChart options={options} series={series} type="area" height={450} />;
};


export default IncomeAreaChart;
