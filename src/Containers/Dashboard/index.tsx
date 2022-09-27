import withDashboard from "./withDashboard"
import { Map, WeeklyDisplay, DailyDisplay, CurrentDisplay } from "../../Components"
import { SelectedDataMode } from "../../lib/enums/selectedData"
import { Button, ButtonGroup } from '@mui/material';
import { COLORS } from "../../Constants/colors";

//TODO CLAVAR LOS BOUNDS DEL MAPA. ASI TE PODES IR A CUALQUIER LADO Y TIRA CUALQUIER LONGLAT

const Dashboard = ({context,dispatch, setSelectedMode, setSelectedDay}) => {
  const {loadingData, weatherData, dataError, selectedDataDay, selectedDataMode} = context

	return (
		<div className="dashboard-div">  

		<div className="dashboard-comps-div">

      <div className="left-panels-div" style={{flex: 4, marginRight: 15}}>
          <div> <Map /> </div>
        
          { 
            selectedDataMode === SelectedDataMode.Weekly
            ? <WeeklyDisplay loading={loadingData} setSelectedMode={setSelectedMode} selectedDataMode={selectedDataMode}  dataError={dataError} weatherData={weatherData}/>
            : <DailyDisplay setSelectedMode={setSelectedMode}  selectedDataMode={selectedDataMode}  setSelectedDay={setSelectedDay} loading={loadingData} dataError={dataError} weatherData={weatherData} selectedDataDay={selectedDataDay}/>
          }        
  
      </div>

      <div className="right-panels-div" style={{flex: 1}} >
         <CurrentDisplay loading={loadingData} dataError={dataError} weatherData={weatherData} />
         <button onClick={()=> {console.log(context)}}> CONTEXT </button>
      </div>



      {/* <div className="mode-selection-buttons" style={{width: "100%", display: "flex", justifyContent: "center"}}>
        <ButtonGroup style={{marginTop: 30}}>
          <Button variant={selectedDataMode === SelectedDataMode.Daily ? "contained" : "outlined"} color={"success"} onClick={()=>dispatch({type:"setSelectedDataMode", value:SelectedDataMode.Daily})}> Daily </Button>
          <Button variant={selectedDataMode === SelectedDataMode.Weekly ? "contained" : "outlined"} color={"success"} onClick={()=>dispatch({type:"setSelectedDataMode", value:SelectedDataMode.Weekly})}> Weekly </Button>
        </ButtonGroup>
      </div> */}


      
      
   

		</div>
		
			<style>
				{
				`    
					.dashboard-div {
						min-height: 100vh;
            max-width: 1300px;
           
					}

					.dashboard-div h2 {
						margin-top: 15px;
					}

					.dashboard-comps-div {
            border: 2px solid magenta;
            width: 1300px;
						display: flex;
						flex-flow: row nowrap;
            justify-content: space-between;
            margin-top: 20px;
            
					}

          .graphs-commmons-div {
            width: 100%;
            margin-top: 20px;
            min-height: 450px;
            background-color: ${COLORS.componentBackground};
            display: flex;
            flex-flow: column wrap;
            align-content: center;
            justify-content: center;
          }

   
          .left-panels-div, .right-panels-div {
            display: flex;
            flex-flow: column wrap;
            border: 2px solid yellow;
          }

          .left-graph-div {
            display: flex;
            flex-flow: column wrap;
            align-content: center;
            align-items: center;
            width: 100%;
          }
					
			
			
				`
				}
			</style>
		</div>
			)
		}
		
		
		export default withDashboard(Dashboard)