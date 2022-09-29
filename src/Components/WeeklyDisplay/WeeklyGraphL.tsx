import { CircularProgress } from "@mui/material"
import { Button, ButtonGroup } from '@mui/material';
import { SelectedDataMode } from "../../lib/enums/selectedData";
import { GRAPHCOLORS } from "../../Constants/colors";
import {ErrorFallback, AreaGraph} from '../'

const WeeklyGraphL = ({loading, setSelectedMode, selectedDataMode, errorCode, weatherData}) => {
  
  return <div className="graphs-commmons-div">
    
    { loading 
     ? <CircularProgress color='primary'/>
     : errorCode 
      ? <ErrorFallback  errorCode={errorCode}/>
      : <div className="left-graph-div"> 

          <p className="section-title"> Weekly temperature </p>

          <div style={{width: "71%"}}> 
            <ButtonGroup style={{marginTop: 15, marginBottom: 12, marginLeft: 10}}>

              <Button 
                variant={ selectedDataMode === SelectedDataMode.Daily 
                  ? "contained" 
                  : "outlined"
              } 
                size={"small"}
                color={"success"} 
                onClick={ ()=> setSelectedMode(SelectedDataMode.Daily) }> 
                Daily 
              </Button>

              <Button 
                variant={ selectedDataMode === SelectedDataMode.Weekly 
                    ? "contained" 
                    : "outlined"
              } 
                size={"small"}
                color={"success"} 
                onClick={()=>setSelectedMode(SelectedDataMode.Weekly)}> 
                Weekly 
              </Button>
            </ButtonGroup>
          </div>   

          <AreaGraph dataset={weatherData.dailyData} xKey="time"
          areaKeys={[
            {
              value: "tempAmp",
              color: GRAPHCOLORS.dataPrimary
            },
            {
              value: "appTempAmp",
              color: GRAPHCOLORS.dataSecondary
            }
          ]}
          width={'85%'}
        />
      
     </div>
     
    }

  </div>  
}

export default WeeklyGraphL