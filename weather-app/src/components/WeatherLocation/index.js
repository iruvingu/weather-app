import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import propTypes from 'prop-types'
/**
 * Components
 */
import Location from './Location';
import WeatherData from '../WeatherData';
import { StyleWeatherLocation } from './styles'
import transformWeather from '../../services/transformWeather'
import getUrlWeatherByCity from '../../services/getUrlWeatherByCity'

class WeatherLocation extends Component {

    //Es el punto en donde el componente se esta creando
    constructor(props) {
        super(props)
        const { city } = props
        // el estado local/parcial del componente, 
        // ayuda a que el componente se renderize
        this.state = {
            city,
            data: null
        }
    }

    componentDidMount() {
        this.handleUpdateClick()
    }

    componentDidUpdate(prevProps, prevState) {
    }

    handleUpdateClick = () => {
        const API_WEATHER_URL = getUrlWeatherByCity(this.state.city)
        fetch(API_WEATHER_URL)
            .then(response => {
                return response.json()})
            .then(myJson => { 
                console.log(myJson)
                const newWeather = transformWeather(myJson)

                this.setState({
                    // city: '東京',
                    data: newWeather
                })
            })
        console.log('Actualized')
    }

    render() {
        const { onWeatherLocationClick } = this.props
        const { city, data } = this.state
        return (
            <StyleWeatherLocation onClick={onWeatherLocationClick}>
                <Location city={city}></Location>
                {data 
                    ? <WeatherData data={data}></WeatherData>
                    : <CircularProgress color="secondary" size={50}/>
                }
            </StyleWeatherLocation>
        )
    }
}

WeatherLocation.propTypes = {
    city: propTypes.string.isRequired,
    onWeatherLocationClick: propTypes.func
}

export default WeatherLocation
