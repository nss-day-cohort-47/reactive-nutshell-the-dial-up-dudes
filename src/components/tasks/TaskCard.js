import React from "react";
import {Link} from "react-router-dom";


export const TaskCard = ({task, handleDeleteTasks}) => {
    return (
        <aside>
        <div className="cards">
            <div className="card-content">
                <div className="tasks">
                    <div className="task">
                        <h3>Task: <span className="card-task"> {task.task}</span></h3>
                        <p>Start Date: {task.startDate}</p>
                        <p>Completion Date: {task.completionDate}</p>
                        <button type="button" onClick={() => handleDeleteTasks(task.id)}>Delete</button>
                        <input type="checkbox"></input>
                    </div>
                </div>
            </div>
            </div>
            </aside>
    )
}