import { CircularProgress } from "@mui/material"
import { Button, ButtonGroup } from '@mui/material';
import { SelectedDataMode } from "../../lib/enums/selectedData";
import {  BarGraph  } from '../index'

const DailyGraphR = ({loading, setSelectedMode, selectedDataMode, dataError, selectedDataDay, weatherData}) => {
  let data = []
  if (weatherData.hourlyDataByDay) {
    const {hourlyDataByDay} = weatherData

    for (let i = 0; i < hourlyDataByDay[selectedDataDay].length; i+=4) {
      let formattedHour
      let h1 = hourlyDataByDay[selectedDataDay][i].hour.split(":")[0]
      

      let averageRad = {
        hours: `${hourlyDataByDay[selectedDataDay][i].hour.split(":")[0]} to ${i === 20 ? '00' : `${hourlyDataByDay[selectedDataDay][i+4].hour.split(":")[0]}` }`,
        avgRad:  (hourlyDataByDay[selectedDataDay][i].shortwaveRad + hourlyDataByDay[selectedDataDay][i+1].shortwaveRad + hourlyDataByDay[selectedDataDay][i+2].shortwaveRad + hourlyDataByDay[selectedDataDay][i+3].shortwaveRad) / 4
      }
      data.push(averageRad)

    }
  }
  
  return <div className="graphs-commmons-div">
    
    {loading 
     ? <CircularProgress color='primary'/>
     : 
        <div className="right-graph-div"> 

          <p className="section-title"> Hourly shortwave radiation  </p>

          <ButtonGroup style={{marginTop: 15}}  >
            <Button variant={selectedDataMode === SelectedDataMode.Daily ? "contained" : "outlined"} color={"success"} onClick={()=>setSelectedMode(SelectedDataMode.Daily)}> Daily </Button>
            <Button variant={selectedDataMode === SelectedDataMode.Weekly ? "contained" : "outlined"} color={"success"} onClick={()=>setSelectedMode(SelectedDataMode.Weekly)}> Weekly </Button>
          </ButtonGroup>

          <BarGraph dataset={data} />
        
      
      
     </div>
     
    }

  </div>  
}

export default DailyGraphR