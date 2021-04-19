import React from "react";
import {Link} from "react-router-dom";


export const TaskCard = ({task, handleDeleteTasks, handleUpdateTask}) => {
    return (
        <aside>
        <div className="cards">
            <div className="card-content">
                <div className="tasks">
                    <div className="task">
                        <h3>To-Do: <span className="card-task"> {task.task}</span></h3>
                        <p>Completion Date: {task.completionDate}</p>
                        <button type="button" onClick={() => handleDeleteTasks(task.id)}>Delete</button>
                        <Link to={`/tasks/${task.id}/edit`}>
                            <button type="button">
                                Edit
                            </button>
                        </Link>
                        <label htmlFor="checkbox"> Task Complete <input type="checkbox" id="checkbox" name="checkbox" onClick={() => handleUpdateTask(task)} /></label>
                    </div>
                </div>
            </div>
            </div>
            </aside>
    )
}