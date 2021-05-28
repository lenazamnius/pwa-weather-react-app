export type RootState = {
  location: {
    city: string,
    country: string,
  },
  sun: {
    rise: string,
    set: string,
  },
  weather: {
    temp: number,
    feelsLike: number,
    humidity: number,
    pressure: number,
    weatherDesc: string,
    icon: string,
    windSpeed: number,
  },
  fetching: boolean,
  inputError: string,
  requestCity: string,
}

export type Action = {
  type: string,
  payload?: any,
}

export interface WeatherData {
  temp: string,
  feelsLike: string,
  humidity: number,
  pressure: number,
  weatherDesc: string,
  icon: string,
  sunrise: number,
  sunset: number,
  windSpeed: number,
  cityCountry: string,
  cityName: string,
}

export interface setWeatherProps {
  type: string,
  payload: WeatherData,
}

export interface setCurrentLocationProps {
  type: string,
  payload: string,
}

export interface setInputError {
  type: string,
  payload: string,
}

export interface setRequestCityProps {
  type: string,
  payload: string,
}

export interface isFetchingProps {
  type: string,
  payload: boolean,
}
