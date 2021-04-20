// Abbey Royse
// This component is what displays all the current events in a list on a single page together

import React, { useState, useEffect } from 'react';
import { EventCard } from './EventCard';
import { getAllEvents, deleteEvent } from '../../modules/EventDataManager';
import { useHistory } from 'react-router';
import { getCoords, getWeather } from '../../modules/WeatherDataManager';
import { WeatherCard } from '../weather/WeatherCard';

export const EventList = () => {
  const [ events, setEvents ] = useState([]);
  const history = useHistory();

  // TODO Alex Dudley: Need to fetch Weather and set to state for Nashville. Then need to enable a button to check the weather based on an event Location.
  const [ weather, setWeather ] = useState([])
  const [ city, setCity ] = useState([])

  const getLocalWeather = () => {
    getCoords('Nashville')
      .then(res => getWeather(res.lat, res.long))
      .then(res => setWeather(res))
  }

  const getEventWeather = (city) => {
    setCity(city)
    getCoords(city)
      .then(res => getWeather(res.lat, res.long))
      .then(res => setWeather(res))

  }

  useEffect(() => {
    getLocalWeather()
  }, [])

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
      <section className='weather__container'>
        { <WeatherCard
          weather={ weather[ 0 ] }
          city={ city }

        /> }
      </section>
      <section className="section-content">
        <button type="button"
          className="btn"
          onClick={ () => { history.push("/events/create") } }>
          Add Event
  </button>
      </section>
      <div className="container-cards">
        { events.map(event =>
          <EventCard
            key={ event.id }
            event={ event }
            getEventWeather={ getEventWeather }
            handleDeleteEvent={ handleDeleteEvent } />)
        }
      </div>
    </>
  );
};