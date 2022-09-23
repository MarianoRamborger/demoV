import withDashboard from "./withDashboard"
import { Map, ControlPanel } from "../../Components"
import { SelectedData } from "../../lib/enums/selectedData"
import {WeeklyView, DailyView, NowView} from './DataViews'


const Dashboard = ({context,dispatch}) => {
  const {loadingData, weatherData, dataError, selectedData} = context

	return (
		<div className="dashboard-div">  

		<h2> Dashboard </h2>

		<div className="dashboard-comps-div">

      <div className="upper-pannels-div"> 
        <Map />
        <ControlPanel dispatch={dispatch} selectedData={selectedData}/>
      </div>

    {selectedData === SelectedData.Weekly && <WeeklyView loading={loadingData} dataError={dataError} weatherData={weatherData}/>}
    {selectedData === SelectedData.Daily && <DailyView loading={loadingData} dataError={dataError} weatherData={weatherData}/>}
    {selectedData === SelectedData.Now && <NowView loading={loadingData} dataError={dataError} weatherData={weatherData}/>}
      
    <button onClick={()=> {console.log(context)}}> CONTEXT </button>

		</div>
		
			<style>
				{
				`    
					.dashboard-div {
						min-height: 100vh;
						margin: 0 5%;
					}

					.dashboard-div h2 {
						margin-top: 15px;
					}

					.dashboard-comps-div {
						display: flex;
						flex-flow: row wrap;
						justify-content: space-around;
					}

          .upper-pannels-div {
            width: 100%;
            display: inherit;
            justify-content: space-around;
          }


					
			
			
				`
				}
			</style>
		</div>
			)
		}
		
		
		export default withDashboard(Dashboard)