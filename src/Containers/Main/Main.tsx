
import withMain from "./withMain"
import {Dashboard} from "../index"
import { COLORS } from "../../Constants/colors"

const Main = () => {
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
