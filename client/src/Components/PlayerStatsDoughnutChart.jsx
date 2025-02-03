import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

const PlayerStatsDoughnutChart = ({ player }) => {

    const data = {
        labels: ['Potential', "Deficiency"],
        datasets: [
            {
                data: [player.potential, 100 - player.potential],
                backgroundColor: [
                    'rgba(153, 102, 255, 0.8)',  // Brighter Purple
                    'rgba(200, 200, 200, 0.4)',  // Lighter Gray (kept the same)
                ],
                borderColor: [
                    'rgba(153, 102, 255, 1)',    // Brighter Purple
                    'rgba(200, 200, 200, 0.4)',  // Lighter Gray (kept the same)
                ]
                ,
                
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        cutout: '30%',
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: `${player.name}'s Potential`,
            },
        },
    };

    return <Doughnut data={data} options={options} />;
};

export default PlayerStatsDoughnutChart;
