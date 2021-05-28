import * as ITypes from 'store/typeDefs';
import { types } from 'store/types';

export const actions = {
  isFetching: (status: boolean): ITypes.isFetchingProps =>{
    return {
      type: types.IS_FETCHING,
      payload: status,
    }
  },
  setRequestCity: (city: string): ITypes.setRequestCityProps => {
    return {
      type: types.SET_REQUEST_CITY,
      payload: city,
    }
  },
  setWeather: (payload: ITypes.WeatherData): ITypes.setWeatherProps => {
    return {
      type: types.SET_WEATHER,
      payload,
    }
  },
  setCurrentLocation: (payload: string): ITypes.setCurrentLocationProps => {
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