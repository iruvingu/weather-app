import { URL_BASE_WEATHER, API_KEY } from '../constants/apiWeather'

const getUrlWeatherByCity = city => {
        
    return `${URL_BASE_WEATHER}?q=${city}&appid=${API_KEY}`
    
}

export default getUrlWeatherByCity
