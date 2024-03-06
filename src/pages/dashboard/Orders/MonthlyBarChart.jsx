// import { useEffect, useState } from 'react';

// material-ui
// import { useTheme } from '@mui/material/styles';

// third-party
import ReactApexChart from 'react-apexcharts';




// chart options
const growthChartOptions = {
    chart: {
        height: 240,
        type: 'radialBar',
        offsetY: -10
    },
    // fontSize: "100px",
    series: [78],
    options: {
        labels: ["Growth"],
        radialBar: {
            // size: 150,
            offsetY: 10,
            startAngle: -150,
            endAngle: 150,
            hollow: {
                margin: 0,
                size: "40%",
                background: "#293450"
            },
            track: {
                background: ['#7F82FF'],
                strokeWidth: '100%',
                dropShadow: {
                    enabled: true,
                    top: 2,
                    left: 0,
                    blur: 4,
                    opacity: 0.15,
                }
            },
            dataLabels: {
                name: {
                    offsetY: 15,
                    color: ['#7F82FF'],
                    fontSize: '15px',
                    fontWeight: '600',
                    fontFamily: 'Public Sans'
                },
                value: {
                    offsetY: -25,
                    color: ['#7F82FF'],
                    fontSize: '12px',
                    fontWeight: '500',
                    fontFamily: 'Public Sans',
                }
            }
        },
        colors: ['#7F82FF'],
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                shadeIntensity: 0.15,
                gradientToColors: ['#7F82FF'],
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 0.6,
                stops: [30, 70, 100]
            }
        },
        stroke: {
            dashArray: 5
        },
        grid: {
            padding: {
                top: -35,
                bottom: -10,
                left: 10,
                right: 30
            }
        },
        states: {
            hover: {
                filter: {
                    type: 'none'
                }
            },
            active: {
                filter: {
                    type: 'none'
                }
            }
        }
    },
};

// ==============================|| MONTHLY BAR CHART ||============================== //

const MonthlyBarChart = () => {

    return (
        <div id="chart">
            <ReactApexChart options={growthChartOptions.options} series={growthChartOptions.series} type="radialBar" height={260} />
        </div>
    );
};

export default MonthlyBarChart;
