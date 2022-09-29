import withDashboard from "./withDashboard"
import { Map, WeeklyGraphL, DailyGraphL, CurrentDisplay, WeeklyGraphR, DailyGraphR } from "../../Components"
import { SelectedDataMode } from "../../lib/enums/selectedData"
import { COLORS } from "../../Constants/colors";

const Dashboard = ({context,dispatch, setSelectedMode, setSelectedDay}) => {
  const {loadingData, weatherData, errorCode, selectedDataDay, selectedDataMode} = context

	return (
		<div className="dashboard-div">  

		  <div className="dashboard-comps-div">

        <div className="left-panels-div" style={{flex: 3.9, marginRight: 15}}>
          <Map /> 
        
          { 
            selectedDataMode === SelectedDataMode.Weekly
            ? <WeeklyGraphL loading={loadingData} setSelectedMode={setSelectedMode} selectedDataMode={selectedDataMode}  errorCode={errorCode} weatherData={weatherData}/>
            : <DailyGraphL setSelectedMode={setSelectedMode}  selectedDataMode={selectedDataMode}  setSelectedDay={setSelectedDay} loading={loadingData} errorCode={errorCode} weatherData={weatherData} selectedDataDay={selectedDataDay}/>
          }        
  
        </div>

        <div className="right-panels-div" style={{flex: 2}} >
          <CurrentDisplay loading={loadingData} errorCode={errorCode} weatherData={weatherData} />
         
          { 
            selectedDataMode === SelectedDataMode.Weekly
            ? <WeeklyGraphR loading={loadingData} setSelectedMode={setSelectedMode} selectedDataMode={selectedDataMode}  errorCode={errorCode} weatherData={weatherData} />
            : <DailyGraphR loading={loadingData} setSelectedMode={setSelectedMode} selectedDataMode={selectedDataMode}   errorCode={errorCode} weatherData={weatherData} selectedDataDay={selectedDataDay}/>
          }
        </div>

		</div>
		
			<style>
				{
				`    
					.dashboard-div {
						min-height: 100vh;
            max-width: 1200px;       
					}

					.dashboard-div h2 {
						margin-top: 15px;
					}

					.dashboard-comps-div {
            width: 1200px;
						display: flex;
						flex-flow: row nowrap;
            justify-content: space-between;
            margin-top: 20px;
					}

          .graphs-commmons-div {
            width: 100%;
            margin-top: 10px;
            background-color: ${COLORS.componentBackground};
            display: flex;
            flex-flow: column wrap;
            align-content: center;
            justify-content: center;
            min-height: 360px;
            border-radius: 5px;
          }

   
          .left-panels-div, .right-panels-div {
            display: flex;
            flex-flow: column wrap;
  
          }

          .right-panels-div { 
            max-width: 400px;
          }

          .left-graph-div, .right-graph-div {
            display: flex;
            flex-flow: column wrap;
            align-content: center;
            align-items: center;
            width: 100%;
          }

          .section-title {
            font-size: 20px;
            text-align: center;
            margin-bottom: 3px;
            margin-top: 5px;
          }

          p,h1,h2,h3,h4,h5,h6 {
            color: ${COLORS.textPrimary};
          }
				`
				}
			</style>
		</div>
			)}
			
		export default withDashboard(Dashboard)