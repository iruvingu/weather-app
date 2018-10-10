import React from 'react'
import WeatherLocation from './WeatherLocation'
import propTypes from 'prop-types'

const LocationList = ({ cities, onSelectedLocation }) => {

    const handleWeatherLocationClick = city => {
        console.log("handleWeatherLocationClick")
        onSelectedLocation(city)
    }

    const mapCities = cities => {
        return cities.map( city => 
            <WeatherLocation 
                key={city}
                city={city}
                onWeatherLocationClick={ () => handleWeatherLocationClick(city) }/>)
    }

    return (
        <div>
        {mapCities(cities)}
        </div>
    )
}

LocationList.propTypes = {
    cities: propTypes.array.isRequired,
    onSelectedLocation: propTypes.func
}

export default LocationList
