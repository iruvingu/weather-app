import styled, { css } from 'styled-components'

export default styled.div`
    color: white
    background: gray
    width: 400px
    height: 100px
    line-height: 100px

    ${props =>
        props.weatherExtraInfo &&
        css`
            background: palevioletred;
            width: 50%
            display: inline-block
        `};

    ${props =>
        props.extraInfoText &&
        css`
            display: block;
            color: blue
            font-size: 16px
            font-weight: bold
        `};
    
    ${props =>
        props.weatherTemperature &&
        css`
            font-size: 30px
            font-weight: bold
            background: cornflowerblue;
            color: white;
            width: 50%
            display: inline-block
        `};
`

