import React from 'react'
import WeatherIcons from 'react-weathericons'
import propTypes from 'prop-types'

import {
    CLOUD, CLOUDY, SUNNY, RAIN, SNOW, WINDY, FOG
} from '../constants/weather'

const icons = {
    [SUNNY]: "day-sunny",
    [FOG]: "day-fog",
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy"
}

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState]
    if (icon)
        return <WeatherIcons name={icon} size="2x" />
    else
        return <WeatherIcons name={icons.cloud} size="2x" />
}

const WeatherTemperature = ({ temperature, weatherState }) => {
    return (
        <div>
            {
                getWeatherIcon(weatherState)
            }
            <span>
                {`${temperature}°`}
            </span>
        </div>
    )
}

WeatherTemperature.propTypes = {
    temperature: propTypes.number.isRequired,
    weatherState: propTypes.string,
}

export default WeatherTemperature
