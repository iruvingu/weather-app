import React from 'react'
import propTypes from 'prop-types'
import { StyleLocation } from './styles'

const Location = ({ city }) => {
    return ( 
        <div>
            <StyleLocation h1>
                {city}
            </StyleLocation>
        </div>
    )
}

Location.prototype = {
    city: propTypes.string.isRequired
}

export default Location
