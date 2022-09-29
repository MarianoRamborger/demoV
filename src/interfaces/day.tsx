export interface DailyDay {
  time: string,
  tempAmp: number[]
  appTempAmp: number[],
  shortwaveRad: {},

}

export interface HourlyDay {
  date: string,
  hour: string,
  temp: number,
  appTemp: number,
  shortwaveRad: {}
}