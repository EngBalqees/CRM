import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import './chart.css';

const ChartComponent = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Sales',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    };

    return (
        <div className="chart-container">
            <h3>Sales Data</h3>
            <Bar data={data} />
        </div>
    );
}

export default ChartComponent;
