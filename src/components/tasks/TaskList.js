import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { TaskCard } from './TaskCard';
import { updateTask, getUserTasks, deleteTask } from "../../modules/TaskDataManager";

export const TaskList = () => {

    const currentUser = JSON.parse(sessionStorage.getItem("nutshell_user"))
    
    const [tasks, setTasks] = useState([]);

    const getCurrentTasks = () => {
        return getUserTasks(currentUser)
        .then(currentTasks => {
            let incompleteTasks = currentTasks.filter(task => task.taskComplete === false)
            setTasks(incompleteTasks)
        })
    }

    const handleDeleteTasks = id => {
        deleteTask(id)
        .then(() => getCurrentTasks());
    }

    const handleUpdateTask = (task) => {
        let completeTask = {...task}
        const checkedTask = {
            id: completeTask.id,
            task: completeTask.task,
            userId: currentUser,
            completionDate: completeTask.completionDate,
            taskComplete: true
        }
        updateTask(checkedTask)
        .then(() => getCurrentTasks)

    }

    const history = useHistory();

    useEffect(() => {
        getCurrentTasks();
    }, [])

    return (
        <>
                    <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => { history.push("/tasks/create") }}>
                    New Task
        </button>
            </section>
        <div className="container-cards">
            {tasks.map(task =>
                <TaskCard key={task.id} task={task} handleDeleteTasks={handleDeleteTasks} handleUpdateTask={handleUpdateTask} />
                )}
        </div>
        </>
    );
};