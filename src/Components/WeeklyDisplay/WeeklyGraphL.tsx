import { AreaGraph } from ".."
import { CircularProgress } from "@mui/material"
import { Button, ButtonGroup } from '@mui/material';
import { SelectedDataMode } from "../../lib/enums/selectedData";

//?I don't like the 71% either but I'm cutting a few corners


const WeeklyGraphL = ({loading, setSelectedMode, selectedDataMode, dataError, weatherData}) => {
  return <div className="graphs-commmons-div">
    
    {loading 
     ? <CircularProgress color='primary'/>
     : 
        <div className="left-graph-div"> 

          <p className="section-title"> Weekly temperature </p>
    
    
          <div style={{width: "71%"}}> 
            <ButtonGroup style={{marginTop: 15}}>
              <Button variant={selectedDataMode === SelectedDataMode.Daily ? "contained" : "outlined"} color={"success"} onClick={()=>setSelectedMode(SelectedDataMode.Daily)}> Daily </Button>
              <Button variant={selectedDataMode === SelectedDataMode.Weekly ? "contained" : "outlined"} color={"success"} onClick={()=>setSelectedMode(SelectedDataMode.Weekly)}> Weekly </Button>
            </ButtonGroup>
          </div>   

          <AreaGraph loading={loading} dataset={weatherData.dailyData} xKey="time" areaKey="tempAmp"
          width={'85%'}
        />
      
     </div>
     
    }

  </div>  
}

export default WeeklyGraphL