import styled, { css } from 'styled-components'

export default styled.section`
    color: white
    background: cornflowerblue

    ${props =>
        props.weatherExtraInfo &&
        css`
            background: palevioletred;
            color: white;
            width: 60%
            display: inline-block
        `};
    ${props =>
        props.weatherTemperature &&
        css`
            background: red;
            color: white;
            width: 40%
            display: inline-block
        `};
`