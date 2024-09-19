import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    datasets: [
        {
            label: 'Growth',
            data: [20, 40, 30, 70, 90, 50, 60, 40, 80, 100],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            tension: 0.4,
        },
    ],
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
    },
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};

const LineChart = () => {
    return (
        <div className="relative mt-16" style={{ width: '484px', height: '381.91px', marginLeft: '95px' }}>
            <div className="absolute inset-0 bg-white shadow-2xl rounded-xl p-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-transparent opacity-50"></div>
                <div className="relative z-10">

                    <div className="h-[calc(100%-0px)] absolute top-10 left-4">
                        <h1 className='text-black font-semibold'>Line chart</h1>
                        <Line data={data} options={options} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LineChart;








