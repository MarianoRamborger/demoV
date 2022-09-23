export const dateFormatter = (date:string) => {
  let timeUnits = date.split("-")
  return `${timeUnits[1]}/${timeUnits[2]}`
}

export const timeFormatter = (time:string) => {
   let timeUnit = time.split(/(T)/)
   return  {date: dateFormatter(timeUnit[0]), hour:timeUnit[2]}
}