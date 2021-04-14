import React from "react"
import "./Event.css"

export const EventCard = ({ event, handleDeleteEvent }) => {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <span className="card-eventname">
            {event.name}
          </span></h3>
          <p>Date: {event.date}</p>
          <p>Location: {event.location}</p>
          <button type="button" onClick={() => handleDeleteEvent(event.id)}>Delete</button>
          <button type="button" onClick={() => history.pushState(`/events/${event.id}/edit`)}>
            Edit
          </button>
        </div>
      </div>
    );
  }