import React, { Components } from 'react'
import Location from './Location';
import WeatherData from './WeatherData';

const WeatherLocation = () => {
    return (
        <div>
        <Location city={"Santiago"}></Location>
        <WeatherData></WeatherData>
    </div>
    )
}

export default WeatherLocation
