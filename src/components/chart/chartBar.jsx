import React from 'react';
import { Bar } from 'react-chartjs-2';

function BarChart({ title }) {
    const data = {
        labels: ['January', 'February', 'March', 'April'],
        datasets: [
            {
                label: 'Deals',
                data: [65, 59, 80, 81],
                backgroundColor: '#36A2EB'
            }
        ]
    };

    return (
        <div className="chart">
            <h3>{title}</h3>
            <Bar data={data} />
        </div>
    );
}

export default BarChart;
