// Abbey Royse
// This component is what displays on each individual event card
// delete button, edit button, and show weather button are part of this

import React from "react"
import { updateEvent } from "../../modules/EventDataManager";
import "./Event.css"

export const EventCard = ({ event, handleDeleteEvent, getEventWeather }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>Name: <span className="card-eventname">
          { event.name }
        </span></h3>
        <p>Date: { event.date }</p>
        <p>Location: { event.location }</p>
        <button type="button" onClick={ () => handleDeleteEvent(event.id) }>Delete</button>
        <button className='btn-primary' type='button' onClick={ () => getEventWeather(event.location) } >Get Weather</button>
      </div>
    </div>
  );
}