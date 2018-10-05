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

const data2 = {
    temperature: 30,
    weatherState: RAIN,
    humidity: 50,
    wind: 5
}

class WeatherLocation extends Component {

    //Es el punto en donde el componente se esta creando
    constructor() {
        super()
        // el estado local/parcial del componente, 
        // ayuda a que el componente se renderize
        this.state = {
            city: '東京',
            data: data
        }
    }

    handleUpdateClick = () => {
        console.log('Actualized')
        this.setState({
            city: '横浜',
            data: data2
        })

    }

    render() {
        const { city, data } = this.state
        return (
            <StyleWeatherLocation>
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <ActulizarButton onClick={this.handleUpdateClick}>Actualize</ActulizarButton>
            </StyleWeatherLocation>
        )
    }
}

export default WeatherLocation
