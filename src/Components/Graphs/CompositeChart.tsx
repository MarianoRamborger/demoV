import { CircularProgress } from '@mui/material';
import { ResponsiveContainer , CartesianGrid, XAxis, YAxis, Area, Tooltip } from 'recharts';

const CompositeGraph = ({
  loading =true, error=false, 
  width=600, height=350, color= "#8884d8", 
  dataset

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
      <CartesianGrid strokeDasharray="3 3"/>
    </ResponsiveContainer>
  }
  
  
  
  
  </div>)

}

export default CompositeGraph