import { types } from 'store/types';
import { Action, RootState } from 'store/typeDefs';
import { getLocalTime } from 'utils/helpers';

export const InitialState: RootState = {
  location: {
    city: '',
    country: '',
  },
  weather: {
    temp: 0,
    feelsLike: 0,
    humidity: 0,
    pressure: 0,
    weatherDesc: '',
    icon: '',
    windSpeed: 0,
  },
  sun: {
    rise: '',
    set: '',
  },
  fetching: false,
  requestCity: '',
  inputError: '',
};

export const reducer = (state: RootState = InitialState, action: Action) => {
  switch (action.type) {
    case types.SET_CURRENT_LOCATION:
      return {
        ...state,
        requestCity: action.payload,
      };
    case types.SET_WEATHER: {
      const { sunset, sunrise, cityName, cityCountry, ...rest } = action.payload;

      return {
        ...state,
        weather: { ...rest },
        sun: {
          set: getLocalTime(sunset),
          rise: getLocalTime(sunrise),
        },
        location: {
          city: cityName,
          country: cityCountry,
        },
      };
    }
    case types.SET_REQUEST_CITY:
      return {
        ...state,
        requestCity: action.payload,
      };
    case types.SET_INPUT_ERROR:
      return {
        ...state,
        inputError: action.payload,
      };
    case types.CLEAR_INPUT_ERROR:
      return {
        ...state,
        inputError: '',
      };
    case types.IS_FETCHING:
      return {
        ...state,
        fetching: action.payload,
      };
    default:
      throw new Error();
  }
};