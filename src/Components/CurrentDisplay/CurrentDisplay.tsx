import IconFactory from "../IconFactory/IconFactory"
import { CircularProgress } from '@mui/material';
import { hourExtractor } from "../../lib/utils";

const CurrentDisplay = ({loading, dataError, weatherData}) => {

  
  return <div className="current-weather-display"> 

    {loading 
    ? <CircularProgress color='primary'/> 
    : <div> 
      
        <h2 style={{fontSize: 30}}> {weatherData.currentData.location } </h2>

        <div className="weather-panel-div"> 

        <div style={{display:"flex",alignItems:'center'}}>
          <IconFactory code={weatherData.currentData.weatherCode} size={35} hour={hourExtractor(weatherData.currentData.hour)} /> 
          <p className="current-temperature"> {weatherData.currentData.temperature} °C </p>
        </div>
    
        </div>
      </div>
    
}

  <style>
    {`
      .current-weather-display {
        width: 550px;
        height: 250px;
        display: flex;
        border-radius: 10px;
        flex-flow: column nowrap;
        align-items: center;
        border: 2px solid green;
      }   

      .weather-panel-div {
        display: flex;
        flex-flow: row nowrap;       
      }

      .current-temperature {
        font-size: 40px;
        margin-top: 5px;
        margin-bottom: 5px;
        padding-left: 10px;
      }
    `}
  </style>
  </div>
}

export default CurrentDisplay