import React from 'react'
import WeatherExtraInfo from './WeatherExtraInfo'
import WeatherTemperature from './WeatherTemperature'

import {
    CLOUD, CLOUDY, SUNNY, RAIN, SNOW, WINDY, FOG
} from '../../constants/weather'

// import styled, { css } from 'styled-components'

// const Section = styled.section`
//     color: white
//     background: cornflowerblue
// `

const WeatherData = () => (
    <div>
        <WeatherTemperature
            temperature={25}
            weatherState={CLOUDY}
        />
        <WeatherExtraInfo humidity={80} wind={"10 m/s"} />
    </div>
)

export default WeatherData