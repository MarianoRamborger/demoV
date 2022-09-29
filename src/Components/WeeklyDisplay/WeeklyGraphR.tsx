import { CircularProgress } from "@mui/material"
import { Button, ButtonGroup } from '@mui/material';
import { SelectedDataMode } from "../../lib/enums/selectedData";
import {ErrorFallback, RadialBarGraph} from '../index'


const WeeklyGraphR = ({loading, setSelectedMode, selectedDataMode, errorCode, weatherData}) => {

  let data = []
  if (weatherData.dailyData) {
    weatherData.dailyData.forEach((day) => {   
      let newDay = {
        ...day.shortwaveRad,
      }
      data.push(newDay)
    })  
  }
  
  return <div className="graphs-commmons-div"> 
    {loading 
     ? <CircularProgress color='primary'/>
      : errorCode 
        ? <ErrorFallback  errorCode={errorCode}/>
        : <div className="right-graph-div"> 
            <p className="section-title" style={{marginBottom: 2}}> 
              Weekly shortwave radiation (MJ/m²) 
            </p>
            <RadialBarGraph barKey="shortwaveRad" unit="MJ/m²" dataset={data}/>
     </div>    
    }
  </div>  
}

export default WeeklyGraphR