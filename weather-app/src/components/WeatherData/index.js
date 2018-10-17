import React from 'react'
import WeatherExtraInfo from './WeatherExtraInfo'
import WeatherTemperature from './WeatherTemperature'
import propTypes from 'prop-types'
import { Flex, Box } from 'reflexbox'

import { StyleWeatherDataIndex } from './styles2'

const WeatherData = ({ data: { temperature, weatherState, humidity, wind } }) => {
    // const { temperature, weatherState, humidity, wind } = data
    return (
        <StyleWeatherDataIndex>
            <Flex
                align='center'>
                <Box w={1/2}>
                <WeatherTemperature
                    temperature={temperature}
                    weatherState={weatherState}
                />
                </Box>
                <Box 
                    w={1/2}
                    justify='center'>
                    <WeatherExtraInfo
                    humidity={humidity}
                    wind={wind} />
                </Box>
            </Flex>
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