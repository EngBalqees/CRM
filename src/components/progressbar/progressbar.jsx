import React from 'react';
import './progressbar.css';

const ProgressBar = ({ progress }) => (
    <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
    </div>
);

export default ProgressBar;
