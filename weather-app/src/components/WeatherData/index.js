import React from 'react'
import WeatherExtraInfo from './WeatherExtraInfo'
import WeatherTemperature from './WeatherTemperature'

import {
    CLOUD, CLOUDY, SUNNY, RAIN, SNOW, WINDY, FOG
} from '../../constants/weather'

import { StyleWeatherDataIndex } from './styles2'

const WeatherData = () => (
    <StyleWeatherDataIndex>
            <WeatherTemperature
                temperature={25}
                weatherState={CLOUDY}
            />
            <WeatherExtraInfo
                humidity={80}
                wind={10} />
    </StyleWeatherDataIndex>
)

export default WeatherData