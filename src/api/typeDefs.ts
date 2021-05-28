export type WeatherDescriptionType = {
  description: string,
  icon: string,
  id: number,
  main: string,
}

export type TempDataType = {
  feels_like: number,
  humidity: number,
  pressure: number,
  temp: number,
  temp_max: number,
  temp_min: number,
}

export type SysDataType = {
  country: string,
  id: number,
  sunrise: number,
  sunset: number,
  type: number,
}

export type WindDataType = {
  deg: number,
  speed: number,
}

export interface BadResponse {
  cod: string | number,
  message: string,
}

export interface GetWeatherResponse {
  main: TempDataType,
  sys: SysDataType,
  weather: WeatherDescriptionType[],
  wind: WindDataType,
  name: string,
}

export interface GetLocation {
  city: string,
  country: string,
  hostname: string,
  ip: string,
  loc: string,
  org: string,
  postal: string,
  region: string,
  timezone: string,
}