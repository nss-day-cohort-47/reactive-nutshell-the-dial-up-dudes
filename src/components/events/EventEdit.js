// Abbey Royse
// (not working) this component is supposed to display a form where the user can edit an event they've created

import React, { useState, useEffect } from "react" 
import { updateEvent, getEventById } from "../../modules/EventDataManager"
import { useHistory, useParams } from "react-router"
import "./Event.css"

// the initial run of the useState function/hook 
export const EventEditForm = () => {
    const [event, setEvent] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    // returns obj of parameters for route rendered
    const {eventId} = useParams();
    // allows access to the state of the router to navigate from inside components
    const history = useHistory();

    // this changes and runs the useState function again (newest version, if any)
    const handleFieldChange = (evt) => {
        const stateToChange = { ...event };
        stateToChange[evt.target.id] = evt.target.value;
        setEvent(stateToChange);
    };

    // updates the event & prevents user from clicking the save button multiple times
    const updateExistingEvent = (evt) => {
        evt.preventDefault()
        setIsLoading(true);
    // this will be the edited version of the event card. each item connects back to the database through dot notation (gets the name, date, & location)
        const editedEvent = {
            id: eventId,
            name: event.name,
            date: event.date,
            location: event.location
        };
    // a promise is something that will be resolved or rejected later on in the code
    // used to hook up a handler
    // history.push pushes a new entry onto the history stack
    // the new update is the new entry in this case
        updateEvent(editedEvent)
            .then(() => history.push("/events")
        )
    }

    // here, react is being told that the component needs to do something after render
    // in this case, it needs to return the newest version of the event. the edited version
    useEffect(() => {
        getEventById(eventId)
        .then(event => {
            setEvent(event);
            setIsLoading(false);
        });
    }, [eventId]);


    // simply, this is what the edit form will look like
    return (
        <>
          <form>
            <fieldset>
              <div className="formgrid">
                <input
                  type="text"
                  required
                  className="form-control"
                  onChange={handleFieldChange}
                  id="name"
                  value={event.name}
                />
                <label htmlFor="name">Event name</label>
    
                <input
                  type="text"
                  required
                  className="form-control"
                  onChange={handleFieldChange}
                  id="date"
                  value={event.date}
                />
                <label htmlFor="date">Date</label>

                <input
                  type="text"
                  required
                  className="form-control"
                  onChange={handleFieldChange}
                  id="location"
                  value={event.location}
                />
                <label htmlFor="location">Location Name</label>

              </div>
              <div className="alignLeft">
                <button
                  type="button" disabled={isLoading}
                  onClick={updateExistingEvent}
                  className="btn btn-primary"
                >Save</button>
              </div>
            </fieldset>
          </form>
        </>
      );
    }