import React from 'react'
import propTypes from 'prop-types'
import WeatherData from '../WeatherData'

const Forecast = ({ weekDay, hour }) => {
  return (
    <div>
      <div>{weekDay} Hora:{hour} hrs</div>
      <WeatherData />
    </div>
    
  )
}

Forecast.propTypes = {
  weekDay: propTypes.string.isRequired,
}

export default Forecast
