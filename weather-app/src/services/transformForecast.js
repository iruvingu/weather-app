import moment from 'moment'
import 'moment/locale/ja'
import transformWeather from './transformWeather'

const transformForecast = (data) => (
  data.list.filter((item) => (
    moment.unix(item.dt).utc().hour() === 6 ||
    moment.unix(item.dt).utc().hour() === 12 ||
    moment.unix(item.dt).utc().hour() === 18
    )
  ).map((item, i) => (
    {
      weekDay: moment.unix(item.dt).format('ddd'),
      hour: moment.unix(item.dt).utc().hour(),
      data: transformWeather(item)
  }
  ))
)

export default transformForecast
