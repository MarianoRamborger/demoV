import IconFactory from "../IconFactory/IconFactory"
import { CircularProgress } from '@mui/material';
import { hourExtractor } from "../../lib/utils";
import { COLORS } from "../../Constants/colors";

const CurrentDisplay = ({loading, dataError, weatherData}) => {

  
  return <div className="current-weather-display"> 

    {loading 
    ? <CircularProgress color='primary'/> 
    : <div className="weather-panel-div"> 
      
        <h2 style={{fontSize: 36, marginBottom: 12}}> {weatherData.currentData.location } </h2>
        
        <div className="date-hour-div" style={{width: "100%"}}>
          <p style={{fontSize: 30, width: "100%", marginTop: 5}}> {weatherData.currentData.date} - {weatherData.currentData.hour} </p> 
        </div>


        <div style={{display: "flex", width: "100%",  justifyContent: "space-around"  }}> 
        <div style={{display: 'inherit', alignItems:'center'}}>
          <IconFactory code={weatherData.currentData.weatherCode} size={32} 
          hour={hourExtractor(weatherData.currentData.hour)} /> 

          <p style={{fontSize: 32, marginTop: 5, marginBottom: 5, paddingLeft: 10}}> {weatherData.currentData.temperature}°C </p>
        </div>

        <div style={{display: 'inherit', alignItems:'center'}}>
          <IconFactory code={1000} size={32} 
          hour={hourExtractor(weatherData.currentData.hour)} /> 

          <p style={{fontSize: 32, marginTop: 5, marginBottom: 5, paddingLeft: 10}}> {weatherData.currentData.windspeed}Km/h </p>
        </div>
        
        </div>

    
        </div>
     
    
}

  <style>
    {`
      .current-weather-display {
        width: 365px;
        height: 260px;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        background-color: ${COLORS.componentBackground};
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
    `}
  </style>
  </div>
}

export default CurrentDisplay