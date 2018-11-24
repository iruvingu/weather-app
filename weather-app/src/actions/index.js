import getUrlForecastByCity from '../services/getUrlForecastByCity'
import transformForecast from '../services/transformForecast'
/**
 * Actions types
 */
export const SET_CITY = 'SET_CITY'
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA'

/**
 * Action Creators
 */
const setCity = payload => (
  { type: SET_CITY, payload }
)
const setForecastData = payload => ({type: SET_FORECAST_DATA, payload})

export const setSelectedCity = payload => {
  return dispatch => {

    const API_FORECAST_URL = getUrlForecastByCity(payload)
    
    // activar en el estado un indicador de busqueda de datos
    dispatch(setCity(payload))
    
    return fetch(API_FORECAST_URL)
        .then(response => {
            return response.json()
        })
        .then(jsonResponse => {
            const forecastData = transformForecast(jsonResponse)
            console.log(forecastData)

            // modificar el estado con el resultado de la promise (fecth)
            dispatch(setForecastData({city: payload, forecastData}))
        })
  }
}
