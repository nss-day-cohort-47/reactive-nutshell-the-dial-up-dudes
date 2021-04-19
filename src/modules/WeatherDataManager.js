import { APIKey } from './Settings'

let weatherCollection = []

export const getWeather = (lat, long) => {
  return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${ lat }&lon=${ long }&exclude=current,minutely,hourly,alerts&units=imperial&appid=${ APIKey.weather }`)
    .then(res => res.json())
    .then(parsedRes => {
      weatherCollection = parsedRes.daily
      return weatherCollection;
    })
}


export const getCoords = (city) => {
  return fetch(`http://www.mapquestapi.com/geocoding/v1/address?key=${ APIKey.mapQuest }&location=${ city }`)
    .then(res => res.json())
    .then(parsedRes => {
      let coord = { "lat": 0, "long": 0 }
      coord.lat = parsedRes.results[ 0 ].locations[ 0 ].latLng.lat;
      coord.long = parsedRes.results[ 0 ].locations[ 0 ].latLng.lng;
      return coord;
    })
}