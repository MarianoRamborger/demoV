export const dateFormatter = (date:string, clipYear = true) => {
  let timeUnits = date.split("-")
  return `${timeUnits[1]}/${timeUnits[2]}${!clipYear ? `/${timeUnits[0]}` : ''}`
}

export const timeFormatter = (time:string, clipYear = true) => {
   let timeUnit = time.split(/(T)/)
   return  {date: dateFormatter(timeUnit[0], clipYear), hour:timeUnit[2]}
}

export const hourExtractor = (time:string) => {
  let timeUnit = time.split(/(:)/)
  return parseInt(timeUnit[0]) 
}

export const locationFormatter = (location:string) => {
  let locArr = location.split("/")
  let loc;
  if (locArr.length > 1) {
    loc = locArr[1]
  } else loc = locArr[0]
  return loc.replace("_", " ")

} 