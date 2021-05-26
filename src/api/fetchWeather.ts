import { FETCH_LOCATION_URL, FETCH_WEATHER_URL, LOCATION_API_TOKEN, WEATHER_API_TOKEN } from 'utils/constants';

export const fetchWeather = async (query: string) => {
  const url = `${FETCH_WEATHER_URL}?q=${query}&units=metric&appid=${WEATHER_API_TOKEN}`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

export const fetchCurLocation = async () => {
  const url = `${FETCH_LOCATION_URL}${LOCATION_API_TOKEN}`;
  const response = await fetch(url);
  const location = await response.json();

  return location;
};