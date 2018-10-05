import React, { Component } from 'react'
import Location from './Location';
import WeatherData from '../WeatherData';
import { StyleWeatherLocation, ActulizarButton } from './styles'

import {
    CLOUD, CLOUDY, SUNNY, RAIN, SNOW, WINDY, FOG
} from '../../constants/weather'

const data = {
    temperature: 25,
    weatherState: SUNNY,
    humidity: 30,
    wind: 10
}

class WeatherLocation extends Component {

    handleUpdateClick = () => {
        console.log('Actualizado')
    }

    render()
    {
        return (
            <StyleWeatherLocation>
                <Location city={"Mexico City"}></Location>
                <WeatherData data={data}></WeatherData>
                <ActulizarButton onClick={this.handleUpdateClick}>Actualizar</ActulizarButton>
            </StyleWeatherLocation>
        )
    }
}

export default WeatherLocation
