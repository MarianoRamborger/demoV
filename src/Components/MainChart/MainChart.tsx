import { CircularProgress } from '@mui/material';
import { AreaChart, CartesianGrid, XAxis, YAxis, Area, Tooltip } from 'recharts';

const MainChart = ({context}) => {
  return (
    <div className="mainchart-div">

      {context.loadingData 
      ? <CircularProgress color='primary'/>
      : <AreaChart width={500} height={300} data={context.weatherData.dailyData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Area dataKey="tempAmp" stroke="#8884d8" fill="#8884d8" />
        <Tooltip />
        </AreaChart>
        
      
      
      } 

      <style> 
        {`

        .mainchart-div {
          width: 550px;
          height: 350px;
          border: 2px solid blue;
          border-radius: 10px;
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          justify-content: center;
        }

        `}
      </style>
    </div>

  )
}

export default MainChart