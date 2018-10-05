import React from 'react'
import WeatherIcons from 'react-weathericons'
import propTypes from 'prop-types'

import {
    CLOUD, CLOUDY, SUNNY, RAIN, SNOW, WINDY, FOG
} from '../../constants/weather'

import { StyleWeatherTemperature } from './styles2'

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

    const sizeIcon = "2x"

    if (icon)
        return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />
    else
        return <WeatherIcons className="wicon" name={icons.cloud} size={sizeIcon} />
}

const WeatherTemperature = ({ temperature, weatherState }) => {
    return (
        <StyleWeatherTemperature>
            <div>
                <span>{getWeatherIcon(weatherState)}</span>
                <span>{`${temperature}°`}</span>
            </div>
        </StyleWeatherTemperature>
    )
}

WeatherTemperature.propTypes = {
    temperature: propTypes.number.isRequired,
    weatherState: propTypes.string,
}

export default WeatherTemperature
