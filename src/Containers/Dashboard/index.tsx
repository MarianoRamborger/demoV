import withDashboard from "./withDashboard"
import { Map, WeeklyDisplay, DailyDisplay, CurrentDisplay } from "../../Components"
import { SelectedData } from "../../lib/enums/selectedData"

//TODO CLAVAR LOS BOUNDS DEL MAPA. ASI TE PODES IR A CUALQUIER LADO Y TIRA CUALQUIER LONGLAT

const Dashboard = ({context,dispatch}) => {
  const {loadingData, weatherData, dataError, selectedData} = context

	return (
		<div className="dashboard-div">  

		<h2> Dashboard </h2>

		<div className="dashboard-comps-div">

      <div className="upper-pannels-div"> 
        <Map />
        <CurrentDisplay loading={loadingData} dataError={dataError} weatherData={weatherData} />
        {/* <ControlPanel dispatch={dispatch} selectedData={selectedData}/> */}
      </div>

      { 
        selectedData === SelectedData.Weekly
        ? <WeeklyDisplay loading={loadingData} dataError={dataError} weatherData={weatherData}/>
        : <DailyDisplay loading={loadingData} dataError={dataError} weatherData={weatherData}/>
      }
      
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