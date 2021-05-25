import { GetLocation } from 'api/typeDefs';
import * as ITypes from 'store/typeDefs';
import { types } from 'store/types';

export const actions = {
  setCity: (city: string): ITypes.setCityProps => {
    return {
      type: types.SET_CITY,
      payload: city,
    }
  },
  setWeather: (payload: ITypes.WeatherData): ITypes.setWeatherProps => {
    return {
      type: types.SET_WEATHER,
      payload,
    }
  },
  setCurrentLocation: (payload: GetLocation): ITypes.setCurrentLocationProps => {
    return {
      type: types.SET_CURRENT_LOCATION,
      payload,
    }
  },
  setInputError: (error: string) : ITypes.setInputError => {
    return {
      type: types.SET_INPUT_ERROR,
      payload: error,
    }
  },
  clearInputError: () => {
    return {
      type: types.CLEAR_INPUT_ERROR,
    }
  }
}