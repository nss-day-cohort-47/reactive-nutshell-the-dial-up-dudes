import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { addEvent } from '../../modules/EventDataManager';

// this is the intial form page

export const EventForm = () => {

	const [event, setEvent] = useState({
		name: "",
		date: "",
        location: ""
	});

	const [isLoading, setIsLoading] = useState(false);

	const history = useHistory();

	const handleControlledInputChange = (evt) => {
	
		const newEvent = { ...event }
		let selectedVal = evt.target.value

		if (evt.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}

		newEvent[evt.target.id] = selectedVal

		setEvent(newEvent)
	}

	useEffect(() => {

    }, []);

    const handleClickSaveEvent = (evt) => {
        evt.preventDefault()
        const newEventObject = {
            name: event.name,
            date: event.date,
			location: event.location
        }
        addEvent(newEventObject)
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
					<input type="text" id="date" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Event Date" value={event.date} />
				</div>
			</fieldset>
            <fieldset>
				<div className="form-group">
					<label htmlFor="date">Event location:</label>
					<input type="text" id="location" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Event Location" value={event.location} />
				</div>
			</fieldset>
			<button className="btn btn-primary"
				onClick={handleClickSaveEvent}>
				Save Event
          </button>
		</form>
	)
};