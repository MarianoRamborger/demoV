import {
  ResponsiveContainer, Bar, CartesianGrid, 
  Tooltip, BarChart, Legend, XAxis 
  } from 'recharts';
import { legendFormatter, valueFormatter } from '../../lib/utils';

const BarGraph = ({
  barKeys, dataset, 
  width="100%", height=270
  }) => {
 
  return (<div style={{
    width: width,
    height: height,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 28,
    display: 'flex',
    flexFlow: "row wrap",
    alignItems: "center",
    justifyContent: "center"
  }}> 

   <ResponsiveContainer width="100%" height="100%">    
      <BarChart data={dataset} layout="horizontal">
        <CartesianGrid strokeDasharray="3 3" />
        <Legend  
          verticalAlign="top" 
          height={30}  
          align={"right"}
          formatter={(value) => { return legendFormatter(value) }}
          />
        <XAxis dataKey={"hours"}   />
        <Tooltip 
          formatter={(value, name) => {
          return [ value, legendFormatter(name.toString())
          ]}}
        />
        { barKeys.map((barKey,index) => {
        return <Bar dataKey={barKey.value} 
          fill={barKey.color}  
          key={index+Math.random()} 
          />
        })}
      </BarChart>
    </ResponsiveContainer>
  </div>)
}

export default BarGraph