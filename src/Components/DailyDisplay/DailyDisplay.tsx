import { LineGraph } from "./.."
import { CircularProgress } from "@mui/material"
import { Button, ButtonGroup } from '@mui/material';
import { SelectedDataMode } from "../../lib/enums/selectedData";
import { COLORS } from "../../Constants/colors";

const DailyDisplay = ({setSelectedDay, setSelectedMode, selectedDataMode, loading, dataError, selectedDataDay, weatherData}) => {
  
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

          <ButtonGroup style={{marginTop: 30}}>
            <Button variant={selectedDataMode === SelectedDataMode.Daily ? "contained" : "outlined"} color={"success"} onClick={()=>setSelectedMode(SelectedDataMode.Daily)}> Daily </Button>
            <Button variant={selectedDataMode === SelectedDataMode.Weekly ? "contained" : "outlined"} color={"success"} onClick={()=>setSelectedMode(SelectedDataMode.Weekly)}> Weekly </Button>
          </ButtonGroup>

          <LineGraph loading={loading} dataset={weatherData.hourlyDataByDay[selectedDataDay]} xKey="hour" lineKeys={["temp"]} width={'85%'}/>            

          <ButtonGroup style={{marginLeft: 15, width: "100%", justifyContent : "center", border: "2px solid red"}}>
            {renderDayButtons()}
          </ButtonGroup>
      </div>
    }

    <style>
      {`
        .daily-view-div, .left-graph-div {
      
        }

      `}
    </style> 

  </div>
}

export default DailyDisplay