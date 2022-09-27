import withDashboard from "./withDashboard"
import { Map, WeeklyDisplay, DailyDisplay, CurrentDisplay } from "../../Components"
import { SelectedDataMode } from "../../lib/enums/selectedData"
import { Button, ButtonGroup } from '@mui/material';

//TODO CLAVAR LOS BOUNDS DEL MAPA. ASI TE PODES IR A CUALQUIER LADO Y TIRA CUALQUIER LONGLAT

const Dashboard = ({context,dispatch, setSelectedDay}) => {
  const {loadingData, weatherData, dataError, selectedDataDay, selectedDataMode} = context

	return (
		<div className="dashboard-div">  

		<div className="dashboard-comps-div">

      <div className="upper-pannels-div" > 
        <div> <Map /> </div>
        <div> <CurrentDisplay loading={loadingData} dataError={dataError} weatherData={weatherData} /></div>
    
      </div>


      <div className="mode-selection-buttons" style={{width: "100%", display: "flex", justifyContent: "center"}}>
        <ButtonGroup style={{marginTop: 30}}>
          <Button variant={selectedDataMode === SelectedDataMode.Daily ? "contained" : "outlined"} color={"success"} onClick={()=>dispatch({type:"setSelectedDataMode", value:SelectedDataMode.Daily})}> Daily </Button>
          <Button variant={selectedDataMode === SelectedDataMode.Weekly ? "contained" : "outlined"} color={"success"} onClick={()=>dispatch({type:"setSelectedDataMode", value:SelectedDataMode.Weekly})}> Weekly </Button>
        </ButtonGroup>
      </div>

      <div className="graphs-div" style={{width: "100%", display: "flex", flexFlow: "row wrap"}}>
        <div className="l-graph-div" >
          <div style={{marginLeft: -55}}>
          {/* { 
            selectedDataMode === SelectedDataMode.Weekly
            ? <WeeklyDisplay loading={loadingData} dataError={dataError} weatherData={weatherData}/>
            : <DailyDisplay setSelectedDay={setSelectedDay} loading={loadingData} dataError={dataError} weatherData={weatherData} selectedDataDay={selectedDataDay}/>
          }         */}
          </div>   
        </div>
         
         
      </div>
      
      
    <button onClick={()=> {console.log(context)}}> CONTEXT </button>

		</div>
		
			<style>
				{
				`    
					.dashboard-div {
						min-height: 100vh;
            max-width: 1300px;
            border: 2px solid green;
 
					}

					.dashboard-div h2 {
						margin-top: 15px;
					}

					.dashboard-comps-div {
						display: flex;
						flex-flow: row wrap;
						justify-content: space-even;
					}

          .upper-pannels-div {
            width: 100%;
            display: inherit;
            justify-content: space-between;
          }


					
			
			
				`
				}
			</style>
		</div>
			)
		}
		
		
		export default withDashboard(Dashboard)