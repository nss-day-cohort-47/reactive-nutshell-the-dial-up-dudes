const remoteURL= "http://localhost:8088"

export const currentUser = sessionStorage.getItem("nutshell_user")

export const getFriendById = (id) => {
    return fetch(`${remoteURL}/friends/${id}?_expand=user`)
    .then(result=>result.json())
}

export const getAllFriends= () => { 
    return fetch(`${remoteURL}/friends/?currentUserId=${currentUser}&_expand=user`).then(result => result.json())

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

// difference between result and response?