import { CircularProgress } from "@mui/material"
import { Button, ButtonGroup } from '@mui/material';
import { SelectedDataMode } from "../../lib/enums/selectedData";
import RadialBarGraph from "../Graphs/RadialBarChart";

//Get selection buttons here



const WeeklyGraphR = ({loading, setSelectedMode, selectedDataMode, dataError, weatherData}) => {
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
     : 
        <div className="right-graph-div"> 

          <p className="section-title"> Weekly shortwave radiation  </p>

          <ButtonGroup style={{marginTop: 15}}  >
            <Button variant={selectedDataMode === SelectedDataMode.Daily ? "contained" : "outlined"} color={"success"} onClick={()=>setSelectedMode(SelectedDataMode.Daily)}> Daily </Button>
            <Button variant={selectedDataMode === SelectedDataMode.Weekly ? "contained" : "outlined"} color={"success"} onClick={()=>setSelectedMode(SelectedDataMode.Weekly)}> Weekly </Button>
          </ButtonGroup>
        
    <RadialBarGraph dataset={data}/>
      
     </div>
     
    }

  </div>  
}

export default WeeklyGraphR