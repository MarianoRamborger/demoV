
import withMain from "./withMain"
import {Dashboard} from "../index"

//? Not much going on here I know. But I may want to some authentication or something like that.

const Main = ({context,testContext}) => {
    return <div id="main-container">

    <Dashboard />
            
    </div>
}

export default withMain(Main)
