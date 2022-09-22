import { useCtxValue } from "../../Context/context"
import {useEffect} from 'react'
import { getData } from "../../lib/services"
import { dailyDay } from "../../interfaces/day"

const withDashboard = Component => props => {
    const [context, dispatch] : any = useCtxValue()

    useEffect(() => {
      const fetchData = async () => {
        dispatch({type:"setLoadingData", value: true})
        let weatherData = await getData(context.selectedPosition.lng, context.selectedPosition.lat)
      
        let currentData: object[] = []
        let hourlyData: object[] = []
        let dailyData : object[] = []

      

        for (let i = 0; i < weatherData.daily.time.length; i++) {
          let day : dailyDay = {
            time: weatherData.daily.time[i],
            tempAmp: [weatherData.daily.temperature_2m_max[i],weatherData.daily.temperature_2m_min[i]],
            appTempAmp: [weatherData.daily.apparent_temperature_max[i],weatherData.daily.apparent_temperature_min[i]]
          }
          dailyData.push(day)
        }





        dispatch({type: "setWeatherData", data: {currentData,hourlyData,dailyData} })
        dispatch({type:"setLoadingData", value: false})
      }
      fetchData()
    },
    [context.selectedPosition, dispatch])


    const dashboardActions = {
        context,
        dispatch
    }

    return <Component  {...dashboardActions} />
}


export default withDashboard