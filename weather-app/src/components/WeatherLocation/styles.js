import styled, { css } from 'styled-components'

export const StyleLocation = styled.h1`
    width: 100%
    height: 35px
    text-align: left
    color: #888
    line-height: 35px

    ${props => props.h1 && css`margin: 0`}
`

export const StyleWeatherLocation = styled.div`
    width: auto
    padding: 15px
    font-family: 'Roboto', sans-serif
    box-shadow: 10px 10px 40px -12px rgba(0, 0, 0, 0.75) 
`

export const ActulizarButton = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    color: palevioletred
    border: 1px solid palevioletred
`