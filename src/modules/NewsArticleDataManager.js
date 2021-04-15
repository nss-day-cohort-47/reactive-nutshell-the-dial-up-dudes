const remoteURL = "http://localhost:8808"

export const getAllArticles = () => {
    return fetch(`${remoteURL}/articles`)
    .then(res=>res.json())
}

export const addArticle = (newArticle) => {
    return fetch(`${remoteURL}/articles`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(newArticle)
    }).then(response => response.json)
}

export const updateArticle = (editedArticle) => {
    return fetch(`${remoteURL}/articles/${editedArticle.id}`,{
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(editedArticle)
    }).then(data => data.json());
}

export const deleteArticle = (id) => {
    return fetch(`${remoteURL}/articles/${id}`, {
        method: "DELETE"
    }).then(result => result.json())
}