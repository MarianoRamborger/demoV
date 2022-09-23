import { CircularProgress } from '@mui/material';
import { ResponsiveContainer , LineChart, Line,  CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const LineGraph = ({
  loading =true, error=false, 
  width=600, height=350, color= "#8884d8", 
  dataset, xKey="", yKey="", lineKeys=[] 

}) => {
  return (<div style={{
    width: width,
    height: height,
    borderRadius: 10,
    display: 'flex',
    flexFlow: "row wrap",
    alignItems: "center",
    justifyContent: "center"
  }}> 

  {loading 
  ? <CircularProgress color='primary'/> 
  : <ResponsiveContainer width="100%" height="80%">
    <LineChart data={dataset}>
    <CartesianGrid strokeDasharray="3 3"/>
    <XAxis dataKey={xKey} />
    <YAxis />
    {lineKeys.map((key,index) => {
      return <Line type="monotone" dataKey={key} key={index+Math.random()} stroke={color}/>
    })}
    <Tooltip/>
    </LineChart>
  </ResponsiveContainer>
  }
  

  </div>)

}

export default LineGraph