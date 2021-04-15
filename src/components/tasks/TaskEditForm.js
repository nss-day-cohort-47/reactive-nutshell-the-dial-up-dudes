import React, { useState, useEffect } from "react"
import { updateTask, getUserTasks } from "../../modules/TaskDataManager"
import { useParams, useHistory } from "react-router-dom"

export const TaskEditForm = () => {
    const [task, setTask] = useState({ task: "", completionDate: ""});
    const [isLoading, setIsLoading] = useState(false);

    const {taskId} = useParams();
    const history = useHistory();

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
            taskComplete: task.taskComplete,
            userId: task.userId
        };

        updateTask(editedTask)
        .then(() => history.push("/tasks")
        )
    }

    useEffect(() => {
        getUserTasks(taskId)
        .then(task => {
            setTasks(task);
            setIsLoading(false)
        })
    }, [])

    return (
        <>
        <form>
            <fieldset>
                <div className="formgrid">
                    <input type="text" required className="form-control" onChange={handleFieldChange} id="task" value={task.task}/>
                    <label htmlFor="task">Task</label>

                    <input type="date" required className="form-control" onChange={handleFieldChange} id="completionDate" value={task.completionDate} />
                    <label htmlFor="completionDate">Completion Date</label>
                </div>

                <div className="alignRight">
                    <button type="button" disabled={isLoading} onClick={updateExistingTask} className="btn btn-primary">Submit</button>
                </div>
            </fieldset>
        </form>
        </>
    );
};