import React, { Component } from 'react'
import Forecast from './ForecastItem'
import propTypes from 'prop-types'

const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
]

class ForecastExtended extends Component{

    renderForecastItem() {
        return days.map(day => (<Forecast key={day} hour={10} weekDay={day}/>))
    }

    render(){
        const { city } = this.props
        return (
            <div>
                Pronostico Extendido para {city}
                {this.renderForecastItem()}
            </div>
        )
    }
}

ForecastExtended.propTypes = {
    city: propTypes.string.isRequired
}

export default ForecastExtended