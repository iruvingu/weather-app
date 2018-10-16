import React from 'react'
import WeatherExtraInfo from './WeatherExtraInfo'
import WeatherTemperature from './WeatherTemperature'
import propTypes from 'prop-types'
import { Flex, Box } from 'reflexbox'

import { StyleWeatherDataIndex } from './styles2'

const WeatherData = ({ data: { temperature, weatherState, humidity, wind } }) => {
    // const { temperature, weatherState, humidity, wind } = data
    return (
        <Flex>
            <Box
            align='center'>
                <StyleWeatherDataIndex>
                    <WeatherTemperature
                        temperature={temperature}
                        weatherState={weatherState}
                    />
                    <WeatherExtraInfo
                        humidity={humidity}
                        wind={wind} />
                </StyleWeatherDataIndex>
            </Box>
        </Flex>
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