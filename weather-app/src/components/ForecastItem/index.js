import React from 'react'
import propTypes from 'prop-types'
import WeatherData from '../WeatherData'
import { Flex, Box } from 'reflexbox'

const Forecast = ({ weekDay, hour, data }) => {
  return (
    <div
    style={{width: '100%'}}>
      <Flex
      column
      my={1}>
        <Box>
          <div>{weekDay} Hora:{hour} hrs</div>
        </Box>
        <Box>
          <WeatherData data={data}/>
        </Box>
      </Flex>
    </div>
    
  )
}

Forecast.propTypes = {
  weekDay: propTypes.string.isRequired,
  data: propTypes.shape({
    temperature: propTypes.number.isRequired,
    weatherState: propTypes.string.isRequired,
    humidity: propTypes.number.isRequired,
    wind: propTypes.number.isRequired
    }
  )
}

export default Forecast
