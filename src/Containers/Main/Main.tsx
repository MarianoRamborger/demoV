
import withMain from "./withMain"
import {Dashboard} from "../index"

const Main = ({context,testContext}) => {
    return <div id="main-container">

    <Dashboard />
    
            
    </div>
}

export default withMain(Main)
