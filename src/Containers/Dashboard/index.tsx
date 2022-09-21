import withDashboard from "./withDashboard"
import { Map, MainChart } from "../../Components"

const Dashboard = ({context,dispatch}) => {
	return (
		<div className="dashboard-div">  

		<h2> Dashboard </h2>

		<div className="dashboard-comps-div">
		<Map />

		<MainChart context={context}/>

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


					
			
			
				`
				}
			</style>
		</div>
			)
		}
		
		
		export default withDashboard(Dashboard)