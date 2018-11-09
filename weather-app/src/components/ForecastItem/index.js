import React from 'react'
import propTypes from 'prop-types'
import WeatherData from '../WeatherData'

const Forecast = ({ weekDay, hour, data }) => {
  return (
    <div>
      <div>{weekDay} Hora:{hour} hrs</div>
      <WeatherData data={data}/>
    </div>
    
  )
}

Forecast.propTypes = {
  weekDay: propTypes.string.isRequired,
  data: propTypes.shape({
    temperature: propTypes.number.isRequired,
    weatherState: propTypes.string.isRequired,
    humidity: propTypes.number.isRequired,
    wind: propTypes.number.isRequired
    }
  )
}

export default Forecast
