import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    datasets: [
        {
            label: 'Rank',
            data: [60, 50, 110, 70, 65, 80, 40, 60, 90, 85],
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
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
            ticks: {
                display: false,
            },
            grid: {
                display: false,
            },
        },
        x: {
            ticks: {
                font: {
                    size: 12,
                    weight: 'normal',
                },
            },
            grid: {
                display: false,
            },
        },
    },
};

const BarChart = () => {
    return (
        <div className="relative mt-16" style={{ width: '484px', height: '381.91px', marginLeft: '95px' }}>
            <div className="absolute inset-0 bg-white shadow-2xl rounded-xl p-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-transparent opacity-50"></div>
                <div className="relative z-10">
                    <div className="h-[calc(100%-60px)] absolute top-40 left-4">
                        <Bar data={data} options={options} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BarChart;



