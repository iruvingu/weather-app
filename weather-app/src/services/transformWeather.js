import convert  from 'convert-units'

import {
    CLOUD, CLOUDY, SUNNY, RAIN, SNOW, WINDY, FOG
} from '../constants/weather'

const getTemp = kelvin => {
        return Number(convert(kelvin).from("K").to("C").toFixed(2))
    }

const getWeatherState = weatherState => {
        const { description } = weatherState.weather[0]
        console.log(description)
        if (description === 'clear sky') return SUNNY
        if (description === 'few clouds') return CLOUD
        if (description === 'scattered clouds') return CLOUDY
        if (description === 'broken clouds') return CLOUDY
        if (description === 'rain') return RAIN
        if (description === 'shower rain') return RAIN
        if (description === 'snow') return SNOW
        if (description === 'mist') return WINDY
        if (description === 'haze') return WINDY
        else return FOG
        // return CLOUDY
    }

const transfromWeather = weather_data => {

    const { humidity, temp } = weather_data.main
    const { speed } = weather_data.wind
    const weatherState = getWeatherState(weather_data)
    const temperature = getTemp(temp)
    const data = {
        temperature: temperature,
        weatherState: weatherState,
        humidity: humidity,
        wind: speed
    }

    return data
}

export default transfromWeather
