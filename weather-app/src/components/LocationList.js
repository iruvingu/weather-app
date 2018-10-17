import React from 'react'
import WeatherLocation from './WeatherLocation'
import propTypes from 'prop-types'
import { Content } from './StylesLocationList'

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
        <Content>
            {mapCities(cities)}
        </Content>
    )
}

LocationList.propTypes = {
    cities: propTypes.array.isRequired,
    onSelectedLocation: propTypes.func
}

export default LocationList
