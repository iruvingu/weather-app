import React from 'react'
import WeatherExtraInfo from './WeatherExtraInfo'
import WeatherTemperature from './WeatherTemperature'
import propTypes from 'prop-types'

import {
    CLOUD, CLOUDY, SUNNY, RAIN, SNOW, WINDY, FOG
} from '../../constants/weather'

import { StyleWeatherDataIndex } from './styles2'

const WeatherData = ({ data: { temperature, weatherState, humidity, wind } }) => {
    // const { temperature, weatherState, humidity, wind } = data
    return (
        <StyleWeatherDataIndex>
                <WeatherTemperature
                    temperature={temperature}
                    weatherState={weatherState}
                />
                <WeatherExtraInfo
                    humidity={humidity}
                    wind={wind} />
        </StyleWeatherDataIndex>
    )
}

WeatherData.propTypes = {
    data: propTypes.shape({
        temperature: propTypes.number.isRequired,
        weatherState: propTypes.string.isRequired,
        humidity: propTypes.number.isRequired,
        wind: propTypes.number.isRequired
        }
    )
}

export default WeatherData