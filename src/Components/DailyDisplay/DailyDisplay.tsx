import { LineGraph } from "./.."

const DailyDisplay = ({loading, dataError, weatherData}) => {
  return <div className="daily-view-div">     
    
    <LineGraph loading={loading} dataset={weatherData.hourlyDataByDay[0]} xKey="hour" lineKeys={["temp"]} />            
    
    <style>
      {`
        .daily-view-div {
          width: 100%;
        }
      `}
    </style> 

  </div>
}

export default DailyDisplay