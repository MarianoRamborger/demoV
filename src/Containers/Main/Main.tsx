
import withMain from "./withMain"
import { COLORS } from "../../Constants/colors"
import { getA } from "../../lib/services"

const Main = ({context,testContext}) => {
    return <div id="main-container">

    <button onClick={async () => getA()}> Host </button>

            

        

        
        
    <style> 
        {`
            #main-container { 
              display: flex;
              flex-flow: column nowrap;
              align-items: center;
              align-content: center;
              background-color: ${context.contextTest};
              
                        
            }
            .main-inner-div {
                width: 1000px;
                min-height: 100vh;
                text-align: center;
                border-width: 0px 1px;
                border-color: #C6C6C6;
                border-style: solid;  
                background-color: ${COLORS.background};
            }

            .test-div { 
                display: flex;
                flex-flow: row wrap;
                justify-content: center;
                align-items: center;
                font-size: 20px;
                line-height: 50px;
            }

            .test-div div {
                display: inherit;
                align-items: inherit;
                width: 250px;
            }

            .test-div div p, .test-div div a {
                font-size: 24px;
                padding-right: 30px;
                text-decoration: none;
                color: black;
            }

            .test-div div a:hover {
                color: ${COLORS.accent}
            }


            
        `}
    </style>
    </div>
}

export default withMain(Main)
