import { useCtxValue } from "../../Context/context"
import {useEffect} from 'react'
import { getData } from "../../lib/services"

const withDashboard = Component => props => {
    const [context, dispatch] : any = useCtxValue()

    useEffect(() => {
      const fetchData = async () => {
        dispatch({type:"setLoadingData", value: true})
        let weatherData = await getData(context.selectedPosition.lng, context.selectedPosition.lat)
        dispatch({type: "setWeatherData", data: weatherData})
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