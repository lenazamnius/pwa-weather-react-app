import { WeatherData } from 'store/typeDefs';
import { GetWeatherResponse } from 'api/typeDefs';

export const transformResponse = (res: GetWeatherResponse): WeatherData => {
  return {
    temp: res.main.temp.toFixed(),
    feelsLike: res.main.feels_like.toFixed(),
    humidity: res.main.humidity,
    pressure: res.main.pressure,
    weatherDesc: capitalizeFirstLetters(res.weather[0].description),
    icon: res.weather[0].icon,
    sunrise: res.sys.sunrise,
    sunset: res.sys.sunset,
    windSpeed: res.wind.speed,
    cityCountry: res.sys.country,
    cityName: res.name,
  };
};


export const getLocalTime = (time: number): string => {
  return new Date(time * 1000).toLocaleTimeString();
}

export const capitalizeFirstLetters = (str: string) => {
  return str && str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}