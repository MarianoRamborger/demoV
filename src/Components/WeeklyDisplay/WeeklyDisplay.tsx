import { AreaGraph } from "./.."
import { CircularProgress } from "@mui/material"
import { Button, ButtonGroup } from '@mui/material';
import { SelectedDataMode } from "../../lib/enums/selectedData";

//Get selection buttons here


const WeeklyDisplay = ({loading, setSelectedMode, selectedDataMode, dataError, weatherData}) => {
  return <div className="graphs-commmons-div">
    
    {loading 
     ? <CircularProgress color='primary'/>
     : 
        <div className="left-graph-div"> 
    
          <ButtonGroup style={{marginTop: 30}}>
            <Button variant={selectedDataMode === SelectedDataMode.Daily ? "contained" : "outlined"} color={"success"} onClick={()=>setSelectedMode(SelectedDataMode.Daily)}> Daily </Button>
            <Button variant={selectedDataMode === SelectedDataMode.Weekly ? "contained" : "outlined"} color={"success"} onClick={()=>setSelectedMode(SelectedDataMode.Weekly)}> Weekly </Button>
          </ButtonGroup>
         

          <AreaGraph loading={loading} dataset={weatherData.dailyData} xKey="time" areaKey="tempAmp"
          width={'85%'}
        />
      
     </div>
     
    }

    

    <style>
    {`
  
    `}
    </style>
  </div>  
}

export default WeeklyDisplay