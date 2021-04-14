const remoteURL= "http://localhost:8088"

// export const getFriendById = (userId) => {
//     return fetch(`${remoteURL}/friends/${userId}`)
// }

export const getAllFriends= () => { 
    return fetch(`${remoteURL}/friends/?_expand=users`)
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

export const deleteFriend = (userId) => {
    return fetch(`${remoteURL}/friends/${userId}`,{
        method: "DELETE"
    }).then(result => result.json())
}