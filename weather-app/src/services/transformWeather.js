import convert  from 'convert-units'

import {
    CLOUD, CLOUDY, SUNNY, RAIN, SNOW, WINDY, FOG, THUNDERSTORM, DRIZZLE
} from '../constants/weather'

const getTemp = kelvin => {
        return Number(convert(kelvin).from("K").to("C").toFixed(2))
    }

const getWeatherState = weatherState => {
        const { id } = weatherState.weather[0]
        if (id < 300) return THUNDERSTORM
        else if (id < 400) return DRIZZLE
        else if (id < 600) return RAIN
        else if (id < 700) return SNOW
        else if (id < 741) return WINDY
        else if (id < 800) return FOG
        else if (id === 800) return SUNNY
        else if (id < 803) return CLOUD
        else return CLOUDY
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
