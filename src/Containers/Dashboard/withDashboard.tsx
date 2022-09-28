import { useCtxValue } from "../../Context/context"
import {useEffect} from 'react'
import { getData } from "../../lib/services"
import { dailyDay, hourlyDay } from "../../interfaces/day"
import { dateFormatter, locationFormatter, timeFormatter } from "../../lib/utils"
import { currentWeather } from "../../interfaces/current"
import { SelectedDataMode } from "../../lib/enums/selectedData"
import { RADCOLORS } from "../../Constants/colors"

const withDashboard = Component => props => {
    const [context, dispatch] : any = useCtxValue()

    useEffect(() => {
      const fetchData = async () => {
        dispatch({type:"setLoadingData", value: true})
        let weatherData = await getData(context.selectedPosition.lng, context.selectedPosition.lat)
      
        let hourlyDataByDay: any[] = [[],[],[],[],[],[],[]] //TODO init it better
        let dailyData : object[] = []
       
        for (let i = 0; i < weatherData.daily.time.length; i++) {
          let time = dateFormatter(weatherData.daily.time[i])
          let day : dailyDay = {
            time: time,
            tempAmp: [weatherData.daily.temperature_2m_max[i],weatherData.daily.temperature_2m_min[i]],
            appTempAmp: [weatherData.daily.apparent_temperature_max[i],weatherData.daily.apparent_temperature_min[i]],
            shortwaveRad: {name: time, shortwaveRad: weatherData.daily.shortwave_radiation_sum[i], fill: RADCOLORS[i]}
          }
          dailyData.push(day)
        }

        //? My ultimate goal was to get an array of 7 objects, one for each day of the week,
        //? Then each one of those should have an object containing the hour, and different
        //? methereological data. My first idea, to reduce the temporal complexity of the operation,
        //? was to split the arrays in 7 (one for each day), then split each "day-array" into single data arrays
        //? (IE hour array), then join these arrays with their corresponding info 
        //? (IE single hour array with  single temperature for that hour array)
        //? One problem though to use the data, I needed key:value pairs. 
        //? That would mean an interation through each array. I didn't like neither the spatial nor
        //? temporal complexity of that. 
        //? I decided on a, perhaps less elegant solution, but one which would avoid multiple iterations.

        //? so in the end I iterate thru a single array
        for (let n = 0; n < weatherData.hourly.time.length; n++) {
          let {date,hour} = timeFormatter(weatherData.hourly.time[n])

          let hourlyDay : hourlyDay = {
            date: date,
            hour: hour,
            temp: weatherData.hourly.temperature_2m[n],
            shortwaveRad: weatherData.hourly.shortwave_radiation[n]
          }

          hourlyDataByDay[(n===0?0:Math.floor(n/24))].push(hourlyDay)
          }

          let {date,hour} = timeFormatter(weatherData.current_weather.time, false)
          let currentData : currentWeather = {
            date : date,
            hour: hour,
            weatherCode: weatherData.current_weather.weathercode,
            temperature: weatherData.current_weather.temperature,
            windspeed: weatherData.current_weather.windspeed,
            location:  locationFormatter(weatherData.timezone),
          }
          
        dispatch({type: "setWeatherData", data: {currentData,hourlyDataByDay,dailyData} })
        dispatch({type:"setLoadingData", value: false})
      }
      fetchData()
    },
    [context.selectedPosition, dispatch])

    const setSelectedMode = (mode:SelectedDataMode) => {
      dispatch({type:"setSelectedDataMode", value:mode})
    }

    const setSelectedDay = (day:number) => {
      dispatch({
        type: 'setSelectedDataDay',
        value: day
      })
    }

    const dashboardActions = {
        context,
        dispatch,
        setSelectedMode,
        setSelectedDay
    }

    return <Component  {...dashboardActions} />
}


export default withDashboard