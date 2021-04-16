const remoteURL = "http://localhost:8088"


export const getAllTasks = () => {
  return fetch(`${ remoteURL }/tasks`)
    .then(response => response.json())
}

export const deleteTask = (id) => {
  return fetch(`${ remoteURL }/tasks/${ id }`, {
    method: "DELETE"
  }).then(result => result.json())
}

export const getUserTasks = (userId) => {
    return fetch(`${remoteURL}/tasks?userId=${userId}&_expand=user`)
    .then(response => response.json())
}
export const getTaskById = (taskId) => {
    return fetch(`${remoteURL}/tasks/${taskId}`)
    .then(response => response.json())
}

export const addTasks = (newTask) => {
  return fetch(`${ remoteURL }/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newTask)
  }).then(response => response.json)
}

export const updateTask = (editedTask) => {
    return fetch(`${remoteURL}/tasks/${editedTask.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedTask)
    }).then(data => data.json())
}

// export const checkOffTask = (checkedTask) => {
//     return fetch(`${remoteURL}/tasks/${checkedTask.taskComplete}`)
// }