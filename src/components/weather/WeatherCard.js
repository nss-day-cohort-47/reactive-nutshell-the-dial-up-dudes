import React from 'react'

export const WeatherCard = ({ weather }) => {

  const timeConverter = (epoch) => {
    let humanDate = new Date(epoch).toISOString()
    return humanDate;
  }

  return (
    <div className="daily__weather">
      <h3>The Weather</h3>
      <h3> { weather?.dt } </h3>
      <p> Hi: { weather?.temp?.max }&deg;  Lo: { weather?.temp?.min }&deg;</p>
      {/* <p> Conditions: { forecast?.weather[ 0 ]?.description } </p> */ }
    </div>
  )
}