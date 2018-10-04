import React from 'react'
import propTypes from 'prop-types'

import Section from './styles'

const WeatherExtraInfo = ({ humidity, wind }) => {
    return (
        <Section weatherExtraInfo>
            <div>
                <span>{`${humidity} % - `}</span>
                <span>{`${wind} viento`}</span>
            </div>
        </Section>
    )
}

WeatherExtraInfo.propTypes = {
    humidity: propTypes.number,
    wind: propTypes.number
}

export default WeatherExtraInfo
