import React from 'react'
import WeatherIcons from 'react-weathericons'
import propTypes from 'prop-types'

import {
    CLOUD, CLOUDY, SUNNY, RAIN, SNOW, WINDY, FOG, THUNDERSTORM, DRIZZLE
} from '../../constants/weather'

import { StyleWeatherTemperature, StyleTemperature, Wicon } from './styles2'

const icons = {
    [SUNNY]: "day-sunny",
    [FOG]: "day-fog",
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy",
    [THUNDERSTORM]: "thunderstorm",
    [DRIZZLE]: "sprinkle"
}

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState]

    const sizeIcon = "4x"

    if (icon)
        return <Wicon><WeatherIcons name={icon} size={sizeIcon} /></Wicon>
    else
        return <Wicon><WeatherIcons name={icons.cloud} size={sizeIcon} /></Wicon>
}

const WeatherTemperature = ({ temperature, weatherState }) => {
    return (
        <StyleWeatherTemperature>
            <div>
                {getWeatherIcon(weatherState)}
                <StyleTemperature>{`${temperature}°`}</StyleTemperature>
            </div>
        </StyleWeatherTemperature>
    )
}

WeatherTemperature.propTypes = {
    temperature: propTypes.number.isRequired,
    weatherState: propTypes.string,
}

export default WeatherTemperature
