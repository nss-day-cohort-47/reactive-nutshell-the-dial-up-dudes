import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { addEvent } from '../../modules/EventDataManager';

export const EventForm = () => {

	const [event, setEvent] = useState({
		name: "",
		date: "",
        location: ""
	});

	const [isLoading, setIsLoading] = useState(false);

	const history = useHistory();

	const handleControlledInputChange = (event) => {
	
		const newEvent = { ...event }
		let selectedVal = event.target.value

		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}

		newEvent[event.target.id] = selectedVal

		setEvent(newEvent)
	}

	const handleClickSaveEvent = (newEvent) => {
	//	event.preventDefault() 

			addEvent(newEvent)
				.then(() => history.push("/events"))
		}

	return (
		<form className="eventsForm">
			<h2 className="eventForm__title">New Event</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Event name:</label>
					<input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Event Name" value={event.name} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="date">Event date:</label>
					<input type="text" id="address" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Event Date" value={event.date} />
				</div>
			</fieldset>
            <fieldset>
				<div className="form-group">
					<label htmlFor="date">Event location:</label>
					<input type="text" id="address" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Event Location" value={event.location} />
				</div>
			</fieldset>
			<button className="btn btn-primary"
				onClick={handleClickSaveEvent}>
				Save Event
          </button>
		</form>
	)
};