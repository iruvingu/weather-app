import React from 'react'
import propTypes from 'prop-types'

const WeatherExtraInfo = ({ humidity, wind }) => {
    return (
        <div>
            <span>{`${humidity} % - `}</span>
            <span>{`${wind} viento`}</span>
        </div>
    )
}

WeatherExtraInfo.propTypes = {
    humidity: propTypes.number,
    wind: propTypes.number
}

export default WeatherExtraInfo
