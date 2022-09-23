import { AreaGraph } from "../../../Components"

const WeeklyView = ({loading, dataError, weatherData}) => {
  return <div className="weekly-view-div">
    
    <AreaGraph loading={loading} dataset={weatherData.dailyData} xKey="time" areaKey="tempAmp"/>

    <style>
    {`
      .weekly-view-div {
        width: 100%;
      }
    `}
    </style>
  </div>  
}

export default WeeklyView