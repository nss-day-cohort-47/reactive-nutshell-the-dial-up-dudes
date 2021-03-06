// Abbey Royse
// This module contains the function declarations necessary to making the whole events page work

const remoteURL = "http://localhost:8088"

export const getEventById = (id) => {
    return fetch (`${remoteURL}/events/${id}?_expand=name&_expand=date&_expand=location`)
    .then(response => response.json())
}

export const getAllEvents = () => {
    return fetch (`${remoteURL}/events`)
    .then(response => response.json())
}

export const deleteEvent = (id) => {
    return fetch(`${remoteURL}/events/${id}`, {
      method: "DELETE"
    }).then(response => response.json())
  }

  export const addEvent = (newEvent) => {
    return fetch(`${remoteURL}/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newEvent)
    }).then(response => response.json())
  }

  export const updateEvent = (editedEvent) => {
    return fetch(`${remoteURL}/events/${editedEvent.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedEvent)
    }).then(data => data.json());
  }