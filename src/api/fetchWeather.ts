import { FETCH_LOCATION_URL, FETCH_WEATHER_URL } from 'utils/constants';

// const fetcher = async (url: string) => {
//   const response = await fetch(url);
//   const data = await response.json();
//
//   return data;
// };

// export type GetWeatherResponse = {
//   ok: boolean,
//   status: number,
//   statusText: string,
// }

export const fetchWeather = async (query: string) => {
  const url = `${FETCH_WEATHER_URL}?q=${query}&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

export const fetchCurLocation = async () => {
  const url = `${FETCH_LOCATION_URL}${process.env.REACT_APP_IPINFO_TOKEN}`;
  const response = await fetch(url);
  const location = await response.json();

  return location;
};