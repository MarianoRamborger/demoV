import IconFactory from "../IconFactory/IconFactory"
import { CircularProgress } from '@mui/material';
import { hourExtractor } from "../../lib/utils";
import { COLORS } from "../../Constants/colors";
import {ErrorFallback} from '..'

const CurrentDisplay = ({loading, errorCode, weatherData}) => {
  const  {  date, hour, location, temperature, windspeed, sunrise, sunset } = weatherData.currentData
 
  return <div className="current-weather-display"> 
    {
      loading 
        ? <div style={{display: "flex", height: "100%", alignItems: "center"}}> <CircularProgress color='primary'/> </div> 
        : errorCode 
          ? <ErrorFallback  errorCode={errorCode}/>
          : <div className="weather-panel-div"> 
      
              <h2 style={{fontSize: 34, marginBottom: 12, marginTop: 0}}> 
                {location} 
              </h2>
          
              
              <div className="date-hour-div" >
                <IconFactory code={1001} size={20} /> 
                <p> 
                  {date}  -  {hour} 
                </p>
                <IconFactory code={1002} size={20} /> 
              </div>
             
              <div className="flexh-div"> 
                <div>
                  <IconFactory code={1003} size={24} /> 
                  <p  className="current-minor-p" style={{paddingLeft: 10}}> 
                  {temperature}°C 
                  </p>
              </div>

              <div>
                <p className="current-minor-p" style={{paddingRight: 10}}> 
                  {windspeed} Km/h 
                </p> 
                <IconFactory code={1000} size={24} hour={hourExtractor(hour)}/>              
              </div>
          
            </div>

            <div className="flexh-div"> 
                <div>
                  <IconFactory code={1004} size={24} /> 
                  <p  className="current-minor-p" style={{paddingLeft: 10}}> 
                  {sunrise}
                  </p>
              </div>

              <div>
                <p className="current-minor-p" style={{paddingRight: 10}}> 
                  {sunset}
                </p> 
                <IconFactory code={1005} size={24} hour={hourExtractor(hour)}/>              
              </div>
          
            </div>

          </div>
     
    
}

  <style>
    {`
      .current-weather-display {
        min-height: 200px;
        display: flex;
        flex-flow: column nowrap;
        align-items: center !important;
        background-color: ${COLORS.componentBackground};
        border-radius: 5px;
      }   

      .weather-panel-div {
        display: flex;
        align-items: center;
        align-content: center;
        text-align: center;
        flex-flow: column nowrap;
        width: 100%;       
      }

      .current-p {
        font-size: 32px;
        margin-top: 5px;
        margin-bottom: 5px;
        padding-left: 10px;
      }

      .flexh-div {
        display: flex; 
        width: 100%;
        justify-content: space-between;
        margin-top: 12px;
        
    
      }

      .flexh-div div {
        display: inherit;
        align-items: center;
        text-align: center;
        padding-left: 15px;
        padding-right: 15px;
      }

      .date-hour-div {
        display: flex;
        flex-flow: row nowrap;
        width: 100%;
        justify-content: center;
        align-items: center;

      }

      .date-hour-div p {
        font-size: 26px;
        margin: 0 10px;
      }

      .current-minor-p {
        font-size: 24px;
        margin: 5px 0;
      }

    `}
  </style>
  </div>
}

export default CurrentDisplay