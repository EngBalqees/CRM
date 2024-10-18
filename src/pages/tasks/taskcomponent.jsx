import React from 'react';
import './taskcomponent.css';
import { FaTasks, FaCheck } from 'react-icons/fa';



const TaskComponent = ({ title, deadline, status }) => (
    <div className={`task ${status}`}>
        <div className="task-inner">
            <div className="task-front">
                {status === 'in-progress' ? <FaTasks /> : <FaCheck />}
                {title}
                {status === 'in-progress' && <small>Deadline: {deadline}</small>}
            </div>
            <div className="task-back">
                <p>Details about the task...</p>
                {status === 'in-progress' && <button>Mark as Done</button>}
            </div>
        </div>
    </div>
);

export default TaskComponent;
