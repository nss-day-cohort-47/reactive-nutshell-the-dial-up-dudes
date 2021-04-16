import React, { useState, useEffect } from "react"
import { updateTask, getTaskById } from "../../modules/TaskDataManager"
import { useParams, useHistory, Link } from "react-router-dom"

export const TaskEditForm = () => {

    const currentUser = JSON.parse(sessionStorage.getItem("nutshell_user"))

    const [task, setTask] = useState({ task: "", completionDate: "", taskComplete: false, userId: 0,id: 0});
    const [isLoading, setIsLoading] = useState(false);

    const {taskId} = useParams();
    const history = useHistory();
    
    //as the input field changes this function will update the state
    const handleFieldChange = event => {
        const stateToChange = { ...task };
        stateToChange[event.target.id] = event.target.value;
        setTask(stateToChange);
    };

    const updateExistingTask = event => {
        event.preventDefault()
        setIsLoading(true);

        const editedTask = {
            id: taskId,
            task:task.task,
            completionDate: task.completionDate,
            taskComplete: false,
            userId: currentUser
        };

        updateTask(editedTask)
        .then(() => history.push("/tasks")
        )
    }

    useEffect(() => {
        getTaskById(taskId)
        .then(task => {
            setTask(task);
            setIsLoading(false)
        })
    }, [])

    return (
        <>
        <form>
            <fieldset>
                <div className="formgrid">
                    <label htmlFor="task">Task</label>
                    <input type="text" required className="form-control" onChange={handleFieldChange} id="task" value={task.task}/>

                    <label htmlFor="completionDate">Completion Date</label>
                    <input type="date" required className="form-control" onChange={handleFieldChange} id="completionDate" value={task.completionDate} />
                </div>
                <Link to={`/tasks/`}>
                    <button>Return</button>
                </Link>

                <div className="alignRight">
                    <button type="button" disabled={isLoading} onClick={updateExistingTask} className="btn btn-primary">Submit</button>
                </div>
            </fieldset>
        </form>
        </>
    );
};