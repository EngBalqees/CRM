import React, { useState } from 'react';
import TaskComponent from './taskcomponent.jsx';
import './taskpage.css';
import ProgressBar from '../../components/progressbar/progressbar.jsx';
import Modal from './addtask.jsx';
const TaskPage = () => {
    const tasks = [
        { id: 1, title: "Update CRM database", status: "in-progress" },
        { id: 2, title: "Prepare sales report", status: "done" },
        { id: 3, title: "Client meeting", status: "in-progress" },
        { id: 4, title: "Submit project proposal", status: "done" },
    ];
    const [showModal, setShowModal] = useState(false);
    const [taskList, setTaskList] = useState(tasks);
    const inProgressTasks = taskList.filter(task => task.status === 'in-progress');
    const doneTasks = taskList.filter(task => task.status === 'done');
    const progress = (doneTasks.length / taskList.length) * 100;


    const handleAddTask = (tasks) => {
        setTaskList([...taskList, tasks]); // Ideally, update the state or database
        setShowModal(false);
    }
    return (
        <div className="task-page">
            <ProgressBar progress={progress} />

            <div className="task-columns">
                <div className="task-category in-progress">
                    <h2>In Progress</h2>
                    {inProgressTasks.map(task => (
                        <TaskComponent key={task.id} title={task.title} status="in-progress" />
                    ))}
                </div>
                <div className="task-category done">
                    <h2>Done</h2>
                    {doneTasks.map(task => (
                        <TaskComponent key={task.id} title={task.title} status="done" />
                    ))}
                </div>
            </div>
            <button className="add-task-btn" onClick={() => setShowModal(true)}>Add New Task</button>
            {showModal && <Modal onClose={() => setShowModal(false)} onAddTask={handleAddTask} />}
        </div>
    );
}

export default TaskPage;
