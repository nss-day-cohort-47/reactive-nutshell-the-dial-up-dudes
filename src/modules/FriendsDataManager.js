const remoteURL= "http://localhost:8088"

export const getFriendById = (id) => {
    return fetch(`${remoteURL}/friends/${id}`)
}

export const getAllFriends= () => { 
    return fetch(`${remoteURL}/friends`)
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
    }).then(response => response.json())
}