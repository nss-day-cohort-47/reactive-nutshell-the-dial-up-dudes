import React, { useState, useEffect, useImperativeHandle } from 'react';
import { useHistory } from 'react-router';
import { addTasks } from'../../modules/TaskDataManager';
import {Link} from "react-router-dom"


export const TaskForm = () => {

    const currentUser = JSON.parse(sessionStorage.getItem("nutshell_user"))

    const [task, setTask] = useState({
        task: "",
        completionDate: "",
        userId: parseInt(currentUser)
    });


    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();

    const handleControlledInputChange = (evt) => {
        const newTask = { ...task }
        let selectedVal = evt.target.value

        if (evt.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newTask[evt.target.id] = selectedVal
        setTask(newTask)
    }

    useEffect(() => {

    }, []);

    const handleClickSaveTask = (event) => {
        event.preventDefault()
        const newTaskObject = {
            task: task.task,
            completionDate: task.completionDate,
            userId: task.userId
        }
        addTasks(newTaskObject)
        .then(() => history.push("/tasks"))
    }



    return (
        <form className="taskForm">
            <h2 className="taskForm__title">New Task</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Task:</label>
                    <input type="text" id="task" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Task" value={task.task} />
                </div>
            </fieldset>
            <fieldset>
            <div className="form-group">
                    <label htmlFor="completion-date">Completion Date:</label>
                    <input type="date" id="completionDate" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Expected Completion-Date" value={task.completionDate} />
                </div>
            </fieldset>
            <Link to={`/tasks/`}>
                <button>Return</button>
            </Link>
            <button className="btn btn-primary" onClick={handleClickSaveTask}>Save Task</button>
            </form>
    )
}