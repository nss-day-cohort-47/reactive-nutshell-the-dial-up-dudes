const remoteURL = "http://localhost:8088"

export const getAllTasks = () => {
    return fetch(`${remoteURL}/tasks?_expand=user`)
    .then(response => response.json())
}

export const deleteTask = (id) => {
    return fetch(`${remoteURL}/tasks${id}`, {
        method: "DELETE"
    }).then(response => response.json())
}

export const getUserTasks = (id) => {
    return fetch(`${remoteURL}/users/${id}?_embed=tasks`)
    .then(response => response.json())
}