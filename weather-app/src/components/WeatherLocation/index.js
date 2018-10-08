import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
/**
 * Components
 */
import Location from './Location';
import WeatherData from '../WeatherData';
import { StyleWeatherLocation } from './styles'
import transformWeather from '../../services/transformWeather'

import { API_WEATHER } from '../../constants/apiWeather'

class WeatherLocation extends Component {

    //Es el punto en donde el componente se esta creando
    constructor() {
        super()
        // el estado local/parcial del componente, 
        // ayuda a que el componente se renderize
        this.state = {
            city: '東京',
            data: null
        }
        console.log('Constructor')
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.handleUpdateClick()
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate')
    }

    handleUpdateClick = () => {
        fetch(API_WEATHER)
            .then(response => { return response.json()})
            .then(myJson => { 
                console.log(myJson)
                const newWeather = transformWeather(myJson)

                this.setState({
                    city: '東京',
                    data: newWeather
                })
            })
        console.log('Actualized')
    }

    render() {
        console.log('render')
        const { city, data } = this.state
        return (
            <StyleWeatherLocation>
                <Location city={city}></Location>
                {data 
                    ? <WeatherData data={data}></WeatherData>
                    : <CircularProgress color="secondary" size={50}/>
                }
            </StyleWeatherLocation>
        )
    }
}

export default WeatherLocation
