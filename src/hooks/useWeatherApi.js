import { useEffect, useState } from 'react'
import { getApiData } from '../utils/getApiData'

import cities from "../data/cities";

export default function useWeatherApi(latlng = cities[0].position) {
  const [weatherData, setWeatherData] = useState({
    latlng: latlng,
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
