import { LineGraph, ErrorFallback } from ".."
import { CircularProgress } from "@mui/material"
import { Button, ButtonGroup } from '@mui/material';
import { SelectedDataMode } from "../../lib/enums/selectedData";
import { GRAPHCOLORS } from "../../Constants/colors";

const DailyGraphL = ({
  setSelectedDay, setSelectedMode, selectedDataMode,
   loading, errorCode, selectedDataDay, weatherData
  }) => {
   

  const renderDayButtons = () => {
    let btnArray = []
    for (let i = 0; i < 7; i++) {
      btnArray.push(
        <Button key={`day-button-${i}`} 
        variant={ selectedDataDay === i 
          ? "contained" : 
          "outlined"} 
          color={"success"} 
          size={"small"}
          onClick={ ()=>setSelectedDay(i)} > 
          { weatherData.dailyData[i].time  } 

        </Button>
      )
    } 
    return btnArray
  }


  return <div className="graphs-commmons-div">     
    
    {loading 
     ? <CircularProgress color='primary'/>
     : errorCode 
        ? <ErrorFallback  errorCode={errorCode}/>
        : <div className="left-graph-div"> 

            <p className="section-title"> Hourly forecast </p>

            <div className="daily-view-btn-group">
              
              <ButtonGroup style={{marginTop: 15, marginBottom: 12,  marginRight: 15}}>
                <Button variant={selectedDataMode === SelectedDataMode.Daily 
                  ? "contained" 
                  : "outlined"
                } 
                  color={"success"}
                  size={"small"}
                  onClick={ () => setSelectedMode(SelectedDataMode.Daily) } > 
                    Daily 
                </Button>
                
                <Button variant={ selectedDataMode === SelectedDataMode.Weekly 
                  ? "contained" 
                  : "outlined"
                } 
                  color={"success"} 
                  size={"small"}
                  onClick={ ()=>setSelectedMode(SelectedDataMode.Weekly)} > 
                    Weekly 
                </Button>
              </ButtonGroup>

              <ButtonGroup style={{marginLeft: 15}}>
                {renderDayButtons()}
              </ButtonGroup>
            </div>
            
            <LineGraph 
            dataset={ weatherData.hourlyDataByDay[selectedDataDay] } 
            xKey="hour" 
            width={'85%'}
            lineKeys={[
              {
                value: "temp",
                color: GRAPHCOLORS.dataPrimary,
              },
              {
                value: "appTemp",
                color: GRAPHCOLORS.dataSecondary
              }
            ]} 
            />            
   
      </div>
    }

  </div>
}

export default DailyGraphL