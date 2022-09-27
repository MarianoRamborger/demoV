
import withMain from "./withMain"
import {Dashboard} from "../index"
import { COLORS } from "../../Constants/colors"


//? Not much going on here I know. But I may want to some authentication or something like that.

const Main = ({context,testContext}) => {
    return <div id="main-container" >

    <Dashboard />
            

    <style> 
      {`
        #main-container {
          display: flex;
          background-color: ${COLORS.background};
          flex-flow: column nowrap;
          align-content: center;
          align-items: center;
        }
      `}
      </style>
    </div>
}

export default withMain(Main)
