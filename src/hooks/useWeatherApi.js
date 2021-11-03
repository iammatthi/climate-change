import { useEffect, useState } from 'react'
import { getApiData } from '../utils/getApiData'

export default function useWeatherApi(lat = 46.003581482582945, lng = 8.951311985749403) {
  const [weatherData, setWeatherData] = useState({
    latlng: {
      lat: lat,
      lng: lng
    },
    isLoading: false,
    error: null
  })
  useEffect(() => {
    const search = async () => {
      try {
        // loading
        setWeatherData({
          ...weatherData,
          isLoading: true,
          error: null
        });

        // get data
        const { data } = await getApiData([{
          key: 'lat',
          value: weatherData.latlng.lat
        }, {
          key: 'lon',
          value: weatherData.latlng.lng
        }]);

        // data downloaded
        setWeatherData({
          ...weatherData,
          data,
          isLoading: false,
          error: null
        });
      } catch (error) {
        setWeatherData({
          ...weatherData,
          isLoading: false,
          error: error?.message
        })
      }
    }
    search()
  }, [weatherData?.latlng])

  return [weatherData, setWeatherData]
}
