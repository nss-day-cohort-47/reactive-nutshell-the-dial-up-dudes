import React from 'react'
let currentCity;

export const WeatherCard = ({ weather, city }) => {
  console.log('city', city)
  const timeConverter = (epoch) => {
    let humanDate = new Date(epoch * 1000).toDateString()
    return humanDate;
  }
  if (city.length === 0) {
    currentCity = 'Nashville'
  } else {
    currentCity = city
  }
  return (
    <div className="daily__weather">
      <h3>Weather for { currentCity }</h3>
      <h4> { timeConverter(weather?.dt) } </h4>
      <p> Hi: { weather?.temp?.max }&deg; / Lo: { weather?.temp?.min }&deg;</p>
      <p>  { weather?.weather[ 0 ]?.description } </p>
    </div>
  )
}