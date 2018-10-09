import React from 'react'
import WeatherLocation from './WeatherLocation'
import propTypes from 'prop-types'

const mapCities = cities => {
    return cities.map( city => <WeatherLocation key={city} city={city} />)
}

const LocationList = ({ cities }) => {
    return (
        <div>
        {mapCities(cities)}
        </div>
    )
}

LocationList.propTypes = {
    cities: propTypes.array.isRequired
}

export default LocationList
