export interface dailyDay {
  time: string,
  tempAmp: number[]
  appTempAmp: number[],
  shortwaveRad: {}

}

export interface hourlyDay {
  date: string,
  hour: string,
  temp: number,
  shortwaveRad: {}
}