import { LineGraph } from ".."
import { CircularProgress } from "@mui/material"
import { Button, ButtonGroup } from '@mui/material';
import { SelectedDataMode } from "../../lib/enums/selectedData";

const DailyGraphL = ({setSelectedDay, setSelectedMode, selectedDataMode, loading, dataError, selectedDataDay, weatherData}) => {
  
  const renderDayButtons = () => {
    let btnArray = []
    for (let i = 0; i < 7; i++) {
      btnArray.push(
        <Button key={`day-button-${i}`} variant={selectedDataDay === i ? "contained" : "outlined"} 
        color={"success"} onClick={()=>setSelectedDay(i)}> 
        {weatherData.dailyData[i].time} </Button>
      )
    }
  
    return btnArray
  }


  return <div className="graphs-commmons-div">     
    
    {loading 
     ? <CircularProgress color='primary'/>
     : <div className="left-graph-div"> 

          <p className="section-title"> Hourly forecast </p>

          <div className="daily-view-btn-group">
            <ButtonGroup style={{marginTop: 15}}>
              <Button variant={selectedDataMode === SelectedDataMode.Daily ? "contained" : "outlined"} color={"success"} onClick={()=>setSelectedMode(SelectedDataMode.Daily)}> Daily </Button>
              <Button variant={selectedDataMode === SelectedDataMode.Weekly ? "contained" : "outlined"} color={"success"} onClick={()=>setSelectedMode(SelectedDataMode.Weekly)}> Weekly </Button>
            </ButtonGroup>

            <ButtonGroup style={{marginLeft: 15}}>
            {renderDayButtons()}
          </ButtonGroup>
          </div>
          

          <LineGraph loading={loading} dataset={weatherData.hourlyDataByDay[selectedDataDay]} xKey="hour" lineKeys={["temp"]} width={'85%'}/>            

        
          
      </div>
    }

  </div>
}

export default DailyGraphL