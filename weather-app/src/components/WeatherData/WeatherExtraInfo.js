import React from 'react'
import propTypes from 'prop-types'

import { StyleWeatherExtraInfo } from './styles2'

const WeatherExtraInfo = ({ humidity, wind }) => {
    return (
            <StyleWeatherExtraInfo>
                <span>{`Humedad: ${humidity} %`}</span>
                <span>{`Viento: ${wind} m/s`}</span>
            </StyleWeatherExtraInfo>
    )
}

// https://www.styled-components.com/docs/api#primary

WeatherExtraInfo.propTypes = {
    humidity: propTypes.number,
    wind: propTypes.number
}

export default WeatherExtraInfo
