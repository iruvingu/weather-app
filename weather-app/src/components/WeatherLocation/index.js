import React from 'react'
import Location from './Location';
import WeatherData from '../WeatherData';

import styled, { css } from 'styled-components'

const Button = styled.button`
    border-radius: 5px
    padding: 0.25em 1em
    margin: 1 1em
    background: transparent
    color: palevioletred
    border: 2px solid palevioletred

    ${props =>
        props.primary &&
        css`
          background: palevioletred;
          color: white;
        `};
`

const WeatherLocation = () => {
    return (
        <div>
        <Location city={"Mexico City"}></Location>
        <WeatherData></WeatherData>
        <Button primary>I'm a styled button</Button>
    </div>
    )
}

export default WeatherLocation
