import React from "react"
import { updateEvent } from "../../modules/EventDataManager";
import "./Event.css"

// this is what displays on each individual event (name, date, location, & the buttons)

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
          <button type="button" onClick={() => (updateEvent)}>Edit</button>
          <button type="button" >Show Weather</button>
        </div>
      </div>
    );
  }