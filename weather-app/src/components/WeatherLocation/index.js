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
const Input = styled.input.attrs({
    type: 'text',
    size: props => (props.small ? 5 : undefined),
  })`
    border-radius: 3px;
    border: 1px solid palevioletred;
    display: block;
    margin: 0 0 1em;
    padding: ${props => props.padding};
  
    ::placeholder {
      color: palevioletred;
    }
  `
  

const WeatherLocation = () => {
    return (
        <div>
            <Location city={"Mexico City"}></Location>
            <WeatherData></WeatherData>
        </div>
    )
}

export default WeatherLocation
