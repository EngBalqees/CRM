import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './addtask.css';

const Modal = ({ onClose, onAddTask }) => {
    const [title, setTitle] = useState('');
    const [deadline, setDeadline] = useState('');

    const handleSubmit = () => {
        onAddTask({ id: Date.now(), title, deadline: deadline.toDateString(), status: 'in-progress' });
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Add New Task</h2>
                <input
                    type="text"
                    placeholder="Task Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
               <DatePicker
                    selected={deadline}
                    onChange={(date) => setDeadline(date)}
                    dateFormat="MMMM d, yyyy"
                />
                <button onClick={handleSubmit}>Add Task</button>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
}

export default Modal;
