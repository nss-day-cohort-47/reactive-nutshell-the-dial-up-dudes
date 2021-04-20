// Abbey Royse
// This component is what displays all the current events in a list on a single page together

import React, { useState, useEffect } from 'react';
import { EventCard } from './EventCard';
import { getAllEvents, deleteEvent } from '../../modules/EventDataManager';
import { useHistory } from 'react-router';

export const EventList = () => {
  const [events, setEvents] = useState([]);
  const history = useHistory();

  const getEvents = () => {
    return getAllEvents().then(EventsFromAPI => {
      setEvents(EventsFromAPI)
    });
  };

  const handleDeleteEvent = id => {
    deleteEvent(id)
      .then(() => getAllEvents().then(setEvents));
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <>
      <section className="section-content">
        <button type="button"
          className="btn-primary"
          onClick={() => { history.push("/events/create") }}>
          Add Event
  </button>
      </section>
      <div className="container-cards">
        {events.map(event =>
          <EventCard
            key={event.id}
            event={event}
            handleDeleteEvent={handleDeleteEvent} />)}
      </div>
    </>
  );
};