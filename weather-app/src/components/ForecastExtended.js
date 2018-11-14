import React, { Component } from 'react'
import Forecast from './ForecastItem'
import propTypes from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Flex, Box } from 'reflexbox'
import getUrlForecastByCity from '../services/getUrlForecastByCity'
import transformForecast from '../services/transformForecast'

// const days = [
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday'
// ]

// const data = {
//     temperature: 10,
//     humidity: 10,
//     weatherState: 'normal',
//     wind: 10
//   }

class ForecastExtended extends Component{
    constructor(){
        super()
        this.state = {
            forecastData: null
        }
    }

    componentDidMount(){
        const API_FORECAST_URL = getUrlForecastByCity(this.props.city)
        fetch(API_FORECAST_URL)
            .then(response => {
                return response.json()
            })
            .then(jsonResponse => {
                console.log(jsonResponse)
                const forecastData = transformForecast(jsonResponse)
                console.log(forecastData)
                this.setState({
                    forecastData
                })
            })
    }

    renderForecastItem(forecastData) {
        return forecastData.map(forecast => (
        <Forecast key={`${forecast.day}${forecast.hour}`}
        hour={forecast.hour}
        weekDay={forecast.weekDay}
        data={forecast.data}
        />))
    }

    renderProgress() {
        return (<CircularProgress />)
    }

    render(){
        const { city } = this.props
        const { forecastData } = this.state
        return (
            <div
            style={{width: '100%', height: '100%'}}>
                <Flex
                style={{width: '100%', height: '100%'}}
                column>
                    <Box>
                        <h2>
                        Pronostico Extendido para {city}
                        </h2>
                    </Box>
                    <Box
                    flex
                    justify='center'
                    align='center'
                    column>
                        {forecastData
                            ? this.renderForecastItem(forecastData)
                            : this.renderProgress()
                         }
                    </Box>
                </Flex>
            </div>
        )
    }
}

ForecastExtended.propTypes = {
    city: propTypes.string.isRequired
}

export default ForecastExtended