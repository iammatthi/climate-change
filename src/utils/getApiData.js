import axios from 'axios'
import credentials from '../config'

export const getApiData = async (query = [{ key: 'q', value: 'lugano' }]) => {
  const url_base = `https://api.openweathermap.org/data/2.5/weather?appid=${credentials?.apiKeyOpenWeather}&units=metric`

  const params = query.reduce((previousValue, currentValue) => {
    if (currentValue?.key && currentValue?.value) {
      return `${previousValue}&${currentValue.key}=${currentValue.value}`;
    } else {
      return `${previousValue}`;
    }
  }, '');

  return axios.get(`${url_base}${params}`)
}
