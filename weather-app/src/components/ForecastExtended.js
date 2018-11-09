import React, { Component } from 'react'
import Forecast from './ForecastItem'
import propTypes from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Flex, Box } from 'reflexbox'

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

    renderForecastItem() {
        return 'RenderItems'
        // return days.map(day => (<Forecast key={day} hour={10} weekDay={day} data={data}/>))
    }

    renderProgress() {
        return (<CircularProgress />)
    }

    render(){
        const { city } = this.props
        const { forecastData } = this.state
        return (
            <div
            style={{width: '100%'}}>
                <Flex
                style={{width: '100%'}}
                column>
                    <Box>
                        <h1>
                        Pronostico Extendido para {city}
                        </h1>
                    </Box>
                    <Box
                    flex
                    justify='center'
                    align='center'>
                        {forecastData
                    ? this.renderForecastItem()
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