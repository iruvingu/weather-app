import React from 'react'
import propTypes from 'prop-types'

const Location = ({ city }) => {
    return ( 
        <div>
            <h1>
                {city}
            </h1>
        </div>
    )
}

Location.prototype = {
    city: propTypes.string.isRequired
}

export default Location
