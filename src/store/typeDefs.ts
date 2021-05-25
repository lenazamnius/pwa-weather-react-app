import { Dispatch } from 'react';
import { GetLocation } from 'api/typeDefs';

export type AppContextType = {
  state: RootState,
  dispatch: Dispatch<Action>,
}

export type RootState = {
  location: GetLocation,
  sun: {
    rise: string,
    set: string,
  }
  weather: {
    temp: number,
    feelsLike: number,
    humidity: number,
    pressure: number,
    weatherDesc: string,
    icon: string,
    windSpeed: number,
  }
  inputError: string,
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
  payload: GetLocation,
}

export interface setInputError {
  type: string,
  payload: string,
}

export interface setCityProps {
  type: string,
  payload: string,
}
