import { API_KEY, URL_BASE_FORECAST } from '../constants/apiWeather'

const getUrlForecastByCity = city => {
  return `${URL_BASE_FORECAST}?q=${city}&appid=${API_KEY}`
}

export default getUrlForecastByCity