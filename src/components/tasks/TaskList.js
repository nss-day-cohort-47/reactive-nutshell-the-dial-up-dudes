import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { TaskCard } from './TaskCard';
import { getAllTasks, getUserTasks, deleteTask } from "../../modules/TaskDataManager";

export const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    const getTasks = () => {
        return getAllTasks().then(tasksFromAPI => {
            setTasks(tasksFromAPI)
        })
    }

    const handleDeleteTasks = id => {
        deleteTask(id)
        .then(() => getAllTasks().then(setTasks));
    }

    // const history = useHistory();

    useEffect(() => {
        getTasks();
    }, [])

    return (
        <>
        <div className="container-cards">
            {tasks.map(task =>
                <TaskCard key={task.id} task={task} handleDeleteTasks={handleDeleteTasks} />
                )}
        </div>
        </>
    );
};