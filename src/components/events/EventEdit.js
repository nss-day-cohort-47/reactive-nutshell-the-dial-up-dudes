import React, { useState, useEffect } from "react" 
import { useHistory, useParams } from "react-router"
import "./EventForm.css"

export const EventEditForm = () => {
    const [event, setEvent] = useState({ name: "", date: "", location: "" })
    const [isLoading, setIsLoading] = useState(false);

    const {eventId} = useParams();
    const history = useHistory();

    const handleFieldChange = evt => {
        const stateToChange = { ...event };
        stateToChange[evt.target.id] = evt.target.value;
        setEvent(stateToChange);
    };

    const updateExistingEvent = evt => {
        evt.preventDefault()
        setIsLoading(true);

        const editedEvent = {
            id: props.match.params.id,
            name: event.name,
            date: event.date,
            location: event.location
        };

        EventDataManager.update(editedEvent)
            .then(() => history.push("/events")
        )
    }

    useEffect(() => {
        EventDataManager.getEventById(eventId)
        .then(event => {
            setEvent(event);
            setIsLoading(false);
        });
    }, []);

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