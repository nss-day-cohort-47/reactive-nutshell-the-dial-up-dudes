const remoteURL= "http://localhost:8088"

export const getFriendById = (id) => {
    return fetch(`${remoteURL}/friends/${id}`)
    .then(res =>res.json())
}

export const getAllFriends= () => { 
    return fetch(`${remoteURL}/friends?_expand=user`)
    .then(result => result.json())

}
export const addFriend = (newFriend) => {
    return fetch(`${remoteURL}/friends`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newFriend)
    }).then(response => response.json())
}

export const deleteFriend = (id) => {
    return fetch(`${remoteURL}/friends/${id}`,{
        method: "DELETE"
    }).then(result => result.json())
}

export const updateFriend= (editFriend) => {
    return fetch(`${remoteURL}/friends/${editFriend.id}`, {
        method:"PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editFriend)
    }).then(res=> res.json())
}

// difference between result and response?