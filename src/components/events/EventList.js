import React, { useState, useEffect } from 'react';
import { EventCard } from './EventCard';
import { getAllEvents, getEventById, deleteEvent } from '../../modules/EventDataManager';
import { useHistory } from 'react-router';
import { getCoords, getWeather } from '../../modules/WeatherDataManager';
import { WeatherCard } from '../weather/WeatherCard';

export const EventList = () => {
  const [ events, setEvents ] = useState([]);
  const history = useHistory();

  // TODO Need to fetch Weather and set to state for Nashville. Then need to enable a button to check the weather based on an event Location.
  const [ weather, setWeather ] = useState([])

  const getLocalWeather = () => {
    getCoords('Nashville')
      .then(res => getWeather(res.lat, res.long))
      .then(res => setWeather(res))
  }

  useEffect(() => {
    getLocalWeather()
  }, [])

  console.log('weather', weather)

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

  // getCoords('Nashville')
  //   .then(res => getWeather(res.lat, res.long))
  //   .then(res => console.log('weather forecast', res[ 0 ]))

  // getWeather(lat, long)
  //   .then(res => console.log('weather', res))

  return (
    <>
      <section className='weather__container'>
        { <WeatherCard
          weather={ }
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
            handleDeleteEvent={ handleDeleteEvent } />) }
      </div>
    </>
  );
};