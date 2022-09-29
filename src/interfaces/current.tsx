export interface CurrentWeather {
  date: string,
  temperature: number,
  hour: string,
  weatherCode: number
  windspeed?: number,
  location?: string,
  sunrise?: string,
  sunset?: string

}
