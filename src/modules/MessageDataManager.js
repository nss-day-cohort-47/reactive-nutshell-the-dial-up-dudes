const remoteURL = 'http://localhost:8088'

export const getAllMessages = () => {
  return fetch(`${ remoteURL }/messages?_expand=user`)
    .then(res => res.json())
}

export const deleteMessage = (id) => {
  return fetch(`${ remoteURL }/messages/${ id }`, {
    method: "DELETE"
  }).then(res => res.json())
}

export const getUserMessages = (id) => {
  return fetch(`${ remoteURL }/${ id }?_embed=messages`)
    .then(res => res.json())
}

export const writeMessage = (newMessage) => {
  return fetch(`${ remoteURL }/messages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newMessage)
  }).then(res => res.json())
}

export const getAllUsers = () => {
  return fetch(`${ remoteURL }/users`)
    .then(res => res.json())
}