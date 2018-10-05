import React from 'react'
import propTypes from 'prop-types'

import { StyleWeatherExtraInfo, StyleExtraInfoText } from './styles2'

const WeatherExtraInfo = ({ humidity, wind }) => {
    return (
            <StyleWeatherExtraInfo>
                <StyleExtraInfoText>{`Humedad: ${humidity} %`}</StyleExtraInfoText>
                <StyleExtraInfoText>{`Viento: ${wind} m/s`}</StyleExtraInfoText>
            </StyleWeatherExtraInfo>
    )
}

WeatherExtraInfo.propTypes = {
    humidity: propTypes.number,
    wind: propTypes.number
}

export default WeatherExtraInfo
