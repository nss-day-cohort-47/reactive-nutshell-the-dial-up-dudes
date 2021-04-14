import React, { useState, useEffect } from "react" 
import { useHistory, useParams } from "react-router"
import EventDataManager from "../../modules/EventDataManager"
import "./EventForm.css"

export const EventEditForm = () => {
    const [event, setEvent] = useState({ name: "", date: "", location: "" })
    const [isLoading, setIsLoading] = useState(false);

    const {id} = useParams();
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
        EventDataManager.getEventById(id)
        .then(event => {
            setEvent(event);
            setIsLoading(false);
        });
    }, []);

    return (
        <>
        <form>
            <fieldset>
                <div>
                    <input
                    
                    />
                </div>
            </fieldset>
        </form>
    )
}