import { CircularProgress } from "@mui/material"
import { GRAPHCOLORS } from "../../Constants/colors";
import {  BarGraph, ErrorFallback  } from '../'

const DailyGraphR = ({loading, setSelectedMode, selectedDataMode, errorCode, selectedDataDay, weatherData}) => {
  
  let data = []
  if (weatherData.hourlyDataByDay) {
    const {hourlyDataByDay} = weatherData
    for (let i = 0; i < hourlyDataByDay[selectedDataDay].length; i+=4) {
      let averageRad = {
        hours: `${ hourlyDataByDay[selectedDataDay][i].hour.split(":")[0]} to ${i === 20 
          ? '00' 
          : `${hourlyDataByDay[selectedDataDay][i+4].hour.split(":")[0]}` }`,
        avgRad:  (hourlyDataByDay[selectedDataDay][i].shortwaveRad + 
            hourlyDataByDay[selectedDataDay][i+1].shortwaveRad + 
            hourlyDataByDay[selectedDataDay][i+2].shortwaveRad + 
            hourlyDataByDay[selectedDataDay][i+3].shortwaveRad) / 4
      }
      data.push(averageRad)
    }
  }
  
  return <div className="graphs-commmons-div">
  
    {loading 
     ? <CircularProgress color='primary'/>
     : errorCode 
        ? <ErrorFallback  errorCode={errorCode}/>
        : <div className="right-graph-div"> 
            <p className="section-title"> Hourly shortwave radiation (W/m²) </p>

            <BarGraph dataset={data} barKeys={[
                {
                  value: "avgRad",
                  color: GRAPHCOLORS.dataPrimary
                }
              ]}
              />     
     </div> 
    }
  </div>  
}

export default DailyGraphR